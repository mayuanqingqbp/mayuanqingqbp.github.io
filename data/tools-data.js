/* 工具数据 —— 由 index.html 拆出，独立缓存；字段：name/cat/desc/intro/features[]/tags[]/lang/lic/repo/official */
const DATA = [
  { name:"VS Code", cat:"dev",
    desc:"微软开源的代码编辑器，插件市场庞大，主流语言都能覆盖。",
    intro:"Visual Studio Code（VS Code）是微软开发并开源的代码编辑器，如今是多数技术栈开发者的默认选择。它轻量、启动快，内置智能补全、Git 版本控制、调试器和终端，编辑器加工具链收进同一个窗口。支持 Windows、macOS、Linux 三大平台，配上庞大的扩展市场，常见开发场景都能应付。",
    features:[
      "IntelliSense 智能补全基于语言服务与类型信息，写代码时自动提示变量、函数和属性",
      "扩展市场有数万款插件，语法高亮、调试、格式化、主题、远程开发都有现成的",
      "Git 直接内置：暂存、提交、分支、合并、解决冲突，不用离开编辑器",
      "集成终端，加上多光标编辑，批量改动一次搞定",
      "Remote-SSH、Dev Containers、WSL，直接在远程环境里写代码",
      "MIT 许可，完全免费，跨平台体验一致"
    ],
    tags:["编辑器","IDE","VSCode"], lang:"TypeScript", lic:"MIT", repo:"microsoft/vscode" },

  { name:"Neovim",  cat:"dev",
    desc:"Vim 的深度重构分支，配置改用 Lua，插件系统更现代。",
    intro:"Neovim 是 Vim 的深度扩展分支，想把传统模态编辑器带进现代。配置系统整个换成 Lua，内置 LSP 客户端和终端，插件生态围绕现代 API 重建。对喜欢指尖不离键盘的人来说，它换来的是毫秒级启动和无限制的可定制空间。",
    features:[
      "配置就是一份 Lua 脚本，不用再忍受 vimrc 的晦涩语法",
      "原生内置 LSP 客户端，补全、诊断、跳转不必再装插件",
      "自带终端和终端缓冲区，编辑、运行来回切",
      "C / Lua API 完全可扩展，现代插件管理器生态热闹",
      "极轻量，启动毫秒级，纯终端运行，SSH 远程也飞快",
      "模态编辑范式完整，上手难，但回报也高"
    ],
    tags:["编辑器","TUI","终端"], lang:"C", lic:"Apache-2.0", repo:"neovim/neovim" },

  { name:"Zed",     cat:"dev",
    desc:"Rust 编写的高性能编辑器，多人多光标协作是原生能力。",
    intro:"Zed 用 Rust 编写，出自 Atom 原班人马。GPU 加速渲染加分布式系统设计，编辑器响应跟手，大文件也不卡。多人实时协作是它的招牌，再配上内置 AI 助手，摆明了要做下一代编辑器。",
    features:[
      "文本和 UI 直接走 GPU 渲染，超大文件编辑也顺滑",
      "多人同时编同一个文件，延迟只有几十毫秒",
      "内置 Zed AI 助手，编辑器里直接补全、对话",
      "网络层自研，跨平台远程协作延迟极低",
      "插件系统与语言服务器深度集成，启动很快",
      "Rust 写的，内存占用和稳定性都不错"
    ],
    tags:["编辑器","Rust","协作"], lang:"Rust", lic:"GPL-3.0", repo:"zed-industries/zed" },

  { name:"fzf",     cat:"dev",
    desc:"命令行模糊查找器，列表、文件、历史记录都能秒筛。",
    intro:"fzf 是命令行里的模糊查找器，核心玩法是管道：只要能输出列表的命令，都能接上它即时过滤。乱序敲几个字符，它就从几万条结果里捞出你要的那一条。终端重度用户基本人手一个。",
    features:[
      "关键词随便什么顺序输入，海量列表即时过滤",
      "文件列表、命令历史、进程、git 提交记录，统统能查",
      "自带预览窗，文件内容、提交详情实时看",
      "两阶段、多阶段选择，一次挑多个",
      "单个静态二进制，零依赖，体积小，速度快",
      "和 shell 命令自由拼管道，可玩性很高"
    ],
    tags:["CLI","终端","模糊查找"], lang:"Go", lic:"MIT", repo:"junegunn/fzf" },

  { name:"ripgrep", cat:"dev",
    desc:"递归搜索文件，比 grep 快得多，默认尊重 .gitignore。",
    intro:"ripgrep（rg）是 Rust 写的命令行递归文本搜索工具。多线程加 SIMD 加速，搜整个代码库明显快过传统 grep，默认还尊重 .gitignore、自动跳过二进制文件。现在开发者搜代码，多半先敲 rg。",
    features:[
      "多线程加 SIMD 加速，比 grep 快数倍到数十倍",
      "默认遵守 .gitignore / .ignore，搜出来的都是有效结果",
      "内置 Rust regex 引擎，正则语法支持齐全",
      "自动跳过二进制文件，编码检测、彩色输出都有",
      "可并行搜索，结果能接管道",
      "跨平台静态二进制，下载就能用"
    ],
    tags:["CLI","搜索","终端"], lang:"Rust", lic:"MIT / Apache-2.0", repo:"BurntSushi/ripgrep" },

  { name:"Nushell", cat:"dev",
    desc:"以结构化数据为核心的现代 shell，管道里直接操作表格对象。",
    intro:"Nushell 是个现代 shell，核心理念就一条：数据要结构化。它的管道里，文件、HTTP 响应、配置文件都是表格和对象，可以直接过滤、排序、聚合，不再是纯文本。可以当成 Unix 世界的 PowerShell，用命令处理数据有点像写 SQL。",
    features:[
      "命令输出是表格和对象，不是裸文本",
      "ls | where size > 10mb | sort-by modified，一条链看清",
      "HTTP 请求、JSON / YAML / TOML 解析、数据库查询都内置",
      "自动补全和帮助文档做得细",
      "跨平台单二进制，装好就能用",
      "能写脚本，自动化和数据管道都合适"
    ],
    tags:["Shell","终端","数据"], lang:"Rust", lic:"MIT", repo:"nushell/nushell" },

  { name:"Lazygit", cat:"dev",
    desc:"终端里的 Git TUI，提交、变基这些操作按键就完成。",
    intro:"Lazygit 跑在终端里，把繁琐的 Git 命令行流程收进一个清爽的可视界面：提交、暂存、rebase、解决冲突，都变成一次按键的事。单文件、无依赖，什么终端都能跑，Git 操作效率明显提上来。",
    features:[
      "stage、commit、push、pull、rebase、cherry-pick 都能按键完成",
      "交互式 rebase 和冲突解决，界面直观，不用烧脑",
      "diff 看到文件和行级，改了什么一目了然",
      "Git 日志、stash、worktree 都能管",
      "单二进制零依赖，终端里随手打开",
      "键位和主题高度可定制"
    ],
    tags:["CLI","Git","终端"], lang:"Go", lic:"MIT", repo:"jesseduffield/lazygit" },

  { name:"Ruff",    cat:"dev",
    desc:"Python 代码检查与格式化，Rust 实现，跑一遍毫秒级。",
    intro:"Ruff 是 Rust 编写的 Python linter 和格式化工具，快到比大多数语言的本体还快。flake8、isort、black、pyupgrade 这些工具的能力合并成一个，内置规则上千条，还能自动修复。不少 Python 项目已经直接拿它当默认配置。",
    features:[
      "lint 和格式化都是毫秒级，速度远超传统工具",
      "flake8、isort、black、pyupgrade，一个工具全包了",
      "内置规则上千条，细粒度配置、按需忽略",
      "带自动修复，一次修掉大批问题",
      "IDE 和 pre-commit 集成做得好",
      "Rust 实现，跨平台单二进制"
    ],
    tags:["Lint","Python","格式化"], lang:"Rust", lic:"MIT / Apache-2.0", repo:"astral-sh/ruff" },

  { name:"Bun",     cat:"dev",
    desc:"JavaScript 运行时、打包器、包管理器三合一，速度很快。",
    intro:"Bun 用 Zig 编写，把 JavaScript 运行时、打包器和包管理器合成一个工具，内置 JavaScriptCore 引擎。想法是用一个工具替掉 Node.js 加 npm 加 webpack 的组合。启动和执行都快，API 兼容 Node.js 与 npm，迁移成本低。",
    features:[
      "基于 JavaScriptCore 引擎，启动和执行都快",
      "内置包管理器，比 npm 快一个量级，workspaces 和 lockfile 都支持",
      "打包器、HMR 热更新内置，TypeScript 直接可用",
      "测试运行器和 HTTP 服务器也内置了",
      "API 兼容 Node.js 和 npm，迁过去成本低",
      "一个二进制，运行时、打包、依赖管理全管"
    ],
    tags:["Runtime","JS","打包器"], lang:"Zig", lic:"MIT", repo:"oven-sh/bun" },

  { name:"OBS Studio", cat:"media",
    desc:"开源免费的录屏与直播推流软件，跨平台。",
    intro:"OBS Studio 开源免费，录屏和直播推流都归它管，Windows / macOS / Linux 都有版本。游戏、摄像头、屏幕都能录，场景切换、滤镜、混音器齐活，也能直接推流到各大直播平台。主播和创作者用它的最多。",
    features:[
      "屏幕、游戏、摄像头，都能录",
      "多场景多源，切换灵活",
      "滤镜、混音器、文字与图像源内置",
      "支持 RTMP 推流直播",
      "跨平台，开源免费",
      "社区插件量大，功能可以往外扩"
    ],
    tags:["直播","录屏","开源"], lang:"C++", lic:"GPL-2.0", repo:"obsproject/obs-studio" },

  { name:"Ollama", cat:"ai",
    desc:"本机一条命令跑开源大模型（Llama、Mistral 等），可离线。",
    intro:"Ollama 让你在本地用一条命令跑起主流开源大语言模型，Llama、Mistral、Qwen 都在列。下载模型、量化、推理这些复杂步骤被它全部包掉，几分钟就有一个可用的本地 LLM。离线也能跑，数据不出本机，隐私敏感的场合合适。",
    features:[
      "ollama run llama3，一条命令下载并运行模型",
      "Llama、Mistral、Qwen 等主流开源 LLM 和多模态模型都支持",
      "暴露 OpenAI 兼容的本地 API，各类应用接进来方便",
      "GPU / CPU、Metal / CUDA，硬件自动识别",
      "服务跑在本地，离线可用，隐私数据不出机器",
      "macOS、Linux、Windows 都支持"
    ],
    tags:["LLM","本地","推理"], lang:"Go", lic:"MIT", repo:"ollama/ollama" },

  { name:"vLLM",   cat:"ai",
    desc:"高吞吐 LLM 推理服务平台，PagedAttention 明显提速。",
    intro:"vLLM 是高吞吐、内存高效的 LLM 推理与服务平台。它提出的 PagedAttention 用分页方式管 GPU 显存，内存碎片明显减少，大模型在高并发下也能跑出接近峰值的吞吐。生产环境部署大模型服务，常用它当引擎。",
    features:[
      "PagedAttention 分页管理显存，GPU 内存碎片基本消除",
      "Continuous batching，高并发时吞吐明显上去",
      "主流模型和多种量化方案都能明显加速",
      "带 OpenAI 兼容 API 服务，直接对外提供推理",
      "NVIDIA、AMD 等多种硬件后端都支持",
      "架构模块化，二次开发和扩展方便"
    ],
    tags:["推理","服务","LLM"], lang:"Python", lic:"Apache-2.0", repo:"vllm-project/vllm" },

  { name:"LangChain", cat:"ai",
    desc:"搭建大模型应用的框架与工具集，把模型、数据、工具串起来。",
    intro:"LangChain 是构建大语言模型应用的框架与工具集，提供连接模型、数据、工具和外部服务的抽象，搭 RAG（检索增强生成）、Agent、复杂工作流都省事。配套的 LangGraph 负责有状态、多智能体的编排，LLM 应用开发里出镜率很高。",
    features:[
      "Chain 与 LCEL，LLM 管道可以组合着搭",
      "Agent 能自动调用工具，把多步任务跑完",
      "集成数量大：向量库、文档加载器、模型提供商都有现成的",
      "LangGraph 面向有状态、多智能体应用做编排",
      "Python 和 JavaScript 两种语言都能用",
      "社区活跃，集成一直在更新"
    ],
    tags:["框架","LLM","Agent"], lang:"Python", lic:"MIT", repo:"langchain-ai/langchain" },

  { name:"Whisper", cat:"ai",
    desc:"OpenAI 开源的语音识别模型，多语言转写抗噪稳。",
    intro:"Whisper 是 OpenAI 开源的语音识别（ASR）模型，在海量多语言数据上训练出来。噪声、口音都不太影响它，支持数十种语言转写，还能顺手翻译成英文。如今它是语音转写的事实标准，faster-whisper 等加速实现都是社区围着它做的。",
    features:[
      "多语言识别，数十种语言可转写",
      "语音翻译：什么语言都能转成英文",
      "噪声和口音不敏感，鲁棒性高",
      "tiny 到 large 多种规格，按算力换精度",
      "可离线在本机跑，GPU 也行",
      "社区工具和加速实现数量大"
    ],
    tags:["语音","ASR","转写"], lang:"Python", lic:"MIT", repo:"openai/whisper" },

  { name:"HandBrake", cat:"media",
    desc:"开源视频转码器，常见视频格式都能转成通用格式。",
    intro:"HandBrake 是开源的视频转码工具，绝大多数视频格式都能转成 MP4 / MKV 这类通用格式。预设多、支持硬件加速、能批量转码，压体积、转格式、跨设备播放都靠它，还完全免费。",
    features:[
      "常见格式基本都能转成 MP4 / MKV",
      "预设丰富，转码一键就开",
      "硬件加速：NVENC / VAAPI / VideoToolbox",
      "批量转码，断点可续",
      "裁剪、字幕、音频轨处理都覆盖",
      "开源免费，跨平台"
    ],
    tags:["转码","视频","开源"], lang:"C", lic:"GPL-2.0", repo:"HandBrake/HandBrake" },

  { name:"Transformers", cat:"ai",
    desc:"Hugging Face 模型库，一行代码加载数千个预训练模型。",
    intro:"Transformers 是 Hugging Face 的模型工具库，用一个统一 API 封装了数千个预训练模型，自然语言处理、计算机视觉、语音等多模态任务都覆盖。一行代码加载并使用模型，配 Pipeline 能快速搭出应用。研究和生产都拿它当底座。",
    features:[
      "数千个预训练模型，统一 API 一行加载",
      "NLP、计算机视觉、语音、多模态任务都覆盖",
      "Pipeline 一行代码，应用很快搭起来",
      "和 Hugging Face Hub、Datasets 深度集成",
      "支持微调与训练，性能表现好",
      "跨框架支持，社区更新勤"
    ],
    tags:["模型库","NLP","预训练"], lang:"Python", lic:"Apache-2.0", repo:"huggingface/transformers" },

  { name:"ComfyUI", cat:"ai",
    desc:"节点工作流的扩散模型界面，生成流程可视化、好扩展。",
    intro:"ComfyUI 把扩散模型的图像生成过程做成可拖拽连线的节点，复杂的生成流程因此变得可视、可复现、可扩展。ControlNet、LoRA 加上大量自定义节点配合起来，它已经是 AI 图像创作的主力工具。",
    features:[
      "工作流是节点式的，拖拽连线组装生成流程",
      "ControlNet、LoRA、自定义节点，可选的很多",
      "工作流能存成 JSON 或带在图片里，随时复现分享",
      "扩展性强，自定义节点社区活跃",
      "GPU 利用率高，性能不差",
      "流程可视化，调试时定位问题快"
    ],
    tags:["图像生成","工作流","节点"], lang:"Python", lic:"GPL-3.0", repo:"comfyanonymous/ComfyUI" },

  { name:"LocalAI", cat:"ai",
    desc:"本地跑 AI 模型的运行时，接口兼容 OpenAI API。",
    intro:"LocalAI 是本地运行 AI 模型的开源运行时，接口与 OpenAI API 兼容。LLM、图像生成、语音合成都能在本地跑，现有的 OpenAI 集成直接接上，代码不用改。推理后端有好几种，Docker 一键部署。",
    features:[
      "API 与 OpenAI 兼容，直接替换，代码不动",
      "LLM、图像生成、TTS 等多模态模型都支持",
      "后端抽象：llama.cpp、ONNX 等推理引擎可选",
      "GPU 加速，多个模型可同部署",
      "Docker 部署，拉起来就跑",
      "全部在本地运行，隐私稳妥"
    ],
    tags:["LLM","本地","兼容"], lang:"Go", lic:"Apache-2.0", repo:"mudler/LocalAI" },

  { name:"Penpot",     cat:"design",
    desc:"开源在线协作设计工具，Figma 的开源替代，支持实时协作。",
    intro:"Penpot 是开源、基于 Web 的协作设计工具，定位 Figma 的开源替代。实时多人协作、设计系统、完整的 UI 设计功能都有，还能自托管，设计数据完全在自己手里。格式采用开放的 SVG，不绑定供应商。",
    features:[
      "开源，可自托管，数据自己说了算",
      "多人实时协作，同画布编辑",
      "设计系统有组件、变量、样式管理",
      "格式是开放的 SVG，不绑供应商",
      "UI 设计功能集完整",
      "有插件系统，能力可以扩展"
    ],
    tags:["UI设计","协作","Figma"], lang:"Clojure", lic:"MPL-2.0", repo:"penpot/penpot" },

  { name:"Excalidraw", cat:"design",
    desc:"手绘风在线白板，画草图、流程图、示意图都顺手。",
    intro:"Excalidraw 是手绘风格的白板工具，画出来的东西像随手画的草图，适合画草图、流程图、做头脑风暴。它开源，在线就能用，也能嵌进 Obsidian 这类工具里。实时协作让团队几个人能在同一块白板上边画边讨论。",
    features:[
      "手绘美学，看着像随手画的草图",
      "图形、箭头、文本、自由线条都能画",
      "白板实时协作，多人同绘",
      "可导出 SVG / PNG",
      "开源，可嵌入可扩展，Obsidian、Miro 都行",
      "在线即用，也支持自托管"
    ],
    tags:["白板","手绘","流程图"], lang:"TypeScript", lic:"MIT", repo:"excalidraw/excalidraw" },

  { name:"Gouache",    cat:"design",
    desc:"开源矢量图形编辑器，做 UI 和品牌设计用。",
    intro:"Gouache 是面向 UI 与品牌设计的开源矢量图形编辑器。界面干净现代，矢量编辑能力扎实，路径、形状、贝塞尔曲线这些核心操作都在。设计师做界面稿、品牌形象的视觉产出，可以拿它试试。",
    features:[
      "路径、形状、贝塞尔曲线，矢量编辑核心都有",
      "功能围绕 UI 与品牌设计来组织",
      "界面干净、现代",
      "开源，跨平台",
      "设计资产管理与导出支持"
    ],
    tags:["矢量","UI设计"], lang:"TypeScript", lic:"MIT", repo:"" ,official:"https://gouache.com/"},

  { name:"GIMP",       cat:"design",
    desc:"开源位图图像编辑器，图层蒙版俱全，Photoshop 的替代。",
    intro:"GIMP（GNU Image Manipulation Program）是开源位图图像编辑器，算是 Photoshop 的事实开源替代。图层、蒙版、通道、滤镜、修图能力齐全，支持众多图像格式与色彩管理，还能靠脚本和插件继续往外扩。",
    features:[
      "图层、蒙版、通道、滤镜、修图，功能集完整",
      "图像格式支持广，色彩管理也有",
      "Script-Fu / Python 脚本加插件系统，扩展空间大",
      "能批量处理，工作流程可自动化",
      "跨平台，免费开源",
      "社区活跃，教程量非常大"
    ],
    tags:["图像编辑","位图"], lang:"C", lic:"GPL-3.0", repo:"GNOME/gimp" },

  { name:"Inkscape",   cat:"design",
    desc:"开源 SVG 矢量编辑器，各类矢量图形都能建能改。",
    intro:"Inkscape 是开源的 SVG 矢量图形编辑器，SVG 就是它的原生格式。矢量编辑功能集完整：路径编辑、布尔运算、渐变、图案、文字路径都在，再靠扩展与滤镜继续往外扩。",
    features:[
      "SVG 原生支持，矢量编辑功能集完整",
      "路径、节点、贝塞尔曲线、布尔运算，编辑工具全",
      "渐变、图案、文字路径都支持",
      "扩展、滤镜、插件，可继续加能力",
      "跨平台，免费开源",
      "多种矢量 / 位图格式可导入导出"
    ],
    tags:["矢量","SVG"], lang:"C++", lic:"GPL-3.0", repo:"inkscape/inkscape" },

  { name:"Blender",    cat:"design",
    desc:"开源 3D 套件：建模、动画、渲染、视频剪辑全包。",
    intro:"Blender 是功能完整的开源 3D 创作套件：建模、雕刻、骨骼绑定、动画、渲染、合成、视频剪辑，甚至自带游戏引擎。个人创作者和影视工作室都有人用，社区、教程、素材库的量都很大。",
    features:[
      "建模、雕刻、绑定、动画，3D 工作流完整走通",
      "Cycles 路径追踪渲染器，出片能到照片级",
      "合成器和视频编辑（VSE）内置",
      "有游戏引擎，支持实时预览",
      "社区、教程、素材库规模都大",
      "完全开源免费，跨平台"
    ],
    tags:["3D","动画","渲染"], lang:"C++", lic:"GPL-2.0", repo:"blender/blender" },

  { name:"Homebrew",  cat:"sys",
    desc:"macOS 上的包管理器（Linux 也行），brew 一条命令装软件。",
    intro:"Homebrew 是 macOS（也支持 Linux）上的免费开源包管理器。一条 brew install 就能装数千款命令行工具和应用程序，依赖归它管，升级可以自动化，macOS 的开发体验里基本是标配。社区维护的 tap 机制让软件包一直往外扩。",
    features:[
      "装软件就一条命令：brew install <软件>",
      "formulae 和 casks，软件包数量大",
      "依赖管理、自动升级都管",
      "tap 机制，社区维护扩展仓库",
      "macOS、Linux 都能跑",
      "完全开源，体系成熟"
    ],
    tags:["包管理","macOS","brew"], lang:"Ruby", lic:"Apache-2.0", repo:"Homebrew/brew" },

  { name:"Syncthing", cat:"host",
    desc:"开源跨设备文件同步，点对点传输，不经云端中转。",
    intro:"Syncthing 做持续、点对点（P2P）的文件同步：你的设备之间直接同步，不经云端中转，也不用注册账号，数据端到端加密。多台电脑、服务器的文件想保持实时一致，用它挺合适，隐私和数据都握在自己手里。",
    features:[
      "点对点同步，不经过云中转",
      "持续实时同步，冲突自动处理",
      "端到端加密，数据安全",
      "Web 管理界面，设备配对简单",
      "跨平台、开源，不用注册账号",
      "可以只挑特定文件夹共享"
    ],
    tags:["同步","文件","P2P"], lang:"Go", lic:"MPL-2.0", repo:"syncthing/syncthing" },

  { name:"Tailscale", cat:"net",
    desc:"基于 WireGuard 的零配置组网，把设备连成私有网络。",
    intro:"Tailscale 是基于 WireGuard 的零配置私有组网工具。分布在各地、不同网络里的设备，它能拼成一个加密的 mesh 网络，远程访问安全打通，端口转发都不用设。身份走 SSO，访问控制做得细，个人使用有免费额度。",
    features:[
      "零配置 VPN，NAT 穿透和打洞自动完成",
      "端到端加密隧道，底层是 WireGuard",
      "访问控制按身份走：SSO、设备管理",
      "个人使用免费",
      "Windows、macOS、Linux、iOS、Android、路由器都有客户端",
      "远程访问安全打通，端口转发省了"
    ],
    tags:["组网","VPN","WireGuard"], lang:"Go", lic:"BSD-3-Clause", repo:"tailscale/tailscale" },

  { name:"Caddy",     cat:"host",
    desc:"零配置的现代 Web 服务器，HTTPS 证书自动签发续期。",
    intro:"Caddy 是零配置的现代 Web 服务器，默认就自动获取并续期 Let's Encrypt 的 HTTPS 证书。配置格式 Caddyfile 清晰易读，安全默认值给得足。反向代理、负载均衡、TLS 终结都支持，单二进制部署，站点要快速上线很合适。",
    features:[
      "HTTPS 全自动：Let's Encrypt 证书获取、续期不用管",
      "Caddyfile 配置格式清晰好读",
      "反向代理、负载均衡、TLS 终结都支持",
      "内置模块多，还有扩展系统",
      "单二进制，部署省事",
      "默认配置把安全放在第一位"
    ],
    tags:["Web服务器","HTTPS"], lang:"Go", lic:"Apache-2.0", repo:"caddyserver/caddy" },

  { name:"Ansible",   cat:"sys",
    desc:"走 SSH 的无代理运维自动化，配置写成代码。",
    intro:"Ansible 是简单、无代理、配置即代码的自动化与编排工具。它通过 SSH 连目标主机，用 YAML 写的 playbook 部署软件、配置系统、编排发布。目标机器上不用装 agent，靠 inventory 管理，规模扩到上千台主机也行。",
    features:[
      "无代理：走 SSH 连接，目标机不用装 agent",
      "playbook 用 YAML 写，可读，也好维护",
      "模块和角色（role）数量多，按需挑",
      "inventory 管理主机，上千台规模撑得住",
      "社区活跃，Ansible Galaxy 里资源多",
      "配置管理、部署、编排都对口"
    ],
    tags:["自动化","运维","配置"], lang:"Python", lic:"GPL-3.0", repo:"ansible/ansible" },

  { name:"Htop",      cat:"sys",
    desc:"交互式进程监视器，比 top 直观，CPU、内存实时可见。",
    intro:"htop 是传统 top 的增强版：交互式进程监视器。CPU、内存、进程信息用彩色界面直观展示，鼠标键盘都能操作，kill 进程、调优先级、搜索过滤直接办。排查系统负载、找高占用进程，常用它。",
    features:[
      "CPU / 内存 / 进程直观展示，颜色区分",
      "kill、renice、暂停，进程管理顺手做",
      "进程可搜索、可过滤",
      "显示项与列可自定义",
      "跨平台，单文件轻量二进制",
      "鼠标加键盘，两套操作都行"
    ],
    tags:["进程","监控","终端"], lang:"C", lic:"GPL-2.0", repo:"htop-dev/htop" },

  { name:"Yazi",      cat:"sys",
    desc:"Rust 写的终端文件管理器，预览快，还能装插件。",
    intro:"Yazi 是用 Rust 编写的终端文件管理器。TUI 界面清爽，文件预览是秒级的，图片、视频、代码、PDF 都能看，插件系统也留了口子。批量操作、多标签、书签都有，键盘驱动，终端里的文件管理也是现代体验。",
    features:[
      "Rust 编写，启动、导航都快",
      "图片、视频、代码、PDF，预览类型多",
      "有插件系统，社区插件不少",
      "批量操作、多标签、书签都齐",
      "TUI 清爽，交互全靠键盘",
      "跨平台，终端里打开就用"
    ],
    tags:["文件管理","TUI","终端"], lang:"Rust", lic:"GPL-3.0", repo:"sxyazi/yazi" },

  { name:"Nmap",      cat:"net",
    desc:"网络探测与安全扫描：端口扫描、服务识别。",
    intro:"Nmap（Network Mapper）是经典的网络探测与安全审计工具：发现主机、扫描端口、识别服务与版本、探测操作系统指纹，配上 NSE 脚本引擎还能做大量自动化安全检测。网络工程师和安全研究者基本都装一个。",
    features:[
      "主机发现、端口扫描，扫描方式有好几种",
      "服务和版本都能识别",
      "可以探测操作系统指纹",
      "NSE 脚本引擎，内置脚本量大",
      "跨平台命令行工具",
      "报告格式可选多种，方便后续分析"
    ],
    tags:["网络","安全","扫描"], lang:"C", lic:"Nmap License", repo:"nmap/nmap" },

  { name:"Tmux",      cat:"dev",
    desc:"终端复用器：一个窗口多会话，能分屏，任务不掉线。",
    intro:"Tmux 是终端复用器：一个终端窗口里能同时跑多个会话、切成多个窗格，还能随时分离再重新接回来。长任务挂着，断开或退出终端都不影响，回头 attach 继续。配上脚本和快捷键，它就成了高效终端工作流的核心。",
    features:[
      "一个窗口里多窗口多窗格，切换、调布局都自由",
      "会话持久：detach 走人，重新 attach 时一切还在",
      "窗口窗格能重命名、交换、旋转、最大化",
      "同步窗格，一条命令几个窗格一起执行",
      "键位、状态栏、主题都能改，定制空间大",
      "跨平台，Unix 类系统基本都能跑"
    ],
    tags:["终端","复用器","TUI"], lang:"C", lic:"ISC", repo:"tmux/tmux" },

  { name:"pnpm",      cat:"dev",
    desc:"快且省磁盘的 JS 包管理器，靠硬链接和内容寻址存储。",
    intro:"pnpm 是快且省磁盘空间的 JavaScript 包管理器。它用全局内容寻址存储，包全部以硬链接方式共享，装多个项目也不重复占盘，安装速度和成功率都不错。monorepo 工作区原生支持，大型前端项目里它是默认选择之一。",
    features:[
      "全局内容寻址存储加硬链接，包不重复占磁盘",
      "安装快，增量安装、并行下载都支持",
      "node_modules 结构严格，幽灵依赖被挡住",
      "monorepo workspaces 原生支持，跨项目依赖能链接",
      "lockfile 与 npm 兼容，迁过去成本低",
      "脚本运行、依赖管理内置"
    ],
    tags:["包管理","JS","Monorepo"], lang:"TypeScript", lic:"MIT", repo:"pnpm/pnpm" },

  { name:"Deno",      cat:"dev",
    desc:"现代 JS/TS 运行时：零配置，工具链内置，带权限模型。",
    intro:"Deno 是 Node.js 原作者 Ryan Dahl 做的现代 JavaScript / TypeScript 运行时，针对早期 Node 的痛点重新设计：TypeScript 支持、打包器、测试运行器、linter 这些工具链内置，安全上采用基于权限的模型，不用配置就能跑，生态也在快速成长。",
    features:[
      "TypeScript 直接运行，tsconfig 都不用写",
      "打包器、格式化器、linter、测试运行器内置",
      "默认没有文件系统 / 网络访问权限，按申请放行",
      "标准库量大，包管理器（deno add）内置",
      "Node.js 与 npm 包也能用",
      "Rust 编写，性能不错"
    ],
    tags:["Runtime","JS","TS"], lang:"Rust", lic:"MIT", repo:"denoland/deno" },

  { name:"esbuild",   cat:"dev",
    desc:"Go 写的 JS / TS 打包器与转译器，快一个数量级。",
    intro:"esbuild 是 JavaScript / TypeScript 打包器与转译器，用 Go 编写。它比 webpack、Rollup 这类传统工具快一到两个数量级，如今很多前端项目默认用它。tree shaking、代码分割、CSS 处理都支持，各类框架和构建工具也能深度集成。",
    features:[
      "构建与转译快，比传统工具快 10–100 倍",
      "JavaScript、TypeScript、JSX、CSS、JSON 都支持",
      "tree shaking、代码分割、压缩内置",
      "Go 编写，单二进制，安装零依赖",
      "有插件系统，各种构建流程能接进去",
      "单当转译器用也行"
    ],
    tags:["打包器","JS","转译器"], lang:"Go", lic:"MIT", repo:"evanw/esbuild" },

  { name:"Astro",     cat:"dev",
    desc:"面向内容站点的 Web 框架，默认零 JS，UI 框架可混用。",
    intro:"Astro 是面向内容站点的 Web 框架，核心理念是默认零 JS：页面默认不输出 JavaScript，性能很好，同时又能把 React、Vue、Svelte 这些 UI 框架混用在同一个项目里。内容集合、岛屿架构、图片组件都做得不错，内容站、文档站、营销站选它的多。",
    features:[
      "页面默认零 JS，加载很快",
      "岛屿架构：交互只在需要的地方激活",
      "React / Vue / Svelte / Solid 可以混着用",
      "内容集合支持 Markdown / MDX / 数据文件，带类型安全",
      "图片组件内置，优化和响应式自动做",
      "SSR / SSG / 混合输出，部署一键"
    ],
    tags:["框架","SSG","内容"], lang:"TypeScript", lic:"MIT", repo:"withastro/astro" },

  { name:"Llama.cpp", cat:"ai",
    desc:"纯 C/C++ 的大模型推理，CPU、轻量硬件也能跑。",
    intro:"Llama.cpp 用纯 C/C++ 实现大语言模型的推理与微调，目标是让大模型跑在 CPU、笔记本甚至树莓派这类轻量硬件上，不需要 GPU 和深度学习框架。Llama、Mistral、Qwen 等大量模型的量化推理都支持，自带命令行工具和推理服务器，本地跑大模型它算基础设施之一。",
    features:[
      "纯 C/C++，无依赖，CPU 就能跑，不需要 GPU",
      "Llama、Mistral、Qwen、Gemma，支持的模型量大",
      "Q4 / Q5 / Q8 量化推理，小内存也能跑大模型",
      "推理服务器内置，API 兼容 OpenAI",
      "命令行工具，一条命令单轮问答",
      "Linux、macOS、Windows、ARM 都能跑"
    ],
    tags:["LLM","本地","推理"], lang:"C++", lic:"MIT", repo:"ggml-org/llama.cpp" },

  { name:"Qdrant",    cat:"ai",
    desc:"高性能向量数据库，语义搜索与 RAG 的底座。",
    intro:"Qdrant 是高性能向量数据库，专为语义搜索和机器学习工作负载优化。向量和关联的载荷（payload）存在一起，过滤能力强，索引与量化方案多种，RAG（检索增强生成）和语义搜索里它是核心组件。REST / gRPC API 都有，Docker 部署一条命令。",
    features:[
      "向量存储与检索性能高，语义搜索延迟低",
      "标量属性和向量结合的过滤，检索打得准",
      "量化加索引，省内存也提速度",
      "REST / gRPC API，多语言客户端 SDK",
      "分布式部署、水平扩展支持",
      "Docker 一键部署，可观测性自带"
    ],
    tags:["向量数据库","RAG","搜索"], lang:"Rust", lic:"Apache-2.0", repo:"qdrant/qdrant" },

  { name:"Diffusers", cat:"ai",
    desc:"Hugging Face 扩散模型库，统一 API 做图像视频生成。",
    intro:"Diffusers 是 Hugging Face 的扩散模型库，提供一套统一易用的 API，加载和运行 Stable Diffusion、ControlNet 等大量扩散模型，覆盖图像生成、视频生成、超分辨率等任务。配上 Hub 上的模型资源，它是做 AI 图像 / 视频生成应用的常用工具。",
    features:[
      "统一 API，大量扩散模型可加载运行",
      "图像生成、视频生成、超分辨率等任务都支持",
      "Pipeline 把完整推理流程一键串起来",
      "与 Hub 深度集成，模型随取随用",
      "多种量化与加速方案可选",
      "自定义模型与调度器能插进来，扩展性好"
    ],
    tags:["图像生成","扩散","视频生成"], lang:"Python", lic:"Apache-2.0", repo:"huggingface/diffusers" },

  { name:"Gradio",    cat:"ai",
    desc:"几行 Python 给 ML 模型套一个 Web 界面。",
    intro:"Gradio 用来给机器学习模型快速搭 Web 界面：几行 Python，模型的输入输出就变成干净好用的网页，不需要前端知识。文本、图像、音频、视频、文件等组件齐全，做演示、内部工具、快速原型都合适，本地或云端都能部署。",
    features:[
      "Web UI 几分钟搭好，前端知识用不上",
      "组件多：文本、图像、音频、视频、文件、数据",
      "类型自动映射，模型函数直接连",
      "分享链接内置，演示一键对外",
      "本地或云端（Spaces 等）都能部署",
      "主题可定制，布局响应式"
    ],
    tags:["ML","UI","原型"], lang:"Python", lic:"Apache-2.0", repo:"gradio-app/gradio" },

  { name:"Krita",     cat:"design",
    desc:"开源数字绘画软件，笔刷引擎专业，带动画功能。",
    intro:"Krita 面向插画师、概念设计师和漫画作者，是专业的开源数字绘画软件。笔刷引擎好用、预设多，动画有时间轴和洋葱皮这些完整功能，文件格式与图层支持量大，还有纹理笔刷和色彩管理。免费数字绘画里，提它的人最多。",
    features:[
      "笔刷引擎专业，预设量大，手感自然",
      "动画功能完整：时间轴、洋葱皮、帧插值",
      "图层、剪裁蒙版、选择与变换工具齐",
      "PSD、OpenRaster 等格式都支持",
      "纹理笔刷、色彩管理、HDR 都有",
      "有插件系统，跨平台，免费开源"
    ],
    tags:["数字绘画","插画","动画"], lang:"C++", lic:"GPL-3.0", repo:"KDE/krita" },

  { name:"Kdenlive",  cat:"design",
    desc:"开源非线性视频剪辑：多轨、滤镜、关键帧动画。",
    intro:"Kdenlive 是专业的开源非线性视频编辑软件：多轨时间线剪辑，滤镜与转场量大，关键帧动画逐属性控制，4K 与 HDR 工作流能处理，字幕编辑和音频工具也自带。个人和小型团队做视频创作够用，Linux 生态下它算头部编辑器。",
    features:[
      "非线性剪辑，多轨时间线，控制精确到帧",
      "滤镜、转场、特效可选的多",
      "关键帧动画，逐个属性精细调",
      "4K 与 HDR 工作流支持",
      "音视频多格式导入，字幕可编辑",
      "跨平台开源，插件可选的多"
    ],
    tags:["视频剪辑","NLE"], lang:"C++", lic:"GPL-3.0", repo:"KDE/kdenlive" },

  { name:"draw.io",   cat:"design",
    desc:"免费在线图表与流程图工具，支持 diagram-as-code，可自托管。",
    intro:"draw.io（diagrams.net）是免费的在线图表与流程图工具。流程图、UML、网络拓扑、电路图、组织架构图都画得了，拖拽画布、自动对齐、实时协作配套。还支持 diagram-as-code，用 SVG / XML 嵌入与渲染。免费在线用，也能自托管。",
    features:[
      "图表类型多：流程图、UML、网络、电路、组织架构图",
      "画布拖拽，自动对齐和引导线帮忙排版",
      "实时协作，多人共享编辑",
      "diagram-as-code：SVG / XML 可嵌入渲染",
      "PNG、SVG、PDF 等格式导入导出都行",
      "免费使用，可自托管，开源"
    ],
    tags:["图表","流程图","UML"], lang:"TypeScript", lic:"Apache-2.0", repo:"jgraph/drawio" },

  { name:"Docker",    cat:"host",
    desc:"容器引擎，应用连环境打包成镜像，到哪跑都一样。",
    intro:"Docker 是容器平台：应用连同依赖、运行时、系统工具打包成一个轻量可移植的镜像，开发、测试、生产环境表现一致。镜像仓库资源丰富（Docker Hub、私有 registry），多容器编排也支持，如今应用交付与部署基本都走它。",
    features:[
      "镜像加容器打包，环境隔离、可复现",
      "Docker Hub、私有 registry，镜像仓库资源多",
      "Dockerfile 声明式构建自定义镜像",
      "compose 编排多容器，几个服务一键起来",
      "网络、卷、资源限制都能管",
      "Windows、macOS、Linux、ARM 都支持"
    ],
    tags:["容器","DevOps","镜像"], lang:"Go", lic:"Apache-2.0", repo:"moby/moby" },

  { name:"Kubernetes", cat:"host",
    desc:"容器编排平台：自动部署、扩缩容、故障自愈。",
    intro:"Kubernetes（K8s）是业界标准的容器编排平台，自动管理容器化应用的部署、扩缩容、负载均衡与故障恢复，你用声明式 API 描述期望状态就行。Helm、operator、服务网格这些资源围着它长，云原生应用基本都拿它当基础设施。",
    features:[
      "容器编排：部署、滚动更新、扩缩容自动化",
      "自愈能力：自动重启、存活探针兜底",
      "服务发现、负载均衡、Ingress 都有",
      "期望状态用 YAML 描述，API 是声明式的",
      "Helm、operator、服务网格、CI/CD，资源多",
      "跨云、本地、混合环境都能部署"
    ],
    tags:["编排","云原生","DevOps"], lang:"Go", lic:"Apache-2.0", repo:"kubernetes/kubernetes" },

  { name:"Prometheus", cat:"host",
    desc:"监控系统：时序库加 PromQL 查询，配告警。",
    intro:"Prometheus 是开源监控与告警系统，云原生监控里它是核心组件。指标靠拉取（scrape）各服务采集，PromQL 查询语言做灵活计算，告警规则和 Alertmanager 的路由机制配套。系统监控选型，它最常见。",
    features:[
      "指标采集加时间序列存储",
      "PromQL 查询语言，指标计算灵活",
      "告警规则内置，Alertmanager 负责路由与抑制",
      "节点、进程、中间件，exporter 资源多",
      "服务发现、多维标签支持",
      "单个 Go 二进制，跨平台"
    ],
    tags:["监控","告警","指标"], lang:"Go", lic:"Apache-2.0", repo:"prometheus/prometheus" },

  { name:"Grafana",   cat:"host",
    desc:"开源可视化仪表盘，数据源接一大片。",
    intro:"Grafana 是开源的数据可视化与仪表盘软件，Prometheus、MySQL、Elasticsearch 等多种数据源都能连，交互式仪表盘搭起来顺手，告警与标注也有。它和 Prometheus 搭配是常见的开源监控方案，插件和社区仪表盘模板都多。",
    features:[
      "指标、日志、链路，多种数据源都能连",
      "可视化类型多：时序图、热力图、地理、表格",
      "仪表盘可交互，变量、下钻支持",
      "告警与标注都有",
      "插件多，社区仪表盘模板随手可取",
      "多租户、权限管理，跨平台"
    ],
    tags:["可视化","仪表盘","监控"], lang:"TypeScript", lic:"AGPL-3.0", repo:"grafana/grafana" },

  { name:"Restic",    cat:"host",
    desc:"加密去重增量备份，云端本地后端都收。",
    intro:"Restic 做加密、去重、增量的备份：数据压缩加密去重之后，S3、GCS、B2、SFTP、本地等多种后端都能存。增量备份省时省空间，命令行友好，快照能对比、能恢复。个人和企业备份数据，选它的不少。",
    features:[
      "备份加密、去重、走增量",
      "后端多：S3、GCS、B2、SFTP、本地",
      "压缩加加密，数据稳妥",
      "命令行友好，快照可管理可对比",
      "定时备份、保留策略支持",
      "跨平台，单二进制"
    ],
    tags:["备份","加密","云存储"], lang:"Go", lic:"BSD-2-Clause", repo:"restic/restic" },

  { name:"Uptime Kuma", cat:"host",
    desc:"自托管站点监控，状态页加多渠道告警。",
    intro:"Uptime Kuma 是易用的自托管在线监控工具。HTTP、TCP、Ping、关键字、SSL 证书这些监控方式都支持，告警走邮件、Telegram、Slack 等渠道实时发出，状态页做得好看。个人和团队盯自己的服务，用它省事。",
    features:[
      "监控类型多：HTTP、TCP、Ping、关键字、SSL",
      "通知渠道多：邮件、Telegram、Slack、webhook",
      "状态页美观，可公开可私有",
      "自托管，Docker 一键部署",
      "历史可用性和响应时间都有统计",
      "多用户、权限管理，跨平台"
    ],
    tags:["监控","在线状态","自托管"], lang:"TypeScript", lic:"MIT", repo:"louislam/uptime-kuma" },
  { name:"Joplin", cat:"prod",
    desc:"开源笔记与待办应用，端到端加密同步，全平台。",
    intro:"Joplin 是开源的笔记与任务管理应用，Windows、macOS、Linux、iOS、Android 全平台覆盖。笔记、待办、标签、笔记本组织成体系，Markdown 和富文本都支持。同步走端到端加密，数据放在自己的服务器或网盘里，平台看不到明文。",
    features:[
      "桌面、手机、网页一套笔记体系，全端覆盖",
      "端到端加密同步，数据存自己的 Nextcloud / WebDAV / Dropbox",
      "笔记本、标签、待办多层组织，笔记本可嵌套",
      "Markdown 与富文本双写，代码块、表格、任务列表原生支持",
      "Evernote、Notion 等主流笔记应用的数据能导入",
      "开源免费，社区活跃，插件可扩展"
    ],
    tags:["笔记","加密","跨平台"], lang:"TypeScript", lic:"GPL-3.0", repo:"laurent22/joplin" },
  { name:"Bitwarden", cat:"net",
    desc:"开源密码管理器，服务器可自托管，全平台同步。",
    intro:"Bitwarden 是开源的密码管理方案，客户端全平台覆盖，服务器可以自己托管。密码、SSH 密钥、支付卡、安全笔记集中管，主密码加端到端加密保护，不必绑在任何一家云厂商上。",
    features:[
      "服务器可自托管，密码库数据完全在自己手里",
      "客户端加密后才上传，服务器只见密文",
      "桌面、浏览器、手机、命令行客户端都有，还提供 API",
      "强密码生成、表单自动填充，SSH 密钥和支付卡也能管",
      "团队共享集合、权限控制，团队密钥管理够用",
      "开源免费，社区维护的 Vaultwarden 更轻量好部署"
    ],
    tags:["密码管理","安全","自托管"], lang:"TypeScript", lic:"GPL-3.0", repo:"bitwarden/server" },
  { name:"VLC", cat:"media",
    desc:"开源媒体播放器，常见音视频格式基本都能直接播。",
    intro:"VLC（VideoLAN Client）是最出名的开源媒体播放器，Windows、macOS、Linux、Android、iOS 都有版本。绝大多数音视频格式的解码器内置，文件、光盘、网络串流都能播，顺手还能做格式转换。免费、无广告、无追踪，跨平台播放用它的人最多。",
    features:[
      "解码器内置，常见音视频格式直接播，不用装解码包",
      "本地文件、CD/DVD/蓝光、网络串流、直播源都能播",
      "桌面、手机、电视（Android TV），全端覆盖",
      "媒体库、播放列表、字幕加载都有",
      "附带格式转换，媒体能转成通用格式",
      "无广告、无追踪，完全开源免费"
    ],
    tags:["播放器","媒体","跨平台"], lang:"C", lic:"GPL-2.0", repo:"videolan/vlc" },
  { name:"mpv", cat:"media",
    desc:"命令行驱动的高性能播放器，画质好、占用低。",
    intro:"mpv 是命令行驱动的高性能媒体播放器，画面质量好、资源占用低。界面不花哨，行为全靠配置文件和快捷键控制，但播放体验调得很细：软解硬解、画质增强、HDR，都能精细校。进阶玩家偏爱它。",
    features:[
      "画质强项：HDR、色调映射、各类滤镜与画质增强",
      "硬解全面：NVDEC、VAAPI、VideoToolbox 都支持",
      "一个配置文件定义全部行为，定制空间大",
      "占用低，老机器播高清视频也流畅",
      "跨平台，命令行、终端、图形界面都有",
      "Lua / JavaScript 脚本可扩功能"
    ],
    tags:["播放器","命令行","画质"], lang:"C", lic:"GPL-2.0", repo:"mpv-player/mpv" },
  { name:"Jellyfin", cat:"host",
    desc:"开源家庭媒体服务器，自建一套流媒体。",
    intro:"Jellyfin 是开源的家庭媒体服务器，把本地的电影、剧集、音乐、照片整理成串流服务，浏览器和电视盒子都能访问。没有订阅费、没有广告、不收集数据，界面和体验对标商业流媒体。折腾党自建影音库，多半就是它。",
    features:[
      "媒体元数据自动抓取，海报、简介、演员信息补齐",
      "实时转码，手机 / 电视 / 网页都能流畅播",
      "多用户、播放进度、续播推荐，体验对标 Netflix",
      "无订阅费、无广告，完全自托管，数据不出家门",
      "Android TV、Apple TV、Fire TV、Roku 等大屏端支持",
      "开源免费，社区插件多"
    ],
    tags:["媒体服务器","自托管","影音库"], lang:"C#", lic:"GPL-3.0", repo:"jellyfin/jellyfin" },
  { name:"Nextcloud", cat:"host",
    desc:"自托管网盘与协作平台，Google Drive 的开源替代。",
    intro:"Nextcloud 是自托管的网盘与协作套件，相当于自己搭一套 Google Drive：文件存储、共享、实时协作编辑、日历、通讯录、任务都有，应用市场还能继续加装。数据完全在自己服务器上，隐私敏感的团队和个人自建云盘多用它。",
    features:[
      "文件存在自己服务器上，数据自主可控",
      "桌面、手机、网页、WebDAV，多端同步共享",
      "实时协作编辑，接 OnlyOffice / Collabora",
      "日历、通讯录、任务、便签，办公套件齐全",
      "可选端到端加密，敏感文件加一层保护",
      "应用市场扩展多，按需加装"
    ],
    tags:["网盘","自托管","协作"], lang:"PHP", lic:"AGPL-3.0", repo:"nextcloud/server" },
  { name:"DBeaver", cat:"dev",
    desc:"开源通用数据库客户端，几十种数据库都能连。",
    intro:"DBeaver 是开源的跨平台数据库管理工具，一个客户端连 MySQL、PostgreSQL、Oracle、SQL Server、SQLite、ClickHouse 等几十种数据库。SQL 编辑器、数据浏览、ER 图、导入导出、数据同步都在，DBA 和开发者的通用工作台。",
    features:[
      "关系型、NoSQL、OLAP，几十种数据库都能连",
      "SQL 编辑器完整：语法高亮、自动补全、执行计划",
      "数据浏览和编辑图形化，表结构直接改",
      "ER 图可视化，复杂数据模型看得清",
      "数据导入导出、跨库同步都支持",
      "跨平台开源免费，企业版可商用"
    ],
    tags:["数据库","DBA","SQL"], lang:"Java", lic:"Apache-2.0", repo:"dbeaver/dbeaver" },
  { name:"Wireshark", cat:"net",
    desc:"业界标准的网络抓包分析器，逐包排查问题。",
    intro:"Wireshark 是业界标准的网络协议分析器，实时捕获网络流量，逐包解码上千种协议。排查网络故障、分析协议行为、做安全审计，它把看不见的流量变成看得懂的包序列，网络和安全工程师基本人手一个。",
    features:[
      "实时抓包，上千种协议深度解码",
      "过滤器好用：按协议、地址、内容快速筛",
      "流重组、时序分析，定位网络问题",
      "Windows、macOS、Linux 都有版本",
      "pcap 文件可离线分析，历史流量能复盘",
      "开源免费，协议解析可用插件扩"
    ],
    tags:["抓包","网络分析","安全"], lang:"C", lic:"GPL-2.0", repo:"wireshark/wireshark" },
  { name:"OPNsense", cat:"net",
    desc:"FreeBSD 上的开源防火墙与路由器，网络边界防护。",
    intro:"OPNsense 是基于 FreeBSD 的开源防火墙与路由器系统，防火墙规则、NAT、VPN、流量整形、入侵检测这些网络防护能力给得全。企业级边界安全开源化了，自建机房、家庭网络、边缘节点做入口防护和流量管控都对口。",
    features:[
      "状态化防火墙规则，访问控制做得细",
      "VPN 内置：WireGuard、OpenVPN、IPsec，远程接入安全",
      "流量整形与 QoS，带宽分配、限速都能设",
      "IDS/IPS 入侵检测与预防，威胁实时告警",
      "负载均衡与高可用（HA）部署支持",
      "底座是 FreeBSD，稳定，社区活跃"
    ],
    tags:["防火墙","路由器","网络防护"], lang:"PHP", lic:"MIT", repo:"opnsense/core" },
  { name:"Bruno", cat:"dev",
    desc:"开源 API 测试客户端，Git 友好，Postman 的替代。",
    intro:"Bruno 是开源的 API 测试与调试客户端，定位 Postman 的开源替代。它最大的特点是 Git 友好：请求、集合、环境配置全是纯文本文件，直接放进 Git 仓库做版本管理和团队协作，SaaS 锁定就此摆脱。开发者本地调 API，多了个新选择。",
    features:[
      "集合管理齐活：请求、环境变量、前置/后置脚本都有",
      "请求与配置全是文本文件，版本管理直接进 Git",
      "REST、GraphQL、WebSocket、gRPC 多种协议支持",
      "离线优先：无账号、无云锁定，数据存本地",
      "cURL 导入导出支持，Postman 集合兼容",
      "跨平台桌面客户端，开源免费"
    ],
    tags:["API测试","Postman","开发者工具"], lang:"TypeScript", lic:"MIT", repo:"usebruno/bruno" },
  { name:"Metabase", cat:"ai",
    desc:"开源 BI 平台，不懂 SQL 的业务人员也能自助查数。",
    intro:"Metabase 是开源的商业智能与数据可视化平台，不懂 SQL 的业务人员也能自助查数据库、拖拽做出图表和仪表盘。它能连各类数据库，支持自然语言提问、预定义问题、权限管控，中小团队自建数据分析平台，用它性价比高。",
    features:[
      "拖拽建图，不写 SQL 也能出报表和仪表盘",
      "MySQL、PostgreSQL、ClickHouse 等主流数据源能连",
      "自然语言提问，业务人员自助取数",
      "预定义问题加定时报告，分析结果主动推送",
      "细粒度权限加行级过滤，数据可见范围可控",
      "开源自托管，没有席位费，社区活跃"
    ],
    tags:["数据可视化","BI","自助分析"], lang:"Clojure", lic:"AGPL-3.0", repo:"metabase/metabase" },
  { name:"Stable Diffusion WebUI", cat:"ai",
    desc:"Stable Diffusion 的图形化文生图界面，本地 AI 绘画主力。",
    intro:"Stable Diffusion WebUI 围绕 Stable Diffusion 模型构建，做图形化的文生图和图生图。提示词、负向提示词、采样器、分辨率、LoRA、ControlNet，创作控制项给得完整，AI 绘画的门槛从命令行降到拖拽可用。本地跑 AI 绘画，它算是事实上的标准入口。",
    features:[
      "文生图、图生图，靠提示词出图",
      "采样器、步数、CFG、分辨率、种子，参数全可调",
      "LoRA 与 ControlNet，风格和构图精确控制",
      "ADetailer、Regional Prompt 等扩展多，能力一直在加",
      "本地运行，模型和数据不出机器",
      "跨平台，社区教程与模型资源多"
    ],
    tags:["AI绘画","文生图","Stable Diffusion"], lang:"Python", lic:"GPL-3.0", repo:"AUTOMATIC1111/stable-diffusion-webui" },

  { name:"Git",     cat:"dev",
    desc:"分布式版本控制，软件协作的事实标准。",
    intro:"Git 是 Linus Torvalds 为管理 Linux 内核创建的分布式版本控制系统。版本历史存在本地，克隆、分支、合并延迟极低，如今开源项目和团队协作的底层基本都是它。从提交、回滚到复杂合并，Git 给出一整套精确高效的版本管理原语。",
    features:[
      "分布式：每个本地仓库都是完整副本，离线也能提交回溯",
      "分支轻量，创建、切换、合并毫秒级，鼓励多开分支",
      "合并与 rebase 能力强，复杂协作历史处理得了",
      "暂存区让你精确控制每次提交的内容",
      "钩子、子模块、稀疏检出，高级能力都有",
      "GPL-2.0 开源，跨平台，围着它的工具多"
    ],
    tags:["版本控制","VCS","CLI"], lang:"C", lic:"GPL-2.0", repo:"git/git" },

  { name:"Python",  cat:"dev",
    desc:"通用编程语言，语法好读，脚本到 AI 都能写。",
    intro:"Python 靠可读性出名，是 Guido van Rossum 创造的语言。语法接近自然语言，上手不难，标准库和第三方包都很厚。Web、自动化、数据分析、机器学习里到处是它，AI 时代最热闹的语言也是它。",
    features:[
      "语法简洁，缩进就是结构，上手快",
      "标准库覆盖文件、网络、并发、系统操作",
      "第三方包多，pip 一键装数十万个",
      "解释型、动态类型，写原型和脚本很快",
      "面向对象、函数式、过程式都支持",
      "开源（PSF 许可），跨平台，社区活跃"
    ],
    tags:["编程语言","解释器","AI"], lang:"C", lic:"PSF", repo:"python/cpython" },

  { name:"Node.js", cat:"dev",
    desc:"V8 驱动的 JavaScript 运行时，JS 能跑服务器了。",
    intro:"Node.js 把 JavaScript 带到服务器端，内核是 Chrome 的 V8 引擎。事件驱动、非阻塞 I/O，单线程也能扛大量并发连接。前后端用同一门语言，npm 这个全球最大包生态也从它长出来，全栈开发和现代后端绕不开它。",
    features:[
      "事件循环加非阻塞 I/O，单线程扛高并发",
      "前后端共用 JavaScript",
      "npm 是全球最大的包仓库",
      "Express、Fastify、Koa 等服务器框架都成熟",
      "写 CLI 和工具链也顺手",
      "开源（MIT），跨平台，性能一直在优化"
    ],
    tags:["运行时","JavaScript","后端"], lang:"C++", lic:"MIT", repo:"nodejs/node" },

  { name:"npm",     cat:"dev",
    desc:"Node.js 自带包管理器，全球最大软件注册表。",
    intro:"npm 是 Node.js 的默认包管理器，也是全球最大的开源软件注册表，收着几百万个包。依赖解析、版本锁定、脚本编排都归它管，JavaScript 开发从手写一切变成按需安装。package.json 加 scripts 这套机制，如今就是前端工程的标配配置。",
    features:[
      "全球最大的包注册表，可复用包几百万",
      "语义化版本，依赖树自动解析",
      "package-lock.json 锁死版本，构建可复现",
      "scripts 编排 install、build、test，一条命令",
      "workspaces 工作区能管大型 monorepo",
      "开源（ISC），跨平台，和 CI/CD 配合深"
    ],
    tags:["包管理","JavaScript","CLI"], lang:"JavaScript", lic:"ISC", repo:"npm/cli" },

  { name:"Rust",    cat:"dev",
    desc:"系统级语言，内存安全和性能都过硬。",
    intro:"Rust 盯着内存安全和并发这两件事，Mozilla 发起，现在归 Rust 基金会。所有权加借用检查在编译期就掐掉空指针和数据竞争，不用垃圾回收也有 C++ 级性能。CLI 工具、WebAssembly、操作系统内核里，用它的项目越来越多。",
    features:[
      "所有权系统编译期管内存，无 GC、无空指针",
      "零成本抽象，高级语法不拖运行时后腿",
      "fearless concurrency，类型系统杜绝数据竞争",
      "Cargo 管构建和依赖，省心",
      "宏系统和 trait 泛型玩得开",
      "开源（MIT/Apache-2.0），跨平台，连年当选最爱语言"
    ],
    tags:["编程语言","系统编程","安全"], lang:"Rust", lic:"MIT OR Apache-2.0", repo:"rust-lang/rust" },

  { name:"Go",      cat:"dev",
    desc:"谷歌出品，简单高效，云原生时代的基石。",
    intro:"Go（Golang）是谷歌三人组设计的语言，图的就是简单、快。垃圾回收内置，并发靠 goroutine 加 channel，编译快，产物就一个二进制，扔哪台机器都能跑。Docker、Kubernetes 这批云原生基础设施多是 Go 写的，后端和基础设施工具它早就是主流选项。",
    features:[
      "goroutine 加 channel，并发写得轻",
      "编译快、二进制小，没有运行时依赖，部署省事",
      "语法极简，学习曲线平",
      "网络、并发、测试的标准库都够用",
      "go mod 管依赖，构建可复现",
      "开源（BSD-3-Clause），云原生生态的核心"
    ],
    tags:["编程语言","云原生","并发"], lang:"Go", lic:"BSD-3-Clause", repo:"golang/go" },

  { name:"PostgreSQL", cat:"dev",
    desc:"老牌开源关系数据库，守标准、够可靠。",
    intro:"PostgreSQL 做了三十多年，是开源对象关系数据库，出了名的严格守 SQL 标准、功能全、稳。复杂查询、JSON、全文检索、地理信息、自定义类型和扩展都支持，正经生产系统常把它当首选。MVCC 加 WAL，高并发下数据照样一致。",
    features:[
      "SQL 标准跟得严，功能完整",
      "PostGIS、pg_trgm、逻辑复制这些扩展随便装",
      "JSON / JSONB 玩得转，当文档库使也行",
      "MVCC 管并发，高并发下数据一致",
      "复制、分区、全文检索都很成熟",
      "开源（PostgreSQL 许可），跨平台，企业级靠得住"
    ],
    tags:["数据库","SQL","关系型"], lang:"C", lic:"PostgreSQL", repo:"postgres/postgres" },

  { name:"MySQL",   cat:"dev",
    desc:"部署量最大的开源关系数据库，Web 后端基石。",
    intro:"MySQL 全球部署量最大，最早是瑞典 MySQL AB 做的，后来归了 Oracle。性能、易用、配套成熟是它的标签，LAMP 架构里它是核心，养着海量 Web 应用。InnoDB 引擎管事务和行级锁，配上主从复制、分库分表，规模能做很大。",
    features:[
      "InnoDB 引擎带事务、行级锁、崩溃恢复",
      "主从复制和高可用方案成熟",
      "存储引擎可以换着选",
      "工具链大，文档齐全",
      "索引、查询缓存、分区，性能手段多",
      "开源（GPL-2.0），跨平台，社区大"
    ],
    tags:["数据库","SQL","关系型"], lang:"C++", lic:"GPL-2.0", repo:"mysql/mysql-server" },

  { name:"Redis",   cat:"dev",
    desc:"内存键值存储，做缓存、存会话常选它。",
    intro:"Redis 是开源的内存数据结构存储，缓存、消息队列、会话存储都用它。读写快，数据结构多——字符串、列表、哈希、集合、有序集合——还能持久化。原子操作和发布订阅一配合，做实时系统、限流、排行榜很顺手。",
    features:[
      "数据放内存里，读写非常快",
      "String、List、Hash、Set、ZSet 结构齐全",
      "原子操作加 Lua 脚本，并发安全有保障",
      "持久化两条路：RDB 快照、AOF 日志",
      "发布订阅和 Stream 消息队列都内置",
      "开源（BSD-3-Clause/SSPL），跨平台，用得地方多"
    ],
    tags:["缓存","键值","内存"], lang:"C", lic:"BSD-3-Clause", repo:"redis/redis" },

  { name:"MongoDB", cat:"dev",
    desc:"文档数据库，schema 灵活，能水平扩。",
    intro:"MongoDB 是开源文档数据库，数据按 BSON 存，长得像 JSON，schema 不用预先定，迭代快的项目合适用。水平扩展靠自动分片，查询能力灵活，是 NoSQL 阵营的代表作，Web 和移动应用存半结构化数据常找它。",
    features:[
      "BSON 存文档，schema 想改就改",
      "自动分片做水平扩展，数据量大也撑得住",
      "查询和聚合管道功能多",
      "多文档事务，一致性有保障",
      "副本集自带高可用，故障自动转移",
      "开源（SSPL-1.0），跨平台，配套成熟"
    ],
    tags:["数据库","NoSQL","文档型"], lang:"C++", lic:"SSPL-1.0", repo:"mongodb/mongo" },

  { name:"SQLite",  cat:"dev",
    desc:"嵌入式关系数据库，一个文件就是一个库。",
    intro:"SQLite 零配置，整个数据库就是一个文件，不用拉起服务进程。小、快、稳，手机、浏览器、操作系统里到处埋着它。标准 SQL 支持，事务完整，轻量应用和本地存储，不少人直接拿它当默认选项。",
    features:[
      "一个文件即数据库，没有服务进程",
      "体积小，嵌进应用就行",
      "事务完整，ACID 保证",
      "标准 SQL，兼容性好",
      "内存映射加优化器，速度快",
      "公有领域，跨平台，装机量数十亿设备"
    ],
    tags:["数据库","嵌入式","SQL"], lang:"C", lic:"Public Domain", repo:"sqlite/sqlite" },

  { name:"Jupyter Notebook", cat:"dev",
    desc:"交互式计算笔记本，数据科学的标准工作台。",
    intro:"Jupyter Notebook 是网页里的交互式计算环境，代码、文字、公式、图表写在一页，一格一格跑。数据科学和机器学习的教学、研究基本都认它，Python、R、Julia 等几十种语言都有内核。配上可视化库，探数据、验原型很合适。",
    features:[
      "逐格运行，结果当场出",
      "图表、表格、LaTeX、Markdown 混着排",
      "Python、R、Julia 等几十种语言内核",
      "和数据科学库配合紧密",
      "能导出 HTML、PDF、幻灯片",
      "开源（BSD-3-Clause），跨平台，社区大"
    ],
    tags:["数据科学","笔记本","交互式"], lang:"Python", lic:"BSD-3-Clause", repo:"jupyter/notebook" },

  { name:"Vite",    cat:"dev",
    desc:"前端构建工具，开发时热更新是秒级的。",
    intro:"Vite 是 Vue 作者做的新一代前端构建工具。开发时直接用浏览器原生 ES 模块，不预打包，冷启动毫秒级，改代码即时热更新；生产环境交给 Rollup 优化打包。React、Vue、Svelte 项目用它的很多。",
    features:[
      "开发时走原生 ESM，冷启动毫秒级",
      "HMR 热替换，改代码秒级生效",
      "生产用 Rollup 打包，产物经过优化",
      "TypeScript、JSX、CSS 预处理内置",
      "官方和社区插件都不少",
      "开源（MIT），跨平台，速度快"
    ],
    tags:["构建工具","前端","打包"], lang:"TypeScript", lic:"MIT", repo:"vitejs/vite" },

  { name:"Webpack", cat:"dev",
    desc:"模块打包器，前端工程的老牌底座。",
    intro:"Webpack 是静态模块打包器，把 JS、CSS、图片、字体都当模块，解析成模块图再打包，产物浏览器直接能跑。插件和 loader 生态很大，前端的构建需求基本都能接住，不少大型前端项目底层跑的就是它。",
    features:[
      "什么资源都能进模块图当模块打包",
      "loader 和插件多到挑花眼",
      "代码分割、懒加载、Tree Shaking 全支持",
      "HMR 热替换，开发不卡壳",
      "配置够灵活，复杂工程扛得住",
      "开源（MIT），跨平台，生态成熟稳定"
    ],
    tags:["构建工具","前端","打包"], lang:"JavaScript", lic:"MIT", repo:"webpack/webpack" },

  { name:"Jest",    cat:"dev",
    desc:"Facebook 的 JavaScript 测试框架，装完就能写测试。",
    intro:"Jest 是 Facebook 开源的 JavaScript 测试框架，主打零配置。断言、mock、快照测试都是内置，API 默认像 Jasmine。跑得快，模块之间隔离干净，React 和 Node.js 项目里它是最常见的测试方案之一。",
    features:[
      "零配置，装完直接写测试",
      "mock、spy、快照测试内置",
      "并行跑，速度不慢",
      "模块隔离，测试互不打扰",
      "跟 React、React Testing Library 配合深",
      "开源（MIT），跨平台，社区大"
    ],
    tags:["测试","JavaScript","单元测试"], lang:"JavaScript", lic:"MIT", repo:"jestjs/jest" },

  { name:"Playwright", cat:"dev",
    desc:"微软的端到端浏览器自动化框架。",
    intro:"Playwright 是微软开源的浏览器自动化与 E2E 测试框架，Chromium、Firefox、WebKit 三大引擎都支持。稳、快、跨浏览器，自动等待、网络拦截、多上下文并行都是内置能力，E2E 测试那种脆弱易碎的毛病它治了不少。",
    features:[
      "一套代码跑 Chromium、Firefox、WebKit",
      "自动等待，不用 sleep，测试稳",
      "网络拦截加 mock，隔离干净",
      "多浏览器上下文并行，跑得快",
      "断言和 Trace 调试好用",
      "开源（Apache-2.0），跨平台，企业够用"
    ],
    tags:["测试","E2E","浏览器自动化"], lang:"TypeScript", lic:"Apache-2.0", repo:"microsoft/playwright" },

  { name:"TypeScript", cat:"dev",
    desc:"JS 超集，静态类型托住大型项目。",
    intro:"TypeScript 是微软给 JavaScript 加的一层静态类型。编译期就能抓出不少错误，类型推断和智能提示跟手，大型前端和 Node.js 项目的维护成本明显降。编译产物就是普通 JS，现有生态照用不误。",
    features:[
      "编译期抓错误，运行时 bug 少一截",
      "类型推断强，样板代码省不少",
      "跟 JavaScript 完全兼容，可以渐进采用",
      "编辑器的提示和重构好用",
      "能编译到 ES5/ES6，老环境也吃得下",
      "开源（Apache-2.0），跨平台，已是行业标准"
    ],
    tags:["编程语言","类型","JavaScript"], lang:"TypeScript", lic:"Apache-2.0", repo:"microsoft/TypeScript" },

  { name:"GraphQL", cat:"dev",
    desc:"API 查询语言，客户端要什么字段拿什么。",
    intro:"GraphQL 是 Facebook 开源的 API 查询语言与运行时。客户端把要哪些字段写清楚，服务端就只回这些，REST 那种过度获取、请求不足的问题没了。强类型 schema、自省能力、单端点设计，API 演进和前后端协作顺不少。",
    features:[
      "客户端精确取数，不多拿也不少拿",
      "强类型 schema，前后端契约清楚",
      "自省能力顺带生成交互式文档",
      "单端点，HTTP 请求数降下来",
      "Dataloader 数据加载器治 N+1",
      "开源（MIT），跨平台，配套成熟"
    ],
    tags:["API","查询语言","后端"], lang:"JavaScript", lic:"MIT", repo:"graphql/graphql-js" },

  { name:"Vim",     cat:"dev",
    desc:"经典模态编辑器，键盘流效率标杆。",
    intro:"Vim 1991 年问世，是 vi 的增强版，模态编辑的经典。操作范式是手指不离主键区，配上宏、插件和脚本，成了无数工程师的效率工具。删除、复制、替换这类命令走“动词+对象”的组合，用熟了很快。",
    features:[
      "正常、插入、视觉模式，全靠键盘",
      "文本对象加宏，批量操作快",
      "插件成熟，可定制空间大",
      "轻，终端里飞快，SSH 远程改文件的利器",
      "脚本和配置生态完善",
      "开源（Vim 许可），跨平台，年头久"
    ],
    tags:["编辑器","TUI","模态"], lang:"C", lic:"Vim", repo:"vim/vim" },

  { name:"Emacs",   cat:"dev",
    desc:"可扩展编辑器，号称能编程的操作系统。",
    intro:"Emacs 从 1976 年活到今天，内置 Emacs Lisp，插件和扩展都能自己写。它更像可编程的工作环境：日历、邮件、终端、org 笔记都在里面。认“一切皆可扩展”的用户，Emacs 是独一份。",
    features:[
      "用 Emacs Lisp 扩展编辑器本身",
      "org-mode 把笔记、任务、日程串起来",
      "终端、邮件、日历、版本控制都内置",
      "宏和自定义强，工作流全走键盘",
      "插件多，可塑性大",
      "开源（GPL-3.0），跨平台，历史悠久"
    ],
    tags:["编辑器","可编程","Lisp"], lang:"C", lic:"GPL-3.0", repo:"emacs/emacs" },

  { name:"Docker Compose", cat:"dev",
    desc:"一个 YAML 定义并跑起多容器应用。",
    intro:"Docker Compose 用一个 YAML 文件描述一组互相关联的容器——web、db、redis——然后一条命令整套起来。服务间网络、依赖顺序、环境变量它都处理好了。本地开发、演示环境、CI 里搭多服务栈，标配就是它，多容器编排的门槛因此低了不少。",
    features:[
      "YAML 定义多服务，一条命令起一整套",
      "网络自动建，服务按名字互联",
      "依赖顺序和健康检查都管",
      "环境变量、卷挂载，配置灵活",
      "profiles 可以按需开服务",
      "开源（Apache-2.0），跨平台，用得普遍"
    ],
    tags:["容器","编排","开发环境"], lang:"Go", lic:"Apache-2.0", repo:"docker/compose" },

  { name:"Jenkins",  cat:"dev",
    desc:"老牌 CI/CD 服务器，插件多到数不过来。",
    intro:"Jenkins 是老牌开源持续集成/持续交付服务器，Java 写的。插件生态是招牌，数千个插件盖住构建、测试、部署、通知各环节。流水线支持 Pipeline as Code，CI/CD 流程能用声明式语法写。不少企业的自动化交付就是围着它搭的。",
    features:[
      "插件生态庞大，能干的活多",
      "Pipeline as Code，流水线写成声明式",
      "平台和语言基本都能构建",
      "定时任务、触发器、多节点调度",
      "权限、凭据、审计，企业要求接得住",
      "开源（MIT），跨平台，年头久"
    ],
    tags:["CI/CD","自动化","构建"], lang:"Java", lic:"MIT", repo:"jenkinsci/jenkins" },

  { name:"GitLab CE", cat:"dev",
    desc:"DevOps 一体化平台，从代码托管管到部署。",
    intro:"GitLab 把代码托管、CI/CD、代码评审、问题跟踪、制品仓库、容器镜像、监控装进一个产品。CE 是社区版，开源可用。.gitlab-ci.yml 让 CI/CD 配置即代码，不少团队做迁移时落脚的就是这里。",
    features:[
      "代码、CI/CD、问题、制品、镜像，一个产品包办",
      ".gitlab-ci.yml 写 CI/CD，配置即代码",
      "代码评审和合并请求内置",
      "容器镜像、包注册表都有",
      "权限、分支保护、审计，企业能力齐",
      "开源（MIT，CE 版），跨平台，功能完整"
    ],
    tags:["DevOps","代码托管","CI/CD"], lang:"Ruby", lic:"MIT", repo:"" ,official:"https://gitlab.com/gitlab-org/gitlab"},

  { name:"Gradle",  cat:"dev",
    desc:"Java/Android 构建工具，Kotlin DSL 顺手。",
    intro:"Gradle 为 Java 设计，如今是 Android 应用的官方构建系统。脚本走 Groovy 或 Kotlin DSL，高度可定制；增量构建加构建缓存，大项目编译也不慢。依赖管理和多项目构建这两手，让它成了 JVM 生态的构建标杆。",
    features:[
      "构建脚本用 Groovy / Kotlin DSL，灵活",
      "增量构建加缓存，速度上得去",
      "多项目构建，monorepo 友好",
      "依赖管理和冲突处理周全",
      "Android 官方指定构建工具",
      "开源（Apache-2.0），跨平台，生态成熟"
    ],
    tags:["构建工具","JVM","Android"], lang:"Kotlin", lic:"Apache-2.0", repo:"gradle/gradle" },

  { name:"Maven",   cat:"dev",
    desc:"Java 构建与依赖管理，约定优于配置。",
    intro:"Maven 是 Apache 旗下的 Java 构建和依赖管理工具，路子是约定优于配置。pom.xml 描述项目和依赖，依赖传递、仓库解析、编译测试打包这套生命周期它自动管。中央仓库是 Java 包最常见的来路，包管理这块它是老牌默认选择，无数 Java 项目建在它上面。",
    features:[
      "目录结构和生命周期都按约定走",
      "pom.xml 声明依赖，传递依赖自动解析",
      "Maven 中央仓库，全球最大 Java 包仓库",
      "compile、test、package、install 一套生命周期",
      "多模块项目也能构建",
      "开源（Apache-2.0），跨平台，Java 生态标准"
    ],
    tags:["构建工具","依赖管理","Java"], lang:"Java", lic:"Apache-2.0", repo:"apache/maven" },

  { name:"Poetry",  cat:"dev",
    desc:"Python 包与依赖管理，poetry.lock 保可复现。",
    intro:"Poetry 把项目管理、虚拟环境、依赖锁定装进一个工具。依赖写在 pyproject.toml，poetry.lock 锁死精确版本，换台机器构建结果一样。Python 项目的依赖管理，从手动折腾缩成了一条命令。",
    features:[
      "依赖写在 pyproject.toml，标准格式",
      "poetry.lock 锁精确版本，构建可复现",
      "虚拟环境它自动管",
      "依赖解析聪明，冲突会处理",
      "打包发 PyPI 一条命令",
      "开源（MIT），跨平台，Python 社区主流"
    ],
    tags:["包管理","Python","依赖"], lang:"Python", lic:"MIT", repo:"python-poetry/poetry" },

  { name:"Pandoc",  cat:"dev",
    desc:"文档转换器，Markdown 变 PDF、DOCX 都行。",
    intro:"Pandoc 管文档格式转换，号称通用标记语言工具。Markdown、HTML、reStructuredText、LaTeX 等几十种输入，PDF、DOCX、EPUB、幻灯片等输出。学术写作、技术文档、电子书制作常绕不开它，模板和 CSS 能自定义。",
    features:[
      "Markdown、HTML、LaTeX 等几十种输入格式",
      "PDF、DOCX、EPUB、HTML、幻灯片都能出",
      "模板、CSS、参考文献可自定义",
      "数学公式、交叉引用、脚注支持",
      "能批量转，适合学术和文档流水线",
      "开源（GPL-2.0），跨平台，能做的事多"
    ],
    tags:["文档","转换","Markdown"], lang:"Haskell", lic:"GPL-2.0", repo:"jgm/pandoc" },

  { name:"Helix",   cat:"dev",
    desc:"现代模态编辑器，LSP 和 Tree-sitter 内置。",
    intro:"Helix 用 Rust 写，模态编辑器，设计思路是装好就能用、基本不用配置。LSP（语言服务器协议）和 Tree-sitter 语法高亮内置，不必像 Vim/Neovim 那样先装一堆插件，现代编辑体验直接就有。键位直观，新一代终端编辑器的代表。",
    features:[
      "内置 LSP 加 Tree-sitter，装完就用",
      "不折腾配置也有现代编辑体验",
      "键位直观，模态操作快",
      "Rust 写的，性能不差",
      "编码和主题内置多种",
      "开源（MPL-2.0），跨平台，社区活跃"
    ],
    tags:["编辑器","TUI","模态"], lang:"Rust", lic:"MPL-2.0", repo:"helix-editor/helix" },

  { name:"Zsh",     cat:"dev",
    desc:"增强型 Unix shell，Oh-My-Zsh 生态繁荣。",
    intro:"Zsh 兼容 Bourne shell 和 C shell 的写法，是不少开发者的默认 shell。补全、通配符、目录跳转、主题和插件系统是它的长处。套上 Oh-My-Zsh 和一堆插件，交互体验明显好过传统 Bash，想提终端效率的人常换过来。",
    features:[
      "补全和通配符强，Bash 比不了",
      "auto_cd 目录跳转，历史可搜",
      "主题、插件走 Oh-My-Zsh",
      "数组、关联数组这些高级特性有",
      "Bash 脚本兼容，能渐进迁",
      "开源（MIT），跨平台，社区活跃"
    ],
    tags:["Shell","终端","Unix"], lang:"C", lic:"MIT", repo:"zsh-users/zsh" },

  { name:"Bash",    cat:"dev",
    desc:"Unix 事实标准 shell，自动化脚本基石。",
    intro:"Bash 全称 Bourne-Again Shell，是 Unix 和 Linux 的事实标准，系统里基本预装。写自动化脚本、管道处理、系统管理都靠它。管道、重定向、条件判断、函数这几样，撑起 Unix 自动化的核心范式，工程师绕不开的一课。",
    features:[
      "事实标准，系统基本都预装",
      "管道加重定向，命令能搭着用",
      "条件、循环、函数、数组齐活",
      "内建命令多，外部工具接得顺",
      "自动化脚本的老底座",
      "开源（GPL-3.0），跨平台，历史久"
    ],
    tags:["Shell","终端","脚本"], lang:"C", lic:"GPL-3.0", repo:"bash/bash" },

  { name:"Make",    cat:"dev",
    desc:"经典构建工具，Makefile 写依赖和目标。",
    intro:"Make 是 Unix 最古老的构建工具之一，用 Makefile 描述文件依赖和构建规则。目标比依赖新才重建，增量编译因此快。它的依赖图思路影响了后来一堆构建工具，C/C++ 项目到今天还大量用 Makefile。",
    features:[
      "依赖图驱动，需要时才重建",
      "Makefile 声明目标和规则，不啰嗦",
      "变量、函数、条件都有，构建逻辑灵活",
      "make -j 并行构建",
      "构建工具思想的源头之一",
      "开源（GPLv3），跨平台，年头久"
    ],
    tags:["构建工具","Unix","Makefile"], lang:"C", lic:"GPL-3.0", repo:"make" },

  { name:"CMake",   cat:"dev",
    desc:"跨平台构建生成器，出 Make/Ninja/VS 工程。",
    intro:"CMake 不直接构建，它生成构建系统：CMakeLists.txt 描述项目，然后产出 Makefile、Ninja 文件或 Visual Studio 工程。各平台构建系统的差异被它挡在外面，C/C++ 项目于是能到处构建。LLVM、Vulkan 这类大型项目用的就是它。",
    features:[
      "一套配置，各平台构建系统都能生成",
      "CMakeLists.txt 声明式描述项目",
      "Make、Ninja、Visual Studio 都能出",
      "依赖管理、包查找在行",
      "大型 C/C++ 项目的标配",
      "开源（BSD-3-Clause），跨平台，用得广"
    ],
    tags:["构建工具","CMake","跨平台"], lang:"C++", lic:"BSD-3-Clause", repo:"Kitware/CMake" },

  { name:"Cargo",   cat:"dev",
    desc:"Rust 官方构建与包管理，Cargo.toml 管到底。",
    intro:"Cargo 是 Rust 官方的构建和包管理工具。Cargo.toml 声明项目和依赖，构建、测试、文档生成、发布到 crates.io 全自动。依赖解析、增量编译、工作区管理都顺手，Rust 的工程体验一大半是它给的。",
    features:[
      "项目和依赖写进 Cargo.toml",
      "构建、测试、文档、发布一条龙",
      "依赖解析聪明，版本冲突会处理",
      "增量编译，大项目也不慢",
      "工作区管 monorepo",
      "开源（MIT），Rust 官方，生态核心"
    ],
    tags:["包管理","Rust","构建"], lang:"Rust", lic:"MIT", repo:"rust-lang/cargo" },

  { name:"Yarn",    cat:"dev",
    desc:"Facebook 做的 JavaScript 包管理器。",
    intro:"Yarn 是 Facebook 开发的 JavaScript 包管理器，起因是 npm 当时慢、不够稳。Yarn 1 靠全局缓存和确定性安装站稳；Yarn 2+（Berry）加了插件、工作区、零安装 PnP 这些新东西。前端生态里它占一席，大型项目选它的不少。",
    features:[
      "全局缓存，装包快",
      "yarn.lock 保证安装确定",
      "工作区能管 monorepo",
      "Yarn Berry 走插件系统",
      "PnP 零安装，node_modules 可以不生成",
      "开源（BSD-2-Clause），跨平台，用得广"
    ],
    tags:["包管理","JavaScript","前端"], lang:"JavaScript", lic:"BSD-2-Clause", repo:"yarnpkg/berry" },

  { name:"Babel",   cat:"dev",
    desc:"JS 编译器，新语法转成旧环境能跑的。",
    intro:"Babel 把新语法编译回兼容代码：ES6+、TypeScript、JSX 写代码，产出旧环境跑得动的 ES5。新语言特性和旧浏览器兼容这两头就这样接上了，用未来语法写今天的代码，背后干活的多数是它。",
    features:[
      "ES6+ / TypeScript / JSX 转译到 ES5",
      "插件和预设系统，定制空间大",
      "装饰器、模块转换都支持",
      "跟 Webpack、Vite 这些构建工具搭着用",
      "旧浏览器兼容性由它兜底",
      "开源（MIT），跨平台，前端标配"
    ],
    tags:["转译","JavaScript","编译"], lang:"JavaScript", lic:"MIT", repo:"babel/babel" },

  { name:"ESLint",   cat:"dev",
    desc:"JS/TS 代码检查，统一团队代码风格。",
    intro:"ESLint 是可插拔的 JavaScript/TypeScript 检查工具，边写边抓潜在 bug，顺带统一代码风格，规则团队自己定。插件生态大，React、Vue、TypeScript 的特定模式都有人写了检测。配 Prettier，现代前端的代码质量门神。",
    features:[
      "静态检查，抓 bug 也抓坏味道",
      "代码风格统一，团队有规范",
      "规则可插拔，严格程度自己调",
      "React、Vue、TypeScript 都支持",
      "编辑器里实时提示",
      "开源（MIT），跨平台，前端标配"
    ],
    tags:["代码检查","JavaScript","Lint"], lang:"JavaScript", lic:"MIT", repo:"eslint/eslint" },

  { name:"Prettier", cat:"dev",
    desc:"代码格式化，格式之争到它为止。",
    intro:"Prettier 是“有意见的”代码格式化工具，JS、TypeScript、CSS、HTML、Markdown 按统一规则重新排版。自定义选项故意给得少，图的就是终结格式争论。跟 ESLint 搭着，团队代码风格想不一致都难。",
    features:[
      "格式强制统一，争论到此为止",
      "JS、TS、CSS、HTML、Markdown 都排",
      "零配置，装上就用",
      "编辑器里保存即格式化",
      "和 ESLint 搭着用",
      "开源（MIT），跨平台，社区庞大"
    ],
    tags:["格式化","代码风格","前端"], lang:"JavaScript", lic:"MIT", repo:"prettier/prettier" },

  { name:"Vitest",  cat:"dev",
    desc:"Vite 团队的单元测试框架，快且现代。",
    intro:"Vitest 是 Vite 团队做的现代前端单元测试框架，直接复用 Vite 构建管线，启动和热更新都快。ESM、TypeScript、JSX 原生支持。API 跟 Jest 高度兼容，迁移花不了多少功夫；Vite 生态的项目跑测试，多半用它。",
    features:[
      "Vite 驱动，启动、热更新都快",
      "ESM、TypeScript、JSX 原生支持",
      "API 兼容 Jest，迁过去成本低",
      "快照、Mock、覆盖率都有",
      "并行执行，测试套件大了也不慢",
      "开源（MIT），跨平台，Vite 生态标配"
    ],
    tags:["测试","单元测试","前端"], lang:"TypeScript", lic:"MIT", repo:"vitest-dev/vitest" },

  { name:"Gatsby",  cat:"dev",
    desc:"React 静态站点框架，内容靠 GraphQL 拉。",
    intro:"Gatsby 是基于 React 的静态站点框架，CMS、API、Markdown 这些数据源统一走 GraphQL 取，构建出高性能静态站。代码自动分割、资源预取、图片优化，站快，SEO 也友好。营销站、文档、博客这类内容站，选它的多。",
    features:[
      "React 写页面，组件化开发",
      "GraphQL 统一接 CMS、API、文件",
      "代码分割和预取自动做",
      "图片优化、懒加载内置",
      "全站静态生成，SEO 友好",
      "开源（MIT），跨平台，插件多"
    ],
    tags:["静态站点","React","内容"], lang:"JavaScript", lic:"MIT", repo:"gatsbyjs/gatsby" },

  { name:"Next.js", cat:"dev",
    desc:"React 全栈框架，SSR/SSG/ISR 一应俱全。",
    intro:"Next.js 是 Vercel 的 React 全栈框架：服务端渲染 SSR、静态生成 SSG、增量静态再生 ISR、API 路由，一套里都有。SPA 的交互体验加上服务端的性能与 SEO，两头都要。路由走文件即路由的约定式设计，全栈开发省掉不少配置功夫。",
    features:[
      "SSR / SSG / ISR，渲染方式随选",
      "文件即路由，约定优于配置",
      "API 路由和中间件内置",
      "代码分割、图片优化自动来",
      "前端、后端、边缘一体化",
      "开源（MIT），跨平台，生态大"
    ],
    tags:["框架","React","全栈"], lang:"JavaScript", lic:"MIT", repo:"vercel/next.js" },

  { name:"Dify",        cat:"ai",
    desc:"LLM 应用开发平台，可视化编排带 RAG。",
    intro:"Dify 是开源 LLM 应用开发平台，AI 应用靠可视化拼出来。拖拽式工作流、RAG 知识库、模型管理、Agent 编排都有，工程背景浅的团队也能搭 AI 应用。大模型和向量数据库支持多家，企业接 AI 时常拿它当底座。",
    features:[
      "工作流可视化编排",
      "RAG 知识库内置",
      "大模型、向量库支持多家",
      "Agent 编排，能调工具",
      "应用有监控和日志",
      "开源（MIT），跨平台，企业场景接得住"
    ],
    tags:["LLM","应用平台","RAG"], lang:"TypeScript", lic:"MIT", repo:"langgenius/dify" },

  { name:"Flowise",     cat:"ai",
    desc:"拖拽搭 LLM 流，可视化拼 AI 应用。",
    intro:"Flowise 是开源的拖拽式 LLM 流构建器，大模型、向量库、工具用可视化节点串起来，AI 应用和聊天机器人搭得很快。节点能自定义，支持 Agent，模型和嵌入服务内置多种。不想写代码就把 AI 流搭起来，原型和企业内网部署都合适。",
    features:[
      "编排靠拖拽，画节点连线",
      "模型、向量库内置多种",
      "Agent 和自定义节点支持",
      "聊天机器人一键生成",
      "自托管、云端都行",
      "开源（Apache-2.0），跨平台，上手快"
    ],
    tags:["LLM","流构建","可视化"], lang:"TypeScript", lic:"Apache-2.0", repo:"FlowiseAI/Flowise" },

  { name:"n8n",         cat:"ai",
    desc:"可自托管的工作流自动化平台，AI 节点多。",
    intro:"n8n 是可自托管的工作流自动化平台，用可视化节点把各种服务和 API 连起来。AI 节点接大模型、向量库、Agent，自动化流程里就能用 AI 能力。集成有数百个，企业找流程自动化的灵活选项，它会入围。",
    features:[
      "工作流可视化编排",
      "服务集成数百个",
      "AI 节点覆盖大模型、向量库、Agent",
      "可自托管，数据在自己手里",
      "代码节点留着灵活出口",
      "开源（Sustainable Use License），跨平台"
    ],
    tags:["自动化","工作流","AI"], lang:"TypeScript", lic:"Sustainable Use License", repo:"n8n-io/n8n" },

  { name:"Replicate",   cat:"ai",
    desc:"托管模型推理平台，一个 API 调各家模型。",
    intro:"Replicate 把数万个开源模型——图像、音频、视频、LLM——封成简单的 API 调用。模型不用自己部署，一行代码就能调 Stable Diffusion、Whisper。调模型像调普通 API 一样省事，原型和生产阶段拿它当底座的都多。",
    features:[
      "数万个开源模型托管着",
      "一行 API 调用，不用部署",
      "图像、音频、视频、LLM 都覆盖",
      "按需计费，规模弹性伸缩",
      "自定义模型也能部署上去",
      "商业平台，API 稳，模型选择多"
    ],
    tags:["推理","模型托管","API"], lang:"Python", lic:"Proprietary", repo:"replicate", official:"https://replicate.com/" },

  { name:"Modal",       cat:"ai",
    desc:"云端 AI 计算平台，Serverless 跑 GPU 任务。",
    intro:"Modal 是云端 AI 计算平台：GPU 任务用 Python 函数定义，Serverless 方式运行，服务器不用管。GPU 调度、依赖、扩缩容自动处理，推理和训练像调函数一样简单。AI 工程师部署推理服务，这两年用它的人明显多了。",
    features:[
      "GPU 任务写成 Python 函数",
      "Serverless，服务器不用自己管",
      "GPU 调度和扩缩容自动来",
      "依赖自动打包",
      "推理、训练都能跑",
      "商业平台，开发体验好"
    ],
    tags:["计算","GPU","Serverless"], lang:"Python", lic:"MIT", repo:"modal-labs/modal-client" },

  { name:"Weights & Biases", cat:"ai",
    desc:"ML 实验跟踪与模型管理工具，团队常用。",
    intro:"Weights & Biases（W&B）记录训练指标、超参、代码版本，实验的可视化对比和协作都在上面。模型注册、部署、评估、Agent 追踪也归它管。AI 团队管实验和模型，多半绕不开它，研发效率提得明显。",
    features:[
      "实验跟踪，可视化对比",
      "超参和代码版本都记录",
      "模型注册与管理",
      "模型能部署、能评估",
      "团队协作带评论",
      "商业平台（有免费额度），配套成熟"
    ],
    tags:["实验跟踪","ML","协作"], lang:"Python", lic:"MIT", repo:"wandb/wandb" },

  { name:"MLflow",      cat:"ai",
    desc:"ML 生命周期管理框架，开源可自托管。",
    intro:"MLflow 是开源的机器学习生命周期框架，实验跟踪、模型注册、部署、监控四件事一起管。实验用统一 API 记录，Web UI 里做对比，数据科学团队管 ML 项目常把它当开源标准。可自托管，数据不出门，对隐私敏感的团队合适用。",
    features:[
      "实验跟踪、对比",
      "模型注册带版本管理",
      "能部署到多种环境",
      "监控加漂移检测",
      "开源，可自托管",
      "开源（Apache-2.0），跨平台，ML 圈标准件"
    ],
    tags:["ML","实验管理","开源"], lang:"Python", lic:"Apache-2.0", repo:"mlflow/mlflow" },

  { name:"DVC",         cat:"ai",
    desc:"数据版本控制工具，给数据集上 Git。",
    intro:"DVC（Data Version Control）把大型数据集、模型、环境像 Git 一样做版本。代码进 Git，数据进 DVC，“数据集太大进不了 Git”这个疙瘩就这么解了。云存储、缓存、协作都支持，数据科学项目管大文件，想到的一般是它。",
    features:[
      "数据集版本化，Git 那套路子",
      "跟 Git 搭着用，配合顺",
      "云存储和缓存支持",
      "大文件同步效率高",
      "实验和数据能关联起来",
      "开源（Apache-2.0），跨平台，数据这边标准"
    ],
    tags:["数据","版本控制","ML"], lang:"Python", lic:"Apache-2.0", repo:"iterative/dvc" },

  { name:"LangSmith",   cat:"ai",
    desc:"LangChain 的 LLM 应用可观测与评估平台。",
    intro:"LangSmith 出自 LangChain 团队，LLM 应用的每一步调用都追踪，调试、评估、监控、回归测试在一个平台里。LLM 应用不再是黑盒，哪里不对看得见、改得动，生产级应用拿它做质量兜底。",
    features:[
      "LLM 应用全链路追踪",
      "评估和回归测试",
      "调试与监控",
      "数据集管理",
      "和 LangChain 深度集成",
      "商业平台（有免费额度），生产够用"
    ],
    tags:["可观测","评估","LLM"], lang:"TypeScript", lic:"MIT", repo:"langchain-ai/langsmith-sdk" },

  { name:"Langfuse",    cat:"ai",
    desc:"开源 LLM 可观测平台，追踪加评估。",
    intro:"Langfuse 是开源的 LLM 应用可观测平台，追踪、评估、提示管理、监控都有。常被当 LangSmith 的开源替代，自托管后数据自己管。LangChain、LlamaIndex、原生调用都支持，团队要可观测的 LLM 应用，开源路线里它常入选。",
    features:[
      "追踪 LLM 应用调用",
      "评估和提示管理",
      "监控带成本分析",
      "可自托管，开源",
      "多种 LLM 框架都接",
      "开源（MIT），跨平台，可自托管"
    ],
    tags:["可观测","评估","开源"], lang:"TypeScript", lic:"MIT", repo:"langfuse/langfuse" },

  { name:"Helicone",    cat:"ai",
    desc:"LLM API 网关与可观测，成本统一监控。",
    intro:"Helicone 在 LLM 调用前面加一层网关，记录、缓存、监控、限额统一做。多家 LLM 提供商都支持，成本分析、调试、评估齐全。团队想把 LLM 调用和花费收拢到一起，它够实用，接进去也不费事。",
    features:[
      "LLM API 网关，一个口子进出",
      "成本分析和监控",
      "缓存与限额",
      "调试与追踪",
      "多家 LLM 提供商都支持",
      "商业平台（有免费额度），接入省事"
    ],
    tags:["可观测","API","成本"], lang:"TypeScript", lic:"MIT", repo:"Helicone/helicone" },

  { name:"LiteLLM",     cat:"ai",
    desc:"统一 LLM API 网关，一个接口调上百家模型。",
    intro:"LiteLLM 是统一的 LLM API 网关，拿 OpenAI 兼容接口就能调 OpenAI、Anthropic、Gemini、本地模型等 100+ 家提供商。换模型改一行就够，负载均衡、限额、监控、成本跟踪顺带着有了。多模型团队的统一接入层，选它常见。",
    features:[
      "一个接口，100+ LLM 都能调",
      "换模型只改一行",
      "负载均衡带故障转移",
      "限额、监控、成本跟踪内置",
      "可自托管，开源",
      "开源（MIT），跨平台，多模型统一"
    ],
    tags:["网关","多模型","开源"], lang:"Python", lic:"MIT", repo:"BerriAI/litellm" },

  { name:"OpenRouter",  cat:"ai",
    desc:"聚合 LLM API，一个 key 调用各家模型。",
    intro:"OpenRouter 把数百家大模型聚到一个 API 后面，OpenAI、Anthropic、Gemini、开源模型，一个 key 都能调。接口统一，路由、定价比较都在上面，哪个模型合适挑哪个。“一个 key 调所有模型”说的就是这类服务，它是现成入口。",
    features:[
      "一个 key，数百家模型",
      "接口统一，路由在内",
      "模型定价可以比较",
      "自动路由、故障转移",
      "流式和函数调用支持",
      "商业平台，便捷入口"
    ],
    tags:["多模型","聚合","API"], lang:"TypeScript", lic:"Proprietary", repo:"openrouter", official:"https://openrouter.ai/" },

  { name:"Ray",         cat:"ai",
    desc:"分布式计算框架，ML 训练与推理的引擎。",
    intro:"Ray 是开源分布式计算框架，一套简单的 Python API，把单机代码扩到集群。任务、Actor、集群调度都在，ML 训练、强化学习、推理服务底下常是它。Ray Train、Ray Serve、RLlib 把 ML 全栈盖住，大规模 AI 计算拿它当基础设施。",
    features:[
      "单机代码平移到集群",
      "Ray Train 做分布式训练",
      "Ray Serve 管推理服务",
      "RLlib 跑强化学习",
      "容错与调度自动处理",
      "开源（Apache-2.0），跨平台，ML 基础设施"
    ],
    tags:["分布式","ML","计算"], lang:"Python", lic:"Apache-2.0", repo:"ray-project/ray" },

  { name:"Baseten",     cat:"ai",
    desc:"模型推理部署平台，托管 GPU 推理服务。",
    intro:"Baseten 把机器学习模型部署成推理服务，低延迟、高并发是主打。GPU 推理、自动扩展、多模型推理优化都提供，是生产级推理服务的托管选项。要高性能推理的企业应用，可以拿它比一比。",
    features:[
      "模型部署成推理服务",
      "GPU 推理，自动扩展",
      "延迟低，并发高",
      "多种推理框架支持",
      "生产级监控",
      "商业平台，推理性能优先"
    ],
    tags:["推理","部署","GPU"], lang:"Python", lic:"Proprietary", repo:"baseten", official:"https://www.baseten.co/" },

  { name:"Together AI", cat:"ai",
    desc:"开源模型推理云，托管开源 LLM。",
    intro:"Together AI 托管 Llama、Mistral 这类开源大模型的推理 API。推理快，有微调、批量推理，GPU 集群不用自己建也能用开源模型。想用开源模型又不想操心运维的，它是常见选项，性能和价格都兼顾。",
    features:[
      "开源 LLM 推理托管",
      "推理快，支持批量",
      "模型微调",
      "GPU 集群不必自建",
      "围着开源模型转",
      "商业平台，性能价格兼顾"
    ],
    tags:["推理","开源模型","云"], lang:"Python", lic:"MIT", repo:"togethercomputer/together" },

  { name:"Anyscale",    cat:"ai",
    desc:"Ray 云平台，分布式 ML 托管服务。",
    intro:"Anyscale 是 Ray 背后的公司做的云平台，提供 Ray 的托管服务与开发环境。分布式训练、推理、数据处理，Ray 能干的它代运维。GPU 集群、开发环境、模型服务都在里面，企业级 Ray 应用想托管，这是官方路线。",
    features:[
      "Ray 托管服务",
      "GPU 集群加开发环境",
      "分布式训练与推理",
      "运维免了，弹性扩展",
      "模型服务与监控",
      "商业平台，Ray 官方云"
    ],
    tags:["分布式","ML","托管"], lang:"Python", lic:"Proprietary", repo:"anyscale", official:"https://www.anyscale.com/" },

  { name:"Lightning AI", cat:"ai",
    desc:"PyTorch Lightning 生态，训练框架与云。",
    intro:"Lightning AI 是 PyTorch Lightning 背后的平台，训练框架、云开发环境、模型部署串成一条。训练循环被简洁的 API 抽象掉，ML 实验跑得更勤。云平台给 GPU、实验跟踪、模型服务，是 PyTorch 用户的一条现代工作流。",
    features:[
      "PyTorch Lightning 训练框架",
      "云开发环境带 GPU",
      "实验跟踪与管理",
      "模型部署与服务",
      "API 简洁，实验省劲",
      "开源（Apache-2.0），跨平台，PyTorch 生态"
    ],
    tags:["ML","训练","PyTorch"], lang:"Python", lic:"Apache-2.0", repo:"Lightning-AI/pytorch-lightning" },

  { name:"BentoML",     cat:"ai",
    desc:"模型服务框架，把 ML 模型打包成 API。",
    intro:"BentoML 把机器学习模型打包成标准化的推理服务，产物叫 Bento。ML 框架支持多种，容器化部署、自动扩展、监控跟着来。模型从实验代码挪进生产服务，中间这段 MLOps 的路它来铺。",
    features:[
      "模型打包成标准化服务",
      "多种 ML 框架都接",
      "部署走容器化",
      "自动扩展和监控",
      "MLOps 工作流顺带理顺",
      "开源（Apache-2.0），跨平台，专做模型服务"
    ],
    tags:["模型服务","MLOps","部署"], lang:"Python", lic:"Apache-2.0", repo:"bentoml/BentoML" },

  { name:"DeepEval",    cat:"ai",
    desc:"LLM 评估框架，像 pytest 那样测 LLM。",
    intro:"DeepEval 是 LLM 应用评估框架，对 LLM 输出做断言式评估，写法像 pytest。忠实度、相关性、毒性这些指标现成，批量评估和 CI 集成都支持。LLM 质量评估因此像单元测试一样可重复、可自动化，CI 里跑测试拿它顺手。",
    features:[
      "单元测试的思路评估 LLM",
      "忠实度、相关性、毒性等指标",
      "批量评估带报告",
      "CI 集成",
      "评估器可自定义",
      "开源（MIT），跨平台，专做 LLM 评估"
    ],
    tags:["评估","LLM","测试"], lang:"Python", lic:"MIT", repo:"confident-ai/deepeval" },

  { name:"Ragas",       cat:"ai",
    desc:"RAG 应用评估框架，专测检索增强质量。",
    intro:"Ragas 专为 RAG 应用做评估：检索增强生成的忠实度、答案相关性、上下文精度都打分。打分由 LLM 代劳，不用人工标注，RAG 系统调优从此有数可依。做 RAG 项目要评质量，它是常用工具。",
    features:[
      "评估对象就是 RAG 应用",
      "忠实度、相关性、上下文精度",
      "LLM 自动打分，免标注",
      "评估数据集能生成",
      "主流 LLM 都集成",
      "开源（Apache-2.0），跨平台，RAG 评估"
    ],
    tags:["评估","RAG","LLM"], lang:"Python", lic:"Apache-2.0", repo:"explodinggradients/ragas" },

  { name:"Braintrust",  cat:"ai",
    desc:"LLM 评估与实验平台，提示模型放一起比。",
    intro:"Braintrust 是 LLM 评估与实验平台，提示、模型、参数组合的效果系统地摆在一起比。评估数据集、批量运行、可视化对比都有，LLM 迭代不再靠感觉。团队要优化 LLM 应用效果，它是实用的一档。",
    features:[
      "提示和模型横向对比",
      "评估数据集，批量跑",
      "效果对比可视化",
      "版本管理带协作",
      "CI 集成",
      "商业平台（有免费额度），LLM 实验台"
    ],
    tags:["评估","实验","LLM"], lang:"TypeScript", lic:"Proprietary", repo:"braintrust", official:"https://www.braintrust.dev/" },

  { name:"Humanloop",   cat:"ai",
    desc:"LLM 应用开发评估平台，提示能版本化。",
    intro:"Humanloop 管 LLM 应用的开发、评估、监控、微调，提示有版本可回滚。LLM 应用被当成普通软件来管：可版本化、可评估、可监控。团队管理提示和应用，它是较新的一条路。",
    features:[
      "提示版本化管理",
      "评估与监控",
      "模型微调",
      "团队协作",
      "多种 LLM 都集成",
      "商业平台，管 LLM 应用"
    ],
    tags:["评估","提示","LLM"], lang:"TypeScript", lic:"Proprietary", repo:"humanloop", official:"https://humanloop.com/" },

  { name:"Phoenix",     cat:"ai",
    desc:"Arize 的 LLM 可观测与评估平台，开源。",
    intro:"Phoenix 是 Arize 推出的开源 LLM 可观测与评估平台，调用追踪、评估、数据集管理都在。走 OpenTelemetry 标准，可自托管。它与 LangSmith、Langfuse 同属 LLM 可观测这条赛道。",
    features:[
      "追踪 LLM 应用调用",
      "评估加数据集管理",
      "OpenTelemetry 标准打底",
      "可自托管，开源",
      "多种 LLM 框架支持",
      "开源（Elastic License），跨平台，可自托管"
    ],
    tags:["可观测","评估","开源"], lang:"Python", lic:"Elastic License", repo:"Arize-ai/phoenix" },

  { name:"TruLens",     cat:"ai",
    desc:"给 LLM 输出打分的评估框架，靠反馈函数。",
    intro:"TruLens 用“反馈函数”给 LLM 输出打分：相关性、忠实度这类指标都能量化。改了一版提示、换了一个模型，实验记录能直接对比，评估这件事从此有迹可循。做 LLM 质量保障的开源框架，它是较早出名的一批。",
    features:[
      "用反馈函数给模型输出打分",
      "相关性、忠实度这类指标都有",
      "实验可追踪，版本之间能对比",
      "顺带把数据集管起来",
      "与 LlamaIndex 集成",
      "开源（MIT），跨平台，LLM 评估"
    ],
    tags:["评估","LLM","开源"], lang:"Python", lic:"MIT", repo:"truera/trulens" },

  { name:"Giskard",     cat:"ai",
    desc:"给 ML 和 LLM 做安全测试，专找模型漏洞。",
    intro:"Giskard 干的活像给模型做渗透测试：偏见、鲁棒性、数据泄露、提示注入，它自动扫一遍，把模型的安全与公平性问题翻出来，还附修复建议。模型安全测试这个领域，它是领先的开源工具。",
    features:[
      "测模型的安全性和公平性",
      "偏见、鲁棒性问题自动挖出来",
      "检测提示注入",
      "能查数据泄露",
      "出报告，还带修复建议",
      "开源（Apache-2.0），跨平台，模型安全"
    ],
    tags:["安全","测试","ML"], lang:"Python", lic:"Apache-2.0", repo:"Giskard-AI/giskard" },

  { name:"PromptLayer", cat:"ai",
    desc:"给 LLM 提示做版本管理的观测平台。",
    intro:"PromptLayer 把每一次 LLM 调用都记录下来：提示改过几版、效果如何，全都可查。版本化、监控、评估、协作一套都有，团队的提示从此像代码一样可管理、可追踪。做 LLM 应用要管提示，它是实用选项。",
    features:[
      "提示有版本，改动可回溯",
      "每次 LLM 调用都留痕",
      "监控、评估都在平台里",
      "支持团队一起用",
      "与多种 LLM 集成",
      "商业平台（有免费额度），提示管理"
    ],
    tags:["提示","可观测","LLM"], lang:"TypeScript", lic:"Proprietary", repo:"promptlayer", official:"https://www.promptlayer.com/" },

  { name:"Galileo",     cat:"ai",
    desc:"生产环境 LLM 应用的评估与监控。",
    intro:"Galileo 盯着生产里的 LLM 应用：幻觉检测、安全评估、回归测试、生产监控，质量变成可量化、可持续观察的指标。应用真上线跑起来，光靠离线评测不够，它补的就是这一段。",
    features:[
      "检测幻觉，顺带查质量",
      "做安全评估",
      "改提示前后的回归测试",
      "线上运行持续监控",
      "评估数据集",
      "商业平台，生产级 LLM 质量"
    ],
    tags:["评估","监控","LLM"], lang:"Python", lic:"Proprietary", repo:"galileo", official:"https://galileo-ai.com/" },

  { name:"Patronus AI", cat:"ai",
    desc:"LLM 输出质量与安全的专业评估。",
    intro:"Patronus AI 专门评估 LLM 输出：幻觉检测、安全性、可靠性，一项项给出量化结果，报告直接出。团队想系统回答“这版输出到底行不行”，拿它跑一轮就行。LLM 质量保障的专用平台。",
    features:[
      "专测幻觉",
      "安全性和可靠性一起评",
      "评估数据集",
      "与多种 LLM 集成",
      "结果出成报告",
      "商业平台，LLM 质量评估"
    ],
    tags:["评估","幻觉","LLM"], lang:"Python", lic:"Proprietary", repo:"patronus-ai", official:"https://www.patronus.ai/" },

  { name:"Haystack",    cat:"ai",
    desc:"开源 RAG 框架，拼管道做搜索问答。",
    intro:"Haystack 由 Deepset 开发，做检索增强生成（RAG）的开源框架。搜索、问答这类应用被拆成可组合的管道组件，接上你选的 LLM 和向量库就能跑，文档处理、评估、监控也都覆盖。企业级 RAG 的开源选项，它算标准之一。",
    features:[
      "搭 RAG 和搜索类应用",
      "组件拼成管道，随便组合",
      "支持多种 LLM 与向量库",
      "文档处理、检索都覆盖",
      "带评估和监控",
      "开源（Apache-2.0），跨平台，RAG 标准"
    ],
    tags:["RAG","搜索","LLM"], lang:"Python", lic:"Apache-2.0", repo:"deepset-ai/haystack" },

  { name:"Cohere",      cat:"ai",
    desc:"主打企业市场的 LLM API，RAG 与嵌入见长。",
    intro:"Cohere 是家 LLM 公司，Command 系列 API 面向企业场景，RAG、嵌入、分类、摘要这些任务上成绩靠前。模型强调安全可控、对企业友好，不少公司拿它做内部 AI 应用，多语言也支持。LLM API 市场里它占重要一席。",
    features:[
      "企业级 LLM API（Command）",
      "RAG 和嵌入是强项",
      "强调安全可控，对企业友好",
      "多语言支持",
      "分类、摘要等任务",
      "商业平台，企业级 LLM"
    ],
    tags:["LLM","API","企业"], lang:"Python", lic:"MIT", repo:"cohere-ai/cohere-python" },

  { name:"Mistral",     cat:"ai",
    desc:"欧洲来的开源大模型，Mistral 系列。",
    intro:"Mistral 是欧洲的 AI 公司，Mistral 7B、Mistral Large 这些开源模型性能和效率都不俗，权重开放，被大量微调和部署。开源 LLM 圈聊到欧洲玩家，它基本就是代表。许可证为 Mistral Research Model License。",
    features:[
      "Mistral 系列开源 LLM",
      "性能和效率都不俗",
      "被大量微调和部署",
      "开源权重",
      "欧洲 AI 公司的代表",
      "开源（Mistral Research Model License）"
    ],
    tags:["LLM","开源","模型"], lang:"Python", lic:"Mistral Research Model License", repo:"mistralai/mistral-src" },

  { name:"Llama",       cat:"ai",
    desc:"Meta 的开源大模型系列，Llama 2/3。",
    intro:"Llama 是 Meta 放出来的开源大语言模型系列，Llama 2、Llama 3 一路更新，撑起了开源 LLM 生态的底座。7B 到 405B 多个规格，多语言，被海量微调、衍生出无数模型和应用。开源 LLM 的影响力，它排头一份。",
    features:[
      "Llama 系列开源 LLM",
      "开源 LLM 生态的地基",
      "微调、衍生模型数不清",
      "多规模（7B-405B）",
      "多语言支持",
      "开源（Llama Community License）"
    ],
    tags:["LLM","开源","Meta"], lang:"Python", lic:"Llama Community License", repo:"meta-llama/llama-models" },

  { name:"Gemini",      cat:"ai",
    desc:"Google 的多模态 LLM 系列。",
    intro:"Gemini 是 Google 的模型系列核心，文本、图像、音频、视频都能理解和生成，推理、多模态、代码任务上成绩靠前，上下文也长。通过 API 和 Gemini App 提供服务。要用 Google 的多模态能力，找它就对了。",
    features:[
      "文本、图像、音频、视频全模态",
      "推理和代码是强项",
      "上下文窗口长",
      "API 加 Gemini App",
      "Google AI 战略核心",
      "商业平台，多模态领先"
    ],
    tags:["LLM","多模态","Google"], lang:"Python", lic:"Proprietary", repo:"google-gemini/gemini-api", official:"https://gemini.google.com/" },

  { name:"DeepSeek",    cat:"ai",
    desc:"中国公司的开源大模型，性价比高。",
    intro:"DeepSeek 是中国的 AI 公司，DeepSeek V2、V3 这些开源模型靠高性价比和强推理出的名：成本不高，能力接近顶级模型，全球开源社区都用得多。开源权重，多语言，是开源 LLM 市场的重要一极。",
    features:[
      "DeepSeek 系列开源 LLM",
      "便宜，推理还强",
      "开源权重",
      "多语言支持",
      "全球社区都爱用",
      "开源（MIT 等），开源 LLM 重要力量"
    ],
    tags:["LLM","开源","中国"], lang:"Python", lic:"MIT", repo:"deepseek-ai/DeepSeek-V3" },

  { name:"Figma",       cat:"design",
    desc:"浏览器里跑的设计工具，多人同时编辑。",
    intro:"Figma 跑在浏览器里，设计团队多人同时编辑同一个文件，原型、设计系统、Dev Mode 一环扣一环，从设计到交付不用倒腾文件。现在做界面设计，它的主流地位没什么可争，团队协同体验也是领先的。",
    features:[
      "浏览器里直接协作设计",
      "实时多人编辑",
      "原型、设计系统都有",
      "Dev Mode 交付",
      "插件装一大堆",
      "商业软件（有免费层），跨平台，界面设计"
    ],
    tags:["界面设计","协作","原型"], lang:"C++", lic:"Proprietary", repo:"figma/figma", official:"https://www.figma.com/" },

  { name:"Sketch",      cat:"design",
    desc:"macOS 老牌界面设计工具，矢量编辑。",
    intro:"Sketch 是 macOS 上的老牌界面设计工具，矢量编辑、符号、原型是看家功能，曾经长期是 iOS 设计的事实标准，插件成熟。只支持 macOS，Mac 用户做界面和设计系统，它仍是常青树。",
    features:[
      "macOS 矢量界面设计",
      "符号功能撑起设计系统",
      "能做原型交互",
      "插件又多又成熟",
      "仅限 macOS",
      "商业软件，macOS，界面设计经典"
    ],
    tags:["界面设计","macOS","矢量"], lang:"Objective-C", lic:"Proprietary", repo:"sketch-hq/sketch-api", official:"https://www.sketch.com/" },

  { name:"Adobe XD",    cat:"design",
    desc:"Adobe 家的界面设计与原型工具。",
    intro:"Adobe XD 是 Adobe 的界面设计与原型工具：矢量编辑、交互原型、共享设计，跟 Photoshop、Illustrator 互相联动。团队已经泡在 Adobe 那套里的，接它顺；工具本身跨平台。",
    features:[
      "矢量界面设计",
      "交互原型能做",
      "与 Adobe 生态联动",
      "设计稿可共享",
      "跨平台",
      "商业软件（Adobe），界面设计"
    ],
    tags:["界面设计","原型","Adobe"], lang:"C++", lic:"Proprietary", repo:"adobe/xd", official:"https://www.adobe.com/products/xd.html" },

  { name:"Canva",       cat:"design",
    desc:"在线平面设计，模板多，不用设计功底。",
    intro:"Canva 是在线平面设计工具，模板海量，海报、PPT、社媒图、视频套模板改改就能用，还能在线协作、挂品牌套件。不会设计也能做出像样的视觉内容，大众用得多的一款在线设计工具。",
    features:[
      "模板海量，上手没门槛",
      "海报、PPT、社媒图",
      "在线协作",
      "品牌套件",
      "视频与动画",
      "商业软件（有免费层），跨平台，大众设计"
    ],
    tags:["平面设计","模板","在线"], lang:"JavaScript", lic:"Proprietary", repo:"canva/canva", official:"https://www.canva.com/" },

  { name:"Framer",      cat:"design",
    desc:"React 驱动，设计完直接发布成网站。",
    intro:"Framer 让设计师从设计稿直接走到上线网站：React 驱动，动画、交互、响应式都内建，代码一行不写。做营销站、作品集这类站点，它是设计驱动建站的热门选择。",
    features:[
      "设计稿直接变上线网站",
      "React 驱动",
      "动画、交互内建",
      "响应式",
      "无代码",
      "商业软件（有免费层），跨平台，建站"
    ],
    tags:["建站","设计","React"], lang:"TypeScript", lic:"Proprietary", repo:"framer/framer", official:"https://www.framer.com/" },

  { name:"Webflow",     cat:"design",
    desc:"可视化建站，设计界面直接生成网站。",
    intro:"Webflow 用设计界面直接生成网站，CMS、动画、交互都在里面，代码不用碰。设计师做出什么样，网站就是什么样。营销站、企业站这类设计驱动建站，它领先。",
    features:[
      "在设计界面里搭网站",
      "内置 CMS",
      "动画与交互",
      "响应式",
      "不写代码直接出站",
      "商业软件（有免费层），跨平台，建站"
    ],
    tags:["建站","无代码","CMS"], lang:"JavaScript", lic:"Proprietary", repo:"webflow/webflow", official:"https://webflow.com/" },

  { name:"Miro",       cat:"design",
    desc:"在线白板，远程团队画图开会。",
    intro:"Miro 是在线协作白板，画布无限大，头脑风暴、工作坊、流程图、看板都摊在上面，远程团队实时一起画。数字化白板这件事，它是主流答案，团队协作和工作坊里出镜率很高。",
    features:[
      "无限画布，多人协作",
      "头脑风暴、工作坊",
      "流程图、看板",
      "自带大量模板",
      "改动实时同步",
      "商业软件（有免费层），跨平台，协作白板"
    ],
    tags:["白板","协作","工作坊"], lang:"JavaScript", lic:"Proprietary", repo:"mirohq/miro", official:"https://miro.com/" },

  { name:"Whimsical",   cat:"design",
    desc:"轻量在线工具，流程图线框图快速出。",
    intro:"Whimsical 主打一个快：流程图、线框图、思维导图、文档，几分钟画出雏形，支持实时协作。产品与设计团队想把想法快速可视化，它轻便好用，不用大动干戈。",
    features:[
      "流程图、线框图几笔成型",
      "思维导图",
      "文档与看板",
      "实时协作",
      "轻，上手没成本",
      "商业软件（有免费层），跨平台，轻量协作"
    ],
    tags:["流程图","线框图","协作"], lang:"JavaScript", lic:"Proprietary", repo:"whimsical/whimsical", official:"https://whimsical.com/" },

  { name:"FigJam",      cat:"design",
    desc:"Figma 家的白板，头脑风暴专用。",
    intro:"FigJam 是 Figma 带的在线协作白板：便利贴、投票、计时器，工作坊和头脑风暴的工具一开就够。跟 Figma 直接打通，想法和设计稿之间来回切很顺，模板也多，设计与产品团队常用。",
    features:[
      "在线协作白板",
      "便利贴、投票、计时器",
      "头脑风暴、工作坊",
      "跟 Figma 直接打通",
      "模板管够",
      "商业软件（有免费层），跨平台，头脑风暴"
    ],
    tags:["白板","头脑风暴","Figma"], lang:"C++", lic:"Proprietary", repo:"figma/figjam", official:"https://www.figma.com/figjam/" },

  { name:"Affinity Designer", cat:"design",
    desc:"Serif 的矢量设计软件，一次买断。",
    intro:"Affinity Designer 是 Serif 出的矢量设计软件，插画、图标、UI、品牌视觉都干得了。一次买断、不搞订阅，性能也硬，常被拿来顶替 Illustrator。买断制专业矢量设计，它基本是默认答案。",
    features:[
      "专业矢量设计",
      "插画、图标、UI、品牌",
      "一次买断，没有订阅",
      "高性能",
      "跨平台",
      "商业软件（买断），跨平台，矢量设计"
    ],
    tags:["矢量","插画","买断"], lang:"C++", lic:"Proprietary", repo:"serif/affinity", official:"https://affinity.serif.com/designer/" },

  { name:"Affinity Photo", cat:"design",
    desc:"Serif 的位图编辑，一次买断。",
    intro:"Affinity Photo 同样是 Serif 的买断制软件：照片处理、数字绘画、合成，功能对标 Photoshop，价格却便宜一截。不想按月订阅又要专业位图编辑，它就是顶替 Photoshop 的那个选择。",
    features:[
      "专业位图编辑",
      "照片处理、数字绘画",
      "一次买断，没有订阅",
      "功能对标 Photoshop",
      "跨平台",
      "商业软件（买断），跨平台，位图编辑"
    ],
    tags:["位图","照片","买断"], lang:"C++", lic:"Proprietary", repo:"serif/affinity", official:"https://affinity.serif.com/photo/" },

  { name:"Affinity Publisher", cat:"design",
    desc:"Serif 的排版软件，一次买断。",
    intro:"Affinity Publisher 是 Serif 的排版软件，书籍、杂志、传单、电子书都能排。同样买断制，跟 Designer、Photo 在同一套体系里来回联动。专业排版要走买断制，它顶 InDesign。",
    features:[
      "专业排版",
      "书籍、杂志、传单",
      "一次买断，没有订阅",
      "跟 Affinity 全家互通",
      "跨平台",
      "商业软件（买断），跨平台，排版"
    ],
    tags:["排版","书籍","买断"], lang:"C++", lic:"Proprietary", repo:"serif/affinity", official:"https://affinity.serif.com/publisher/" },

  { name:"Adobe Illustrator", cat:"design",
    desc:"矢量图形设计的老资格，行业标准。",
    intro:"Adobe Illustrator 是矢量图形设计的行业标准，插画、图标、标志、排版都在它碗里。品牌和图形设计这一行，设计师电脑里多半装着它，功能齐到什么程度呢，基本想得到的都有。",
    features:[
      "专业矢量图形设计",
      "插画、图标、标志",
      "行业标准",
      "与 Adobe 生态联动",
      "跨平台",
      "商业软件（Adobe），跨平台，矢量设计标准"
    ],
    tags:["矢量","插画","Adobe"], lang:"C++", lic:"Proprietary", repo:"adobe/illustrator", official:"https://www.adobe.com/products/illustrator.html" },

  { name:"Adobe Photoshop", cat:"design",
    desc:"位图图像处理的标准，摄影设计都离不开。",
    intro:"Adobe Photoshop 是位图图像处理的行业标准，照片编辑、合成、数字绘画、设计都能拿它干。摄影、设计、广告行业普遍在用，设计师和摄影师基本绕不开它。",
    features:[
      "专业位图图像处理",
      "照片编辑、合成、绘画",
      "行业标准",
      "与 Adobe 生态联动",
      "跨平台",
      "商业软件（Adobe），跨平台，图像处理标准"
    ],
    tags:["图像处理","合成","Adobe"], lang:"C++", lic:"Proprietary", repo:"adobe/photoshop", official:"https://www.adobe.com/products/photoshop.html" },

  { name:"Adobe InDesign", cat:"design",
    desc:"排版行业标准，书籍杂志报纸宣传册。",
    intro:"Adobe InDesign 干的是专业排版：书籍、杂志、报纸、宣传册，多页文档、样式系统、交互元素都是本行。出版与设计领域，排版默认就用它。",
    features:[
      "专业多页排版",
      "书籍、杂志、报纸",
      "行业标准",
      "样式系统、交互元素",
      "与 Adobe 生态联动",
      "商业软件（Adobe），跨平台，排版标准"
    ],
    tags:["排版","出版","Adobe"], lang:"C++", lic:"Proprietary", repo:"adobe/indesign", official:"https://www.adobe.com/products/indesign.html" },

  { name:"Adobe Lightroom", cat:"design",
    desc:"摄影师的照片管理与 RAW 调色。",
    intro:"Adobe Lightroom 围着摄影师转：RAW 处理、调色、批处理、相册管理，一整套后期流程都在里面，桌面和移动端都支持。专业摄影后期的标准工具，快门按完之后的活基本归它管。",
    features:[
      "照片管理与调色",
      "RAW 处理",
      "批处理",
      "桌面 + 移动",
      "与 Adobe 生态联动",
      "商业软件（Adobe），跨平台，摄影后期"
    ],
    tags:["摄影","调色","RAW"], lang:"C++", lic:"Proprietary", repo:"adobe/lightroom", official:"https://www.adobe.com/products/photoshop-lightroom.html" },

  { name:"Procreate",   cat:"design",
    desc:"iPad 上的专业绘画应用。",
    intro:"Procreate 是 iPad 上的专业数字绘画应用，插画、概念设计、漫画都画得。笔刷多、画起来跟手，买断制一次付清，iPad 画画它基本就是标准答案。",
    features:[
      "iPad 专业数字绘画",
      "插画、概念设计、漫画",
      "笔刷管够",
      "性能流畅",
      "仅限 iPad",
      "商业应用（买断），iPad，数字绘画标杆"
    ],
    tags:["绘画","iPad","插画"], lang:"Swift", lic:"Proprietary", repo:"procreate/procreate", official:"https://procreate.art/" },

  { name:"Adobe After Effects", cat:"design",
    desc:"动效与视频特效的行业标准。",
    intro:"Adobe After Effects 做动态图形和视频特效：动效、合成、动画，影视、广告后期的行活它全包。动效设计师的电脑上基本都有它，素材跟 Adobe 其他工具来回导也顺。",
    features:[
      "专业动态图形与特效",
      "动效、合成、动画",
      "行业标准",
      "与 Adobe 生态联动",
      "跨平台",
      "商业软件（Adobe），跨平台，动效标准"
    ],
    tags:["动效","特效","Adobe"], lang:"C++", lic:"Proprietary", repo:"adobe/after-effects", official:"https://www.adobe.com/products/aftereffects.html" },

  { name:"Adobe Acrobat", cat:"design",
    desc:"PDF 编辑、转换与签名的标准工具。",
    intro:"Adobe Acrobat 管的是 PDF 全套：编辑、创建、转换、签名、表单，加上文档管理和协作。处理 PDF 文档要专业工具，说的就是它。",
    features:[
      "PDF 直接编辑",
      "创建、转换、签名",
      "表单与协作",
      "行业标准",
      "跨平台",
      "商业软件（Adobe），跨平台，PDF 标准"
    ],
    tags:["PDF","编辑","Adobe"], lang:"C++", lic:"Proprietary", repo:"adobe/acrobat", official:"https://www.adobe.com/acrobat.html" },

  { name:"Jira",        cat:"prod",
    desc:"Atlassian 的项目跟踪，敏捷标配。",
    intro:"Jira 是 Atlassian 的项目管理与问题跟踪工具：Scrum、看板、自定义工作流、报表全套。软件开发团队的标配，功能换复杂度，配置起来费功夫。企业敏捷开发，用它的最多。",
    features:[
      "敏捷与看板管理",
      "自定义工作流",
      "报表与仪表盘",
      "与 Confluence 集成",
      "企业级，功能很全",
      "商业软件（Atlassian），跨平台，项目管理标准"
    ],
    tags:["项目管理","敏捷","看板"], lang:"Java", lic:"Proprietary", repo:"atlassian/jira", official:"https://www.atlassian.com/software/jira" },

  { name:"Linear",      cat:"prod",
    desc:"主打速度和设计感的现代项目管理。",
    intro:"Linear 是给工程团队做的项目管理工具，快到不用等，界面克制，issue 跟踪、cycles、路线图够用就好。产品与工程团队挺偏爱它，常被当作 Jira 的现代替代，新一代项目管理工具里它很出挑。",
    features:[
      "issue 快到不用等",
      "循环（Cycles）与路线图",
      "界面克制",
      "全程键盘操作",
      "体验是新一代的",
      "商业软件（有免费层），跨平台，现代项目管理"
    ],
    tags:["项目管理","issue","现代"], lang:"TypeScript", lic:"Proprietary", repo:"linear/linear", official:"https://linear.app/" },

  { name:"Notion",      cat:"prod",
    desc:"笔记、文档、数据库、项目管理拼一处。",
    intro:"Notion 是一个工作空间：笔记、文档、数据库、看板、项目管理，全用模块化的块拼出来，想要什么工具自己搭。团队的知识管理和项目协作放一个地方，“一个工具顶好几个”的说法就从它流行起来。",
    features:[
      "笔记、文档、数据库",
      "一切皆块，拼出你要的",
      "看板与项目管理",
      "团队协作",
      "模板管够",
      "商业软件（有免费层），跨平台，一体化工作空间"
    ],
    tags:["笔记","知识库","一体化"], lang:"JavaScript", lic:"Proprietary", repo:"notionhq/notion", official:"https://www.notion.so/" },

  { name:"ClickUp",     cat:"prod",
    desc:"任务、文档、目标、聊天塞进一个应用。",
    intro:"ClickUp 把任务、文档、目标、聊天塞进一个应用，列表、看板、甘特、日历多种视图随切，定制空间很大。功能多到有点杂，“一个应用替代所有”是它自己喊的口号。",
    features:[
      "任务、文档、目标、聊天",
      "多视图（列表/看板/甘特）",
      "能按你的流程深度定制",
      "目标与 OKR",
      "时间追踪",
      "商业软件（有免费层），跨平台，多功能任务管理"
    ],
    tags:["任务管理","多功能","看板"], lang:"JavaScript", lic:"Proprietary", repo:"clickup/clickup", official:"https://clickup.com/" },

  { name:"Asana",       cat:"prod",
    desc:"任务与项目管理，谁在干什么一目了然。",
    intro:"Asana 管任务和项目：分配、依赖、时间表、自动化，团队里谁在做什么、卡在哪，打开就看得到。中型团队做项目协作选它的不少，任务管理的老牌商业方案。",
    features:[
      "任务分配与依赖",
      "时间表与里程碑",
      "自动化",
      "多视图",
      "团队协作",
      "商业软件（有免费层），跨平台，任务管理"
    ],
    tags:["任务管理","项目","协作"], lang:"JavaScript", lic:"Proprietary", repo:"asana/asana", official:"https://asana.com/" },

  { name:"Monday.com",  cat:"prod",
    desc:"彩色表格管项目，工作流拖出来就行。",
    intro:"Monday.com 自称工作操作系统，界面是一排彩色表格：项目、任务、CRM、运营都塞进去，工作流靠拖拽配，自动化也能挂。定制空间大，团队想怎么管活就怎么搭。",
    features:[
      "可视化工作管理",
      "项目、任务、CRM、运营",
      "拖拽配置工作流",
      "自动化",
      "定制空间大",
      "商业软件，跨平台，工作操作系统"
    ],
    tags:["工作管理","可视化","定制"], lang:"JavaScript", lic:"Proprietary", repo:"mondaycom/monday", official:"https://monday.com/" },

  { name:"Trello",      cat:"prod",
    desc:"看板管理入门款，卡片拖来拖去。",
    intro:"Trello 是看板任务管理的入门标准：卡片加列表，任务拖过来拖过去就管完了，简单直白。个人待办、轻量团队任务都够用，上手几乎不需要教学。",
    features:[
      "看板式任务管理",
      "卡片与列表",
      "全靠拖拽",
      "标签与成员",
      "简单直观",
      "商业软件（有免费层），跨平台，看板入门"
    ],
    tags:["看板","任务","简单"], lang:"JavaScript", lic:"Proprietary", repo:"trello/trello", official:"https://trello.com/" },

  { name:"Basecamp",    cat:"prod",
    desc:"37signals 出品，反复杂的项目管理。",
    intro:"Basecamp 是 37signals 做的，主张少即是多：项目按“营地”组织，讨论、日程、待办各归各位，刻意不做花哨功能，也不催你时刻在线。讨厌复杂工具的几个人小团队，用它正合适。",
    features:[
      "营地式项目管理",
      "刻意减少打扰",
      "邮件与讨论",
      "日程与待办",
      "功能收得很紧",
      "商业软件（37signals），跨平台，简洁项目管理"
    ],
    tags:["项目管理","简洁","营地"], lang:"Ruby", lic:"Proprietary", repo:"37signals/basecamp", official:"https://basecamp.com/" },

  { name:"Airtable",    cat:"prod",
    desc:"表格的外表，数据库的内核。",
    intro:"Airtable 是电子表格和数据库的混血：看着是表格，底下是结构化数据，网格、看板、日历、画廊多种视图随便切，还带自动化。不懂技术的人也能把一堆复杂数据管得井井有条。",
    features:[
      "数据库 + 电子表格",
      "多视图（网格/看板/日历）",
      "自动化",
      "团队协作",
      "数据想怎么管都行",
      "商业软件（有免费层），跨平台，数据管理"
    ],
    tags:["数据库","表格","数据"], lang:"JavaScript", lic:"Proprietary", repo:"airtable/airtable", official:"https://www.airtable.com/" },

  { name:"Confluence",  cat:"prod",
    desc:"Atlassian 家的团队知识库与维基。",
    intro:"Confluence 是 Atlassian 的团队知识库：文档、维基、项目说明，页面结构化管理，支持协作编辑。跟 Jira 是亲生搭配，Atlassian 体系里的知识管理就靠它。",
    features:[
      "团队知识库与维基",
      "结构化文档",
      "跟 Jira 配合最深",
      "协作编辑",
      "模板现成的多",
      "商业软件（Atlassian），跨平台，知识管理"
    ],
    tags:["知识库","文档","Atlassian"], lang:"Java", lic:"Proprietary", repo:"atlassian/confluence", official:"https://www.atlassian.com/software/confluence" },

  { name:"Slack",       cat:"prod",
    desc:"团队沟通靠频道，集成一大堆。",
    intro:"Slack 用频道把团队讨论分开装，私信、群组、文件共享、搜索都有，第三方集成和机器人挂一大堆。远程团队的沟通中枢，消息和工具汇到一个窗口里，团队通讯的主流就是它。",
    features:[
      "频道式团队通讯",
      "集成和机器人一大把",
      "私信与群组",
      "文件共享",
      "消息可搜",
      "商业软件（有免费层），跨平台，团队通讯"
    ],
    tags:["通讯","协作","集成"], lang:"JavaScript", lic:"Proprietary", repo:"slack/slack", official:"https://slack.com/" },

  { name:"Microsoft Teams", cat:"prod",
    desc:"微软的办公协作平台，聊天会议文件一体。",
    intro:"Microsoft Teams 把聊天、视频会议、文件共享、应用装进一个平台，和 Office 365 是一家人。企业做远程协作，尤其已经买了微软那套的，Teams 通常就是默认选项。",
    features:[
      "聊天、会议、文件",
      "跟 Office 365 深度绑定",
      "应用与机器人",
      "企业级协作",
      "视频会议",
      "商业软件（微软），跨平台，办公协作"
    ],
    tags:["协作","会议","微软"], lang:"C#", lic:"Proprietary", repo:"microsoft/teams", official:"https://www.microsoft.com/microsoft-365/microsoft-teams/" },

  { name:"Zoom",        cat:"prod",
    desc:"视频会议与网络研讨会，稳定是招牌。",
    intro:"Zoom 是视频会议和网络研讨会平台：高清视频、屏幕共享、录制、会议管理，网课、面试、客户会都能开。视频会议能普及到今天这样，它功劳最大，稳定性口碑也一直在线。",
    features:[
      "高清视频会议",
      "屏幕共享与录制",
      "网络研讨会",
      "会议管理",
      "稳定性口碑好",
      "商业软件（有免费层），跨平台，视频会议标准"
    ],
    tags:["视频会议","会议","远程"], lang:"C++", lic:"Proprietary", repo:"zoom/zoom", official:"https://zoom.us/" },

  { name:"Loom",        cat:"prod",
    desc:"录一段屏幕视频代替开会讲解。",
    intro:"Loom 干的是异步视频：按一下录屏加讲解，生成链接往 Slack 或文档里一贴，看的人自己安排时间。该解释一遍的事录成视频，会就少开几个。异步沟通加录屏讲解，它算代表。",
    features:[
      "异步视频消息",
      "录屏加讲解一键搞定",
      "发个链接就完事",
      "能替掉不少会",
      "跟 Slack 配合顺",
      "商业软件（有免费层），跨平台，异步沟通"
    ],
    tags:["视频","录屏","异步"], lang:"JavaScript", lic:"Proprietary", repo:"loom/loom", official:"https://www.loom.com/" },

  { name:"Google Workspace", cat:"prod",
    desc:"Gmail、Docs、Drive 的云端办公全家桶。",
    intro:"Google Workspace 是谷歌的办公全家桶：Gmail、Docs、Sheets、Slides、Drive、Meet，东西全在云上，一份文档多人同时编辑，换设备接着干。云端办公的默认答案。",
    features:[
      "Gmail、Docs、Sheets、Slides",
      "Drive 云存储",
      "Meet 视频会议",
      "实时协作编辑",
      "换设备接着办公",
      "商业软件（谷歌），跨平台，云端办公"
    ],
    tags:["办公","云端","谷歌"], lang:"JavaScript", lic:"Proprietary", repo:"googleworkspace/workspace", official:"https://workspace.google.com/" },

  { name:"Microsoft 365", cat:"prod",
    desc:"Word、Excel、PPT，办公套件的默认项。",
    intro:"Microsoft 365 就是 Word、Excel、PowerPoint、Outlook、OneDrive、Teams 打包加订阅。桌面办公的老资格，兼容性不用操心，企业和个人两头都用它。",
    features:[
      "Word、Excel、PowerPoint",
      "Outlook、OneDrive、Teams",
      "办公要什么有什么",
      "企业标准",
      "桌面 + 云",
      "商业软件（微软），跨平台，桌面办公标准"
    ],
    tags:["办公","套件","微软"], lang:"C++", lic:"Proprietary", repo:"microsoft/365", official:"https://www.microsoft.com/microsoft-365/" },

  { name:"Todoist",     cat:"prod",
    desc:"待办清单，打个句子它就懂日期优先级。",
    intro:"Todoist 是个人和团队的待办清单，输任务直接说人话，它自己拆出日期和优先级；标签、项目、提醒、重复任务都齐，多端同步。把待办管简单，它是个流行选择。",
    features:[
      "任务用自然语言写",
      "标签、项目、优先级",
      "团队与个人协作",
      "提醒与重复任务",
      "跨平台同步",
      "商业软件（有免费层），跨平台，待办清单"
    ],
    tags:["待办","清单","自然语言"], lang:"Swift", lic:"Proprietary", repo:"todoist/todoist", official:"https://todoist.com/" },

  { name:"Tally",       cat:"prod",
    desc:"无代码做表单问卷，够用就好。",
    intro:"Tally 是无代码的表单问卷工具：表单、问卷、报名、调查，拖几下就出来，支持条件逻辑和结果分析。不写代码也能正经收数据，表单工具里的轻量选手。",
    features:[
      "无代码表单与问卷",
      "条件逻辑",
      "数据分析",
      "报名、调查",
      "轻快，不折腾",
      "商业软件（有免费层），跨平台，表单工具"
    ],
    tags:["表单","问卷","无代码"], lang:"JavaScript", lic:"Proprietary", repo:"tallyso/tally", official:"https://tally.so/" },

  { name:"Nginx",       cat:"sys",
    desc:"高并发 Web 服务器兼反向代理。",
    intro:"Nginx 是高并发、低内存的 Web 服务器与反向代理，静态文件、反代、负载均衡都能干，TLS 也在它这终止。互联网基础设施里到处是它，海量流量从它上面过。Web 服务器这块，它是最常见的那个。",
    features:[
      "高性能 Web 服务器",
      "反向代理与负载均衡",
      "高并发、低内存",
      "静态文件服务",
      "TLS 终止",
      "开源（BSD-2-Clause），跨平台，Web 服务器标准"
    ],
    tags:["Web服务器","代理","高并发"], lang:"C", lic:"BSD-2-Clause", repo:"nginx/nginx" },

  { name:"Apache",      cat:"sys",
    desc:"老牌 Web 服务器，模块化配置。",
    intro:"Apache HTTP Server 是 Web 服务器的元老，模块化架构、.htaccess 配置，历史几十年。企业网站用它的一大把，功能全，社区也大。新栈常配 Nginx，但老牌稳定这一头它不吃亏。",
    features:[
      "经典 Web 服务器",
      "模块随插随用",
      ".htaccess 配置",
      "稳，企业级",
      "社区庞大",
      "开源（Apache-2.0），跨平台，Web 服务器"
    ],
    tags:["Web服务器","模块","经典"], lang:"C", lic:"Apache-2.0", repo:"apache/httpd" },

  { name:"Elasticsearch", cat:"sys",
    desc:"分布式全文搜索与分析引擎。",
    intro:"Elasticsearch 基于 Lucene，做分布式搜索与分析：全文搜索、日志分析、实时监控，查询走 REST API。搜日志、搜数据的基础设施，这一领域它就是标准。",
    features:[
      "分布式搜索",
      "全文检索在行",
      "日志分析",
      "实时监控",
      "REST API",
      "开源（AGPL-3.0），跨平台，搜索引擎"
    ],
    tags:["搜索","日志","分布式"], lang:"Java", lic:"AGPL-3.0", repo:"elastic/elasticsearch" },

  { name:"Kafka",       cat:"sys",
    desc:"高吞吐的事件流平台，数据管道标配。",
    intro:"Apache Kafka 是分布式事件流平台：消息队列、日志聚合、流处理，分区加副本撑吞吐和可靠，数据可持久化回放。大数据和实时数据管道的标配基础设施。",
    features:[
      "分布式事件流",
      "消息队列",
      "流处理",
      "高吞吐、可持久化",
      "分区、副本机制撑吞吐",
      "开源（Apache-2.0），跨平台，事件流平台"
    ],
    tags:["消息队列","流处理","分布式"], lang:"Java", lic:"Apache-2.0", repo:"apache/kafka" },

  { name:"RabbitMQ",    cat:"sys",
    desc:"AMQP 消息队列，模式多，成熟。",
    intro:"RabbitMQ 走 AMQP 协议，做企业级消息队列：多种消息模式、灵活路由、持久化，客户端语言覆盖一大圈。任务队列和异步通信要选成熟方案，它排前面。",
    features:[
      "企业级消息队列",
      "AMQP 协议",
      "消息模式多，路由灵活",
      "持久化",
      "主流语言都有客户端",
      "开源（MPL-2.0），跨平台，消息队列"
    ],
    tags:["消息队列","AMQP","企业"], lang:"Erlang", lic:"MPL-2.0", repo:"rabbitmq/rabbitmq-server" },

  { name:"systemd",     cat:"sys",
    desc:"Linux 的 init，服务日志一把抓。",
    intro:"systemd 是现代 Linux 发行版的默认 init，进程、服务、日志、网络、挂载统归它管，systemctl 一行命令起停服务。爱它嫌它的人都不少，但今天管 Linux 系统，绕不开 systemd。",
    features:[
      "系统初始化与进程管理",
      "systemctl 管服务",
      "日志（journald）",
      "网络、挂载管理",
      "现代 Linux 标准",
      "开源（LGPL-2.1），Linux，系统管理核心"
    ],
    tags:["init","进程管理","Linux"], lang:"C", lic:"LGPL-2.1", repo:"systemd/systemd" },

  { name:"OpenSSH",     cat:"sys",
    desc:"SSH 的开源实现，远程登录与传输。",
    intro:"OpenSSH 是 SSH 协议的开源实现：安全远程登录、scp/sftp 传文件、端口转发和隧道，认证走密钥。Unix 系统几乎出厂就带，安全远程访问的地基就是它。",
    features:[
      "安全远程登录",
      "文件传输（scp/sftp）",
      "端口转发与隧道",
      "密钥认证",
      "Unix 系统标配",
      "开源（BSD），跨平台，安全远程访问"
    ],
    tags:["SSH","远程","安全"], lang:"C", lic:"BSD", repo:"openssh/openssh-portable" },

  { name:"nftables",    cat:"sys",
    desc:"iptables 的现代替代，配置更利落。",
    intro:"nftables 是现代 Linux 的防火墙与包过滤框架，接班 iptables：表、链、集合一套模型，规则写起来利落，性能也好一截。现代 Linux 配防火墙，它已是标准。",
    features:[
      "现代 Linux 防火墙",
      "替代 iptables",
      "集合、链、表",
      "规则写起来短",
      "性能更好",
      "开源（GPL-2.0），Linux，防火墙"
    ],
    tags:["防火墙","包过滤","Linux"], lang:"C", lic:"GPL-2.0", repo:"" ,official:"https://www.netfilter.org/projects/nftables/index.html"},

  { name:"firewalld",   cat:"sys",
    desc:"动态调规则的 Linux 防火墙守护。",
    intro:"firewalld 是 Linux 的防火墙守护进程，底下是 nftables 或 iptables，上面按区域管规则：网络环境一换，策略跟着换，改规则不断连接。RHEL 系的默认防火墙，企业 Linux 常见。",
    features:[
      "Linux 防火墙守护",
      "动态区域管理",
      "改规则不断线",
      "底层用 nftables",
      "RHEL 默认",
      "开源（GPL-2.0），Linux，防火墙"
    ],
    tags:["防火墙","守护","区域"], lang:"C", lic:"GPL-2.0", repo:"firewalld/firewalld" },

  { name:"journald",    cat:"sys",
    desc:"systemd 的日志系统，存的是二进制。",
    intro:"journald 是 systemd 带的日志守护，系统日志收进来存成二进制，能落盘持久化，journalctl 一查一个准。现代 Linux 上排查问题，看日志这一步基本就是它。",
    features:[
      "系统日志收集",
      "日志存成二进制",
      "journalctl 查询",
      "持久化",
      "跟 systemd 一体",
      "开源（LGPL-2.1），Linux，日志管理"
    ],
    tags:["日志","守护","systemd"], lang:"C", lic:"LGPL-2.1", repo:"systemd/systemd" },

  { name:"curl",        cat:"net",
    desc:"命令行进网络取数据，协议一大把。",
    intro:"curl 是在命令行进网络取数据的工具，HTTP、HTTPS、FTP、SFTP 几十种协议都支持，下载、上传、测接口全靠它。脚本里要发个请求，第一反应基本都是 curl。",
    features:[
      "命令行传输工具",
      "支持 HTTP/HTTPS/FTP 等",
      "下载、上传、接口测试",
      "脚本里随手就用",
      "跨平台",
      "开源（curl license），跨平台，传输标准"
    ],
    tags:["传输","下载","命令行"], lang:"C", lic:"curl", repo:"curl/curl" },

  { name:"wget",        cat:"net",
    desc:"命令行下载，断点续传，还能整站镜像。",
    intro:"wget 是 GNU 的命令行下载工具，HTTP、FTP 都下，断点续传、递归抓整站做镜像都行。批量拉文件、镜像网站这类活，老牌方案就是它。",
    features:[
      "命令行下载",
      "HTTP、FTP 支持",
      "断点续传",
      "递归抓整站",
      "批量拉文件顺手",
      "开源（GPL-3.0），跨平台，下载工具"
    ],
    tags:["下载","断点","递归"], lang:"C", lic:"GPL-3.0", repo:"mirror/wget" },

  { name:"netcat",      cat:"net",
    desc:"网络调试的瑞士军刀，端口收发都行。",
    intro:"netcat（nc）被叫作网络的瑞士军刀：监听端口、收发 TCP/UDP、临时起个简单服务器、调网络排障，一小段命令就能凑出传输通道。网络调试和临时传文件，老手还是先掏它。",
    features:[
      "网络瑞士军刀",
      "端口监听与传输",
      "起个简易 TCP/UDP 服务器",
      "网络调试",
      "临时传个文件",
      "开源（BSD），跨平台，网络工具"
    ],
    tags:["端口","TCP","调试"], lang:"C", lic:"BSD", repo:"" ,official:"https://en.wikipedia.org/wiki/Netcat"},

  { name:"ping",        cat:"net",
    desc:"网络通不通，先 ping 一下",
    intro:"ping 发 ICMP 回显请求，测主机可达性和延迟，顺带看丢包。网络一出问题，多数人先敲的就是它，简单直接，每个系统都带。连通性测试的标准命令，没有悬念。",
    features:[
      "网络连通性测试",
      "ICMP 回显",
      "测试延迟与丢包",
      "排障第一站",
      "跨平台",
      "开源（GPL-2.0），跨平台，连通性测试"
    ],
    tags:["连通性","ICMP","测试"], lang:"C", lic:"GPL-2.0", repo:"iputils/iputils" },

  { name:"traceroute",  cat:"net",
    desc:"逐跳显示数据包走的路线与延迟。",
    intro:"traceroute 靠递增 TTL 逐跳探测，把数据包经过的每一跳路由器和延迟列出来。网络路径不对、某一跳卡了，用它直接定位到是哪一跳。排查网络路径与瓶颈的标准工具。",
    features:[
      "网络路径跟踪",
      "TTL 递增逐跳探",
      "每跳延迟和瓶颈都在列",
      "排查网络路径",
      "跨平台",
      "开源（GPL-2.0），跨平台，路径跟踪"
    ],
    tags:["路径","逐跳","跟踪"], lang:"C", lic:"GPL-2.0", repo:"" ,official:"https://traceroute.sourceforge.net/"},

  { name:"dig",         cat:"net",
    desc:"DNS 查询工具，输出完整响应。",
    intro:"dig 是 DNS 查询的标准工具，能查 A、AAAA、MX、TXT 等记录，输出完整的 DNS 响应。比 nslookup 灵活，排查 DNS 问题人们先拿它开刀。",
    features:[
      "查询 DNS 记录",
      "A、AAAA、MX、TXT 等",
      "输出完整响应",
      "调试 DNS 顺手",
      "参数灵活",
      "开源（BSD），跨平台，DNS 查询"
    ],
    tags:["DNS","查询","调试"], lang:"C", lic:"BSD", repo:"ISC-projects/bind9" },

  { name:"tcpdump",     cat:"net",
    desc:"命令行抓包工具，网络协议分析。",
    intro:"tcpdump 在命令行捕获并显示网络数据包，支持 BPF 过滤表达式。网络协议分析的老牌标准工具，排查网络问题通常先把它架起来。",
    features:[
      "命令行抓包",
      "捕获与显示数据包",
      "BPF 过滤表达式",
      "网络协议分析",
      "排查网络问题顺手",
      "开源（BSD），跨平台，抓包工具"
    ],
    tags:["抓包","协议","过滤"], lang:"C", lic:"BSD", repo:"the-tcpdump-group/tcpdump" },

  { name:"WireGuard",   cat:"net",
    desc:"新一代 VPN 协议，内核态实现。",
    intro:"WireGuard 是新一代 VPN 协议，代码放进内核，用现代密码学。配置简单，性能不错，如今新建 VPN 大多选它。",
    features:[
      "新一代 VPN 协议",
      "内核态实现",
      "使用现代密码学",
      "配置简单",
      "性能不错",
      "开源（GPL-2.0），跨平台，VPN"
    ],
    tags:["VPN","加密","内核"], lang:"Rust", lic:"GPL-2.0", repo:"WireGuard/WireGuard" },

  { name:"OpenVPN",     cat:"net",
    desc:"老牌企业级 VPN，远程访问常用。",
    intro:"OpenVPN 基于 TLS/SSL，是一款老牌企业级 VPN，路由与防火墙的支持方式多种。企业远程访问常用它，跨平台，不少公司至今仍在跑。",
    features:[
      "企业级 VPN",
      "基于 TLS/SSL",
      "支持多种路由与防火墙",
      "企业远程访问常用",
      "跨平台",
      "开源（LGPL-2.1），跨平台，企业 VPN"
    ],
    tags:["VPN","企业","TLS"], lang:"C", lic:"LGPL-2.1", repo:"OpenVPN/OpenVPN" },

  { name:"iperf3",      cat:"net",
    desc:"网络带宽测试工具，TCP/UDP。",
    intro:"iperf3 测两端之间的 TCP/UDP 带宽、延迟和丢包，给出详细报告。网络性能测试的常用工具，带宽瓶颈出在哪，测一下就清楚。",
    features:[
      "网络带宽测试",
      "TCP/UDP 测试",
      "顺带测延迟与丢包",
      "输出详细报告",
      "排查带宽瓶颈",
      "开源（BSD），跨平台，带宽测试"
    ],
    tags:["带宽","性能","测试"], lang:"C", lic:"BSD", repo:"esnet/iperf" },

  { name:"nslookup",    cat:"net",
    desc:"DNS 查询命令，简单直接。",
    intro:"nslookup 查域名对应的 IP 和 DNS 服务器信息，简单直接。多数系统自带，核对一下域名解析，敲几个字就够。",
    features:[
      "快速查 DNS",
      "域名与 IP 查询",
      "DNS 服务器信息",
      "多数系统自带",
      "免安装",
      "开源（BSD），跨平台，DNS 查询"
    ],
    tags:["DNS","查询","命令"], lang:"C", lic:"BSD", repo:"ISC-projects/bind9" },

  { name:"ip",          cat:"net",
    desc:"iproute2 的网络配置与监控命令。",
    intro:"ip 来自 iproute2 套件，负责 Linux 的网络配置与监控：管接口、地址、路由和策略路由，接替了老的 ifconfig 和 route。如今在 Linux 上配网络，标准做法就是它。",
    features:[
      "Linux 网络配置",
      "接口、路由、地址管理",
      "策略路由",
      "替代 ifconfig/route",
      "网络管理标准命令",
      "开源（GPL-2.0），Linux，网络管理"
    ],
    tags:["网络","路由","Linux"], lang:"C", lic:"GPL-2.0", repo:"iproute2/iproute2" },

  { name:"DaVinci Resolve", cat:"media",
    desc:"剪辑、调色、音频、特效一个软件做完。",
    intro:"DaVinci Resolve 把剪辑、调色、音频和特效装进一个软件，影视工业级调色是它的核心。免费版已经够用，不少影视后期就在这上面完成。",
    features:[
      "专业视频剪辑",
      "影视级调色",
      "音频与特效",
      "从剪辑到成片一个软件跑完",
      "免费版已经够用",
      "商用（免费+Studio），跨平台，专业视频"
    ],
    tags:["视频","调色","专业"], lang:"C++", lic:"Proprietary", repo:"blackmagicdesign/DaVinci-Resolve-Studio", official:"https://www.blackmagicdesign.com/products/davinciresolve" },

  { name:"Shotcut",      cat:"media",
    desc:"开源视频编辑器，跨平台。",
    intro:"Shotcut 是开源跨平台的视频编辑器，多轨剪辑、特效、滤镜、音频都有，文件打开直接剪，没有导入这一步。免费、没水印，日常剪辑够用。",
    features:[
      "开源视频编辑器",
      "多轨剪辑",
      "特效与滤镜",
      "打开文件直接剪，免导入",
      "免费无水印",
      "开源（GPL-3.0），跨平台，视频编辑"
    ],
    tags:["视频","编辑","开源"], lang:"C++", lic:"GPL-3.0", repo:"mltframework/shotcut" },

  { name:"ffmpeg",      cat:"media",
    desc:"音视频处理瑞士军刀，命令行。",
    intro:"ffmpeg 用命令行做转码、剪辑、压缩、流媒体、提取音轨，是音视频界的瑞士军刀。事实标准，几乎所有视频软件底层都靠它。",
    features:[
      "音视频处理",
      "转码、剪辑、压缩",
      "流媒体、提取音轨",
      "命令行驱动一切",
      "视频软件底层都靠它",
      "开源（LGPL-2.1），跨平台，音视频核心"
    ],
    tags:["音视频","转码","命令行"], lang:"C", lic:"LGPL-2.1", repo:"FFmpeg/FFmpeg" },

  { name:"GStreamer",   cat:"media",
    desc:"多媒体处理框架，流式管道。",
    intro:"GStreamer 把编码、转码、流媒体、采集拆成管道各环节来处理音视频流。Linux 多媒体系统的框架层，不少东西都架在它上面。",
    features:[
      "多媒体处理框架",
      "管道架构",
      "编码、转码、流媒体",
      "音视频采集",
      "Linux 核心框架",
      "开源（LGPL-2.1），跨平台，多媒体框架"
    ],
    tags:["多媒体","框架","流"], lang:"C", lic:"LGPL-2.1", repo:"GStreamer/gstreamer" },

  { name:"mp3gain",     cat:"media",
    desc:"音频响度归一化，批量处理。",
    intro:"mp3gain 批量分析 MP3/OGG 的响度并调到 ReplayGain 标准，切歌时音量不再忽大忽小。做响度归一化常用它。",
    features:[
      "音频响度归一化",
      "批量处理",
      "ReplayGain 标准",
      "消除音量不均",
      "MP3/OGG 支持",
      "开源（GPL-2.0），跨平台，响度管理"
    ],
    tags:["音频","响度","归一化"], lang:"C", lic:"GPL-2.0", repo:"" ,official:"http://mp3gain.sourceforge.net/"},

  { name:"ImageMagick", cat:"media",
    desc:"图像处理瑞士军刀，命令行。",
    intro:"ImageMagick 缩放、裁剪、格式转换、滤镜、合成全靠命令行。图像处理的老牌工具，大量网站的图片处理和自动化管线都跑在它上面。",
    features:[
      "图像处理",
      "缩放、裁剪、格式转换",
      "滤镜与合成",
      "命令行搞定全套",
      "网站与自动化",
      "开源（Apache-2.0），跨平台，图像处理"
    ],
    tags:["图像","处理","命令行"], lang:"C", lic:"Apache-2.0", repo:"ImageMagick/ImageMagick" },

  { name:"IINA",        cat:"media",
    desc:"macOS 现代视频播放器，基于 mpv。",
    intro:"IINA 用 mpv 做引擎，专为 macOS 设计，交互原生，支持手势、触控板和字幕。Mac 上看视频，不少人直接把它当默认播放器。",
    features:[
      "macOS 现代播放器",
      "基于 mpv 引擎",
      "手势与触控板",
      "字幕支持",
      "原生 macOS 设计",
      "开源（GPL-3.0），macOS，视频播放"
    ],
    tags:["播放器","macOS","mpv"], lang:"Swift", lic:"GPL-3.0", repo:"iina/iina" },

  { name:"Kodi",        cat:"media",
    desc:"开源媒体中心，数字娱乐中枢。",
    intro:"Kodi 管理视频、音乐、照片和直播电视，插件和皮肤随意装，把设备变成家庭娱乐中枢。做媒体中心，它是老面孔。",
    features:[
      "开源媒体中心",
      "视频、音乐、照片、直播",
      "插件与皮肤",
      "家庭娱乐中枢",
      "跨设备",
      "开源（GPL-2.0），跨平台，媒体中心"
    ],
    tags:["媒体中心","娱乐","开源"], lang:"C++", lic:"GPL-2.0", repo:"xbmc/xbmc" },

  { name:"Plex",        cat:"media",
    desc:"个人媒体服务器，多端播放。",
    intro:"Plex 把本地影音库收在一起集中管理，按需转码，各个端都能播，还支持远程访问。自建影音库，很多人第一步是先架个 Plex。",
    features:[
      "个人媒体服务器",
      "影音库集中管理",
      "转码与多端播放",
      "远程访问",
      "体验做得细致",
      "商用（免费+付费），跨平台，媒体服务器"
    ],
    tags:["媒体服务器","影音","转码"], lang:"C++", lic:"Proprietary", repo:"plexinc/pms", official:"https://www.plex.tv/" },

  { name:"Emby",        cat:"media",
    desc:"个人媒体服务器，Plex 替代。",
    intro:"Emby 的玩法和 Plex 相近：管影音库、转码、多端播放，外加插件生态。服务端有开源版可选，常被拿来当 Plex 的替代。",
    features:[
      "个人媒体服务器",
      "影音库管理",
      "转码与多端",
      "插件与社区",
      "开源服务器版",
      "商用+开源，跨平台，媒体服务器"
    ],
    tags:["媒体服务器","影音","开源"], lang:"C#", lic:"Proprietary", repo:"emby/emby", official:"https://emby.media/" },

  { name:"Aegisub",     cat:"media",
    desc:"专业字幕编辑器，开源。",
    intro:"Aegisub 做字幕翻译、时间轴、样式和卡拉OK 效果，常见字幕格式都支持。字幕组的常用家伙，专业字幕制作经常见到它。",
    features:[
      "专业字幕编辑",
      "翻译、时间轴、样式",
      "卡拉OK 效果",
      "多种字幕格式",
      "字幕组常用",
      "开源（GPL-2.0），跨平台，字幕编辑"
    ],
    tags:["字幕","编辑","时间轴"], lang:"C++", lic:"GPL-2.0", repo:"Aegisub/Aegisub" },

  { name:"Subtitle Edit", cat:"media",
    desc:"字幕编辑与翻译工具，多语言。",
    intro:"Subtitle Edit 管字幕编辑和翻译，格式支持多种，能从视频里 OCR 出字幕，能调时间轴，还带翻译辅助和多语言界面。个人做字幕或团队协作都用得上。",
    features:[
      "字幕编辑与翻译",
      "多种字幕格式",
      "OCR 识别",
      "时间轴调整",
      "多语言界面",
      "开源（GPL-2.0），Windows，字幕处理"
    ],
    tags:["字幕","翻译","OCR"], lang:"C#", lic:"GPL-2.0", repo:"SubtitleEdit/subtitleedit" },

  { name:"Traefik",     cat:"host",
    desc:"云原生反向代理与负载均衡。",
    intro:"Traefik 是云原生部署的入口：反向代理、负载均衡、API 网关都能做，后端自动发现，HTTPS 证书靠 Let's Encrypt 自动申请，路由跟着容器走。",
    features:[
      "云原生反向代理",
      "负载均衡",
      "自动发现后端",
      "Let's Encrypt 自动 HTTPS",
      "API 网关",
      "开源（MIT），容器，反向代理"
    ],
    tags:["反向代理","容器","HTTPS"], lang:"Go", lic:"MIT", repo:"traefik/traefik" },

  { name:"Gitea",       cat:"host",
    desc:"轻量自托管 Git 平台，快速。",
    intro:"Gitea 用 Go 写，轻量的自托管 Git 平台，资源占用很低，PR、Issue、CI、Wiki 齐全，一台机器就能跑起来。不少团队的自建代码平台就是它。",
    features:[
      "轻量自托管 Git",
      "Pull Request、Issue",
      "CI 集成",
      "Wiki",
      "资源占用极低",
      "开源（MIT），自托管，Git 平台"
    ],
    tags:["Git","自托管","轻量"], lang:"Go", lic:"MIT", repo:"go-gitea/gitea" },

  { name:"Forgejo",     cat:"host",
    desc:"Gitea 社区分支，去中心化。",
    intro:"Forgejo 是 Gitea 的社区分支，由去中心化社区治理，专注长期维护。功能和 Gitea 一致，PR、Issue、CI、Wiki 都在。",
    features:[
      "Gitea 社区分支",
      "去中心化治理",
      "Pull Request、Issue",
      "CI 集成",
      "长期维护",
      "开源（MIT），自托管，Git 平台"
    ],
    tags:["Git","社区","自托管"], lang:"Go", lic:"MIT", repo:"" ,official:"https://forgejo.org/"},

  { name:"Gogs",        cat:"host",
    desc:"简单自托管 Git 服务，自举。",
    intro:"Gogs 同样用 Go 写，功能聚焦、部署简单，PR、Issue 和 Webhook 支持，项目本身就架在 Gogs 上。自托管 Git 的轻量选择，Gitea 就是从它分出去的。",
    features:[
      "简单自托管 Git",
      "项目自己架自己",
      "Pull Request、Issue",
      "Webhook",
      "部署简单",
      "开源（MIT），自托管，Git 服务"
    ],
    tags:["Git","自托管","简单"], lang:"Go", lic:"MIT", repo:"gogs/gogs" },

  { name:"MinIO",       cat:"host",
    desc:"高性能 S3 兼容对象存储。",
    intro:"MinIO 用 Go 编写，S3 兼容的自托管对象存储，纠删码、版本控制、加密都支持，很多人拿它替代 S3。",
    features:[
      "S3 兼容对象存储",
      "纠删码",
      "版本控制",
      "加密",
      "替代 S3",
      "开源（AGPL-3.0），自托管，对象存储"
    ],
    tags:["对象存储","S3","自托管"], lang:"Go", lic:"AGPL-3.0", repo:"minio/minio" },

  { name:"Filebrowser", cat:"host",
    desc:"轻量 Web 文件管理器，自托管。",
    intro:"Filebrowser 让你在浏览器里管文件：上传下载、预览、给用户配权限，单二进制就能部署。自托管文件管理，它算最省事的一类。",
    features:[
      "Web 文件管理器",
      "上传下载",
      "文件预览",
      "用户权限",
      "单二进制部署",
      "开源（MIT），自托管，文件管理"
    ],
    tags:["文件管理","Web","自托管"], lang:"Go", lic:"MIT", repo:"filebrowser/filebrowser" },

  { name:"Cloudreve",   cat:"host",
    desc:"自托管网盘，存储后端多种。",
    intro:"Cloudreve 是自托管网盘，存储后端可用本地、S3 或 WebDAV，文件分享、在线预览、用户管理一应俱全。",
    features:[
      "自托管网盘",
      "本地、S3、WebDAV",
      "文件分享",
      "在线预览",
      "用户管理",
      "开源（AGPL-3.0），自托管，网盘"
    ],
    tags:["网盘","存储","自托管"], lang:"Go", lic:"AGPL-3.0", repo:"Cloudreve/Cloudreve" },

  { name:"Harbor",      cat:"host",
    desc:"企业级容器镜像仓库，CNCF。",
    intro:"Harbor 托管在 CNCF 旗下，面向企业场景的容器镜像仓库：镜像管理、漏洞扫描、复制、权限和审计日志都是现成的。",
    features:[
      "企业级镜像仓库",
      "漏洞扫描",
      "镜像复制",
      "权限与审计",
      "CNCF 托管",
      "开源（Apache-2.0），自托管，镜像仓库"
    ],
    tags:["镜像仓库","容器","CNCF"], lang:"Go", lic:"Apache-2.0", repo:"goharbor/harbor" },

  { name:"Rancher",     cat:"host",
    desc:"Kubernetes 管理平台，多集群。",
    intro:"Rancher 统一管理多个 K8s 集群，用户、权限、应用部署都在一处，企业做 K8s 运维，不用在各集群控制台之间来回跑。",
    features:[
      "K8s 管理平台",
      "多集群管理",
      "用户与权限",
      "应用部署",
      "运维集中在一处",
      "开源（Apache-2.0），自托管，K8s 管理"
    ],
    tags:["K8s","管理","多集群"], lang:"Go", lic:"Apache-2.0", repo:"rancher/rancher" },

  { name:"Loki",        cat:"host",
    desc:"轻量日志聚合系统，Grafana 出品。",
    intro:"Loki 是 Grafana 一系的日志聚合方案：只给日志打标签建索引，不解析日志内容，成本低。查询用的 LogQL 与 PromQL 兼容，常被用来替代 Elasticsearch 那套日志链路。",
    features:[
      "轻量日志聚合",
      "标签索引",
      "不解析日志、低成本",
      "LogQL 查询",
      "Grafana 同一生态",
      "开源（AGPL-3.0），自托管，日志聚合"
    ],
    tags:["日志","聚合","Grafana"], lang:"Go", lic:"AGPL-3.0", repo:"grafana/loki" },

  { name:"Telegraf",    cat:"host",
    desc:"轻量指标采集代理，InfluxData 维护。",
    intro:"Telegraf 由 InfluxData 维护，是个轻量指标采集代理，300+ 插件覆盖主机、数据库、云服务，输出端能送进 InfluxDB、Prometheus 等多种后端。",
    features:[
      "轻量指标采集",
      "300+ 插件",
      "主机、数据库、云服务",
      "输出到多后端",
      "InfluxData 维护",
      "开源（MIT），自托管，指标采集"
    ],
    tags:["指标","采集","代理"], lang:"Go", lic:"MIT", repo:"influxdata/telegraf" },

  { name:"Vault",       cat:"host",
    desc:"密钥与敏感数据管理，加密。",
    intro:"Vault 管密钥和敏感数据：动态签发凭证，自带加密、凭证租约、审计日志和多因素认证，做密钥体系时常用它。",
    features:[
      "密钥管理",
      "动态凭证",
      "加密",
      "租约与审计",
      "多因素认证",
      "开源（MPL-2.0），自托管，密钥管理"
    ],
    tags:["密钥","加密","凭证"], lang:"Go", lic:"MPL-2.0", repo:"hashicorp/vault" },

  { name:"Consul",      cat:"host",
    desc:"服务发现与配置管理，KV 存储。",
    intro:"Consul 负责服务注册、健康检查和 KV 配置存储，支持多数据中心，也能通过 DNS 访问。微服务架构里做服务发现，它是常见组件。",
    features:[
      "服务发现",
      "健康检查",
      "KV 存储",
      "多数据中心",
      "DNS 接口",
      "开源（MPL-2.0），自托管，服务发现"
    ],
    tags:["服务发现","配置","多数据中心"], lang:"Go", lic:"MPL-2.0", repo:"hashicorp/consul" },
];
// 为每个精选条目赋索引，详情弹窗用来查条目
DATA.forEach((d,i)=>d._i=i);

/* ===== 小众优选：冷门但精悍的小众工具（140 条，同样是人工挑选，可点开看详细介绍） ===== */
const NICHE = [
  { name:"gum",       cat:"dev",
    desc:"命令行 UI 组件包，几条命令搭出交互界面。",
    intro:"gum 出自 Charm 团队，就是 fzf、glamour 的那批作者。下拉菜单、复选框、文件选择器、文本域、表格，都做成命令行组件，shell 脚本里调一调，一个交互式 CLI 就有了，界面代码一行都不用写。",
    features:[
      "可组合的 UI 组件：菜单、复选框、文件选择、文本域、表格、确认、过滤",
      "shell 里直接调用，界面代码一行不写",
      "和 fzf、glamour 同作者同风格",
      "支持主题，视觉延续 Charm",
      "快速、跨平台、单 Go 二进制",
      "适合交互式脚本与 TUI 小工具"
    ],
    tags:["CLI","TUI","终端"], lang:"Go", lic:"MIT", repo:"charmbracelet/gum" },

  { name:"just",      cat:"dev",
    desc:"现代命令运行器，用 justfile 顶替 Makefile。",
    intro:"just 干的和 Make 差不多，但更简单。构建、测试、运行这些重复敲的命令写进一个 justfile，之后 just 命令名 一键触发。变量、函数、条件都支持，自动补全内置，学习成本几乎没有，项目里那些常用 shell 命令很快就能整理成一套可复用的入口。",
    features:[
      "用 justfile 定义命令，just 命令名 一键运行，零 Make 学习成本",
      "支持变量、默认值、函数、条件表达式",
      "自动向上层目录找 justfile",
      "内置自动补全，just 直接列出可用命令",
      "跨平台、Rust 编写、单二进制、启动极快",
      "常用命令整理成一套入口"
    ],
    tags:["构建工具","CLI","自动化"], lang:"Rust", lic:"MIT OR Apache-2.0", repo:"casey/just" },

  { name:"glow",      cat:"dev",
    desc:"终端里漂亮地渲染 Markdown，语法高亮、响应式布局。",
    intro:"glow 把 Markdown 文件在终端里渲染成排版干净的页面，代码高亮、表格、引用都在。可以直接指定文件，也可以从标准输入喂内容，扫一眼 README 或文档，不用离开终端。",
    features:[
      "终端内渲染 Markdown，排版干净易读",
      "代码语法高亮、表格、引用、图片",
      "可直接指向文件，也可从 stdin 管道读取",
      "主题支持，可切换配色方案",
      "跨平台、单 Go 二进制",
      "适合在终端里快速预览 README 与文档"
    ],
    tags:["Markdown","CLI","终端"], lang:"Go", lic:"MIT", repo:"charmbracelet/glow" },

  { name:"dust",      cat:"sys",
    desc:"可视化磁盘占用分析，一眼看出哪些文件夹在吃硬盘。",
    intro:"dust 递归扫描目录，把各个文件夹占的空间用树状和条形图摆出来，快速定位是什么在吃磁盘。比 du 快得多，也更顺眼。",
    features:[
      "递归分析磁盘占用，树状 / 条形视图输出",
      "一眼看出哪些文件夹和文件在占空间",
      "Rust 编写，比 du 快得多",
      "支持按大小排序、过滤、深度限制",
      "跨平台、单二进制",
      "适合快速定位磁盘空间问题"
    ],
    tags:["磁盘","分析","CLI"], lang:"Rust", lic:"MIT OR Apache-2.0", repo:"bootandy/dust" },

  { name:"entr",      cat:"sys",
    desc:"文件一变就自动执行命令，极简的文件监听器。",
    intro:"entr 的用法很直白：把关心的文件和一条命令喂给它，文件一变，命令就再跑一遍。C 代码只有几千字节，不配置、无依赖，和 shell 管道配合顺畅，轻量文件监听它完全够用。",
    features:[
      "文件一变就自动执行命令",
      "几千字节 C 代码，零配置、零依赖",
      "和 shell 管道配合顺畅",
      "支持多文件、递归监听",
      "跨平台、极轻量",
      "适合文件监听、热重载、自动执行"
    ],
    tags:["文件监听","CLI","自动化"], lang:"C", lic:"WTFPL", repo:"eradman/entr" },

  { name:"lazydocker", cat:"host",
    desc:"终端里的 Docker TUI，容器、镜像、日志不离开终端。",
    intro:"lazydocker 把 Docker 那堆命令行操作收进一个终端 TUI 界面：看容器状态、启停、看日志、进容器执行命令、管镜像和卷，都靠菜单点选。lazygit 的姊妹项目，重度用 Docker 的人一般也装了它。",
    features:[
      "Docker 全套操作：容器启停、重启、删除、进容器执行命令",
      "交互式查看日志，实时过滤与搜索",
      "管理镜像、卷、网络、compose",
      "容器资源占用一目了然，stats 视图",
      "单二进制、零依赖，有终端就能跑",
      "lazygit 姊妹项目，同作者、同风格"
    ],
    tags:["Docker","CLI","TUI"], lang:"Go", lic:"MIT", repo:"jesseduffield/lazydocker" },

  { name:"fastembed", cat:"ai",
    desc:"本地生成文本 / 图像嵌入向量，纯 CPU 可跑。",
    intro:"fastembed 是 Qdrant 出品的本地嵌入向量库，纯 CPU 就能生成文本和图像嵌入向量，不需要 GPU，也不用重型框架，速度和内存都做过优化。常配 Qdrant 这类向量数据库，搭本地私有的 RAG 与语义搜索管线。",
    features:[
      "本地生成文本 / 图像嵌入向量，跑在 CPU 上",
      "无需 GPU、无需重型框架",
      "针对速度与内存优化，推理快",
      "和 Qdrant 等向量数据库配合顺手",
      "适合搭建本地、私有的 RAG 与语义搜索",
      "Python 库，易于集成、跨平台"
    ],
    tags:["嵌入","RAG","本地"], lang:"Python", lic:"Apache-2.0", repo:"qdrant/fastembed" },

  { name:"txtai",     cat:"ai",
    desc:"嵌入、语义搜索与工作流框架，轻量可扩展。",
    intro:"txtai 把嵌入向量、语义搜索和知识工作流装进一个轻量框架，向量检索、NLP 管线、工作流编排都在里面，用极少代码就能搭出自带的语义搜索与 RAG 方案。",
    features:[
      "嵌入、语义搜索、工作流编排，都在一个框架里",
      "轻量、易用、代码极少",
      "内置向量存储、多种嵌入模型",
      "支持管线与工作流编排",
      "轻量、自包含的语义搜索与 RAG 方案",
      "Python 库、可扩展、跨平台"
    ],
    tags:["嵌入","搜索","RAG"], lang:"Python", lic:"MIT", repo:"neuml/txtai" },

  { name:"Marp",      cat:"prod",
    desc:"用 Markdown 写幻灯片，导出 HTML / PDF / PPTX。",
    intro:"Marp 用 Markdown 写幻灯片，渲染成干净的演示页面，能导出 HTML、PDF、PPTX。版式、主题、图表都支持，不用离开文本编辑器就能做片子。",
    features:[
      "Markdown 就是讲稿，不用摆 PPT",
      "导出 HTML、PDF、PPTX",
      "内置版式、主题、分页",
      "支持图表、代码高亮、公式",
      "CLI 与编辑器插件支持",
      "适合快速产出漂亮的幻灯片"
    ],
    tags:["演示","Markdown","幻灯片"], lang:"TypeScript", lic:"MIT", repo:"marp-team/marp" },

  { name:"tldraw",    cat:"design",
    desc:"开源白板 SDK，搭建协作白板与绘图工具。",
    intro:"tldraw 是开源白板 SDK，白板那一套核心能力都在：画布、图形、绘制、擦除、撤销重做、协作，扩展性也高。可以直接用，也能作为组件嵌进自己的产品，做白板类应用常用它打底。",
    features:[
      "完整白板能力：画布、图形、绘制、擦除、撤销重做",
      "实时协作，多用户编辑",
      "可扩展 SDK，可嵌入为组件",
      "内置导出（SVG / PNG）",
      "适合快速做白板、绘图、画图功能",
      "TypeScript、React、开源、社区活跃"
    ],
    tags:["白板","SDK","协作"], lang:"TypeScript", lic:"MIT", repo:"tldraw/tldraw" },

  { name:"bat",       cat:"dev",
    desc:"长了翅膀的 cat，语法高亮、git 集成、带分页。",
    intro:"bat 给 cat 加上语法高亮、行号、git 集成和自动分页，哪些行改过一眼能看到。Rust 编写，启动快，自动识别文件类型，语言覆盖几百种，终端里看文件，很多人直接拿它换掉 cat。",
    features:[
      "数百种语言语法高亮，自动识别文件类型",
      "行号、git 集成——显示哪些行被改动",
      "自动分页，不用手动滚屏",
      "Rust 编写、启动极快、单二进制、跨平台",
      "支持海量文件类型与主题",
      "可直接替代 cat，易集成进现有脚本"
    ],
    tags:["CLI","文件查看","终端"], lang:"Rust", lic:"MIT OR Apache-2.0", repo:"sharkdp/bat" },

  { name:"fd",        cat:"dev",
    desc:"简单、快速、友好的 find 替代品。",
    intro:"fd 替 find 干活，用 Rust 编写，调用操作系统原生搜索 API（Linux 上是 readdir 这类），比 find 快，语法也直白，不用拼复杂的 -type -name 表达式。默认尊重 .gitignore、跳过隐藏文件，输出清楚。",
    features:[
      "调用操作系统原生搜索 API，比 find 快得多",
      "语法简单友好，不用复杂表达式",
      "默认尊重 .gitignore、跳过隐藏文件",
      "清晰、彩色的输出",
      "Rust 编写、单二进制、跨平台",
      "支持并行搜索、正则、文件类型过滤"
    ],
    tags:["CLI","搜索","文件"], lang:"Rust", lic:"MIT", repo:"sharkdp/fd" },

  { name:"zoxide",    cat:"dev",
    desc:"跳转到你常用目录，更聪明的 cd。",
    intro:"zoxide 记住你常去的目录，敲 z 部分目录名，它就跳到最可能的那个。排序看访问频率和近期程度，不用配置、不用建索引，bash、zsh、fish 这些 shell 都能配。深层目录之间的跳转，靠它快了不少。",
    features:[
      "直接跳到常用目录，比 cd 更聪明",
      "频率 + 近期度评分，学习你的使用习惯",
      "零配置、零索引，兼容主流 shell",
      "支持部分匹配、模糊搜索",
      "Rust 编写、单二进制、跨平台",
      "可与 fzf 等工具组合使用"
    ],
    tags:["CLI","Shell","效率"], lang:"Rust", lic:"MIT", repo:"ajeetdsouza/zoxide" },

  { name:"sd",        cat:"dev",
    desc:"简单安全的 sed 替代品，语法更易读。",
    intro:"sd 留着 sed 查找替换的核心，语法换成 sd 旧 新 文件 这种直白形式，sed 里难记的转义符和特殊语法都不用背了。Rust 编写，快，默认不会误改原文件，终端里快速替换文本挺顺手。",
    features:[
      "语法是 sd 旧 新 文件，比 sed 好懂得多",
      "不用记转义符和特殊语法",
      "默认安全，不会误改原文件",
      "支持正则、多文件、递归",
      "Rust 编写、快速、单二进制、跨平台",
      "适合终端里快速文本替换"
    ],
    tags:["CLI","文本","替换"], lang:"Rust", lic:"MIT OR Apache-2.0", repo:"chmln/sd" },

  { name:"procs",     cat:"dev",
    desc:"现代的 ps 替代品，信息丰富、带树状视图。",
    intro:"procs 接 ps 的活：进程的 CPU、内存、磁盘 I/O、网络和命令行一屏列全，带树状视图、过滤和排序。Rust 编写，启动快，输出清楚，看进程够用了。",
    features:[
      "丰富的进程信息：CPU、内存、磁盘 I/O、网络、命令行",
      "树状视图，清晰展示进程父子关系",
      "过滤、排序、多种展示模式",
      "Rust 编写、启动快、单二进制、跨平台",
      "输出清晰易读",
      "适合快速查看进程状态与排查问题"
    ],
    tags:["CLI","进程","系统"], lang:"Rust", lic:"MIT OR Apache-2.0", repo:"dalance/procs" },

  { name:"atuin",     cat:"dev",
    desc:"跨设备同步、可搜索的 shell 历史管理器。",
    intro:"atuin 把你敲过的每条命令记进本地 SQLite 数据库，跨设备同步走端到端加密。模糊搜索能快速找回旧命令，还支持分享、统计和导入 bash/zsh 历史。",
    features:[
      "记录并存储 shell 历史，跨设备同步",
      "端到端加密同步，历史隐私",
      "模糊搜索，快速找回历史命令",
      "统计、分享、导入导出 bash/zsh 历史",
      "Rust 编写、跨平台",
      "适合管理 shell 历史"
    ],
    tags:["CLI","Shell","历史"], lang:"Rust", lic:"AGPL-3.0", repo:"atuinsh/atuin" },

  { name:"mise",      cat:"dev",
    desc:"替代 asdf / rbenv / nvm / pyenv 的版本管理器。",
    intro:"mise 接下了 asdf、rbenv、nvm、pyenv 这些工具的活，统一管理 Node、Python、Rust、Go、Java 等语言和工具版本。项目里放一个 mise.toml 或 .tool-versions，进目录就自动切到对的版本。Rust 编写，快，支持的工具非常多。",
    features:[
      "统一管理多语言与工具版本：Node、Python、Rust、Go、Java 等",
      "按目录自动切换版本，用 mise.toml 或 .tool-versions",
      "替代 asdf、rbenv、nvm、pyenv 等",
      "Rust 编写、快速、单二进制、跨平台",
      "支持的工具非常多",
      "适合管理开发环境版本"
    ],
    tags:["CLI","版本管理","开发"], lang:"Rust", lic:"MIT OR Apache-2.0", repo:"jdx/mise" },

  { name:"lsd",       cat:"dev",
    desc:"现代的 ls 替代品，彩色、图标、树状视图。",
    intro:"lsd 给 ls 换上彩色、图标和树状视图，文件类型、大小、权限、属主列得清楚，过滤和排序选项也多。Rust 编写，启动快，终端里看目录顺眼不少。",
    features:[
      "彩色、图标、树状视图",
      "丰富的过滤、排序",
      "显示文件类型、大小、权限、属主等",
      "Rust 编写、启动快、单二进制、跨平台",
      "输出清爽",
      "适合终端里查看目录内容"
    ],
    tags:["CLI","文件","终端"], lang:"Rust", lic:"MIT", repo:"lsd-rs/lsd" },

  { name:"tokei",     cat:"dev",
    desc:"统计各种语言的代码行数，简单快速。",
    intro:"tokei 递归扫描目录，按语言汇总代码行、注释行、空行，输出干净利落。Rust 编写，速度快，语言覆盖很广，想摸清一个项目的代码规模，跑一下就行。",
    features:[
      "统计各种语言的代码行、注释行、空行数",
      "递归扫描目录，输出清晰汇总",
      "语言覆盖很广",
      "Rust 编写、快速、单二进制、跨平台",
      "可输出 JSON，易集成进脚本",
      "适合快速了解项目代码规模"
    ],
    tags:["CLI","统计","代码"], lang:"Rust", lic:"MIT", repo:"XAMPPRocky/tokei" },

  { name:"xh",        cat:"dev",
    desc:"现代的 curl 替代品，JSON 优先、输出更友好。",
    intro:"xh 接住 curl 的核心能力，默认行为更照顾人：JSON 优先、输出格式化、Content-Type 自动识别。Rust 编写，发 HTTP 请求求快，它的输出比 curl 好读。",
    features:[
      "JSON 优先、格式化输出，对人类更友好",
      "自动识别 Content-Type",
      "支持 curl 的核心功能",
      "Rust 编写、快速、单二进制、跨平台",
      "默认行为更友好",
      "适合快速发 HTTP 请求与调试 API"
    ],
    tags:["CLI","HTTP","API"], lang:"Rust", lic:"MIT OR Apache-2.0", repo:"ducaale/xh" },

  { name:"watchexec", cat:"dev",
    desc:"文件变化就执行命令，带丰富过滤的跨平台监听器。",
    intro:"watchexec 盯着文件，文件一变就把命令跑起来，过滤条件能按文件类型、目录、忽略规则来，还能重启进程、发信号。Rust 编写，调用操作系统原生的文件监听 API，热重载、自动构建这类场景它挺稳。",
    features:[
      "文件变化就执行命令",
      "丰富过滤：文件类型、目录、忽略规则",
      "可运行命令、重启进程、发信号",
      "调用操作系统原生的文件监听 API，高效可靠",
      "Rust 编写、跨平台",
      "适合热重载、自动构建等场景"
    ],
    tags:["CLI","文件监听","自动化"], lang:"Rust", lic:"MIT OR Apache-2.0", repo:"watchexec/watchexec" },

  { name:"taskwarrior", cat:"prod",
    desc:"命令行任务管理器，命令就能管待办。",
    intro:"taskwarrior 用几条命令行命令管待办，优先级、截止日期、项目、标签和报表都齐全。数据放本地，不上传，速度快，在终端里管任务它不添乱。",
    features:[
      "用简单命令管理待办事项",
      "支持优先级、截止日期、项目、标签",
      "丰富的报表、统计",
      "本地、快速、隐私友好",
      "跨平台",
      "适合在终端里管理任务"
    ],
    tags:["CLI","任务","效率"], lang:"C++", lic:"MIT", repo:"GothenburgBitFactory/taskwarrior" },

  { name:"micro",     cat:"dev",
    desc:"带熟悉界面的终端编辑器，支持鼠标与跨会话撤销。",
    intro:"micro 不用你学 Vim 的模式，鼠标、复制粘贴、多光标都是熟悉的那套。语法高亮、插件、LSP、跨会话撤销也有，想在终端里编辑又不想碰 Vim 的人，选它合适。",
    features:[
      "熟悉的界面，不用学习模式",
      "鼠标、复制粘贴、多光标编辑",
      "语法高亮、插件、LSP",
      "跨会话撤销",
      "Go 编写、跨平台、单二进制",
      "不想学 Vim 又要在终端编辑的人"
    ],
    tags:["CLI","编辑器","终端"], lang:"Go", lic:"MIT", repo:"micro-editor/micro" },

  { name:"nnn",       cat:"dev",
    desc:"快的终端文件管理器，占用不到 200KB。",
    intro:"nnn 占用不到 200KB，启动是瞬间的事，终端里浏览、管理文件干净高效，很顺手。",
    features:[
      "启动快，占用不到 200KB",
      "浏览管理都高效",
      "预览、书签、插件",
      "C 编写、跨平台",
      "可与其他工具组合",
      "适合终端里快速管理文件"
    ],
    tags:["CLI","文件管理器","终端"], lang:"C", lic:"MIT", repo:"jarun/nnn" },

  { name:"tldr",      cat:"dev",
    desc:"社区驱动的 man 页，简洁实用的命令示例。",
    intro:"tldr 不铺长文，每条命令给几条简洁示例，由社区维护，命令覆盖量大，命令行和浏览器都能用。快速学一个命令的用法，看它的例子就够。",
    features:[
      "简洁实用的示例，不用读一大篇文档",
      "社区驱动，覆盖海量命令",
      "命令行或浏览器使用",
      "多语言",
      "易于搜索",
      "适合快速学习命令用法"
    ],
    tags:["CLI","文档","学习"], lang:"JavaScript", lic:"CC-BY-SA-4.0", repo:"tldr-pages/tldr" },

  { name:"polars",    cat:"ai",
    desc:"数据框库，惰性求值 + 并行，比 pandas 快得多。",
    intro:"polars 支持惰性求值和并行处理，数据量一大，比 pandas 快得多。Rust 编写，对外给的是 Python API，高性能数据处理，它够快。",
    features:[
      "大数据量下比 pandas 快得多",
      "惰性求值、并行处理",
      "Rust 编写、提供 Python API",
      "适合高性能数据处理",
      "跨平台",
      "API 直观"
    ],
    tags:["数据框","数据","分析"], lang:"Rust", lic:"MIT", repo:"pola-rs/polars" },

  { name:"btop",      cat:"sys",
    desc:"漂亮的系统监视器，CPU / 内存 / 磁盘 / 网络一目了然。",
    intro:"btop 在终端里实时显示 CPU、内存、磁盘、网络和进程状态，界面清晰，kill 进程、改优先级直接在里面对话式操作。Linux、macOS、BSD 都能跑，瞄一眼系统状态，打开它就够。",
    features:[
      "实时显示 CPU、内存、磁盘、网络",
      "界面清晰美观",
      "进程管理：kill、改优先级",
      "跨平台：Linux、macOS、BSD",
      "跑起来轻快",
      "适合快速查看系统状态"
    ],
    tags:["系统监视","TUI","运维"], lang:"C++", lic:"MIT", repo:"aristocratos/btop" },

  { name:"glances",   cat:"sys",
    desc:"跨平台系统监视器，也支持 Web 与 API。",
    intro:"glances 监控 CPU、内存、磁盘、网络、进程、容器，跨平台，带 Web UI 和 REST API，能远程看。Python 编写，装起来简单，用着省心。",
    features:[
      "跨平台：Linux、macOS、Windows、BSD",
      "显示 CPU、内存、磁盘、网络、进程、容器",
      "支持 Web UI 与 REST API，可远程监控",
      "Python 编写、容易部署",
      "丰富的展示模式",
      "适合跨平台系统监控"
    ],
    tags:["系统监视","Web","运维"], lang:"Python", lic:"WTFPL", repo:"nicolargo/glances" },

  { name:"iotop",     cat:"sys",
    desc:"I/O 版的 top，实时显示每个进程的磁盘读写。",
    intro:"iotop 是 I/O 版的 top，实时列出每个进程的磁盘读写，谁在猛读写磁盘，跑一下它就有答案。",
    features:[
      "实时显示每个进程的磁盘 I/O",
      "帮你找出 I/O 瓶颈",
      "跑一下就有答案",
      "支持多种展示模式",
      "适合排查磁盘 I/O 问题",
      "轻量无依赖"
    ],
    tags:["系统监视","I/O","运维"], lang:"Python", lic:"GPL-2.0", repo:"Tomas-M/iotop" },

  { name:"nethogs",   cat:"net",
    desc:"显示每个进程的网络带宽占用，按进程的 iftop。",
    intro:"nethogs 实时显示每个进程的上传、下载带宽，相当于按进程统计的 iftop。要查谁在占网络，它按进程列出来。",
    features:[
      "实时显示每个进程的网络带宽",
      "帮你找出哪些进程在大量占用网络",
      "跑一下就有答案",
      "支持按网卡过滤",
      "适合排查网络带宽问题",
      "轻量无依赖"
    ],
    tags:["网络","监视","运维"], lang:"C", lic:"GPL-2.0", repo:"raboof/nethogs" },

  { name:"gping",     cat:"net",
    desc:"把 ping 的延迟实时画成图。",
    intro:"gping 给 ping 加上了图表。延迟不再是一行行数字，而是实时画成曲线，波动一眼看见。Go 编写，跨平台，单二进制。想查网络延迟稳不稳，跑一下它就知道了。",
    features:[
      "延迟实时画成曲线",
      "波动一眼能看出来",
      "Go 编写，跨平台，单二进制",
      "可以同时 ping 多个目标",
      "查网络延迟，跑一条命令就够",
      "图表直接画在终端里"
    ],
    tags:["网络","Ping","监控"], lang:"Go", lic:"MIT", repo:"orf/gping" },

  { name:"Audacity", cat:"media",
    desc:"开源多轨音频编辑器，录音、剪辑、混音都行。",
    intro:"Audacity 是老牌开源音频编辑器，录音、剪辑、降噪、混音、格式转换这条链路它都覆盖。免费跨平台，做播客、配音、音乐制作都有人用。开源音频编辑这块，它是最常见的那个。",
    features:[
      "录音、剪辑、降噪，一套做完",
      "多轨混音，带效果器链",
      "格式转换（MP3 / WAV / FLAC / OGG）",
      "频谱分析与波形编辑",
      "跨平台，开源免费",
      "可靠插件和脚本扩展"
    ],
    tags:["音频","剪辑","开源"], lang:"C++", lic:"GPL-2.0", repo:"audacity/audacity" },

  { name:"duf",       cat:"sys",
    desc:"人类可读的 df，磁盘占用排成彩色表格。",
    intro:"duf 是 df 的可读版。挂载的磁盘一条命令列成彩色表格，哪块盘快满了很醒目。Go 编写，跨平台，单二进制，装完直接跑。",
    features:[
      "挂载的磁盘全部列成表格",
      "彩色显示，好读",
      "Go 编写，跨平台，单二进制",
      "想知道磁盘还剩多少，跑一下就行",
      "支持过滤和排序",
      "轻量，没有依赖"
    ],
    tags:["磁盘","CLI","系统"], lang:"Go", lic:"Apache-2.0", repo:"muesli/duf" },

  { name:"masscan",   cat:"net",
    desc:"端口扫描器，扫一遍全网开放端口只要几分钟。",
    intro:"masscan 是速度优先的端口扫描器，几分钟能扫完全互联网的开放端口，明显快过 nmap。大规模网络侦察和安全评估常用，开源，安全行业用得多。不过这东西动静大，用的时候得谨慎。",
    features:[
      "快，全网扫一遍只要几分钟",
      "做大规模网络侦察",
      "也用于安全评估",
      "开源，安全行业采用很广",
      "动静大，需谨慎使用",
      "输出格式有好几种"
    ],
    tags:["安全","扫描","网络"], lang:"C", lic:"BSD-2-Clause", repo:"masscan/masscan" },

  { name:"frp",       cat:"net",
    desc:"反向代理工具，把内网服务暴露到公网。",
    intro:"frp 做反向代理，把内网的 HTTP、TCP、UDP 服务暴露到公网，外面就能访问内网的设备。TLS、认证、负载均衡都支持，运维和开发者远程访问内网，常拿它当默认方案。",
    features:[
      "内网服务暴露到公网，HTTP、TCP、UDP 都行",
      "支持 TLS、认证、负载均衡",
      "Go 编写，性能高，跨平台",
      "远程访问、内网穿透，用它的人多",
      "场景就是内网服务往外暴露",
      "配置不复杂"
    ],
    tags:["代理","隧道","运维"], lang:"Go", lic:"MIT", repo:"fatedier/frp" },

  { name:"sing-box",  cat:"net",
    desc:"通用代理平台，协议多，规则路由细。",
    intro:"sing-box 是通用代理平台，shadowsocks、vmess、trojan、wireguard 这些协议都支持，规则路由做得细，搭代理方案时灵活度足够。Go 编写，跨平台。再复杂的代理配置，它基本都能覆盖。",
    features:[
      "支持的代理协议非常多",
      "规则路由细，分流灵活",
      "Go 编写，跨平台，单二进制",
      "搭自己的代理方案很灵活",
      "高级代理配置也难不倒它",
      "一切靠配置驱动"
    ],
    tags:["代理","网络","平台"], lang:"Go", lic:"MIT", repo:"SagerNet/sing-box" },

  { name:"rclone",    cat:"host",
    desc:"云存储的瑞士军刀，一条命令管多种网盘。",
    intro:"rclone 管云存储像把瑞士军刀。S3、Google Drive、OneDrive、Dropbox 这些网盘，一条命令就能管理、同步、复制、挂载。Go 编写，跨平台，支持的存储后端数量很大。各家网盘之间搬数据，它都能干。",
    features:[
      "S3、Google Drive、OneDrive、Dropbox 等网盘统一管理",
      "复制、同步、挂载都支持",
      "存储后端支持得多",
      "Go 编写，跨平台，单二进制",
      "云存储管理和同步的主力",
      "命令行用起来顺手"
    ],
    tags:["云存储","同步","CLI"], lang:"Go", lic:"MIT", repo:"rclone/rclone" },

  { name:"borg",      cat:"host",
    desc:"备份工具，去重、加密，增量加版本化。",
    intro:"borg 做备份先去重、再压缩、再加密，支持增量备份和版本化，想回到哪个历史版本就回到哪个。Python 编写，跨平台，数据备份讲可靠，它把几个关键词都占齐了。",
    features:[
      "备份带去重和加密",
      "增量备份，自动版本化",
      "可回滚到任意历史版本",
      "Python 编写，跨平台",
      "认真做数据备份的人用它",
      "存储后端可选多种"
    ],
    tags:["备份","加密","版本化"], lang:"Python", lic:"BSD-2-Clause", repo:"borgbackup/borg" },

  { name:"duckdb",    cat:"ai",
    desc:"进程内分析数据库，直接对文件跑 SQL。",
    intro:"duckdb 是进程内的分析型数据库。CSV、Parquet 这类文件直接拿来跑 SQL，不用起服务器，本地做数据分析又快又省事。C++ 编写，速度快。本地分析这条路，它走得很轻。",
    features:[
      "CSV、Parquet 等文件直接跑 SQL",
      "不用服务器，进程内运行",
      "数据分析跑得快",
      "C++ 编写，速度快",
      "本地数据分析正合适",
      "多语言 API 都有"
    ],
    tags:["数据库","分析","SQL"], lang:"C++", lic:"MIT", repo:"duckdb/duckdb" },

  { name:"lancedb",   cat:"ai",
    desc:"嵌入式向量数据库，在你的进程里直接跑。",
    intro:"lancedb 是嵌入式向量数据库，不用服务器，直接在进程里跑，向量和结构化数据都存在本地文件里。Rust 编写，速度快，本地跑的 AI 应用拿它存向量很顺。",
    features:[
      "嵌入式，无服务器，进程里直接跑",
      "不需要单独起服务",
      "向量和结构化数据都能存、能查",
      "Rust 编写，速度快",
      "适合本地、嵌入式的 AI 应用",
      "支持多种语言"
    ],
    tags:["向量数据库","嵌入式","AI"], lang:"Rust", lic:"Apache-2.0", repo:"lancedb/lancedb" },

  { name:"sentence-transformers", cat:"ai",
    desc:"句子嵌入库，简单 API 把文本编码成向量。",
    intro:"sentence-transformers 做句子嵌入：调个 API，文本就编码成高质量的向量，预训练模型一大堆。语义搜索、RAG 管线里常见它，文本向量化多半绕不开。",
    features:[
      "把文本编码成高质量嵌入向量",
      "API 简单",
      "预训练模型数量很多",
      "语义搜索和 RAG 里常用",
      "文本向量化的常见选择",
      "长在 Python 生态里"
    ],
    tags:["嵌入","NLP","AI"], lang:"Python", lic:"Apache-2.0", repo:"UKPLab/sentence-transformers" },

  { name:"meilisearch", cat:"ai",
    desc:"即时搜索引擎，拼写容错，跑起来就快。",
    intro:"meilisearch 是个即时搜索引擎，拼写容错内置，API 干净，全文搜索接起来不费劲。Rust 编写，速度快，给应用加搜索功能是个省事的选择。",
    features:[
      "拼写容错，跑起来就快",
      "API 干净，全文搜索容易接",
      "Rust 编写，速度快",
      "给产品加搜索功能正合适",
      "轻量，部署不麻烦",
      "支持多种语言"
    ],
    tags:["搜索","引擎","全文"], lang:"Rust", lic:"MIT", repo:"meilisearch/meilisearch" },

  { name:"typesense", cat:"ai",
    desc:"快、容错拼写的搜索引擎，API 好上手。",
    intro:"typesense 跑得快，也容忍拼写错误，API 用起来顺。全文搜索常见的分面等都支持，给应用搭搜索功能时它是个轻量的选项。",
    features:[
      "快，且容忍拼写错误",
      "API 好用，全文搜索容易搭",
      "分面等特性都支持",
      "给应用加搜索功能",
      "轻量，部署不麻烦",
      "支持多种语言"
    ],
    tags:["搜索","引擎","全文"], lang:"C++", lic:"GPL-3.0", repo:"typesense/typesense" },

  { name:"openshot",  cat:"design",
    desc:"免费开源的视频编辑器，好上手，功能齐。",
    intro:"openshot 免费开源，剪辑、转场、特效、音频、字幕都有，上手不难。跨平台，快速做一条视频够用了，对新手和轻度用户比较友好。",
    features:[
      "上手不难，功能挺齐",
      "剪辑、转场、特效、音频、字幕",
      "跨平台",
      "新手和轻度用户够用",
      "赶一条快视频没问题",
      "免费开源"
    ],
    tags:["视频剪辑","NLE"], lang:"Python", lic:"GPL-3.0", repo:"OpenShot/openshot-qt" },

  { name:"shotcut",   cat:"design",
    desc:"跨平台开源视频编辑器，多轨，吃的格式广。",
    intro:"shotcut 跨平台、开源，支持多轨剪辑，能吃的格式很多，滤镜、转场、音频、字幕也都带上。个人创作者和小团队用它剪视频，功能是够的。",
    features:[
      "多轨剪辑",
      "支持的格式很多",
      "滤镜、转场、音频、字幕都有",
      "跨平台",
      "日常视频创作够用",
      "免费开源"
    ],
    tags:["视频剪辑","NLE"], lang:"C++", lic:"GPL-3.0", repo:"mltframework/shotcut" },

  { name:"ardour",    cat:"media",
    desc:"专业数字音频工作站（DAW），多轨录音混音。",
    intro:"ardour 是专业向的数字音频工作站（DAW），多轨录音、混音、编辑都在行，做音乐、做播客都用得上。跨平台，认真做音频的人找它的不少。",
    features:[
      "多轨录音、混音、编辑",
      "音乐制作、播客都能干",
      "跨平台",
      "认真做音频的人用它",
      "定位是专业级",
      "免费开源"
    ],
    tags:["音频","DAW","音乐"], lang:"C++", lic:"GPL-2.0", repo:"Ardour/ardour" },
  { name:"processing", cat:"design",
    desc:"创意编程平台，写代码做交互和视觉作品。",
    intro:"processing 是创意编程平台：代码不只是工具，也用来表达。做交互作品、动画、视觉艺术都靠它。艺术家、设计师、教学场合用得多，社区也活跃。",
    features:[
      "用代码做表达",
      "交互作品、动画、视觉艺术",
      "艺术家、设计师、教育者都在用",
      "创意编程的入门和主力",
      "跨平台",
      "社区活跃"
    ],
    tags:["创意编程","艺术","设计"], lang:"Java", lic:"LGPL-2.1", repo:"processing/processing4" },

  { name:"godot",     cat:"design",
    desc:"免费开源游戏引擎，2D、3D 都行。",
    intro:"godot 免费开源，2D、3D 开发都支持，编辑器、物理、动画、网络这些引擎件都全。跨平台，个人做游戏或小团队做项目，它都能上手。",
    features:[
      "2D 与 3D 开发",
      "编辑器、物理、动画、网络齐备",
      "个人开发者和团队都合适",
      "跨平台",
      "做游戏开发正合适",
      "免费开源"
    ],
    tags:["游戏引擎","2D","3D"], lang:"C++", lic:"MIT", repo:"godotengine/godot" },
  { name:"Iconoir", cat:"design",
    desc:"开源线性图标库，2500 多枚图标，风格统一。",
    intro:"Iconoir 是开源线性图标库，2500 多枚图标风格高度统一，UI 设计里常见的基本都覆盖。全量 SVG 格式，主题、颜色、描边粗细都能改，React、Vue、图标字体等集成方式也备着。设计师找图标，它的性价比很高。",
    features:[
      "2500 多枚线性图标，风格、粗细、圆角统一",
      "全是 SVG，颜色、描边、主题按需改",
      "React、Vue、Svelte 组件库可直接引入",
      "图标字体、sprite 等集成方式都有",
      "分类清楚，好搜，UI 场景覆盖广",
      "开源免费，可商用"
    ],
    tags:["图标","UI设计","SVG"], lang:"TypeScript", lic:"MIT", repo:"iconoir-icons/iconoir" ,official:"https://iconoir.com/"},
  { name:"Colormind", cat:"design",
    desc:"开源配色工具，机器学习生成和谐配色。",
    intro:"Colormind 用机器学习做配色生成：从大量真实设计里学色彩搭配规律，一键出和谐的配色方案，不用再凭感觉调色。此外还能从图片提取色板、检查对比度是否满足可访问性要求，属于视觉设计前期用的工具。",
    features:[
      "AI 生成配色，省掉手动调色",
      "可从图片、截图提取色板还原配色",
      "检查文字对比度，看是否符合 WCAG",
      "多种风格与情绪可选：清新、复古、科技感",
      "浏览器里直接用，开源免费",
      "有 API 和桌面端，能嵌进设计流程"
    ],
    tags:["配色","设计","可访问性"], lang:"TypeScript", lic:"Apache-2.0", repo:"" ,official:"http://colormind.io/"},
  { name:"Promptfoo", cat:"ai",
    desc:"LLM 提示词测试评估框架，上线前系统验证。",
    intro:"Promptfoo 是开源的 LLM 提示词测试与评估框架。测试用例和提示词用表格定义，批量跑模型与提示词的各种组合，自动打分、对比、做回归测试。调提示词这件事，从玄学变成可量化的工程。团队上线前验证提示词质量与模型选择，常用它。",
    features:[
      "表格定义测试用例，批量评估提示词与模型",
      "规则匹配、LLM-as-judge、人工标注都能评分",
      "改了提示词，一键跑回归看有没有劣化",
      "OpenAI、Anthropic、本地模型都支持",
      "对比报告可视化，配置差异一眼看出",
      "开源免费，可自托管，能接 CI"
    ],
    tags:["提示词","LLM评估","测试"], lang:"TypeScript", lic:"MIT", repo:"promptfoo/promptfoo" },
  { name:"Stirling-PDF", cat:"prod",
    desc:"自托管 PDF 工具箱，合并拆分转换加密都有。",
    intro:"Stirling-PDF 把几十种 PDF 操作塞进一个网页界面：合并、拆分、压缩、旋转、加水印、加密解密、PDF 与 Word、图片互转。完全本地运行，文件不上传。不想用在线 PDF 服务的话，这套自托管方案就是冲着隐私来的。",
    features:[
      "合并、拆分、旋转、压缩，常用操作都有",
      "PDF 与 Word、Excel、图片双向互转",
      "加密、解密、加水印、去水印",
      "自托管，文件不出你的机器",
      "Docker 部署，浏览器打开就能用",
      "开源免费，处理能力还在加"
    ],
    tags:["PDF","办公","自托管"], lang:"Java", lic:"MIT", repo:"Stirling-Tools/Stirling-PDF" },
  { name:"Freeplane", cat:"prod",
    desc:"开源思维导图工具，梳理复杂的知识结构。",
    intro:"Freeplane 是开源思维导图工具，思维导图、概念图、流程组织图都能画，用来梳理知识结构、头脑风暴、规划项目。功能多但不臃肿：节点样式、折叠、超链接、嵌入都有，零散想法能整理成可视化的知识图谱。",
    features:[
      "思维导图、概念图、流程组织图都支持",
      "节点能加颜色、图标、超链接、附件",
      "折叠展开一键切换，全局细节都好抓",
      "能导出多种格式，方便分享",
      "跨平台，开源免费",
      "插件可扩，社区模板多"
    ],
    tags:["思维导图","知识管理","头脑风暴"], lang:"Java", lic:"GPL-2.0", repo:"freeplane/freeplane" },
  { name:"Logseq", cat:"prod",
    desc:"开源双链大纲笔记，数据放本地，隐私优先。",
    intro:"Logseq 本地优先，核心是双链：笔记互相引用，反链自动连成知识网络。以大纲为单位组织，块级引用、反链、数据库属性查询都支持，数据就是存在本地的纯文本。想找 Roam 或 Notion 的开源替代，它是常见答案。",
    features:[
      "块级互相引用，反链和知识图谱自动生成",
      "大纲式组织，层级清楚，能折叠",
      "数据是纯文本，存在自己机器上",
      "属性查询让笔记能结构化检索",
      "图片、表格、代码块、页面都能嵌入",
      "开源免费，插件多"
    ],
    tags:["笔记","双链","本地优先"], lang:"Clojure", lic:"AGPL-3.0", repo:"logseq/logseq" },
  { name:"FreshRSS", cat:"host",
    desc:"自托管 RSS 阅读器，信息流自己说了算。",
    intro:"FreshRSS 是自托管 RSS 阅读器，把散在各处的博客、新闻、订阅源收进一个干净的阅读界面。数据不经过第三方，也不追踪阅读行为，多用户、多设备同步。不想被算法推荐喂信息，订什么看什么，它就干这个。",
    features:[
      "RSS、Atom 订阅源聚合到一个入口",
      "自托管，数据和订阅都在自己手里",
      "多用户多设备同步，手机网页一套订阅",
      "分类、标签、全文搜索，订阅多了也好管",
      "支持全文抓取，也能只看摘要",
      "PHP 实现，轻量，部署简单"
    ],
    tags:["RSS","信息聚合","自托管"], lang:"PHP", lic:"AGPL-3.0", repo:"FreshRSS/FreshRSS" },
  { name:"Portainer", cat:"host",
    desc:"Docker 与 Kubernetes 的图形化管理面板。",
    intro:"Portainer 给 Docker、Swarm、Kubernetes 套了个图形界面。镜像管理、容器启停、日志查看、网络和卷管理、用户权限，这些本来要敲命令的事，现在点鼠标就行。自建服务器上管容器，拿它当可视化入口，上手门槛低不少。",
    features:[
      "容器、镜像、网络、数据卷都图形化管",
      "Swarm 与 Kubernetes 集群也支持",
      "日志、启停、资源监控，界面里看",
      "有用户与权限控制，团队能一起用",
      "模板市场，常见自托管应用一键部署",
      "社区版开源免费，本身也用 Docker 部署"
    ],
    tags:["Docker","容器管理","自托管"], lang:"Go", lic:"Apache-2.0", repo:"portainer/portainer" },
  { name:"Hugo", cat:"host",
    desc:"静态站点生成器，一个二进制构出整个网站。",
    intro:"Hugo 用 Go 写成，一个静态二进制，没有依赖，成千上万页的站点几秒构完。内容用 Markdown，模板是 Go template，产物是纯静态文件，扔到哪个静态托管上都快。个人博客、文档站、技术站拿它建，构建基本不用等。",
    features:[
      "单二进制零依赖，大站也是秒级构建",
      "内容是 Markdown 文件，好做版本管理",
      "主题和插件多，模板拿来就能用",
      "产物纯静态，放到哪个托管上都快",
      "博客、文档、多语言、搜索都有",
      "跨平台，开源免费"
    ],
    tags:["博客","静态站","建站"], lang:"Go", lic:"Apache-2.0", repo:"gohugoio/hugo" },
  { name:"Audacious", cat:"media",
    desc:"轻量跨平台音乐播放器，界面干净，插件扩展。",
    intro:"Audacious 轻量、跨平台，资源占用低，就专心干播放这一件事。音频格式靠插件支持，播放列表、均衡器、标签编辑都备着。就想找个不臃肿的纯听歌工具的话，它挺务实。",
    features:[
      "轻量低占用，界面干净，专心听歌",
      "格式靠插件扩，各种音频格式能吃",
      "播放列表、随机播放、均衡器、标签编辑",
      "支持 MPRIS，系统级媒体控制",
      "跨平台，开源免费",
      "皮肤可换，外观能自定义"
    ],
    tags:["音乐","播放器","轻量"], lang:"C", lic:"GPL-2.0", repo:"audacious-media-player/audacious" },

  { name:"delta",   cat:"dev",
    desc:"给 git diff 加语法高亮和行内对比。",
    intro:"delta 美化 git diff：语法高亮、行内对比、侧边栏模式，代码变更看起来清楚多了。它和 git 深度集成，配好后当 pager 自动接管。Rust 编写，启动很快，做代码评审的人不少把它装上。",
    features:[
      "diff 输出带语法高亮",
      "行内对比与侧边栏模式",
      "作为 git pager 自动接管",
      "Rust 编写，启动很快",
      "主题多，可以自定义",
      "开源（MIT），跨平台"
    ],
    tags:["git","diff","CLI"], lang:"Rust", lic:"MIT", repo:"dandavison/delta" },

  { name:"eza",     cat:"dev",
    desc:"ls 的现代替代，树形视图加语法高亮。",
    intro:"eza 用 Rust 写，替代 ls。树形视图、git 状态、文件类型图标、语法高亮，-l、--tree、--icons 几个参数一开，目录浏览不再是黑白一片。终端现代化的代表工具之一。",
    features:[
      "--tree 画树，目录结构直观",
      "显示 git 状态和文件图标",
      "文件预览带语法高亮",
      "长格式、排序、过滤都灵活",
      "Rust 编写，跑得快",
      "开源（MIT），跨平台"
    ],
    tags:["文件管理","TUI","CLI"], lang:"Rust", lic:"MIT", repo:"eza-community/eza" },

  { name:"broot",   cat:"dev",
    desc:"树形目录浏览器，全程键盘操作。",
    intro:"broot 是交互式树形目录浏览器：文件系统画成树，键盘导航，搜索、过滤、标记、打开、复制、移动都在界面里做，比 ls 加 cd 高效得多。Rust 编写，能接进 shell（如 Zsh 补全）。终端里逛目录，树比列表直观。",
    features:[
      "树形浏览，键盘导航",
      "搜索、过滤、标记文件",
      "打开、复制、移动直接操作",
      "可接进 Zsh/Bash 补全",
      "Rust 编写，跑得快",
      "开源（MIT），跨平台"
    ],
    tags:["文件管理","TUI","导航"], lang:"Rust", lic:"MIT", repo:"Canop/broot" },

  { name:"scc",     cat:"dev",
    desc:"代码行数统计，比 tokei 还快。",
    intro:"scc 全名 Sloc C Code，用 C 写的代码行数统计工具，比 tokei 快，代码、注释、空行的占比都能算。支持数百种语言，结果能出表格或 JSON，大项目盘代码规模时好用。",
    features:[
      "统计很快，比 tokei 还快",
      "代码、注释、空行占比都能出",
      "支持数百种语言",
      "输出表格或 JSON",
      "适合大项目的代码规模分析",
      "开源（GPL-3.0），跨平台"
    ],
    tags:["代码统计","CLI","分析"], lang:"C", lic:"GPL-3.0", repo:"boyter/scc" },

  { name:"gitui",   cat:"dev",
    desc:"终端里的 git 客户端，Rust 写的 TUI。",
    intro:"gitui 是 Rust 写的 TUI git 客户端，分支、提交、暂存、合并都在终端界面里操作，比纯命令行直观，又比桌面客户端轻。键盘操作流畅，常年待在终端的人管理 git 就顺手了。",
    features:[
      "git 操作搬进 TUI",
      "分支、提交、暂存、合并都可视化",
      "键盘驱动，操作流畅",
      "Rust 编写，跑得快",
      "轻量，人不用离开终端",
      "开源（MIT），跨平台"
    ],
    tags:["git","TUI","CLI"], lang:"Rust", lic:"MIT", repo:"extrawurst/gitui" },

  { name:"tig",     cat:"dev",
    desc:"在终端里浏览 git 仓库历史。",
    intro:"tig 用 C 写，极轻量，在终端里浏览 git：提交历史、分支、差异都可视化，还能交互式做 cherry-pick、revert。命令行 git 用熟了想看得更清楚，tig 补上这一环。",
    features:[
      "终端里可视化 git 历史",
      "浏览分支、提交、差异",
      "cherry-pick、revert 可交互操作",
      "C 编写，极轻量",
      "和 git 命令配合着用",
      "开源（GPL-2.0），跨平台"
    ],
    tags:["git","TUI","CLI"], lang:"C", lic:"GPL-2.0", repo:"" ,official:"https://jonas.github.io/tig/"},

  { name:"uv",      cat:"dev",
    desc:"Python 包与环境管理器，Rust 编写。",
    intro:"uv 用 Rust 编写，把 pip、pip-tools、virtualenv、pyenv 的活接过来干，快得多：比 pip 快 10-100 倍。依赖解析、环境管理、Python 版本管理一套全包。Python 工具链正被它重塑，换过来的人越来越多。",
    features:[
      "比 pip 快 10-100 倍",
      "pip、virtualenv、pyenv 的活一套干",
      "能管理 Python 版本",
      "依赖解析与锁定",
      "Rust 编写，跑得快",
      "开源（MIT），跨平台"
    ],
    tags:["包管理","Python","Rust"], lang:"Rust", lic:"MIT", repo:"astral-sh/uv" },

  { name:"pyenv",   cat:"dev",
    desc:"一台机器装多个 Python 版本，随便切。",
    intro:"pyenv 管 Python 版本：同一台机器上装好几个版本，随时切换。还能按项目、按目录定版本，不同项目要不同 Python 版本这种麻烦就是冲它来的。Python 开发的老牌标配，一般和 pip、virtualenv 搭着用。",
    features:[
      "多个 Python 版本共存、互切",
      "按项目或目录定版本",
      "各版本自动编译安装",
      "与 pip、virtualenv 搭配",
      "全局、用户、项目三级版本控制",
      "开源（MIT），跨平台"
    ],
    tags:["版本管理","Python","CLI"], lang:"Shell", lic:"MIT", repo:"pyenv/pyenv" },

  { name:"nvm",     cat:"dev",
    desc:"Node.js 多版本共存，一条命令切换。",
    intro:"nvm 全称 Node Version Manager，管 Node.js 版本：一台机器装多版本，随时切。项目里放个 .nvmrc，版本就跟着项目走。前端项目里它出镜率很高，基本算标配。",
    features:[
      "多个 Node.js 版本共存切换",
      ".nvmrc 把版本写进项目",
      "各版本自动安装",
      "和 npm 配合用",
      "全局、项目两级版本控制",
      "开源（MIT），跨平台"
    ],
    tags:["版本管理","Node.js","CLI"], lang:"Shell", lic:"MIT", repo:"nvm-sh/nvm" },

  { name:"asdf",    cat:"dev",
    desc:"一个工具管所有运行时的版本。",
    intro:"asdf 是通用运行时版本管理器：Python、Node、Ruby、JVM 等几十种运行时，用同一个工具管版本。按项目、按目录设置，.tool-versions 往项目里一放就完事。过去每个语言装一个版本管理器的混乱，一个 asdf 收掉了。",
    features:[
      "多种运行时的版本统一管",
      "按项目或目录设版本",
      "靠插件支持几十种语言",
      ".tool-versions 声明项目版本",
      "一个工具替掉一堆工具",
      "开源（MIT），跨平台"
    ],
    tags:["版本管理","多语言","CLI"], lang:"Ruby", lic:"MIT", repo:"asdf-vm/asdf" },

  { name:"direnv",  cat:"dev",
    desc:"进目录自动加载环境变量。",
    intro:"direnv 按目录管环境变量：每个目录放一个 .envrc，cd 进去自动加载，离开自动卸载。不同项目要不同环境变量的问题就这么解了，shell 环境跟着目录走。后端和基础设施开发者常用它。",
    features:[
      "cd 进目录，环境变量自动加载",
      "变量写在目录的 .envrc 里",
      "进入 / 离开自动加载卸载",
      "变量直接导出进 shell",
      "能和 nix、docker 等集成",
      "开源（Apache-2.0），跨平台"
    ],
    tags:["环境变量","CLI","Unix"], lang:"Go", lic:"Apache-2.0", repo:"direnv/direnv" },

  { name:"pre-commit", cat:"dev",
    desc:"git 钩子框架，提交前跑一遍检查。",
    intro:"pre-commit 是 git 钩子框架：提交前自动跑 lint、格式化、类型检查、秘密扫描这组检查。钩子的安装更新它来管，现成检查有数百个。代码质量在提交那一刻就被拦住，团队项目里基本是标配。",
    features:[
      "提交前自动跑检查",
      "钩子的安装与更新归它管",
      "现成检查有好几百个",
      "lint、格式化、类型检查都涵盖",
      "团队代码质量有个统一关口",
      "开源（MIT），跨平台"
    ],
    tags:["git","钩子","质量"], lang:"Python", lic:"MIT", repo:"pre-commit/pre-commit" },

  { name:"shellcheck", cat:"dev",
    desc:"静态分析 Shell 脚本，揪出潜在 bug。",
    intro:"shellcheck 静态分析 Shell 脚本，潜在 bug、坏味道、可移植性问题都能揪出来，Bash、Zsh、Ksh、POSIX sh 都认，还给具体修法。接到编辑器里能实时提示，写 Shell 时顺手挂上。",
    features:[
      "对 Shell 脚本做静态分析",
      "bug、坏味道、可移植性问题都揪",
      "Bash、Zsh、Ksh、POSIX sh 支持",
      "修复建议具体可操作",
      "集成编辑器，实时提示",
      "开源（GPL-3.0），跨平台"
    ],
    tags:["Shell","Lint","CLI"], lang:"Haskell", lic:"GPL-3.0", repo:"koalaman/shellcheck" },

  { name:"act",     cat:"dev",
    desc:"在本地跑 GitHub Actions 工作流。",
    intro:"act 把 GitHub Actions 工作流拉到本地容器里执行，不用推到 GitHub 就能测 CI。改一点跑一点，调工作流快很多。macOS、Linux、Windows 都支持。",
    features:[
      "GitHub Actions 在本地跑起来",
      "不推送代码也能测 CI",
      "执行跑在容器里，隔离",
      "调工作流，迭代快",
      "三大平台都支持",
      "开源（MIT），跨平台"
    ],
    tags:["CI/CD","GitHub Actions","本地"], lang:"Go", lic:"MIT", repo:"nektos/act" },

  { name:"strace",  cat:"dev",
    desc:"跟踪 Linux 系统调用，疑难问题看得清。",
    intro:"strace 跟踪 Linux 进程的系统调用和信号：调了什么、传了什么参数、返回什么，实时列出来。权限、IO、网络、死锁这类难查的问题，拿它能看到程序和内核交互的全部细节，Linux 排障的老手都熟。",
    features:[
      "系统调用与信号全程跟踪",
      "参数和返回值都显示",
      "权限、IO、网络问题的好帮手",
      "可按名字过滤调用",
      "也能辅助性能分析",
      "开源（ISC），Linux 上的标准工具"
    ],
    tags:["调试","系统调用","Linux"], lang:"C", lic:"ISC", repo:"strace/strace" },

  { name:"valgrind", cat:"dev",
    desc:"查内存错误，顺带做性能分析。",
    intro:"valgrind 查 C/C++ 的内存问题：内存泄漏、越界访问、未初始化读取都能揪出来。Memcheck 是查内存错误的标准工具，Callgrind 负责性能分析，报告精确到行号。内存疑难，真要查的话多半用它。",
    features:[
      "内存泄漏、越界、未初始化都能查",
      "查内存错误用 Memcheck，标准做法",
      "性能分析归 Callgrind",
      "C/C++ 调试绕不开它",
      "报告精确到行号",
      "开源（GPL-2.0），跨平台"
    ],
    tags:["调试","内存","分析"], lang:"C++", lic:"GPL-2.0", repo:"" ,official:"https://valgrind.org/"},

  { name:"GDB",     cat:"dev",
    desc:"GNU 调试器，C/C++ 调试的标配。",
    intro:"GDB 是 GNU 项目的调试器，C/C++ 调试的标配：断点、单步、查变量、线程调试、远程调试都有。程序为什么崩、逻辑错在哪，用它贴着运行时看一遍就清楚。C/C++ 开发者对它都不陌生。",
    features:[
      "断点、单步、变量检查",
      "多线程与协程调试",
      "远程调试，配 GDB Server",
      "能用 Python 写脚本",
      "C/C++ 调试的默认答案",
      "开源（GPL-3.0），跨平台"
    ],
    tags:["调试","C/C++","CLI"], lang:"C++", lic:"GPL-3.0", repo:"gdb" },

  { name:"perf",    cat:"dev",
    desc:"Linux 自带的性能分析器，靠硬件计数器采样。",
    intro:"perf 是 Linux 内核自带的性能分析器，借硬件性能计数器做采样分析，热点函数、缓存未命中、分支预测失败这些底层性能问题都能定位。内核和高性能应用调优绕不开它，数据直接来自内核与 CPU 硬件。",
    features:[
      "用硬件性能计数器做采样",
      "热点函数和瓶颈被揪出来",
      "缓存、分支、内存都能分析",
      "内核态、用户态全覆盖",
      "能生成火焰图",
      "开源（GPL-2.0），内核自带"
    ],
    tags:["性能","分析","Linux"], lang:"C", lic:"GPL-2.0", repo:"torvalds/linux" },

  { name:"fff",     cat:"dev",
    desc:"模糊找文件，比 find 快得多。",
    intro:"fff 全名 fast file finder，先把文件系统做成索引，再模糊匹配，大文件树里定位文件几乎是瞬间，C 编写，毫秒响应，比传统 find 快出一截。终端里找文件，它常和 fzf 配合用。",
    features:[
      "模糊匹配，找文件很快",
      "文件系统先建索引，毫秒响应",
      "比传统 find 快得多",
      "配合 fzf 交互式选文件",
      "C 编写，跑得快",
      "开源（GPL-3.0），跨平台"
    ],
    tags:["文件查找","CLI","模糊匹配"], lang:"C", lic:"GPL-3.0", repo:"dylanaraps/fff" },

  { name:"Chroma",        cat:"ai",
    desc:"开源向量数据库，AI 应用里常见。",
    intro:"Chroma 是给 AI 应用设计的开源向量数据库，嵌入存储、相似性检索、元数据过滤都有。API 简单，做 RAG 和语义搜索接上就行，本地、云端都能部署。AI 开发者搭检索功能时用它的人多，功能够用也好上手。",
    features:[
      "向量存储加相似性检索",
      "按元数据过滤",
      "API 简单，上手快",
      "本地和云端都能部署",
      "多种嵌入模型可选",
      "开源（Apache-2.0），跨平台"
    ],
    tags:["向量库","RAG","AI"], lang:"Python", lic:"Apache-2.0", repo:"chroma-core/chroma" },

  { name:"Weaviate",      cat:"ai",
    desc:"云原生向量数据库，支持混合搜索。",
    intro:"Weaviate 是云原生向量数据库，向量搜索、关键词搜索、混合搜索都行，嵌入模块内置，GraphQL 和 REST API 都提供，可自托管也可用云端。企业级向量搜索选它的人不少，规模上去也撑得住。",
    features:[
      "向量、关键词、混合搜索三合一",
      "嵌入模块内置",
      "GraphQL 与 REST API",
      "云原生，也能自托管",
      "高可用，规模可扩",
      "开源（BSD-3），跨平台"
    ],
    tags:["向量库","搜索","AI"], lang:"Go", lic:"BSD-3-Clause", repo:"weaviate/weaviate" },

  { name:"Milvus",       cat:"ai",
    desc:"分布式向量数据库，检索十亿级向量。",
    intro:"Milvus 是开源的分布式向量数据库，冲着大规模检索来的，十亿级向量能处理。索引高效，过滤和混合搜索都有，大规模 AI 检索常拿它当基础设施。Zilliz 主导开发，在向量数据库里算头部开源项目。",
    features:[
      "分布式，亿级向量检索",
      "向量索引效率高",
      "过滤与混合搜索都支持",
      "云原生，可伸缩",
      "多租户，高可用",
      "开源（Apache-2.0），跨平台"
    ],
    tags:["向量库","分布式","AI"], lang:"Go", lic:"Apache-2.0", repo:"milvus-io/milvus" },

  { name:"FAISS",        cat:"ai",
    desc:"Meta 开源的相似性搜索库，向量检索快。",
    intro:"FAISS 是 Meta（Facebook）开源的相似性搜索与聚类库，IVF、HNSW 这类向量检索算法都实现了，还能 GPU 加速。不少向量数据库的底层就是它，大规模向量检索的基石库，用的人非常多。",
    features:[
      "相似性搜索跑得快",
      "索引多样，IVF、HNSW 都有",
      "支持 GPU 加速",
      "大规模向量检索",
      "带聚类与压缩",
      "开源（MIT），跨平台"
    ],
    tags:["向量检索","搜索","库"], lang:"C++", lic:"MIT", repo:"facebookresearch/faiss" },

  { name:"PEFT",         cat:"ai",
    desc:"参数高效微调库，LoRA 等方法都在。",
    intro:"PEFT 全称 Parameter-Efficient Fine-Tuning，Hugging Face 的参数高效微调库，LoRA、QLoRA、Adapter 这些方法都提供。显存花得少，不用全量训练也能调大模型。微调大模型时，它和 Transformers 常搭着用。",
    features:[
      "LoRA、QLoRA、Adapter 都支持",
      "少量显存微调大模型",
      "和 Transformers 配合紧密",
      "多种模型都能套",
      "训练和推理两侧都有",
      "开源（Apache-2.0），跨平台"
    ],
    tags:["微调","LLM","库"], lang:"Python", lic:"Apache-2.0", repo:"huggingface/peft" },

  { name:"Axolotl",      cat:"ai",
    desc:"LLM 微调框架，YAML 配置驱动训练。",
    intro:"Axolotl 做 LLM 微调，一份 YAML 配置驱动整个训练，LoRA、QLoRA、全量微调都支持。配置写起来简洁，实验结果可复现。社区里热度不低，研究和生产微调都有人用。",
    features:[
      "训练全靠 YAML 配置驱动",
      "LoRA、QLoRA、全量微调都行",
      "支持的模型多",
      "训练可复现",
      "支持分布式训练",
      "开源（MIT），跨平台"
    ],
    tags:["微调","LLM","训练"], lang:"Python", lic:"MIT", repo:"axolotl-ai-cloud/axolotl" },

  { name:"Unsloth",     cat:"ai",
    desc:"LLM 微调提速 2 倍，还省显存。",
    intro:"Unsloth 用优化内核加速 LLM 微调：LoRA、QLoRA 提速 2 倍，显存省 60%。Llama、Mistral 这些主流开源模型都支持，微调跑得更快也更省。社区里流行，算是微调加速的常用工具。",
    features:[
      "微调快 2 倍",
      "显存省 60%",
      "主流开源模型都支持",
      "LoRA、QLoRA 都走",
      "微调脚本基本一键跑",
      "开源（Apache-2.0），跨平台"
    ],
    tags:["微调","加速","LLM"], lang:"Python", lic:"Apache-2.0", repo:"unslothai/unsloth" },

  { name:"Cline",       cat:"ai",
    desc:"VS Code 里的开源 AI 编码代理。",
    intro:"Cline 是开源 AI 编码代理，以 VS Code 插件形式跑：AI 自己读写文件、执行命令、调试，像个结对程序员一样把活干完。支持的 LLM 不止一种，开源编码代理里它算代表作，社区很活跃。",
    features:[
      "AI 代理自己写代码",
      "读写文件、执行命令",
      "以 VS Code 插件形式运行",
      "多种 LLM 可选",
      "开源，社区活跃",
      "开源（Apache-2.0），跨平台"
    ],
    tags:["编码","Agent","开源"], lang:"TypeScript", lic:"Apache-2.0", repo:"cline/cline" },

  { name:"Aider",       cat:"ai",
    desc:"终端里的 AI 编码助手，Git 原生。",
    intro:"Aider 住在终端里：说自然语言，AI 就改代码，改动自动提交进 Git。代码库索引、测试、多文件编辑都有，LLM 随你选。习惯终端的开发者拿它当 AI 编码搭档很顺。",
    features:[
      "在终端里指挥 AI 写代码",
      "Git 原生，改动自动提交",
      "多文件一起编辑",
      "给代码库建索引",
      "多种 LLM 都支持",
      "开源（Apache-2.0），跨平台"
    ],
    tags:["编码","终端","Git"], lang:"Python", lic:"Apache-2.0", repo:"Aider-AI/aider" },

  { name:"Open Interpreter", cat:"ai",
    desc:"让大模型在你电脑上跑代码。",
    intro:"Open Interpreter 让大语言模型直接在你电脑上运行代码，Python、Shell、浏览器都能指挥，全程用自然语言下指令。“AI 操作电脑”这个方向，它是最早的一批。不懂编程也能靠它让 AI 完成本地任务。",
    features:[
      "AI 在本地跑代码",
      "Python、Shell、浏览器都行",
      "用自然语言下指令",
      "多种 LLM 可接",
      "开源，上手不难",
      "开源（MIT），跨平台"
    ],
    tags:["执行","代码","开源"], lang:"Python", lic:"MIT", repo:"OpenInterpreter/open-interpreter" },

  { name:"CrewAI",      cat:"ai",
    desc:"多 Agent 协作框架，像组一个 AI 团队。",
    intro:"CrewAI 是多 Agent 协作框架：组一个 Crew，每个 Agent 有角色、目标和工具，凑在一起干复杂活。流程编排和记忆都提供，API 简洁，搭多 Agent 应用不用绕太多弯。",
    features:[
      "多个 Agent 协作干活",
      "给 Agent 定角色和目标",
      "流程编排内置",
      "带记忆，可接工具",
      "API 简洁",
      "开源（MIT），跨平台"
    ],
    tags:["Agent","多智能体","框架"], lang:"Python", lic:"MIT", repo:"crewAIInc/crewAI" },

  { name:"AutoGen",     cat:"ai",
    desc:"微软出的多 Agent 对话框架。",
    intro:"AutoGen 是微软的多 Agent 对话框架：让几个 AI Agent 靠对话把任务协作解决掉。Agent 编排、人机协作、代码执行都提供，研究和应用两侧拿它搭协作型 AI 的不少。",
    features:[
      "多 Agent 靠对话协作",
      "支持人机协作",
      "能执行代码",
      "Agent 编排能力",
      "微软出品，偏研究级",
      "开源（MIT），跨平台"
    ],
    tags:["Agent","多智能体","微软"], lang:"Python", lic:"MIT", repo:"microsoft/autogen" },

  { name:"LangGraph",   cat:"ai",
    desc:"LangChain 的状态图 Agent 框架。",
    intro:"LangGraph 是 LangChain 推出的 Agent 框架，用状态图编排：节点是步骤，边是流转，循环、条件、持久化都支持。复杂 Agent 工作流因此可建模、可调试。要做有状态的 Agent 应用，它是主力选项之一。",
    features:[
      "Agent 用状态图来编排",
      "循环、条件、分支都支持",
      "持久化与检查点内置",
      "可插入人机协作节点",
      "与 LangChain 打通",
      "开源（MIT），跨平台"
    ],
    tags:["Agent","状态图","框架"], lang:"Python", lic:"MIT", repo:"langchain-ai/langgraph" },

  { name:"faster-whisper", cat:"ai",
    desc:"CTranslate2 加速的 Whisper，快 4 倍。",
    intro:"faster-whisper 用 CTranslate2 引擎重写 Whisper，比原版快 4 倍，还省内存。识别质量保持，CPU、GPU 都能跑。生产环境做语音转文字要快和省，多半考虑它。",
    features:[
      "CTranslate2 加速，快 4 倍",
      "比原版省内存",
      "识别质量不掉",
      "CPU、GPU 均可",
      "多语言转写",
      "开源（MIT），跨平台"
    ],
    tags:["语音转写","加速","Whisper"], lang:"Python", lic:"MIT", repo:"SYSTRAN/faster-whisper" },

  { name:"LibreOffice Draw", cat:"design",
    desc:"LibreOffice 套件里的画图排版组件。",
    intro:"LibreOffice Draw 是 LibreOffice 套件的画图与排版组件：流程图、图表、传单、表单都能做，开源免费，常拿来替 Microsoft Visio。不装 Windows 也想做图表和简单排版，它顺手就把活干了。",
    features:[
      "开源的画图与排版",
      "流程图、图表、传单、表单",
      "Visio 的开源替代",
      "与 LibreOffice 套件联动",
      "跨平台，免费",
      "开源（GPL-3.0），跨平台"
    ],
    tags:["画图","排版","开源"], lang:"C++", lic:"GPL-3.0", repo:"LibreOffice/core" },

  { name:"drawpile",    cat:"design",
    desc:"开源协作绘画，多人同画一块画布。",
    intro:"drawpile 让多人同时在同一块画布上画画，为远程协作而做。图层、笔刷、实时同步都齐，团队创作和教学里常见，开源协作绘画里它算代表作。",
    features:[
      "多人同时在同一画布作画",
      "图层和多种笔刷",
      "笔迹实时同步",
      "完全免费开源",
      "主流系统都能装",
      "MIT 许可，跨平台，主打协作绘画"
    ],
    tags:["绘画","协作","开源"], lang:"Python", lic:"MIT", repo:"drawpile/Drawpile" },

  { name:"MyPaint",     cat:"design",
    desc:"开源绘画工具，笔刷手感自然。",
    intro:"MyPaint 一门心思放在笔刷的自然手感上，笔刷量大，画插画、做概念艺术够用。免费开源，功能也完整，不想为绘画软件掏钱的人常拿它顶上。",
    features:[
      "笔刷手感自然",
      "画插画、概念稿都顺手",
      "带图层管理",
      "免费开源",
      "跨平台可用",
      "GPL-3.0 许可，跨平台的数字绘画工具"
    ],
    tags:["绘画","笔刷","开源"], lang:"Python", lic:"GPL-3.0", repo:"mypaint/mypaint" },

  { name:"Pinta",       cat:"design",
    desc:"轻量位图编辑器，GIMP 的简化版。",
    intro:"Pinta 是 GIMP 的轻量替代：界面干净，功能刻意收敛，修图不用先啃一遍菜单。基础编辑、滤镜、图层都在，临时改个图比打开 GIMP 快得多。",
    features:[
      "位图编辑，装起来不重",
      "基础编辑、滤镜、图层齐全",
      "界面直白，上手没门槛",
      "免费开源",
      "跨平台",
      "MIT 许可，适合轻度修图"
    ],
    tags:["修图","轻量","开源"], lang:"C#", lic:"MIT", repo:"PintaProject/Pinta" },

  { name:"Spline",      cat:"design",
    desc:"浏览器里的 3D 设计工具，不写代码搭场景。",
    intro:"Spline 跑在浏览器里，搭 3D 场景、做交互和动画都不写代码。设计师拖出效果，开发者导出直接嵌网页，还能实时协作。给网页做 3D 内容又不想碰专业建模软件的话，它是条近路。",
    features:[
      "浏览器里直接做 3D",
      "不写代码也能搭场景",
      "交互、动画都能做",
      "导出后直接嵌网页",
      "支持实时协作",
      "商业软件，有免费层，浏览器跨平台"
    ],
    tags:["3D","无代码","设计"], lang:"TypeScript", lic:"Proprietary", repo:"spline-dev/spline", official:"https://spline.design/" },

  { name:"Lucidchart",  cat:"design",
    desc:"企业常用的在线流程图、架构图工具。",
    intro:"Lucidchart 是流程图领域的老牌商业方案：企业级的流程图、架构图，配上协作、模板和导出，还能跟 Jira 这类工具打通。团队要画复杂的技术或业务流程，多半绕不开它。",
    features:[
      "流程图、架构图都是企业级",
      "多人实时协作",
      "模板库量大",
      "可导出多种格式",
      "能和 Jira 等工具集成",
      "商业软件，浏览器跨平台画图"
    ],
    tags:["流程图","架构","企业"], lang:"JavaScript", lic:"Proprietary", repo:"lucid/lucidchart", official:"https://www.lucidchart.com/" },

  { name:"Creately",    cat:"design",
    desc:"在线白板加流程图，团队实时共创。",
    intro:"Creately 是在线协作白板加流程图：头脑风暴、流程图、思维导图都能画，团队成员实时一起动笔，模板管够。想要轻量的团队共创画图工具，可以拿它试试。",
    features:[
      "在线白板协作",
      "流程图、思维导图都能画",
      "团队实时共创",
      "模板管够",
      "多人实时在线",
      "商业软件，有免费层，跨平台协作画图"
    ],
    tags:["白板","流程图","协作"], lang:"JavaScript", lic:"Proprietary", repo:"creately/creately", official:"https://creately.com/" },

  { name:"SmartDraw",   cat:"design",
    desc:"模板驱动的在线图表、流程图工具。",
    intro:"SmartDraw 靠模板吃饭：流程图、图表、组织图、地图，套模板就能出图。非设计师也能做出像样的图表，办公场景里用着省心。",
    features:[
      "在线做图表和流程图",
      "模板数量多",
      "还能画组织图、地图",
      "导出格式齐全",
      "非设计师也能快速出图",
      "商业软件，跨平台，靠模板出图"
    ],
    tags:["图表","流程图","模板"], lang:"JavaScript", lic:"Proprietary", repo:"smartdraw/smartdraw", official:"https://www.smartdraw.com/" },

  { name:"Prezi",       cat:"design",
    desc:"缩放画布做非线性演示，不按页翻。",
    intro:"Prezi 把演示放在一张可缩放的大画布上，讲到哪就 zoom 到哪，不用一页页翻。动画和交互让演示活起来，路演和展示场合用它容易跳出来。",
    features:[
      "靠缩放跳转，不按页翻",
      "带动画和交互",
      "整块动态画布",
      "可实时协作",
      "适合路演展示",
      "商业软件，有免费层，跨平台演示"
    ],
    tags:["演示","动画","非线性"], lang:"JavaScript", lic:"Proprietary", repo:"prezi/prezi", official:"https://prezi.com/" },

  { name:"Shortcut",    cat:"prod",
    desc:"面向工程团队的现代 issue 跟踪工具。",
    intro:"Shortcut 是给工程团队做的 issue 跟踪：issue、迭代、路线图、集成都有。定位卡在 Jira 和 Linear 中间，比前者轻、比后者全，想换工具又不想换太狠的话值得看。",
    features:[
      "现代 issue 跟踪工具",
      "排迭代、画路线图",
      "按工程团队习惯设计",
      "集成对象很多",
      "支持团队协作",
      "商业软件，跨平台的 issue 跟踪"
    ],
    tags:["issue","工程","跟踪"], lang:"TypeScript", lic:"Proprietary", repo:"shortcut/shortcut", official:"https://shortcut.com/" },

  { name:"Height",      cat:"prod",
    desc:"工程项目管理，issue 和文档一体。",
    intro:"Height 面向工程团队，把 issue 跟踪、文档、路线图收进一个工具，再连上代码仓库。工程流程从头到尾顺下来，是这几年冒出来的新选择。",
    features:[
      "面向工程团队",
      "issue 和文档写在一起",
      "能连代码仓库",
      "带路线图",
      "支持团队协作",
      "商业软件，跨平台的工程管理工具"
    ],
    tags:["工程","issue","文档"], lang:"TypeScript", lic:"Proprietary", repo:"height/height", official:"https://height.app/" },

  { name:"Wrike",       cat:"prod",
    desc:"面向中大型团队的项目管理与自动化。",
    intro:"Wrike 偏企业级：任务、项目、自动化、自定义工作流都支持，中大型团队用起来更顺手。自动化是它的招牌，企业选项目管理工具时它常在名单上。",
    features:[
      "偏企业级的项目管理",
      "自定义自动化工作流",
      "配置可深度自定义",
      "任务视图有多种",
      "多人协作",
      "商业软件，中大型团队用的项目管理"
    ],
    tags:["项目管理","自动化","企业"], lang:"JavaScript", lic:"Proprietary", repo:"wrike/wrike", official:"https://www.wrike.com/" },

  { name:"Motion",      cat:"prod",
    desc:"AI 自动排任务、排会议的工具。",
    intro:"Motion 用 AI 替你排日程：任务和会议按优先级自动排进日历，计划变了就动态重排。手动挪日程挪烦了的话，这种自动排期值得一试。",
    features:[
      "AI 自动排任务日程",
      "任务和会议一起排",
      "日程动态重排",
      "按优先级排布",
      "偏个人生产力",
      "商业软件，跨平台，主打 AI 排期"
    ],
    tags:["排期","AI","生产力"], lang:"Swift", lic:"Proprietary", repo:"motionapp/motion", official:"https://www.motionapp.com/" },

  { name:"Productboard", cat:"prod",
    desc:"产品团队管需求、定路线图的工具。",
    intro:"Productboard 盯着产品管理这条线：收用户反馈、理需求、排优先级、定路线图，一套走完。产品团队想把需求管理做得系统，常拿它当主力。",
    features:[
      "需求管理加路线图",
      "收集用户反馈",
      "把需求排优先级",
      "规划做得系统",
      "支持团队协作",
      "商业软件，跨平台，产品管理向"
    ],
    tags:["产品","路线图","需求"], lang:"JavaScript", lic:"Proprietary", repo:"productboard/productboard", official:"https://www.productboard.com/" },

  { name:"Focalboard",   cat:"prod",
    desc:"Mattermost 出品的开源看板工具。",
    intro:"Focalboard 是 Mattermost 出的开源看板，看板、表格、日历三种视图，能自托管，也做得轻。算 Trello 或 Notion 的开源平替，团队对数据在自己手里有要求的话正合适。",
    features:[
      "开源看板加任务管理",
      "看板、表格、日历三种视图",
      "能自托管",
      "够轻量",
      "可嵌入别的系统",
      "AGPL-3.0，跨平台，可自托管看板"
    ],
    tags:["看板","开源","自托管"], lang:"Go", lic:"AGPL-3.0", repo:"mattermost/focalboard" },

  { name:"Taiga",       cat:"prod",
    desc:"Scrum 和看板都支持的开源敏捷工具。",
    intro:"Taiga 开源做敏捷项目管理：Scrum 和看板都原生支持，issue 跟踪、迭代、路线图不缺，界面也讨喜。中小团队想用开源搞敏捷，它是常被推荐的一个。",
    features:[
      "开源的敏捷项目管理",
      "Scrum、看板都支持",
      "跟迭代、排路线图",
      "issue 跟踪也不缺",
      "界面讨喜",
      "MPL-2.0，跨平台，中小团队敏捷向"
    ],
    tags:["敏捷","看板","开源"], lang:"Python", lic:"MPL-2.0", repo:"taigaio/taiga-back" },

  { name:"rsync",       cat:"sys",
    desc:"只传差异的文件同步工具。",
    intro:"rsync 的本事是只传差异：文件哪部分变了就搬哪部分，还支持压缩和断点续传。备份、同步镜像，命令行里多半就是它，经典到发行版基本都自带。",
    features:[
      "按增量同步文件",
      "只搬运变化过的部分",
      "传输压缩、断点续传",
      "镜像、备份常用",
      "跨平台",
      "GPL-3.0，跨平台，命令行文件同步"
    ],
    tags:["同步","传输","增量"], lang:"C", lic:"GPL-3.0", repo:"WayneD/rsync" },

  { name:"LVM",         cat:"sys",
    desc:"Linux 的逻辑卷层，磁盘伸缩灵活。",
    intro:"LVM（Logical Volume Manager）在物理磁盘和逻辑卷之间垫了一层抽象，分区能扩能缩，快照、条带、镜像都支持。Linux 上管磁盘，它基本就是默认答案。",
    features:[
      "磁盘上垫一层逻辑卷",
      "卷能扩也能缩",
      "支持快照",
      "条带、镜像都行",
      "Linux 磁盘管理的标配",
      "GPL-2.0，Linux 上的磁盘管理标配"
    ],
    tags:["磁盘","卷管理","Linux"], lang:"C", lic:"GPL-2.0", repo:"lvmteam/lvm2" },

  { name:"libbpf",      cat:"sys",
    desc:"eBPF 的核心用户态库。",
    intro:"libbpf 是 eBPF 的用户态库，负责在用户空间加载、管理 eBPF 程序，做内核可观测性和网络处理。eBPF 生态里它是核心那块，开发门槛被它拉低了不少。",
    features:[
      "eBPF 的用户态库",
      "做内核可观测性",
      "eBPF 开发被它简化",
      "网络处理、性能分析",
      "和内核深度绑定",
      "LGPL-2.1，Linux，eBPF 生态核心库"
    ],
    tags:["eBPF","内核","可观测"], lang:"C", lic:"LGPL-2.1", repo:"libbpf/libbpf" },

  { name:"procps",      cat:"sys",
    desc:"ps、top、free 的来源，进程工具集。",
    intro:"procps 是 Linux 进程管理的一套命令：ps、top、free、kill 都出自它，看进程、看内存、管进程全靠这几个。系统监控的底座，基本每套发行版都内置。",
    features:[
      "一套进程管理命令",
      "ps、top、free、kill 都在这",
      "看进程、看内存",
      "系统监控的底座",
      "Linux 基本自带",
      "GPL-2.0，Linux 自带的进程工具集"
    ],
    tags:["进程","监控","工具集"], lang:"C", lic:"GPL-2.0", repo:"procps-ng/procps" },

  { name:"sysstat",     cat:"sys",
    desc:"sar、iostat 等性能统计工具集。",
    intro:"sysstat 收集系统性能数据，sar、iostat、mpstat、pidstat 各管一摊，CPU、IO、网络、内存都覆盖，还能存历史数据。做性能分析和调优，它是标准工具箱。",
    features:[
      "采集系统性能数据",
      "sar、iostat、mpstat、pidstat",
      "覆盖 CPU、IO、网络、内存",
      "调优分析靠数据说话",
      "能存历史数据",
      "LGPL-2.1，Linux 性能分析标配"
    ],
    tags:["性能","统计","监控"], lang:"C", lic:"LGPL-2.1", repo:"sysstat/sysstat" },

  { name:"dmesg",       cat:"sys",
    desc:"读内核环形缓冲区的日志。",
    intro:"dmesg 读的是内核的环形缓冲区，启动和运行时硬件、驱动、错误的消息都在里面。机器插个设备没反应、驱动加载失败，第一反应多半是敲 dmesg。",
    features:[
      "读内核的环形缓冲区",
      "硬件、驱动报错都在里面",
      "排查内核先敲它",
      "启动信息也能翻",
      "Linux 自带命令",
      "GPL-2.0，Linux 自带，看内核日志"
    ],
    tags:["内核","日志","调试"], lang:"C", lic:"GPL-2.0", repo:"util-linux/util-linux" },

  { name:"ltrace",      cat:"sys",
    desc:"跟踪库函数调用，strace 的搭档。",
    intro:"ltrace 盯的是进程调用 libc 这类库函数的过程，函数名和参数都列出来。strace 看系统调用，ltrace 看库调用，排查应用层问题正好互补。",
    features:[
      "盯 libc 这类库调用",
      "一个看系统调用一个看库调用",
      "函数名参数都显示",
      "查应用层问题用它",
      "Linux 调试工具",
      "GPL-2.0，Linux，跟踪库调用"
    ],
    tags:["调试","库调用","跟踪"], lang:"C", lic:"GPL-2.0", repo:"" ,official:"https://ltrace.org/"},

  { name:"lsof",        cat:"sys",
    desc:"谁占了端口、锁了文件，列给你看。",
    intro:"lsof（List Open Files）列出当下打开的文件和网络连接：端口被谁占、文件被谁锁、进程耗了什么资源，一查便知。端口冲突和文件锁这类扯皮问题，拿它定证据最快。",
    features:[
      "列出打开中的文件",
      "端口占用一查便知",
      "文件锁问题好定位",
      "进程占的资源都列",
      "排障常用",
      "BSD 许可，Linux 系统诊断常用"
    ],
    tags:["诊断","端口","文件"], lang:"C", lic:"BSD", repo:"lsof-org/lsof" },

  { name:"inotify-tools", cat:"sys",
    desc:"基于 inotify 的文件变化监控。",
    intro:"inotify-tools 建在 Linux inotify 上，用 inotifywait 挂起监听文件的创建、删除、修改。文件一变就触发脚本，做自动化和实时监控它是底座。",
    features:[
      "盯住文件系统事件",
      "inotifywait 挂起监听",
      "创建删除修改都能接",
      "脚本自动化靠它触发",
      "Linux 上的基础件",
      "GPL-3.0，Linux 文件变化监控"
    ],
    tags:["文件监控","事件","自动化"], lang:"C", lic:"GPL-3.0", repo:"inotify-tools/inotify-tools" },

  { name:"btrfs-progs", cat:"sys",
    desc:"创建与管理 Btrfs 的工具集。",
    intro:"btrfs-progs 是 Btrfs 的配套工具集，mkfs.btrfs、btrfs 这些命令都在里面：建文件系统、管子卷、打快照、压缩去重、检查修复，全套都归它。",
    features:[
      "全套 Btrfs 管理命令",
      "格式化、子卷、快照",
      "支持压缩和去重",
      "文件系统检查修复",
      "用 Btrfs 基本绕不开",
      "GPL-2.0，Linux 上的 Btrfs 管理套件"
    ],
    tags:["文件系统","Btrfs","管理"], lang:"C", lic:"GPL-2.0", repo:"kdave/btrfs-progs" },

  { name:"mtr",         cat:"net",
    desc:"跟踪路径，持续盯每跳。",
    intro:"mtr（My TraceRoute）把 traceroute 和 ping 焊在一起：路径上每一跳的延迟和丢包持续刷新，网络质量动态摆在眼前。查路径、盯链路，比跑一遍就完事的 traceroute 好用。",
    features:[
      "跟踪网络路径",
      "每跳延迟丢包持续刷",
      "网络质量动态可见",
      "查路径问题顺手",
      "边跑边看的交互界面",
      "GPL-2.0，跨平台，路径与丢包监控"
    ],
    tags:["路径","监控","丢包"], lang:"C", lic:"GPL-2.0", repo:"" ,official:"https://www.bitwizard.nl/mtr/"},

  { name:"socat",       cat:"net",
    desc:"netcat 加强版，双向转发随便接。",
    intro:"socat 是个双向数据转发器，文件、socket、PTY、SSL 各种两端自由组合，比 netcat 能接的多一档。网络调试、端口转发、加密隧道，拿它当瑞士军刀的人不少。",
    features:[
      "两个方向转发数据",
      "协议两端自由组合",
      "文件、socket、PTY、SSL 都能接",
      "比 netcat 能接的多",
      "调试网络拿它顶上",
      "GPL-3.0，跨平台，数据转发瑞士军刀"
    ],
    tags:["转发","多协议","调试"], lang:"C", lic:"GPL-3.0", repo:"" ,official:"http://www.dest-unreach.org/socat/"},

  { name:"ethtool",     cat:"net",
    desc:"网卡参数查看与设置。",
    intro:"ethtool 管 Linux 网卡的参数和诊断：速率、双工、流量控制能查能设，硬件统计和驱动信息也出得来。网卡性能不对、链路有问题，先拿它摸一遍。",
    features:[
      "调网卡参数",
      "速率、双工、流控都能设",
      "读硬件统计",
      "顺带看驱动信息",
      "网卡排障第一站",
      "GPL-2.0，Linux 网卡管理与排障"
    ],
    tags:["网卡","诊断","Linux"], lang:"C", lic:"GPL-2.0", repo:"ethtool/ethtool" },

  { name:"fping",       cat:"net",
    desc:"一次并行 ping 一批主机。",
    intro:"fping 一次并行 ping 一批主机，不用像 ping 那样排队等回包，快得多。批量探活、监控扫描，脚本里用它比循环调 ping 利索。",
    features:[
      "并行 ping，不排队",
      "一轮扫一批主机",
      "谁活着谁挂了清楚",
      "监控扫描都够用",
      "比 ping 命令快得多",
      "GPL-2.0，Linux，批量存活检测"
    ],
    tags:["ping","并行","检测"], lang:"C", lic:"GPL-2.0", repo:"schweikert/fping" },

  { name:"ZeroTier",    cat:"net",
    desc:"把分散设备拉进同一个虚拟 LAN。",
    intro:"ZeroTier 用软件把分散在各处的设备拉进同一个虚拟局域网，跨网络也能组网，设备之间直连。不在一个 LAN 里却要像在一个里那样通信，它就为这个而生。",
    features:[
      "软件版虚拟 LAN",
      "跨网络把设备组网",
      "设备之间直连",
      "远程组网协作",
      "不挑底层网络",
      "GPL-2.0，跨平台的虚拟局域网方案"
    ],
    tags:["组网","虚拟LAN","协作"], lang:"C++", lic:"GPL-2.0", repo:"zerotier/ZeroTierOne" },

  { name:"Headscale",   cat:"net",
    desc:"自建 WireGuard 控制平面，告别官方云。",
    intro:"Headscale 自己实现 WireGuard 的控制平面（control plane），设备、网络、身份都由你自建的服务器管，不再依赖官方云。自托管 WireGuard，它是标准方案。",
    features:[
      "WireGuard 的控制平面",
      "自己搭 VPN 后端",
      "设备、网络它来管",
      "身份也归它管",
      "完全自托管",
      "MIT，跨平台，自托管 WireGuard"
    ],
    tags:["VPN","WireGuard","自托管"], lang:"Go", lic:"MIT", repo:"juanfont/headscale" },

  { name:"net-tools",   cat:"net",
    desc:"ifconfig、netstat 那套老工具。",
    intro:"net-tools 是 ifconfig、route、netstat、arp 那套老命令，看网络、配网络都靠它们。新一点的活被 iproute2 接走了，但老脚本和老习惯里它还常在。",
    features:[
      "老牌网络命令一箱",
      "ifconfig、route、netstat 都来自它",
      "带 arp 工具",
      "看网络、配网络",
      "部分功能让位给 iproute2",
      "GPL-2.0，Linux 传统网络命令集"
    ],
    tags:["网络","工具集","传统"], lang:"C", lic:"GPL-2.0", repo:"" ,official:"https://sourceforge.net/projects/net-tools/"},

  { name:"LMMS",        cat:"media",
    desc:"开源 DAW，做电子音乐。",
    intro:"LMMS 是开源的音乐制作工作站（DAW），做电子音乐：MIDI 编辑、合成、采样都管。免费，上手门槛不高，想入门音乐制作先拿它练手不亏。",
    features:[
      "开源的音乐工作站",
      "主攻电子音乐",
      "MIDI 编辑齐全",
      "合成器、采样都有",
      "入门不花钱",
      "GPL-3.0，跨平台，免费 DAW"
    ],
    tags:["音乐","DAW","开源"], lang:"C++", lic:"GPL-3.0", repo:"LMMS/lmms" },

  { name:"MuseScore",   cat:"media",
    desc:"开源的五线谱编辑与播放。",
    intro:"MuseScore 写五线谱：创作、记谱、播放、排版一条龙，MIDI 还能导入导出。音乐教学和创作里常用，免费开源跨平台。",
    features:[
      "免费开源写谱",
      "五线谱直接创作",
      "写完当场播放",
      "排版也管",
      "MIDI 导入导出互通",
      "GPL-3.0，跨平台，教学和创作常用"
    ],
    tags:["乐谱","记谱","开源"], lang:"C++", lic:"GPL-3.0", repo:"MuseScore/MuseScore" },

  { name:"TuxGuitar",   cat:"media",
    desc:"开源的吉他六线谱编辑器。",
    intro:"TuxGuitar 专管吉他六线谱（TAB）：写谱、录音、播放都行，练琴扒谱、教吉他都用得上。免费跨平台，走的是开源吉他谱工具的路子。",
    features:[
      "写吉他 TAB 谱",
      "创作、改谱都行",
      "带录音和播放",
      "教学场景也覆盖",
      "免费，跨平台",
      "GPL-2.0，跨平台的吉他谱工具"
    ],
    tags:["吉他","六线谱","编辑"], lang:"Java", lic:"GPL-2.0", repo:"" ,official:"https://tuxguitar.com/"},

  { name:"REAPER",      cat:"media",
    desc:"轻快的专业 DAW，扩展性好。",
    intro:"REAPER 是专业 DAW（录音、混音、母带、MIDI 全能），但安装包小得出奇，跑起来轻快，还能用脚本深度扩展。价格也比同类亲民。",
    features:[
      "正经专业 DAW",
      "录音、混音、母带一条龙",
      "MIDI 制作支持",
      "体积小、启动快、不卡",
      "脚本扩展随便加",
      "商用但价格亲民，跨平台 DAW"
    ],
    tags:["音频","DAW","专业"], lang:"C++", lic:"Proprietary", repo:"cockos/reaper", official:"https://www.reaper.fm/" },

  { name:"GarageBand",  cat:"media",
    desc:"Apple 自家入门 DAW。",
    intro:"GarageBand 是 Apple 的入门音乐制作软件：乐器、鼓机、虚拟乐器内置，录制与混音都覆盖，桌面和移动设备上都能做。Apple 设备上玩音乐，基本从它开始。",
    features:[
      "从零起步做音乐",
      "乐器、鼓机内置一堆",
      "录制混音都覆盖",
      "移动设备上接着做",
      "Apple 生态标配",
      "Apple 商用软件，iOS/macOS 可用"
    ],
    tags:["音乐","入门","Apple"], lang:"Objective-C", lic:"Proprietary", repo:"apple/GarageBand", official:"https://www.apple.com/mac/garageband/" },

  { name:"Logic Pro",   cat:"media",
    desc:"Apple 的专业 DAW。",
    intro:"Logic Pro 是 Apple 的专业音乐制作工作站（DAW）：录音、混音、母带一整套，虚拟乐器库给得足。macOS 和 iOS 上做专业音乐，它就是那条标准线。",
    features:[
      "专业向 DAW",
      "录音、混音、母带全链",
      "虚拟乐器库量大",
      "专业创作全流程",
      "Apple 生态核心",
      "Apple 商用，macOS/iOS 专业 DAW"
    ],
    tags:["音乐","DAW","专业"], lang:"Swift", lic:"Proprietary", repo:"apple/Logic-Pro", official:"https://www.apple.com/logic-pro/" },

  { name:"Piper",       cat:"media",
    desc:"跑得轻的本地 TTS，多语言离线。",
    intro:"Piper 是轻量的本地文本转语音（TTS）引擎，神经网络合成语音，多语言、延迟低、全程离线。语音合成不想出网、要跑在边缘设备上，它正对口。",
    features:[
      "本地跑的轻量 TTS",
      "神经网络合成语音",
      "多语言，延迟压得低",
      "断网也能出语音",
      "边缘设备跑得动",
      "MIT，跨平台，隐私场景友好"
    ],
    tags:["TTS","语音","本地"], lang:"C++", lic:"MIT", repo:"rhasspy/piper" },

  { name:"Matterbridge",cat:"media",
    desc:"把各家 IM 串起来的聊天桥。",
    intro:"Matterbridge 在 Discord、Slack、Telegram、IRC 这些平台之间搭桥，这边发的消息那边能收到。几个社群散在不同 IM 里要互通消息，它是常用方案。",
    features:[
      "多个聊天平台搭桥",
      "各家 IM 互通消息",
      "这边发那边收",
      "Discord、Slack、Telegram、IRC 都在列",
      "跨平台部署",
      "MIT，跨平台，消息桥接"
    ],
    tags:["聊天","桥接","多平台"], lang:"Go", lic:"MIT", repo:"42wim/matterbridge" },

  { name:"Podman",      cat:"host",
    desc:"无守护进程，兼容 Docker 的容器引擎。",
    intro:"Podman 跑容器不需要常驻守护进程，Docker CLI 的操作习惯基本照搬，rootless 运行和 Pod 编组也支持。想要 Docker 的开源替代、权限收得更紧，看它。",
    features:[
      "不用常驻守护进程",
      "Docker CLI 习惯照用",
      "rootless 跑容器",
      "也支持 Pod 编组",
      "镜像构建内置",
      "Apache-2.0，Linux 容器引擎"
    ],
    tags:["容器","无守护","rootless"], lang:"Go", lic:"Apache-2.0", repo:"containers/podman" },

  { name:"LXD",         cat:"host",
    desc:"Canonical 的系统容器与虚拟机管理。",
    intro:"LXD 基于 LXC 技术，把整套系统装进容器，也能管虚拟机：快照、网络、存储、集群都支持，启动只要几秒。Canonical 维护，系统级容器化的标准选项。",
    features:[
      "整台系统装进容器",
      "虚拟机也管",
      "快照随手打",
      "网络、存储配置齐全",
      "支持集群",
      "LGPL-3.0，Linux 系统容器管理"
    ],
    tags:["容器","虚拟化","集群"], lang:"Go", lic:"LGPL-3.0", repo:"canonical/lxd" },

  { name:"Incus",       cat:"host",
    desc:"LXD 的社区分支，社区共治。",
    intro:"Incus 是 LXD 的社区分支：原班功能接过来，由去中心化的社区接手长期维护。系统容器、虚拟机、快照、集群都照旧，图的是社区驱动、不再绑在单一公司身上。",
    features:[
      "从 LXD 分出来的",
      "系统容器照旧",
      "虚拟机也支持",
      "快照功能一致",
      "集群也照常",
      "Apache-2.0，Linux，社区接手维护"
    ],
    tags:["容器","社区","去中心化"], lang:"Go", lic:"Apache-2.0", repo:"lxc/incus" },

  { name:"Proxmox",     cat:"host",
    desc:"KVM 加 LXC 的开源虚拟化平台。",
    intro:"Proxmox 把 KVM 虚拟机和 LXC 容器收进一个企业级开源平台，Web 界面管理，备份、高可用、集群都有。自托管虚拟化，它几乎是默认选项。",
    features:[
      "拿它撑企业虚拟化",
      "KVM 虚拟机管理",
      "LXC 容器同栈",
      "备份、高可用都有",
      "集群一个界面管",
      "AGPL-3.0，Linux 自托管虚拟化标配"
    ],
    tags:["虚拟化","KVM","集群"], lang:"Perl", lic:"AGPL-3.0", repo:"proxmox/pve-manager" },

  { name:"Cockpit",     cat:"host",
    desc:"浏览器里管 Linux 服务器。",
    intro:"Cockpit 给 Linux 服务器一个 Web 管理界面：监控、日志、存储、网络、用户都在浏览器里点，轻量、安全。Red Hat 主导，这类面板里的标准选择。",
    features:[
      "Web 界面管服务器",
      "系统监控实时看",
      "日志、存储点得动",
      "网络、用户也管",
      "轻，不侵入系统",
      "LGPL-2.1，Red Hat 主导的服务器面板"
    ],
    tags:["服务器","Web管理","监控"], lang:"TypeScript", lic:"LGPL-2.1", repo:"cockpit-project/cockpit" },

  { name:"Webmin",      cat:"host",
    desc:"老资格的 Linux Web 管理面板。",
    intro:"Webmin 是用 Perl 写的经典 Web 管理面板，Linux/Unix 上的用户、文件、网络、服务、数据库都能管。年头久、功能攒得全，老运维对它有感情。",
    features:[
      "Perl 写的老牌面板",
      "用户、文件都能管",
      "网络、服务也在列",
      "数据库顺带管了",
      "功能攒得全",
      "GPL-2.0，Linux/Unix 老牌 Web 面板"
    ],
    tags:["Web管理","面板","经典"], lang:"Perl", lic:"GPL-2.0", repo:"webmin/webmin" },
  { name:"AppFlowy", cat:"prod",
    desc:"本地优先的开源 Notion 替代，文档、数据库与协作都在",
    intro:"AppFlowy 是一款用 Rust 编写的开源 Notion 替代品，主打本地优先——内容默认存在你自己的设备上，离线也能完整使用。文档、数据库与看板视图收在同一工作区，适合既想要 Notion 式灵活排版、又在意数据主权的人。",
    features:[
      "本地优先，数据默认存本地，离线可用",
      "文档和表格、看板、日历视图间自由切换",
      "实时多人协作与细粒度权限",
      "可导出 Markdown、CSV，数据不被供应商锁住",
      "Rust 编写，桌面端启动快、内存占用低"
    ],
    tags:["效率","自托管","协作"], lang:"Rust", lic:"AGPL-3.0", repo:"AppFlowy-IO/AppFlowy" },

  { name:"AFFiNE", cat:"prod",
    desc:"开源 Notion 替代，文档与无限白板一体",
    intro:"AFFiNE 把文档和无限白板融合成一个工作空间，相当于 Notion 加 Miro 的开源合体。同一块内容能在页面与画布之间来回切，适合边写边画、做产品设计和知识整理的人。",
    features:[
      "文档与无限白板双模式，一键切换",
      "块级编辑，内容自由拖拽组合",
      "本地优先，离线与多端同步都支持",
      "内置 AI 辅助写作与脑图生成",
      "MIT 协议，可自托管与二次开发"
    ],
    tags:["效率","自托管","协作"], lang:"TypeScript", lic:"MIT", repo:"toeverything/AFFiNE" },

  { name:"SiYuan", cat:"prod",
    desc:"思源笔记，本地优先的双链块级知识库",
    intro:"思源笔记是本地优先的双链块级知识库，每个段落、标题都是可引用、可移动的独立块。双向链接、块引用和大纲笔记揉在一起，中文社区里个人知识管理它很受欢迎。",
    features:[
      "块级引用，内容块可复用、可双向链接",
      "完全本地存储，支持自托管同步",
      "内置关系图与全局搜索",
      "Markdown 导入导出、自定义主题都有",
      "中文社区活跃，插件多到装不完"
    ],
    tags:["效率","自托管","协作"], lang:"Go", lic:"AGPL-3.0", repo:"siyuan-note/siyuan" },

  { name:"Anytype", cat:"prod",
    desc:"本地优先、端到端加密的知识管理与协作空间",
    intro:"Anytype 是端到端加密的本地优先知识管理工具，用“对象—关系—视图”的方式组织信息。隐私排在第一位：数据先在本地加密，再按需同步，对保密要求高的团队和个人正合适。",
    features:[
      "端到端加密，数据先本地加密再同步",
      "对象化建模，类型与关系随你定义",
      "网格、看板、日历、图多种视图切换",
      "完全离线可用，开源可审计",
      "支持团队协作空间与共享"
    ],
    tags:["效率","自托管","协作"], lang:"Go", lic:"GPL-3.0", repo:"anyproto/anytype-heart" },

  { name:"Standard Notes", cat:"prod",
    desc:"端到端加密、隐私优先的笔记应用",
    intro:"Standard Notes 是把隐私看得很重的笔记应用，笔记默认端到端加密，连服务商也读不了内容。它坚持简洁和长久可用，格式开放、导出自由，记日记、存敏感信息都合适。",
    features:[
      "端到端加密，服务商也读不了笔记",
      "纯文本与 Markdown，数据永远可导出",
      "跨平台同步，可自建同步服务器",
      "编辑器、主题、工具都能扩展",
      "按长期主义设计，数据可迁移"
    ],
    tags:["效率","自托管","协作"], lang:"TypeScript", lic:"GPL-3.0", repo:"standardnotes/app" },

  { name:"Notesnook", cat:"prod",
    desc:"端到端加密的跨平台笔记应用",
    intro:"Notesnook 是端到端加密的跨平台笔记应用，想做的是“真正保护隐私的 Evernote”。加密、同步和清爽的编辑体验揉在一起，免费版就给端到端加密，这点在同类里少见。",
    features:[
      "端到端加密，零知识架构",
      "免费版即有加密与多设备同步",
      "富文本编辑器加 Markdown 支持",
      "笔记本、标签、置顶、回收站齐全",
      "可自托管，开源可审计"
    ],
    tags:["效率","自托管","协作"], lang:"TypeScript", lic:"GPL-3.0", repo:"streetwriters/notesnook" },

  { name:"Vikunja", cat:"prod",
    desc:"开源 Todoist 替代，任务与项目管理",
    intro:"Vikunja 是可自托管的开源 Todoist 替代品，任务、项目、看板、团队协作用一套系统管。个人待办和小团队协作都兼顾，界面清爽，自托管也不折腾。",
    features:[
      "任务清单、看板与甘特图多种视图",
      "团队项目、成员权限与协作",
      "子任务、重复任务、提醒、标签都有",
      "托管版自托管版都提供，数据自己掌握",
      "Web、移动端、命令行客户端齐活"
    ],
    tags:["效率","自托管","协作"], lang:"Go", lic:"AGPL-3.0", repo:"go-vikunja/vikunja" },

  { name:"Timewarrior", cat:"prod",
    desc:"命令行时间追踪工具",
    intro:"Timewarrior 是命令行时间追踪工具，和 Taskwarrior 同门。不依赖图形界面，几条命令记下你在每件事上花了多久，适合键盘流、想把时间追踪写进脚本的开发者。",
    features:[
      "纯命令行，启动即用、无图形依赖",
      "自动记录与手动补录时间区间",
      "报表和标签过滤查询好用",
      "和 Taskwarrior 联动顺手",
      "纯文本存数据，备份分析都方便"
    ],
    tags:["效率","自托管","协作"], lang:"Cpp", lic:"MIT", repo:"GothenburgBitFactory/timewarrior" },

  { name:"Kimai", cat:"prod",
    desc:"开源时间追踪与项目记账",
    intro:"Kimai 是开源的时间追踪与项目记账系统，最早为自由职业者和小团队设计。记工时、出报表、按客户与项目统计，企业内部的工时核算也常用它。",
    features:[
      "计时器记工时，支持手动补录",
      "按客户、项目、活动多维统计",
      "可导出报表与发票数据",
      "多用户与权限管理",
      "可自托管，API 很好接"
    ],
    tags:["效率","自托管","协作"], lang:"PHP", lic:"MIT", repo:"kimai/kimai" },

  { name:"Grocy", cat:"prod",
    desc:"自托管家庭库存与杂货管理",
    intro:"Grocy 是自托管的家庭库存与杂货管理工具，记下冰箱、储物柜里有什么、什么时候过期。购物清单、菜谱和库存打通，少浪费食物，智能家居场景里的实用派。",
    features:[
      "食品库存与保质期提醒",
      "自动生成购物清单",
      "菜谱管理与库存联动",
      "支持条码扫描与多用户",
      "PHP 编写，自托管简单、数据私有"
    ],
    tags:["效率","自托管","协作"], lang:"PHP", lic:"MIT", repo:"grocy/grocy" },

  { name:"Homarr", cat:"prod",
    desc:"自托管服务仪表盘与导航",
    intro:"Homarr 是自托管服务仪表盘，把 NAS、Docker、媒体服务器这些自建服务的入口收进一个页面。磁贴可拖拽，服务状态和实时监控直接挂上去，Homelab 爱好者的常用首页。",
    features:[
      "磁贴拖拽自定义仪表盘布局",
      "集成 Docker 容器状态，一键启停",
      "服务健康状态与监控小组件",
      "多用户与主题定制",
      "自托管，数据不出内网"
    ],
    tags:["效率","自托管","协作"], lang:"TypeScript", lic:"MIT", repo:"homarr-labs/homarr" },

  { name:"Kutt", cat:"prod",
    desc:"自托管短链接服务",
    intro:"Kutt 是简洁的自托管短链接服务，长网址压成短链，点击统计跟着来。界面干净、部署轻，想摆脱第三方短链、自己掌握链接数据的个人和团队适合它。",
    features:[
      "生成短链，别名可自定义",
      "点击次数与来源统计",
      "密码保护与链接过期时间都支持",
      "可自托管，数据完全私有",
      "带 API，方便接进工作流"
    ],
    tags:["效率","自托管","协作"], lang:"JavaScript", lic:"MIT", repo:"thedevs-network/kutt" },

  { name:"HedgeDoc", cat:"prod",
    desc:"自托管协作 Markdown 笔记",
    intro:"HedgeDoc（原 HackMD）是自托管的协作 Markdown 笔记工具，多人同编一篇文档，彼此的光标实时可见。会议纪要、技术文档、实时协作写作，场合都常见它。",
    features:[
      "多人实时协作编辑，光标同步",
      "Markdown、图表、幻灯片模式都支持",
      "文档可公开分享或加密码",
      "版本历史与导出（HTML/Markdown/PDF）",
      "可自托管，数据自主可控"
    ],
    tags:["效率","自托管","协作"], lang:"TypeScript", lic:"AGPL-3.0", repo:"hedgedoc/hedgedoc" },

  { name:"Outline", cat:"prod",
    desc:"自托管团队协作知识库",
    intro:"Outline 是面向团队的开源知识库，界面现代、搜索好用，算 Confluence 的轻量替代。Markdown 编辑、文档层级、团队权限都有，和 Slack 这类工具配合得不错。",
    features:[
      "Markdown 编辑与实时预览",
      "全文搜索与文档层级管理",
      "团队空间、权限与共享链接",
      "与 Slack 等工具集成",
      "支持自托管，数据私有"
    ],
    tags:["效率","自托管","协作"], lang:"TypeScript", lic:"BSD-3-Clause", repo:"outline/outline" },

  { name:"Docmost", cat:"prod",
    desc:"开源 Confluence/Notion 替代",
    intro:"Docmost 是新兴的开源协作文档与知识库，定位 Notion、Confluence 的开源替代。富文本编辑、实时协作、空间权限都到位，界面摸起来接近主流商业产品。",
    features:[
      "富文本块编辑器，页面可嵌套",
      "多人实时协作与评论",
      "团队空间与细粒度权限",
      "全文搜索与目录导航",
      "可自托管，MIT 相关协议友好"
    ],
    tags:["效率","自托管","协作"], lang:"TypeScript", lic:"AGPL-3.0", repo:"docmost/docmost" },

  { name:"Appwrite", cat:"prod",
    desc:"开源后端即服务平台",
    intro:"Appwrite 是开源后端即服务平台，认证、数据库、存储、函数、实时订阅打包成一套服务。SDK 和可视化控制台都备好，前端开发者不用再从零搭后端。",
    features:[
      "用户认证与 OAuth 集成",
      "数据库、文件存储与云函数",
      "实时数据订阅",
      "多语言 SDK 与可视化控制台",
      "可自托管，Docker 一键部署"
    ],
    tags:["效率","自托管","协作"], lang:"TypeScript", lic:"BSD-3-Clause", repo:"appwrite/appwrite" },

  { name:"Pocketbase", cat:"prod",
    desc:"单个文件就是一个后端，自带 SQLite",
    intro:"PocketBase 把后端塞进了一个二进制文件：SQLite 数据库、用户认证、文件存储、实时订阅都在里面。轻量到能扔进边缘节点，写原型、做小应用都省事。",
    features:[
      "部署就一个文件，没有外部依赖",
      "SQLite、认证、管理后台全是自带的",
      "数据可实时订阅，文件存储也管了",
      "资源占用很小，启动基本是秒开",
      "Go 写的，跨平台，也方便嵌进别的项目"
    ],
    tags:["效率","自托管","协作"], lang:"Go", lic:"MIT", repo:"pocketbase/pocketbase" },

  { name:"Supabase", cat:"prod",
    desc:"开源的 Firebase 替代，底座是 Postgres",
    intro:"Supabase 走开源路线对标 Firebase，核心是 PostgreSQL，数据库、认证、存储、边缘函数一并都有。代码开放，可自托管，Larry 数据集与自动生成的 API 让开发比较顺手。",
    features:[
      "PostgreSQL 数据库，API 按表自动生成",
      "用户认证配行级安全策略",
      "对象存储和边缘函数也有",
      "数据变动可实时订阅",
      "随时能自托管，不被厂商绑死"
    ],
    tags:["效率","自托管","协作"], lang:"TypeScript", lic:"Apache-2.0", repo:"supabase/supabase" },

  { name:"Mailcow", cat:"prod",
    desc:"一整套自托管邮件服务器方案",
    intro:"搭邮件服务器向来繁琐，Mailcow 用 Docker 把 Postfix、Dovecot、反垃圾邮件、Web 管理界面打包成一套自托管方案，部署难度降了不少。",
    features:[
      "邮件收发齐全，支持虚拟域名",
      "SpamAssassin / ClamAV 管反垃圾和杀毒",
      "带 Web 管理界面，域名可以配多个",
      "DKIM/SPF/DMARC 这些邮件认证都支持",
      "Docker Compose 一键部署"
    ],
    tags:["效率","自托管","协作"], lang:"Shell", lic:"GPL-3.0", repo:"mailcow/mailcow-dockerized" },

  { name:"Mautic", cat:"prod",
    desc:"开源的营销自动化平台",
    intro:"邮件营销、行为跟踪、表单、落地页，Mautic 把营销自动化的活全包了。定位是 HubSpot 的开源替代，客户数据留在自己手里，中小企业用着踏实。",
    features:[
      "邮件营销，流程能自动化编排",
      "跟踪用户行为，给线索打分",
      "表单、落地页、活动都在一处管",
      "邮件、短信、社交多渠道都能发",
      "自托管，数据不外流"
    ],
    tags:["效率","自托管","协作"], lang:"PHP", lic:"GPL-3.0", repo:"mautic/mautic" },

  { name:"SuiteCRM", cat:"prod",
    desc:"开源 CRM，客户关系管理系统",
    intro:"SuiteCRM 脱胎于 SugarCRM 社区版，企业级 CRM 的功能基本都有：销售自动化、客户服务、营销一块不缺。想深度定制又不愿付商业授权费的组织，可以看看它。",
    features:[
      "线索、机会、客户、合同都能管",
      "销售流程带报表分析",
      "邮件集成、市场营销模块都有",
      "模块和工作流随便定制",
      "PHP 写的，开源，能自托管"
    ],
    tags:["效率","自托管","协作"], lang:"PHP", lic:"AGPL-3.0", repo:"SuiteCRM/SuiteCRM" },

  { name:"ERPNext", cat:"prod",
    desc:"开源企业资源计划（ERP）系统",
    intro:"财务、库存、制造、人力资源、销售，ERPNext 一套开源系统全包，底子是个叫 Frappe 的框架。ERP 该有的模块基本都有，中小企业想低成本上 ERP，它是常被提起的选择。",
    features:[
      "财务、进销存、制造、HR，模块全带",
      "表单、工作流、报表都能自己定义",
      "CRM 和项目管理是内置的",
      "多语言、多币种都支持",
      "自托管，技术栈是 Python/JS"
    ],
    tags:["效率","自托管","协作"], lang:"Python", lic:"GPL-3.0", repo:"frappe/erpnext" },

  { name:"Celluloid", cat:"media",
    desc:"基于 mpv 的 GNOME 原生播放器",
    intro:"Celluloid 把 mpv 的播放能力装进了一个 GNOME 原生风格的图形界面。默认状态简洁克制，看片时不打扰你。",
    features:[
      "底层是 mpv，常见格式都能放",
      "界面走 GNOME 原生风格，简洁",
      "播放列表、字幕、快捷键都有",
      "画质和音频输出可调",
      "轻量，不怎么吃资源"
    ],
    tags:["媒体","播放","开源"], lang:"C", lic:"GPL-2.0", repo:"celluloid-player/celluloid" },

  { name:"SMPlayer", cat:"media",
    desc:"老牌跨平台全能播放器",
    intro:"SMPlayer 基于 mpv/MPlayer，老牌全能选手：常见格式都放得了，能直接播 YouTube，还会记住每个文件看到哪了，字幕和滤镜的设置项给得足。",
    features:[
      "常见音视频格式基本都支持",
      "YouTube 这类在线视频能直接播",
      "每个文件看到哪，下次接着放",
      "字幕、音轨、滤镜可细调",
      "Windows/Linux 都能装"
    ],
    tags:["媒体","播放","开源"], lang:"CPP", lic:"GPL-2.0", repo:"smplayer-dev/smplayer" },

  { name:"Helm", cat:"media",
    desc:"开源合成器兼音频工作站",
    intro:"Helm 是开源软件合成器兼音频工作站，多振荡器、滤波器、效果器一应俱全。界面直观，声音也拿得出手，电子音乐圈里用它的人不少。",
    features:[
      "减法合成引擎，振荡器不止一个",
      "效果器和调制矩阵都是内置的",
      "预设音色给得多",
      "MIDI 和自动化都支持",
      "跨平台开源，社区还贡献了不少预设"
    ],
    tags:["媒体","播放","开源"], lang:"CPP", lic:"BSD-3-Clause", repo:"mtytel/helm" },

  { name:"Surge", cat:"media",
    desc:"开源软件合成器",
    intro:"Surge 是开源软件合成器，合成引擎给得多，效果质量也不含糊。做电子乐的音乐人里用它的不算少，声音质感常被拿来和商业合成器对比。",
    features:[
      "振荡器和合成引擎有好几套",
      "合唱、混响这类效果器质量在线",
      "预制音色量大，调制路由灵活",
      "能接 MIDI，可集成进 DAW",
      "开源，更新一直没停"
    ],
    tags:["媒体","播放","开源"], lang:"CPP", lic:"GPL-3.0", repo:"surge-synthesizer/surge" },

  { name:"Mixxx", cat:"media",
    desc:"开源的 DJ 混音软件",
    intro:"Mixxx 把双 Deck、混音台、效果器和曲目库管理装进一个开源 DJ 软件。不想花钱买 Serato/Traktor 的话，用它零成本入门数字 DJ 是条路。",
    features:[
      "双 Deck 混音，节拍能自动同步",
      "效果器、滤波器、采样器内置",
      "MIDI 控制器和唱盘都能接",
      "曲库管理带智能推荐",
      "跨平台开源，社区也活跃"
    ],
    tags:["媒体","播放","开源"], lang:"CPP", lic:"GPL-2.0", repo:"mixxxdj/mixxx" },

  { name:"Nomacs", cat:"media",
    desc:"轻快的开源图像查看器",
    intro:"Nomacs 看图快、支持的格式多，缩放旋转幻灯片都有，还能批量重命名、转格式和调调亮度色彩。Windows/Linux 上想找个轻快的看图工具，它是选项之一。",
    features:[
      "启动快，图片格式认得多",
      "缩放、旋转、幻灯片播放",
      "能批量重命名、转格式",
      "亮度、色彩这类基础调整也行",
      "跨平台，开源"
    ],
    tags:["媒体","播放","开源"], lang:"CPP", lic:"GPL-2.0", repo:"nomacs/nomacs" },

  { name:"KeePassXC", cat:"net",
    desc:"开源跨平台的密码管理器",
    intro:"KeePassXC 是 KeePass 的现代社区分支，全程离线：密码加密存在本地数据库，拿主密码或密钥才能打开，云服务一概不碰。",
    features:[
      "离线运行，密码库加密放本地",
      "Windows/macOS/Linux 都有版，带浏览器扩展",
      "自带强密码生成器和自动填充",
      "TOTP 双因素验证码支持",
      "KeePass 格式能进能出，兼容性好"
    ],
    tags:["网络","安全","自托管"], lang:"CPP", lic:"GPL-2.0", repo:"keepassxreboot/keepassxc" },

  { name:"KeePass", cat:"net",
    desc:"经典老牌开源密码管理器",
    intro:"KeePass 算是密码管理器的鼻祖：AES/Twofish 加密，密码存在本地库里，体积小巧，插件也多。后来不少工具拿它的 KDBX 当交换格式，KeePassXC 就跟它兼容。",
    features:[
      "AES/Twofish 加密，开源多年",
      "密码库完全离线，存本地",
      "条目按树状分组，字段可自定义",
      "插件多，各平台都有客户端",
      "KDBX 成了行业通用的交换格式"
    ],
    tags:["网络","安全","自托管"], lang:"CPP", lic:"GPL-2.0", repo:"keepassx/keepassx" },

  { name:"Vaultwarden", cat:"net",
    desc:"轻量的 Bitwarden 兼容服务端",
    intro:"Bitwarden 官方服务端偏重，Vaultwarden 用 Rust 写了个兼容服务端，单个二进制就能跑起密码同步，内存占用很小。想把密码库放自己的服务器上，拿它正合适。",
    features:[
      "Bitwarden 官方客户端、浏览器扩展照连",
      "就一个二进制，内存花销很小",
      "多用户、组织、附件都支持",
      "SMTP 邮件和反向代理可接",
      "数据自托管，底层用 SQLite"
    ],
    tags:["网络","安全","自托管"], lang:"Rust", lic:"AGPL-3.0", repo:"dani-garcia/vaultwarden" },

  { name:"Gophish", cat:"net",
    desc:"开源钓鱼演练框架",
    intro:"Gophish 给企业做钓鱼演练用：搭邮件模板和落地页，安全地模拟一轮钓鱼攻击，谁打开、谁点了、谁提交了都有数据，员工安全意识怎么样一目了然。安全培训里常见它。",
    features:[
      "模拟钓鱼邮件可批量发",
      "钓鱼页面、邮件模板随便定制",
      "打开、点击、提交，实时跟踪",
      "活动报表带安全意识评估",
      "开源可自托管，用前注意合规授权"
    ],
    tags:["网络","安全","自托管"], lang:"Go", lic:"MIT", repo:"gophish/gophish" },

  { name:"Metasploit", cat:"net",
    desc:"开源渗透测试框架",
    intro:"论知名程度，Metasploit 在开源渗透测试框架里排头一份：漏洞利用模块和攻击载荷攒了一大堆。安全从业者拿它做漏洞验证、红队演练，想学攻击技术的人拿它当活教材。",
    features:[
      "漏洞利用和载荷模块攒得多",
      "工作流和控制台是统一的一套",
      "漏洞扫描、后期利用都能干",
      "模块和脚本可以自己写",
      "社区更新勤，文档齐全"
    ],
    tags:["网络","安全","自托管"], lang:"Ruby", lic:"BSD-3-Clause", repo:"rapid7/metasploit-framework" },

  { name:"OWASP ZAP", cat:"net",
    desc:"开源 Web 应用安全扫描器",
    intro:"OWASP ZAP 是 OWASP 基金会的旗舰扫描器，开源免费，能自动揪出 SQL 注入、XSS 这类常见漏洞。开发者和安全人员跑日常安全测试，用它挺顺手。",
    features:[
      "自动扫描，主动、被动检测都有",
      "带拦截代理，请求能手工改",
      "AJAX 单页应用也能扫",
      "插件和 API 都给得足",
      "开源免费，社区活跃"
    ],
    tags:["网络","安全","自托管"], lang:"Java", lic:"Apache-2.0", repo:"zaproxy/zaproxy" },

  { name:"Nikto", cat:"net",
    desc:"Web 服务器漏洞扫描器",
    intro:"Nikto 用 Perl 写成，命令行跑起来就给 Web 服务器做体检：危险文件、过时组件、错误配置，上千种已知问题挨个查。老牌，快，适合摸底一轮。",
    features:[
      "数千种已知危险文件和漏洞，挨个扫",
      "过时的服务器组件、配置问题也能查",
      "SSL、代理、认证扫描都支持",
      "扫描策略和插件可定制",
      "命令行轻量，丢进自动化脚本顺手"
    ],
    tags:["网络","安全","自托管"], lang:"Perl", lic:"GPL-2.0", repo:"sullo/nikto" },

  { name:"OpenVAS", cat:"net",
    desc:"开源的漏洞评估系统",
    intro:"OpenVAS 背后是 Greenbone 的漏洞管理体系：靠几万条漏洞测试（VT）扫网络，出风险报告。不想付钱买 Nessus 的话，拿它做定期合规和漏洞管理是条常走的路。",
    features:[
      "漏洞测试规则（VT）有好几万条",
      "能发现网络资产，再做漏洞扫描",
      "报告按 CVSS 做风险分级",
      "定时扫描、持续监控都支持",
      "整套漏洞管理方案，可以自托管"
    ],
    tags:["网络","安全","自托管"], lang:"C", lic:"GPL-2.0", repo:"greenbone/gvmd" },

  { name:"Suricata", cat:"net",
    desc:"高性能网络 IDS/IPS",
    intro:"Suricata 是网络 IDS/IPS 兼安全监控引擎，流量靠多线程并行处理，入侵检测跑得快。Snort 规则可以直接拿来用，它也有自己的规则语言。",
    features:[
      "多线程检测流量，吞吐顶得住",
      "IDS 检测、IPS 防御都能干",
      "HTTP/TLS/DNS 等协议能解析",
      "Snort 规则集兼容",
      "日志是结构化的，接 SIEM 方便"
    ],
    tags:["网络","安全","自托管"], lang:"C", lic:"GPL-2.0", repo:"OISF/suricata" },

  { name:"Snort", cat:"net",
    desc:"经典网络入侵检测系统",
    intro:"IDS 这个领域，Snort 是奠基者之一：靠规则匹配流量里的恶意特征。规则生态做得大，至今仍被各种网络环境广泛部署。",
    features:[
      "流量特征按规则匹配",
      "检测模式、内联防御模式都支持",
      "规则集多，社区版企业版都有",
      "协议分析和内容匹配",
      "轻量稳定，各类网络都放得下"
    ],
    tags:["网络","安全","自托管"], lang:"CPP", lic:"GPL-2.0", repo:"snort3/snort3" },

  { name:"AdGuard Home", cat:"net",
    desc:"自托管 DNS 广告过滤",
    intro:"AdGuard Home 把广告拦截搬到路由器这一层，DNS 查询在它这里过滤一遍，全屋设备都不用装插件，详细的查询统计也能看。整套自托管。",
    features:[
      "DNS 层面拦广告和追踪，覆盖全网",
      "过滤规则、黑白名单自己定",
      "DoH/DoT 加密 DNS 支持",
      "查询日志和统计面板给得细",
      "单文件就能部署，也有 Docker"
    ],
    tags:["网络","安全","自托管"], lang:"Go", lic:"GPL-3.0", repo:"AdguardTeam/AdGuardHome" },

  { name:"Pi-hole", cat:"net",
    desc:"自托管 DNS 广告拦截",
    intro:"Pi-hole 是这类工具里用户最多的一个：一台树莓派之类的小设备跑起来，整个局域网的广告域名都过它一遍。拦截从单机升到了网络层，家庭网络的经典玩法。",
    features:[
      "广告域名在网络层过滤",
      "轻量，树莓派这类小设备就够",
      "管理界面带统计，可视化",
      "条件转发、自定义黑名单都行",
      "社区活跃，文档写得全"
    ],
    tags:["网络","安全","自托管"], lang:"Shell", lic:"EUPL-1.2", repo:"pi-hole/pi-hole" },

  { name:"blocky", cat:"net",
    desc:"自托管 DNS 代理与广告过滤",
    intro:"blocky 用 Go 写，是个自托管 DNS 代理：过滤广告和恶意域名，顺带支持 DoH/DoT 加密。配置灵活，跑起来也轻，想要个现代的 DNS 过滤网关可以试。",
    features:[
      "广告、恶意域名都能拦",
      "DNS-over-HTTPS / DNS-over-TLS",
      "域名列表加正则，规则随便写",
      "查询缓存和统计内置",
      "就一个二进制，配置不复杂"
    ],
    tags:["网络","安全","自托管"], lang:"Go", lic:"GPL-3.0", repo:"0xERR0R/blocky" },

  { name:"mitmproxy", cat:"net",
    desc:"交互式 HTTP 调试代理",
    intro:"mitmproxy 站在你和服务器中间，HTTP/HTTPS 流量可以拦下来看，也可以改写。调试 API、分析移动端请求很顺手，命令行、Web 界面随你用哪种。",
    features:[
      "HTTP(S) 流量实时拦截、查看、改写",
      "拿 Python 脚本自定义处理逻辑",
      "mitmproxy 命令行、mitmweb 网页版都有",
      "CA 证书它来生成，HTTPS 可解密",
      "调试、测试、安全分析都常用到"
    ],
    tags:["网络","安全","自托管"], lang:"Python", lic:"MIT", repo:"mitmproxy/mitmproxy" },

  { name:"OpenWrt", cat:"net",
    desc:"开源路由器操作系统",
    intro:"OpenWrt 是给路由器用的开源 Linux 发行版，普通路由器刷上它就能随便定制。软件包一大堆，家庭网络、VPN、旁路由这些玩法，发烧友基本都从它开始。",
    features:[
      "软件包模块化，缺什么装什么",
      "VPN、DNS、QoS 等网络功能齐全",
      "Web 端用 LuCI，也可以命令行",
      "支持的路由器型号一大堆",
      "社区活跃，文档和插件都多"
    ],
    tags:["网络","安全","自托管"], lang:"Shell", lic:"GPL-2.0", repo:"openwrt/openwrt" },

  { name:"Ranger", cat:"sys",
    desc:"终端文件管理器",
    intro:"Ranger 跑在终端里，基于 curses，按键是 Vim 风格，在文件树里穿梭很顺。预览、批量操作、自定义命令都有，命令行重度用户管文件的经典选择。",
    features:[
      "Vim 风格快捷键，手不离键盘",
      "多栏布局，文件直接预览",
      "批量重命名、复制、移动都行",
      "命令和颜色主题可自定义",
      "Python 写的，扩展插件方便"
    ],
    tags:["系统","终端","CLI"], lang:"Python", lic:"GPL-3.0", repo:"ranger/ranger" },

  { name:"Lf", cat:"sys",
    desc:"快速终端文件管理器",
    intro:"Lf（listfiles）是 Go 写的终端文件管理器，路线是极简加高速：浏览和几个基本操作它自己管，别的功能丢给外部命令，换来启动快、占用低。",
    features:[
      "Go 写的，启动快，占用也低",
      "操作像 Ranger，功能更克制",
      "配置灵活，逻辑多交给 shell 命令",
      "选择、复制、移动这些核心操作都在",
      "跨平台，部署就一个文件"
    ],
    tags:["系统","终端","CLI"], lang:"Go", lic:"MIT", repo:"gokcehan/lf" },

  { name:"Gdu", cat:"sys",
    desc:"快速磁盘使用分析工具",
    intro:"嫌 ncdu 慢的话，Gdu 是它的现代替代：Go 写的磁盘用量分析工具，并行扫描，交互也顺，占空间最大的目录和文件很快能翻出来。",
    features:[
      "并行扫描，比传统工具快一大截",
      "目录占用，交互式翻着看",
      "按大小排序、筛选都行",
      "删文件不用退出，界面实时更新",
      "终端 TUI，跨平台，单文件"
    ],
    tags:["系统","终端","CLI"], lang:"Go", lic:"MIT", repo:"dundee/gdu" },

  { name:"Bottom", cat:"sys",
    desc:"跨平台图形化系统监控",
    intro:"Bottom（btm）用 Rust 写，CPU、内存、磁盘、网络都画成实时图表。htop 用腻了可以换它，跨平台，还支持鼠标操作。",
    features:[
      "Rust 写的，跑着顺，占用低",
      "以图表展示 CPU/内存/磁盘/网络",
      "进程能看、能排序、能管",
      "主题和布局可自定义",
      "Windows/macOS/Linux 都有"
    ],
    tags:["系统","终端","CLI"], lang:"Rust", lic:"MIT", repo:"ClementTsang/bottom" },

  { name:"vnStat", cat:"sys",
    desc:"网络流量统计工具",
    intro:"vnStat 直接读内核的网络统计，不抓包，按小时、天、月记录带宽用量。常驻后台，开销很小，统计服务器月度流量的经典选择。",
    features:[
      "小时、日、月，流量分开统计",
      "读取内核计数器，几乎零开销",
      "守护进程常驻，数据存得久",
      "命令行、Web 前端都有",
      "多网卡、数据导出都支持"
    ],
    tags:["系统","终端","CLI"], lang:"C", lic:"GPL-2.0", repo:"vergoh/vnstat" },

  { name:"LibreSpeed", cat:"sys",
    desc:"自托管开源网速测试",
    intro:"LibreSpeed 是开源的测速方案，服务器自己搭，不用依赖 Speedtest 这类商业服务。Web 客户端和命令行都有，测出来的数字全是你自己服务器跑出来的。",
    features:[
      "测速服务器可自托管",
      "浏览器、命令行两种客户端",
      "下载、上传、延迟、抖动都测",
      "轻量，Docker 部署几步搞定",
      "无追踪，结果数据留在自己手里"
    ],
    tags:["系统","终端","CLI"], lang:"Go", lic:"LGPL-3.0", repo:"librespeed/speedtest" },

  { name:"Neofetch", cat:"sys",
    desc:"系统信息展示工具",
    intro:"Neofetch 用 Shell 写成，在终端里把系统徽标和硬件、系统摘要打印出来。晒终端截图、晒「我的设备」的人把它当标配，是开源社区里流行的小工具。",
    features:[
      "系统、CPU、内存、分辨率，一屏列出来",
      "发行版/系统的 ASCII 徽标有几十种",
      "显示哪些字段、什么配色，都可调",
      "一个 Shell 脚本，单文件能跑",
      "终端美化、截图分享常用它"
    ],
    tags:["系统","终端","CLI"], lang:"Shell", lic:"MIT", repo:"dylanaraps/neofetch" },

  { name:"Fastfetch", cat:"sys",
    desc:"neofetch 的 C 语言重写",
    intro:"Fastfetch 用 C 把 Neofetch 重写了一遍，干的事一样：展示系统信息。速度快得多，可配置项也多了不少，呈现风格还是熟悉的那个，更对性能敏感的开发者的胃口。",
    features:[
      "C 写的，出结果比 Neofetch 快不少",
      "配置模块化，想显示啥摆啥",
      "图片、徽标、主题都支持",
      "Linux/macOS/Windows 等平台都有",
      "社区活跃，更新不停"
    ],
    tags:["系统","终端","CLI"], lang:"C", lic:"MIT", repo:"fastfetch-cli/fastfetch" },

  { name:"Gotop", cat:"sys",
    desc:"终端图形化系统监控",
    intro:"Gotop 是 Go 写的终端监控，CPU、内存、磁盘、网络画成实时图表，卖相不错。装起来也简单，htop 看腻了的话，换个好看的。",
    features:[
      "终端里的图形化仪表盘",
      "CPU、内存、磁盘、网络实时刷新",
      "主题、配色可自定义",
      "Go 编译的单文件，装上就用",
      "跨平台"
    ],
    tags:["系统","终端","CLI"], lang:"Go", lic:"GPL-3.0", repo:"cjbassi/gotop" },

  { name:"Atop", cat:"sys",
    desc:"高级系统性能监控",
    intro:"Atop 和普通 top 的区别在于记历史：按固定间隔存快照，进程和资源的变迁都留着。性能问题可以事后回放着查，服务器排查时很省事。",
    features:[
      "CPU、内存、磁盘、网络，快照按间隔存",
      "事后回放、区间分析都行",
      "进程级资源统计给得细",
      "能写日志文件，长期留档",
      "命令行工具，服务器运维常用"
    ],
    tags:["系统","终端","CLI"], lang:"C", lic:"GPL-2.0", repo:"Atoptool/atop" },

  { name:"VidCutter", cat:"media",
    desc:"开源视频剪辑与分割工具",
    intro:"VidCutter 基于 FFmpeg，主打快、不损画质地剪视频：截一段、拼几段，不用重新编码。界面直观，简单剪切够用。",
    features:[
      "FFmpeg 打底，剪切快且无损",
      "时间轴直观，能看帧预览",
      "合并、拼接片段都行",
      "音频能提取，参数可调",
      "开源，跨平台"
    ],
    tags:["媒体","播放","开源"], lang:"CPP", lic:"GPL-3.0", repo:"ozmartian/vidcutter" },

  { name:"LosslessCut", cat:"media",
    desc:"无损视频剪辑工具",
    intro:"从大视频里截一段、掐掉广告，拿 LosslessCut 就行：不重新编码，直接切，画质原样，速度也快。",
    features:[
      "剪切不重新编码，画质一点不变",
      "时间轴拖拽着用，上手快",
      "视频、音频都能裁、能合",
      "片段、缩略图、字幕都能导出",
      "Electron 做的，跨平台"
    ],
    tags:["媒体","播放","开源"], lang:"TypeScript", lic:"GPL-3.0", repo:"mifi/lossless-cut" },

  { name:"Pitivi", cat:"media",
    desc:"GNOME 视频编辑器",
    intro:"Linux 上想剪视频又不想面对复杂界面，Pitivi 是个顺手的选项：GNOME 桌面的开源非线性编辑器，多轨时间线、剪辑、效果都有，界面简洁。",
    features:[
      "多轨时间线，非线性编辑",
      "剪辑、转场、视频效果",
      "支持代理剪辑，时间线更流畅",
      "和 GNOME 桌面走得近",
      "开源，开发靠社区"
    ],
    tags:["媒体","播放","开源"], lang:"Python", lic:"GPL-2.0", repo:"GNOME/pitivi" },

  { name:"WaveSurfer", cat:"media",
    desc:"音频波形可视化库",
    intro:"WaveSurfer 不是给用户用的 App，而是个 JavaScript 库：在网页里画音频波形，还能交互，做音频可视化和网页音频编辑的开发者常用它当组件。",
    features:[
      "浏览器里画音频波形",
      "播放、缩放、选区域都支持",
      "区域可打标记，交互可自定义",
      "底层是 Web Audio API",
      "轻量，塞进 Web 应用不难"
    ],
    tags:["媒体","播放","开源"], lang:"JavaScript", lic:"BSD-3-Clause", repo:"katspaugh/wavesurfer.js" },

  { name:"Pure Data", cat:"media",
    desc:"可视化音频编程环境",
    intro:"Pure Data（Pd）是一门开源的可视化编程语言，为音频、多媒体和交互艺术而设：模块靠线连起来，声音合成与处理的逻辑就这么搭出来。新媒体艺术和声音实验里的经典工具。",
    features:[
      "数据流图形化编程，不写代码",
      "音频合成处理都是实时的",
      "外部库（externals）可扩展",
      "能接 Arduino 和传感器",
      "开源跨平台，社区资料多"
    ],
    tags:["媒体","播放","开源"], lang:"C", lic:"BSD-3-Clause", repo:"pure-data/pure-data" },

  { name:"Clementine", cat:"media",
    desc:"跨平台音乐播放器",
    intro:"Clementine 是 Amarok 1.4 的现代分支，本地音乐库、网络电台、云存储都管，功能给得足。从 Windows 迁过来的用户里，拿它接棒播放器的人不少。",
    features:[
      "本地音乐库整理加播放",
      "网络电台、播客都能听",
      "Dropbox、Google Drive 等云存储能接",
      "歌词、封面、均衡器都有",
      "Windows/macOS/Linux 都有"
    ],
    tags:["媒体","播放","开源"], lang:"CPP", lic:"GPL-2.0", repo:"clementine-player/Clementine" },

  { name:"Quod Libet", cat:"media",
    desc:"音乐管理与播放工具",
    intro:"Quod Libet 是 Python 写的开源播放器，看家本领是标签管理和查询：用表达式组织音乐库，元数据能细控到别处少见的程度。",
    features:[
      "标签编辑和库管理是强项",
      "查询和播放列表都能写表达式",
      "歌词、封面、ReplayGain 支持",
      "插件体系可扩展",
      "开源跨平台"
    ],
    tags:["媒体","播放","开源"], lang:"Python", lic:"GPL-2.0", repo:"quodlibet/quodlibet" },

  { name:"EasyTAG", cat:"media",
    desc:"音频标签编辑器",
    intro:"EasyTAG 专门改音频标签，MP3、FLAC、OGG 等格式都认。标题、艺术家、专辑这些元数据能批量改，文件名还能按标签自动整理。",
    features:[
      "ID3、Vorbis 标签，多种格式可编辑",
      "批量改元数据，也能自动填",
      "文件名按标签自动重命名",
      "反过来从文件名解析标签也行",
      "开源，跨平台"
    ],
    tags:["媒体","播放","开源"], lang:"C", lic:"GPL-2.0", repo:"GNOME/easytag" },

  { name:"Picard", cat:"media",
    desc:"音乐标签与元数据管理工具",
    intro:"Picard 出自 MusicBrainz 官方，打标签用的就是社区数据库里的权威元数据。认专辑、配封面、归发行组都有一手，大型音乐库交给它批量收拾。",
    features:[
      "元数据来自 MusicBrainz，权威",
      "专辑、曲目、封面自动对上",
      "打标签、重命名都按批量来",
      "CD 识别、扫描支持",
      "开源跨平台，数据靠社区数据库"
    ],
    tags:["媒体","播放","开源"], lang:"Python", lic:"GPL-2.0", repo:"metabrainz/picard" },

  { name:"Loupe", cat:"sys",
    desc:"GNOME 图像查看器",
    intro:"Loupe 是 GNOME 的现代看图软件，Rust 写的，界面简洁、启动快。常见图片格式都支持，缩放、旋转这些基本操作齐活，GNOME 用户的默认选择。",
    features:[
      "界面简洁，GNOME 原生风格",
      "Rust 写的，快且顺",
      "缩放、旋转、幻灯片都有",
      "触屏和高 DPI 都适配了",
      "跟 GNOME 文件管理器结合得紧"
    ],
    tags:["系统","终端","CLI"], lang:"Rust", lic:"GPL-3.0", repo:"GNOME/loupe" },

  { name:"Eog", cat:"sys",
    desc:"GNOME 图像查看器",
    intro:"Eog（Eye of GNOME）是 GNOME 的老牌看图器，C 写的，轻量稳定，看图要的功能都有。不少 Linux 发行版把它当默认图片浏览器用了很多年。",
    features:[
      "GNOME 桌面的原生看图",
      "缩放、旋转、全屏、幻灯片",
      "EXIF 信息可看，插件可扩展",
      "轻量稳定，占用低",
      "和 GNOME 结合紧密"
    ],
    tags:["系统","终端","CLI"], lang:"C", lic:"GPL-2.0", repo:"GNOME/eog" },

  { name:"GThumb", cat:"sys",
    desc:"图像查看与管理器",
    intro:"GThumb 是 GNOME 下的图像查看与管理工具：看图之外，相册整理、批量重命名、简单编辑也管。比纯查看器功能多一档，轻度管理照片够用。",
    features:[
      "看图之外，相册也能管",
      "批量重命名、缩放、转格式",
      "裁剪、调色这类基础编辑",
      "相机和网络相册可导入",
      "和 GNOME 桌面集成"
    ],
    tags:["系统","终端","CLI"], lang:"C", lic:"GPL-2.0", repo:"GNOME/gthumb" },

  { name:"Shotwell", cat:"sys",
    desc:"照片管理与导入工具",
    intro:"Shotwell 是 GNOME 桌面的照片管理工具：照片导进来，按日期、标签归置，带人脸识别，裁剪调色这类基础编辑也够日常用，Linux 上主流的个人相册方案之一。",
    features:[
      "照片导入、整理，相册管起来",
      "按日期、标签、人脸分组",
      "裁剪、旋转、调色是基础配置",
      "能发布到 Flickr 这类平台",
      "GNOME 原生，界面简洁"
    ],
    tags:["系统","终端","CLI"], lang:"Vala", lic:"LGPL-2.1", repo:"GNOME/shotwell" },

  { name:"Darktable", cat:"sys",
    desc:"开源 RAW 照片处理",
    intro:"Darktable 是 Lightroom 的开源替代，管 RAW 处理整套工作流：编辑非破坏性，暗房、光影、地图各管一段，摄影后期常用。",
    features:[
      "RAW 处理全程非破坏性",
      "暗房模块和预设给得多",
      "标签、地理信息都能用来归照片",
      "批量导出、色彩管理都支持",
      "跨平台开源，社区活跃"
    ],
    tags:["系统","终端","CLI"], lang:"C", lic:"GPL-3.0", repo:"darktable-org/darktable" },

  { name:"RawTherapee", cat:"sys",
    desc:"RAW 照片处理软件",
    intro:"RawTherapee 是开源 RAW 图像处理器，降噪、锐化、色彩这几样口碑好。调整工具细、预览到位，对画质挑剔的摄影爱好者常用它。",
    features:[
      "RAW 解码处理质量高",
      "降噪、锐化、色调工具细",
      "编辑非破坏性，能批处理",
      "相机型号覆盖面宽",
      "开源，跨平台"
    ],
    tags:["系统","终端","CLI"], lang:"CPP", lic:"GPL-3.0", repo:"RawTherapee/RawTherapee" },

  { name:"Digikam", cat:"sys",
    desc:"数字照片管理工具",
    intro:"Digikam 把照片的整理、编辑、导出装进一个开源软件，人脸检测、地理标记、批量处理都有。KDE 社区和摄影爱好者里用它的不少。",
    features:[
      "整理照片，标签、相册都管",
      "人脸识别、地理标记",
      "编辑和特效工具内置一堆",
      "批量重命名、导出、备份",
      "跨平台，跟 KDE 结合好"
    ],
    tags:["系统","终端","CLI"], lang:"CPP", lic:"GPL-2.0", repo:"KDE/digikam" },

  { name:"KPhotoAlbum", cat:"sys",
    desc:"KDE 的照片管理工具",
    intro:"KPhotoAlbum 出自 KDE 社区，长处是标注和搜索：给照片打标签、分组，检索快，照片库铺得很大也翻得动。",
    features:[
      "标注靠标签和分类，灵活",
      "搜索、筛选是它的强项",
      "按时间线、地点翻照片",
      "幻灯片、基本编辑都有",
      "开源，和 KDE 桌面集成"
    ],
    tags:["系统","终端","CLI"], lang:"CPP", lic:"GPL-2.0", repo:"KDE/kphotoalbum" },

  { name:"Photoprism", cat:"sys",
    desc:"自托管 AI 照片管理",
    intro:"PhotoPrism 自托管，靠 AI 自动认照片里的人物、地点和内容，地图、标签翻起来像 Google Photos，数据却留在自己服务器上，隐私这条顾住了。",
    features:[
      "人物、地点、内容由 AI 自动识别",
      "按时间、地图、标签都能翻",
      "RAW 和视频都收，缩略图自动生成",
      "多用户，可生成分享链接",
      "Docker 部署，数据留在自己手里"
    ],
    tags:["系统","终端","CLI"], lang:"Go", lic:"AGPL-3.0", repo:"photoprism/photoprism" },

  { name:"Immich", cat:"sys",
    desc:"自托管照片与视频备份",
    intro:"Immich 定位 Google Photos 的开源替代：自托管照片视频备份，性能扛得住，Web 界面和移动端 App 都好看，自动备份、智能分类、人脸识别齐备。",
    features:[
      "手机自动备份照片和视频",
      "时间线、相册、地图随便翻",
      "AI 认人脸，搜索也智能",
      "RAW、Live Photo 等格式都收",
      "自托管，性能不错，社区活跃"
    ],
    tags:["系统","终端","CLI"], lang:"TypeScript", lic:"AGPL-3.0", repo:"immich-app/immich" },

  { name:"Zulip", cat:"prod",
    desc:"开源团队聊天与协作",
    intro:"Slack 式消息流容易乱，Zulip 换了个思路：对话按「主题（topic）」归成线程，上下文散不掉。异步翻、实时聊都行，开源社区吃这一套。",
    features:[
      "对话按主题组织，上下文不丢",
      "实时聊、异步看都行",
      "搜索和消息回顾好使",
      "GitHub、GitLab 等工具能接",
      "开源，可自托管"
    ],
    tags:["效率","自托管","协作"], lang:"Python", lic:"Apache-2.0", repo:"zulip/zulip" },

  { name:"Mattermost", cat:"prod",
    desc:"开源 Slack 替代团队消息",
    intro:"Mattermost 是可自托管的 Slack 开源替代，卖点在安全与合规：权限切得细，审计能力齐。对数据驻留有要求的组织常选它。",
    features:[
      "频道、私信、线程，聊天件件都有",
      "文件共享、搜索",
      "权限、审计、合规按企业级来",
      "集成与插件生态不小",
      "Go 写的，自托管、私有化都行"
    ],
    tags:["效率","自托管","协作"], lang:"Go", lic:"Apache-2.0", repo:"mattermost/mattermost" },

  { name:"Rocket.Chat", cat:"prod",
    desc:"开源 Slack 替代团队聊天",
    intro:"Rocket.Chat 是 Slack 的开源替代之一：频道、视频会议、客服台、多工作区，摊子铺得全。社区活跃，能接的集成也多。",
    features:[
      "频道、私信、线程、视频通话",
      "omnichannel 客服台，客户消息统一接",
      "多工作区，实例间还能联邦通信",
      "集成和机器人大把",
      "可自托管，数据在自己手里"
    ],
    tags:["效率","自托管","协作"], lang:"JavaScript", lic:"MIT", repo:"RocketChat/Rocket.Chat" },

  { name:"Element", cat:"prod",
    desc:"Matrix 协议聊天客户端",
    intro:"Element 是 Matrix 协议的旗舰客户端：去中心化，端到端加密。消息不押在某一家服务器上，服务器自己挑，甚至自己搭，跨服务器也能互通。",
    features:[
      "端到端加密，用的是 Matrix 的 Olm/Megolm",
      "去中心化，跨服务器通信",
      "群组、语音/视频通话、文件共享",
      "homeserver 可以自建",
      "开源，开发靠社区"
    ],
    tags:["效率","自托管","协作"], lang:"TypeScript", lic:"Apache-2.0", repo:"element-hq/element-web" },

  { name:"Nextcloud Talk", cat:"prod",
    desc:"Nextcloud 视频会议",
    intro:"Nextcloud Talk 把音视频通话和聊天接进你自己的 Nextcloud 云盘，开会不用另找第三方服务。自托管，隐私顾得住，团队在自己的平台上开会。",
    features:[
      "音视频会议，屏幕可共享",
      "Nextcloud 的文件、日历深度打通",
      "通话支持端到端加密（实验性）",
      "自托管，数据不出内网",
      "手机和浏览器端都有"
    ],
    tags:["效率","自托管","协作"], lang:"JavaScript", lic:"AGPL-3.0", repo:"nextcloud/spreed" },

  { name:"Jitsi Meet", cat:"prod",
    desc:"开源视频会议",
    intro:"Jitsi Meet 基于 WebRTC，开会不用注册，浏览器点开链接就进。支持完整自托管，Zoom 的开源替代里，它算部署门槛低的。",
    features:[
      "浏览器直接进会，装客户端都省了",
      "多人视频、共享屏幕、聊天",
      "可整套自托管，数据自己管",
      "端到端加密（实验性）、主持人控制都有",
      "日历、Slack 之类能集成"
    ],
    tags:["效率","自托管","协作"], lang:"JavaScript", lic:"Apache-2.0", repo:"jitsi/jitsi-meet" },

  { name:"BigBlueButton", cat:"prod",
    desc:"开源的在线虚拟教室",
    intro:"BigBlueButton 是开源虚拟教室，为在线教育而做，白板、分组讨论、投票、录制都支持。不少学校和培训机构在用，算是 Zoom 教育版之外的开源选择。",
    features:[
      "互动白板，可多屏共享",
      "分组讨论室，举手与投票",
      "课堂录制，支持回放",
      "能对接 Moodle 等 LMS",
      "可自托管，并发规模撑得住"
    ],
    tags:["效率","自托管","协作"], lang:"Java", lic:"LGPL-3.0", repo:"bigbluebutton/bigbluebutton" },

  { name:"Moodle", cat:"prod",
    desc:"全球最常见的开源 LMS",
    intro:"Moodle 是使用范围最广的开源 LMS，在线课程要用的作业、测验、讨论区、评分都在里面。插件数量大，高校和企业培训里到处能见到。",
    features:[
      "管课程、作业、测验和成绩",
      "讨论区、Wiki 等协作活动",
      "插件与主题扩展数量大",
      "符合 SCORM 等教育标准",
      "自托管，用户规模大也能跑"
    ],
    tags:["效率","自托管","协作"], lang:"PHP", lic:"GPL-3.0", repo:"moodle/moodle" },

  { name:"ClamAV", cat:"net",
    desc:"开源杀毒引擎",
    intro:"ClamAV 主要扫文件和邮件附件里的病毒、恶意软件，是一款开源杀毒引擎。常见部署位置是邮件网关和文件服务器，开源世界的反恶意软件多建立在它上面。",
    features:[
      "按特征库扫描病毒",
      "常接入邮件网关与文件服务器",
      "命令行扫描，也有守护进程模式",
      "病毒库持续更新",
      "开源，大量下游产品用它"
    ],
    tags:["网络","安全","自托管"], lang:"C", lic:"GPL-2.0", repo:"Cisco-Talos/clamav" },

  { name:"Yara", cat:"net",
    desc:"恶意样本识别与分类",
    intro:"YARA 用基于文本的规则描述恶意文件特征，做识别和分类。行话叫它「恶意软件领域的正则表达式」，安全分析师做样本分析、搞威胁情报基本绕不开。",
    features:[
      "规则语法简洁，写文件特征",
      "匹配字符串、字节序列，可设条件",
      "跨平台，命令行或当库调用",
      "样本分类与威胁 hunting 常用",
      "被不少安全产品和流程集成"
    ],
    tags:["网络","安全","自托管"], lang:"C", lic:"BSD-3-Clause", repo:"VirusTotal/yara" },

  { name:"TheHarvester", cat:"net",
    desc:"邮箱与域名信息收集",
    intro:"theHarvester 是一款开源信息收集工具，邮箱、子域名、主机和员工信息都能从搜索引擎与公开数据源拿回来。渗透测试开头那段 OSINT 侦察，常用它。",
    features:[
      "多数据源收集邮箱、子域名",
      "接了数十种搜索引擎与 API",
      "可枚举主机名与开放端口",
      "结果导出成多种格式",
      "命令行轻量，侦察阶段趁手"
    ],
    tags:["网络","安全","自托管"], lang:"Python", lic:"GPL-2.0", repo:"laramies/theHarvester" },

  { name:"BeEF", cat:"net",
    desc:"浏览器攻击框架",
    intro:"BeEF（Browser Exploitation Framework）挂上目标浏览器，演示基于 Web 的攻击链怎么走通。安全研究和红队演练用它，浏览器端的安全风险能直观摆出来。",
    features:[
      "挂钩（hook）浏览器，下发命令",
      "浏览器攻击模块数量多",
      "演示 XSS 等漏洞的实际后果",
      "目标与会话实时管理",
      "限于研究与授权演练"
    ],
    tags:["网络","安全","自托管"], lang:"Ruby", lic:"GPL-2.0", repo:"beefproject/beef" },

  { name:"Kismet", cat:"net",
    desc:"无线网络的探测与入侵检测",
    intro:"Kismet 集探测、嗅探与入侵检测于一身，被动发现并分析 Wi-Fi 网络与设备。支持多网卡和 GPS 定位，做无线安全审计、频谱分析的人都熟。",
    features:[
      "被动扫描，发现 Wi-Fi 网络与设备",
      "深度解析 802.11 协议",
      "多网卡可用，配 GPS 能画图定位",
      "无线入侵检测，异常即时告警",
      "PCAP 等数据可导出再分析"
    ],
    tags:["网络","安全","自托管"], lang:"CPP", lic:"GPL-2.0", repo:"kismetwireless/kismet" },

  { name:"Aircrack-ng", cat:"net",
    desc:"WiFi 安全审计工具",
    intro:"Aircrack-ng 是一整套 WiFi 安全审计工具，抓包、注入、破解 WEP/WPA 密钥都在覆盖范围内。用它评估无线网络安全性，无线安全领域的经典套件。",
    features:[
      "无线抓包，也能注入数据包",
      "破解 WEP/WPA 密钥",
      "多款无线网卡支持 monitor 模式",
      "airmon-ng、aireplay-ng 都包含",
      "纯命令行，审计、教学都合适"
    ],
    tags:["网络","安全","自托管"], lang:"C", lic:"GPL-2.0", repo:"aircrack-ng/aircrack-ng" },

  { name:"Hashcat", cat:"net",
    desc:"密码恢复工具",
    intro:"Hashcat 号称世界上最快的密码恢复工具，哈希算法支持数百种，攻击模式多样，GPU 算力能吃满。密码审计和哈希恢复这一行，它是绕不开的标杆。",
    features:[
      "GPU 加速，恢复速度快",
      "支持 300+ 种哈希类型",
      "字典、规则、掩码、暴力都有",
      "可分布式部署",
      "开源，社区规则与字典资源多"
    ],
    tags:["网络","安全","自托管"], lang:"C", lic:"MIT", repo:"hashcat/hashcat" },

  { name:"John the Ripper", cat:"net",
    desc:"经典离线密码破解",
    intro:"John the Ripper（JtR）是老牌离线密码破解工具，哈希格式与平台支持都广。社区维护的 jumbo 版最流行，密码强度审计的老熟人。",
    features:[
      "哈希与密码格式支持量大",
      "字典、规则、暴力几种打法",
      "哈希类型自动识别",
      "CPU、GPU 与分布式均可",
      "大家用的多是 jumbo 社区版"
    ],
    tags:["网络","安全","自托管"], lang:"C", lic:"GPL-2.0", repo:"openwall/john" },

  /* ---------- 448–500：扩容批次，编号只追加不重排 ---------- */

  { name:"Mermaid",   cat:"dev",
    desc:"用文本写流程图、时序图、甘特图，Markdown 里直接嵌图。",
    intro:"Mermaid 解决的问题很具体：图不想用画图软件画，想跟着代码一起版本管理。语法接近伪代码，几行文字就是一张图，GitHub 的 README、各类笔记和 VS Code 插件都原生支持。我在文档里画调用链和状态机基本都用它，改动走 diff，比贴截图可靠太多。图类型覆盖流程、时序、类图、ER、甘特、状态、用户旅程、架构图，浏览器和命令行都能渲染出 SVG/PNG。",
    features:[
      "文本即图，改动可以走 Git diff 和代码评审",
      "十余种图类型：流程、时序、类、ER、甘特、状态、脑图",
      "GitHub / GitLab / VS Code / 各类笔记原生渲染",
      "支持 classDef 与主题定制，能贴合站点配色",
      "CLI 与浏览器两种渲染方式，可批量导出 SVG/PNG",
      "中文标签直接写进节点，无需额外处理"
    ],
    tags:["图表","Markdown","文档"], lang:"TypeScript", lic:"MIT", repo:"mermaid-js/mermaid" },

  { name:"PlantUML",   cat:"dev",
    desc:"老牌文本绘图工具，UML 全家桶和架构图都能画。",
    intro:"PlantUML 比 Mermaid 更早，语法更贴近 UML 规范，类图、用例图、组件图、部署图这类正式图表更完整。它是 Java 写的，命令行、IDEA/VS Code 插件、在线渲染服务器各种用法都有，输出 SVG/PNG/PDF/HTML。我的经验是：轻量随手画用 Mermaid，需要严格 UML 语义或者画大型系统结构时用 PlantUML，它对布局和关联线的处理更稳。",
    features:[
      "UML 支持最完整：类、序列、用例、组件、部署、状态",
      "也支持架构图、思维导图、甘特、网络拓扑",
      "命令行、IDE 插件、在线渲染服务多种用法",
      "输出 PNG/SVG/PDF/TeX，可接 LaTeX 排版",
      "皮肤参数可调，能统一整套图的观感",
      "多许可并行发布，按版本选合适的即可"
    ],
    tags:["图表","UML","文档"], lang:"Java", lic:"MIT / GPL / LGPL", repo:"plantuml/plantuml" },

  { name:"Graphviz",   cat:"dev",
    desc:"图可视化的底层引擎，用 DOT 语言描述节点与边。",
    intro:"Graphviz 是这一类工具的祖师爷：DOT 语言写节点和边，布局算法负责排布，后来几乎所有文本绘图工具都受它影响。它更适合结构化关系图——依赖关系、状态机、调用图、数据库 schema、编译中间表示。不少分析工具（Doxygen、各类 profiler）背后调的就是它。批量生成图时最实用：程序输出 DOT，命令行跑出图。",
    features:[
      "DOT 语言简洁，可以由程序直接生成",
      "dot / neato / fdp / sfdp / circo / twopi 多种布局",
      "输出 SVG/PNG/PDF/PS，也可只出坐标给前端用",
      "被 Doxygen 与各类依赖分析工具广泛作为后端",
      "大型图布局稳定，上万节点也跑得动",
      "命令行管道友好，适合放进 CI"
    ],
    tags:["图表","CLI","依赖分析"], lang:"C", lic:"Graphviz", repo:"graphviz/graphviz" },

  { name:"Apache ECharts",   cat:"dev",
    desc:"中文生态最成熟的开源图表库，扛得住大数据量交互图表。",
    intro:"ECharts 最初由百度开源、现在挂在 Apache 基金会下，中文文档和示例库是同类里最齐全的。它的强项是数据量大、交互多：百万级散点、时序缩放、联动 tooltip、地图与地理可视化都能扛。做后台报表、监控看板、数据大屏时我优先选它；图表种类不算最杂，但每一种的可配置深度很高。API 是声明式 option 对象，只改数据不碰 DOM。",
    features:[
      "折线、柱状、饼、雷达、热力、桑基、关系图、地图、3D 齐全",
      "Canvas 与 SVG 两种渲染器，移动端可用",
      "数据缩放、联动、刷选等交互内置就有",
      "百万级数据点也不卡",
      "中文文档与示例最完整，排错省时间",
      "可在服务端渲染成图片用于导出"
    ],
    tags:["图表","前端","数据可视化"], lang:"TypeScript", lic:"Apache-2.0", repo:"apache/echarts" },

  { name:"Chart.js",   cat:"dev",
    desc:"轻量 HTML5 Canvas 图表库，几行代码出常见图表。",
    intro:"如果只需要折线、柱状、饼图、雷达这几类常规图，Chart.js 比 ECharts 轻得多：包体积小、API 直白、默认样式耐看。它只做 Canvas 渲染，超大图表性能不如专门的库，但几百到几千数据点完全够用。社区插件不少（数据标签、标注、时间轴），配合各框架都有成熟封装。我的取舍是：报表看板用 ECharts，页面里起点缀作用的图用 Chart.js。",
    features:[
      "常规图表类型全覆盖，默认配色即可上线",
      "一个 config 对象就能出图，上手快",
      "响应式与动画内置，移动端体验好",
      "插件机制清晰，社区扩展多",
      "React / Vue / Svelte 都有成熟封装",
      "体积远小于同类重型图表库"
    ],
    tags:["图表","前端","轻量"], lang:"JavaScript", lic:"MIT", repo:"chartjs/Chart.js" },

  { name:"three.js",   cat:"dev",
    desc:"网页 3D 的事实标准库，WebGL 之上的完整框架。",
    intro:"three.js 让浏览器里做 3D 变成搭场景：建场景、放相机、加网格与材质、挂光照，剩下的 WebGL 细节它替你处理。示例数量惊人，绝大多数网页 3D 效果、粒子背景、产品展示、着色器实验都是在它上面做的。学习曲线不算平，但社区示例足够多，照着示例改比从零写快得多。要放进 React 项目，还有 react-three-fiber 这层封装。",
    features:[
      "几何体、材质、光照、阴影、后期处理一应俱全",
      "GLTF / FBX / OBJ 等主流模型格式导入",
      "ShaderMaterial 可完全自定义效果",
      "示例库庞大，多数效果能直接改",
      "WebGL2 与 WebGPU（TSL）两条路线并行",
      "有 react-three-fiber 等框架封装可选"
    ],
    tags:["前端","3D","WebGL"], lang:"JavaScript", lic:"MIT", repo:"mrdoob/three.js" },

  { name:"Slidev",   cat:"dev",
    desc:"给开发者做的幻灯片：Markdown 写稿，代码高亮一流。",
    intro:"Slidev 用 Markdown 写幻灯片，代码块自带高亮、行号、分步显示，还能在页里直接跑 Vue 组件和 Mermaid 图。导出 PDF、部署成单机 SPA、演讲者模式（备注 + 计时）都有。做技术分享很合适，代码演示比传统办公软件体面得多。它基于 Vite，改文件浏览器实时刷新，写起来像写文档；代价是要接受一点前端工程习惯。",
    features:[
      "Markdown 写稿，前置元数据配置主题与布局",
      "代码块高亮、行高亮、分步显示",
      "内置 Mermaid、LaTeX，可插入交互组件",
      "导出 PDF / PNG，也可部署为静态站点",
      "演讲者模式带备注与计时器",
      "主题与自定义 CSS 灵活，能完全换外观"
    ],
    tags:["幻灯片","Markdown","前端"], lang:"TypeScript", lic:"MIT", repo:"slidevjs/slidev" },

  { name:"FastAPI",   cat:"dev",
    desc:"Python 现代 Web 框架，类型注解顺带生成交互文档。",
    intro:"FastAPI 这几年基本成了 Python 写 API 的默认选择：用类型注解声明请求体和响应模型，校验、序列化、OpenAPI 文档全自动生成，原生支持异步。它底层是 Starlette + Pydantic，性能在 Python 框架里靠前，做模型服务、内部接口、爬虫后端都很顺手。文档质量是它最被称道的部分，示例复制即用。",
    features:[
      "类型注解即校验规则，Pydantic 模型编辑器可补全",
      "自动生成可交互的 OpenAPI / Swagger 文档",
      "原生 async，支持 WebSocket 与 SSE",
      "依赖注入机制简洁，测试时易替换",
      "性能在 Python Web 框架中靠前",
      "与 ML 模型服务、队列任务组合成熟"
    ],
    tags:["后端","API","Python"], lang:"Python", lic:"MIT", repo:"fastapi/fastapi" },

  { name:"Prisma ORM",   cat:"dev",
    desc:"TypeScript 的 ORM：schema 定义模型，类型全程贯通。",
    intro:"Prisma 的思路是把数据库当代码来管：写一份 schema 声明模型与关系，客户端生成后所有查询都带类型，字段改名编译期就报错。迁移文件自动生成，可进 Git。它对任意 SQL 的灵活度一般，但常见 CRUD、事务、关联查询的体验是同类里最舒服的。支持 PostgreSQL、MySQL、SQLite、SQL Server、MongoDB 等。仓库已改名为 prisma/orm。",
    features:[
      "schema 声明模型，客户端查询带完整类型推断",
      "迁移与种子脚本自动生成，可纳入 Git",
      "关联查询与事务处理清晰",
      "支持主流关系库与 MongoDB",
      "Prisma Studio 可可视化浏览编辑数据",
      "Serverless 场景有连接池方案"
    ],
    tags:["数据库","API","TypeScript"], lang:"TypeScript", lic:"Apache-2.0", repo:"prisma/orm" },

  { name:"Lucide",   cat:"design",
    desc:"开源图标库，Feather 的社区后继，风格统一易改。",
    intro:"Lucide 是 Feather Icons 社区分叉后的延续项目，如今图标数量远超原版，线条粗细与尺寸一致，SVG 路径干净，适合直接改 stroke 做定制。官方有 React / Vue / Svelte / Angular 等封装和 Figma 插件，命名规范、搜索好用。我选图标库时通常先看它：风格不杂，日后换库也容易。同类可看 Tabler Icons。",
    features:[
      "一千五百多枚图标，风格与描边宽度统一",
      "SVG 源码干净，改 stroke / size 即可定制",
      "主流前端框架都有官方包",
      "Figma 插件与图标检索站点齐全",
      "ISC 许可，商用无负担",
      "更新频繁，命名保持向后兼容"
    ],
    tags:["图标","设计资源","SVG"], lang:"TypeScript", lic:"ISC", repo:"lucide-icons/lucide" },

  { name:"Tabler Icons",   cat:"design",
    desc:"六千多枚 MIT 许可 SVG 图标，线性与实心两套。",
    intro:"Tabler Icons 是现在体量最大的开源图标集之一，六千多枚，线性（outline）与实心（filled）两套齐备，统一 24px 网格、2px 描边，混用不打架。全部 MIT 许可，SVG 可直接内联。它同样提供各框架组件包、Webfont 和 Figma 源文件。做后台和文档站时我常用它，图标多意味着冷门的语义也能找到对应的一枚。",
    features:[
      "6500+ 图标，outline 与 filled 两套",
      "24px 网格、描边宽度可调，缩放不糊",
      "MIT 许可，无署名要求",
      "React / Vue / Svelte / Solid / Webfont 包齐全",
      "Figma 源文件公开，设计侧可同用",
      "按语义能搜到冷门图标"
    ],
    tags:["图标","设计资源","SVG"], lang:"TypeScript", lic:"MIT", repo:"tabler/tabler-icons" },

  { name:"SVGO",   cat:"design",
    desc:"SVG 优化器：删冗余元数据、压缩路径指令。",
    intro:"SVG 从设计软件导出时常常带着大量元数据、默认属性和可以合并的路径指令，体积大还难读。SVGO 是这类优化的事实标准：可以当 Node 库用，也有 CLI 和各类构建插件，插件式配置能控制优化到什么程度。图标库、图标字体的构建管线里几乎都有它。要注意的是别把需要动画或 JS 钩子的属性顺手删掉，这类文件要收窄配置。",
    features:[
      "移除编辑器元数据、注释与默认属性",
      "合并路径指令、精简数值精度",
      "插件式配置，可按项目调整激进程度",
      "Node API / CLI / 构建插件三种用法",
      "可批量优化上万枚图标",
      "同主题图标还能复用重复路径"
    ],
    tags:["SVG","优化","构建"], lang:"JavaScript", lic:"MIT", repo:"svg/svgo" },

  { name:"ImageOptim",   cat:"design",
    desc:"macOS 上的图片批量压缩工具，以无损为主。",
    intro:"ImageOptim 是 Mac 上很省心的批量图片压缩工具：文件拖进去，它调度 jpegtran、OptiPNG、GIFSicle 等成熟命令行工具做无损优化，还能顺手剥离 GPS 与相机 EXIF。想更激进可以勾选有损档和 WebP / AVIF 转换。它本质是 GUI 壳，引擎都是老牌命令行工具，结果可预期、可复现。",
    features:[
      "拖入即批处理，PNG / JPG / GIF / WebP 通吃",
      "无损优化为主，可选有损与格式转换",
      "自动剥离 EXIF / GPS 等隐私元数据",
      "底层是 jpegtran、OptiPNG、GIFSicle 等成熟引擎",
      "前后体积对比直观，收益一目了然",
      "Mac 原生，界面极简"
    ],
    tags:["图片","优化","macOS"], lang:"Swift", lic:"GPL-2.0", repo:"ImageOptim/ImageOptim" },

  { name:"Terraform",   cat:"host",
    desc:"用配置文件描述云资源，基础设施也能版本管理。",
    intro:"Terraform 把云上的机器、网络、域名、数据库写成一个 .tf 文件，`plan` 先看差异、`apply` 再执行，状态文件记录现实与配置的差距。它的价值不在省时间，而在可复现和可评审：环境搭建过程进了 Git，换人接手不至于靠口头传承。Provider 覆盖面同类里最广，云厂商、DNS、CDN、K8s 都有。2023 年许可改为 BUSL-1.1，自建有顾虑可以看 OpenTofu。",
    features:[
      "HCL 声明式配置，plan / apply 流程清晰",
      "Provider 生态覆盖几乎所有云与 SaaS",
      "state 状态管理，支持远端存储与锁",
      "模块化复用，一套模块多环境复用",
      "工作流可进 CI，变更走代码评审",
      "许可为 BUSL-1.1，社区分支有 OpenTofu"
    ],
    tags:["部署","云","DevOps"], lang:"Go", lic:"BUSL-1.1", repo:"hashicorp/terraform" },

  { name:"k9s",   cat:"host",
    desc:"Kubernetes 的终端界面，一个窗口看遍集群。",
    intro:"kubectl 的输出读起来累，k9s 把集群变成可导航的终端界面：上下键切资源，回车看详情，热键做 scale、日志、shell、port-forward。它比Lens轻，SSH 隧道一连就能管远程集群，日常排查 Pod、看事件、翻日志效率明显高于一行行敲 kubectl。资源视图可按 namespace 过滤，也能自定义快捷命令。",
    features:[
      "终端里的资源浏览器，键盘导航为主",
      "日志、事件、exec、port-forward 热键直达",
      "支持 scale / rollout / 删除等常用操作",
      "多集群多上下文切换方便",
      "可自定义插件与快捷键",
      "跨平台单二进制，SSH 隧道即可用"
    ],
    tags:["Kubernetes","CLI","终端"], lang:"Go", lic:"Apache-2.0", repo:"derailed/k9s" },

  { name:"Argo CD",   cat:"host",
    desc:"Kubernetes 的 GitOps 持续部署工具。",
    intro:"Argo CD 的思路是「Git 里写的就是集群应该有的样子」：它持续比对仓库里的清单与集群实际状态，有偏差就同步或提示。部署历史、回滚、健康状态在 Web UI 里一目了然，多集群多环境管理也成熟。相比自己写 CI 脚本推 kubectl，它的优势是可观测与可审计——谁改的、什么时候同步的、为什么失败都能查。同类的还有 Flux CD。",
    features:[
      "持续比对 Git 与集群状态，自动或手动同步",
      "Web UI 展示应用健康度与同步历史",
      "支持 Helm、Kustomize、原生清单混用",
      "多集群、多项目、RBAC 权限划分完善",
      "回滚到任意历史版本",
      "可与 GitHub / GitLab 的 PR 流程联动"
    ],
    tags:["Kubernetes","DevOps","自托管"], lang:"Go", lic:"Apache-2.0", repo:"argoproj/argo-cd" },

  { name:"Dokku",   cat:"host",
    desc:"一台服务器上的自建 Heroku，git push 即部署。",
    intro:"Dokku 是最轻的「自带 PaaS」方案：在一台 VPS 上装好，之后部署就是 `git push dokku main`，它负责构建、起容器、配反向代理、挂letsencrypt 证书。插件机制能加数据库、备份、蓝绿发布。适合个人项目和小型服务——不想为三个小应用付三笔托管费，也不想自己写 Nginx + systemd 那一整套。比 Coolify 更极简，配置方式偏命令行。",
    features:[
      "git push 触发构建与上线，体验接近 Heroku",
      "自动反向代理与 Let's Encrypt 证书",
      "支持 buildpacks 与 Dockerfile 两种构建",
      "插件生态：数据库、备份、调度等",
      "单机友好，1GB 内存的小机器也能跑",
      "文档扎实，部署流程可完全自定义"
    ],
    tags:["部署","服务器","自托管"], lang:"Shell", lic:"MIT", repo:"dokku/dokku" },

  { name:"Coolify",   cat:"host",
    desc:"开源自建应用托管面板，替代 Heroku / Vercel。",
    intro:"Coolify 把「自己买服务器部署应用」这件事做成了图形面板：连上 Git 仓库，选应用类型，它自动构建、起容器、配域名和证书，数据库、Redis、备份这些依赖也能一键挂上。它同时管多台服务器，界面现代，是这两年自托管圈最热门的项目之一。适合想把 Vercel / Railway 的花费换成一台 VPS 的人。",
    features:[
      "Git 仓库推到自动部署，支持 Docker / Nix / 静态站",
      "域名、反向代理、SSL 证书自动配置",
      "内置数据库、Redis、对象存储等服务模板",
      "可管理多台远程服务器",
      "备份、监控、告警一并带上",
      "自托管，数据与控制权都在自己手里"
    ],
    tags:["部署","面板","自托管"], lang:"PHP", lic:"Apache-2.0", repo:"coollabsio/coolify" },

  { name:"Nginx Proxy Manager",   cat:"host",
    desc:"带 Web 界面的 Nginx 反代管理器，配域名证书点几下。",
    intro:"自建服务最烦的是重复配 Nginx：加个域名、签发证书、配转发、跳转 HTTPS。Nginx Proxy Manager 用 Docker 起一个容器，之后这些都在网页上点：填域名和上游端口，Let's Encrypt 自动签发续期，重定向、访问控制、代理头都能配。NAS 和家用服务器上几乎成了标配。进阶需求（自定义 location、限流）可以挂额外配置文件。",
    features:[
      "图形界面配置反向代理与转发规则",
      "Let's Encrypt 自动签发与续期，支持 DNS 验证",
      "HTTP 跳转、SSL 参数、代理头可调",
      "支持访问授权、自定义 404、重定向",
      "Docker 一键部署，数据持久化简单",
      "家用 NAS 上跑没有负担"
    ],
    tags:["服务器","HTTPS","自托管"], lang:"JavaScript", lic:"MIT", repo:"NginxProxyManager/nginx-proxy-manager" },

  { name:"Halo",   cat:"host",
    desc:"国产开源建站工具，博客与内容站都行。",
    intro:"Halo 是国产的开源建站程序，定位在博客与内容站之间：写作体验顺手，主题和插件有市场，后台是中文的，SEO 与站点设置项齐全。Java 后端配 Docker 部署很省事，数据在本地数据库里，导出迁移不难。相比 Hexo / Hugo 这类静态生成器，它更像 WordPress——在线编辑、即时发布，代价是要维护一个运行中的服务。",
    features:[
      "在线编辑发布，支持 Markdown 与所见即所得",
      "主题与插件生态，官方市场可安装",
      "后台中文，站点设置与分类标签完善",
      "Docker 部署简单，支持 MySQL / PostgreSQL / H2",
      "自带评论系统与反垃圾选项",
      "中文社区活跃，遇到问题好找答案"
    ],
    tags:["建站","博客","自托管"], lang:"Java", lic:"GPL-3.0", repo:"halo-dev/halo" },

  { name:"PeerTube",   cat:"host",
    desc:"P2P federated 视频平台，自己搭一个「不卡的 YouTube」",
    intro:"PeerTube 由 Framasoft 发起，特点是去中心化：实例之间互相联邦（ActivityPub），观众观看时同时帮别人分发（WebTorrent），所以带宽成本不会随播放量线性爆炸。功能上像简化版 YouTube——频道、播放列表、弹幕式评论、直播都有。适合做机构或兴趣社群的视频站，不适合指望它做出 YouTube 级别的推荐。",
    features:[
      "实例间联邦，观众也能看到其他实例的内容",
      "WebTorrent P2P 分发，服务器带宽压力小",
      "频道、播放列表、缩略图、字幕齐全",
      "支持直播与回放",
      "AGPL 许可，可自由修改部署",
      "moderation 与配额机制适合社群运营"
    ],
    tags:["视频","自托管","联邦"], lang:"TypeScript", lic:"AGPL-3.0", repo:"chocobozzz/PeerTube" },

  { name:"Owncast",   cat:"host",
    desc:"单人自托管直播服务器，OBS 推流即可开播。",
    intro:"Owncast 是一体化的自托管直播方案：装好之后 OBS 推 RTMP，它给出嵌入页面、聊天、观看统计，还能接 Fediverse 做推广。它不做转码集群、不追求多路高并发，定位就是个人主播、内部直播、课程直播这种一路流的场景。轻量、单二进制、Docker 都行，树莓派级别的机器也能跑。",
    features:[
      "RTMP 推流即用，OBS 直接对接",
      "内置聊天、表情、观看时长统计",
      "播放器可嵌入自己网站",
      "支持联邦（ActivityPub）与 Webhook 扩展",
      "轻量单实例，小机器可跑",
      "MIT 许可，自定义外观容易"
    ],
    tags:["直播","自托管","视频"], lang:"Go", lic:"MIT", repo:"owncast/owncast" },

  { name:"Mealie",   cat:"host",
    desc:"自托管食谱管理：抓网页食谱，购物清单和餐食计划",
    intro:"Mealie 解决的痛点很生活化：网页食谱格式乱、广告多，它支持粘贴 URL 自动抓取成结构化食谱，也能手动录入，然后按食材生成购物清单、做一周餐食计划。界面清爽，移动端友好，多用户共享一个实例，数据在自己数据库里可导出。自托管家庭工具里它属于「装完真的会天天用」的那类。",
    features:[
      "粘贴链接自动抓取网页食谱",
      "食材、步骤、营养、图片结构化管理",
      "购物清单与餐食计划",
      "多用户与家庭共享，支持移动端",
      "支持标签、收藏、全文搜索",
      "数据可导出，备份简单"
    ],
    tags:["自托管","生活","家庭"], lang:"Python", lic:"AGPL-3.0", repo:"mealie-recipes/mealie" },

  { name:"Home Assistant",   cat:"host",
    desc:"开源自建智能家居中枢，本地控制各种品牌设备。",
    intro:"Home Assistant 是自建智能家居的事实标准：一个运行在家里机器上的中枢，把各种品牌、各种协议（Zigbee、Matter、Wi-Fi、蓝牙、红外）的设备统一接入，自动化规则本地执行，不依赖厂商云。集成数量以千计，仪表盘可自己拼，社区插件（HACS）装什么都有。隐私敏感、又不想被单一生态绑死的话，它是唯一合理选择。",
    features:[
      "集成数千种设备与服务，国产设备也有社区集成",
      "自动化规则本地执行，断网也能用",
      "仪表盘与卡片可自由组合",
      "支持 Zigbee / Matter / MQTT 等协议接入",
      "社区插件与官方加载项丰富",
      "语音助手与本地 TTS/STT 可接"
    ],
    tags:["智能家居","自托管","NAS"], lang:"Python", lic:"Apache-2.0", repo:"home-assistant/core" },

  { name:"Keycloak",   cat:"host",
    desc:"企业级开源身份与访问管理，SSO 与单点登录。",
    intro:"Keycloak 做登录体系里那些麻烦事：单点登录、OAuth2 / OIDC / SAML、社交账号登录、双因素、密码策略、用户目录与角色权限。把它接进自己的应用，登录页面、令牌签发、会话管理都不用写。Red Hat 背书、文档和后台都很完备，代价是它是个 Java 服务，管理界面概念较多，小项目会觉得重。轻量替代可看 Authentik 或 Ory。",
    features:[
      "支持 OIDC / OAuth2 / SAML 三种主流协议",
      "realms 多租户，用户目录与角色组管理",
      "社交登录与身份源联合（IdP brokering）",
      "双因素、密码策略、会话与令牌可细配",
      "主题可定制登录页外观",
      "后台完备，审计与事件记录齐全"
    ],
    tags:["安全","自托管","身份"], lang:"Java", lic:"Apache-2.0", repo:"keycloak/keycloak" },

  { name:"Authentik",   cat:"host",
    desc:"面向自托管的认证中心，SSO、MFA、代理认证。",
    intro:"Authentik 是自托管圈里做统一登录的另一个选择：OIDC / OAuth2 / SAML 都支持，MFA、LDAP、社交登录、群组与权限都有，特色是可编排的 flow（登录流程可视化拼装）和 proxy provider——套在应用前面就能加登录，不用改应用代码。策略引擎可以写 Python 片段做精细控制。界面比 Keycloak 现代，上手也更平缓。",
    features:[
      "OIDC / OAuth2 / SAML 全覆盖",
      "可编排登录流程（stage / policy / flow）",
      "Proxy provider 给任意应用加前置登录",
      "MFA、WebAuthn、密码策略、LDAP 同步",
      "策略可写 Python 片段，灵活度高",
      "Docker Compose 部署，社区文档多"
    ],
    tags:["安全","自托管","身份"], lang:"Python", lic:"MIT", repo:"goauthentik/authentik" },

  { name:"Synapse",   cat:"host",
    desc:"Matrix 协议的官方主服务器实现，自建聊天服务器。",
    intro:"想自建一套可控的即时通讯，Matrix 是常见答案，Synapse 就是它的服务端参考实现：房间、端到端加密、跨服务器联邦、桥接（Telegram / Slack / IRC / Discord）都有。用 Element 做客户端，体验和主流 IM 接近。要提醒的是 Synapse 用 Python 写得偏重，人多的房间吃内存，规模大可以换 Dendrite 或 Conduit 这类轻量实现。",
    features:[
      "Matrix 协议参考实现，功能最完整",
      "端到端加密与跨服务器联邦",
      "各类桥接：Telegram、Slack、IRC、Discord",
      "配合 Element 客户端体验接近主流 IM",
      "支持应用服务与机器人扩展",
      "AGPL 许可，可自由修改自建"
    ],
    tags:["通讯","自托管","安全"], lang:"Python", lic:"AGPL-3.0", repo:"element-hq/synapse" },

  { name:"PostHog",   cat:"host",
    desc:"开源自建的产品分析：事件、漏斗、录屏、A/B 实验。",
    intro:"PostHog 把 Google Analytics + Mixpanel + Hotjar 那套能力打包成一个可自托管的服务：事件采集、漏斗、留存、路径、会话录屏、Feature Flag、A/B 实验。SDK 覆盖主流框架，SQL 查询界面可以直接查自己的数据。数据放自己机器上，对合规和隐私敏感的项目友好；用官方云也能先试。它属于「装完会长期用」的分析工具。",
    features:[
      "事件、漏斗、留存、路径、热力图一体",
      "会话录屏与回放",
      "Feature Flag 与 A/B 实验内置",
      "SQL 直接查询自有数据",
      "自托管或官方云两种用法",
      "Cookie 友好，可不用同意横幅的模式"
    ],
    tags:["分析","自托管","DevOps"], lang:"TypeScript", lic:"MIT", repo:"posthog/posthog" },

  { name:"Memos",   cat:"host",
    desc:"自托管的碎片笔记流，界面像轻版 Twitter。",
    intro:"Memos 是「随手记一句」的自托管服务：单二进制或 Docker 起一个实例，打开就是一个时间线，写想法、贴代码、传图，用 #标签 和可见性控制组织。它有 Web、iOS、Android 客户端和 API，数据完全在自己手里，导出是纯文本友好格式。适合替代 flomo / Twitter 收藏夹这类碎片记录场景，不承担长文写作。",
    features:[
      "时间线式记录，输入框常驻，写一句就走",
      "标签、可见性（公开/受限/私密）与置顶",
      "支持图片、代码块、Markdown 渲染",
      "Web / iOS / Android 客户端与 REST API",
      "单二进制部署，SQLite 存储易备份",
      "可发布成公开博客式页面"
    ],
    tags:["笔记","自托管","效率"], lang:"Go", lic:"MIT", repo:"usememos/memos" },

  { name:"SumatraPDF",   cat:"prod",
    desc:"Windows 上极轻量的 PDF / EPUB / 漫画阅读器。",
    intro:"SumatraPDF 只做一件事：把 PDF、EPUB、MOBI、CBZ、CHM、XPS、DjVu 打开得又快又小。启动基本是瞬时的，内存占用低，界面没有几个多余控件，键盘快捷键齐全（方向键翻页、F11 全屏、Ctrl+F 搜索）。它没有批注和管理功能，但作为「只想快点看完这份文档」的默认阅读器，Windows 上很难找到更合适的。开源，便携版可放 U 盘。",
    features:[
      "秒开大文件，内存占用很小",
      "支持 PDF / EPUB / MOBI / CBZ / CHM / DjVu / XPS",
      "快捷键完整，翻页与搜索顺手",
      "可设为系统默认阅读器，支持命令行参数",
      "便携版免安装，可放移动盘",
      "界面极简，无广告无后台"
    ],
    tags:["PDF","阅读","Windows"], lang:"C++", lic:"GPL-3.0", repo:"sumatrapdfreader/sumatrapdf" },

  { name:"calibre",   cat:"prod",
    desc:"电子书图书馆：管理、转换、传书到阅读器。",
    intro:"calibre 是电子书管理这一件事上做得最全的软件：书库、元数据编辑、封面抓取、格式转换（EPUB / AZW3 / PDF / TXT 互转）、新闻订阅推送、直接传到 Kindle / Kobo。它的转换引擎质量高，复杂排版也能处理得差不多。界面信息密度大、按钮多，新手要花点时间适应，但一旦建好库，其它工具很难替代。跨平台，插件也多。",
    features:[
      "书库管理：元数据、标签、系列、封面批量编辑",
      "格式转换引擎强，EPUB / AZW3 / PDF / DOCX 互转",
      "内置阅读器，支持排版调整与字典",
      "新闻源抓取并排版成电子书",
      "可直接管理 Kindle、Kobo 等设备",
      "插件与自动化（calibredb）扩展空间大"
    ],
    tags:["电子书","阅读","图书管理"], lang:"Python", lic:"GPL-3.0", repo:"kovidgoyal/calibre" },

  { name:"KOReader",   cat:"prod",
    desc:"开源电子书阅读器固件，墨水屏上的瑞士军刀。",
    intro:"KOReader 是给 Kobo、Kindle、PocketBook 等墨水屏设备做的第三方阅读软件（部分机型可刷成固件层运行）。它的排版控制细到标点悬挂、对比度、渲染缓存级别，PDF 支持裁边、重排、切边与加深，是墨水屏上读扫描版 PDF 的最佳方案。也支持 EPUB、DjVu、CBZ、TXT，带字典、维基查询、同步标注。界面偏工程化，配置项极多。",
    features:[
      "PDF 处理强：裁边、重排、加深、切白边",
      "排版参数细到字体、连字、标点悬挂",
      "支持 EPUB / DJVU / CBZ / TXT / 扫描版 PDF",
      "字典、维基、翻译查询内置",
      "可与 calibre 同步标注与进度",
      "亮度、对比度、刷新方式按页可调"
    ],
    tags:["电子书","阅读","墨水屏"], lang:"C++", lic:"AGPL-3.0", repo:"koreader/koreader" },

  { name:"OpenProject",   cat:"prod",
    desc:"开源自建的项目管理：任务、甘特、敏捷看板。",
    intro:"OpenProject 是自建项目管理里功能最完整的一个：工作项、看板、Scrum 与瀑布混合、甘特图与关键路径、工时、成本、Wiki、论坛、版本规划都能在一个实例里做完。社区版免费自托管，企业版收费加支持。相比 Jira 它更偏传统工程与研究机构的使用习惯，权限与项目结构严谨；上手成本比 Trello 那类高。",
    features:[
      "工作项、看板、Sprint 与甘特图一体",
      "甘特支持基线、依赖与关键路径",
      "工时与成本统计，报表可导出",
      "Wiki、论坛、会议记录等项目协作文档",
      "细粒度权限与项目模板",
      "社区版可自托管，Docker 部署成熟"
    ],
    tags:["项目管理","自托管","协作"], lang:"Ruby", lic:"GPL-3.0", repo:"opf/openproject" },

  { name:"Twenty",   cat:"prod",
    desc:"开源自建 CRM，界面和用法接近现代 SaaS。",
    intro:"Twenty 想做的是「开源版 Salesforce 里常用的那一小块」：客户、联系人、机会、活动的时间线，界面质感明显比传统开源 CRM 现代，数据模型可自定义字段与视图，支持导入导出和 API。用 TypeScript 写，前后端分离，自托管一套 Docker 就能跑。团队想脱离 Salesforce / HubSpot 的按人头收费，又不想忍受老旧界面时，它是现在最像样的选择。",
    features:[
      "客户 / 联系人 / 机会的完整销售流程",
      "字段与视图可自定义，支持自定义对象",
      "界面现代，操作接近主流 SaaS",
      "批量导入导出与 REST / GraphQL API",
      "自托管，数据不出自己环境",
      "AGPL 许可，可二次开发"
    ],
    tags:["CRM","自托管","协作"], lang:"TypeScript", lic:"AGPL-3.0", repo:"twentyhq/twenty" },

  { name:"Firefly III",   cat:"prod",
    desc:"自托管的个人记账系统，规则化分类与报表。",
    intro:"Firefly III 是个人财务管理工具，理念接近记账版数据库：交易进来，按规则自动分类到账户、预算、标签，报表按时间/类别/账户切。支持定期交易、账单、复式记账逻辑、从 CSV / 银行导入，也能通过 API 或浏览器扩展录入。数据完全在自己服务器上。它不帮你联网抓银行流水，但把「记账 + 复盘」这件事做得很扎实。",
    features:[
      "交易、预算、账户、标签多层分类",
      "规则引擎自动归类导入的流水",
      "报表按时间、类别、账户切分",
      "CSV / OFX / QIF 导入与导出",
      "定期交易与账单提醒",
      "API 完善，可做自动录入脚本"
    ],
    tags:["记账","自托管","效率"], lang:"PHP", lic:"AGPL-3.0", repo:"firefly-iii/firefly-iii" },

  { name:"Anki",   cat:"prod",
    desc:"间隔重复记忆卡片，背单词与备考的老牌工具。",
    intro:"Anki 的核心是间隔重复算法：记住的卡片间隔拉长，忘了的短期重现，复习效率远高于自己划线重读。卡片支持图片、音频、LaTeX、代码、语法高亮和 Cloze 填空，牌组与标签组织，共享牌组可以直接下载别人做好的。桌面、网页、手机（AnkiMobile / AnkiDroid）全平台同步，插件数量很大。学语言、背法条医学术语，它是我用过最耐用的一个。",
    features:[
      "间隔重复算法（FSRS 可选），复习量小",
      "卡片支持图片、音频、代码、填空",
      "牌组 / 标签 / 筛选牌组灵活组织",
      "全平台客户端，官方同步或自建同步服务器",
      "插件生态庞大，可改界面与算法",
      "共享牌组可直接下载"
    ],
    tags:["学习","记忆","笔记"], lang:"Rust", lic:"GPL-3.0", repo:"ankitects/anki" },

  { name:"Trilium Notes",   cat:"prod",
    desc:"层级式个人知识库，支持脚本与关系图谱。",
    intro:"Trilium 把笔记做成一棵可无限展开的树，同一条笔记可以挂在多个位置（克隆而非复制），笔记之间还能定义关系（父子、引用、别名），形成一个可查询的个人知识库。它的特色是「笔记可编程」：脚本笔记能读写其它笔记、生成页面、做小工具，还能把笔记发布成网页。自托管服务端 + 桌面客户端，数据在自己手里。维护分支 TriliumNext 现在更活跃。",
    features:[
      "层级树 + 克隆，一条笔记多处出现",
      "笔记间关系与属性可查询、可建图谱",
      "脚本笔记可读写其它笔记，做自动化工具",
      "支持富文本与 Markdown 两种编辑器",
      "可发布笔记为公开网页或保护页面",
      "自托管同步，桌面与网页端都有"
    ],
    tags:["笔记","知识库","自托管"], lang:"TypeScript", lic:"AGPL-3.0", repo:"TriliumNext/Trilium" },

  { name:"yt-dlp",   cat:"media",
    desc:"命令行音视频下载器，支持上千个站点。",
    intro:"yt-dlp 是 youtube-dl 的社区延续分支，也是现在下载类工具里最活跃的一个：支持上千个站点，自动选最高可用清晰度、合并音视频轨、下字幕与缩略图、按播放列表批量下、限速与代理都能配。浏览器 Cookie 可直接复用登录态。它没有图形界面，全靠参数和配置文件，但把常用的几组参数存成 alias，日常用起来比各种下载软件可靠得多——站点改版后社区通常几小时就修复。",
    features:[
      "支持上千站点，更新频率高",
      "自动选择清晰度并合并音视频轨",
      "字幕、章节、缩略图、元数据可一并抓取",
      "播放列表与批量下载，支持输出模板",
      "可读浏览器 Cookie 处理登录内容",
      "配置文件与别名让常用参数固定下来"
    ],
    tags:["下载","CLI","视频"], lang:"Python", lic:"Unlicense", repo:"yt-dlp/yt-dlp" },

  { name:"Streamlink",   cat:"media",
    desc:"把直播流转给播放器观看，也能存成文件。",
    intro:"Streamlink 的思路是「抓到直播流，直接喂给 VLC / mpv 播放」，避免网页播放器的高延迟与广告。它支持 Twitch、YouTube Live、多家国内与海外平台，能选画质、多路输出、录制保存为文件，也能配插件与 hooks 做自动化。命令行工具，配合播放器缓存设置，看直播的延迟和画质都比浏览器好。录制任务写进脚本就能定时跑。",
    features:[
      "直播流直连播放器，延迟低于网页",
      "支持多家国内外直播平台",
      "可选画质，可保存为 mkv / ts",
      "支持插件与 hooks 扩展",
      "与 mpv / VLC 组合体验好",
      "CLI 友好，可写脚本定时录制"
    ],
    tags:["直播","视频","CLI"], lang:"Python", lic:"BSD-2-Clause", repo:"streamlink/streamlink" },

  { name:"Olive",   cat:"media",
    desc:"开源非线性视频编辑器，目标是做达芬奇之外的选择。",
    intro:"Olive 是社区在做的开源非线性视频编辑器，定位对标的不是 iMovie 而是达芬奇 / Vegas 这一档：节点式合成、多轨时间线、代理工作流、色彩管理。它还在开发阶段，功能不如成熟软件齐，稳定性也要挑版本，但方向和代码质量都受好评，长期关注开源剪辑的人基本都盯着它。要立刻干活，还是先考虑 Kdenlive 或 Shotcut。",
    features:[
      "节点式合成，接近专业软件的思路",
      "多轨时间线与关键帧动画",
      "代理剪辑与大素材工作流",
      "跨平台，支持 Windows / Linux / macOS",
      "色彩管理与格式支持在持续改进",
      "GPL 许可，社区开发活跃"
    ],
    tags:["视频剪辑","开源替代","创作"], lang:"C++", lic:"GPL-3.0", repo:"olive-editor/olive" },

  { name:"Strawberry",   cat:"media",
    desc:"本地音乐库播放器，Clementine 的延续分支。",
    intro:"Strawberry 是 Clementine 的社区分叉，延续了「本地音乐库为主」的思路：按艺术家 / 专辑组织，标签编辑、转码、批量抓取封面与歌词、支持 cue 分轨，还能连各种云端音乐服务。Qt 界面朴素但信息密度高，播放列表与队列管理好用，收藏本地 FLAC 的人用起来很顺。它也是少数仍在维护 cue sheet、多碟专辑这类细节的现代播放器。",
    features:[
      "本地音乐库管理，按专辑与艺术家组织",
      "标签编辑、批量转码、封面与歌词抓取",
      "支持 cue sheet、多碟专辑等细节",
      "可接云端音乐服务与网络电台",
      "播放队列与过滤搜索好用",
      "跨平台，包管理器里都有"
    ],
    tags:["音乐","播放器","本地库"], lang:"C++", lic:"GPL-3.0", repo:"strawberrymusicplayer/strawberry" },

  { name:"whisper.cpp",   cat:"ai",
    desc:"用 C/C++ 跑 Whisper 语音转文字，本地 CPU 也能实时。",
    intro:"whisper.cpp 把 OpenAI 的 Whisper 模型移植到纯 C/C++ 与 ggml 张量库上，Python、GPU 都不用：笔记本 CPU 上 tiny/base 档接近实时，量化后内存占用很小。提供命令行、库接口、示例服务，也能做语音翻译和说话人分段。做本地字幕、会议记录、隐私敏感的音频，它启动成本最低。同类还有 faster-whisper（Python，GPU 更快）。",
    features:[
      "纯 C/C++ 实现，无需 Python 环境",
      "CPU 上即可跑，模型量化后占用低",
      "支持主流 Whisper 各尺寸模型与 gguf 格式",
      "命令行、库、HTTP 服务多种用法",
      "可输出 SRT / VTT / JSON 与时间戳",
      "支持 OpenBLAS / Metal / CUDA 加速后端"
    ],
    tags:["语音","本地模型","CLI"], lang:"C++", lic:"MIT", repo:"ggml-org/whisper.cpp" },

  { name:"LlamaIndex",   cat:"ai",
    desc:"把自有文档接给大模型的框架：索引、检索、RAG。",
    intro:"LlamaIndex 专管「让模型读你的资料」这一环：加载各种来源（PDF、Notion、数据库、网页），切块、建索引（向量、关键词、知识图谱），检索时做重排与组合，再交给模型回答。它比从零拼 embedding + 向量库省事，抽象层次多，可按需要只用其中一部分。和 LlamaIndex 相对的是 LangChain：后者偏流程编排，前者偏数据接入与检索质量。",
    features:[
      "数百种数据读取器与文件格式支持",
      "向量 / 关键词 / 混合检索与重排",
      "索引持久化，可换多种向量数据库",
      "查询引擎、Agent、路由可组合",
      "知识图谱索引与结构化抽取",
      "与主流模型和框架互通"
    ],
    tags:["AI","RAG","Python"], lang:"Python", lic:"MIT", repo:"run-llama/llama_index" },

  { name:"Open WebUI",   cat:"ai",
    desc:"自建的大模型对话界面，接 Ollama 与各家 API。",
    intro:"Open WebUI 是自托管的 ChatGPT 风格前端：本地 Ollama 模型、OpenAI 兼容 API、各类网关都能接，界面里有知识库（RAG）、工具与函数、多用户与权限、提示词商店、语音与图像。它是这两年自建 AI 环境里最常被装上的一个，功能密度高但部署只是一条 Docker 命令。企业场景注意它的许可带商用限制条款，自使用前要看一遍 LICENSE。",
    features:[
      "接 Ollama、OpenAI 兼容接口与多家网关",
      "内置 RAG 知识库与文档检索",
      "工具 / 函数 / 工作流可自定义扩展",
      "多用户、权限组与审计",
      "提示词与模型预设可分享",
      "离线自托管，数据不出内网"
    ],
    tags:["AI","自托管","本地模型"], lang:"Python", lic:"Open WebUI License", repo:"open-webui/open-webui" },

  { name:"LobeHub",   cat:"ai",
    desc:"开源的 AI 对话与智能体工作台，原名 Lobe Chat。",
    intro:"LobeHub（原 Lobe Chat）是界面出了名精致的开源 AI 聊天前端：多模型接入、助手市场、插件与工具调用、语音、文生图、知识库，支持自托管到 Vercel 或自建服务器。2025 年从聊天客户端往团队协作与智能体平台扩展，改名 LobeHub，仓库也从 lobehub/lobe-chat 变为 lobehub/lobehub。想要装好就能用、界面好看的 AI 工作台，它比同类省事。",
    features:[
      "多模型接入，含各家 API 与本地端点",
      "助手市场与可分享的对话",
      "插件 / 工具调用、文生图、TTS/STT",
      "自托管部署简单（Docker / Vercel）",
      "界面与交互是同类里最好的之一",
      "支持移动端与 PWA"
    ],
    tags:["AI","客户端","自托管"], lang:"TypeScript", lic:"Apache-2.0", repo:"lobehub/lobehub" },

  { name:"NetBird",   cat:"net",
    desc:"开源零配置组网，把分散设备拼成一个加密内网。",
    intro:"NetBird 用 WireGuard 把你在各处机器（家里 NAS、VPS、笔记本、手机）拼进同一个虚拟局域网，设备之间端到端加密，P2P 打不通时自动走中继。相比自己搭 Tailscale 自建控制面或手写 WireGuard 配置，它上手很顺：装客户端、登录、其它设备就出现了。还能按组做访问控制、开 MFA 与 SSO。同类可看 Headscale + Tailscale。",
    features:[
      "WireGuard 内核，性能接近直连",
      "自动发现与 P2P 打洞，失败走中继",
      "跨平台客户端，含移动端与路由器",
      "群组 ACL、SSO、MFA 等访问控制",
      "可完全自建控制面",
      "零配置上手，比手写 WireGuard 快"
    ],
    tags:["内网","VPN","自托管"], lang:"Go", lic:"BSD-3-Clause", repo:"netbirdio/netbird" },

  { name:"Xray-core",   cat:"net",
    desc:"代理内核，支持 VLESS / Reality / Trojan 等协议。",
    intro:"Xray-core 是 v2fly 分支出来的代理平台，协议支持最全：VLESS、Trojan、Shadowsocks、WireGuard 代理、SOCKS、HTTP，还有抗探测的 Reality 传输。它是内核而非客户端：服务端配 Xray，客户端一般用 v2rayN、v2rayNG、sing-box 等前端。JSON 配置参数多，吃透每个字段再抄配置更稳妥。自建出入站、分流规则时它最灵活。",
    features:[
      "协议覆盖全：VLESS / Trojan / SS / WKCP / gRPC",
      "Reality 传输抗探测",
      "路由分流、DNS、传输层参数细粒度可调",
      "多入口多出口同进程管理",
      "配套客户端生态成熟",
      "MPL-2.0 许可，可商用集成"
    ],
    tags:["网络","代理","安全"], lang:"Go", lic:"MPL-2.0", repo:"XTLS/Xray-core" },

  { name:"qBittorrent",   cat:"net",
    desc:"无广告的开源 BT 客户端，功能与界面平衡得好。",
    intro:"qBittorrent 是目前最多人用的开源 BT 客户端：界面干净、无广告无捆绑，搜索插件、RSS 自动订阅、顺序下载、带宽调度、远程 Web UI 都有。它基于 libtorrent，资源占用比 µTorrent 低，配置项细但不至于看不懂。Enqueue / 分类规则配合 RSS，做自动化追番和镜像下载很顺手。同类可看 Transmission（更简）与 Deluge（插件多）。",
    features:[
      "界面清晰，无广告无捆绑",
      "内置搜索引擎插件",
      "RSS 订阅与自动下载规则",
      "顺序下载、文件优先级、限速计划",
      "远程 Web UI 与 Qt / 无头两种模式",
      "基于 libtorrent，稳定且占用低"
    ],
    tags:["下载","BT","跨平台"], lang:"C++", lic:"GPL-2.0", repo:"qbittorrent/qBittorrent" },

  { name:"RustDesk",   cat:"net",
    desc:"开源自建远程桌面，替代 ToDesk / 向日葵 / TeamViewer。",
    intro:"RustDesk 用 Rust 写的远程桌面，客户端覆盖 Windows / macOS / Linux / Android / iOS / Web，最实用的一点是可以自建中继与 ID 服务器：连接不走厂商服务器，速度和隐私都在自己手里。它支持 TCP 中继与 P2P 直连、端到端加密、文件传输、剪贴板、多屏、WOL 唤醒。免费版功能够用，自建时记得配白名单与强密码。",
    features:[
      "客户端覆盖全平台，含 Web 端",
      "可自建 ID / 中继服务器，连接自主",
      "端到端加密与访问密码、白名单",
      "文件传输、剪贴板、多显示器",
      "P2P 直连优先，失败走中继",
      "AGPL 许可，可源码审计"
    ],
    tags:["远程桌面","自托管","安全"], lang:"Rust", lic:"AGPL-3.0", repo:"rustdesk/rustdesk" },

  { name:"Zellij",   cat:"sys",
    desc:"现代终端工作区：布局、面板、插件都是默认配好的",
    intro:"Zellij 是 Rust 写的终端复用器，定位对得上 tmux，但默认就把「有用的东西」配好了：打开就显示快捷键提示、可以按 YAML 定义多面板布局、编译的 WASM 插件做模式与事件响应。适合不想把 tmux 配置反复调教、又希望多面板与浮动终端随手可得的人。性能与稳定性已够日常使用，远端 SSH 场景也支持。同类可看 tmux 与 Byobu。",
    features:[
      "启动就带快捷键提示，学习成本低",
      "YAML 声明布局与启动会话",
      "浮动面板、全屏切换、会话共享",
      "WASM 插件机制，模式可扩展",
      "Rust 实现，内存安全且稳定",
      "服务器端持久会话，断线可重连"
    ],
    tags:["终端","CLI","Rust"], lang:"Rust", lic:"MIT", repo:"zellij-org/zellij" },

  { name:"Netdata",   cat:"sys",
    desc:"秒级精度的服务器监控代理，装完立刻出图表。",
    intro:"Netdata 的卖点是装上就有用：一个代理进程采集 CPU、内存、磁盘、网络、容器、常见服务（Nginx、Redis、PostgreSQL…）的指标，默认秒级甚至亚秒级粒度，本地网页直接看几百张排好版的图。采集项是自动发现的，不用先写配置。要长期保存与多机汇总可以再配它的云或对接 Prometheus / Graphite。排障时看秒级曲线，比五分钟粒度的监控好用太多。",
    features:[
      "安装后零配置自动采集与出图",
      "秒级 / 亚秒级粒度，适合排障",
      "数百种采集插件覆盖常见服务",
      "异常检测内置（自动学习基线）",
      "多节点可查看与告警配置",
      "可对接 Prometheus / OpenTelemetry"
    ],
    tags:["监控","服务器","自托管"], lang:"C", lic:"GPL-3.0", repo:"netdata/netdata" },

  { name:"VictoriaMetrics",   cat:"sys",
    desc:"高效的时序数据库，Prometheus 的常见替代后端。",
    intro:"VictoriaMetrics 是为 Prometheus 生态优化过的时序库：兼容 Prometheus 抓取与 PromQL，压缩率高、内存占用低，单机版能扛百万级活跃序列，集群版水平扩展。常见用法是把 Prometheus 的 remote write 指过去，长期保存和慢查询都省力。还带 vmagent 采集与 vmalert 告警。同类可看 Thanos、Mimir、InfluxDB。",
    features:[
      "兼容 Prometheus 抓取、远程写入与 PromQL",
      "压缩率与查询速度优于原生 Prometheus",
      "单机版可扛百万级活跃序列",
      "集群版水平扩展，多租户隔离",
      "附带 vmagent / vmalert / vmbackup 组件",
      "也支持 InfluxDB / OpenTSDB / Graphite 写入"
    ],
    tags:["监控","数据库","自托管"], lang:"Go", lic:"Apache-2.0", repo:"VictoriaMetrics/VictoriaMetrics" },

  { name:"Duplicati",   cat:"sys",
    desc:"增量加密备份到网盘与对象存储，客户端就能还原。",
    intro:"Duplicati 做备份的思路是「目标是远程存储」：把文件夹增量备份到 OneDrive、Backblaze、S3、WebDAV、FTP 或本地磁盘，上传前加密、压缩、去重，之后网页界面就能浏览历史版本并还原单个文件，不必在目标端装任何东西。它有定时计划、带宽限制、验证与修复。缺点是首次备份大集合慢、还原大量小文件也偏慢；方案本身（AES 加密 + 增量卷）值得懂清楚再配。",
    features:[
      "支持各类云存储、WebDAV、S3、本地目标",
      "上传前加密、压缩、去重与增量版本",
      "网页界面可浏览历史与还原单文件",
      "定时计划、带宽与卷大小可调",
      "内置备份完整性校验与修复",
      "命令行与无头模式可跑 NAS"
    ],
    tags:["备份","加密","存储"], lang:"C#", lic:"GPL-2.0", repo:"duplicati/duplicati" },

];
/* ============================================================
   多维标签筛选 —— 平台 / 特性 / 授权
   TAGS 键为 repo，值为扁平 token 数组：
     平台：win mac linux android ios web
     特性：cross(跨平台) local(本地优先) minimal(极简) noads(无广告) zh(支持中文) cli(CLI)
   授权不入库，按 d.lic 字符串实时匹配（见 LIC_TEST）。
   语义：组内 OR、组间 AND。仅作用于精选 / 小众页（热榜为实时抓取，无标注）。
   ============================================================ */
const TAGS={
"microsoft/vscode":["win","mac","linux","web","cross","zh"],
"neovim/neovim":["win","mac","linux","cross","local","minimal","cli","zh"],
"zed-industries/zed":["win","mac","linux","cross","local"],
"junegunn/fzf":["win","mac","linux","cross","local","minimal","cli","zh"],
"BurntSushi/ripgrep":["win","mac","linux","cross","local","minimal","cli"],
"nushell/nushell":["win","mac","linux","cross","local","cli"],
"jesseduffield/lazygit":["win","mac","linux","cross","local","cli","zh"],
"astral-sh/ruff":["win","mac","linux","cross","local","cli"],
"oven-sh/bun":["win","mac","linux","cross","local","cli"],
"obsproject/obs-studio":["win","mac","linux","cross","local","noads","zh"],
"ollama/ollama":["win","mac","linux","cross","local","cli"],
"vllm-project/vllm":["mac","linux","local"],
"langchain-ai/langchain":["win","mac","linux","cross"],
"openai/whisper":["win","mac","linux","cross","local","cli"],
"HandBrake/HandBrake":["win","mac","linux","cross","local","noads","zh"],
"huggingface/transformers":["win","mac","linux","cross","local"],
"comfyanonymous/ComfyUI":["win","mac","linux","web","cross","local","noads"],
"mudler/LocalAI":["win","mac","linux","cross","local","noads","cli"],
"penpot/penpot":["web","local","noads","zh"],
"excalidraw/excalidraw":["web","local","minimal","noads","zh"],
"gouache-editor/gouache":["web","local","minimal","noads"],
"GIMP/gimp":["win","mac","linux","cross","local","noads","zh"],
"inkscape/inkscape":["win","mac","linux","cross","local","noads","zh"],
"blender/blender":["win","mac","linux","cross","local","noads","zh"],
"Homebrew/brew":["mac","linux","local","cli"],
"syncthing/syncthing":["win","mac","linux","android","web","cross","local","noads","cli","zh"],
"tailscale/tailscale":["win","mac","linux","android","ios","cross","noads","cli"],
"caddyserver/caddy":["win","mac","linux","cross","local","cli"],
"ansible/ansible":["win","mac","linux","cross","local","cli"],
"htop-dev/htop":["mac","linux","local","minimal","cli"],
"sxyazi/yazi":["win","mac","linux","cross","local","minimal","cli"],
"nmap/nmap":["win","mac","linux","cross","local","cli"],
"tmux/tmux":["mac","linux","local","minimal","cli"],
"pnpm/pnpm":["win","mac","linux","cross","local","cli"],
"denoland/deno":["win","mac","linux","cross","local","cli"],
"evanw/esbuild":["win","mac","linux","cross","local","cli"],
"withastro/astro":["win","mac","linux","cross","local"],
"ggml-org/llama.cpp":["win","mac","linux","cross","local","cli"],
"qdrant/qdrant":["win","mac","linux","cross","local","noads"],
"huggingface/diffusers":["win","mac","linux","cross","local"],
"gradio-app/gradio":["win","mac","linux","cross","local","noads"],
"KDE/krita":["win","mac","linux","cross","local","noads","zh"],
"KDE/kdenlive":["win","mac","linux","cross","local","noads","zh"],
"jgraph/drawio":["win","mac","linux","web","cross","local","minimal","noads","zh"],
"moby/moby":["win","mac","linux","cross","local","cli"],
"kubernetes/kubernetes":["win","mac","linux","cross","local","cli"],
"prometheus/prometheus":["win","mac","linux","cross","local","noads"],
"grafana/grafana":["win","mac","linux","web","cross","local","noads","zh"],
"restic/restic":["win","mac","linux","cross","local","cli"],
"louislam/uptime-kuma":["win","mac","linux","web","cross","local","noads","zh"],
"joplin/app":["win","mac","linux","android","ios","cross","local","noads","zh"],
"bitwarden/server":["win","mac","linux","android","ios","web","cross","local","noads","zh"],
"videolan/vlc":["win","mac","linux","android","ios","cross","local","noads","zh"],
"mpv-player/mpv":["win","mac","linux","android","cross","local","minimal","noads","cli"],
"jellyfin/jellyfin":["win","mac","linux","android","ios","web","cross","local","noads","zh"],
"nextcloud/server":["win","mac","linux","android","ios","web","cross","local","noads","zh"],
"jkiss/dbeaver":["win","mac","linux","cross","local","noads","zh"],
"wireshark/wireshark":["win","mac","linux","cross","local","noads","zh"],
"OPNsense/opnsense":["linux","local","cli","noads"],
"usebruno/bruno":["win","mac","linux","cross","local","noads","minimal"],
"metabase/metabase":["win","mac","linux","web","cross","local","noads","zh"],
"AUTOMATIC1111/stable-diffusion-webui":["win","mac","linux","web","cross","local","noads"],
"charmbracelet/gum":["win","mac","linux","cross","local","minimal","cli"],
"casey/just":["mac","linux","local","minimal","cli"],
"charmbracelet/glow":["win","mac","linux","cross","local","minimal","cli"],
"bootandy/dust":["win","mac","linux","cross","local","minimal","cli"],
"er_SE/entr":["mac","linux","local","minimal","cli"],
"jesseduffield/lazydocker":["win","mac","linux","cross","local","minimal","cli","zh"],
"qdrant/fastembed":["win","mac","linux","cross","local"],
"neuml/txtai":["win","mac","linux","cross","local"],
"marp-team/marp":["win","mac","linux","cross","local","cli"],
"tldraw/tldraw":["web","local","minimal","noads","zh"],
"sharkdp/bat":["win","mac","linux","cross","local","minimal","cli"],
"sharkdp/fd":["win","mac","linux","cross","local","minimal","cli"],
"ajeetdsouza/zoxide":["win","mac","linux","cross","local","minimal","cli"],
"daividkars/sd":["win","mac","linux","cross","local","minimal","cli"],
"dalance/procs":["win","mac","linux","cross","local","minimal","cli"],
"atuinsh/atuin":["win","mac","linux","cross","local","cli"],
"jdx/mise":["win","mac","linux","cross","local","minimal","cli"],
"lsd-rs/lsd":["win","mac","linux","cross","local","minimal","cli"],
"XAMPPRocky/tokei":["win","mac","linux","cross","local","minimal","cli"],
"ducaale/xh":["win","mac","linux","cross","local","minimal","cli"],
"watchexec/watchexec":["win","mac","linux","cross","local","minimal","cli"],
"GothenburgBitFactory/taskwarrior":["mac","linux","local","minimal","cli"],
"micro-editor/micro":["win","mac","linux","cross","local","minimal","cli"],
"jarun/nnn":["mac","linux","local","minimal","cli"],
"tldr-pages/tldr":["win","mac","linux","cross","local","minimal","cli","zh"],
"pola-rs/polars":["win","mac","linux","cross","local"],
"aristocratos/btop":["mac","linux","local","minimal","cli"],
"nicolargo/glances":["win","mac","linux","cross","local","minimal","cli"],
"Tomas-M/iotop":["linux","local","minimal","cli"],
"raboof/nethogs":["linux","local","minimal","cli"],
"orf/gping":["win","mac","linux","cross","local","minimal","cli"],
"audacity/audacity":["win","mac","linux","cross","local","noads","zh"],
"muesli/duf":["win","mac","linux","cross","local","minimal","cli"],
"masscan/masscan":["win","mac","linux","cross","local","minimal","cli"],
"fatedier/frp":["win","mac","linux","cross","local","cli"],
"SagerNet/sing-box":["win","mac","linux","android","ios","cross","local","cli"],
"rclone/rclone":["win","mac","linux","cross","local","cli"],
"borgbackup/borg":["mac","linux","local","cli"],
"duckdb/duckdb":["win","mac","linux","cross","local","minimal","cli"],
"chroma-core/chroma":["win","mac","linux","cross","local"],
"lancedb/lancedb":["win","mac","linux","cross","local"],
"UKPLab/sentence-transformers":["win","mac","linux","cross","local"],
"meilisearch/meilisearch":["win","mac","linux","cross","local","noads"],
"typesense/typesense":["mac","linux","local","noads"],
"OpenShot/openshot-qt":["win","mac","linux","cross","local","noads","zh"],
"mlb/Shotcut":["win","mac","linux","cross","local","noads","zh"],
"Ardour/ardour":["mac","linux","local","noads","zh"],
"musescore/MuseScore":["win","mac","linux","cross","local","noads","zh"],
"processing/processing4":["win","mac","linux","cross","local","noads"],
"godotengine/godot":["win","mac","linux","android","ios","cross","local","noads","zh"],
"iconoir-icons/iconoir":["web","minimal","noads"],
"colormind-org/colormind":["web","win","mac","linux","minimal","noads"],
"promptfoo/promptfoo":["win","mac","linux","cross","local","cli"],
"Stirling-Tools/Stirling-PDF":["win","mac","linux","web","cross","local","noads","zh"],
"freeplane/freeplane":["win","mac","linux","cross","local","noads","zh"],
"logseq/logseq":["win","mac","linux","cross","local","minimal","noads","zh"],
"FreshRSS/FreshRSS":["win","mac","linux","web","cross","local","noads","zh"],
"portainer/portainer":["win","mac","linux","web","cross","local","noads"],
"gohugoio/hugo":["win","mac","linux","cross","local","cli"],
"audacious-media-player/audacious":["mac","linux","local","minimal","noads"],
"git/git":["win","mac","linux","cross","local","cli","zh"],
"python/cpython":["win","mac","linux","cross","local","cli","zh"],
"nodejs/node":["win","mac","linux","cross","local","cli","zh"],
"nodejs/npm":["win","mac","linux","cross","local","cli"],
"rust-lang/rust":["win","mac","linux","cross","local","cli","zh"],
"golang/go":["win","mac","linux","cross","local","cli","zh"],
"postgres/postgres":["win","mac","linux","cross","local","cli"],
"mysql/mysql-server":["win","mac","linux","cross","local","cli","zh"],
"redis/redis":["win","mac","linux","cross","local","cli","zh"],
"mongodb/mongo":["win","mac","linux","cross","local","cli","zh"],
"sqlite/sqlite":["win","mac","linux","android","ios","cross","local","minimal","cli"],
"jupyter/notebook":["win","mac","linux","web","cross","local","zh"],
"vitejs/vite":["win","mac","linux","cross","local","cli","zh"],
"webpack/webpack":["win","mac","linux","cross","local","cli"],
"jestjs/jest":["win","mac","linux","cross","local","cli"],
"microsoft/playwright":["win","mac","linux","cross","local","cli","zh"],
"microsoft/TypeScript":["win","mac","linux","cross","local","cli","zh"],
"graphql/graphql-js":["win","mac","linux","cross","local","cli"],
"vim/vim":["win","mac","linux","cross","local","minimal","cli","zh"],
"emacs/emacs":["win","mac","linux","cross","local","minimal","cli","zh"],
"docker/compose":["win","mac","linux","cross","local","cli","zh"],
"jenkinsci/jenkins":["win","mac","linux","web","cross","local","zh"],
"gitlab-org/gitlab":["win","mac","linux","web","cross","local","cli","zh"],
"gradle/gradle":["win","mac","linux","android","cross","local","cli"],
"apache/maven":["win","mac","linux","cross","local","cli"],
"python-poetry/poetry":["win","mac","linux","cross","local","cli"],
"jgm/pandoc":["win","mac","linux","cross","local","minimal","cli","zh"],
"helix-editor/helix":["win","mac","linux","cross","local","minimal","cli","zh"],
"zsh-users/zsh":["mac","linux","android","cross","local","cli"],
"bash/bash":["mac","linux","android","cross","local","cli"],
"make":["mac","linux","cross","local","minimal","cli"],
"Kitware/CMake":["win","mac","linux","android","ios","cross","local","cli"],
"rust-lang/cargo":["win","mac","linux","cross","local","cli","zh"],
"yarnpkg/berry":["win","mac","linux","cross","local","cli"],
"babel/babel":["win","mac","linux","cross","local","cli"],
"eslint/eslint":["win","mac","linux","cross","local","cli"],
"prettier/prettier":["win","mac","linux","web","cross","local","cli"],
"vitest-dev/vitest":["win","mac","linux","cross","local","cli"],
"gatsbyjs/gatsby":["win","mac","linux","cross","local","cli"],
"vercel/next.js":["win","mac","linux","cross","local","cli","zh"],
"langgenius/dify":["win","mac","linux","web","cross","local","zh"],
"FlowiseAI/Flowise":["win","mac","linux","web","cross","local","zh"],
"n8n-io/n8n":["win","mac","linux","web","cross","local","zh"],
"replicate/replicate":["win","mac","linux","web","cross","cli"],
"modal-labs/modal-client":["win","mac","linux","cross","local","cli"],
"wandb/wandb":["win","mac","linux","web","cross","cli","zh"],
"mlflow/mlflow":["win","mac","linux","web","cross","local","cli","zh"],
"iterative/dvc":["win","mac","linux","cross","local","cli"],
"langchain-ai/langsmith-sdk":["win","mac","linux","web","cross","cli"],
"langfuse/langfuse":["win","mac","linux","web","cross","local","zh"],
"Helicone/helicone":["win","mac","linux","web","cross","local","cli"],
"BerriAI/litellm":["win","mac","linux","cross","local","cli"],
"OpenRouterTeam/openrouter":["win","mac","linux","web","cross","cli"],
"ray-project/ray":["win","mac","linux","cross","local","cli","zh"],
"basetenlabs/baseten":["win","mac","linux","web","cross","cli"],
"togethercomputer/together-api":["win","mac","linux","web","cross","cli"],
"anyscale-com/anyscale":["win","mac","linux","web","cross","cli"],
"Lightning-AI/pytorch-lightning":["win","mac","linux","cross","local","cli","zh"],
"bentoml/BentoML":["win","mac","linux","cross","local","cli","zh"],
"confident-ai/deepeval":["win","mac","linux","cross","local","cli"],
"explodinggradients/ragas":["win","mac","linux","cross","local","cli"],
"braintrustdata/braintrust":["win","mac","linux","web","cross","cli"],
"humanloopai/humanloop":["win","mac","linux","web","cross","cli"],
"Arize-ai/phoenix":["win","mac","linux","web","cross","local","cli"],
"truera/trulens":["win","mac","linux","cross","local","cli"],
"Giskard-AI/giskard":["win","mac","linux","cross","local","cli"],
"promptlayer/promptlayer":["win","mac","linux","web","cross","cli"],
"galileo-ai/galileo":["win","mac","linux","web","cross","cli"],
"patronus-ai/patronus":["win","mac","linux","web","cross","cli"],
"deepset-ai/haystack":["win","mac","linux","cross","local","cli","zh"],
"cohere-ai/cohere-python":["win","mac","linux","web","cross","cli"],
"mistralai/mistral-src":["win","mac","linux","cross","local","cli","zh"],
"meta-llama/llama-models":["win","mac","linux","cross","local","cli","zh"],
"google-gemini/gemini-api":["win","mac","linux","web","cross","cli","zh"],
"deepseek-ai/DeepSeek-V3":["win","mac","linux","cross","local","cli","zh"],
"figma/figma":["mac","linux","web","cross"],
"sketch-hq/sketch-api":["mac","local"],
"adobe/xd":["win","mac","cross","local"],
"canva/canva":["web","android","ios","cross"],
"framer/framer":["web"],
"webflow/webflow":["web"],
"mirohq/miro":["web","android","ios","cross"],
"whimsical/whimsical":["web"],
"figma/figjam":["web"],
"serif/affinity":["mac","win","cross","local"],
"adobe/illustrator":["win","mac","cross","local"],
"adobe/photoshop":["win","mac","cross","local","zh"],
"adobe/indesign":["win","mac","cross","local"],
"adobe/lightroom":["win","mac","android","ios","cross","local"],
"procreate/procreate":["ios","local"],
"adobe/after-effects":["win","mac","cross","local"],
"adobe/acrobat":["win","mac","cross","local","zh"],
"atlassian/jira":["win","mac","linux","web","cross","local","zh"],
"linear/linear":["mac","win","web","cross"],
"notionhq/notion":["win","mac","linux","web","android","ios","cross","local","zh"],
"clickup/clickup":["win","mac","linux","web","android","ios","cross"],
"asana/asana":["mac","win","web","android","ios","cross"],
"mondaycom/monday":["web","android","ios","cross"],
"trello/trello":["mac","win","web","android","ios","cross"],
"37signals/basecamp":["web","android","ios","cross"],
"airtable/airtable":["mac","win","web","android","ios","cross"],
"atlassian/confluence":["win","mac","linux","web","cross","local","zh"],
"slack/slack":["mac","win","web","android","ios","cross"],
"microsoft/teams":["mac","win","web","android","ios","cross"],
"zoom/zoom":["mac","win","web","android","ios","cross"],
"loom/loom":["mac","win","web","android","ios","cross"],
"googleworkspace/workspace":["web","android","ios","cross"],
"microsoft/365":["mac","win","web","android","ios","cross"],
"todoist/todoist":["mac","win","linux","web","android","ios","cross","local","zh"],
"tallyso/tally":["web"],
"nginx/nginx":["mac","linux","cross","local","cli","minimal","zh"],
"apache/httpd":["mac","linux","win","cross","local","cli","zh"],
"elastic/elasticsearch":["win","mac","linux","cross","local","cli","zh"],
"apache/kafka":["win","mac","linux","cross","local","cli","zh"],
"rabbitmq/rabbitmq-server":["win","mac","linux","cross","local","cli"],
"systemd/systemd":["linux","local","cli","zh"],
"openbsd/openssh":["win","mac","linux","android","ios","cross","local","cli","zh"],
"netfilter/nftables":["linux","local","cli"],
"firewall-project/firewalld":["linux","local","cli"],
"curl/curl":["win","mac","linux","android","ios","web","cross","local","minimal","cli","zh"],
"gnuwget/wget":["mac","linux","android","cross","local","minimal","cli"],
"netcat/netcat":["mac","linux","android","win","cross","local","minimal","cli"],
"iputils/iputils":["mac","linux","android","cross","local","minimal","cli"],
"traceroute/traceroute":["win","mac","linux","cross","local","minimal","cli"],
"ISC-projects/bind9":["win","mac","linux","android","cross","local","minimal","cli","zh"],
"tcpdump/tcpdump":["mac","linux","android","cross","local","minimal","cli","zh"],
"WireGuard/WireGuard":["win","mac","linux","android","ios","cross","local","cli","noads","zh"],
"OpenVPN/OpenVPN":["win","mac","linux","android","ios","cross","local","cli","noads"],
"esnet/iperf":["win","mac","linux","android","cross","local","minimal","cli"],
"iproute/iproute2":["linux","local","minimal","cli"],
"blackmagicdesign/DaVinci-Resolve-Studio":["win","mac","linux","cross","local","noads","zh"],
"mltframework/shotcut":["win","mac","linux","cross","local","noads","zh"],
"FFmpeg/FFmpeg":["win","mac","linux","android","ios","web","cross","local","minimal","cli","zh"],
"GStreamer/gstreamer":["mac","linux","android","ios","win","cross","local","cli"],
"mp3gain/mp3gain":["win","mac","linux","android","cross","local","minimal","cli"],
"ImageMagick/ImageMagick":["win","mac","linux","android","cross","local","cli","zh"],
"iina/iina":["mac","local","noads","zh"],
"kodi/kodi":["win","mac","linux","android","ios","cross","local","noads","zh"],
"plexinc/pms":["win","mac","linux","web","android","ios","cross","local","noads","zh"],
"emby/emby":["win","mac","linux","web","android","ios","cross","local","noads","zh"],
"Aegisub/Aegisub":["win","mac","linux","cross","local","noads","zh"],
"nikse/Subtitle-Edit":["win","local","noads","zh"],
"traefik/traefik":["win","mac","linux","android","web","cross","local","cli","zh"],
"go-gitea/gitea":["win","mac","linux","android","web","cross","local","cli","noads","zh"],
"forgejo/forgejo":["win","mac","linux","android","web","cross","local","cli","noads","zh"],
"gogs/gogs":["win","mac","linux","android","web","cross","local","cli","noads","zh"],
"minio/minio":["win","mac","linux","android","web","cross","local","cli","noads","zh"],
"filebrowser/filebrowser":["win","mac","linux","android","web","cross","local","cli","noads","zh"],
"Cloudreve/Cloudreve":["win","mac","linux","web","android","cross","local","noads","zh"],
"goharbor/harbor":["win","mac","linux","web","cross","local","noads","zh"],
"rancher/rancher":["win","mac","linux","web","cross","local","cli","zh"],
"grafana/loki":["win","mac","linux","web","cross","local","noads","zh"],
"influxdata/telegraf":["win","mac","linux","android","cross","local","cli","zh"],
"hashicorp/vault":["win","mac","linux","cross","local","cli","zh"],
"hashicorp/consul":["win","mac","linux","cross","local","cli","zh"],
"dandavison/delta":["win","mac","linux","cross","local","minimal","cli","zh"],
"eza-community/eza":["win","mac","linux","cross","local","minimal","cli","zh"],
"canisminor109/broot":["win","mac","linux","android","cross","local","minimal","cli","zh"],
"boyter/scc":["win","mac","linux","cross","local","minimal","cli"],
"superbrothers/gitui":["win","mac","linux","android","cross","local","minimal","cli"],
"bonzont/tig":["mac","linux","android","cross","local","minimal","cli"],
"astral-sh/uv":["win","mac","linux","android","ios","cross","local","minimal","cli","zh"],
"pyenv/pyenv":["mac","linux","android","cross","local","minimal","cli"],
"nvm-sh/nvm":["mac","linux","android","cross","local","minimal","cli"],
"asdf-vm/asdf":["mac","linux","android","win","cross","local","minimal","cli"],
"direnv/direnv":["win","mac","linux","android","cross","local","minimal","cli","zh"],
"pre-commit/pre-commit":["win","mac","linux","cross","local","cli","zh"],
"koalaman/shellcheck":["mac","linux","android","cross","local","minimal","cli"],
"nektos/act":["win","mac","linux","cross","local","cli","zh"],
"strace/strace":["linux","local","minimal","cli"],
"KDE/valgrind":["mac","linux","cross","local","cli"],
"gdb":["win","mac","linux","android","ios","cross","local","cli","zh"],
"torvalds/linux":["linux","local","minimal","cli"],
"dahlia/fff":["mac","linux","android","win","cross","local","minimal","cli"],
"weaviate/weaviate":["win","mac","linux","web","cross","local","noads","zh"],
"milvus-io/milvus":["win","mac","linux","web","cross","local","noads","zh"],
"facebookresearch/faiss":["win","mac","linux","cross","local","cli"],
"huggingface/peft":["win","mac","linux","cross","local","cli","zh"],
"axolotl-ai-cloud/axolotl":["win","mac","linux","cross","local","cli"],
"unslothai/unsloth":["win","mac","linux","web","cross","local","zh"],
"cline/cline":["win","mac","linux","web","cross","local","noads","zh"],
"Aider-AI/aider":["win","mac","linux","cross","local","cli","zh"],
"OpenInterpreter/open-interpreter":["win","mac","linux","cross","local","cli","noads","zh"],
"crewAIInc/crewAI":["win","mac","linux","cross","local","cli","zh"],
"microsoft/autogen":["win","mac","linux","web","cross","local","cli","zh"],
"langchain-ai/langgraph":["win","mac","linux","cross","local","cli","zh"],
"SYSTRAN/faster-whisper":["win","mac","linux","cross","local","cli","zh"],
"TheDocumentFoundation/libreoffice":["win","mac","linux","cross","local","noads","zh"],
"scottmg/drawpile":["win","mac","linux","cross","local","noads","zh"],
"mypaint/mypaint":["mac","linux","cross","local","noads","zh"],
"PintaProject/Pinta":["win","mac","linux","cross","local","minimal","noads","zh"],
"spline-dev/spline":["web"],
"lucid/lucidchart":["web","android","ios","cross"],
"creately/creately":["win","mac","web","android","ios","cross"],
"smartdraw/smartdraw":["win","mac","web","cross"],
"prezi/prezi":["mac","win","web","android","ios","cross"],
"shortcut/shortcut":["mac","win","web","cross"],
"height/height":["web"],
"wrike/wrike":["mac","win","web","android","ios","cross"],
"motionapp/motion":["mac","ios","cross"],
"productboard/productboard":["web"],
"mattermost/focalboard":["win","mac","linux","web","android","ios","cross","local","noads","zh"],
"taigaio/taiga-back":["win","mac","linux","web","android","cross","local","noads","zh"],
"rsync/rsync":["mac","linux","android","win","cross","local","minimal","cli","zh"],
"tux3/lvm2":["linux","local","minimal","cli"],
"libbpf/libbpf":["linux","local","cli"],
"procps-ng/procps":["linux","local","minimal","cli","zh"],
"sysstat/sysstat":["linux","local","minimal","cli","zh"],
"util-linux/util-linux":["linux","local","minimal","cli"],
"ltrace/ltrace":["linux","local","minimal","cli"],
"lsof/lsof":["win","mac","linux","android","cross","local","minimal","cli","zh"],
"inotify-tools/inotify-tools":["linux","local","minimal","cli"],
"btrfs/btrfs-progs":["linux","local","minimal","cli"],
"mtr/mtr":["win","mac","linux","android","cross","local","minimal","cli"],
"socat-project/socat":["mac","linux","android","win","cross","local","minimal","cli"],
"ethtool/ethtool":["linux","local","minimal","cli"],
"schweikert/fping":["win","mac","linux","android","cross","local","minimal","cli"],
"zerotier/ZeroTierOne":["win","mac","linux","android","ios","cross","local","cli","noads","zh"],
"juanfont/headscale":["win","mac","linux","web","android","cross","local","cli","noads","zh"],
"net-tools/net-tools":["linux","local","minimal","cli"],
"LMMS/lmms":["win","mac","linux","cross","local","noads","zh"],
"MuseScore/MuseScore":["win","mac","linux","cross","local","noads","zh"],
"TuxGuitar/TuxGuitar":["win","mac","linux","cross","local","noads","zh"],
"cockos/reaper":["win","mac","linux","cross","local","noads","zh"],
"apple/GarageBand":["ios","local"],
"apple/Logic-Pro":["mac","local"],
"rhasspy/piper":["win","mac","linux","android","ios","web","cross","local","minimal","cli","noads","zh"],
"42wim/matterbridge":["win","mac","linux","android","web","cross","local","cli","noads","zh"],
"containers/podman":["win","mac","linux","android","cross","local","cli","noads","zh"],
"canonical/lxd":["linux","cross","local","cli","noads","zh"],
"lxc/incus":["linux","cross","local","cli","noads","zh"],
"proxmox/pve-manager":["linux","web","cross","local","noads","zh"],
"cockpit-project/cockpit":["linux","web","cross","local","noads","zh"],
"webmin/webmin":["linux","web","cross","local","noads","zh"],
"AppFlowy-IO/AppFlowy":["win","mac","linux","web","cross","zh"],
"toeverything/AFFiNE":["win","mac","linux","web","cross","zh"],
"siyuan-note/siyuan":["win","mac","linux","web","cross","zh"],
"anyproto/anytype-heart":["win","mac","linux","web","cross","zh"],
"standardnotes/app":["win","mac","linux","web","cross","zh"],
"streetwriters/notesnook":["win","mac","linux","web","cross","zh"],
"go-vikunja/vikunja":["win","mac","linux","web","cross","zh"],
"GothenburgBitFactory/timewarrior":["win","mac","linux","web","cross","zh"],
"kimai/kimai":["win","mac","linux","web","cross","zh"],
"grocy/grocy":["win","mac","linux","web","cross","zh"],
"homarr-labs/homarr":["win","mac","linux","web","cross","zh"],
"thedevs-network/kutt":["win","mac","linux","web","cross","zh"],
"hedgedoc/hedgedoc":["win","mac","linux","web","cross","zh"],
"outline/outline":["win","mac","linux","web","cross","zh"],
"docmost/docmost":["win","mac","linux","web","cross","zh"],
"appwrite/appwrite":["win","mac","linux","web","cross","zh"],
"pocketbase/pocketbase":["win","mac","linux","web","cross","zh"],
"supabase/supabase":["win","mac","linux","web","cross","zh"],
"mailcow/mailcow-dockerized":["win","mac","linux","web","cross","zh"],
"mautic/mautic":["win","mac","linux","web","cross","zh"],
"SuiteCRM/SuiteCRM":["win","mac","linux","web","cross","zh"],
"frappe/erpnext":["win","mac","linux","web","cross","zh"],
"celluloid-player/celluloid":["win","mac","linux","cross","local"],
"smplayer-dev/smplayer":["win","mac","linux","cross","local"],
"mtytel/helm":["win","mac","linux","cross","local"],
"surge-synthesizer/surge":["win","mac","linux","cross","local"],
"mixxxdj/mixxx":["win","mac","linux","cross","local"],
"nomacs/nomacs":["win","mac","linux","cross","local"],
"keepassxreboot/keepassxc":["win","mac","linux","cross","local","cli","noads"],
"keepassx/keepassx":["win","mac","linux","cross","local","cli","noads"],
"dani-garcia/vaultwarden":["win","mac","linux","cross","local","cli","noads"],
"gophish/gophish":["win","mac","linux","cross","local","cli","noads"],
"rapid7/metasploit-framework":["win","mac","linux","cross","local","cli","noads"],
"zaproxy/zaproxy":["win","mac","linux","cross","local","cli","noads"],
"sullo/nikto":["win","mac","linux","cross","local","cli","noads"],
"greenbone/gvmd":["win","mac","linux","cross","local","cli","noads"],
"OISF/suricata":["win","mac","linux","cross","local","cli","noads"],
"snort3/snort3":["win","mac","linux","cross","local","cli","noads"],
"AdguardTeam/AdGuardHome":["win","mac","linux","cross","local","cli","noads"],
"pi-hole/pi-hole":["win","mac","linux","cross","local","cli","noads"],
"0xERR0R/blocky":["win","mac","linux","cross","local","cli","noads"],
"mitmproxy/mitmproxy":["win","mac","linux","cross","local","cli","noads"],
"openwrt/openwrt":["win","mac","linux","cross","local","cli","noads"],
"ranger/ranger":["win","mac","linux","cross","local","minimal","cli"],
"gokcehan/lf":["win","mac","linux","cross","local","minimal","cli"],
"dundee/gdu":["win","mac","linux","cross","local","minimal","cli"],
"ClementTsang/bottom":["win","mac","linux","cross","local","minimal","cli"],
"vergoh/vnstat":["win","mac","linux","cross","local","minimal","cli"],
"librespeed/speedtest":["win","mac","linux","cross","local","minimal","cli"],
"dylanaraps/neofetch":["win","mac","linux","cross","local","minimal","cli"],
"fastfetch-cli/fastfetch":["win","mac","linux","cross","local","minimal","cli"],
"cjbassi/gotop":["win","mac","linux","cross","local","minimal","cli"],
"Atoptool/atop":["win","mac","linux","cross","local","minimal","cli"],
"ozmartian/vidcutter":["win","mac","linux","cross","local"],
"mifi/lossless-cut":["win","mac","linux","cross","local"],
"GNOME/pitivi":["win","mac","linux","cross","local"],
"katspaugh/wavesurfer.js":["win","mac","linux","cross","local"],
"pure-data/pure-data":["win","mac","linux","cross","local"],
"clementine-player/Clementine":["win","mac","linux","cross","local"],
"quodlibet/quodlibet":["win","mac","linux","cross","local"],
"GNOME/easytag":["win","mac","linux","cross","local"],
"metabrainz/picard":["win","mac","linux","cross","local"],
"GNOME/loupe":["win","mac","linux","cross","local","minimal","cli"],
"GNOME/eog":["win","mac","linux","cross","local","minimal","cli"],
"GNOME/gthumb":["win","mac","linux","cross","local","minimal","cli"],
"GNOME/shotwell":["win","mac","linux","cross","local","minimal","cli"],
"darktable-org/darktable":["win","mac","linux","cross","local","minimal","cli"],
"RawTherapee/RawTherapee":["win","mac","linux","cross","local","minimal","cli"],
"KDE/digikam":["win","mac","linux","cross","local","minimal","cli"],
"KDE/kphotoalbum":["win","mac","linux","cross","local","minimal","cli"],
"photoprism/photoprism":["win","mac","linux","cross","local","minimal","cli"],
"immich-app/immich":["win","mac","linux","cross","local","minimal","cli"],
"zulip/zulip":["win","mac","linux","web","cross","zh"],
"mattermost/mattermost":["win","mac","linux","web","cross","zh"],
"RocketChat/Rocket.Chat":["win","mac","linux","web","cross","zh"],
"element-hq/element-web":["win","mac","linux","web","cross","zh"],
"nextcloud/spreed":["win","mac","linux","web","cross","zh"],
"jitsi/jitsi-meet":["win","mac","linux","web","cross","zh"],
"bigbluebutton/bigbluebutton":["win","mac","linux","web","cross","zh"],
"moodle/moodle":["win","mac","linux","web","cross","zh"],
"Cisco-Talos/clamav":["win","mac","linux","cross","local","cli","noads"],
"VirusTotal/yara":["win","mac","linux","cross","local","cli","noads"],
"laramies/theHarvester":["win","mac","linux","cross","local","cli","noads"],
"beefproject/beef":["win","mac","linux","cross","local","cli","noads"],
"kismetwireless/kismet":["win","mac","linux","cross","local","cli","noads"],
"aircrack-ng/aircrack-ng":["win","mac","linux","cross","local","cli","noads"],
"hashcat/hashcat":["win","mac","linux","cross","local","cli","noads"],
"openwall/john":["win","mac","linux","cross","local","cli","noads"],
"xbmc/xbmc":["win","mac","linux","android","ios","cross","local","zh"],
"laurent22/joplin":["win","mac","linux","android","ios","web","cross","zh"],
"lvmteam/lvm2":["linux","local","minimal","cli"],
"dylanaraps/fff":["mac","linux","local","minimal","cli"],
"openrouter":["web","cli"],
"openssh/openssh-portable":["win","mac","linux","cross","local","cli"],
"LibreOffice/core":["win","mac","linux","cross","local","zh"],
"braintrust":["web","cli"],
"opnsense/core":["linux","web","local","noads","zh"],
"dbeaver/dbeaver":["win","mac","linux","cross","zh"],
"the-tcpdump-group/tcpdump":["win","mac","linux","cross","local","cli"],
"promptlayer":["web","cli"],
"baseten":["web","cli"],
"kdave/btrfs-progs":["linux","local","minimal","cli"],
"humanloop":["web","cli"],
"npm/cli":["win","mac","linux","cross","local","minimal","cli"],
"chmln/sd":["win","mac","linux","cross","local","minimal","cli"],
"iproute2/iproute2":["linux","local","minimal","cli"],
"Canop/broot":["win","mac","linux","cross","local","cli"],
"anyscale":["web","cli"],
"lsof-org/lsof":["mac","linux","local","minimal","cli"],
"SubtitleEdit/subtitleedit":["win","mac","linux","cross","local","zh"],
"extrawurst/gitui":["win","mac","linux","cross","local","zh"],
"patronus-ai":["web","cli"],
"eradman/entr":["mac","linux","local","minimal","cli"],
"mirror/wget":["win","mac","linux","cross","local","cli"],
"drawpile/Drawpile":["win","mac","linux","cross","local","zh"],
"replicate":["web","cli"],
"togethercomputer/together":["web","cli"],
"GNOME/gimp":["win","mac","linux","cross","local","zh"],
"firewalld/firewalld":["linux","local","cli"],
"WayneD/rsync":["win","mac","linux","cross","local","cli"],
"galileo":["web","cli"],
  "name:traceroute":["win","mac","linux","cross","local","minimal","cli"],
  "name:valgrind":["mac","linux","cross","local","cli"],
  "name:ltrace":["linux","local","minimal","cli"],
  "name:Colormind":["web","win","mac","linux","minimal","noads"],
  "name:TuxGuitar":["win","mac","linux","cross","local","noads","zh"],
  "name:nftables":["linux","local","cli"],
  "name:mtr":["win","mac","linux","android","cross","local","minimal","cli"],
  "name:socat":["mac","linux","android","win","cross","local","minimal","cli"],
  "name:mp3gain":["win","mac","linux","android","cross","local","minimal","cli"],
  "name:tig":["mac","linux","android","cross","local","minimal","cli"],
  "name:netcat":["mac","linux","android","win","cross","local","minimal","cli"],
  "name:GitLab CE":["win","mac","linux","web","cross","local","cli","zh"],
  "name:Forgejo":["win","mac","linux","android","web","cross","local","cli","noads","zh"],
  "name:net-tools":["linux","local","minimal","cli"],
  "name:Gouache":["web","local","minimal","noads"],
  /* ---------- 448–500 扩容批次的平台 / 形态标签 ---------- */
  "mermaid-js/mermaid":["web","cross"],
  "plantuml/plantuml":["win","mac","linux","cross","cli","web"],
  "graphviz/graphviz":["win","mac","linux","cross","cli"],
  "apache/echarts":["web","cross"],
  "chartjs/Chart.js":["web","cross"],
  "mrdoob/three.js":["web","cross"],
  "slidevjs/slidev":["win","mac","linux","cross","cli","web"],
  "fastapi/fastapi":["cross","web","cli"],
  "prisma/orm":["win","mac","linux","cross","web"],
  "lucide-icons/lucide":["web","cross"],
  "tabler/tabler-icons":["web","cross"],
  "svg/svgo":["win","mac","linux","cross","cli"],
  "ImageOptim/ImageOptim":["mac","local"],
  "hashicorp/terraform":["win","mac","linux","cross","cli"],
  "derailed/k9s":["win","mac","linux","cross","cli"],
  "argoproj/argo-cd":["linux","web","cli"],
  "dokku/dokku":["linux","cli"],
  "coollabsio/coolify":["linux","web"],
  "NginxProxyManager/nginx-proxy-manager":["linux","web"],
  "halo-dev/halo":["linux","web","zh"],
  "chocobozzz/PeerTube":["linux","web"],
  "owncast/owncast":["linux","web"],
  "mealie-recipes/mealie":["linux","web","zh"],
  "home-assistant/core":["linux","web","android","ios","zh"],
  "keycloak/keycloak":["linux","web"],
  "goauthentik/authentik":["linux","web"],
  "element-hq/synapse":["linux","web"],
  "posthog/posthog":["linux","web"],
  "usememos/memos":["win","mac","linux","android","ios","web","cross","zh"],
  "sumatrapdfreader/sumatrapdf":["win","local"],
  "kovidgoyal/calibre":["win","mac","linux","cross","local","zh"],
  "koreader/koreader":["linux","android","local"],
  "opf/openproject":["linux","web","zh"],
  "twentyhq/twenty":["linux","web"],
  "firefly-iii/firefly-iii":["linux","web","zh"],
  "ankitects/anki":["win","mac","linux","android","ios","cross","local","zh"],
  "TriliumNext/Trilium":["win","mac","linux","web","cross","zh"],
  "yt-dlp/yt-dlp":["win","mac","linux","cross","cli","zh"],
  "streamlink/streamlink":["win","mac","linux","cross","cli"],
  "olive-editor/olive":["win","mac","linux","cross","local"],
  "strawberrymusicplayer/strawberry":["win","mac","linux","cross","local"],
  "ggml-org/whisper.cpp":["win","mac","linux","cross","cli","local","minimal"],
  "run-llama/llama_index":["cross","cli","web"],
  "open-webui/open-webui":["linux","web","zh"],
  "lobehub/lobehub":["web","cross","zh"],
  "netbirdio/netbird":["win","mac","linux","android","ios","cross"],
  "XTLS/Xray-core":["win","mac","linux","cross","cli"],
  "qbittorrent/qBittorrent":["win","mac","linux","cross","local"],
  "rustdesk/rustdesk":["win","mac","linux","android","ios","cross","zh"],
  "zellij-org/zellij":["mac","linux","cli"],
  "netdata/netdata":["linux","cli","web"],
  "VictoriaMetrics/VictoriaMetrics":["linux","cli","web"],
  "duplicati/duplicati":["win","mac","linux","cross","local","web"]
};
