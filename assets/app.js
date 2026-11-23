
/* ============================================================
   数据区 · 精选 —— 加软件只需在下面数组里加一个对象。
   字段：name / cat(dev|ai|design|sys|prod|net|media|host) / desc / intro(详细介绍) / features[](功能特点) / tags[] / lang / lic / repo(owner/name) / official(闭源官网)
   ============================================================ */
CATS = {
  dev:    { label:"开发工具",   icon:"💻", desc:"代码编辑器、API工具、数据库管理…" },
  ai:     { label:"AI 与数据",  icon:"🤖", desc:"大模型客户端、AI绘画、提示词工具…" },
  design: { label:"设计与创意", icon:"🎨", desc:"UI/UX、白板、图标库、开源剪辑…" },
  sys:    { label:"系统工具",   icon:"⚙️", desc:"清理、监控、驱动管理、卸载工具…" },
  prod:   { label:"效率与办公", icon:"⚡", desc:"笔记、待办、PDF处理、思维导图…" },
  net:    { label:"网络与安全", icon:"🛡️", desc:"代理工具、密码管理、抓包、防火墙…" },
  media:  { label:"媒体与娱乐", icon:"🎬", desc:"播放器、音乐软件、播客、家庭影音…" },
  host:   { label:"自托管/NAS", icon:"🗄️", desc:"网盘、RSS阅读器、Docker面板…" }
};
const LANG_COLOR = { TypeScript:"#3178c6", Rust:"#dea584", Go:"#00add8", Python:"#3572A5", C:"#555555", "C++":"#f34b7d", Clojure:"#db5855", Ruby:"#cc342d", Zig:"#ec915c", Swift:"#f05138", JavaScript:"#f1e05a", "C#":"#178600", PHP:"#4F5D95", Java:"#b07219", Kotlin:"#A97BFF", Haskell:"#5e5086", "Objective-C":"#438eff", Erlang:"#B83998", Shell:"#89e051", Perl:"#0298c3" };
/* 工具数据已拆到 /data/tools-data.js（独立缓存；?v= 指纹由 build-static.ps1 维护） */
const TAG_GROUPS=[
  {key:'plat',label:'平台',tokens:[['win','Windows'],['mac','macOS'],['linux','Linux'],['android','Android'],['ios','iOS'],['web','Web']]},
  {key:'feat',label:'特性',tokens:[['cross','跨平台'],['local','本地优先'],['minimal','极简'],['noads','无广告'],['zh','支持中文'],['cli','CLI']]},
  {key:'lic',label:'授权',tokens:[['MIT','MIT'],['GPL','GPL'],['Apache 2.0','Apache 2.0']]},
];
/* 授权匹配：按 lic 原文判断。MIT 命中 "MIT / Apache-2.0" 等双许可；
   GPL 用 (^|[^A-Za-z]) 前缀避免误伤 AGPL；Apache 2.0 精确匹配 Apache-2.0。 */
const LIC_TEST={
  MIT:l=>/(^|[^A-Za-z])MIT/.test(l||''),
  GPL:l=>/(^|[^A-Za-z])GPL/.test(l||''),
  "Apache 2.0":l=>/Apache-2\.0/.test(l||''),
};
/* 标签映射：正常按 repo 查；清掉失效 repo 的条目用 name:xxx 兜底 */
function tagList(d){return TAGS[d.repo]||TAGS['name:'+d.name]||[];}
function passTags(d){
  const sel=state.tags,t=tagList(d);
  if(sel.plat.length&&!sel.plat.some(p=>t.includes(p)))return false;
  if(sel.feat.length&&!sel.feat.some(f=>t.includes(f)))return false;
  if(sel.lic.length&&!sel.lic.some(l=>LIC_TEST[l](d.lic)))return false;
  return true;
}
NICHE.forEach((d,i)=>{d._i=i;d._niche=true;});

/* 精选条目的星标数：来自构建期抓取的 data/stars.js 快照（full_name → stars）。
   闭源条目没有 repo、无星标，排序时按 0 处理排在末尾。STARS 未加载时全部降级为 0。 */
const STAR_MAP=(typeof STARS!=='undefined'&&STARS)?STARS:{};
const ALT_MAP=(typeof ALTERNATIVES!=='undefined'&&ALTERNATIVES)?ALTERNATIVES:{};
DATA.concat(NICHE).forEach(d=>{ if(d.repo&&STAR_MAP[d.repo]!=null&&!d.live) d.stars=STAR_MAP[d.repo]; });
/* 闭源条目的开源替代：按名称找到替代品，返回 {name, slug} 或 null（NAME_TO_SLUG 在下方 SLUGS 循环后建立） */
function altOf(d){
  if(!isClosed(d))return null;
  const name=ALT_MAP[d.name];
  if(name&&NAME_TO_SLUG[name])return {name:name,slug:NAME_TO_SLUG[name]};
  return null;
}

/* ============================================================
   实时热榜 —— 抓取 GitHub Search API（近 30 天新上榜、1500+ 星）
   ============================================================ */
const TRENDING_QUERY = (()=>{ const d=new Date(); d.setDate(d.getDate()-30); return `created:>${d.toISOString().slice(0,10)} stars:>1500`; })();
const CACHE_KEY='osc-trending-v1', CACHE_TTL=10*60*1000;

// 热榜分类规则：与 netlify/functions/trending.mjs 保持完全一致（check-build.ps1 会校验）
// 短词用词边界匹配，避免 "ai" 命中 "email"/"available" 这类误判。
const CATEGORIZE_RULES=[
  ['ai',['ai','llm','llms','agent','gpt','inference','diffusion','embedding','neural','machine learning','deep learning','chatbot','whisper','tts','transformer','openai','mistral','llama','rag','reasoning','multimodal','ollama','comfyui','langchain','huggingface','vector database','stable diffusion']],
  ['design',['design','figma','vector','canvas','3d','blender','gimp','whiteboard','diagram','drawing','photo','image-edit','image editor','sketch','illustrat','penpot','excalidraw','ux','krita','inkscape','svg','icon','font','color palette']],
  ['media',['video','audio','music','player','podcast','media','stream','ffmpeg','yt-dlp','mpv','vlc','spotify','youtube','subtitle','karaoke','lyrics','iptv','gallery','image viewer']],
  ['net',['network','security','vpn','proxy','tunnel','firewall','router','wifi','wireless','packet','sniff','nmap','dns','tls','ssl','password','credential','pentest','malware','wireguard','openvpn','clash','sing-box','nginx','caddy']],
  ['prod',['note','notes','todo','task','pdf','markdown','wiki','mindmap','calendar','office','spreadsheet','presentation','obsidian','joplin','logseq','anki','journal','planner','bookmark','writing','document','translate']],
  ['host',['self-host','selfhost','nas','homelab','proxmox','truenas','unraid','synology','nextcloud','jellyfin','home-assistant','homeassistant','rss','docker','container','kubernetes','k8s','portainer','authelia','traefik','seedbox']],
  ['dev',['editor','ide','compiler','debug','git','language','framework','api','code','lint','formatter','test','npm','cargo','regex','json','yaml']],
  ['sys',['server','sync','backup','monitor','filesystem','database','kernel','driver','disk','boot','system','terminal','shell','cli','process','cron','logging','syslog','benchmark','hardware','systemd','iso','registry']]
];
function categorize(name, desc, topics){
  const t=((name||'')+' '+(desc||'')+' '+(topics||[]).join(' ')).toLowerCase();
  const has=kw=>(kw.length<=2&&/^[a-z]+$/.test(kw))
    ? new RegExp('(^|[^a-z0-9])'+kw+'([^a-z0-9]|$)').test(t)
    : t.includes(kw);
  for(const pair of CATEGORIZE_RULES){ if(pair[1].some(has)) return pair[0]; }
  return 'dev';
}
function mapRepo(r){
  const name=r.full_name;
  return {
    name, full_name:name,
    desc: (r.description||'').slice(0,140) || '暂无描述',
    cat: categorize(name, r.description, r.topics),
    lang: r.language||'—',
    stars: r.stargazers_count||0,
    created: (r.created_at||'').slice(0,10),
    url: r.html_url,
    tags: (r.topics||[]).slice(0,4),
    live:true,
  };
}
/* 热榜缓存策略
   1. 10 分钟内的缓存：直接用，不发请求。
   2. 缓存过期：先拿旧数据渲染，同时后台刷新（stale-while-revalidate），成功后静默替换。
   3. 刷新失败但有旧数据：继续展示，并标注「离线缓存」，而不是整页只剩一个报错。
   4. 手动点「刷新热榜」：强制走网络，忽略缓存。 */
function readTrendCache(){
  let c=null;
  try{ c=JSON.parse(localStorage.getItem(CACHE_KEY)); }catch(e){}
  return (c && c.items && c.items.length) ? c : null;
}

let trendInflight=null, trendFailAt=0;
// 后台刷新失败后 60 秒内不再自动重试，避免切标签反复打到限流接口；手动「刷新热榜」不受限制
const TREND_RETRY_GAP=60000;
// 真正走网络：优先 Netlify Function，失败回退 GitHub API。并发调用共享同一个 Promise。
function refreshTrending(force){
  if(trendInflight) return trendInflight;
  trendInflight=(async()=>{
    let res=null;
    // 只有 Netlify 域名才存在 /api 函数。Pages / 本地预览没有函数，
    // 直接跳过该请求，避免控制台出现无意义的 404。
    var hasFn=/(?:^|\.)netlify\.app$/i.test(location.hostname);
    if(window.USE_NETLIFY_API===true) hasFn=true;
    if(hasFn){
      try { res = await fetch('/api/trending'+(force?'?refresh=1':'')); } catch(e) { res = null; }
    }
    // 服务端函数未部署时重定向会返回 200+HTML；content-type 不是 JSON 就按失败处理，走 GitHub 直连兜底
    if(res && res.ok && !/json/i.test(res.headers.get('content-type')||'')) res = null;
    if(!res || !res.ok){
      // 回退：直连 GitHub API（本地文件预览或函数尚未部署时）
      const url='https://api.github.com/search/repositories?q='+encodeURIComponent(TRENDING_QUERY)+'&sort=stars&order=desc&per_page=60';
      res=await fetch(url,{headers:{'Accept':'application/vnd.github+json','User-Agent':'os-catalog'}});
    }
    if(!res.ok) throw new Error('Trending fetch '+res.status);
    const data=await res.json();
    const out={ts:Date.now(), items:(data.items||[]).map(mapRepo)};
    try{localStorage.setItem(CACHE_KEY,JSON.stringify(out));}catch(e){}
    return out;
  })().finally(()=>{trendInflight=null;});
  return trendInflight;
}

function fetchTrending(force){
  const tag=d=>Object.assign({},d,{stale:false,offline:false});
  if(force) return refreshTrending(true).then(tag);
  const cached=readTrendCache();
  if(!cached) return refreshTrending(false).then(tag);
  if(Date.now()-(cached.ts||0) < CACHE_TTL) return Promise.resolve(tag(cached));
  // 过期：先给旧数据，后台刷新交给 loadTrending
  return Promise.resolve(Object.assign({},cached,{stale:true,offline:false}));
}

/* ============================================================
   渲染与交互
   ============================================================ */
const grid=document.getElementById('grid');
const pillsEl=document.getElementById('pills');
const qEl=document.getElementById('q');
const sortEl=document.getElementById('sort');
const langEl=document.getElementById('lang');
const starsEl=document.getElementById('stars');
const countEl=document.getElementById('count');
const updatedEl=document.getElementById('updated');
const refreshEl=document.getElementById('refresh');
const tagRowEl=document.getElementById('tagRow');

const state={tab:'curated',cat:'all',q:'',lang:'all',minStars:0,sort:'default',trending:null,limit:0,favOnly:false,tags:{plat:[],feat:[],lic:[]}};

/* ============================================================
   收藏 / 对比 —— 纯前端，localStorage 持久化（不上传、不追踪）
   ============================================================ */
const FAV_KEY='osc-fav-v1', CMP_KEY='osc-compare-v1';
function loadSet(key){try{const v=JSON.parse(localStorage.getItem(key)||'[]');return new Set(Array.isArray(v)?v:[]);}catch(e){return new Set();}}
function saveSet(key,s){try{localStorage.setItem(key,JSON.stringify([...s]));}catch(e){}}
let FAVS=loadSet(FAV_KEY);
let CMP=loadSet(CMP_KEY);

function activeSource(){
  if(state.tab==='trending') return state.trending ? state.trending.items : [];
  if(state.tab==='niche') return NICHE;
  return DATA;
}

function buildPills(){
  const src=activeSource();
  const counts={all:src.length};
  src.forEach(d=>counts[d.cat]=(counts[d.cat]||0)+1);
  const order=['all','dev','ai','design','sys','prod','net','media','host'];
  pillsEl.innerHTML='';
  order.forEach(key=>{
    // 当前页没有该分类就隐藏，避免「实时热榜」出现 4 个永远是 0 的分类
    if(key!=='all'&&!counts[key])return;
    const b=document.createElement('button');
    b.type='button';
    b.className='pill'+(key===state.cat?' active':'');
    b.dataset.cat=key;
    b.setAttribute('aria-pressed',key===state.cat?'true':'false');
    const label=key==='all'?'全部':CATS[key].label;
    b.innerHTML=`<span class="dot${key!=='all'?' dot--'+key:''}"></span>${label}<span class="count">${counts[key]||0}</span>`;
    b.onclick=()=>{state.cat=key;state.limit=pageSize();buildPills();render();};
    pillsEl.appendChild(b);
  });
}

function buildLangOptions(){
  const src=activeSource();
  const langs=[...new Set(src.map(d=>d.lang).filter(l=>l&&l!=='—'))].sort();
  const cur=langEl.value;
  langEl.innerHTML='<option value="all">全部语言</option>'+langs.map(l=>`<option value="${esc(l)}">${esc(l)}</option>`).join('');
  if(langs.includes(cur))langEl.value=cur;else langEl.value='all';
}
function buildTagRow(){
  tagRowEl.innerHTML='';
  const hasSel=state.tags.plat.length||state.tags.feat.length||state.tags.lic.length;
  TAG_GROUPS.forEach(g=>{
    const grp=document.createElement('span');grp.className='tg-group';
    const lb=document.createElement('span');lb.className='tg-label';lb.textContent=g.label;grp.appendChild(lb);
    g.tokens.forEach(([tok,label])=>{
      const b=document.createElement('button');b.type='button';
      b.className='tg'+(state.tags[g.key].includes(tok)?' active':'');
      b.textContent=label;
      b.setAttribute('aria-pressed',String(state.tags[g.key].includes(tok)));
      b.onclick=()=>{const a=state.tags[g.key],i=a.indexOf(tok);if(i>-1)a.splice(i,1);else a.push(tok);state.limit=pageSize();buildTagRow();render();};
      grp.appendChild(b);
    });
    tagRowEl.appendChild(grp);
  });
  if(hasSel){
    const c=document.createElement('button');c.type='button';c.className='tg-clear';c.textContent='清空标签 ×';
    c.onclick=()=>{state.tags.plat.length=0;state.tags.feat.length=0;state.tags.lic.length=0;state.limit=pageSize();buildTagRow();render();};
    tagRowEl.appendChild(c);
    const untag=(state.tags.plat.length||state.tags.feat.length)?activeSource().filter(d=>!tagList(d).length).length:0;
    if(untag>0){const n=document.createElement('span');n.className='tg-note';n.textContent='⚠ '+untag+' 个新收录条目未标注平台/特性，筛选时不显示';tagRowEl.appendChild(n);}
  }
}

function fmtStars(n){return n>=1000?(n/1000).toFixed(1).replace('.0','')+'k':String(n);}
/* 语言色块：用类名代替运行时 style 属性，配合 CSP 去掉 style-src 'unsafe-inline' */
const LANG_SLUG={TypeScript:'ts',Rust:'rs',Go:'go',Python:'py',C:'c','C++':'cpp',Clojure:'clj',Ruby:'rb',Zig:'zig',Swift:'swift',JavaScript:'js','C#':'cs',PHP:'php',Java:'java',Kotlin:'kt',Haskell:'hs','Objective-C':'objc',Erlang:'erl',Shell:'sh',Perl:'pl'};
function swatchClass(l){return 'swatch--'+(LANG_SLUG[l]||'other');}
function esc(s){return String(s==null?'':s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));}
/* 拼音首字母搜索：PINYIN_INITIALS 由构建脚本从数据生成，如 "终端" → "zd" */
function pinyinOf(s){return (typeof PINYIN_INITIALS==='undefined')?'':String(s||'').replace(/[\u4e00-\u9fa5]/g,ch=>PINYIN_INITIALS[ch]||'');}
function licLabel(l){return l==='Proprietary'?'闭源商业授权':(l||'—');}
function isClosed(d){return d.lic==='Proprietary';}
function extUrl(d){return d.official||('https://github.com/'+d.repo);}
function slugify(s){return String(s||'').toLowerCase().replace(/[^a-z0-9\u4e00-\u9fa5]+/g,'-').replace(/^-+|-+$/g,'').slice(0,64)||'tool';}
const SLUGS=new Set(); DATA.concat(NICHE).forEach(d=>{let s=slugify(d.name),base=s,n=2;while(SLUGS.has(s)){s=base+'-'+n++;}SLUGS.add(s);d._slug=s;});
const NAME_TO_SLUG={}; DATA.concat(NICHE).forEach(d=>{NAME_TO_SLUG[d.name]=d._slug;});
function toolSlug(d){return d._slug||slugify(d.name);}
const GH_ARROW='<svg class="gh" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 17 17 7"/><path d="M8 7h9v9"/></svg>';

/* 下载加速镜像：两条第三方线路互为备用，失效时可换另一条或 GitHub Releases */
const MIRROR_HOSTS=[['https://gh-proxy.com/','线路1'],['https://ghfast.top/','线路2']];

function cardHTML(d){
  const c=CATS[d.cat]||{label:'其他'};
  const closed=isClosed(d);
  const num=d.live?'LIVE':String((d._niche?DATA.length:0)+d._i+1).padStart(3,'0');
  const sp=esc((d.name||'?').trim().charAt(0).toUpperCase());
  const tagList=(d.tags&&d.tags.length?d.tags:['open-source']).map(t=>`<span class="tag">${esc(t)}</span>`);
  if(closed)tagList.unshift('<span class="tag closed">闭源对照</span>');
  const alt=altOf(d);
  if(alt)tagList.push(`<a class="alt-tag" href="/tools/${esc(alt.slug)}.html" title="开源替代：${esc(alt.name)}">开源替代 · ${esc(alt.name)} ↗</a>`);
  const tags=tagList.join('');
  const foot = d.live
    ? `<span class="stars-count"><span class="star">★</span>${fmtStars(d.stars)}</span><span class="lang"><span class="swatch ${swatchClass(d.lang)}"></span>${esc(d.lang)}</span>${d.created?`<span class="made">新 · ${esc(d.created.slice(5))}</span>`:''}`
    : `${d.stars?`<span class="stars-count" title="GitHub 星标（构建时快照）"><span class="star">★</span>${fmtStars(d.stars)}</span>`:''}<span class="lang"><span class="swatch ${swatchClass(d.lang)}"></span>${esc(d.lang)}</span><span class="lic">${esc(licLabel(d.lic))}</span>`;
  // 实时热榜：整卡是外链，直接跳 GitHub
  if(d.live){
    return `<a class="card" href="${esc(d.url)}" target="_blank" rel="noopener noreferrer" data-cat="${esc(d.cat)}">
    <div class="card-top"><span class="specimen" aria-hidden="true">${sp}</span><span class="card-num">${num}</span><span class="badge ${esc(d.cat)}"><span class="dot"></span>${esc(c.label)}</span></div>
    <div class="card-name">${esc(d.name)}${GH_ARROW}</div>
    <p class="card-desc">${esc(d.desc)}</p>
    <div class="tags">${tags}</div>
    <div class="card-foot">${foot}</div>
  </a>`;
  }
  // 精选 / 小众：整卡可点打开详情；下载入口（REPOS_DL）直接内嵌在卡上
  const dl=(typeof REPOS_DL!=='undefined')?REPOS_DL.find(x=>x.repo===d.repo):null;
  const dlBadge=dl?`<span class="dl-type t${esc(dl.type)}" data-tag>${esc((window.__TYPE_LABEL&&window.__TYPE_LABEL[dl.type])||'')} ${esc(dl.tag||'')}</span>`:'';
  let dlAct='';
  if(dl&&window.__bestAssetDL){
    if(dl.type==='A'){
      const live=(window.__dlLive||{})[d.repo];
      const a=(live&&live.assets)||dl.assets||[];
      const os=window.__detectOS?window.__detectOS():'win';
      const best=window.__bestAssetDL(a,os);
      const osLabel=(window.__OS_LABEL||{})[os]||'';
      const bn=(best&&best.n)||'';
      const shown=bn.length>22?bn.slice(0,20)+'…':bn;
      dlAct='<div class="dl-actions">'
        +(best?MIRROR_HOSTS.map((h,i)=>`<a class="dl-btn${i===0?' primary':''}" href="${h[0]}${esc(best.u)}" target="_blank" rel="noopener noreferrer" title="第三方镜像 ${h[1]}，失效时可换另一条线路或点 GitHub Releases">⬇ ${esc(osLabel)} 加速镜像 ${h[1]} · ${esc(shown)}</a>`).join(''):'')
        +`<a class="dl-btn" href="${esc(DL_GHM(d.repo))}" target="_blank" rel="noopener noreferrer">镜像下载页</a>`
        +`<a class="dl-btn" href="${esc(DL_GH(d.repo))}" target="_blank" rel="noopener noreferrer">GitHub Releases</a></div>`;
    }else if(dl.type==='B'){
      const cmd=dl.install||('git clone https://github.com/'+d.repo+'.git');
      dlAct='<div class="dl-install"><span>'+esc(cmd)+'</span><button type="button" data-cmd="'+esc(cmd)+'">复制</button></div>';
    }else if(dl.type==='C'){
      const url=dl.official||d.official||('https://github.com/'+d.repo);
      dlAct='<div class="dl-actions"><a class="dl-btn primary" href="'+esc(url)+'" target="_blank" rel="noopener noreferrer">官网下载</a>'
        +(closed?'':`<a class="dl-btn" href="https://github.com/${esc(d.repo)}" target="_blank" rel="noopener noreferrer">GitHub</a>`)+'</div>';
    }else{
      const url=dl.web||d.official||('https://github.com/'+d.repo);
      dlAct='<div class="dl-actions"><a class="dl-btn primary" href="'+esc(url)+'" target="_blank" rel="noopener noreferrer">打开在线应用</a>'
        +(closed?'':`<a class="dl-btn" href="https://github.com/${esc(d.repo)}" target="_blank" rel="noopener noreferrer">GitHub</a>`)+'</div>';
    }
  }
  const favOn=FAVS.has(d._slug);
  const cmpOn=CMP.has(d._slug);
  return `<div class="card clickable" data-cat="${esc(d.cat)}" data-idx="${d._i}" data-repo="${esc(d.repo)}" data-slug="${esc(d._slug)}">
    <div class="card-top"><span class="specimen" aria-hidden="true">${sp}</span><span class="card-num">${num}</span><span class="badge ${esc(d.cat)}"><span class="dot"></span>${esc(c.label)}</span>${dlBadge}<span class="card-actions"><button class="icon-btn fav-btn${favOn?' on':''}" type="button" data-fav="${esc(d._slug)}" aria-label="${favOn?'取消收藏':'收藏'}" title="${favOn?'取消收藏':'收藏'}">${favOn?'♥':'♡'}</button><button class="icon-btn cmp-btn${cmpOn?' on':''}" type="button" data-cmp="${esc(d._slug)}" aria-label="${cmpOn?'移出对比':'加入对比'}" title="${cmpOn?'移出对比':'加入对比'}">⚖</button></span></div>
    <div class="card-name">${esc(d.name)}</div>
    <p class="card-desc">${esc(d.desc)}</p>
    <div class="tags">${tags}</div>
    <div class="card-foot">${foot}<button class="card-detail-btn" type="button" data-detail="${d._i}">查看介绍 →</button></div>${dlAct}
  </div>`;
}

/* 实时热榜专用：横排榜单行（序号 | 名称+一句话 | 星标/语言/上榜日期） */
function rowHTML(d,rank){
  const num=String(rank).padStart(2,'0');
  return `<a class="row" href="${esc(d.url)}" target="_blank" rel="noopener noreferrer" data-cat="${esc(d.cat)}" data-repo="${esc(d.full_name||d.url)}">
    <span class="specimen" aria-hidden="true">${esc((d.name||'?').trim().charAt(0).toUpperCase())}</span>
    <span class="row-rank">${num}</span>
    <span class="row-main">
      <span class="row-name">${esc(d.name)}${GH_ARROW}</span>
      <span class="row-desc">${esc(d.desc)}</span>
    </span>
    <span class="row-side">
      <span class="stars-count"><span class="star">★</span>${fmtStars(d.stars)}</span>
      <span class="lang"><span class="swatch ${swatchClass(d.lang)}"></span>${esc(d.lang)}</span>
      ${d.created?`<span class="made">新 · ${esc(d.created.slice(5))}</span>`:''}
    </span>
  </a>`;
}
/* 热榜增量合并：按 full_name 复用已有行，只增删/移动变化的项，
   避免刷新时整屏 innerHTML 重建导致滚动跳动与焦点丢失 */
function renderTrendRows(shown){
  const first=grid.firstElementChild;
  if(grid.dataset.mode!=='rows'||!first||!first.classList.contains('row')){
    grid.dataset.mode='rows';
    grid.innerHTML=shown.map((d,i)=>rowHTML(d,i+1)).join('');
    return;
  }
  const keyOf=d=>d.full_name||d.url;
  const want=new Set(shown.map(keyOf));
  const old=new Map();
  Array.from(grid.children).forEach(el=>{const k=el.dataset.repo;if(k)old.set(k,el);});
  Array.from(grid.children).forEach(el=>{const k=el.dataset.repo;if(k&&!want.has(k))el.remove();});
  shown.forEach((d,i)=>{
    const k=keyOf(d);
    const tmp=document.createElement('div');
    tmp.innerHTML=rowHTML(d,i+1);
    const fresh=tmp.firstElementChild;
    let el=old.get(k);
    if(el){
      if(el.outerHTML!==fresh.outerHTML){el.replaceWith(fresh);el=fresh;}
    }else{
      el=fresh;
    }
    if(grid.children[i]!==el)grid.insertBefore(el,grid.children[i]||null);
  });
}
const loadMoreWrap=document.getElementById('loadMoreWrap');
const loadMore=document.getElementById('loadMore');
const loadMoreInfo=document.getElementById('loadMoreInfo');
const modalPage=document.getElementById('modalPage');
const modalGhLabel=document.getElementById('modalGhLabel');

function pageSize(){ return state.tab==='trending'?30:48; }

function filteredList(){
  const q=state.q.trim().toLowerCase();
  // 有搜索词时跨精选+小众全局搜索，避免用户在当前 tab 搜不到另一侧的工具
  const src=(q && state.tab!=='trending') ? DATA.concat(NICHE) : activeSource();
  let list=src.filter(d=>{
    if(state.favOnly&&!FAVS.has(d._slug))return false;
    if(state.cat!=='all'&&d.cat!==state.cat)return false;
    if(state.lang!=='all'&&d.lang!==state.lang)return false;
    if(state.minStars&&(!d.live||d.stars<state.minStars))return false;
    if(state.tab!=='trending'&&!passTags(d))return false;
    if(q){
      const text=d.name+' '+(d.desc||'')+' '+(d.tags||[]).join(' ')+' '+(CATS[d.cat]?CATS[d.cat].label:'');
      if(!text.toLowerCase().includes(q)&&!pinyinOf(text).includes(q))return false;
    }
    return true;
  });
  if(state.sort==='name')list=[...list].sort((a,b)=>a.name.localeCompare(b.name));
  else if(state.sort==='stars')list=[...list].sort((a,b)=>(b.stars||0)-(a.stars||0));
  return list;
}

function render(){
  const isTrend=state.tab==='trending';
  if(state.tab==='guides'||state.tab==='overview')return;

  const list=filteredList();
  const total=list.length;
  const size=pageSize();
  if(!state.limit||state.limit<size)state.limit=size;

  if(isTrend&&!state.trending){
    grid.dataset.mode='cards';
    grid.innerHTML=`<div class="loading"><div class="spinner"></div>正在抓取 GitHub 实时热榜…</div>`;
    countEl.textContent='正在加载热榜…';
    loadMoreWrap.hidden=true;
  }else if(total===0){
    grid.innerHTML=`<div class="empty"><div class="big">没有匹配的软件</div>换个关键词，或清除分类 / 语言 / 标签筛选试试。</div>`;
    countEl.textContent='共 0 个软件';
    loadMoreWrap.hidden=true;
  }else{
    const shown=list.slice(0,state.limit);
    if(isTrend){
      renderTrendRows(shown);
    }else{
      grid.dataset.mode='cards';
      grid.innerHTML=shown.map(cardHTML).join('');
    }
    countEl.textContent=`共 ${total} 个软件`;
    const more=list.length-shown.length;
    loadMoreWrap.hidden=more<=0;
    if(more>0)loadMoreInfo.textContent=`已显示 ${shown.length} / ${total}`;
    else loadMoreInfo.textContent='';
  }

  // 热榜专属控件
  starsEl.hidden=!isTrend;
  tagRowEl.hidden=isTrend||state.tab==='guides'||state.tab==='overview';
  refreshEl.hidden=!isTrend||!state.trending;
  updatedEl.hidden=!isTrend||!state.trending;
  if(isTrend&&state.trending){
    const t=new Date(state.trending.ts);
    const hm=`${t.getHours()}:${String(t.getMinutes()).padStart(2,'0')}:${String(t.getSeconds()).padStart(2,'0')}`;
    updatedEl.textContent=state.trending.offline
      ? `离线缓存 · ${hm}`
      : (state.trending.stale ? `缓存 ${hm} · 刷新中…` : `热榜更新于 ${hm}`);
  }

  // 排序选项随标签变化；重设 innerHTML 后必须把当前值写回，否则下拉框会跳回第一项
  // 精选 / 小众也能按星标排序（快照数据来自 data/stars.js），无星标的闭源条目自然排末尾
  const wanted=isTrend?(state.sort==='name'?'name':'stars'):(['name','stars'].includes(state.sort)?state.sort:'default');
  state.sort=wanted;
  sortEl.innerHTML=isTrend
    ? `<option value="stars">按星标 ↓</option><option value="name">名称 A–Z</option>`
    : `<option value="default">默认顺序</option><option value="stars">按星标 ↓</option><option value="name">名称 A–Z</option>`;
  sortEl.value=wanted;
}

loadMore.addEventListener('click',()=>{state.limit+=pageSize();render();});

/* ============================================================
   详情弹窗 —— 精选条目点开看完整介绍 + 功能特点
   ============================================================ */
const overlay=document.getElementById('modalOverlay');
const modalName=document.getElementById('modalName');
const modalNum=document.getElementById('modalNum');
const modalBadge=document.getElementById('modalBadge');
const modalIntro=document.getElementById('modalIntro');
const modalFeatures=document.getElementById('modalFeatures');
const modalTags=document.getElementById('modalTags');
const modalGh=document.getElementById('modalGh');
const modalMeta=document.getElementById('modalMeta');
const modalAlt=document.getElementById('modalAlt');
const modalClose=document.getElementById('modalClose');
let lastFocus=null;

const pageRegions=[document.querySelector('header'),document.getElementById('main'),document.querySelector('footer')].filter(Boolean);
function setPageInert(v){pageRegions.forEach(el=>{if(v)el.setAttribute('inert','');else el.removeAttribute('inert');});}
/* 弹窗内 Tab 焦点循环：详情弹窗有自己的实现，对比 / 赞助弹窗复用这里 */
function tabTrap(e,root){
  if(e.key!=='Tab')return;
  const f=[...root.querySelectorAll('a[href],button:not([disabled]),[tabindex]:not([tabindex="-1"])')].filter(el=>el.offsetWidth||el.offsetHeight||el.getClientRects().length);
  if(!f.length)return;
  const first=f[0],last=f[f.length-1];
  if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus();}
  else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus();}
  else if(!root.contains(document.activeElement)){e.preventDefault();first.focus();}
}
overlay.setAttribute('inert','');

function openDetail(idx,opts){
  opts=opts||{};
  const d=activeSource()[idx]; if(!d)return;
  const c=CATS[d.cat]||{label:'其他'};
  lastFocus=opts.opener||document.activeElement;
  modalNum.textContent=String(state.tab==='niche'?idx+DATA.length+1:idx+1).padStart(3,'0');
  modalName.textContent=d.name;
  modalBadge.className='badge '+esc(d.cat);
  modalBadge.innerHTML='<span class="dot"></span>'+esc(c.label);
  modalIntro.textContent=d.intro||d.desc||'';
  modalFeatures.innerHTML=(d.features||[]).map(f=>`<li>${esc(f)}</li>`).join('');
  modalTags.innerHTML=(d.tags||[]).map(t=>`<span class="tag">${esc(t)}</span>`).join('');
  const closed=isClosed(d);
  const noRepo=!d.repo;
  modalGh.href=(closed||noRepo)?extUrl(d):('https://github.com/'+d.repo);
  modalGh.classList.toggle('is-official',closed||noRepo);
  if(modalGhLabel)modalGhLabel.textContent=(closed||noRepo)?'访问官方网站':'在 GitHub 上查看';
  if(modalPage){modalPage.href='/tools/'+toolSlug(d)+'.html';modalPage.hidden=false;}
  modalMeta.innerHTML=`<span class="lang"><span class="swatch ${swatchClass(d.lang)}"></span>${esc(d.lang)}</span><span class="lic">${esc(licLabel(d.lic))}</span>`;
  const alt=altOf(d);
  if(modalAlt){
    if(alt){modalAlt.hidden=false;modalAlt.innerHTML=`<span class="alt-kicker">开源替代建议</span><a href="/tools/${esc(alt.slug)}.html">${esc(alt.name)} ↗</a><span class="alt-hint">这是人工整理的主观建议，不一定一一对应</span>`;}
    else{modalAlt.hidden=true;modalAlt.innerHTML='';}
  }
  overlay.removeAttribute('inert');
  overlay.classList.add('open');
  overlay.setAttribute('aria-hidden','false');
  document.body.classList.add('no-scroll');
  setPageInert(true);
  if(!opts.fromHash){try{history.replaceState(null,'','#tool='+encodeURIComponent(toolSlug(d)));}catch(e){}}
  modalClose.focus();
}
function closeDetail(opts){
  opts=opts||{};
  overlay.classList.remove('open');
  overlay.setAttribute('aria-hidden','true');
  overlay.setAttribute('inert','');
  document.body.classList.remove('no-scroll');
  setPageInert(false);
  if(!opts.keepHash){try{history.replaceState(null,'',location.pathname+location.search);}catch(e){}}
  const f=lastFocus;lastFocus=null;
  if(f&&document.contains(f))f.focus();
}
modalClose.addEventListener('click',()=>closeDetail());
overlay.addEventListener('click',e=>{ if(e.target===overlay) closeDetail(); });
document.addEventListener('keydown',e=>{
  if(!overlay.classList.contains('open'))return;
  if(e.key==='Escape'){e.preventDefault();closeDetail();return;}
  if(e.key!=='Tab')return;
  const f=[...overlay.querySelectorAll('a[href],button:not([disabled]),[tabindex]:not([tabindex="-1"])')].filter(el=>el.offsetWidth||el.offsetHeight||el.getClientRects().length);
  if(!f.length)return;
  const first=f[0],last=f[f.length-1];
  if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus();}
  else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus();}
});
overlay.addEventListener('keydown',e=>{
  if(e.key!=='Tab')return;
  // 焦点若落在弹窗背景上，重新送进弹窗
  if(!overlay.contains(document.activeElement)){e.preventDefault();modalClose.focus();}
});

// 卡片点击：精选条目 → 打开详情；热榜条目本身是 <a>，不受影响
grid.addEventListener('click',e=>{
  const copyBtn=e.target.closest('.dl-install button');
  if(copyBtn){
    const cmd=copyBtn.dataset.cmd;
    if(navigator.clipboard&&navigator.clipboard.writeText){
      navigator.clipboard.writeText(cmd).then(()=>{copyBtn.textContent='已复制 ✓';setTimeout(()=>{copyBtn.textContent='复制';},1400);}).catch(()=>{});
    }
    e.stopPropagation();return;
  }
  if(e.target.closest('a.dl-btn'))return;
  const card=e.target.closest('.card.clickable');
  if(card) openDetail(+card.dataset.idx,{opener:e.target.closest('.card-detail-btn')});
});

async function loadTrending(force){
  if(state.trending&&!force){render();return;}
  render();
  try{
    const data=await fetchTrending(force);
    state.trending=data;
    state.cat='all';state.limit=pageSize();
    buildPills();buildLangOptions();render();
    if(data.stale && Date.now()-trendFailAt>TREND_RETRY_GAP){
      // 后台静默刷新：不重置筛选，不打断阅读
      refreshTrending(false)
        .then(fresh=>{
          state.trending=Object.assign({},fresh,{stale:false,offline:false});
          buildPills();buildLangOptions();render();
        })
        .catch(()=>{
          trendFailAt=Date.now();
          if(state.trending){state.trending.offline=true;render();}
        });
    }else if(data.stale&&state.trending){
      // 冷却期内直接沿用缓存，并如实标注离线
      state.trending.offline=true;render();
    }
  }catch(e){
    trendFailAt=Date.now();
    // 网络失败但有旧缓存：降级展示，而不是让整页变成错误提示
    const cached=readTrendCache();
    if(cached){
      state.trending=Object.assign({},cached,{stale:true,offline:true});
      state.cat='all';state.limit=pageSize();
      buildPills();buildLangOptions();render();
      return;
    }
    grid.innerHTML=`<div class="empty"><div class="big">热榜加载失败</div>可能是网络问题，或服务端热榜函数暂时不可用（本地直接打开这份 HTML 时还会受 GitHub 未登录每分钟 10 次的限流）。稍后再点“刷新热榜”试试。</div>`;
    countEl.textContent='加载失败';
    loadMoreWrap.hidden=true;
  }
}

// 标签切换
const controlsEl=document.querySelector('.controls'),metaRowEl=document.querySelector('.meta-row'),guidesEl=document.getElementById('guides'),overviewEl=document.getElementById('overviewView'),introEl=document.querySelector('.intro');
function activateTab(tab,opts){
  opts=opts||{};
  const btn=document.querySelector('.tab[data-tab="'+tab+'"]');
  if(!btn)return;
  document.querySelectorAll('.tab').forEach(x=>{const on=x===btn;x.classList.toggle('active',on);x.setAttribute('aria-current',on?'page':'false');});
  state.tab=tab;
  if(!opts.keepQuery){clearTimeout(qTimer);state.q='';qEl.value='';}
  const isFull=tab==='guides'||tab==='overview';
  controlsEl.hidden=isFull;pillsEl.hidden=isFull;metaRowEl.hidden=isFull;
  tagRowEl.hidden=isFull||tab==='trending';
  loadMoreWrap.hidden=isFull;
  grid.hidden=isFull;
  guidesEl.hidden=tab!=='guides';overviewEl.hidden=tab!=='overview';introEl.hidden=isFull;
  if(isFull)return;
  state.cat='all';state.minStars=0;if(starsEl)starsEl.value='0';
  state.sort=tab==='trending'?'stars':'default';
  state.tags.plat.length=0;state.tags.feat.length=0;state.tags.lic.length=0;
  state.limit=pageSize();
  buildPills();buildLangOptions();buildTagRow();
  if(tab==='trending')loadTrending(false); else render();
  if(!opts.silent)window.scrollTo({top:0,behavior:'smooth'});
}
document.querySelectorAll('.tab').forEach(t=>t.addEventListener('click',()=>activateTab(t.dataset.tab)));
document.querySelectorAll('.tab').forEach(t=>t.setAttribute('aria-current',t.classList.contains('active')?'page':'false'));

// 分类总览页 —— 8 张主类目大卡片（数量随当前数据实时统计）
const OV_ORDER=['dev','ai','design','prod','net','media','host','sys'];
function renderOverview(){
  const box=document.getElementById('catCards');if(!box)return;
  const n={};DATA.concat(NICHE).forEach(d=>{n[d.cat]=(n[d.cat]||0)+1;});
  box.innerHTML=OV_ORDER.map(k=>{
    const c=CATS[k],cnt=n[k]||0;
    return '<a class="cat-card cat-card--'+k+'" href="#" data-cat="'+k+'">'
      +'<span class="cc-accent"></span>'
      +'<span class="cc-top"><span class="cc-ico">'+c.icon+'</span><span class="cc-name">'+c.label+'</span><span class="cc-count">'+cnt+'</span></span>'
      +'<p class="cc-desc">'+c.desc+'</p>'
      +'<span class="cc-go">探索此分类 <span class="arrow">→</span></span>'
      +'</a>';
  }).join('');
}
function goOverviewCat(cat){
  activateTab('curated',{silent:true});
  state.cat=cat;state.sort='default';state.limit=pageSize();
  buildPills();render();
  window.scrollTo({top:0,behavior:'smooth'});
}
renderOverview();
document.getElementById('catCards').addEventListener('click',e=>{
  const card=e.target.closest('.cat-card');if(!card)return;
  e.preventDefault();goOverviewCat(card.dataset.cat);
});

// 指南内链 —— 点芯片直接打开对应编号标本卡的详情弹窗
function openByRepo(repo,opener){
  const ci=DATA.findIndex(d=>d.repo===repo);
  if(ci>-1){activateTab('curated',{silent:true});return openDetail(ci,{opener:opener});}
  const ni=NICHE.findIndex(d=>d.repo===repo);
  if(ni>-1){activateTab('niche',{silent:true});return openDetail(ni,{opener:opener});}
}
guidesEl.addEventListener('click',e=>{
  const a=e.target.closest('a.gl');
  if(a){e.preventDefault();openByRepo(a.dataset.repo,a);}
});

// 深链：#tool=<slug> 直接打开对应详情（静态工具页 / 分享链接可用）
function openFromHash(){
  const m=/^#tool=(.+)$/.exec(location.hash||'');
  if(!m)return false;
  let slug=m[1];
  try{slug=decodeURIComponent(slug);}catch(e){}
  const ci=DATA.findIndex(d=>toolSlug(d)===slug);
  if(ci>-1){activateTab('curated',{silent:true});openDetail(ci,{fromHash:true});return true;}
  const ni=NICHE.findIndex(d=>toolSlug(d)===slug);
  if(ni>-1){activateTab('niche',{silent:true});openDetail(ni,{fromHash:true});return true;}
  return false;
}
window.addEventListener('hashchange',()=>{
  if(overlay.classList.contains('open'))return;
  if(!openFromHash())closeDetail({keepHash:true});
});

// 搜索防抖：输入时不整页重排，停手 160ms 后过滤
let qTimer=null;
qEl.addEventListener('input',e=>{
  clearTimeout(qTimer);
  const v=e.target.value;
  qTimer=setTimeout(()=>{state.q=v;state.limit=pageSize();render();},160);
});
qEl.addEventListener('keydown',e=>{
  if(e.key==='Enter'){clearTimeout(qTimer);state.q=e.target.value;state.limit=pageSize();render();}
});
sortEl.addEventListener('change',e=>{state.sort=e.target.value;state.limit=pageSize();render();});
langEl.addEventListener('change',e=>{state.lang=e.target.value;state.limit=pageSize();render();});
starsEl.addEventListener('change',e=>{state.minStars=+e.target.value;state.limit=pageSize();render();});
refreshEl.addEventListener('click',async()=>{
  // 立刻给反馈，避免请求较慢时看起来像「刷新失败」
  if(refreshEl.disabled)return;
  refreshEl.disabled=true;
  refreshEl.setAttribute('aria-busy','true');
  updatedEl.hidden=false;
  updatedEl.textContent='正在刷新热榜…';
  try{ await loadTrending(true); }
  finally{
    refreshEl.disabled=false;
    refreshEl.removeAttribute('aria-busy');
    render();
  }
});

/* ---- 收藏 / 对比 事件与渲染 ---- */
const favFilterBtn=document.getElementById('favFilter');
const compareBtn=document.getElementById('compareBtn');
const compareCountEl=document.getElementById('compareCount');
const compareBar=document.getElementById('compareBar');
const compareItemsEl=document.getElementById('compareItems');
const compareOverlay=document.getElementById('compareOverlay');
const compareClose=document.getElementById('compareClose');
const cmpBody=document.getElementById('cmpBody');
const compareClear=document.getElementById('compareClear');
function syncFavBtns(){
  favFilterBtn.setAttribute('aria-pressed',state.favOnly?'true':'false');
  favFilterBtn.classList.toggle('on',state.favOnly);
  favFilterBtn.innerHTML=state.favOnly?'♥ 仅看收藏':'♡ 收藏';
}
function syncCompareUI(){
  const n=CMP.size;
  compareBtn.hidden=n===0;
  if(compareCountEl)compareCountEl.textContent=String(n);
  compareBar.hidden=n===0;
  if(compareItemsEl&&n){
    compareItemsEl.innerHTML=[...CMP].map(slug=>{
      const d=DATA.concat(NICHE).find(x=>x._slug===slug);
      return d?`<span class="cmp-chip">${esc(d.name)}<button type="button" data-cmp="${esc(slug)}" aria-label="移除">×</button></span>`:'';
    }).join('');
  }
}
let toastTimer=null;
function showToast(msg){const t=document.getElementById('toast');if(!t)return;t.textContent=msg;t.hidden=false;clearTimeout(toastTimer);toastTimer=setTimeout(()=>{t.hidden=true;},2000);}
function findBySlug(slug){return DATA.concat(NICHE).find(x=>x._slug===slug);}
function toggleFav(slug){
  if(FAVS.has(slug))FAVS.delete(slug);else FAVS.add(slug);
  saveSet(FAV_KEY,FAVS);
  if(state.favOnly){state.limit=pageSize();render();}
  else{
    // 只更新按钮外观，避免整页重排
    document.querySelectorAll(`[data-fav="${CSS.escape(slug)}"]`).forEach(b=>{const on=FAVS.has(slug);b.classList.toggle('on',on);b.textContent=on?'♥':'♡';b.setAttribute('aria-label',on?'取消收藏':'收藏');});
    syncFavBtns();
  }
}
function toggleCmp(slug){
  if(CMP.has(slug))CMP.delete(slug);
  else{
    if(CMP.size>=4){showToast?showToast('最多对比 4 个'):alert('最多对比 4 个');return;}
    CMP.add(slug);
  }
  saveSet(CMP_KEY,CMP);
  document.querySelectorAll(`[data-cmp="${CSS.escape(slug)}"]`).forEach(b=>b.classList.toggle('on',CMP.has(slug)));
  syncCompareUI();
}
function renderCompare(){
  const items=[...CMP].map(findBySlug).filter(Boolean);
  if(!items.length){cmpBody.innerHTML='<p>请先加入要对比的工具。</p>';return;}
  const rows=[
    ['分类',d=>(CATS[d.cat]||{}).label||'—'],
    ['主语言',d=>esc(d.lang||'—')],
    ['许可证',d=>esc(licLabel(d.lic))],
    ['星标',d=>d.stars?fmtStars(d.stars):(d.live?fmtStars(d.stars):'—')],
    ['开源替代',d=>{const a=altOf(d);return a?esc(a.name):'—';}],
    ['简介',d=>esc((d.desc||'').slice(0,80))],
  ];
  let h='<table class="cmp-table"><thead><tr><th>对比项</th>'+items.map(d=>`<th><a href="/tools/${esc(d._slug)}.html">${esc(d.name)} ↗</a></th>`).join('')+'</tr></thead><tbody>';
  for(const [label,fn] of rows){h+=`<tr><th>${label}</th>`+items.map(d=>`<td>${fn(d)}</td>`).join('')+'</tr>';}
  h+='</tbody></table>';
  cmpBody.innerHTML=h;
}
let cmpLastFocus=null;
function openCompare(){
  cmpLastFocus=document.activeElement;
  renderCompare();
  compareOverlay.classList.add('open');
  compareOverlay.setAttribute('aria-hidden','false');
  document.body.classList.add('no-scroll');
  setPageInert(true);
  try{compareClose.focus();}catch(e){}
}
function closeCompare(){
  compareOverlay.classList.remove('open');
  compareOverlay.setAttribute('aria-hidden','true');
  document.body.classList.remove('no-scroll');
  setPageInert(false);
  const f=cmpLastFocus;cmpLastFocus=null;
  if(f&&document.contains(f))f.focus();
}
compareOverlay.addEventListener('keydown',e=>tabTrap(e,compareOverlay));
favFilterBtn.addEventListener('click',()=>{state.favOnly=!state.favOnly;state.limit=pageSize();syncFavBtns();render();});
compareBtn.addEventListener('click',openCompare);
compareClose.addEventListener('click',closeCompare);
compareOverlay.addEventListener('click',e=>{if(e.target===compareOverlay)closeCompare();});
compareClear.addEventListener('click',()=>{CMP.clear();saveSet(CMP_KEY,CMP);syncCompareUI();document.querySelectorAll('.cmp-btn.on').forEach(b=>b.classList.remove('on'));});
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&compareOverlay.classList.contains('open'))closeCompare();});
// 事件委托：卡片上的收藏 / 对比按钮
grid.addEventListener('click',e=>{
  const f=e.target.closest('[data-fav]');
  if(f){e.stopPropagation();e.preventDefault();toggleFav(f.getAttribute('data-fav'));return;}
  const c=e.target.closest('[data-cmp]');
  if(c){e.stopPropagation();e.preventDefault();toggleCmp(c.getAttribute('data-cmp'));return;}
});
compareItemsEl.addEventListener('click',e=>{const b=e.target.closest('[data-cmp]');if(b)toggleCmp(b.getAttribute('data-cmp'));});
syncFavBtns();syncCompareUI();

// 主题
const themeBtn=document.getElementById('themeBtn'),themeIcon=document.getElementById('themeIcon'),themeLabel=document.getElementById('themeLabel');
const SUN='<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>';
const MOON='<path d="M21 12.8A9 9 0 1 1 11.2 3 7 7 0 0 0 21 12.8Z"/>';
function applyTheme(t){document.documentElement.setAttribute('data-theme',t);const dark=t==='dark';themeIcon.innerHTML=dark?MOON:SUN;themeLabel.textContent=dark?'亮色':'暗色';themeBtn.setAttribute('aria-label','切换明暗主题：'+(dark?'亮色':'暗色'));try{localStorage.setItem('osc-theme',t);}catch(e){}}
let saved=null;try{saved=localStorage.getItem('osc-theme');}catch(e){}
applyTheme(saved||((window.matchMedia&&window.matchMedia('(prefers-color-scheme: dark)').matches)?'dark':'light'));
themeBtn.onclick=()=>applyTheme(document.documentElement.getAttribute('data-theme')==='dark'?'light':'dark');
document.getElementById('top').addEventListener('click',e=>{e.preventDefault();window.scrollTo({top:0});});

// 首次渲染放到 DOMContentLoaded：确保后面的 REPOS_DL 下载数据已经就绪，只渲染一次
document.addEventListener('DOMContentLoaded',()=>{
  buildPills();buildLangOptions();buildTagRow();
  openFromHash();
  // /?q=关键词 直接带搜索词进入（404 页的搜索框、以及分享搜索链接）
  let uq='';
  try{ uq=(new URLSearchParams(location.search).get('q')||'').trim(); }catch(e){}
  if(uq){ state.q=uq; qEl.value=uq; }
  render();
});


/* ---------- 全屏：常驻切换按钮（手动进出，不自动触发） ---------- */
(function(){
  var btn=document.getElementById('fsBtn');
  if(!btn)return;
  var label=btn.querySelector('.fs-label');
  var root=document.documentElement;
  function isFs(){return !!(document.fullscreenElement||root.fullscreenElement);}
  function setLabel(){var fs=isFs();btn.setAttribute('aria-pressed',fs?'true':'false');btn.setAttribute('aria-label',fs?'退出全屏':'进入全屏');btn.title=fs?'退出全屏':'进入全屏';label.textContent=fs?'退出全屏':'进入全屏';}
  document.addEventListener('fullscreenchange',setLabel);
  btn.addEventListener('click',function(e){
    e.preventDefault();
    if(isFs()){if(document.exitFullscreen)document.exitFullscreen();}
    else{var p=root.requestFullscreen&&root.requestFullscreen();if(p&&p.catch)p.catch(function(){});}
  });
  setLabel();
})();

/* ---------- 赞助弹窗：微信/支付宝收款码（头部 + 底部两个入口共用） ---------- */
(function(){
  var qrOverlay=document.getElementById('qrOverlay'),
      qrBtn=document.getElementById('qrBtn'),
      qrBtnTop=document.getElementById('qrBtnTop'),
      qrClose=document.getElementById('qrClose'),
      lastOpener=null;
  if(!qrOverlay)return;
  qrOverlay.setAttribute('inert','');
  function escHandler(e){if(e.key==='Escape')closeQr();}
  qrOverlay.addEventListener('keydown',e=>tabTrap(e,qrOverlay));
  function openQr(){
    lastOpener=document.activeElement;
    qrOverlay.removeAttribute('inert');
    qrOverlay.classList.add('open');
    qrOverlay.setAttribute('aria-hidden','false');
    document.body.classList.add('no-scroll');
    if(typeof setPageInert==='function')setPageInert(true);
    document.addEventListener('keydown',escHandler);
    if(qrClose)qrClose.focus();
  }
  function closeQr(){
    qrOverlay.classList.remove('open');
    qrOverlay.setAttribute('aria-hidden','true');
    qrOverlay.setAttribute('inert','');
    document.body.classList.remove('no-scroll');
    if(typeof setPageInert==='function')setPageInert(false);
    document.removeEventListener('keydown',escHandler);
    if(lastOpener&&document.contains(lastOpener))lastOpener.focus();
    else if(qrBtn)qrBtn.focus();
  }
  if(qrBtn)qrBtn.addEventListener('click',openQr);
  if(qrBtnTop)qrBtnTop.addEventListener('click',openQr);
  if(qrClose)qrClose.addEventListener('click',closeQr);
  qrOverlay.addEventListener('click',function(e){if(e.target===qrOverlay)closeQr();});
})();

/* PWA：注册 Service Worker（离线缓存）。仅在支持的浏览器与安全上下文生效。 */
if('serviceWorker' in navigator){
  window.addEventListener('load',function(){
    navigator.serviceWorker.register('/sw.js').catch(function(){});
  });
}