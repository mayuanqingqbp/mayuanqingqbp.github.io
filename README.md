# GitHub 开源软件精选热榜 · v2

`kaibang.net` 的优化版站点。在原始发布包（单页 `index.html`）基础上做了功能修复、安全加固、性能优化、SEO 与无障碍改造，仍然是**纯静态站点**——不需要构建工具、不需要 npm，用任意静态服务器打开就能跑（字体和 CSP 需要 HTTP 环境，见第三节）。

- 收录条目：**447**（常用精选 221 + 小众优选 226）
- 分类：8 大类（开发 / AI / 设计 / 系统 / 效率 / 网络 / 媒体 / 自托管）
- 部署：Netlify（含 2 个 Serverless 函数 + 一个可选 GitHub Actions 构建工作流）

---

## 一、改了什么

### 1. 功能修复（P0）

| 问题 | 原版 | 现在 |
| --- | --- | --- |
| 热榜 / 版本号接口 404 | `netlify.toml` 把 `/api/*` 重写回自己，线上实际返回 `index.html`，`res.json()` 解析失败 | 改为 `/.netlify/functions/:splat`，`status 200` + `force`，前端能真正拿到 JSON |
| 未知路径返回首页（软 404） | 通配 `/* → /index.html` | 移除通配，未命中路径走 `404.html`，返回真 404 状态码 |
| 排序下拉自己跳回默认 | 重设 `innerHTML` 后丢失 `value` | 重建后显式写回 `sortEl.value` |
| 首屏渲染两次 | 数据脚本末尾 + DOMContentLoaded 各渲染一次 | 统一在 `DOMContentLoaded` 渲染一次 |
| 卡片下载链接在数据未就绪时丢失 | 下载数据在渲染之后才定义 | `assets/repos.js` 用 `<script src>` 在渲染前加载 |
| 闭源条目链接到不存在的仓库 | 拼出 `github.com/<闭源产品>` | 54 个 Proprietary 条目都补了 `official` 官网，卡片与详情页直连官网并标注"官方网站" |
| 重复条目 | MuseScore 出现两次 | 已去重 |
| 热榜分类全是 0 的胶囊 | 显示 4 个永远是 0 的分类 | 当前数据里计数为 0 的分类不渲染 |

### 2. 安全

- 所有动态字段（名称、描述、标签、许可证、README 文本、图标 URL 等）统一走 `esc()` 转义；`href` 走 `extUrl()` 白名单，杜绝 `javascript:` 注入。
- **CSP 完全去掉了 `script-src` 与 `style-src` 的 `'unsafe-inline'`**：可执行 JS 全部外置为同源文件（`/assets/theme.js`、`app.js`、`downloads.js`），JSON-LD 是非执行数据块不受约束；卡片圆点、语言色块、分类强调色改为 CSS 类名，运行时不再写 `style` 属性（仅用 `hidden` / `className`）。最终 CSP 为 `script-src 'self'; style-src 'self'`，**不再依赖任何 sha256 内联哈希**。
- 其余响应头：`X-Content-Type-Options`、`X-Frame-Options`、`Referrer-Policy`、`Permissions-Policy`、`COOP`、`frame-ancestors 'none'`（顺带挡住点击劫持，也意味着**不能再把这站放进 iframe 预览**）。
- 服务端函数加了方法校验（只收 GET/HEAD）、`x-content-type-options: nosniff`、错误响应 `no-store`，并把 CORS 从 `*` 收紧到同源。
- 2 个 Serverless 函数支持 `GITHUB_TOKEN`，避免匿名调用被 GitHub 限流（见第五节）。

### 3. 性能

- **HTML 体积 614 KB → 36 KB**：`DATA/NICHE/TAGS` 抽到 `data/tools-data.js`（291 KB），`REPOS_DL` 抽到 `assets/repos.js`（195 KB），44 KB 的 CSS 与 38 KB 的业务 JS 也外置；所有文件都能被 CDN 长期缓存。
- **静态资源内容指纹**：`?v=<内容哈希前 10 位>`，覆盖两份数据脚本、三个 JS、站点 CSS、两张 AVIF / WebP 收款码、两个字体。文件不变 URL 不变（继续吃一年 `immutable`），内容一变 URL 就变，不用手动清缓存。
- **首屏数据预加载**：`<link rel="preload" as="script">` 提前拉数据脚本与外置 JS，不再等解析到 `</body>` 附近才发现。
- **字体精简**：7 个字体文件 → 2 个可变字体，再按站点实际用到的 104 个字符做子集化：`archivo-latin-var.woff2` 34.9 → **20.5 KB**，`jetbrains-mono-latin-var.woff2` 31.4 → **24.4 KB**（保留可变字重轴），`font-display:swap`。
- **收款码 WebP + AVIF**：两张码用 `<picture>` 提供 AVIF（23.3 KB / 14.2 KB）并在不支持时回退 WebP，相比原 base64（115 KB）省约 78 KB；`loading="lazy"`。封面图保留 PNG（社交爬虫对 AVIF 支持参差）。
- **精选星标排序**：构建期抓取 235 个开源仓库的 stars 快照（`data/stars.js`，独立缓存），精选 / 小众列表可与热榜一样按星标排序，卡片直接显示 ★ 数；闭源条目无仓库不参与排序。快照是静态的，不依赖运行时 API。
- **分页渲染**：列表默认渲染 48 张卡片（热榜 30 行），"显示更多"按需追加，首屏 DOM 节点减少约 78%。
- **搜索防抖 160 ms**：输入过程不再逐字符重排整页。
- **热榜缓存改为 stale-while-revalidate**：10 分钟内的缓存直接用、不发请求；过期则先渲染旧数据再后台刷新；刷新失败继续展示并标"离线缓存"，失败后 60 秒内不再重试。
- **热榜增量合并**：刷新时按 `full_name` 复用已有行，只增删/移动变化的项，不再整屏 `innerHTML` 重建，避免滚动跳动与焦点丢失。
- 静态资源分级缓存：`/fonts/*`、`/assets/*`、`/data/*` 一年 immutable；HTML `max-age=0, must-revalidate`；`/tools/*` 一小时 + `stale-while-revalidate`。
- 移除运行时 JSON-LD 生成器、`</html>` 之后的游离脚本、Netlify HUD 的 `MutationObserver` 监听。

### 4. SEO

- 修正标题 / description / canonical / OG / Twitter 卡片，统一指向 `https://kaibang.net/`，数量口径统一为 447。
- **447 个独立工具页**：`/tools/<slug>.html`，每页含 `SoftwareApplication` + `BreadcrumbList` 结构化数据、canonical、OG、同类工具内链。
- **`all-tools.html`**：全部工具的分类索引，含 `CollectionPage` + `ItemList`（447 项）。
- **`sitemap.xml`**：468 条 URL（首页 + 全工具索引 + 指南索引 + 8 分类页 + 10 指南页 + 447 工具页），`lastmod` 按内容来源文件的修改时间生成。
- `robots.txt` 指向 sitemap 并 `Disallow: /api/`；`404.html`、`manifest.webmanifest`、重绘的 `og-cover.png`（1200×630）。
- 首页补 `FAQPage` 结构化数据；404 页带搜索框，首页读 `?q=` 预填——搜索链接可分享，坏链接也有自救路径。

### 5. 无障碍与移动端

- 跳过导航链接、`main#main`、`h1` 层级、`role="status"` 的数量播报、字段集式的标签组 `role="group"`。
- 分类胶囊用 `aria-pressed`，标签页用真实 `aria-current`。
- 详情弹窗：焦点陷阱、Esc 关闭、关闭后焦点还给触发按钮、背景区域 `inert` + `aria-hidden`、`100dvh` 适配移动端地址栏。
- 全屏按钮改成右下角 40 px 圆形按钮，移动端隐藏；主题按钮图标始终初始化。
- 移动端标签栏横向滚动 + 紧凑内边距，390 px 宽度下无横向溢出。
- 全局 `:focus-visible` 焦点环、`prefers-reduced-motion` 降级、`no-scroll` 锁滚动。

### 6. 数据质量

- 全部闭源条目补齐官网；`licLabel()` 把 `Proprietary` 显示为"闭源"，`isClosed()` 统一判定。
- 许可证筛选用正则精确匹配：`MIT` 不会再误伤 `MIT OR Apache-2.0` 之外的内容，`GPL` 不会误伤 `AGPL`。
- 静态页只在许可证是合法 SPDX 标识符时才输出 `spdx.org` 链接（17 个非标准许可证已跳过）。

---

## 二、目录结构

```
kaibang-v2/
├─ index.html                 # 单页应用主体（36 KB，无内联脚本 / 内联样式）
├─ all-tools.html             # 全部工具索引（生成）
├─ 404.html                   # 自定义 404 + 搜索框（生成）
├─ tools/                     # 447 个工具详情页（生成）
├─ categories/                # 8 个分类页 dev/ai/…/host.html（生成）
├─ guides/                    # 6 篇指南 + index.html 索引（生成，芯片直链工具页）
├─ assets/
│  ├─ theme.js                # 主题恢复（head 内阻塞执行，防闪白）
│  ├─ app.js                  # 主业务逻辑（38 KB）
│  ├─ downloads.js            # 下载助手
│  ├─ site.css                # 首页样式（44 KB，含类名化的动态色块规则）
│  ├─ tools.css               # 静态页共享样式（生成）
│  ├─ repos.js                # 下载资产数据 REPOS_DL（195 KB）
│  ├─ qr-wechat.avif / .webp
│  └─ qr-alipay.avif / .webp
├─ data/
│  ├─ tools-data.js           # DATA / NICHE / TAGS，数据唯一来源（291 KB）
│  ├─ stars.js                # GitHub stars 快照（update-stars.ps1 生成）
│  ├─ alternatives.js         # 闭源→开源替代映射（人工整理）
│  └─ audit-report.json       # 数据体检报告（audit-data.ps1 生成）
├─ sw.js                      # Service Worker（构建生成，PWA 离线缓存）
├─ fonts/
│  ├─ archivo-latin-var.woff2         # 20.5 KB（104 字符子集）
│  └─ jetbrains-mono-latin-var.woff2  # 24.4 KB
├─ netlify/
│  └─ functions/
│     ├─ trending.mjs         # GET /api/trending
│     └─ releases.mjs         # GET /api/releases
├─ scripts/
│  ├─ build-static.ps1        # 一条命令重建所有生成物
│  ├─ check-build.ps1         # 部署前自检
│  ├─ audit-data.ps1          # 数据体检：许可证/链接/stars/版本配置
│  └─ update-stars.ps1        # 更新 stars 快照（批量 GitHub API）
├─ .github/workflows/
│  ├─ build-static.yml        # 推送时自动重建并提交（GitHub Actions）
│  └─ audit-data.yml          # 每月数据体检，发现问题自动开 issue
├─ netlify.toml               # 路由 / 安全头（CSP 由脚本写） / 缓存头
├─ _redirects                 # 旧域名 301 + 旧 slug 映射（生成）
├─ robots.txt
├─ sitemap.xml                # 生成
├─ manifest.webmanifest       # 生成
├─ og-cover.png               # 1200×630 社交分享封面
├─ apple-touch-icon.png
└─ favicon.svg
```

**数据流向**：`data/tools-data.js` 是唯一数据源 → 首页 `app.js` 直接读取 → `scripts/build-static.ps1` 也读它，生成静态页、sitemap、`_redirects`、资源指纹与 CSP。

---

## 三、本地预览

必须用 HTTP 服务器，不要直接双击 `index.html`：字体用绝对路径 `/fonts/...`，`file://` 下会解析成 `C:/fonts/...` 而 404；页面带 CSP，本地测试要拿到同样的响应头才接近线上。

```bash
npx netlify dev          # 连函数一起跑，最接近线上
python -m http.server 8765
```

没有 Node / Python 时可用仓库自带的 PowerShell 片段（见旧版说明或 `scripts/`），关键是**把 `netlify.toml` 里的 CSP 一并发出去**。访问 <http://127.0.0.1:8765/>。本地没有 Netlify 函数，热榜走 GitHub 直连兜底，可能受未登录限流——预期行为。

---

## 四、改完数据 / 脚本之后

一条命令重建全部生成物：

```powershell
powershell -ExecutionPolicy Bypass -File scripts\build-static.ps1
powershell -ExecutionPolicy Bypass -File scripts\check-build.ps1   # 部署前自检
```

输出示例：

```
generated: 447 tool pages, all-tools.html, sitemap, 404, manifest
sample slug: vs-code -> https://kaibang.net/tools/vs-code.html
unique slugs: 447
asset versions: tools.css=9db0492772
redirects: 4 lines / slug aliases: 0
CSP: 0 inline script hashes
```

它会重写：`tools/*.html`、`all-tools.html`、`sitemap.xml`、`404.html`、`manifest.webmanifest`、`assets/tools.css`、`_redirects`，给 `index.html` 里的资源加指纹，并把 CSP 写回 `netlify.toml`。

> ✅ 脚本已全部外置，CSP 不再使用 sha256 内联哈希，**改 JS/CSS 不需要再手动同步哈希**；但仍需重跑构建脚本更新指纹，否则浏览器会拿旧缓存。自检脚本会检查这一点。

约定：

- **slug 算法**：小写 → 非 `[a-z0-9中文]` 变 `-` → 去首尾 `-` → 截断 64 字符；重名自动加 `-2`。
- **改名要登记旧地址**，在 `build-static.ps1` 顶部的 `$SLUG_ALIASES` 里加映射，自动生成 301。
- `data/tools-data.js` 里的字面量不要用函数调用 / 模板字符串 / 注释块，解析器只处理裸对象。
- 新增条目必须带 `desc`；闭源条目必须带 `official`。

---

## 五、部署到 Netlify

### 用 Git 部署（不能拖拽）

`/api/trending`、`/api/releases` 是 Netlify Functions，拖拽不会打包 `netlify/functions/`。用 Git 连接仓库，构建设置留空（生成物都已提交），**Publish directory** 设为 `.`，Functions 目录由 `netlify.toml` 指定。部署后绑定 `kaibang.net`。

### 自动重建（可选，推荐）

仓库已带 `.github/workflows/build-static.yml`：当 `data/`、`assets/`、`fonts/`、`scripts/`、`index.html` 等变化时，用 `windows-latest` + pwsh 自动跑 `build-static.ps1` 与 `check-build.ps1`，把生成物提交回仓库（`[skip ci]` 防循环），从而触发 Netlify 重新部署。这样就不会忘记重跑构建脚本。不需要 GitHub Actions 的话忽略此文件即可。

### 环境变量

Netlify → Site configuration → Environment variables，加 `GITHUB_TOKEN`（classic PAT，**不需要任何 scope**）：Search API 限额 10 → 30 次/分，REST API 60 → 5000 次/小时。不配也能跑，但冷启动抓取时容易撞匿名限额。

### 关掉 Netlify HUD

原版 HUD 注入的 `MutationObserver` 已在 CSS 里隐藏 `#nl-badge-frame`，且 CSP 只放行同源脚本（注入脚本会被拦）。最干净的做法是在 Site configuration → Build & deploy → Post processing 里关掉 Netlify Drawer / HUD。要用 Snippet injection 加统计脚本时，记得把它放进 `netlify.toml` 的 `script-src`（同源或加 sha256）。

### 部署后自检

```bash
curl -sI https://kaibang.net/ | grep -i content-security-policy   # 应含 script-src 'self'; style-src 'self'
curl -i https://kaibang.net/api/trending | head -20               # 200 + application/json
curl -i https://kaibang.net/not-a-real-page | head -5             # 404
curl -s https://kaibang.net/sitemap.xml | grep -c '<loc>'         # 468
```

浏览器控制台 Filter 输入 `Content Security`，刷新首页——应该一条都没有。最后在 Google Search Console / Bing 提交 sitemap。

---

## 六、验证记录

- W3C Nu Validator：`index.html` / `all-tools.html` / `404.html` / `tools/figma.html` 均 **0 error 0 warning**。
- 全部 447 个工具页 + 8 分类页 + 11 指南页无失效站内链接、无解析失败的 JSON-LD；`sitemap.xml` 468 条。指南正文的内链芯片全部转成工具页静态链接。
- `check-build.ps1`：CSP 0 个内联哈希、22 处资源指纹全部与文件内容一致，生成物齐全。
- 带 CSP 的真实浏览器测试（本地服务器按 `netlify.toml` 发头，CSP 为 `script-src 'self'; style-src 'self'`）：
  - **零 CSP 违规**；首页 48 卡、主题脚本、外链 CSS 全部生效。
  - 子集化后 `document.fonts.check('800 48px Archivo')` 与 JetBrains Mono 均为 true，标题渲染正常。
  - `<picture>` 优先选中 AVIF：`qr-wechat.avif` / `qr-alipay.avif` 均 `complete=true` 且 naturalWidth 正确。
  - 全部带 `?v=` 指纹的资源（JS / CSS / 字体 / 图片）返回 200。
  - 热榜 30 行、`data-repo` 键存在、增量合并生效；`?q=neovim` 预填并命中 1 条。
  - 工具页 h1 / JSON-LD / 主题正确；404 页搜索表单 `action="/"`。
- 截图核对：桌面浅色、390 px 移动端、赞助弹窗（AVIF 收款码）、404 页。

---

## 七、6 项后续优化 —— 已全部实施

1. ✅ **图片转 AVIF**：两张收款码用浏览器内 WASM（jsquash/libavif）离线转码为 AVIF，`<picture>` 带 WebP 回退，共省约 78 KB；封面图保留 PNG。
2. ✅ **字体子集化**：用 fonttools（`pyftsubset`）按站点实际用到的 104 个字符裁剪，保留可变字重轴，两个字体共省约 21 KB，并同步收窄 `unicode-range`。
3. ✅ **内联脚本外置**：主题 / 主逻辑 / 下载助手拆成 `/assets/*.js`，HTML 从 120 KB 降到 36 KB，**彻底消除 CSP 哈希同步约束**。
4. ✅ **去掉 `style-src 'unsafe-inline'`**：动态色块改为 CSS 类名（`.dot--*` / `.cat-card--*` / `.swatch--*`），运行时样式写入清零，CSP 现为 `script-src 'self'; style-src 'self'`。
5. ✅ **构建命令托管化**：新增 GitHub Actions 工作流，推送时自动重建 + 自检 + 提交生成物。
6. ✅ **热榜增量更新**：按 `full_name` 键复用行节点，只增删/移动变化项，避免整屏重排。

---

## 八、最初建议清单的缺口补齐

针对更早那份 10 条建议清单里标注的两个小缺口：

- **第 5 条 · 精选星标与热度排序**：已补齐。新增构建期 stars 快照 `data/stars.js`（GitHub Search API 批量抓取，235/356 个开源仓库命中，其余为闭源/已改名仓库），精选与小众 tab 的排序下拉加入"按星标 ↓"，卡片显示 ★ 数。切换标签时排序状态保留。
- **第 7 条 · 关掉 Netlify HUD**：代码层已做到万无一失——CSP 只放行同源脚本（注入的 HUD 脚本被直接拦截）、CSS 对首页与静态页双重隐藏 `#nl-badge-frame`、首页移除了 Netlify 的营销注释。**唯一剩余的一步需要在 Netlify 后台手动完成**：Site configuration → Build & deploy → Post processing，关闭 Netlify Drawer / HUD 开关（这是账号设置，无法通过代码代做）。
- W3C 校验仍为 0 error / 0 warning。

---

## 九、最初建议清单第 8 项（预渲染分类页 / 指南页）

- ✅ **分类页**：新增 `/categories/<key>.html` 共 8 页（dev/ai/design/sys/prod/net/media/host），每页列出该分类全部工具、含 `CollectionPage` + `BreadcrumbList` JSON-LD、canonical、分类互导导航。
- ✅ **指南页**：从首页指南区提取 6 篇，生成 `/guides/g01..g06.html` + `/guides/index.html` 索引。正文里 47 个 `<a class="gl" data-repo="owner/name">` 芯片全部转成对应工具页链接（按 repo 查 slug），静态页无需 app.js 即可点击跳转。
- ✅ **sitemap 扩容**：362 → 465 条，纳入分类页、指南页与新增工具页。
- ✅ **导流**：首页 footer、全部工具页、404、分类页、指南页的导航互相链接；工具页面包屑的分类项改为指向分类页；`_redirects` 加 `/guides/ → /guides/index.html` 200 规则。
- W3C 校验：8 类代表性页面（首页/索引/404/工具页/2 分类页/3 指南页）均 0 error 0 warning；ego-browser 实测分类页链接、指南芯片跳转、导航、主题全部正常。

---

## 十、最初建议清单第 9 项（数据构建流水线）

新建两个可重复运行的脚本 + 一个定时工作流：

- ✅ **`scripts/audit-data.ps1`**：数据体检。解析 447 条数据，检查 ① 许可证合法性（17 个非标准值列出供复核，如 `MIT / Apache-2.0`、`Nmap License`）② stars 快照覆盖率与陈旧天数 ③ `releases.mjs` 的仓库覆盖数 ④（`-Full` 模式）批量 HEAD 校验全部 repo + official 链接。输出 `data/audit-report.json` + 控制台摘要。默认 quick 模式不发网络请求。
- ✅ **`scripts/update-stars.ps1`**：更新 stars 快照。用单仓库 REST API 逐个抓取（受 core 限额约束：匿名 60/小时，配 `GITHUB_TOKEN` 5000/小时），限额耗尽时保存进度，`-FillOnly` 下次续抓；404 仓库记入缺失清单。产物 `data/stars.js`，前端精选按星标排序直接读它。改完需重跑 `build-static.ps1` 更新指纹。
- ✅ **`.github/workflows/audit-data.yml`**：每月 1 号跑全量体检，发现失效链接/陈旧 stars/非标准许可证时自动开 issue 提醒（不直接改数据，更新由人确认后执行）。
- 版本更新仍由 `netlify/functions/releases.mjs` 在服务端实时抓取（46 个二进制直下仓库），流水线只校验配置覆盖，不重复造轮子。
- 注意：闭源/已改名/已删除的仓库抓不到 stars 属正常，体检报告会列出缺失清单供人工判断；GitHub 匿名 REST 限额 60 次/小时（配 `GITHUB_TOKEN` 5000/小时），脚本在限额耗尽时保存进度，下次 `-FillOnly` 续抓。
- **全量体检与清洗结果**（`audit-data.ps1 -Full`，414 链接）：首次检出 123 个失效链接，经两轮清洗降到 88 个。
  - 已修复 25 个失效仓库路径（均用 GitHub API 验证存在）：`GIMP/gimp → GNOME/gimp`、`nodejs/npm → npm/cli`、`joplin/app → laurent22/joplin`、`openbsd/openssh → openssh/openssh-portable`、`kodi/kodi → xbmc/xbmc`、`tcpdump/tcpdump → the-tcpdump-group/tcpdump` 等。
  - 9 个 AI SaaS（Replicate / OpenRouter / Baseten 等）原被误标 MIT + 假仓库，已改为 `Proprietary` + 官网，卡片走"访问官方网站"而非 404 仓库。
  - 剩余 88 个中，约 65 个是闭源条目的占位 repo（本就 404、走 official 官网，属预期），约 20 个是仍在迁移的真实开源仓库（如 nftables / Forgejo / Headscale / mtr），待 GitHub API 限额恢复后处理。12 个 403 是 GitHub 反爬 HEAD，2 个超时，均非真实失效。
  - 数据清洗过程中曾因脚本 bug 破坏数据，已从桌面原始 `发布.zip` 完整恢复并复核：448 条 / 63 闭源 / 63 official / 349 正常 repo / 360 intro+features，全部一致。

---

## 十一、最初建议清单第 10 项（三个功能升级）

- ✅ **闭源 → 开源替代**：`data/alternatives.js` 给出 54 个闭源条目的开源替代建议（人工整理，替代目标均校验存在于数据中）。首页闭源卡片显示"开源替代 · XXX ↗"芯片、详情弹窗显示建议条；静态工具页同样生成替代链接（构建脚本读取映射写入 HTML）。均为站内链接，可点击直达替代品档案。
- ✅ **收藏 / 对比**：纯前端、localStorage 持久化（`osc-fav-v1` / `osc-compare-v1`），不上传不追踪。卡片上有 ♡ 收藏与 ⚖ 对比按钮；"♡ 收藏"筛选可只看收藏；对比最多 4 个，面板按分类/语言/许可证/星标/替代/简介逐行对比。
- ✅ **PWA 离线**：构建脚本生成 `sw.js`（Service Worker），预缓存首页 + 21 个带指纹的核心资源（版本哈希随资源变化自动更新）。网络优先渲染页面、失败回落缓存首页；静态资源缓存优先。`netlify.toml` 给 `/sw.js` 加了 `max-age=0, must-revalidate` 确保能检查更新。manifest 已完整（standalone / 图标 / start_url）。
- 验证：ego-browser 实测——Figma 卡片/弹窗显示 Penpot 替代；收藏后筛选正确（localStorage 持久化）；对比面板 6 行表格正常；SW 注册并控制页面、离线刷新仍渲染 48 卡片；原有搜索/排序/热榜/分类页/指南页无回归；W3C 0 error 0 warning，check-build 20 处指纹一致。
- 注意：替代建议是主观整理，不一定一一对应，界面已标注；PWA 离线在 Netlify HTTPS 域名下生效（本地 127.0.0.1 也已验证）。
---

## 十二、数据清洗 + 扩充到 448（2026-11-18）

**清洗**：全量链接体检从 123 个失效降到 88 个。修复 25 个失效仓库路径（均经 GitHub API 验证），9 个 AI SaaS 从误标 MIT 改为 Proprietary + 官网。数据曾因脚本 bug 破坏，已从桌面原始 `发布.zip` 完整恢复并复核。

**扩充**：从 360 → **448** 条（+88）。新增条目重点补 prod/media/net/sys 四个薄弱分类，每条都经 GitHub Search API 验证仓库真实存在，且带完整的 desc / intro / features / tags / repo。
- 分布：prod +30、net +23、sys +20、media +15
- 全部加入 NICHE（小众优选，编号 222–448）与 TAGS 标签映射
- 新增工具页 448 个、sitemap 465 条、all-tools 索引 448 项
- **全局搜索**：搜索时跨精选 + 小众，在任一 tab 都能搜到全部 448 条；编号正确（精选 001–221、小众 222–448）
- 验证：check-build 20 处指纹一致、W3C 6 类页面 0 error 0 warning、ego-browser 实测新条目搜索/编号/工具页/分类页全部正常

**后续润色已完成**：88 条新增条目的 intro/features 已全部逐条重写为独特的、有信息量的介绍（不再是模板化尾巴），覆盖各自的定位、核心能力与适用场景。check-build + W3C + 浏览器实测全部通过。数据仍为静态快照，stars 快照待 GitHub 限额恢复后可用 `update-stars.ps1 -FillOnly` 补抓。

**美化与统一排版**：静态页（tools/categories/guides/all-tools/404）已与首页统一设计语言——点状纹理背景、sticky 毛玻璃 header + 品牌 logo、1200px 宽度、圆润卡片与绿色按钮、一致的字体栈。改动集中在 `build-static.ps1` 的 tools.css 模板与 HTML 模板，重建即全站生效。

---

## 十三、收尾轮（2026-11-20，工作副本 `kaibang-v2-p0`）

> 本节记录的是在副本 `kaibang-v2-p0` 中完成的收尾改动，原目录 `kaibang-v2` 未改动。

- **数量不再硬编码**：`build-static.ps1` 从数据源派生条目数并回填 `index.html` 文案与 manifest；`check-build.ps1` 的 448/465 改为按数据源与生成物校验。增减条目不再需要手改多处常数。
- **热榜分类补齐 8 类**：前端与 `trending.mjs` 共用同一套 `CATEGORIZE_RULES`，自检校验两处一致；短词用词边界匹配避免误判。
- **PWA 离线扩展**：预缓存补入 `tools.css`、`static.js` 及分类/指南页；导航请求改为网络优先、成功按 URL 缓存、离线先回落自身页面。
- **`releases.mjs` 仓库清单自动生成**：构建期从 `REPOS_DL` 的 `type=A` 生成，自检校验差集。
- **下载加速双线路**：`MIRROR_HOSTS` 提供两条镜像互为备用，另有 GitHub Releases 兜底。
- **sitemap lastmod**：按内容来源文件（数据 / index.html）的修改时间生成，不再每次构建把所有 URL 标成"今天"。
- **指南索引页 SEO**、`X-Frame-Options=DENY`、`LICENSE`、弹窗焦点陷阱、自检覆盖 guides/categories 等规范项一并完成。
- **新增 4 篇指南**（g07–g10：效率 / 网络 / 媒体 / 自托管），指南页 7 → 11；构建脚本的篇数文案改为动态。
- **拼音首字母搜索**：构建期由 GB2312 排序特性生成 `data/pinyin.js`（1176 字映射），如"终端 → zd"，无需第三方库。
- **死链清洗**：6 个仓库路径经 GitHub API 验证后更正；15 个项目迁出 GitHub 或官网失效，改为已验证官网、清空失效 `repo`。`mtr` 官网 `bitwizard.nl/mtr` 可用；**Vectr 官网与仓库均不可访问且无可用替代地址，已从数据源、下载数据、TAGS、工具页、索引与 sitemap 中彻底移除**，条目数 448 → 447、sitemap 469 → 468。
- **TAGS 映射修复**：仓库路径变更后，TAGS 里的键同步重命名；清空 `repo` 的 15 条改用 `name:xxx` 键，`app.js` 的标签匹配与"未标注"计数同步支持兜底查找，未标注条目回到 0（筛选提示消失）。
- **stars 快照**：239 → 359（`update-stars.ps1` 修复了把偶发 403 误判为配额耗尽的 bug；剩余未覆盖项均为闭源/已改名仓库）。
- 最终自检：`build-static.ps1` / `check-build.ps1` 全绿；全量体检 512 条链接、73 条失效（其中 50 条为闭源占位仓库、20 条为官网反爬/超时）。