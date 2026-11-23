/* 工具数据 —— 由 index.html 拆出，独立缓存；字段：name/cat/desc/intro/features[]/tags[]/lang/lic/repo/official */
const DATA = [
  { name:"VS Code", cat:"dev",
    desc:"微软开源的代码编辑器，插件生态极其丰富，几乎覆盖所有语言。",
    intro:"Visual Studio Code（VS Code）是微软开发并开源的代码编辑器，如今已是几乎所有技术栈开发者的默认选择。它在保持轻量、启动很快的同时，内置了智能补全、Git 版本控制、调试器和终端，把“编辑器 + 工具链”整合到一个窗口里。支持 Windows、macOS、Linux 三大平台，配合庞大的扩展市场，几乎任何开发场景都能被满足。",
    features:[
      "IntelliSense 智能补全：基于语言服务与类型信息提供上下文感知建议，写代码时自动提示变量、函数、属性",
      "数万款扩展生态：语法高亮、调试、格式化、主题、远程开发……几乎所有需求都有现成插件",
      "内置 Git：暂存、提交、分支、合并、冲突解决，不用离开编辑器",
      "集成终端与多光标编辑，批量修改一行命令的事",
      "远程开发：Remote-SSH、Dev Containers、WSL，直接在远程环境里干活",
      "完全免费、开源（MIT），跨平台一致体验"
    ],
    tags:["编辑器","IDE","VSCode"], lang:"TypeScript", lic:"MIT", repo:"microsoft/vscode" },

  { name:"Neovim",  cat:"dev",
    desc:"高度可定制的 Vim 分支，配置即用 Lua，插件系统更现代。",
    intro:"Neovim 是 Vim 的一个深度扩展分支，目标是把传统的模态编辑器带入现代。它把配置系统彻底换成 Lua，内置 LSP 客户端和终端成为一等公民，插件生态围绕现代 API 重建。对追求“指尖不离开键盘”的极客来说，它提供的是毫秒级启动和无限可定制的效率。",
    features:[
      "Lua 原生配置：config 就是一份 Lua 脚本，告别传统 vimrc 的晦涩语法",
      "内置 LSP 客户端：原生支持语言服务器协议，补全、诊断、跳转无需额外装插件",
      "内置终端与终端缓冲区，编辑和运行无缝切换",
      "完全可扩展的 C / Lua API，现代插件管理器生态繁荣",
      "极轻量、毫秒级启动，纯终端运行，远程 SSH 也飞快",
      "完整的模态编辑范式，学习曲线陡峭但回报极高"
    ],
    tags:["编辑器","TUI","终端"], lang:"C", lic:"Apache-2.0", repo:"neovim/neovim" },

  { name:"Zed",     cat:"dev",
    desc:"用 Rust 编写的高性能编辑器，原生支持多人多光标协作。",
    intro:"Zed 是由 Rust 编写、由 Atom 原班人马打造的高性能代码编辑器。它采用 GPU 加速渲染和分布式系统设计，把编辑器的响应速度推到极限——再大的文件也不卡顿。多人实时协作是它的招牌能力，配合内置 AI 助手，定位是“下一代编辑器”。",
    features:[
      "GPU 加速渲染：文本与 UI 直接走 GPU，编辑超大文件依旧丝滑",
      "多人实时协作：同一文件多人同编，延迟低至几十毫秒",
      "内置 Zed AI 助手，编辑器内直接补全与对话",
      "自研网络层，跨平台远程协作几乎零延迟",
      "插件系统 + 语言服务器深度集成，启动极快",
      "用 Rust 编写，内存占用与稳定性俱佳"
    ],
    tags:["编辑器","Rust","协作"], lang:"Rust", lic:"GPL-3.0", repo:"zed-industries/zed" },

  { name:"fzf",     cat:"dev",
    desc:"命令行模糊查找器，几乎能即时过滤任何列表、文件、历史记录。",
    intro:"fzf 是命令行里的模糊查找器，它的核心能力是“管道化”——任何能输出列表的命令，都能接上 fzf 瞬间过滤。输入任意几个字符、乱序也行，它立刻从几万条结果里筛出你要的那一条。终端重度用户基本人手一个。",
    features:[
      "模糊搜索：任意顺序输入关键词，即时从海量列表里过滤",
      "万物皆可输入：文件列表、命令历史、进程、git 提交记录统统能查",
      "自定义预览窗：实时预览文件内容、提交详情等",
      "两阶段、多阶段选择，一次选多个",
      "单一静态二进制，无依赖、体积极小、速度极快",
      "与任何 shell 命令用管道自由组合，可玩性极高"
    ],
    tags:["CLI","终端","模糊查找"], lang:"Go", lic:"MIT", repo:"junegunn/fzf" },

  { name:"ripgrep", cat:"dev",
    desc:"递归文件搜索工具，比 grep 快得多，自动尊重 .gitignore。",
    intro:"ripgrep（rg）是用 Rust 编写的命令行递归文本搜索工具。它利用多线程与 SIMD 加速，搜索整个代码库的速度明显快过传统 grep，并且默认尊重 .gitignore、自动跳过二进制文件。如今开发者搜代码，基本都先用它。",
    features:[
      "多线程 + SIMD 加速，比 grep 快数倍到数十倍",
      "默认尊重 .gitignore / .ignore，搜索不产生噪音",
      "内置强大的 Rust regex 引擎，支持丰富的正则语法",
      "自动跳过二进制文件、智能编码检测、彩色输出",
      "支持并行搜索、结果管道化",
      "跨平台静态二进制，下载即用"
    ],
    tags:["CLI","搜索","终端"], lang:"Rust", lic:"MIT / Apache-2.0", repo:"BurntSushi/ripgrep" },

  { name:"Nushell", cat:"dev",
    desc:"以结构化数据为核心的现代 shell，管道里直接处理表格与对象。",
    intro:"Nushell 是一个现代 shell，它的核心理念是让数据“结构化”。在它的管道里，文件、HTTP 响应、配置文件都变成可以直接过滤、排序、聚合的表格和对象，而不是纯文本。可以把它理解成“Unix 世界的 PowerShell”，用命令处理数据就像用 SQL 处理数据库。",
    features:[
      "结构化数据：命令输出是表格 / 对象，不是裸文本",
      "管道链式操作：ls | where size > 10mb | sort-by modified，一目了然",
      "内置命令：HTTP 请求、JSON / YAML / TOML 解析、数据库查询",
      "丰富的自动补全与帮助文档",
      "跨平台、单二进制，安装即用",
      "脚本可写，适合自动化与数据管道"
    ],
    tags:["Shell","终端","数据"], lang:"Rust", lic:"MIT", repo:"nushell/nushell" },

  { name:"Lazygit", cat:"dev",
    desc:"终端里的 Git 图形界面，提交、变基、rebase 操作极快。",
    intro:"Lazygit 是运行在终端里的 Git TUI（文本图形界面）。它把繁琐的命令行 Git 流程变成一个清爽的可视界面，提交、暂存、rebase、解决冲突都变成一次按键的事。单文件、无依赖，在任何终端里都能跑起来，Git 操作效率明显提上来。",
    features:[
      "完整 Git 操作：stage、commit、push、pull、rebase、cherry-pick",
      "交互式 rebase 与冲突解决，界面直观不烧脑",
      "文件级、行级 diff 查看，改动一目了然",
      "Git 日志、stash、worktree 管理",
      "单二进制、零依赖，任何终端可用",
      "高度可定制的键位与主题"
    ],
    tags:["CLI","Git","终端"], lang:"Go", lic:"MIT", repo:"jesseduffield/lazygit" },

  { name:"Ruff",    cat:"dev",
    desc:"极快的 Python 代码检查与格式化工具，Rust 实现，毫秒级完成。",
    intro:"Ruff 是用 Rust 编写的 Python linter 和代码格式化工具，速度快到比大多数语言的本体还快。它把 flake8、isort、black、pyupgrade 等一堆工具的能力合并进一个，规则数量上千，还能自动修复问题。如今不少 Python 项目直接拿它当默认配置。",
    features:[
      "毫秒级 lint 与格式化，速度碾压传统工具",
      "一个工具替代 flake8、isort、black、pyupgrade 等",
      "上千条内置规则，支持细粒度配置与忽略",
      "自动修复（fix）能力，一键修正大量问题",
      "优秀的 IDE 与 pre-commit 集成",
      "Rust 实现，跨平台单二进制"
    ],
    tags:["Lint","Python","格式化"], lang:"Rust", lic:"MIT / Apache-2.0", repo:"astral-sh/ruff" },

  { name:"Bun",     cat:"dev",
    desc:"极速的 JavaScript 运行时、打包器与包管理器三合一。",
    intro:"Bun 是用 Zig 编写的很快的 JavaScript 运行时、打包器和包管理器三合一工具。它内置 JavaScriptCore 引擎和很快的打包器，目标是用一个工具替代 Node.js + npm + webpack 的组合。启动和执行速度都很快，并且 API 兼容 Node.js 与 npm，迁移成本低。",
    features:[
      "极速启动与执行，基于 JavaScriptCore 引擎",
      "内置包管理器，比 npm 快一个量级，支持 workspaces 与 lockfile",
      "内置打包器、HMR 热更新，TypeScript 开箱即用",
      "内置测试运行器与 HTTP 服务器",
      "API 兼容 Node.js 和 npm，迁移成本低",
      "一个二进制搞定运行时、打包、依赖管理"
    ],
    tags:["Runtime","JS","打包器"], lang:"Zig", lic:"MIT", repo:"oven-sh/bun" },

  { name:"OBS Studio", cat:"media",
    desc:"开源免费的直播推流与屏幕录制软件，跨平台。",
    intro:"OBS Studio 是开源免费的屏幕录制与直播推流软件，支持 Windows / macOS / Linux。它能录制游戏、摄像头、屏幕，提供场景切换、滤镜、混音器等能力，并可直接推流到各大直播平台。主播和创作者用得最多的就是它。",
    features:[
      "录制屏幕 / 游戏 / 摄像头",
      "多场景、多源灵活切换",
      "内置滤镜、混音器、文字与图像源",
      "支持 RTMP 直播推流",
      "跨平台、开源免费",
      "海量社区插件扩展"
    ],
    tags:["直播","录屏","开源"], lang:"C++", lic:"GPL-2.0", repo:"obsproject/obs-studio" },

  { name:"Ollama", cat:"ai",
    desc:"在本机一键运行大语言模型（Llama、Mistral 等），离线可用。",
    intro:"Ollama 让你在本机用一条命令跑起主流开源大语言模型（Llama、Mistral、Qwen 等）。它把下载模型、量化、推理这些复杂步骤全部抽象掉，几分钟就能得到一个可用的本地 LLM。支持离线运行，数据不出本机，特别适合隐私敏感场景。",
    features:[
      "一条命令下载并运行模型：ollama run llama3",
      "支持 Llama、Mistral、Qwen 等主流开源 LLM 与多模态模型",
      "暴露 OpenAI 兼容的本地 API，方便接入各类应用",
      "自动识别硬件（GPU / CPU，Metal / CUDA）",
      "本地服务，离线可用，隐私数据不出机器",
      "跨平台：macOS、Linux、Windows 都支持"
    ],
    tags:["LLM","本地","推理"], lang:"Go", lic:"MIT", repo:"ollama/ollama" },

  { name:"vLLM",   cat:"ai",
    desc:"高吞吐的 LLM 推理与服务平台，PagedAttention 显著提速。",
    intro:"vLLM 是高吞吐、内存高效的 LLM 推理与服务平台。它提出的 PagedAttention 技术用分页方式管理 GPU 显存，明显减少内存碎片，让大模型在高并发下也能跑出接近峰值的吞吐。是生产环境部署大模型服务的常用引擎。",
    features:[
      "PagedAttention：分页式显存管理，消除 GPU 内存碎片",
      "Continuous batching，高并发请求下吞吐显著提升",
      "对主流模型与多种量化方案有显著加速",
      "OpenAI 兼容 API 服务，直接对外提供推理",
      "支持多种硬件后端（NVIDIA、AMD 等）",
      "模块化架构，便于二次开发与扩展"
    ],
    tags:["推理","服务","LLM"], lang:"Python", lic:"Apache-2.0", repo:"vllm-project/vllm" },

  { name:"LangChain", cat:"ai",
    desc:"构建大语言模型应用的框架与工具集，串联模型、数据与工具。",
    intro:"LangChain 是构建基于大语言模型应用的框架与工具集。它提供了连接模型、数据、工具、外部服务的抽象，让你搭建 RAG（检索增强生成）、Agent、复杂工作流变得简单。配套 LangGraph 做有状态、多智能体的编排，LLM 应用开发里很常见。",
    features:[
      "Chain 与 LCEL：可组合地构建 LLM 管道",
      "Agent 能力：自动调用工具、完成多步任务",
      "海量集成生态：向量库、文档加载器、模型提供商",
      "LangGraph：面向有状态、多智能体应用的编排框架",
      "Python 与 JavaScript 双语言支持",
      "活跃的社区与持续更新的集成"
    ],
    tags:["框架","LLM","Agent"], lang:"Python", lic:"MIT", repo:"langchain-ai/langchain" },

  { name:"Whisper", cat:"ai",
    desc:"OpenAI 的开源语音识别模型，多语言高鲁棒转写。",
    intro:"Whisper 是 OpenAI 开源的语音识别（ASR）模型，在海量多语言数据上训练而来。它对噪声、口音有很强的鲁棒性，支持数十种语言的转写，还能翻译成英文。如今它已成为语音转写的事实标准，社区衍生出 faster-whisper 等众多加速工具。",
    features:[
      "多语言语音识别，支持数十种语言",
      "语音翻译：任意语言转写成英文",
      "高鲁棒性，对噪声和口音不敏感",
      "从 tiny 到 large 多种模型规格，按算力取舍精度",
      "可离线在本机（含 GPU）运行",
      "庞大的社区工具与加速实现生态"
    ],
    tags:["语音","ASR","转写"], lang:"Python", lic:"MIT", repo:"openai/whisper" },

  { name:"HandBrake", cat:"media",
    desc:"开源的视频转码器，把任何视频转成通用格式。",
    intro:"HandBrake 是开源的视频转码工具，能把几乎所有视频格式转换成 MP4 / MKV 等通用格式。它提供丰富的预设、硬件加速、批量转码，压缩体积、转格式、跨设备播放都靠它，完全免费。",
    features:[
      "几乎所有格式转成 MP4 / MKV",
      "丰富预设，一键转码",
      "硬件加速（NVENC / VAAPI / VideoToolbox）",
      "批量转码、断点续传",
      "裁剪、字幕、音频轨处理",
      "开源免费、跨平台"
    ],
    tags:["转码","视频","开源"], lang:"C", lic:"GPL-2.0", repo:"HandBrake/HandBrake" },

  { name:"Transformers", cat:"ai",
    desc:"Hugging Face 的模型工具库，一行代码加载数千个预训练模型。",
    intro:"Transformers 是 Hugging Face 推出的模型工具库。它用统一的 API 封装了数千个预训练模型，覆盖自然语言处理、计算机视觉、语音等多模态任务。一行代码即可加载并使用模型，配套 Pipeline 可以快速搭出应用，研究和生产都拿它当底座。",
    features:[
      "数千个预训练模型，统一 API 一行加载",
      "覆盖 NLP、计算机视觉、语音、多模态任务",
      "Pipeline：一行代码快速搭出应用",
      "与 Hugging Face Hub、Datasets 深度集成",
      "支持微调与训练，性能表现优秀",
      "跨框架支持，生态活跃"
    ],
    tags:["模型库","NLP","预训练"], lang:"Python", lic:"Apache-2.0", repo:"huggingface/transformers" },

  { name:"ComfyUI", cat:"ai",
    desc:"基于节点工作流的扩散模型图形界面，流程可视化、易扩展。",
    intro:"ComfyUI 是基于节点工作流的扩散模型图形界面。它把图像生成过程表达成一个个可以拖拽连线的节点，复杂的生成流程变得可视、可复现、可扩展。配合 ControlNet、LoRA 和大量自定义节点，它已成为 AI 图像创作的主力工具。",
    features:[
      "节点式工作流：拖拽连线组装生成流程",
      "支持 ControlNet、LoRA、自定义节点等丰富生态",
      "可复现：工作流可保存与分享（JSON + 图片）",
      "高度可扩展，自定义节点社区活跃",
      "高性能，GPU 利用率高",
      "可视化调试，定位问题快"
    ],
    tags:["图像生成","工作流","节点"], lang:"Python", lic:"GPL-3.0", repo:"comfyanonymous/ComfyUI" },

  { name:"LocalAI", cat:"ai",
    desc:"本地运行 AI 模型的运行时，兼容 OpenAI API，开箱即用。",
    intro:"LocalAI 是本地运行 AI 模型的开源运行时，提供与 OpenAI API 兼容的接口。你可以在本地跑 LLM、图像生成、语音合成等多种模型，并把它们直接接到现有的 OpenAI 集成里，无需改代码。支持多种推理后端，Docker 一键部署。",
    features:[
      "OpenAI 兼容 API，直接替换无需改代码",
      "支持 LLM、图像生成、TTS 等多模态模型",
      "后端抽象：llama.cpp、ONNX 等多种推理引擎",
      "GPU 加速与多模型部署",
      "Docker 部署，开箱即用",
      "完全本地运行，隐私安全"
    ],
    tags:["LLM","本地","兼容"], lang:"Go", lic:"Apache-2.0", repo:"mudler/LocalAI" },

  { name:"Penpot",     cat:"design",
    desc:"开源的在线协作设计工具，Figma 的替代，支持实时协作。",
    intro:"Penpot 是开源、基于 Web 的协作设计工具，定位是 Figma 的开源替代。它支持实时多人协作、设计系统、完整的 UI 设计功能，并且可以自托管——设计数据完全掌握在自己手里，采用开放的 SVG 格式，不锁定供应商。",
    features:[
      "开源、可自托管，数据自主可控",
      "实时协作，多人同时编辑",
      "设计系统：组件、变量、样式管理",
      "开放的 SVG 格式，不锁定供应商",
      "完整的 UI 设计功能集",
      "插件生态，可扩展能力"
    ],
    tags:["UI设计","协作","Figma"], lang:"Clojure", lic:"MPL-2.0", repo:"penpot/penpot" },

  { name:"Excalidraw", cat:"design",
    desc:"手绘风格的在线白板与流程图工具，轻松画草图与示意图。",
    intro:"Excalidraw 是一个手绘风格的白板工具，外观轻松、像随手画的草图，非常适合画草图、流程图、做头脑风暴。它开源、可在线使用，也能嵌入到其他工具里（如 Obsidian）。实时协作让团队可以一起在同一块白板上画图讨论。",
    features:[
      "手绘美学，轻松草图观感",
      "绘制图形、箭头、文本、自由线条",
      "实时协作白板，多人同绘",
      "导出为 SVG / PNG",
      "开源、可嵌入、可扩展（Obsidian、Miro 等）",
      "在线即用，也支持自托管"
    ],
    tags:["白板","手绘","流程图"], lang:"TypeScript", lic:"MIT", repo:"excalidraw/excalidraw" },

  { name:"Gouache",    cat:"design",
    desc:"开源的矢量图形编辑器，面向 UI / 品牌设计。",
    intro:"Gouache 是面向 UI 与品牌设计的开源矢量图形编辑器。它提供干净现代的界面和扎实的矢量编辑能力，支持路径、形状、贝塞尔曲线等核心操作，适合设计师做界面稿和品牌形象的视觉产出。",
    features:[
      "矢量编辑：路径、形状、贝塞尔曲线",
      "面向 UI 与品牌设计的功能",
      "干净现代的界面",
      "开源、跨平台",
      "支持设计资产管理与导出"
    ],
    tags:["矢量","UI设计"], lang:"TypeScript", lic:"MIT", repo:"" ,official:"https://gouache.com/"},

  { name:"GIMP",       cat:"design",
    desc:"功能强大的开源位图图像编辑器，Photoshop 的替代。",
    intro:"GIMP（GNU Image Manipulation Program）是功能强大的开源位图图像编辑器，是 Photoshop 的事实开源替代。它提供完整的图层、蒙版、通道、滤镜与修图能力，支持众多图像格式与色彩管理，并可通过脚本与插件无限扩展。",
    features:[
      "完整功能集：图层、蒙版、通道、滤镜、修图",
      "支持众多图像格式与色彩管理",
      "可扩展：Script-Fu / Python 脚本、插件系统",
      "批量处理与工作流程自动化",
      "跨平台、免费开源",
      "活跃的社区与海量教程"
    ],
    tags:["图像编辑","位图"], lang:"C", lic:"GPL-3.0", repo:"GNOME/gimp" },

  { name:"Inkscape",   cat:"design",
    desc:"开源的 SVG 矢量图形编辑器，可编辑任何矢量格式。",
    intro:"Inkscape 是开源的 SVG 矢量图形编辑器。它以 SVG 为原生格式，提供完整的矢量编辑功能集，可创建与编辑各种矢量图形。支持路径编辑、布尔运算、渐变、图案、文字路径等，并可通过扩展与滤镜无限扩展。",
    features:[
      "原生 SVG 支持，完整矢量编辑功能集",
      "路径编辑、节点、贝塞尔曲线、布尔运算",
      "渐变、图案、文字路径",
      "可扩展：扩展、滤镜、插件",
      "跨平台、免费开源",
      "可导入导出多种矢量 / 位图格式"
    ],
    tags:["矢量","SVG"], lang:"C++", lic:"GPL-3.0", repo:"inkscape/inkscape" },

  { name:"Blender",    cat:"design",
    desc:"开源的 3D 建模、渲染、动画与视频剪辑套件。",
    intro:"Blender 是功能完整的开源 3D 创作套件，覆盖建模、雕刻、骨骼绑定、动画、渲染、合成、视频剪辑，甚至自带游戏引擎。它是个人创作者和影视工作室都在用，社区、教程、素材库非常丰富。",
    features:[
      "完整 3D 工作流：建模、雕刻、绑定、动画",
      "Cycles 路径追踪渲染引擎，照片级写实",
      "合成器与视频编辑（VSE）",
      "游戏引擎与实时预览",
      "庞大的社区、教程与素材库",
      "完全开源免费，跨平台"
    ],
    tags:["3D","动画","渲染"], lang:"C++", lic:"GPL-2.0", repo:"blender/blender" },

  { name:"Homebrew",  cat:"sys",
    desc:"macOS（也支持 Linux）上的软件包管理器，brew 一条命令装软件。",
    intro:"Homebrew 是 macOS（也支持 Linux）上的免费开源包管理器。一条 brew install 命令就能安装数千款命令行工具和应用程序，它管理依赖、自动升级，是 macOS 开发体验的标配部分。社区维护的 tap 机制让软件包生态持续扩展。",
    features:[
      "一条命令安装：brew install <软件>",
      "海量软件包（formulae）与应用（casks）",
      "依赖管理、自动升级",
      "tap 机制：社区维护的扩展仓库",
      "跨平台（macOS、Linux）",
      "完全开源，生态成熟"
    ],
    tags:["包管理","macOS","brew"], lang:"Ruby", lic:"Apache-2.0", repo:"Homebrew/brew" },

  { name:"Syncthing", cat:"host",
    desc:"跨设备的开源文件同步，点对点传输，无云中转。",
    intro:"Syncthing 是持续、点对点（P2P）的文件同步工具。它在你的设备之间直接同步文件，无需经过任何云中转、无需注册账号，数据端到端加密。适合把多台电脑、服务器的文件保持实时一致，隐私与掌控感都拉满。",
    features:[
      "点对点同步，不经过任何云中转",
      "实时持续同步，自动处理冲突",
      "端到端加密，数据安全",
      "Web 管理界面，设备配对简单",
      "跨平台、开源、无需账号",
      "支持选择性共享特定文件夹"
    ],
    tags:["同步","文件","P2P"], lang:"Go", lic:"MPL-2.0", repo:"syncthing/syncthing" },

  { name:"Tailscale", cat:"net",
    desc:"用 WireGuard 搭起私有网络的零配置组网工具，安全远程连接。",
    intro:"Tailscale 是基于 WireGuard 的零配置私有组网工具。它让分布在各地、不同网络里的设备组成一个加密的 mesh 网络，实现安全的远程访问，无需端口转发。身份基于 SSO，访问控制细粒度，个人使用还有免费额度。",
    features:[
      "零配置 VPN，自动 NAT 穿透与打洞",
      "基于 WireGuard 的端到端加密隧道",
      "基于身份的访问控制（SSO、设备管理）",
      "个人使用免费",
      "跨平台：Windows、macOS、Linux、iOS、Android、路由器",
      "安全远程访问，免去端口转发"
    ],
    tags:["组网","VPN","WireGuard"], lang:"Go", lic:"BSD-3-Clause", repo:"tailscale/tailscale" },

  { name:"Caddy",     cat:"host",
    desc:"现代、零配置的 Web 服务器，自动签发并续期 HTTPS 证书。",
    intro:"Caddy 是现代、零配置的 Web 服务器。它默认就自动获取并续期 HTTPS 证书（Let's Encrypt），配置格式 Caddyfile 清晰易读，天生以安全为先。支持反向代理、负载均衡、TLS 终结，单二进制即可部署，非常适合快速上线站点。",
    features:[
      "自动 HTTPS：自动获取并续期 Let's Encrypt 证书",
      "清晰的 Caddyfile 配置格式",
      "反向代理、负载均衡、TLS 终结",
      "丰富的内置模块与扩展系统",
      "单二进制，部署简单",
      "以安全为先的默认配置"
    ],
    tags:["Web服务器","HTTPS"], lang:"Go", lic:"Apache-2.0", repo:"caddyserver/caddy" },

  { name:"Ansible",   cat:"sys",
    desc:"基于 SSH 的无代理自动化运维工具，配置即代码。",
    intro:"Ansible 是简单、无代理、配置即代码的自动化与编排工具。它通过 SSH 连接目标主机，用 YAML 编写的 playbook 来部署软件、配置系统、编排发布。无需在目标机器上装 agent，inventory 管理让它可以轻松扩展到上千台主机。",
    features:[
      "无代理，通过 SSH 连接，目标机无需装 agent",
      "YAML playbook，可读、易写、易维护",
      "模块化：丰富的模块与角色（role）",
      "inventory 管理，可扩展到上千台主机",
      "活跃的社区，丰富的 Ansible Galaxy",
      "适合配置管理、部署、编排"
    ],
    tags:["自动化","运维","配置"], lang:"Python", lic:"GPL-3.0", repo:"ansible/ansible" },

  { name:"Htop",      cat:"sys",
    desc:"交互式进程监视器，比 top 直观，实时看 CPU / 内存。",
    intro:"htop 是交互式进程监视器，是传统 top 的增强版。它用直观、彩色的界面展示 CPU、内存、进程信息，支持鼠标和键盘操作，可以直接 kill 进程、调整优先级、搜索过滤。是排查系统负载、定位高占用进程的常用工具。",
    features:[
      "直观的 CPU / 内存 / 进程展示，彩色区分",
      "进程管理：kill、renice、暂停",
      "搜索与过滤进程",
      "可自定义显示与列",
      "跨平台，单文件轻量二进制",
      "鼠标 + 键盘双操作"
    ],
    tags:["进程","监控","终端"], lang:"C", lic:"GPL-2.0", repo:"htop-dev/htop" },

  { name:"Yazi",      cat:"sys",
    desc:"用 Rust 写的快速终端文件管理器，预览流畅、支持插件。",
    intro:"Yazi 是用 Rust 编写的快速终端文件管理器。它提供清爽的 TUI 界面、秒级的文件预览（图片、视频、代码、PDF）和强大的插件系统，让终端里的文件管理拥有现代体验。批量操作、多标签、书签一应俱全，键盘驱动、效率极高。",
    features:[
      "Rust 编写，启动与导航极快",
      "丰富文件预览：图片、视频、代码、PDF",
      "插件系统，社区插件丰富",
      "批量操作、多标签、书签",
      "清爽 TUI，键盘驱动交互",
      "跨平台，终端内即开即用"
    ],
    tags:["文件管理","TUI","终端"], lang:"Rust", lic:"GPL-3.0", repo:"sxyazi/yazi" },

  { name:"Nmap",      cat:"net",
    desc:"网络探测与安全扫描工具，端口扫描、服务识别。",
    intro:"Nmap（Network Mapper）是经典网络探测与安全审计工具。它可以发现主机、扫描端口、识别服务与版本、探测操作系统指纹，配合 NSE 脚本引擎能做大量自动化安全检测。网络工程师和安全研究者基本都装。",
    features:[
      "主机发现与端口扫描（多种扫描方式）",
      "服务与版本识别",
      "操作系统指纹探测",
      "脚本引擎（NSE），丰富的内置脚本",
      "跨平台，命令行工具",
      "可输出多种格式报告，便于分析"
    ],
    tags:["网络","安全","扫描"], lang:"C", lic:"Nmap License", repo:"nmap/nmap" },

  { name:"Tmux",      cat:"dev",
    desc:"终端复用器，一个终端窗口里开多个会话，可分屏、可持久。",
    intro:"Tmux 是一个终端复用器，它让你在一个终端窗口里同时运行多个会话、把窗口切成多个窗格，并且可以随时“分离”再“重新连接”。一旦配置好，它就成了高效终端工作流的核心——长任务可以挂着，断开或退出终端后随时回来继续，配合脚本和快捷键，生产力拉满。",
    features:[
      "一个终端窗口内多窗口 / 多窗格，可自由切换与调整布局",
      "会话持久化：detach 后断开，重新 attach 一切还在",
      "窗口与窗格管理：重命名、交换、旋转、最大化",
      "同步窗格，同一命令在多个窗格同时执行",
      "高度可定制：键位、状态栏、主题都能改",
      "跨平台，几乎所有 Unix 类系统都能跑"
    ],
    tags:["终端","复用器","TUI"], lang:"C", lic:"ISC", repo:"tmux/tmux" },

  { name:"pnpm",      cat:"dev",
    desc:"快速省磁盘的 JS 包管理器，硬链接 + 内容寻址存储。",
    intro:"pnpm 是一个快速且节省磁盘空间的 JavaScript 包管理器。它采用全局内容寻址存储，所有包以硬链接方式共享，装多个项目也不会重复占盘，安装速度和成功率都很高。它原生支持 monorepo 工作区，是大型前端项目的默认选择之一。",
    features:[
      "内容寻址全局存储 + 硬链接，包不重复占用磁盘",
      "安装速度快，支持增量安装与并行下载",
      "严格的 node_modules 结构，避免幽灵依赖",
      "原生 monorepo 支持（workspaces），跨项目依赖链接",
      "lockfile 与 npm 兼容，迁移成本低",
      "内置脚本运行与依赖管理"
    ],
    tags:["包管理","JS","Monorepo"], lang:"TypeScript", lic:"MIT", repo:"pnpm/pnpm" },

  { name:"Deno",      cat:"dev",
    desc:"现代 JS/TS 运行时，零配置、内置工具链与权限安全模型。",
    intro:"Deno 是由 Node.js 原作者 Ryan Dahl 打造的现代 JavaScript / TypeScript 运行时。它针对早期 Node 的痛点做了重新设计：内置 TypeScript 支持、打包器、测试运行器、linter 等完整工具链，采用基于权限的安全模型，开箱即用零配置，生态也在快速成长。",
    features:[
      "零配置，直接运行 TypeScript，无需 tsconfig",
      "内置打包器、格式化器、linter、测试运行器",
      "基于权限的安全模型，默认无文件系统 / 网络访问",
      "强大的标准库与内置包管理器（deno add）",
      "同时支持 Node.js 与 npm 包",
      "用 Rust 编写，性能优秀"
    ],
    tags:["Runtime","JS","TS"], lang:"Rust", lic:"MIT", repo:"denoland/deno" },

  { name:"esbuild",   cat:"dev",
    desc:"极速的 JS / TS 打包器与转译器，用 Go 编写，快一个量级。",
    intro:"esbuild 是一个很快的 JavaScript / TypeScript 打包器与转译器，用 Go 编写。它的速度比传统工具（webpack、Rollup）快一到两个数量级，如今已是许多前端项目的默认选择。它支持 tree shaking、代码分割、CSS 处理等，并与各类框架和构建工具深度集成。",
    features:[
      "极速构建与转译，比传统工具快 10–100 倍",
      "支持 JavaScript、TypeScript、JSX、CSS、JSON",
      "内置 tree shaking、代码分割、压缩",
      "用 Go 编写，单二进制、零依赖安装",
      "插件系统，可集成进各种构建流程",
      "也可作为独立的转译器使用"
    ],
    tags:["打包器","JS","转译器"], lang:"Go", lic:"MIT", repo:"evanw/esbuild" },

  { name:"Astro",     cat:"dev",
    desc:"面向内容的 Web 框架，零 JS 默认，可混用任意 UI 框架。",
    intro:"Astro 是一个面向内容站点的下一代 Web 框架。它的核心理念是“零 JS 默认”——页面默认不输出 JavaScript，性能极好，同时又能把任意 UI 框架（React、Vue、Svelte 等）混用在同一个项目里。它有一流的内容集合、岛屿架构与图片组件支持，是内容站、文档站、营销站的热门选择。",
    features:[
      "零 JS 默认，页面加载极快",
      "岛屿架构：只在需要的地方激活交互",
      "混用任意 UI 框架：React / Vue / Svelte / Solid",
      "内容集合：Markdown / MDX / 数据文件，类型安全",
      "内置图片组件，自动优化与响应式",
      "SSR / SSG / 混合输出，一键部署"
    ],
    tags:["框架","SSG","内容"], lang:"TypeScript", lic:"MIT", repo:"withastro/astro" },

  { name:"Llama.cpp", cat:"ai",
    desc:"在 CPU / 轻量硬件上跑大语言模型，纯 C/C++，无需 GPU。",
    intro:"Llama.cpp 是一个用纯 C/C++ 实现的大语言模型推理与微调工具，目标是让大模型能在 CPU、笔记本甚至树莓派等轻量硬件上运行，无需 GPU 和任何深度学习框架。它支持海量模型（Llama、Mistral、Qwen 等）的量化推理，自带命令行工具和推理服务器，是本地跑大模型的基础设施之一。",
    features:[
      "纯 C/C++ 实现，无依赖，CPU 即可跑，无需 GPU",
      "支持海量模型：Llama、Mistral、Qwen、Gemma 等",
      "量化（Q4 / Q5 / Q8）推理，小内存也能跑大模型",
      "内置推理服务器，OpenAI 兼容 API",
      "命令行工具，一条命令单轮问答",
      "跨平台：Linux、macOS、Windows、ARM"
    ],
    tags:["LLM","本地","推理"], lang:"C++", lic:"MIT", repo:"ggml-org/llama.cpp" },

  { name:"Qdrant",    cat:"ai",
    desc:"高性能向量数据库，语义搜索与 RAG 基础设施。",
    intro:"Qdrant 是一个高性能的向量数据库，专为语义搜索和机器学习工作负载而优化。它把向量与关联的载荷（payload）一起存储，提供强大的过滤能力，支持多种索引与量化，是 RAG（检索增强生成）和语义搜索的核心组件。它提供 REST / gRPC API，Docker 一键即可部署。",
    features:[
      "高性能向量存储与检索，语义搜索低延迟",
      "丰富过滤：标量属性与向量结合，精准检索",
      "量化与索引，省内存、提速度",
      "REST / gRPC API，多语言客户端 SDK",
      "支持分布式部署与水平扩展",
      "Docker 一键部署，自带可观测性"
    ],
    tags:["向量数据库","RAG","搜索"], lang:"Rust", lic:"Apache-2.0", repo:"qdrant/qdrant" },

  { name:"Diffusers", cat:"ai",
    desc:"Hugging Face 的扩散模型库，统一 API 做图像 / 视频生成。",
    intro:"Diffusers 是 Hugging Face 推出的扩散模型库。它提供一套统一、易用的 API，让你快速加载并运行大量扩散模型（Stable Diffusion、ControlNet 等），覆盖图像生成、视频生成、超分辨率等任务。配合 Hub 上的模型生态，它是构建 AI 图像 / 视频生成应用的标准工具。",
    features:[
      "统一 API，加载并运行海量扩散模型",
      "支持图像生成、视频生成、超分辨率等任务",
      "Pipeline 一键串联完整推理流程",
      "与 Hub 深度集成，直接下载海量模型",
      "支持多种量化与加速方案",
      "可扩展，可插入自定义模型与调度器"
    ],
    tags:["图像生成","扩散","视频生成"], lang:"Python", lic:"Apache-2.0", repo:"huggingface/diffusers" },

  { name:"Gradio",    cat:"ai",
    desc:"用 Python 几行代码给 ML 模型建 Web 界面。",
    intro:"Gradio 是一个快速为机器学习模型构建 Web 界面的工具。只需几行 Python 代码，就能把模型的输入输出变成一个干净好用的网页界面，无需任何前端知识。它支持大量组件（文本、图像、音频、视频、文件等），非常适合做演示、内部工具和快速原型，可本地或云端部署。",
    features:[
      "几分钟搭好 Web UI，无需前端知识",
      "丰富组件：文本、图像、音频、视频、文件、数据",
      "自动类型映射，直接连接模型函数",
      "内置分享链接，演示一键对外",
      "本地或云端部署（Spaces 等）",
      "主题自定义，响应式布局"
    ],
    tags:["ML","UI","原型"], lang:"Python", lic:"Apache-2.0", repo:"gradio-app/gradio" },

  { name:"Krita",     cat:"design",
    desc:"开源数字绘画软件，专业笔刷引擎与动画功能。",
    intro:"Krita 是一款专业的开源数字绘画软件，面向插画师、概念设计师和漫画作者。它提供强大的笔刷引擎、动画时间轴与洋葱皮等完整动画功能，支持大量文件格式与图层，还有纹理笔刷、色彩管理等特性。免费数字绘画里，它是最常被提到的那一个。",
    features:[
      "专业笔刷引擎，丰富的笔刷预设，手感自然",
      "完整动画功能集：时间轴、洋葱皮、帧插值",
      "图层、剪裁蒙版、选择与变换工具",
      "支持 PSD、OpenRaster 等大量格式",
      "纹理笔刷、色彩管理、HDR",
      "插件系统，跨平台，免费开源"
    ],
    tags:["数字绘画","插画","动画"], lang:"C++", lic:"GPL-3.0", repo:"KDE/krita" },

  { name:"Kdenlive",  cat:"design",
    desc:"开源非线视频剪辑，多轨、滤镜、关键帧动画。",
    intro:"Kdenlive 是一款专业的开源非线性视频编辑软件。它支持多轨时间线剪辑、大量滤镜与转场、关键帧动画，能处理 4K 与 HDR 工作流，并自带字幕编辑与音频工具。它适合个人与小型团队的视频创作，是 Linux 生态下的头部视频编辑器。",
    features:[
      "非线性剪辑：多轨时间线、精确到帧的控制",
      "丰富滤镜、转场与特效",
      "关键帧动画，逐属性精细控制",
      "支持 4K 与 HDR 工作流",
      "音频视频多格式导入、字幕编辑",
      "跨平台，开源，插件生态丰富"
    ],
    tags:["视频剪辑","NLE"], lang:"C++", lic:"GPL-3.0", repo:"KDE/kdenlive" },

  { name:"draw.io",   cat:"design",
    desc:"在线图表与流程图工具，diagram-as-code，可自托管。",
    intro:"draw.io（diagrams.net）是一款免费的在线图表与流程图工具。它支持大量图表类型（流程图、UML、网络拓扑、电路图、组织架构图等），提供拖拽画布、自动对齐与实时协作。它还支持 diagram-as-code（用 SVG / XML 嵌入与渲染），可免费在线使用，也支持自托管。",
    features:[
      "大量图表类型：流程图、UML、网络、电路、组织架构图",
      "拖拽画布，自动对齐、引导线",
      "实时协作，共享编辑",
      "diagram-as-code：用 SVG / XML 嵌入与渲染",
      "导入导出大量格式（PNG、SVG、PDF 等）",
      "免费使用、可自托管、开源"
    ],
    tags:["图表","流程图","UML"], lang:"TypeScript", lic:"Apache-2.0", repo:"jgraph/drawio" },

  { name:"Docker",    cat:"host",
    desc:"容器引擎，把应用与环境打包成镜像，跨环境一致。",
    intro:"Docker 是一个容器平台，它把应用连同其依赖、运行时和系统工具打包成一个轻量、可移植的镜像，保证在开发、测试、生产环境表现一致。它拥有庞大的镜像仓库生态（Docker Hub、私有 registry），并支持多容器编排，如今应用交付与部署基本都走它。",
    features:[
      "容器化打包：镜像 + 容器，环境隔离可复现",
      "丰富镜像仓库生态：Docker Hub、私有 registry",
      "Dockerfile 声明式构建自定义镜像",
      "多容器编排（compose），一键起多个服务",
      "网络、卷、资源限制管理",
      "跨平台：Windows、macOS、Linux、ARM"
    ],
    tags:["容器","DevOps","镜像"], lang:"Go", lic:"Apache-2.0", repo:"moby/moby" },

  { name:"Kubernetes", cat:"host",
    desc:"容器编排平台，自动化部署、扩缩容与故障恢复。",
    intro:"Kubernetes（K8s）是业界标准的容器编排平台。它自动管理容器化应用的部署、扩缩容、负载均衡与故障恢复，提供声明式 API 让你描述期望状态。它拥有庞大的生态（Helm、operator、服务网格等），是云原生应用的基础设施。",
    features:[
      "容器编排：自动化部署、滚动更新、扩缩容",
      "自愈：自动重启、存活探针",
      "服务发现、负载均衡、Ingress",
      "声明式 API，用 YAML 描述期望状态",
      "庞大生态：Helm、operator、服务网格、CI/CD",
      "跨云、本地、混合部署"
    ],
    tags:["编排","云原生","DevOps"], lang:"Go", lic:"Apache-2.0", repo:"kubernetes/kubernetes" },

  { name:"Prometheus", cat:"host",
    desc:"监控告警系统，时序数据库与 PromQL 查询。",
    intro:"Prometheus 是一个开源的监控与告警系统，是云原生监控生态的核心组件。它通过拉取（scrape）方式采集各服务的指标，用 PromQL 查询语言做灵活计算，并内置强大的告警规则与 Alertmanager 告警路由。系统监控这块，它是最常见的那套。",
    features:[
      "指标采集与时间序列存储",
      "强大的 PromQL 查询语言，灵活计算指标",
      "内置告警规则，Alertmanager 告警路由与抑制",
      "丰富的 exporter 生态：节点、进程、中间件",
      "服务发现、多维标签",
      "单 Go 二进制，跨平台"
    ],
    tags:["监控","告警","指标"], lang:"Go", lic:"Apache-2.0", repo:"prometheus/prometheus" },

  { name:"Grafana",   cat:"host",
    desc:"开源可视化仪表盘，连接多种数据源。",
    intro:"Grafana 是一款开源的数据可视化与仪表盘软件。它能连接多种数据源（Prometheus、MySQL、Elasticsearch 等），构建丰富的交互式仪表盘，并支持告警与标注。它与 Prometheus 搭配，构成了最常见的开源监控方案，插件生态与社区仪表盘模板非常丰富。",
    features:[
      "连接多种数据源：指标、日志、链路",
      "丰富可视化：时序图、热力图、地理、表格",
      "交互式仪表盘、变量、下钻",
      "告警与标注",
      "插件生态，社区仪表盘模板丰富",
      "多租户、权限、跨平台"
    ],
    tags:["可视化","仪表盘","监控"], lang:"TypeScript", lic:"AGPL-3.0", repo:"grafana/grafana" },

  { name:"Restic",    cat:"host",
    desc:"加密、去重、增量备份工具，支持多种云后端。",
    intro:"Restic 是一款加密、去重、增量的备份工具。它把备份数据压缩、加密、去重后，可存放在多种后端（S3、GCS、B2、SFTP、本地等）。增量备份省时省空间，命令行友好，快照可对比与恢复。它是个人与企业数据备份的热门选择。",
    features:[
      "加密、去重、增量备份",
      "支持多种存储后端：S3、GCS、B2、SFTP、本地",
      "压缩与加密，数据安全",
      "命令行友好，快照管理与对比",
      "定时备份、保留策略",
      "跨平台，单二进制"
    ],
    tags:["备份","加密","云存储"], lang:"Go", lic:"BSD-2-Clause", repo:"restic/restic" },

  { name:"Uptime Kuma", cat:"host",
    desc:"自托管在线监控，实时状态页与多渠道通知。",
    intro:"Uptime Kuma 是一款易用的自托管在线监控工具。它支持 HTTP、TCP、Ping、关键字、SSL 证书等多种监控方式，能实时通过邮件、Telegram、Slack 等渠道告警，并自带美观的状态页。它适合个人与团队监控自己的服务。",
    features:[
      "多类型监控：HTTP、TCP、Ping、关键字、SSL",
      "多渠道通知：邮件、Telegram、Slack、webhook",
      "美观的状态页，可公开或私有",
      "自托管，Docker 一键部署",
      "历史可用性与响应时间统计",
      "多用户、权限、跨平台"
    ],
    tags:["监控","在线状态","自托管"], lang:"TypeScript", lic:"MIT", repo:"louislam/uptime-kuma" },
  { name:"Joplin", cat:"prod",
    desc:"开源的笔记与待办应用，跨平台端到端加密同步。",
    intro:"Joplin 是开源的笔记与任务管理应用，支持 Windows、macOS、Linux、iOS、Android 全平台。它把笔记、待办、标签、笔记本组织成体系，支持 Markdown 与富文本，最重要的是端到端加密同步——数据落在你自己的服务器或网盘里，安全可控，平台看不到明文。",
    features:[
      "跨平台全端覆盖：桌面、手机、网页一套笔记体系",
      "端到端加密同步：数据存自己的 Nextcloud / WebDAV / Dropbox",
      "笔记本 + 标签 + 待办多层组织，支持嵌套笔记本",
      "Markdown 与富文本双写，代码块、表格、任务列表原生支持",
      "支持导入 Evernote、Notion 等主流笔记应用数据",
      "开源免费，社区活跃，插件可扩展"
    ],
    tags:["笔记","加密","跨平台"], lang:"TypeScript", lic:"GPL-3.0", repo:"laurent22/joplin" },
  { name:"Bitwarden", cat:"net",
    desc:"开源的密码管理器，可自托管服务器，全平台同步。",
    intro:"Bitwarden 是开源的密码管理解决方案，客户端覆盖所有平台，核心是你可以自己托管的服务器。它帮你集中管理密码、SSH 密钥、支付卡、安全笔记，用主密码 + 端到端加密保护，不再依赖任何单一云厂商。",
    features:[
      "自托管服务器，密码库数据完全掌握在自己手里",
      "端到端加密：客户端加密后才上传，服务器只见密文",
      "全平台客户端：桌面、浏览器、手机、命令行、密码管理器 API",
      "生成强密码、自动填充表单、管理 SSH 密钥与支付卡",
      "团队共享集合与权限控制，适合团队密钥管理",
      "开源免费，社区维护的 Vaultwarden 更轻量易部署"
    ],
    tags:["密码管理","安全","自托管"], lang:"TypeScript", lic:"GPL-3.0", repo:"bitwarden/server" },
  { name:"VLC", cat:"media",
    desc:"无所不放的开源媒体播放器，几乎支持所有格式。",
    intro:"VLC（VideoLAN Client）是最著名的开源媒体播放器，支持 Windows、macOS、Linux、Android、iOS。它内置几乎所有音视频格式的解码器，能播放文件、光盘、网络串流，还能做格式转换。免费、无广告、无追踪，跨平台播放这块用它的人最多。",
    features:[
      "内置解码器，几乎任何音视频格式直接播，不用装额外解码包",
      "播放本地文件、CD/DVD/蓝光、网络串流、直播源",
      "跨平台全端：桌面、手机、电视（Android TV）",
      "媒体库管理、播放列表、字幕加载",
      "附带格式转换能力，把媒体转成通用格式",
      "无广告、无追踪、完全开源免费"
    ],
    tags:["播放器","媒体","跨平台"], lang:"C", lic:"GPL-2.0", repo:"videolan/vlc" },
  { name:"mpv", cat:"media",
    desc:"命令行驱动的高性能视频播放器，极致画质与低资源占用。",
    intro:"mpv 是命令行驱动的高性能媒体播放器，以出色的画面质量和极低的资源占用著称。它没有花哨的界面，一切通过配置文件和快捷键控制，却能把播放体验做得很到位——从软解到硬解、从画质增强到 HDR，全都能精细调校，进阶玩家偏爱它。",
    features:[
      "极致画质：支持 HDR、色调映射、各类视频滤镜与画质增强",
      "硬解支持全面：NVDEC、VAAPI、VideoToolbox 等硬件解码",
      "纯配置驱动：一个配置文件定义全部行为，高度可定制",
      "低资源占用，老机器也能流畅播放高清视频",
      "跨平台，命令行、终端、图形界面都能用",
      "脚本可扩展，Lua / JavaScript 自定义功能"
    ],
    tags:["播放器","命令行","画质"], lang:"C", lic:"GPL-2.0", repo:"mpv-player/mpv" },
  { name:"Jellyfin", cat:"host",
    desc:"开源的家庭媒体服务器，自建你的 Netflix。",
    intro:"Jellyfin 是开源的家庭媒体服务器，把本地的电影、剧集、音乐、照片整理成一个漂亮的串流服务，浏览器和电视盒子都能访问。它没有订阅费、没有广告、不收集任何数据，界面和体验对标商业流媒体，折腾党自建影音库，多半就是它。",
    features:[
      "自动抓取媒体元数据，海报、简介、演员信息一键补齐",
      "实时转码，手机 / 电视 / 网页都能流畅播放",
      "多用户、播放进度、续播推荐，体验对标 Netflix",
      "无订阅费、无广告、完全自托管，数据不出家门",
      "支持 Android TV、Apple TV、Fire TV、Roku 等大屏端",
      "开源免费，社区插件丰富"
    ],
    tags:["媒体服务器","自托管","影音库"], lang:"C#", lic:"GPL-3.0", repo:"jellyfin/jellyfin" },
  { name:"Nextcloud", cat:"host",
    desc:"自托管网盘与协作平台，Google Drive 的开源替代。",
    intro:"Nextcloud 是自托管的网盘与协作套件，相当于自己搭一套 Google Drive。它提供文件存储、共享、实时协作编辑、日历、通讯录、任务，还有一大堆应用市场扩展。数据完全在自己服务器上，是隐私敏感团队和个人自建云盘的主力。",
    features:[
      "自托管文件存储，数据完全自主可控",
      "多端同步与共享：桌面、手机、网页、WebDAV",
      "实时协作编辑（OnlyOffice / Collabora 集成）",
      "日历、通讯录、任务、便签等全套办公套件",
      "端到端加密选项，敏感文件额外保护",
      "海量应用市场扩展，按需加装"
    ],
    tags:["网盘","自托管","协作"], lang:"PHP", lic:"AGPL-3.0", repo:"nextcloud/server" },
  { name:"DBeaver", cat:"dev",
    desc:"开源的通用数据库管理工具，支持几乎所有数据库。",
    intro:"DBeaver 是开源的跨平台数据库管理工具，一个客户端连接 MySQL、PostgreSQL、Oracle、SQL Server、SQLite、ClickHouse 等几十种数据库。它提供 SQL 编辑器、数据浏览、ER 图、数据导入导出、数据同步，是 DBA 和开发者的通用数据库工作台。",
    features:[
      "支持几十种数据库：关系型、NoSQL、OLAP 一网打尽",
      "完整的 SQL 编辑器：语法高亮、自动补全、执行计划查看",
      "图形化数据浏览与编辑，直接改表结构",
      "ER 图可视化，理解复杂数据模型",
      "数据导入导出、跨库数据同步",
      "跨平台、开源免费，企业版可商用"
    ],
    tags:["数据库","DBA","SQL"], lang:"Java", lic:"Apache-2.0", repo:"dbeaver/dbeaver" },
  { name:"Wireshark", cat:"net",
    desc:"业界标准的网络抓包分析器，逐包排查网络问题。",
    intro:"Wireshark 是业界标准的网络协议分析器，能实时捕获网络流量并逐包解码上千种协议。无论是排查网络故障、分析协议行为、还是做安全审计，它都能把看不见的网络流量变成看得懂的包序列，网络工程师和安全工程师基本人手一个。",
    features:[
      "实时抓包，支持上千种协议的深度解码",
      "强大的过滤器：按协议、地址、内容快速筛选",
      "流重组、时序分析，定位网络问题",
      "跨平台：Windows、macOS、Linux",
      "支持离线分析 pcap 文件，复盘历史流量",
      "开源免费，插件可扩展协议解析"
    ],
    tags:["抓包","网络分析","安全"], lang:"C", lic:"GPL-2.0", repo:"wireshark/wireshark" },
  { name:"OPNsense", cat:"net",
    desc:"基于 FreeBSD 的开源防火墙与路由器，企业级网络防护。",
    intro:"OPNsense 是基于 FreeBSD 的开源防火墙与路由器系统，提供防火墙规则、NAT、VPN、流量整形、入侵检测等完整网络防护能力。它把企业级的边界安全能力开源化，适合自建机房、家庭网络、边缘节点做网络入口防护与流量管控。",
    features:[
      "状态化防火墙规则，细粒度访问控制",
      "内置 VPN（WireGuard、OpenVPN、IPsec），安全远程接入",
      "流量整形与 QoS，带宽分配与限速",
      "入侵检测与预防（IDS/IPS），实时威胁告警",
      "负载均衡与高可用（HA）部署",
      "基于 FreeBSD，稳定可靠，社区活跃"
    ],
    tags:["防火墙","路由器","网络防护"], lang:"PHP", lic:"MIT", repo:"opnsense/core" },
  { name:"Bruno", cat:"dev",
    desc:"开源的 API 测试客户端，Git 友好的 Postman 替代品。",
    intro:"Bruno 是开源的 API 测试与调试客户端，定位是 Postman 的开源替代。它最大的特点是 Git 友好——所有请求、集合、环境配置都是纯文本文件，可以直接放进 Git 仓库做版本管理和团队协作，摆脱了 SaaS 锁定，是开发者本地 API 调试的新选择。",
    features:[
      "集合管理：请求、环境变量、前置/后置脚本一应俱全",
      "Git 友好：请求与配置都是文本文件，可直接版本管理",
      "支持 REST、GraphQL、WebSocket、gRPC 多种协议",
      "离线优先，无账号、无云锁定，数据本地保存",
      "支持 cURL 导入导出，兼容 Postman 集合",
      "跨平台桌面客户端，开源免费"
    ],
    tags:["API测试","Postman","开发者工具"], lang:"TypeScript", lic:"MIT", repo:"usebruno/bruno" },
  { name:"Metabase", cat:"ai",
    desc:"开源的 BI 与数据可视化平台，非技术人员也能自助查数。",
    intro:"Metabase 是开源的商业智能与数据可视化平台，让不懂 SQL 的业务人员也能自助查询数据库、拖拽做出图表和仪表盘。它连接各类数据库，提供自然语言提问、预定义问题、权限管控，是中小团队自建数据分析平台的高性价比选择。",
    features:[
      "拖拽式建图：不用写 SQL 也能出报表和仪表盘",
      "连接 MySQL、PostgreSQL、ClickHouse 等主流数据源",
      "自然语言提问，业务人员自助取数",
      "预定义问题与定时报告，主动推送分析结果",
      "细粒度权限与数据行级过滤，控制数据可见范围",
      "开源自托管，无席位费，社区活跃"
    ],
    tags:["数据可视化","BI","自助分析"], lang:"Clojure", lic:"AGPL-3.0", repo:"metabase/metabase" },
  { name:"Stable Diffusion WebUI", cat:"ai",
    desc:"基于 Stable Diffusion 的图形化文生图界面，AI 绘画主力工具。",
    intro:"Stable Diffusion WebUI 是围绕 Stable Diffusion 模型构建的图形化文生图 / 图生图界面。它提供提示词、负向提示词、采样器、分辨率、LoRA、ControlNet 等完整的创作控制，把 AI 绘画从命令行门槛拉低到拖拽可用，是本地跑 AI 绘画事实上的标准入口。",
    features:[
      "文生图 / 图生图，提示词驱动出图",
      "完整的参数控制：采样器、步数、CFG、分辨率、种子",
      "LoRA 与 ControlNet 支持，精确控制风格与构图",
      "内置大量扩展（ADetailer、Regional Prompt 等），能力持续扩展",
      "本地运行，模型与数据不出机器",
      "跨平台，社区教程与模型生态极其丰富"
    ],
    tags:["AI绘画","文生图","Stable Diffusion"], lang:"Python", lic:"GPL-3.0", repo:"AUTOMATIC1111/stable-diffusion-webui" },

  { name:"Git",     cat:"dev",
    desc:"分布式版本控制系统，现代软件协作的事实标准。",
    intro:"Git 是由 Linus Torvalds 为管理 Linux 内核而创建的分布式版本控制系统。它把版本历史存储在本地，克隆、分支、合并几乎零延迟，是如今几乎所有开源项目与团队协作的底层基础设施。从提交、回滚到复杂合并，Git 提供了一整套精确且高效的版本管理原语。",
    features:[
      "分布式架构：每个本地仓库都是完整副本，离线也能提交与回溯",
      "分支轻量：创建/切换/合并分支毫秒级，鼓励频繁分支",
      "强大的合并与 rebase，处理复杂协作历史",
      "暂存区精确控制每次提交的内容",
      "钩子、子模块、稀疏检出等高级能力",
      "开源（GPL-2.0），跨平台，生态工具极丰富"
    ],
    tags:["版本控制","VCS","CLI"], lang:"C", lic:"GPL-2.0", repo:"git/git" },

  { name:"Python",  cat:"dev",
    desc:"通用编程语言，语法简洁，生态覆盖从脚本到 AI。",
    intro:"Python 是一门以可读性著称的通用编程语言，由 Guido van Rossum 创建。它的语法接近自然语言，学习曲线平缓，同时拥有庞大的标准库与第三方生态。从 Web、自动化、数据分析到机器学习，Python 都是常用语言之一，也是 AI 时代最活跃的那门。",
    features:[
      "语法简洁、缩进即结构，上手极快",
      "庞大的标准库：文件、网络、并发、系统操作一应俱全",
      "丰富的第三方生态，pip 一键安装数十万包",
      "解释型、动态类型，适合快速原型与脚本",
      "多范式：面向对象、函数式、过程式皆可",
      "开源（PSF 许可），跨平台，社区极其活跃"
    ],
    tags:["编程语言","解释器","AI"], lang:"C", lic:"PSF", repo:"python/cpython" },

  { name:"Node.js", cat:"dev",
    desc:"基于 V8 的 JavaScript 运行时，让 JS 走出浏览器。",
    intro:"Node.js 让 JavaScript 能在服务器端运行，它基于 Chrome 的 V8 引擎，采用事件驱动、非阻塞 I/O 模型，用单线程就能处理海量并发连接。它把前后端统一到一门语言，催生了 npm 这个全球最大的包生态，是全栈开发与现代后端的重要基石。",
    features:[
      "事件循环 + 非阻塞 I/O，单线程高并发",
      "与前端共用 JavaScript，全栈一体化",
      "npm 生态：全球最大的包仓库",
      "丰富的服务器框架：Express、Fastify、Koa 等",
      "强大的 CLI 与工具链开发能力",
      "开源（MIT），跨平台，性能持续优化"
    ],
    tags:["运行时","JavaScript","后端"], lang:"C++", lic:"MIT", repo:"nodejs/node" },

  { name:"npm",     cat:"dev",
    desc:"Node.js 的包管理器，全球最大的软件注册表。",
    intro:"npm 是 Node.js 的默认包管理器，也是全球最大的开源软件注册表，收录数百万个包。它处理依赖解析、版本锁定、脚本编排，让 JavaScript 开发从“手写一切”变成“按需安装”。npm 的 package.json 与 scripts 机制，已经成为前端工程的标准化配置中心。",
    features:[
      "全球最大的包注册表，数百万可复用包",
      "语义化版本与依赖树解析",
      "package-lock.json 锁定精确版本，构建可复现",
      "scripts 编排：install、build、test 一条命令",
      "支持工作区（workspaces）管理大型 monorepo",
      "开源（ISC），跨平台，与 CI/CD 深度集成"
    ],
    tags:["包管理","JavaScript","CLI"], lang:"JavaScript", lic:"ISC", repo:"npm/cli" },

  { name:"Rust",    cat:"dev",
    desc:"系统级编程语言，以内存安全与高性能著称。",
    intro:"Rust 是一门聚焦内存安全与并发的系统级编程语言，由 Mozilla 发起、现由 Rust 基金会维护。它通过所有权与借用检查在编译期杜绝空指针、数据竞争，无需垃圾回收就达到 C++ 级性能。Rust 正在重塑系统编程，CLI 工具、WebAssembly、操作系统内核里都常见它的身影。",
    features:[
      "所有权系统：编译期保证内存安全，无 GC 无空指针",
      "零成本抽象：高级语法不牺牲运行时性能",
      " fearless concurrency：类型系统杜绝数据竞争",
      "Cargo 构建与包管理，依赖管理极省心",
      "强大的宏系统与 trait 泛型",
      "开源（MIT/Apache-2.0），跨平台，持续入选最爱语言"
    ],
    tags:["编程语言","系统编程","安全"], lang:"Rust", lic:"MIT OR Apache-2.0", repo:"rust-lang/rust" },

  { name:"Go",      cat:"dev",
    desc:"谷歌出品的语言，简单高效，云原生时代的基石。",
    intro:"Go（Golang）由谷歌三人组设计，目标是简单、快速、高效。它内置垃圾回收与并发的 goroutine + channel 模型，编译快、部署简单，一个二进制跑遍所有平台。Docker、Kubernetes 等云原生基础设施几乎都用 Go 编写，它已成为后端与基础设施开发的主流选择。",
    features:[
      "goroutine + channel：轻量并发，写并发程序极简单",
      "编译快、二进制小，无运行时依赖，部署极简单",
      "语法极简，学习曲线平缓",
      "内置强大的标准库：网络、并发、测试",
      "go mod 依赖管理，构建可复现",
      "开源（BSD-3-Clause），云原生生态核心"
    ],
    tags:["编程语言","云原生","并发"], lang:"Go", lic:"BSD-3-Clause", repo:"golang/go" },

  { name:"PostgreSQL", cat:"dev",
    desc:"功能强大的开源关系数据库，以标准与可靠著称。",
    intro:"PostgreSQL 是一款历经三十多年的开源对象关系数据库，以严格遵循 SQL 标准、功能丰富、稳定性强著称。它支持复杂查询、JSON、全文检索、地理信息、自定义类型与扩展，是许多严肃生产系统的首选数据库。其 MVCC 与 WAL 机制保证了高并发下的数据一致性。",
    features:[
      "严格遵循 SQL 标准，功能完整",
      "丰富的扩展生态：PostGIS、pg_trgm、逻辑复制等",
      "强大的 JSON / JSONB 支持，可当文档库用",
      "MVCC 并发控制，高并发下数据一致",
      "成熟的复制、分区、全文检索",
      "开源（PostgreSQL 许可），跨平台，企业级可靠"
    ],
    tags:["数据库","SQL","关系型"], lang:"C", lic:"PostgreSQL", repo:"postgres/postgres" },

  { name:"MySQL",   cat:"dev",
    desc:"最流行的开源关系数据库，Web 应用的后端基石。",
    intro:"MySQL 是全球部署量最大的开源关系数据库，由瑞典 MySQL AB 创建，后被 Oracle 收购。它以性能、易用性和成熟的生态著称，是 LAMP 架构的核心，支撑着海量 Web 应用。InnoDB 引擎提供事务与行级锁，配合主从复制与分库分表，能扩展到非常大的规模。",
    features:[
      "InnoDB 引擎：事务、行级锁、崩溃恢复",
      "主从复制与高可用方案成熟",
      "丰富的存储引擎可选",
      "庞大的生态与工具链，文档齐全",
      "性能优化手段多：索引、查询缓存、分区",
      "开源（GPL-2.0），跨平台，社区极其活跃"
    ],
    tags:["数据库","SQL","关系型"], lang:"C++", lic:"GPL-2.0", repo:"mysql/mysql-server" },

  { name:"Redis",   cat:"dev",
    desc:"内存键值数据库，缓存与会话存储的首选。",
    intro:"Redis 是一个开源的内存数据结构存储，常用作缓存、消息队列、会话存储。它以很快的读写性能、丰富的数据结构（字符串、列表、哈希、集合、有序集合）和持久化能力著称。Redis 的原子操作与发布订阅机制，让它成为构建实时系统、限流、排名的利器。",
    features:[
      "纯内存存储，读写速度极高",
      "丰富数据结构：String、List、Hash、Set、ZSet",
      "原子操作与 Lua 脚本，保证并发安全",
      "持久化：RDB 快照与 AOF 日志",
      "发布订阅、Stream 消息队列",
      "开源（BSD-3-Clause/SSPL），跨平台，生态极广"
    ],
    tags:["缓存","键值","内存"], lang:"C", lic:"BSD-3-Clause", repo:"redis/redis" },

  { name:"MongoDB", cat:"dev",
    desc:"文档型数据库，以灵活 schema 与水平扩展著称。",
    intro:"MongoDB 是一款开源的文档数据库，用类似 JSON 的 BSON 存储数据，无需预定义 schema，非常适合迭代快的应用。它以水平扩展（分片）、丰富的查询能力和灵活的文档模型著称，是 NoSQL 阵营的代表，被大量 Web 与移动端应用用于存储半结构化数据。",
    features:[
      "文档模型：BSON 存储，schema 灵活",
      "水平扩展：自动分片，支撑海量数据",
      "丰富的查询与聚合管道",
      "多文档事务，保证一致性",
      "副本集高可用，自动故障转移",
      "开源（SSPL-1.0），跨平台，生态成熟"
    ],
    tags:["数据库","NoSQL","文档型"], lang:"C++", lic:"SSPL-1.0", repo:"mongodb/mongo" },

  { name:"SQLite",  cat:"dev",
    desc:"嵌入式关系数据库，一个文件即数据库。",
    intro:"SQLite 是一款零配置的嵌入式关系数据库，整个数据库就是一个文件，无需独立服务进程。它以体积小、速度快、可靠性高著称，被用在手机、浏览器、操作系统等几乎一切地方。它支持标准 SQL，事务完整，轻量级应用和本地存储，很多人直接拿它当默认。",
    features:[
      "零配置：一个文件即数据库，无需服务进程",
      "体积极小，可嵌入任何应用",
      "完整事务支持，ACID 保证",
      "标准 SQL，兼容性好",
      "极快：内存映射 + 优化器",
      "公有领域，跨平台，被全球数十亿设备使用"
    ],
    tags:["数据库","嵌入式","SQL"], lang:"C", lic:"Public Domain", repo:"sqlite/sqlite" },

  { name:"Jupyter Notebook", cat:"dev",
    desc:"交互式计算笔记本，数据科学的标准工作台。",
    intro:"Jupyter Notebook 是一个基于 Web 的交互式计算环境，让你把代码、文字、公式、图表写在一起，逐格运行。它是数据科学、机器学习教学与研究的事实标准，支持 Python、R、Julia 等数十种语言。配合丰富的可视化库，它是探索数据与原型验证的理想工具。",
    features:[
      "交互式：逐格运行，即时看到结果",
      "富输出：图表、表格、LaTeX、Markdown 混排",
      "支持数十种语言内核（Python、R、Julia…）",
      "强大的数据科学生态集成",
      "可导出为 HTML、PDF、幻灯片",
      "开源（BSD-3-Clause），跨平台，社区庞大"
    ],
    tags:["数据科学","笔记本","交互式"], lang:"Python", lic:"BSD-3-Clause", repo:"jupyter/notebook" },

  { name:"Vite",    cat:"dev",
    desc:"新一代前端构建工具，开发秒级热更新。",
    intro:"Vite 是一款由 Vue 作者打造的新一代前端构建工具。它在开发时利用浏览器原生 ES 模块，跳过预打包，实现毫秒级冷启动与即时热更新；在生产环境则用 Rollup 优化打包。Vite 把现代前端的开发体验拉到了新高度，被大量 React、Vue、Svelte 项目采用。",
    features:[
      "开发时原生 ESM，冷启动毫秒级",
      "即时热模块替换（HMR），改代码秒级生效",
      "生产环境 Rollup 打包，产物优化",
      "内置 TypeScript、JSX、CSS 预处理支持",
      "丰富的官方与社区插件",
      "开源（MIT），跨平台，性能极佳"
    ],
    tags:["构建工具","前端","打包"], lang:"TypeScript", lic:"MIT", repo:"vitejs/vite" },

  { name:"Webpack", cat:"dev",
    desc:"模块打包器，前端工程的成熟基石。",
    intro:"Webpack 是一个静态模块打包器，它把各种资源（JS、CSS、图片、字体）当作模块图来解析与打包，输出浏览器可直接运行的产物。它拥有很大的插件与 loader 生态，几乎能处理任何前端构建需求，是许多大型前端项目的底层构建引擎。",
    features:[
      "模块图解析：任何资源都能作为模块打包",
      "极其丰富的 loader 与插件生态",
      "代码分割、懒加载、Tree Shaking",
      "HMR 热替换，开发体验流畅",
      "配置灵活，能应对复杂工程",
      "开源（MIT），跨平台，生态成熟稳定"
    ],
    tags:["构建工具","前端","打包"], lang:"JavaScript", lic:"MIT", repo:"webpack/webpack" },

  { name:"Jest",    cat:"dev",
    desc:"Facebook 出品的 JavaScript 测试框架，开箱即用。",
    intro:"Jest 是 Facebook 开源的 JavaScript 测试框架，以“零配置、开箱即用”著称。它内置断言、模拟（mock）、快照测试，并默认提供类似 Jasmine 的 API。Jest 的速度快、隔离好，是 React 与 Node.js 项目最流行的测试方案之一。",
    features:[
      "零配置，安装即可写测试",
      "内置 mock、spy、快照测试",
      "并行运行，速度快",
      "模块隔离，测试互不干扰",
      "与 React、React Testing Library 深度集成",
      "开源（MIT），跨平台，社区庞大"
    ],
    tags:["测试","JavaScript","单元测试"], lang:"JavaScript", lic:"MIT", repo:"jestjs/jest" },

  { name:"Playwright", cat:"dev",
    desc:"微软出品的端到端浏览器自动化框架。",
    intro:"Playwright 是微软开源的浏览器自动化与端到端测试框架，支持 Chromium、Firefox、WebKit 三大引擎。它以稳定、快速、跨浏览器著称，内置自动等待、网络拦截、多上下文并行等能力，让 E2E 测试不再是“脆弱易碎”的代名词。",
    features:[
      "跨浏览器：Chromium、Firefox、WebKit 一套代码",
      "自动等待，告别 sleep，测试稳定",
      "网络拦截与 mock，测试隔离",
      "多浏览器上下文并行，速度快",
      "强大的断言与 Trace 调试",
      "开源（Apache-2.0），跨平台，企业级可靠"
    ],
    tags:["测试","E2E","浏览器自动化"], lang:"TypeScript", lic:"Apache-2.0", repo:"microsoft/playwright" },

  { name:"TypeScript", cat:"dev",
    desc:"JavaScript 的超集，静态类型让大型项目更可靠。",
    intro:"TypeScript 是微软开发的 JavaScript 超集，在 JS 之上加入了静态类型系统。它能在编译期发现大量错误，提供强大的类型推断与智能提示，让大型前端与 Node.js 项目的可维护性提升明显。TypeScript 编译成普通 JS，与现有生态无缝兼容。",
    features:[
      "静态类型：编译期捕获错误，减少运行时 bug",
      "强大的类型推断，减少样板",
      "与 JavaScript 完全兼容，渐进采用",
      "编辑器智能提示与重构能力极强",
      "可编译到 ES5/ES6，兼容旧环境",
      "开源（Apache-2.0），跨平台，行业标准"
    ],
    tags:["编程语言","类型","JavaScript"], lang:"TypeScript", lic:"Apache-2.0", repo:"microsoft/TypeScript" },

  { name:"GraphQL", cat:"dev",
    desc:"API 查询语言，客户端只取需要的字段。",
    intro:"GraphQL 是 Facebook 开源的 API 查询语言与运行时。它让客户端精确声明需要哪些字段，服务端只返回所需数据，避免传统 REST 的过度获取与请求不足。GraphQL 的强类型 schema、自省能力和单端点设计，使 API 演进与前后端协作更加高效。",
    features:[
      "客户端精确取数，避免过度/不足获取",
      "强类型 schema，前后端契约清晰",
      "自省能力：自动生成交互式文档",
      "单端点，减少 HTTP 请求数",
      "数据加载器（Dataloader）解决 N+1",
      "开源（MIT），跨平台，生态成熟"
    ],
    tags:["API","查询语言","后端"], lang:"JavaScript", lic:"MIT", repo:"graphql/graphql-js" },

  { name:"Vim",     cat:"dev",
    desc:"经典模态编辑器，键盘驱动的效率标杆。",
    intro:"Vim 是一款诞生于 1991 年的经典模态文本编辑器，是 vi 的增强版。它以“手指不离开主键区”的操作范式著称，配合强大的宏、插件与脚本能力，成为无数工程师的效率工具。Vim 的编辑命令（删除、复制、替换）以“动词+对象”组合，效率很高。",
    features:[
      "模态编辑：正常/插入/视觉模式，键盘驱动",
      "强大的文本对象与宏，批量操作极快",
      "插件系统成熟，可定制性极强",
      "极轻量，终端里飞快，远程 SSH 利器",
      "完善的脚本与配置生态",
      "开源（Vim 许可），跨平台，历史久远"
    ],
    tags:["编辑器","TUI","模态"], lang:"C", lic:"Vim", repo:"vim/vim" },

  { name:"Emacs",   cat:"dev",
    desc:"可扩展的文本编辑器，一个能编程的操作系统。",
    intro:"Emacs 是一款自 1976 年存在的可扩展文本编辑器，内置 Emacs Lisp，用户可以用它编写插件、扩展几乎一切功能。它不只是编辑器，更是一个可编程的工作环境——日历、邮件、终端、org 笔记都能在 Emacs 里完成。对追求“一切皆可扩展”的用户，Emacs 是独一无二的存在。",
    features:[
      "Emacs Lisp：用编程语言扩展编辑器本身",
      "org-mode：笔记、任务、日程一体化",
      "内置终端、邮件、日历、版本控制",
      "强大的宏与自定义，工作流全键盘",
      "插件生态庞大，可塑性强",
      "开源（GPL-3.0），跨平台，历史悠久"
    ],
    tags:["编辑器","可编程","Lisp"], lang:"C", lic:"GPL-3.0", repo:"emacs/emacs" },

  { name:"Docker Compose", cat:"dev",
    desc:"用 YAML 定义并运行多容器应用。",
    intro:"Docker Compose 让你用一个 YAML 文件定义一组相互关联的容器（web、db、redis…），然后一条命令起整套应用。它处理服务间网络、依赖顺序、环境变量，是本地开发、演示环境、CI 里搭建多服务栈的标准方式，极大降低了多容器应用的编排门槛。",
    features:[
      "YAML 定义多服务：一条命令起整套应用",
      "自动创建网络，服务间按名互联",
      "处理依赖顺序与健康检查",
      "环境变量与卷挂载，配置灵活",
      "支持 profiles 按需启用服务",
      "开源（Apache-2.0），跨平台，生态成熟"
    ],
    tags:["容器","编排","开发环境"], lang:"Go", lic:"Apache-2.0", repo:"docker/compose" },

  { name:"Jenkins",  cat:"dev",
    desc:"老牌 CI/CD 服务器，插件生态极其丰富。",
    intro:"Jenkins 是一款历史悠久的开源持续集成/持续交付服务器，用 Java 编写。它以插件生态著称，数千个插件覆盖构建、测试、部署、通知等几乎一切环节。Jenkins 的流水线（Pipeline as Code）让 CI/CD 流程可以用声明式语法定义，是许多企业自动化交付的核心。",
    features:[
      "插件生态庞大，几乎无所不能",
      "Pipeline as Code：声明式流水线",
      "支持任意平台与语言构建",
      "定时任务、触发器、多节点调度",
      "权限、凭据、审计等企业级能力",
      "开源（MIT），跨平台，历史久远"
    ],
    tags:["CI/CD","自动化","构建"], lang:"Java", lic:"MIT", repo:"jenkinsci/jenkins" },

  { name:"GitLab CE", cat:"dev",
    desc:"一体化 DevOps 平台，代码托管到部署一条龙。",
    intro:"GitLab 是一款一体化的 DevOps 平台，把代码托管、CI/CD、代码评审、问题跟踪、制品仓库、容器镜像、监控集成在一个产品里。GitLab CE 是它的社区版，开源可用。GitLab 的 .gitlab-ci.yml 让 CI/CD 配置即代码，是许多团队从 Git 迁移的目的地。",
    features:[
      "一体化：代码、CI/CD、问题、制品、镜像",
      ".gitlab-ci.yml 配置即代码",
      "内置代码评审与合并请求",
      "容器镜像与包注册表",
      "权限、分支保护、审计等企业能力",
      "开源（MIT，CE 版），跨平台，功能完整"
    ],
    tags:["DevOps","代码托管","CI/CD"], lang:"Ruby", lic:"MIT", repo:"" ,official:"https://gitlab.com/gitlab-org/gitlab"},

  { name:"Gradle",  cat:"dev",
    desc:"Java/Android 世界的构建工具，Kotlin DSL 强大。",
    intro:"Gradle 是一款高度灵活的构建工具，最初为 Java 设计，如今是 Android 应用的官方构建系统。它支持 Groovy 与 Kotlin DSL，构建脚本可高度定制，配合增量构建与构建缓存，大型项目的构建速度很快。Gradle 的依赖管理与多项目构建能力，让它成为 JVM 生态的构建标杆。",
    features:[
      "Groovy / Kotlin DSL，构建脚本强大",
      "增量构建与构建缓存，速度快",
      "多项目构建，monorepo 友好",
      "丰富的依赖管理与冲突解决",
      "Android 官方构建工具",
      "开源（Apache-2.0），跨平台，生态成熟"
    ],
    tags:["构建工具","JVM","Android"], lang:"Kotlin", lic:"Apache-2.0", repo:"gradle/gradle" },

  { name:"Maven",   cat:"dev",
    desc:"Java 构建与依赖管理工具，约定优于配置。",
    intro:"Maven 是 Apache 旗下的 Java 构建与依赖管理工具，以“约定优于配置”著称。它用标准的 pom.xml 描述项目与依赖，自动处理依赖传递、仓库解析与生命周期（编译、测试、打包）。Maven 中央仓库是 Java 包最常见的来源，Java 包管理这块，它是老牌的默认选择，许多 Java 项目都建在它上面。",
    features:[
      "约定优于配置：标准目录结构与生命周期",
      "pom.xml 描述依赖，自动解析传递依赖",
      "Maven 中央仓库，全球最大 Java 包仓库",
      "标准生命周期：compile、test、package、install",
      "多模块项目构建",
      "开源（Apache-2.0），跨平台，Java 生态标准"
    ],
    tags:["构建工具","依赖管理","Java"], lang:"Java", lic:"Apache-2.0", repo:"apache/maven" },

  { name:"Poetry",  cat:"dev",
    desc:"Python 包与依赖管理器，poetry.lock 保证可复现。",
    intro:"Poetry 是一款现代的 Python 包与依赖管理工具，它把项目管理、虚拟环境、依赖锁定整合在一起。Poetry 用 pyproject.toml 声明依赖，生成 poetry.lock 锁定精确版本，保证构建可复现。它让 Python 项目的依赖管理从“手动折腾”变成“一条命令搞定”。",
    features:[
      "pyproject.toml 声明依赖，标准格式",
      "poetry.lock 锁定精确版本，可复现",
      "自动管理虚拟环境",
      "依赖解析智能，冲突自动处理",
      "打包与发布到 PyPI 一条命令",
      "开源（MIT），跨平台，Python 社区主流"
    ],
    tags:["包管理","Python","依赖"], lang:"Python", lic:"MIT", repo:"python-poetry/poetry" },

  { name:"Pandoc",  cat:"dev",
    desc:"万能文档转换器，Markdown 到 PDF/DOCX 等。",
    intro:"Pandoc 是一款强大的文档格式转换工具，号称“通用标记语言工具”。它能读 Markdown、HTML、reStructuredText、LaTeX 等数十种格式，输出 PDF、DOCX、EPUB、幻灯片等。Pandoc 是学术写作、技术文档、电子书制作的核心工具，支持自定义模板与 CSS。",
    features:[
      "读取数十种输入格式：Markdown、HTML、LaTeX…",
      "输出 PDF、DOCX、EPUB、HTML、幻灯片",
      "自定义模板、CSS、参考文献",
      "支持数学公式、交叉引用、脚注",
      "批量转换，适合学术与文档流水线",
      "开源（GPL-2.0），跨平台，功能强大"
    ],
    tags:["文档","转换","Markdown"], lang:"Haskell", lic:"GPL-2.0", repo:"jgm/pandoc" },

  { name:"Helix",   cat:"dev",
    desc:"现代模态编辑器，内置 LSP 与 Tree-sitter。",
    intro:"Helix 是一款用 Rust 编写的现代模态编辑器，设计目标是“开箱即用、无需配置”。它内置 LSP（语言服务器协议）与 Tree-sitter 语法高亮，不需要像 Vim/Neovim 那样装一堆插件就能获得现代编辑体验。Helix 的键位直观，是新一代终端编辑器的代表。",
    features:[
      "开箱即用：内置 LSP + Tree-sitter",
      "无需配置即可获得现代编辑体验",
      "键位直观，模态操作高效",
      "用 Rust 编写，性能优秀",
      "内置多种编码与主题",
      "开源（MPL-2.0），跨平台，社区活跃"
    ],
    tags:["编辑器","TUI","模态"], lang:"Rust", lic:"MPL-2.0", repo:"helix-editor/helix" },

  { name:"Zsh",     cat:"dev",
    desc:"增强型 Unix shell，Oh-My-Zsh 生态繁荣。",
    intro:"Zsh 是 Bourne shell 与 C shell 的超集，是许多开发者偏好的现代 shell。它提供强大的补全、通配符、目录跳转、主题与插件系统。配合 Oh-My-Zsh 框架与海量插件，Zsh 的交互体验明显比传统 Bash 好，想提升终端效率的人常换到它。",
    features:[
      "强大的补全与通配符，远超 Bash",
      "目录跳转（auto_cd）、历史搜索",
      "主题与插件系统（Oh-My-Zsh）",
      "数组、关联数组等高级特性",
      "兼容 Bash 脚本，渐进迁移",
      "开源（MIT），跨平台，社区活跃"
    ],
    tags:["Shell","终端","Unix"], lang:"C", lic:"MIT", repo:"zsh-users/zsh" },

  { name:"Bash",    cat:"dev",
    desc:"Unix 事实标准 shell，脚本自动化基石。",
    intro:"Bash（Bourne-Again Shell）是 Unix 与 Linux 的事实标准 shell，几乎预装于所有系统。它是编写自动化脚本、管道处理、系统管理的基础工具。Bash 的管道、重定向、条件判断、函数，构成了 Unix 自动化的核心范式，是每位工程师的必修课。",
    features:[
      "Unix 事实标准，几乎预装于所有系统",
      "管道与重定向：命令组合的强大范式",
      "条件判断、循环、函数、数组",
      "丰富的内建命令与外部工具集成",
      "脚本自动化基石",
      "开源（GPL-3.0），跨平台，历史悠久"
    ],
    tags:["Shell","终端","脚本"], lang:"C", lic:"GPL-3.0", repo:"bash/bash" },

  { name:"Make",    cat:"dev",
    desc:"经典构建工具，Makefile 描述依赖与目标。",
    intro:"Make 是 Unix 世界最古老的构建工具之一，用 Makefile 描述文件的依赖关系与构建规则。它只在目标比依赖旧时才重新构建，极大加速增量编译。Make 的依赖图思想影响了无数后续构建工具，C/C++ 项目至今仍大量使用 Makefile。",
    features:[
      "依赖图：只在需要时重建，增量编译",
      "Makefile 声明目标与规则，简洁明了",
      "变量、函数、条件，构建逻辑灵活",
      "并行构建（make -j）",
      "影响深远，构建工具思想的源头",
      "开源（GPLv3），跨平台，历史久远"
    ],
    tags:["构建工具","Unix","Makefile"], lang:"C", lic:"GPL-3.0", repo:"make" },

  { name:"CMake",   cat:"dev",
    desc:"跨平台构建系统生成器，生成 Make/Ninja/VS 工程。",
    intro:"CMake 是一款跨平台的构建系统生成器，它用 CMakeLists.txt 描述项目，然后生成 Makefile、Ninja 文件或 Visual Studio 工程。CMake 屏蔽了不同构建系统的差异，让 C/C++ 项目能在任意平台构建。它是大型 C/C++ 项目（如 LLVM、Vulkan）的标准构建工具。",
    features:[
      "跨平台：一套配置生成各平台构建系统",
      "CMakeLists.txt 声明式描述项目",
      "支持生成 Make、Ninja、Visual Studio 等",
      "强大的依赖管理与包查找",
      "大型 C/C++ 项目标准工具",
      "开源（BSD-3-Clause），跨平台，生态成熟"
    ],
    tags:["构建工具","CMake","跨平台"], lang:"C++", lic:"BSD-3-Clause", repo:"Kitware/CMake" },

  { name:"Cargo",   cat:"dev",
    desc:"Rust 的构建与包管理器，Cargo.toml 管理一切。",
    intro:"Cargo 是 Rust 官方的构建与包管理工具，它用 Cargo.toml 声明项目与依赖，自动处理构建、测试、文档生成、发布到 crates.io。Cargo 的依赖解析、增量编译、工作区管理，让 Rust 项目的工程体验极佳。它是 Rust 生态不可或缺的一环。",
    features:[
      "Cargo.toml 声明项目与依赖",
      "自动构建、测试、文档、发布",
      "依赖解析智能，版本冲突处理",
      "增量编译，大型项目也快",
      "工作区管理 monorepo",
      "开源（MIT），Rust 官方工具，生态核心"
    ],
    tags:["包管理","Rust","构建"], lang:"Rust", lic:"MIT", repo:"rust-lang/cargo" },

  { name:"Yarn",    cat:"dev",
    desc:"Facebook 出品的 JavaScript 包管理器。",
    intro:"Yarn 是 Facebook 开发的 JavaScript 包管理器，最初为解决 npm 的速度与可靠性问题而生。Yarn 1 提供全局缓存与确定性安装，Yarn 2+（Berry）引入了插件、工作区、零安装（PnP）等新特性。Yarn 在前端生态中占有重要地位，是许多大型项目的包管理选择。",
    features:[
      "全局缓存，安装速度快",
      "yarn.lock 确定性安装",
      "工作区管理 monorepo",
      "插件系统（Yarn Berry）",
      "零安装（PnP），无需 node_modules",
      "开源（BSD-2-Clause），跨平台，生态广泛"
    ],
    tags:["包管理","JavaScript","前端"], lang:"JavaScript", lic:"BSD-2-Clause", repo:"yarnpkg/berry" },

  { name:"Babel",   cat:"dev",
    desc:"JavaScript 编译器，把新版 JS 转译为旧版。",
    intro:"Babel 是一款 JavaScript 编译器，把使用新语法（ES6+、TypeScript、JSX）的代码转译成兼容旧环境的 ES5 代码。它让开发者可以放心使用最新的语言特性，同时保证代码能在旧浏览器运行。Babel 的前端生态地位，是“用未来语法写今天的代码”的保障。",
    features:[
      "转译 ES6+ / TypeScript / JSX 到 ES5",
      "插件与预设系统，灵活定制",
      "支持装饰器、模块转换等",
      "与 Webpack、Vite 等构建工具集成",
      "保证旧浏览器兼容",
      "开源（MIT），跨平台，前端标准"
    ],
    tags:["转译","JavaScript","编译"], lang:"JavaScript", lic:"MIT", repo:"babel/babel" },

  { name:"ESLint",   cat:"dev",
    desc:"JavaScript 代码检查工具，统一团队代码风格。",
    intro:"ESLint 是一款可插拔的 JavaScript/TypeScript 代码检查工具，它能在编码时找出潜在 bug、强制统一代码风格、支持团队自定义规则。ESLint 的插件生态极丰富，可检测 React、Vue、TypeScript 等特定模式。配合 Prettier，它是现代前端代码质量的守门员。",
    features:[
      "静态检查：找出 bug 与坏味道",
      "统一代码风格，团队规范",
      "可插拔规则，自定义严格",
      "支持 React、Vue、TypeScript 等",
      "编辑器集成，实时提示",
      "开源（MIT），跨平台，前端标准"
    ],
    tags:["代码检查","JavaScript","Lint"], lang:"JavaScript", lic:"MIT", repo:"eslint/eslint" },

  { name:"Prettier", cat:"dev",
    desc:"强制代码格式化工具，消灭格式争论。",
    intro:"Prettier 是一款“有意见的”代码格式化工具，它按统一的规则重新格式化 JavaScript、TypeScript、CSS、HTML、Markdown 等。它不支持大量自定义选项，目的是“消灭关于代码格式的争论”。Prettier 与 ESLint 配合，让团队代码风格高度一致。",
    features:[
      "强制统一格式，消灭格式争论",
      "支持 JS、TS、CSS、HTML、Markdown 等",
      "零配置，开箱即用",
      "编辑器保存时自动格式化",
      "与 ESLint 配合使用",
      "开源（MIT），跨平台，社区庞大"
    ],
    tags:["格式化","代码风格","前端"], lang:"JavaScript", lic:"MIT", repo:"prettier/prettier" },

  { name:"Vitest",  cat:"dev",
    desc:"Vite 驱动的前端单元测试框架，快且现代。",
    intro:"Vitest 是一款基于 Vite 的现代前端单元测试框架，由 Vite 团队开发。它复用 Vite 的构建管线，启动快、热更新快，支持 ESM、TypeScript、JSX 开箱即用。Vitest 的 API 与 Jest 高度兼容，迁移成本低，Vite 生态项目跑测试，基本都用它。",
    features:[
      "Vite 驱动，启动与热更新极快",
      "原生支持 ESM、TypeScript、JSX",
      "API 兼容 Jest，迁移成本低",
      "支持快照、Mock、覆盖率",
      "并行执行，大型测试套件也快",
      "开源（MIT），跨平台，Vite 生态标准"
    ],
    tags:["测试","单元测试","前端"], lang:"TypeScript", lic:"MIT", repo:"vitest-dev/vitest" },

  { name:"Gatsby",  cat:"dev",
    desc:"React 静态站点框架，GraphQL 驱动内容。",
    intro:"Gatsby 是一款基于 React 的静态站点框架，它用 GraphQL 从任意数据源（CMS、API、Markdown）统一拉取内容，构建高性能的静态网站。Gatsby 的代码分割、预取、图片优化让站点又快又 SEO 友好。它是内容驱动型网站（营销站、文档、博客）的强大方案。",
    features:[
      "React 驱动，组件化开发",
      "GraphQL 统一数据源：CMS、API、文件",
      "自动代码分割与预取",
      "图片优化与懒加载",
      "静态生成，SEO 友好",
      "开源（MIT），跨平台，插件丰富"
    ],
    tags:["静态站点","React","内容"], lang:"JavaScript", lic:"MIT", repo:"gatsbyjs/gatsby" },

  { name:"Next.js", cat:"dev",
    desc:"React 全栈框架，SSR/SSG/ISR 一应俱全。",
    intro:"Next.js 是 Vercel 出品的 React 全栈框架，提供服务端渲染（SSR）、静态生成（SSG）、增量静态再生（ISR）、API 路由等能力。它让 React 应用既有 SPA 的交互体验，又有服务端的性能与 SEO。Next.js 的约定式路由与文件即路由设计，极大简化了全栈开发。",
    features:[
      "SSR / SSG / ISR 灵活渲染",
      "文件即路由，约定优于配置",
      "内置 API 路由与中间件",
      "自动代码分割与图片优化",
      "全栈一体：前端 + 后端 + 边缘",
      "开源（MIT），跨平台，生态庞大"
    ],
    tags:["框架","React","全栈"], lang:"JavaScript", lic:"MIT", repo:"vercel/next.js" },

  { name:"Dify",        cat:"ai",
    desc:"LLM 应用开发平台，可视化编排 + RAG。",
    intro:"Dify 是一款开源的 LLM 应用开发平台，用可视化的方式编排 AI 应用。它提供拖拽式的工作流设计、RAG 知识库、模型管理、Agent 编排，让团队无需深厚工程背景就能构建 AI 应用。Dify 支持多种大模型与向量数据库，是企业落地 AI 的常用底座。",
    features:[
      "可视化工作流编排",
      "内置 RAG 知识库",
      "支持多种大模型与向量库",
      "Agent 编排与工具调用",
      "应用监控与日志",
      "开源（MIT），跨平台，企业级"
    ],
    tags:["LLM","应用平台","RAG"], lang:"TypeScript", lic:"MIT", repo:"langgenius/dify" },

  { name:"Flowise",     cat:"ai",
    desc:"拖拽式 LLM 流构建器，可视化搭 AI 应用。",
    intro:"Flowise 是一款开源的拖拽式 LLM 流构建器，让你用可视化节点串联大模型、向量库、工具，快速搭建 AI 应用与聊天机器人。它支持自定义节点与 Agent，内置多种模型与嵌入服务。Flowise 是“不写代码搭 AI 流”的代表，适合快速原型与企业内网部署。",
    features:[
      "拖拽式可视化编排",
      "内置多种模型与向量库",
      "支持 Agent 与自定义节点",
      "一键生成聊天机器人",
      "支持自托管与云端",
      "开源（Apache-2.0），跨平台，易上手"
    ],
    tags:["LLM","流构建","可视化"], lang:"TypeScript", lic:"Apache-2.0", repo:"FlowiseAI/Flowise" },

  { name:"n8n",         cat:"ai",
    desc:"可自托管的工作流自动化平台，AI 节点丰富。",
    intro:"n8n 是一款可自托管的工作流自动化平台，用可视化的节点连接各种服务与 API。它的 AI 节点（大模型、向量库、Agent）让自动化流程能调用 AI 能力，是“AI + 自动化”结合的利器。n8n 支持数百个集成，是企业流程自动化的灵活选择。",
    features:[
      "可视化工作流编排",
      "数百个服务集成",
      "AI 节点：大模型、向量库、Agent",
      "可自托管，数据自主可控",
      "代码节点，灵活扩展",
      "开源（Sustainable Use License），跨平台"
    ],
    tags:["自动化","工作流","AI"], lang:"TypeScript", lic:"Sustainable Use License", repo:"n8n-io/n8n" },

  { name:"Replicate",   cat:"ai",
    desc:"托管模型推理平台，一行 API 调用任意模型。",
    intro:"Replicate 是一款托管的 AI 模型推理平台，把数万个开源模型（图像、音频、视频、LLM）封装成简单的 API 调用。你无需自己部署模型，一行代码就能调用 Stable Diffusion、Whisper 等。Replicate 让模型调用变得像调用普通 API 一样简单，是原型与生产的常用底座。",
    features:[
      "托管数万个开源模型",
      "一行 API 调用，无需部署",
      "覆盖图像、音频、视频、LLM",
      "按需计费，弹性扩展",
      "自定义模型部署",
      "商业平台，API 稳定，生态丰富"
    ],
    tags:["推理","模型托管","API"], lang:"Python", lic:"Proprietary", repo:"replicate", official:"https://replicate.com/" },

  { name:"Modal",       cat:"ai",
    desc:"云端 AI 计算平台，Serverless 跑 GPU 任务。",
    intro:"Modal 是一款云端 AI 计算平台，让你用 Python 函数定义 GPU 任务，Serverless 方式运行，无需管理服务器。它自动处理 GPU 调度、依赖、扩展，让推理与训练任务像调用函数一样简单。Modal 是 AI 工程师部署推理服务的现代选择，开发体验极佳。",
    features:[
      "Python 函数定义 GPU 任务",
      "Serverless，无需管理服务器",
      "自动 GPU 调度与扩展",
      "依赖自动打包",
      "推理与训练都适用",
      "商业平台，开发体验极佳"
    ],
    tags:["计算","GPU","Serverless"], lang:"Python", lic:"MIT", repo:"modal-labs/modal-client" },

  { name:"Weights & Biases", cat:"ai",
    desc:"ML 实验跟踪与模型管理工具，团队标配。",
    intro:"Weights & Biases（W&B）是一款领先的机器学习实验跟踪与模型管理工具，它记录训练指标、超参、代码版本，提供可视化对比与协作。W&B 还覆盖模型注册、部署、评估、Agent 追踪。AI 团队管理实验和模型常用它，研发效率提得明显。",
    features:[
      "实验跟踪与可视化对比",
      "超参与代码版本记录",
      "模型注册与管理",
      "模型部署与评估",
      "团队协作与评论",
      "商业平台（有免费额度），生态成熟"
    ],
    tags:["实验跟踪","ML","协作"], lang:"Python", lic:"MIT", repo:"wandb/wandb" },

  { name:"MLflow",      cat:"ai",
    desc:"ML 生命周期管理框架，开源可自托管。",
    intro:"MLflow 是一款开源的机器学习生命周期管理框架，覆盖实验跟踪、模型注册、部署、监控。它用统一的 API 记录实验，提供 Web UI 对比实验，是数据科学团队管理 ML 项目的开源标准。MLflow 可自托管，数据自主可控，适合对数据隐私敏感的团队。",
    features:[
      "实验跟踪与对比",
      "模型注册与版本管理",
      "部署到多种环境",
      "监控与漂移检测",
      "可自托管，开源",
      "开源（Apache-2.0），跨平台，ML 标准"
    ],
    tags:["ML","实验管理","开源"], lang:"Python", lic:"Apache-2.0", repo:"mlflow/mlflow" },

  { name:"DVC",         cat:"ai",
    desc:"数据版本控制工具，给数据集上 Git。",
    intro:"DVC（Data Version Control）是一款数据版本控制工具，它把大型数据集、模型、环境像 Git 一样版本化。DVC 与 Git 配合，代码进 Git、数据进 DVC，解决“数据集太大没法进 Git”的难题。DVC 支持云存储、缓存、协作，数据科学项目里，管理大文件它是最常见的那一个。",
    features:[
      "数据集版本化，像 Git 一样",
      "与 Git 无缝配合",
      "支持云存储与缓存",
      "大文件高效同步",
      "实验与数据关联",
      "开源（Apache-2.0），跨平台，数据标准"
    ],
    tags:["数据","版本控制","ML"], lang:"Python", lic:"Apache-2.0", repo:"iterative/dvc" },

  { name:"LangSmith",   cat:"ai",
    desc:"LangChain 的 LLM 应用可观测与评估平台。",
    intro:"LangSmith 是 LangChain 团队推出的 LLM 应用可观测与评估平台，它追踪 LLM 应用的每一步调用，提供调试、评估、监控、回归测试。LangSmith 让 LLM 应用从“黑盒”变成可观测、可改进的系统，是生产级 LLM 应用的质量保障工具。",
    features:[
      "LLM 应用全链路追踪",
      "评估与回归测试",
      "调试与监控",
      "数据集管理",
      "与 LangChain 深度集成",
      "商业平台（有免费额度），生产级"
    ],
    tags:["可观测","评估","LLM"], lang:"TypeScript", lic:"MIT", repo:"langchain-ai/langsmith-sdk" },

  { name:"Langfuse",    cat:"ai",
    desc:"开源 LLM 可观测平台，追踪与评估。",
    intro:"Langfuse 是一款开源的 LLM 应用可观测平台，提供追踪、评估、提示管理、监控。它是 LangSmith 的开源替代，可自托管，数据自主可控。Langfuse 支持多种 LLM 框架（LangChain、LlamaIndex、原生），是团队构建可观测 LLM 应用的开源选择。",
    features:[
      "LLM 应用追踪",
      "评估与提示管理",
      "监控与成本分析",
      "可自托管，开源",
      "支持多种 LLM 框架",
      "开源（MIT），跨平台，可自托管"
    ],
    tags:["可观测","评估","开源"], lang:"TypeScript", lic:"MIT", repo:"langfuse/langfuse" },

  { name:"Helicone",    cat:"ai",
    desc:"LLM API 网关与可观测，统一监控成本。",
    intro:"Helicone 是一款 LLM API 网关与可观测平台，它在你的 LLM 调用前加一层，统一记录、缓存、监控、限额。Helicone 支持多种 LLM 提供商，提供成本分析、调试、评估。它是团队统一管理 LLM 调用与成本的实用工具，接入简单。",
    features:[
      "LLM API 网关，统一接入",
      "成本分析与监控",
      "缓存与限额",
      "调试与追踪",
      "支持多种 LLM 提供商",
      "商业平台（有免费额度），接入简单"
    ],
    tags:["可观测","API","成本"], lang:"TypeScript", lic:"MIT", repo:"Helicone/helicone" },

  { name:"LiteLLM",     cat:"ai",
    desc:"统一 LLM API 网关，一个接口调所有模型。",
    intro:"LiteLLM 是一款统一的 LLM API 网关，用 OpenAI 兼容的接口调用 100+ 家 LLM 提供商（OpenAI、Anthropic、Gemini、本地模型等）。它让你切换模型只需改一行，并支持负载均衡、限额、监控、成本跟踪。LiteLLM 是多模型团队的统一接入层。",
    features:[
      "统一接口调用 100+ LLM",
      "切换模型只需改一行",
      "负载均衡与故障转移",
      "限额、监控、成本跟踪",
      "可自托管，开源",
      "开源（MIT），跨平台，多模型统一"
    ],
    tags:["网关","多模型","开源"], lang:"Python", lic:"MIT", repo:"BerriAI/litellm" },

  { name:"OpenRouter",  cat:"ai",
    desc:"聚合 LLM API，一个 key 调用所有模型。",
    intro:"OpenRouter 是一款聚合的 LLM API 服务，用一个 API key 就能调用数百家大模型（OpenAI、Anthropic、Gemini、开源模型等）。它提供统一的接口、路由、定价比较，让开发者按需选择最合适的模型。OpenRouter 是“一个 key 调所有模型”的便捷入口。",
    features:[
      "一个 key 调用数百家模型",
      "统一接口与路由",
      "模型定价比较",
      "自动路由与故障转移",
      "支持流式与函数调用",
      "商业平台，便捷入口"
    ],
    tags:["多模型","聚合","API"], lang:"TypeScript", lic:"Proprietary", repo:"openrouter", official:"https://openrouter.ai/" },

  { name:"Ray",         cat:"ai",
    desc:"分布式计算框架，ML 训练与推理的引擎。",
    intro:"Ray 是一款开源的分布式计算框架，用简单的 Python API 就能把单机代码扩展到集群。Ray 提供任务、Actor、集群调度，是 ML 训练、强化学习、推理服务的底层引擎。Ray 的生态（Ray Train、Ray Serve、RLlib）覆盖了 ML 全栈，是大规模 AI 计算的基础设施。",
    features:[
      "分布式计算，单机到集群",
      "Ray Train 分布式训练",
      "Ray Serve 推理服务",
      "RLlib 强化学习",
      "自动容错与调度",
      "开源（Apache-2.0），跨平台，ML 基础设施"
    ],
    tags:["分布式","ML","计算"], lang:"Python", lic:"Apache-2.0", repo:"ray-project/ray" },

  { name:"Baseten",     cat:"ai",
    desc:"模型推理部署平台，GPU 推理服务。",
    intro:"Baseten 是一款模型推理部署平台，让你把机器学习模型部署成低延迟、高并发的推理服务。它提供 GPU 推理、自动扩展、多模型推理优化，是生产级推理服务的托管方案。Baseten 适合需要高性能推理的企业应用。",
    features:[
      "模型推理部署",
      "GPU 推理与自动扩展",
      "低延迟高并发",
      "多推理框架支持",
      "生产级监控",
      "商业平台，高性能推理"
    ],
    tags:["推理","部署","GPU"], lang:"Python", lic:"Proprietary", repo:"baseten", official:"https://www.baseten.co/" },

  { name:"Together AI", cat:"ai",
    desc:"开源模型推理云平台，托管开源 LLM。",
    intro:"Together AI 是一款开源模型推理云平台，托管 Llama、Mistral 等开源大模型的推理 API。它提供高速推理、微调、批量推理，让开发者无需自建 GPU 集群就能使用开源模型。Together AI 是“用开源模型但省心”的云平台，性能与价格兼顾。",
    features:[
      "托管开源 LLM 推理",
      "高速推理与批量推理",
      "模型微调",
      "无需自建 GPU 集群",
      "开源模型生态",
      "商业平台，性能价格兼顾"
    ],
    tags:["推理","开源模型","云"], lang:"Python", lic:"MIT", repo:"togethercomputer/together" },

  { name:"Anyscale",    cat:"ai",
    desc:"Ray 云平台，分布式 ML 托管服务。",
    intro:"Anyscale 是 Ray 背后的公司推出的云平台，提供 Ray 的托管服务与开发环境。它让你免运维地使用 Ray 做分布式训练、推理、数据处理。Anyscale 提供 GPU 集群、开发环境、模型服务，是企业级 Ray 应用的托管方案。",
    features:[
      "Ray 托管服务",
      "GPU 集群与开发环境",
      "分布式训练与推理",
      "免运维，弹性扩展",
      "模型服务与监控",
      "商业平台，Ray 官方云"
    ],
    tags:["分布式","ML","托管"], lang:"Python", lic:"Proprietary", repo:"anyscale", official:"https://www.anyscale.com/" },

  { name:"Lightning AI", cat:"ai",
    desc:"PyTorch Lightning 生态，ML 训练与云。",
    intro:"Lightning AI 是 PyTorch Lightning 背后的平台，它提供 ML 训练框架、云开发环境、模型部署。Lightning AI 用简洁的 API 抽象训练循环，让 ML 实验更高效。它的云平台提供 GPU、实验跟踪、模型服务，是 PyTorch 用户的现代 ML 工作流。",
    features:[
      "PyTorch Lightning 训练框架",
      "云开发环境与 GPU",
      "实验跟踪与管理",
      "模型部署与服务",
      "简洁 API，高效实验",
      "开源（Apache-2.0），跨平台，PyTorch 生态"
    ],
    tags:["ML","训练","PyTorch"], lang:"Python", lic:"Apache-2.0", repo:"Lightning-AI/pytorch-lightning" },

  { name:"BentoML",     cat:"ai",
    desc:"模型服务框架，把 ML 模型打包成 API。",
    intro:"BentoML 是一款模型服务框架，让你把任何机器学习模型打包成标准化的推理服务（Bento）。它支持多种 ML 框架，提供容器化部署、自动扩展、监控。BentoML 让模型从“实验代码”变成“生产服务”，是 MLOps 的实用工具。",
    features:[
      "模型打包成标准化服务",
      "支持多种 ML 框架",
      "容器化部署",
      "自动扩展与监控",
      "MLOps 工作流",
      "开源（Apache-2.0），跨平台，模型服务"
    ],
    tags:["模型服务","MLOps","部署"], lang:"Python", lic:"Apache-2.0", repo:"bentoml/BentoML" },

  { name:"DeepEval",    cat:"ai",
    desc:"LLM 应用评估框架，单元测试式测 LLM。",
    intro:"DeepEval 是一款 LLM 应用评估框架，像 pytest 一样对 LLM 输出做断言式评估。它提供忠实度、相关性、毒性等评估指标，支持批量评估与 CI 集成。DeepEval 让 LLM 应用的质量评估像单元测试一样可重复、可自动化，LLM 质量保障这块，拿它跑测试很顺手。",
    features:[
      "单元测试式评估 LLM",
      "忠实度、相关性、毒性等指标",
      "批量评估与报告",
      "CI 集成",
      "自定义评估器",
      "开源（MIT），跨平台，LLM 评估"
    ],
    tags:["评估","LLM","测试"], lang:"Python", lic:"MIT", repo:"confident-ai/deepeval" },

  { name:"Ragas",       cat:"ai",
    desc:"RAG 应用评估框架，专测检索增强质量。",
    intro:"Ragas 是一款专为 RAG 应用设计的评估框架，它评估检索增强生成的忠实度、答案相关性、上下文精度等。Ragas 用 LLM 自动给 RAG 输出打分，无需人工标注，让 RAG 系统的调优有据可依。Ragas 是 RAG 项目质量评估的常用工具。",
    features:[
      "专测 RAG 应用质量",
      "忠实度、相关性、上下文精度",
      "LLM 自动评估，无需标注",
      "数据集生成与评估",
      "与主流 LLM 集成",
      "开源（Apache-2.0），跨平台，RAG 评估"
    ],
    tags:["评估","RAG","LLM"], lang:"Python", lic:"Apache-2.0", repo:"explodinggradients/ragas" },

  { name:"Braintrust",  cat:"ai",
    desc:"LLM 评估与实验平台，对比提示与模型。",
    intro:"Braintrust 是一款 LLM 评估与实验平台，它帮助你系统地对比不同的提示、模型、参数组合的效果。Braintrust 提供评估数据集、批量运行、可视化对比，让 LLM 的迭代有据可依。它是团队优化 LLM 应用效果的实用平台。",
    features:[
      "提示与模型对比",
      "评估数据集与批量运行",
      "可视化效果对比",
      "版本管理与协作",
      "CI 集成",
      "商业平台（有免费额度），LLM 实验"
    ],
    tags:["评估","实验","LLM"], lang:"TypeScript", lic:"Proprietary", repo:"braintrust", official:"https://www.braintrust.dev/" },

  { name:"Humanloop",   cat:"ai",
    desc:"LLM 应用开发与评估平台，提示版本化。",
    intro:"Humanloop 是一款 LLM 应用开发与评估平台，它提供提示版本化、评估、监控、微调。Humanloop 让 LLM 应用像普通软件一样可版本化、可评估、可监控。它是团队管理 LLM 提示与应用的现代工具。",
    features:[
      "提示版本化与管理",
      "评估与监控",
      "模型微调",
      "团队协作",
      "与多种 LLM 集成",
      "商业平台，LLM 应用管理"
    ],
    tags:["评估","提示","LLM"], lang:"TypeScript", lic:"Proprietary", repo:"humanloop", official:"https://humanloop.com/" },

  { name:"Phoenix",     cat:"ai",
    desc:"Arize 的 LLM 可观测与评估平台，开源。",
    intro:"Phoenix 是 Arize 推出的开源 LLM 可观测与评估平台，它追踪 LLM 应用的调用，提供追踪、评估、数据集管理。Phoenix 基于 OpenTelemetry 标准，可自托管，是 LLM 应用可观测的开源选择。它与 LangSmith、Langfuse 同属 LLM 可观测赛道。",
    features:[
      "LLM 应用追踪",
      "评估与数据集管理",
      "基于 OpenTelemetry 标准",
      "可自托管，开源",
      "支持多种 LLM 框架",
      "开源（Elastic License），跨平台，可自托管"
    ],
    tags:["可观测","评估","开源"], lang:"Python", lic:"Elastic License", repo:"Arize-ai/phoenix" },

  { name:"TruLens",     cat:"ai",
    desc:"LLM 应用评估框架，反馈函数式评估。",
    intro:"TruLens 是一款 LLM 应用评估框架，用“反馈函数”的方式给 LLM 输出打分（相关性、忠实度等）。TruLens 支持实验追踪与对比，让 LLM 应用的评估系统化。它是 LLM 质量保障的开源框架之一。",
    features:[
      "反馈函数式评估",
      "相关性、忠实度等指标",
      "实验追踪与对比",
      "数据集管理",
      "与 LlamaIndex 集成",
      "开源（MIT），跨平台，LLM 评估"
    ],
    tags:["评估","LLM","开源"], lang:"Python", lic:"MIT", repo:"truera/trulens" },

  { name:"Giskard",     cat:"ai",
    desc:"ML 与 LLM 模型安全测试框架，找漏洞。",
    intro:"Giskard 是一款 ML 与 LLM 模型的安全测试框架，它自动找模型的漏洞（偏见、鲁棒性、数据泄露、提示注入等）。Giskard 像“模型的渗透测试”，帮团队发现模型的安全与公平性问题。它是模型安全领域的领先开源工具。",
    features:[
      "模型安全与公平性测试",
      "自动发现偏见、鲁棒性问题",
      "提示注入检测",
      "数据泄露检测",
      "测试报告与修复建议",
      "开源（Apache-2.0），跨平台，模型安全"
    ],
    tags:["安全","测试","ML"], lang:"Python", lic:"Apache-2.0", repo:"Giskard-AI/giskard" },

  { name:"PromptLayer", cat:"ai",
    desc:"LLM 提示管理与可观测平台。",
    intro:"PromptLayer 是一款 LLM 提示管理与可观测平台，它记录所有 LLM 调用，提供提示版本化、监控、评估、协作。PromptLayer 让团队的提示像代码一样可管理、可追踪。它是 LLM 应用提示管理的实用工具。",
    features:[
      "提示版本化与管理",
      "LLM 调用追踪",
      "监控与评估",
      "团队协作",
      "与多种 LLM 集成",
      "商业平台（有免费额度），提示管理"
    ],
    tags:["提示","可观测","LLM"], lang:"TypeScript", lic:"Proprietary", repo:"promptlayer", official:"https://www.promptlayer.com/" },

  { name:"Galileo",     cat:"ai",
    desc:"LLM 评估与监控平台，生产级质量。",
    intro:"Galileo 是一款 LLM 评估与监控平台，它提供幻觉检测、安全评估、回归测试、生产监控。Galileo 让 LLM 应用的质量可量化、可监控，是生产级 LLM 应用的质量保障平台。",
    features:[
      "幻觉与质量检测",
      "安全评估",
      "回归测试",
      "生产监控",
      "评估数据集",
      "商业平台，生产级 LLM 质量"
    ],
    tags:["评估","监控","LLM"], lang:"Python", lic:"Proprietary", repo:"galileo", official:"https://galileo-ai.com/" },

  { name:"Patronus AI", cat:"ai",
    desc:"LLM 应用评估平台，幻觉与质量评估。",
    intro:"Patronus AI 是一款 LLM 应用评估平台，它提供幻觉检测、安全性、可靠性评估。Patronus AI 让团队系统评估 LLM 输出的质量与安全，是 LLM 应用质量保障的专用平台。",
    features:[
      "幻觉检测",
      "安全与可靠性评估",
      "评估数据集",
      "与多种 LLM 集成",
      "评估报告",
      "商业平台，LLM 质量评估"
    ],
    tags:["评估","幻觉","LLM"], lang:"Python", lic:"Proprietary", repo:"patronus-ai", official:"https://www.patronus.ai/" },

  { name:"Haystack",    cat:"ai",
    desc:"开源 RAG 框架，构建搜索与生成应用。",
    intro:"Haystack 是一款开源的 RAG（检索增强生成）框架，它提供构建搜索、问答、RAG 应用的组件。Haystack 由 Deepset 开发，支持多种 LLM 与向量库，提供可组合的管道。它是构建企业级 RAG 应用的开源标准之一。",
    features:[
      "RAG 与搜索应用构建",
      "可组合的管道",
      "支持多种 LLM 与向量库",
      "文档处理与检索",
      "评估与监控",
      "开源（Apache-2.0），跨平台，RAG 标准"
    ],
    tags:["RAG","搜索","LLM"], lang:"Python", lic:"Apache-2.0", repo:"deepset-ai/haystack" },

  { name:"Cohere",      cat:"ai",
    desc:"企业级 LLM API，RAG 与嵌入领先。",
    intro:"Cohere 是一家 LLM 公司，提供企业级的 LLM API（Command 系列），在 RAG、嵌入、分类等任务上表现领先。Cohere 的模型以安全、可控、企业友好著称，被众多企业用于内部 AI 应用。它是 LLM API 市场的重要参与者。",
    features:[
      "企业级 LLM API（Command）",
      "RAG 与嵌入领先",
      "安全可控，企业友好",
      "多语言支持",
      "分类、摘要等任务",
      "商业平台，企业级 LLM"
    ],
    tags:["LLM","API","企业"], lang:"Python", lic:"MIT", repo:"cohere-ai/cohere-python" },

  { name:"Mistral",     cat:"ai",
    desc:"欧洲开源 LLM，Mistral 系列模型。",
    intro:"Mistral 是一家欧洲 AI 公司，推出 Mistral 系列开源大模型，在性能与效率上表现优秀。Mistral 的模型（Mistral 7B、Mistral Large 等）是开源 LLM 的标杆，被广泛微调与部署。它是开源 LLM 市场的重要力量。",
    features:[
      "Mistral 系列开源 LLM",
      "性能与效率优秀",
      "广泛微调与部署",
      "开源权重",
      "欧洲 AI 代表",
      "开源（Mistral Research Model License）"
    ],
    tags:["LLM","开源","模型"], lang:"Python", lic:"Mistral Research Model License", repo:"mistralai/mistral-src" },

  { name:"Llama",       cat:"ai",
    desc:"Meta 开源 LLM，Llama 系列模型。",
    intro:"Llama 是 Meta 推出的开源大语言模型系列（Llama 2、Llama 3 等），是开源 LLM 生态的基石。Llama 的模型被广泛微调、部署，衍生出无数应用与衍生模型。它是开源 LLM 领域最具影响力的系列之一。",
    features:[
      "Llama 系列开源 LLM",
      "开源生态基石",
      "广泛微调与衍生",
      "多规模（7B-405B）",
      "多语言支持",
      "开源（Llama Community License）"
    ],
    tags:["LLM","开源","Meta"], lang:"Python", lic:"Llama Community License", repo:"meta-llama/llama-models" },

  { name:"Gemini",      cat:"ai",
    desc:"Google 的多模态 LLM 系列。",
    intro:"Gemini 是 Google 推出的多模态大模型系列，覆盖文本、图像、音频、视频的理解与生成。Gemini 在推理、多模态、代码等任务上表现领先，通过 API 与 Gemini App 提供服务。它是 Google AI 的核心，多模态能力突出。",
    features:[
      "多模态：文本、图像、音频、视频",
      "推理与代码能力领先",
      "长上下文",
      "API 与应用服务",
      "Google AI 核心",
      "商业平台，多模态领先"
    ],
    tags:["LLM","多模态","Google"], lang:"Python", lic:"Proprietary", repo:"google-gemini/gemini-api", official:"https://gemini.google.com/" },

  { name:"DeepSeek",    cat:"ai",
    desc:"中国开源 LLM，DeepSeek 系列模型。",
    intro:"DeepSeek 是一家中国 AI 公司，推出 DeepSeek 系列开源大模型（DeepSeek V2、V3 等），以高性价比与强推理能力著称。DeepSeek 的模型在全球开源社区广受欢迎，是开源 LLM 市场的重要力量。它以较低成本提供接近顶级模型的能力。",
    features:[
      "DeepSeek 系列开源 LLM",
      "高性价比，强推理",
      "开源权重",
      "多语言支持",
      "全球社区热门",
      "开源（MIT 等），开源 LLM 重要力量"
    ],
    tags:["LLM","开源","中国"], lang:"Python", lic:"MIT", repo:"deepseek-ai/DeepSeek-V3" },

  { name:"Figma",       cat:"design",
    desc:"协作式界面设计工具，浏览器直接用。",
    intro:"Figma 是一款基于浏览器的协作式界面设计工具，多人可同时编辑，支持原型、设计系统、Dev Mode。Figma 让设计团队实时协作，从设计到交付一站完成。它是当前界面设计的主流工具，团队协同体验领先。",
    features:[
      "浏览器协作设计",
      "实时多人编辑",
      "原型与设计系统",
      "Dev Mode 交付",
      "插件生态丰富",
      "商业软件（有免费层），跨平台，界面设计"
    ],
    tags:["界面设计","协作","原型"], lang:"C++", lic:"Proprietary", repo:"figma/figma", official:"https://www.figma.com/" },

  { name:"Sketch",      cat:"design",
    desc:"macOS 经典界面设计工具，矢量编辑。",
    intro:"Sketch 是一款 macOS 上的经典界面设计工具，以矢量编辑、符号、原型著称。Sketch 曾是 iOS 设计的事实标准，插件生态成熟。它适合 macOS 用户做界面设计与设计系统。它是 macOS 设计领域的常青树。",
    features:[
      "macOS 矢量界面设计",
      "符号与设计系统",
      "原型交互",
      "插件生态成熟",
      "仅限 macOS",
      "商业软件，macOS，界面设计经典"
    ],
    tags:["界面设计","macOS","矢量"], lang:"Objective-C", lic:"Proprietary", repo:"sketch-hq/sketch-api", official:"https://www.sketch.com/" },

  { name:"Adobe XD",    cat:"design",
    desc:"Adobe 的界面设计与原型工具。",
    intro:"Adobe XD 是 Adobe 推出的界面设计与原型工具，支持矢量编辑、交互原型、共享设计。它与 Adobe 生态（Photoshop、Illustrator）联动。Adobe XD 适合已在 Adobe 生态的设计团队。它是 Adobe 的界面设计产品。",
    features:[
      "矢量界面设计",
      "交互原型",
      "与 Adobe 生态联动",
      "共享设计",
      "跨平台",
      "商业软件（Adobe），界面设计"
    ],
    tags:["界面设计","原型","Adobe"], lang:"C++", lic:"Proprietary", repo:"adobe/xd", official:"https://www.adobe.com/products/xd.html" },

  { name:"Canva",       cat:"design",
    desc:"在线平面设计工具，模板丰富零门槛。",
    intro:"Canva 是一款在线平面设计工具，提供海量模板，做海报、PPT、社媒图、视频都简单。Canva 让非设计师也能做出美观的视觉内容，是大众最常用的在线设计工具。它是“人人都是设计师”的代表。",
    features:[
      "海量模板，零门槛",
      "海报、PPT、社媒图",
      "在线协作",
      "品牌套件",
      "视频与动画",
      "商业软件（有免费层），跨平台，大众设计"
    ],
    tags:["平面设计","模板","在线"], lang:"JavaScript", lic:"Proprietary", repo:"canva/canva", official:"https://www.canva.com/" },

  { name:"Framer",      cat:"design",
    desc:"设计到上线的网站构建器，React 驱动。",
    intro:"Framer 是一款从设计到上线的网站构建器，用 React 驱动，支持动画、交互、响应式。Framer 让设计师直接做出可交互的网站，无需写代码。它是设计驱动的建站新选择，适合做营销站与作品集。",
    features:[
      "设计到上线建站",
      "React 驱动",
      "动画与交互",
      "响应式",
      "无代码",
      "商业软件（有免费层），跨平台，建站"
    ],
    tags:["建站","设计","React"], lang:"TypeScript", lic:"Proprietary", repo:"framer/framer", official:"https://www.framer.com/" },

  { name:"Webflow",     cat:"design",
    desc:"可视化建站工具，设计师直接出站。",
    intro:"Webflow 是一款可视化建站工具，用设计界面直接生成网站，支持 CMS、动画、交互。Webflow 让设计师无需写代码就能做出专业网站。它是设计驱动建站的领先工具，适合营销站与企业站。",
    features:[
      "可视化建站",
      "内置 CMS",
      "动画与交互",
      "响应式",
      "无代码出站",
      "商业软件（有免费层），跨平台，建站"
    ],
    tags:["建站","无代码","CMS"], lang:"JavaScript", lic:"Proprietary", repo:"webflow/webflow", official:"https://webflow.com/" },

  { name:"Miro",       cat:"design",
    desc:"在线协作白板，远程团队头脑风暴。",
    intro:"Miro 是一款在线协作白板，提供无限画布，支持头脑风暴、工作坊、流程图、看板。Miro 让远程团队实时协作，是数字化白板的主流选择。它是团队协作与工作坊的常用工具。",
    features:[
      "无限画布协作白板",
      "头脑风暴、工作坊",
      "流程图、看板",
      "模板库丰富",
      "实时多人协作",
      "商业软件（有免费层），跨平台，协作白板"
    ],
    tags:["白板","协作","工作坊"], lang:"JavaScript", lic:"Proprietary", repo:"mirohq/miro", official:"https://miro.com/" },

  { name:"Whimsical",   cat:"design",
    desc:"快速画流程图与文档的轻量工具。",
    intro:"Whimsical 是一款轻量级的在线工具，快速画流程图、线框图、思维导图，写文档。Whimsical 主打速度，让想法快速可视化。它是产品与设计团队轻量协作的好帮手。",
    features:[
      "快速画流程图、线框图",
      "思维导图",
      "文档与看板",
      "实时协作",
      "轻量易用",
      "商业软件（有免费层），跨平台，轻量协作"
    ],
    tags:["流程图","线框图","协作"], lang:"JavaScript", lic:"Proprietary", repo:"whimsical/whimsical", official:"https://whimsical.com/" },

  { name:"FigJam",      cat:"design",
    desc:"Figma 的在线白板，设计与头脑风暴。",
    intro:"FigJam 是 Figma 推出的在线协作白板，提供便利贴、投票、计时器、头脑风暴工具。FigJam 与 Figma 无缝集成，是设计与产品团队头脑风暴、工作坊的常用工具。它让创意协作更顺畅。",
    features:[
      "在线协作白板",
      "便利贴、投票、计时器",
      "头脑风暴、工作坊",
      "与 Figma 集成",
      "模板丰富",
      "商业软件（有免费层），跨平台，头脑风暴"
    ],
    tags:["白板","头脑风暴","Figma"], lang:"C++", lic:"Proprietary", repo:"figma/figjam", official:"https://www.figma.com/figjam/" },

  { name:"Affinity Designer", cat:"design",
    desc:"Serif 的矢量设计软件，买断制。",
    intro:"Affinity Designer 是 Serif 推出的矢量设计软件，做插画、图标、UI、品牌视觉。它买断制（非订阅），性能强，是 Illustrator 的有力替代。Affinity Designer 适合专业矢量设计。它是买断制设计软件的标杆。",
    features:[
      "专业矢量设计",
      "插画、图标、UI、品牌",
      "买断制，无订阅",
      "高性能",
      "跨平台",
      "商业软件（买断），跨平台，矢量设计"
    ],
    tags:["矢量","插画","买断"], lang:"C++", lic:"Proprietary", repo:"serif/affinity", official:"https://affinity.serif.com/designer/" },

  { name:"Affinity Photo", cat:"design",
    desc:"Serif 的位图编辑软件，买断制。",
    intro:"Affinity Photo 是 Serif 推出的位图编辑软件，做照片处理、数字绘画、合成。它买断制，功能对标 Photoshop，性价比高。Affinity Photo 是专业位图编辑的买断制选择。它是 Photoshop 的强力替代。",
    features:[
      "专业位图编辑",
      "照片处理、数字绘画",
      "买断制，无订阅",
      "对标 Photoshop",
      "跨平台",
      "商业软件（买断），跨平台，位图编辑"
    ],
    tags:["位图","照片","买断"], lang:"C++", lic:"Proprietary", repo:"serif/affinity", official:"https://affinity.serif.com/photo/" },

  { name:"Affinity Publisher", cat:"design",
    desc:"Serif 的排版软件，买断制。",
    intro:"Affinity Publisher 是 Serif 推出的排版软件，做书籍、杂志、传单、电子书。它买断制，与 Affinity 系列无缝联动。Affinity Publisher 是专业排版的买断制选择。它是 InDesign 的替代。",
    features:[
      "专业排版",
      "书籍、杂志、传单",
      "买断制，无订阅",
      "与 Affinity 联动",
      "跨平台",
      "商业软件（买断），跨平台，排版"
    ],
    tags:["排版","书籍","买断"], lang:"C++", lic:"Proprietary", repo:"serif/affinity", official:"https://affinity.serif.com/publisher/" },

  { name:"Adobe Illustrator", cat:"design",
    desc:"专业矢量图形设计软件，行业标准。",
    intro:"Adobe Illustrator 是专业的矢量图形设计软件，做插画、图标、标志、排版。它是矢量设计的行业标准，被广泛用于品牌与图形设计。Adobe Illustrator 是设计师常用的那一款，功能很全。",
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
    desc:"专业位图图像处理软件，行业标准。",
    intro:"Adobe Photoshop 是专业的位图图像处理软件，做照片编辑、合成、数字绘画、设计。它是图像处理的行业标准，被广泛用于摄影、设计、广告。Adobe Photoshop 是设计师和摄影师绕不开的那一个。",
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
    desc:"专业排版软件，书籍杂志标准。",
    intro:"Adobe InDesign 是专业的排版软件，做书籍、杂志、报纸、宣传册。它是专业排版的行业标准，支持多页文档、样式、交互。Adobe InDesign 是出版与设计领域排版的标准工具。",
    features:[
      "专业多页排版",
      "书籍、杂志、报纸",
      "行业标准",
      "样式与交互",
      "与 Adobe 生态联动",
      "商业软件（Adobe），跨平台，排版标准"
    ],
    tags:["排版","出版","Adobe"], lang:"C++", lic:"Proprietary", repo:"adobe/indesign", official:"https://www.adobe.com/products/indesign.html" },

  { name:"Adobe Lightroom", cat:"design",
    desc:"摄影师照片管理与调色软件。",
    intro:"Adobe Lightroom 是摄影师用的照片管理与调色软件，做 RAW 处理、调色、批处理、相册管理。Lightroom 是摄影师工作流的核心，支持桌面与移动端。Adobe Lightroom 是专业摄影后期的标准工具。",
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
    desc:"iPad 专业数字绘画应用。",
    intro:"Procreate 是一款 iPad 上的专业数字绘画应用，画插画、概念设计、漫画。它笔刷丰富、性能流畅，是 iPad 绘画的标杆应用。Procreate 让 iPad 成为强大的绘画工具。它是数字绘画的 iPad 标准。",
    features:[
      "iPad 专业数字绘画",
      "插画、概念设计、漫画",
      "笔刷丰富",
      "性能流畅",
      "仅限 iPad",
      "商业应用（买断），iPad，数字绘画标杆"
    ],
    tags:["绘画","iPad","插画"], lang:"Swift", lic:"Proprietary", repo:"procreate/procreate", official:"https://procreate.art/" },

  { name:"Adobe After Effects", cat:"design",
    desc:"专业动态图形与视频特效软件。",
    intro:"Adobe After Effects 是专业的动态图形与视频特效软件，做动效、特效、合成、动画。它是视频后期与动效的行业标准，被广泛用于影视、广告、影视后期。Adobe After Effects 是动效设计师最常用的那一个。",
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
    desc:"专业 PDF 编辑与签名软件。",
    intro:"Adobe Acrobat 是专业的 PDF 软件，做 PDF 编辑、创建、转换、签名、表单。Acrobat 是 PDF 领域的标准工具，支持文档管理、电子签名、协作。Adobe Acrobat 是处理 PDF 文档的专业选择。",
    features:[
      "专业 PDF 编辑",
      "创建、转换、签名",
      "表单与协作",
      "行业标准",
      "跨平台",
      "商业软件（Adobe），跨平台，PDF 标准"
    ],
    tags:["PDF","编辑","Adobe"], lang:"C++", lic:"Proprietary", repo:"adobe/acrobat", official:"https://www.adobe.com/acrobat.html" },

  { name:"Jira",        cat:"prod",
    desc:"Atlassian 项目管理与敏捷跟踪工具。",
    intro:"Jira 是 Atlassian 的项目管理与问题跟踪工具，支持敏捷（Scrum、看板）、自定义工作流、报表。Jira 是软件开发团队的项目管理标准，功能强大但配置复杂。它是企业敏捷开发的主流工具。",
    features:[
      "敏捷与看板管理",
      "自定义工作流",
      "报表与仪表盘",
      "与 Confluence 集成",
      "企业级，功能强大",
      "商业软件（Atlassian），跨平台，项目管理标准"
    ],
    tags:["项目管理","敏捷","看板"], lang:"Java", lic:"Proprietary", repo:"atlassian/jira", official:"https://www.atlassian.com/software/jira" },

  { name:"Linear",      cat:"prod",
    desc:"现代项目管理工具，速度与设计感强。",
    intro:"Linear 是一款现代的工程项目管理工具，以速度和简洁设计著称，支持 issue 跟踪、循环（cycles）、路线图。Linear 深受产品与工程团队喜爱，是 Jira 的现代替代。它是新一代项目管理的代表。",
    features:[
      "极速 issue 跟踪",
      "循环（Cycles）与路线图",
      "简洁设计",
      "键盘驱动",
      "现代体验",
      "商业软件（有免费层），跨平台，现代项目管理"
    ],
    tags:["项目管理","issue","现代"], lang:"TypeScript", lic:"Proprietary", repo:"linear/linear", official:"https://linear.app/" },

  { name:"Notion",      cat:"prod",
    desc:"一体化笔记、文档、知识库、项目管理。",
    intro:"Notion 是一款一体化工作空间，集笔记、文档、数据库、看板、项目管理于一体。Notion 用模块化块构建任意工具，是团队知识管理与项目协作的流行选择。它是“一个工具替代十个”的代表。",
    features:[
      "笔记、文档、数据库",
      "模块化块构建",
      "看板与项目管理",
      "团队协作",
      "模板丰富",
      "商业软件（有免费层），跨平台，一体化工作空间"
    ],
    tags:["笔记","知识库","一体化"], lang:"JavaScript", lic:"Proprietary", repo:"notionhq/notion", official:"https://www.notion.so/" },

  { name:"ClickUp",     cat:"prod",
    desc:"多功能项目管理，一个应用搞定所有。",
    intro:"ClickUp 是一款多功能项目管理工具，集任务、文档、目标、聊天于一体，号称“一个应用替代所有”。ClickUp 提供多种视图（列表、看板、甘特、日历），高度可定制。它是功能全面的任务管理选择。",
    features:[
      "任务、文档、目标、聊天",
      "多视图（列表/看板/甘特）",
      "高度可定制",
      "目标与 OKR",
      "时间追踪",
      "商业软件（有免费层），跨平台，多功能任务管理"
    ],
    tags:["任务管理","多功能","看板"], lang:"JavaScript", lic:"Proprietary", repo:"clickup/clickup", official:"https://clickup.com/" },

  { name:"Asana",       cat:"prod",
    desc:"任务与项目管理，团队协作清晰。",
    intro:"Asana 是一款任务与项目管理工具，支持任务分配、依赖、时间表、自动化。Asana 让团队清晰看到谁在做什么，是中型团队项目协作的常用选择。它是任务管理的成熟商业方案。",
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
    desc:"可视化工作操作系统，灵活定制。",
    intro:"Monday.com 是一款可视化的工作操作系统，用彩色表格管理项目、任务、CRM、运营。Monday.com 高度可定制，拖拽配置工作流，是团队工作管理的灵活选择。它是工作管理平台的代表。",
    features:[
      "可视化工作管理",
      "项目、任务、CRM、运营",
      "拖拽配置工作流",
      "自动化",
      "高度可定制",
      "商业软件，跨平台，工作操作系统"
    ],
    tags:["工作管理","可视化","定制"], lang:"JavaScript", lic:"Proprietary", repo:"mondaycom/monday", official:"https://monday.com/" },

  { name:"Trello",      cat:"prod",
    desc:"看板式任务管理，简单直观。",
    intro:"Trello 是一款看板式的任务管理工具，用卡片和列表组织任务，拖拽即可。Trello 简单直观，适合轻量任务管理与个人待办。它是看板管理的入门标准，上手很快。",
    features:[
      "看板式任务管理",
      "卡片与列表",
      "拖拽操作",
      "标签与成员",
      "简单直观",
      "商业软件（有免费层），跨平台，看板入门"
    ],
    tags:["看板","任务","简单"], lang:"JavaScript", lic:"Proprietary", repo:"trello/trello", official:"https://trello.com/" },

  { name:"Basecamp",    cat:"prod",
    desc:"37signals 的项目管理，简洁专注。",
    intro:"Basecamp 是 37signals 的项目管理工具，强调简洁与专注，用“营地”（Campfire）组织项目，减少打扰。Basecamp 适合不喜欢复杂工具的小团队。它是“少即是多”的项目管理代表。",
    features:[
      "营地式项目管理",
      "减少打扰，专注",
      "邮件与讨论",
      "日程与待办",
      "简洁设计",
      "商业软件（37signals），跨平台，简洁项目管理"
    ],
    tags:["项目管理","简洁","营地"], lang:"Ruby", lic:"Proprietary", repo:"37signals/basecamp", official:"https://basecamp.com/" },

  { name:"Airtable",    cat:"prod",
    desc:"数据库 + 电子表格，灵活数据管理。",
    intro:"Airtable 是一款数据库与电子表格结合的工具，用表格组织数据，支持多种视图（网格、看板、日历、画廊）。Airtable 让非技术用户也能管理复杂数据，是数据管理的流行选择。",
    features:[
      "数据库 + 电子表格",
      "多视图（网格/看板/日历）",
      "自动化",
      "团队协作",
      "灵活数据管理",
      "商业软件（有免费层），跨平台，数据管理"
    ],
    tags:["数据库","表格","数据"], lang:"JavaScript", lic:"Proprietary", repo:"airtable/airtable", official:"https://www.airtable.com/" },

  { name:"Confluence",  cat:"prod",
    desc:"Atlassian 团队知识库与文档协作。",
    intro:"Confluence 是 Atlassian 的团队知识库与文档协作工具，写文档、维基、项目说明，支持结构化页面。Confluence 与 Jira 深度集成，是 Atlassian 生态的知识管理核心。",
    features:[
      "团队知识库与维基",
      "结构化文档",
      "与 Jira 集成",
      "协作编辑",
      "模板丰富",
      "商业软件（Atlassian），跨平台，知识管理"
    ],
    tags:["知识库","文档","Atlassian"], lang:"Java", lic:"Proprietary", repo:"atlassian/confluence", official:"https://www.atlassian.com/software/confluence" },

  { name:"Slack",       cat:"prod",
    desc:"团队即时通讯与协作平台。",
    intro:"Slack 是团队即时通讯与协作平台，用频道组织讨论，集成大量工具与机器人。Slack 是远程团队的沟通中枢，让消息与工具汇聚一处。它是团队通讯的主流选择。",
    features:[
      "频道式团队通讯",
      "大量集成与机器人",
      "私信与群组",
      "文件共享",
      "搜索",
      "商业软件（有免费层），跨平台，团队通讯"
    ],
    tags:["通讯","协作","集成"], lang:"JavaScript", lic:"Proprietary", repo:"slack/slack", official:"https://slack.com/" },

  { name:"Microsoft Teams", cat:"prod",
    desc:"微软办公协作平台，聊天+会议+文件。",
    intro:"Microsoft Teams 是微软的办公协作平台，集聊天、视频会议、文件共享、应用于一体，与 Office 365 深度集成。Teams 是企业远程协作的主平台，功能全面。它是微软生态协作的核心。",
    features:[
      "聊天、会议、文件",
      "与 Office 365 集成",
      "应用与机器人",
      "企业级协作",
      "视频会议",
      "商业软件（微软），跨平台，办公协作"
    ],
    tags:["协作","会议","微软"], lang:"C#", lic:"Proprietary", repo:"microsoft/teams", official:"https://www.microsoft.com/microsoft-365/microsoft-teams/" },

  { name:"Zoom",        cat:"prod",
    desc:"视频会议与网络研讨会平台。",
    intro:"Zoom 是视频会议与网络研讨会平台，提供高清视频、屏幕共享、录制、会议管理。Zoom 是远程会议的标准工具，稳定可靠，适合各类会议与网课。它是视频会议的普及者。",
    features:[
      "高清视频会议",
      "屏幕共享与录制",
      "网络研讨会",
      "会议管理",
      "稳定可靠",
      "商业软件（有免费层），跨平台，视频会议标准"
    ],
    tags:["视频会议","会议","远程"], lang:"C++", lic:"Proprietary", repo:"zoom/zoom", official:"https://zoom.us/" },

  { name:"Loom",        cat:"prod",
    desc:"异步视频消息，录屏讲解。",
    intro:"Loom 是一款异步视频消息工具，快速录制屏幕与讲解，生成可分享的视频链接。Loom 让解释与演示更直观，减少会议。它是异步沟通与录屏讲解的代表。",
    features:[
      "异步视频消息",
      "快速录屏讲解",
      "分享视频链接",
      "减少会议",
      "与 Slack 集成",
      "商业软件（有免费层），跨平台，异步沟通"
    ],
    tags:["视频","录屏","异步"], lang:"JavaScript", lic:"Proprietary", repo:"loom/loom", official:"https://www.loom.com/" },

  { name:"Google Workspace", cat:"prod",
    desc:"谷歌办公套件，Gmail+Docs+Drive 云端协作。",
    intro:"Google Workspace 是谷歌的办公套件，含 Gmail、Docs、Sheets、Slides、Drive、Meet。它云端协作，多人实时编辑文档。Google Workspace 是云端办公的标准选择，跨设备无缝。",
    features:[
      "Gmail、Docs、Sheets、Slides",
      "Drive 云存储",
      "Meet 视频会议",
      "实时协作编辑",
      "跨设备无缝",
      "商业软件（谷歌），跨平台，云端办公"
    ],
    tags:["办公","云端","谷歌"], lang:"JavaScript", lic:"Proprietary", repo:"googleworkspace/workspace", official:"https://workspace.google.com/" },

  { name:"Microsoft 365", cat:"prod",
    desc:"微软办公套件，Word+Excel+PowerPoint。",
    intro:"Microsoft 365 是微软的办公套件，含 Word、Excel、PowerPoint、Outlook、OneDrive、Teams。它功能全面，是企业与个人的办公标准。Microsoft 365 是桌面办公的常青树，兼容性极强。",
    features:[
      "Word、Excel、PowerPoint",
      "Outlook、OneDrive、Teams",
      "功能全面",
      "企业标准",
      "桌面 + 云",
      "商业软件（微软），跨平台，桌面办公标准"
    ],
    tags:["办公","套件","微软"], lang:"C++", lic:"Proprietary", repo:"microsoft/365", official:"https://www.microsoft.com/microsoft-365/" },

  { name:"Todoist",     cat:"prod",
    desc:"个人与团队待办清单，自然语言输入。",
    intro:"Todoist 是一款个人与团队的待办清单工具，支持自然语言输入任务（自动识别日期、优先级）、标签、项目、协作。Todoist 让任务管理简单高效，是待办的流行选择。",
    features:[
      "自然语言输入任务",
      "标签、项目、优先级",
      "团队与个人协作",
      "提醒与重复任务",
      "跨平台同步",
      "商业软件（有免费层），跨平台，待办清单"
    ],
    tags:["待办","清单","自然语言"], lang:"Swift", lic:"Proprietary", repo:"todoist/todoist", official:"https://todoist.com/" },

  { name:"Tally",       cat:"prod",
    desc:"无代码表单与问卷工具。",
    intro:"Tally 是一款无代码的表单与问卷工具，快速创建表单、问卷、报名、调查，支持条件逻辑与数据分析。Tally 让非技术人员也能收集数据，是表单工具的轻量选择。",
    features:[
      "无代码表单与问卷",
      "条件逻辑",
      "数据分析",
      "报名、调查",
      "轻量易用",
      "商业软件（有免费层），跨平台，表单工具"
    ],
    tags:["表单","问卷","无代码"], lang:"JavaScript", lic:"Proprietary", repo:"tallyso/tally", official:"https://tally.so/" },

  { name:"Nginx",       cat:"sys",
    desc:"高性能 Web 服务器与反向代理。",
    intro:"Nginx 是一款高性能的 Web 服务器与反向代理，以高并发、低内存著称，常用作静态服务器、反向代理、负载均衡。Nginx 是互联网基础设施的核心，承载海量流量。Web 服务器这块，它是最常见的那个。",
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
    desc:"经典 Web 服务器，模块丰富。",
    intro:"Apache HTTP Server 是经典的 Web 服务器，模块丰富，支持 .htaccess 配置，历史悠久。Apache 是企业网站的常用选择，功能全面，社区庞大。它是 Web 服务器的元老。",
    features:[
      "经典 Web 服务器",
      "模块丰富",
      ".htaccess 配置",
      "企业级稳定",
      "社区庞大",
      "开源（Apache-2.0），跨平台，Web 服务器"
    ],
    tags:["Web服务器","模块","经典"], lang:"C", lic:"Apache-2.0", repo:"apache/httpd" },

  { name:"Elasticsearch", cat:"sys",
    desc:"分布式搜索与分析引擎。",
    intro:"Elasticsearch 是一款分布式搜索与分析引擎，基于 Lucene，提供全文搜索、日志分析、实时监控。Elasticsearch 是搜索引擎领域的标准，常用于日志与数据搜索。它是搜索基础设施的核心。",
    features:[
      "分布式搜索",
      "全文搜索",
      "日志分析",
      "实时监控",
      "REST API",
      "开源（AGPL-3.0），跨平台，搜索引擎"
    ],
    tags:["搜索","日志","分布式"], lang:"Java", lic:"AGPL-3.0", repo:"elastic/elasticsearch" },

  { name:"Kafka",       cat:"sys",
    desc:"分布式事件流平台，消息队列。",
    intro:"Apache Kafka 是一款分布式事件流平台，做消息队列、日志聚合、流处理。Kafka 高吞吐、可持久化，是大数据与实时数据管道的标准。它是事件流处理的核心基础设施。",
    features:[
      "分布式事件流",
      "消息队列",
      "流处理",
      "高吞吐、可持久化",
      "分区与副本",
      "开源（Apache-2.0），跨平台，事件流平台"
    ],
    tags:["消息队列","流处理","分布式"], lang:"Java", lic:"Apache-2.0", repo:"apache/kafka" },

  { name:"RabbitMQ",    cat:"sys",
    desc:"企业级消息队列，多协议。",
    intro:"RabbitMQ 是一款企业级消息队列，基于 AMQP 协议，支持多种消息模式、路由、持久化。RabbitMQ 是任务队列与异步通信的标准选择，功能成熟。它是消息队列的成熟方案。",
    features:[
      "企业级消息队列",
      "AMQP 协议",
      "多种消息模式与路由",
      "持久化",
      "多客户端语言",
      "开源（MPL-2.0），跨平台，消息队列"
    ],
    tags:["消息队列","AMQP","企业"], lang:"Erlang", lic:"MPL-2.0", repo:"rabbitmq/rabbitmq-server" },

  { name:"systemd",     cat:"sys",
    desc:"Linux 系统初始化与进程管理。",
    intro:"systemd 是 Linux 的系统初始化与进程管理器，管理服务、日志、网络、挂载。systemd 是现代 Linux 发行版的标准 init，提供 systemctl 等强大工具。它是现代 Linux 系统管理的核心。",
    features:[
      "系统初始化与进程管理",
      "服务管理（systemctl）",
      "日志（journald）",
      "网络、挂载管理",
      "现代 Linux 标准",
      "开源（LGPL-2.1），Linux，系统管理核心"
    ],
    tags:["init","进程管理","Linux"], lang:"C", lic:"LGPL-2.1", repo:"systemd/systemd" },

  { name:"OpenSSH",     cat:"sys",
    desc:"安全远程登录与文件传输标准。",
    intro:"OpenSSH 是安全套接层（SSH）的开源实现，提供安全远程登录、文件传输（scp/sftp）、端口转发。OpenSSH 是远程访问的标准工具，几乎所有 Unix 系统都内置。它是安全远程访问的基础设施。",
    features:[
      "安全远程登录",
      "文件传输（scp/sftp）",
      "端口转发与隧道",
      "密钥认证",
      "Unix 标准",
      "开源（BSD），跨平台，安全远程访问"
    ],
    tags:["SSH","远程","安全"], lang:"C", lic:"BSD", repo:"openssh/openssh-portable" },

  { name:"nftables",    cat:"sys",
    desc:"现代 Linux 防火墙框架，替代 iptables。",
    intro:"nftables 是现代 Linux 的防火墙与包过滤框架，替代 iptables，提供更简洁的配置与更强的功能。nftables 支持集合、链、表，性能更好。它是现代 Linux 防火墙的标准。",
    features:[
      "现代 Linux 防火墙",
      "替代 iptables",
      "集合、链、表",
      "配置简洁",
      "性能更好",
      "开源（GPL-2.0），Linux，防火墙"
    ],
    tags:["防火墙","包过滤","Linux"], lang:"C", lic:"GPL-2.0", repo:"" ,official:"https://www.netfilter.org/projects/nftables/index.html"},

  { name:"firewalld",   cat:"sys",
    desc:"Linux 防火墙守护，动态区域管理。",
    intro:"firewalld 是 Linux 的防火墙守护进程，基于 nftables/iptables，提供动态防火墙区域管理，不中断连接即可变更规则。firewalld 是 RHEL 系列的默认防火墙。它是企业 Linux 防火墙的常用工具。",
    features:[
      "Linux 防火墙守护",
      "动态区域管理",
      "不中断连接",
      "基于 nftables",
      "RHEL 默认",
      "开源（GPL-2.0），Linux，防火墙"
    ],
    tags:["防火墙","守护","区域"], lang:"C", lic:"GPL-2.0", repo:"firewalld/firewalld" },

  { name:"journald",    cat:"sys",
    desc:"systemd 系统日志守护，二进制日志。",
    intro:"journald 是 systemd 的系统日志守护，收集与存储系统日志（二进制格式），支持持久化、查询（journalctl）。journald 是现代 Linux 的日志基础设施。它是系统日志管理的核心。",
    features:[
      "系统日志收集",
      "二进制日志存储",
      "journalctl 查询",
      "持久化",
      "与 systemd 集成",
      "开源（LGPL-2.1），Linux，日志管理"
    ],
    tags:["日志","守护","systemd"], lang:"C", lic:"LGPL-2.1", repo:"systemd/systemd" },

  { name:"curl",        cat:"net",
    desc:"命令行传输工具，支持多协议下载上传。",
    intro:"curl 是一款强大的命令行传输工具，支持 HTTP、HTTPS、FTP、SFTP 等数十种协议，用于下载、上传、测试接口。curl 是网络传输与 API 测试的标准工具，几乎所有脚本都用到。命令行里传网络数据，基本都靠它。",
    features:[
      "命令行传输工具",
      "支持 HTTP/HTTPS/FTP 等",
      "下载、上传、接口测试",
      "脚本集成",
      "跨平台",
      "开源（curl license），跨平台，传输标准"
    ],
    tags:["传输","下载","命令行"], lang:"C", lic:"curl", repo:"curl/curl" },

  { name:"wget",        cat:"net",
    desc:"命令行下载工具，支持断点续传。",
    intro:"wget 是 GNU 的命令行下载工具，支持 HTTP、FTP，断点续传、递归下载整个网站。wget 是批量下载与网站镜像的标准工具。它是命令行下载的经典工具。",
    features:[
      "命令行下载",
      "HTTP、FTP 支持",
      "断点续传",
      "递归下载网站",
      "批量下载",
      "开源（GPL-3.0），跨平台，下载工具"
    ],
    tags:["下载","断点","递归"], lang:"C", lic:"GPL-3.0", repo:"mirror/wget" },

  { name:"netcat",      cat:"net",
    desc:"网络瑞士军刀，端口与 TCP 工具。",
    intro:"netcat（nc）是网络工具的“瑞士军刀”，用于端口监听、TCP/UDP 传输、简单服务器、调试。netcat 是网络调试与临时服务器的常用工具。它是网络工具的经典。",
    features:[
      "网络瑞士军刀",
      "端口监听与传输",
      "简单 TCP/UDP 服务器",
      "网络调试",
      "临时文件传输",
      "开源（BSD），跨平台，网络工具"
    ],
    tags:["端口","TCP","调试"], lang:"C", lic:"BSD", repo:"" ,official:"https://en.wikipedia.org/wiki/Netcat"},

  { name:"ping",        cat:"net",
    desc:"网络连通性测试工具。",
    intro:"ping 是网络连通性测试工具，通过 ICMP 回显请求测试主机可达性与延迟。ping 是排查网络问题的第一步，简单直接。它是网络连通性测试的标准命令。",
    features:[
      "网络连通性测试",
      "ICMP 回显",
      "测试延迟与丢包",
      "排查网络问题",
      "跨平台",
      "开源（GPL-2.0），跨平台，连通性测试"
    ],
    tags:["连通性","ICMP","测试"], lang:"C", lic:"GPL-2.0", repo:"iputils/iputils" },

  { name:"traceroute",  cat:"net",
    desc:"网络路径跟踪，逐跳探测。",
    intro:"traceroute 是网络路径跟踪工具，通过逐跳探测（TTL 递增）显示数据包经过的每一跳路由器与延迟。traceroute 是排查网络路径与瓶颈的标准工具。它是网络路径跟踪的经典。",
    features:[
      "网络路径跟踪",
      "逐跳探测",
      "显示延迟与瓶颈",
      "排查网络路径",
      "跨平台",
      "开源（GPL-2.0），跨平台，路径跟踪"
    ],
    tags:["路径","逐跳","跟踪"], lang:"C", lic:"GPL-2.0", repo:"" ,official:"https://traceroute.sourceforge.net/"},

  { name:"dig",         cat:"net",
    desc:"DNS 查询工具，灵活强大。",
    intro:"dig 是 DNS 查询工具，支持 A、AAAA、MX、TXT 等记录查询，显示完整的 DNS 响应。dig 是 DNS 调试与查询的标准工具，比 nslookup 更灵活。它是 DNS 查询的专业工具。",
    features:[
      "DNS 查询",
      "A、AAAA、MX、TXT 等",
      "完整响应显示",
      "DNS 调试",
      "灵活强大",
      "开源（BSD），跨平台，DNS 查询"
    ],
    tags:["DNS","查询","调试"], lang:"C", lic:"BSD", repo:"ISC-projects/bind9" },

  { name:"tcpdump",     cat:"net",
    desc:"命令行抓包工具，网络协议分析。",
    intro:"tcpdump 是命令行的网络抓包工具，捕获并显示网络数据包，支持 BPF 过滤表达式。tcpdump 是网络协议分析与抓包的标准工具，排查网络问题必备。它是命令行抓包的经典。",
    features:[
      "命令行抓包",
      "捕获与显示数据包",
      "BPF 过滤表达式",
      "网络协议分析",
      "排查网络问题",
      "开源（BSD），跨平台，抓包工具"
    ],
    tags:["抓包","协议","过滤"], lang:"C", lic:"BSD", repo:"the-tcpdump-group/tcpdump" },

  { name:"WireGuard",   cat:"net",
    desc:"现代快速 VPN 协议，内核态实现。",
    intro:"WireGuard 是一款现代、快速、安全的 VPN 协议，内核态实现，使用现代密码学。WireGuard 配置简单、性能优异，是新一代 VPN 的标准选择。它是现代 VPN 的代表。",
    features:[
      "现代快速 VPN",
      "内核态实现",
      "现代密码学",
      "配置简单",
      "性能优异",
      "开源（GPL-2.0），跨平台，VPN"
    ],
    tags:["VPN","加密","内核"], lang:"Rust", lic:"GPL-2.0", repo:"WireGuard/WireGuard" },

  { name:"OpenVPN",     cat:"net",
    desc:"老牌 VPN 解决方案，企业级。",
    intro:"OpenVPN 是一款成熟的企业级 VPN 解决方案，基于 TLS/SSL，支持多种路由与防火墙。OpenVPN 是企业远程访问的常用方案，功能全面，跨平台。它是企业 VPN 的成熟选择。",
    features:[
      "企业级 VPN",
      "基于 TLS/SSL",
      "多种路由与防火墙",
      "企业远程访问",
      "跨平台",
      "开源（LGPL-2.1），跨平台，企业 VPN"
    ],
    tags:["VPN","企业","TLS"], lang:"C", lic:"LGPL-2.1", repo:"OpenVPN/OpenVPN" },

  { name:"iperf3",      cat:"net",
    desc:"网络带宽测试工具，TCP/UDP。",
    intro:"iperf3 是网络带宽测试工具，测试 TCP/UDP 带宽、延迟、丢包，生成详细报告。iperf3 是网络性能测试的标准工具，排查带宽瓶颈必备。它是带宽测试的经典。",
    features:[
      "网络带宽测试",
      "TCP/UDP 测试",
      "延迟与丢包",
      "详细报告",
      "排查带宽瓶颈",
      "开源（BSD），跨平台，带宽测试"
    ],
    tags:["带宽","性能","测试"], lang:"C", lic:"BSD", repo:"esnet/iperf" },

  { name:"nslookup",    cat:"net",
    desc:"DNS 查询命令，简单直接。",
    intro:"nslookup 是简单的 DNS 查询命令，查询域名对应的 IP 与 DNS 服务器信息。nslookup 是快速查询 DNS 的常用工具，跨平台内置。它是 DNS 查询的基础命令。",
    features:[
      "简单 DNS 查询",
      "域名与 IP 查询",
      "DNS 服务器信息",
      "跨平台内置",
      "快速查询",
      "开源（BSD），跨平台，DNS 查询"
    ],
    tags:["DNS","查询","命令"], lang:"C", lic:"BSD", repo:"ISC-projects/bind9" },

  { name:"ip",          cat:"net",
    desc:"Linux 网络配置与监控命令（iproute2）。",
    intro:"ip 是 Linux 的网络配置与监控命令（iproute2 套件），管理接口、路由、地址、策略路由，替代旧的 ifconfig/route。ip 是现代 Linux 网络管理的标准工具。它是 Linux 网络配置的核心。",
    features:[
      "Linux 网络配置",
      "接口、路由、地址管理",
      "策略路由",
      "替代 ifconfig/route",
      "现代 Linux 标准",
      "开源（GPL-2.0），Linux，网络管理"
    ],
    tags:["网络","路由","Linux"], lang:"C", lic:"GPL-2.0", repo:"iproute2/iproute2" },

  { name:"DaVinci Resolve", cat:"media",
    desc:"专业视频剪辑调色一体化套件。",
    intro:"DaVinci Resolve 是专业视频剪辑、调色、音频、特效一体化套件，影视工业级调色是核心。DaVinci Resolve 是专业视频制作的标杆，免费版功能强大。它是专业视频剪辑调色的一体化工具。",
    features:[
      "专业视频剪辑",
      "影视级调色",
      "音频与特效",
      "一体化工作流",
      "免费版功能强大",
      "商用（免费+Studio），跨平台，专业视频"
    ],
    tags:["视频","调色","专业"], lang:"C++", lic:"Proprietary", repo:"blackmagicdesign/DaVinci-Resolve-Studio", official:"https://www.blackmagicdesign.com/products/davinciresolve" },

  { name:"Shotcut",      cat:"media",
    desc:"开源视频编辑器，跨平台。",
    intro:"Shotcut 是开源跨平台视频编辑器，支持多轨剪辑、特效、滤镜、音频，无需导入直接编辑。Shotcut 是轻量级视频剪辑的标准选择，免费无水印。它是开源视频编辑的代表。",
    features:[
      "开源视频编辑器",
      "多轨剪辑",
      "特效与滤镜",
      "无需导入直接编辑",
      "免费无水印",
      "开源（GPL-3.0），跨平台，视频编辑"
    ],
    tags:["视频","编辑","开源"], lang:"C++", lic:"GPL-3.0", repo:"mltframework/shotcut" },

  { name:"ffmpeg",      cat:"media",
    desc:"音视频处理瑞士军刀，命令行。",
    intro:"ffmpeg 是音视频处理的“瑞士军刀”，命令行转码、剪辑、压缩、流媒体、提取音轨。ffmpeg 是音视频处理的事实标准，几乎所有视频软件底层都依赖它。它是音视频处理的核心引擎。",
    features:[
      "音视频处理",
      "转码、剪辑、压缩",
      "流媒体、提取音轨",
      "命令行强大",
      "几乎所有软件依赖",
      "开源（LGPL-2.1），跨平台，音视频核心"
    ],
    tags:["音视频","转码","命令行"], lang:"C", lic:"LGPL-2.1", repo:"FFmpeg/FFmpeg" },

  { name:"GStreamer",   cat:"media",
    desc:"多媒体处理框架，流式管道。",
    intro:"GStreamer 是灵活的多媒体处理框架，用管道（pipeline）架构处理音视频流，支持编码、转码、流媒体、采集。GStreamer 是 Linux 多媒体系统的核心框架。它是多媒体处理的框架基础。",
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
    intro:"mp3gain 是音频响度归一化工具，批量分析并调整 MP3/OGG 响度到标准（ReplayGain），消除音量忽大忽小。mp3gain 是音频响度管理的常用工具。它是响度归一化的专业工具。",
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
    intro:"ImageMagick 是强大的图像处理工具集，命令行做缩放、裁剪、格式转换、滤镜、合成。ImageMagick 是图像处理的事实标准，广泛用于网站与自动化。它是图像处理的经典。",
    features:[
      "图像处理",
      "缩放、裁剪、格式转换",
      "滤镜与合成",
      "命令行强大",
      "网站与自动化",
      "开源（Apache-2.0），跨平台，图像处理"
    ],
    tags:["图像","处理","命令行"], lang:"C", lic:"Apache-2.0", repo:"ImageMagick/ImageMagick" },

  { name:"IINA",        cat:"media",
    desc:"macOS 现代视频播放器，基于 mpv。",
    intro:"IINA 是 macOS 的现代视频播放器，基于 mpv 引擎，原生 macOS 设计，支持手势、触控板、字幕。IINA 是 macOS 播放器的首选，体验优秀。它是 macOS 视频播放的代表。",
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
    intro:"Kodi 是开源媒体中心，管理视频、音乐、照片、直播，支持插件与皮肤，把设备变成娱乐中枢。Kodi 是家庭媒体中心的标准选择。它是数字娱乐中枢的代表。",
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
    intro:"Plex 是个人媒体服务器，把本地影音库集中管理、转码、多端播放，支持远程访问。Plex 是个人影音库管理的标准方案，体验优秀。它是媒体服务器的代表。",
    features:[
      "个人媒体服务器",
      "影音库集中管理",
      "转码与多端播放",
      "远程访问",
      "体验优秀",
      "商用（免费+付费），跨平台，媒体服务器"
    ],
    tags:["媒体服务器","影音","转码"], lang:"C++", lic:"Proprietary", repo:"plexinc/pms", official:"https://www.plex.tv/" },

  { name:"Emby",        cat:"media",
    desc:"个人媒体服务器，Plex 替代。",
    intro:"Emby 是个人媒体服务器，类似 Plex，管理影音库、转码、多端播放，支持插件与社区。Emby 是 Plex 的常用替代，开源服务器版可选。它是媒体服务器的另一选择。",
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
    intro:"Aegisub 是专业开源字幕编辑器，做字幕翻译、时间轴、样式、卡拉OK，支持多种格式。Aegisub 是字幕制作的标准工具，字幕组常用。它是字幕编辑的专业工具。",
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
    intro:"Subtitle Edit 是字幕编辑与翻译工具，支持多种字幕格式、OCR、时间轴调整、翻译辅助，多语言界面。Subtitle Edit 是字幕处理的标准工具，个人与团队都适用。它是字幕处理的综合工具。",
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
    intro:"Traefik 是云原生的反向代理与负载均衡器，自动发现后端、动态路由、HTTPS（Let's Encrypt 自动）、API 网关。Traefik 是容器化部署入口的标准选择。它是云原生反向代理的代表。",
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
    intro:"Gitea 是轻量、快速的自托管 Git 平台，用 Go 编写，资源占用极低，支持 PR、Issue、CI、Wiki。Gitea 是自托管 Git 的标准选择，单机即可运行。它是轻量 Git 平台的代表。",
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
    intro:"Forgejo 是 Gitea 的社区分支，由去中心化社区治理，专注长期维护，支持 PR、Issue、CI、Wiki。Forgejo 是 Gitea 的社区延续，功能一致。它是社区驱动的 Git 平台。",
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
    intro:"Gogs 是简单、自举的自托管 Git 服务，用 Go 编写，功能聚焦，部署简单，支持 PR、Issue、Webhook。Gogs 是自托管 Git 的轻量选择，曾是 Gitea 的前身。它是简单 Git 服务的代表。",
    features:[
      "简单自托管 Git",
      "自举",
      "Pull Request、Issue",
      "Webhook",
      "部署简单",
      "开源（MIT），自托管，Git 服务"
    ],
    tags:["Git","自托管","简单"], lang:"Go", lic:"MIT", repo:"gogs/gogs" },

  { name:"MinIO",       cat:"host",
    desc:"高性能 S3 兼容对象存储。",
    intro:"MinIO 是高性能的 S3 兼容对象存储，用 Go 编写，原生支持 S3 API、纠删码、版本控制、加密。MinIO 是自托管对象存储的标准选择，替代 S3。它是 S3 兼容存储的代表。",
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
    intro:"Filebrowser 是轻量的 Web 文件管理器，浏览器中管理文件、上传下载、预览、用户权限。Filebrowser 是自托管文件管理的标准选择，单二进制部署。它是 Web 文件管理的代表。",
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
    desc:"自托管网盘，支持多种存储后端。",
    intro:"Cloudreve 是功能丰富的自托管网盘，支持多种存储后端（本地、S3、WebDAV）、文件分享、在线预览、用户管理。Cloudreve 是自托管网盘的标准选择，功能完整。它是自托管网盘的代表。",
    features:[
      "自托管网盘",
      "多种存储后端",
      "文件分享",
      "在线预览",
      "用户管理",
      "开源（AGPL-3.0），自托管，网盘"
    ],
    tags:["网盘","存储","自托管"], lang:"Go", lic:"AGPL-3.0", repo:"Cloudreve/Cloudreve" },

  { name:"Harbor",      cat:"host",
    desc:"企业级容器镜像仓库，CNCF。",
    intro:"Harbor 是企业级的容器镜像仓库（Registry），由 CNCF 托管，支持镜像管理、漏洞扫描、复制、权限、审计。Harbor 是企业容器镜像管理的标准选择。它是容器镜像仓库的代表。",
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
    intro:"Rancher 是 Kubernetes 管理平台，统一管理多集群、用户、权限、应用，简化 K8s 运维。Rancher 是企业 K8s 管理的标准选择。它是 K8s 平台管理的代表。",
    features:[
      "K8s 管理平台",
      "多集群管理",
      "用户与权限",
      "应用部署",
      "简化运维",
      "开源（Apache-2.0），自托管，K8s 管理"
    ],
    tags:["K8s","管理","多集群"], lang:"Go", lic:"Apache-2.0", repo:"rancher/rancher" },

  { name:"Loki",        cat:"host",
    desc:"轻量日志聚合系统，Grafana 生态。",
    intro:"Loki 是轻量级日志聚合系统，Grafana 生态，标签索引、不解析日志、低成本，用与 PromQL 兼容的 LogQL 查询。Loki 是日志聚合的轻量选择，替代 Elasticsearch 做日志。它是日志聚合的代表。",
    features:[
      "轻量日志聚合",
      "标签索引",
      "不解析日志、低成本",
      "LogQL 查询",
      "Grafana 生态",
      "开源（AGPL-3.0），自托管，日志聚合"
    ],
    tags:["日志","聚合","Grafana"], lang:"Go", lic:"AGPL-3.0", repo:"grafana/loki" },

  { name:"Telegraf",    cat:"host",
    desc:"轻量指标采集代理，InfluxData 维护。",
    intro:"Telegraf 是轻量指标采集代理（Agent），由 InfluxData 维护，300+ 插件采集主机、数据库、云服务的指标，输出到 InfluxDB/Prometheus 等多种后端。Telegraf 是指标采集的标准选择。它是指标采集代理的代表。",
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
    intro:"Vault 是密钥与敏感数据管理工具，做动态凭证、加密、租约、审计、多因素认证。Vault 是密钥管理的标准选择，保护敏感信息。它是密钥与凭证管理的代表。",
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
    intro:"Consul 是服务发现与配置管理工具，提供服务注册、健康检查、KV 存储、多数据中心、DNS 接口。Consul 是服务发现的常用选择，支持多数据中心。它是服务发现的代表。",
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
    desc:"命令行 UI 工具包，几条命令就把终端应用变成交互应用。",
    intro:"gum 是 Charm 团队（fzf、glamour 的同一作者）出品的命令行 UI 工具包。它让你用几条简单的命令就能搭出交互式 CLI 应用——下拉菜单、复选框、文件选择器、文本域、表格，全都不用写一行界面代码。它和 shell 脚本天然配合，是快速做出“像应用一样好用”的终端工具的理想选择。",
    features:[
      "一组可组合的 UI 原语：菜单、复选框、文件选择、文本域、表格、确认、过滤器等",
      "纯命令行，不写任何界面代码，shell 里直接调用",
      "与 fzf / glamour 深度集成，同作者、同风格",
      "主题支持，和 Charm 生态一致的视觉",
      "快速、跨平台、单 Go 二进制",
      "特别适合快速搭交互式脚本与 TUI 小工具"
    ],
    tags:["CLI","TUI","终端"], lang:"Go", lic:"MIT", repo:"charmbracelet/gum" },

  { name:"just",      cat:"dev",
    desc:"现代命令运行器，用 justfile 替代 Makefile，定义并运行重复命令。",
    intro:"just 是一款现代命令运行器，是 Make 的更简单替代品。你把项目里重复执行的命令（构建、测试、运行等）写进一个 justfile，然后用 `just 命令名` 一键触发。它零学习成本、支持变量、函数、条件判断、自动发现、自动补全，非常适合把一个项目的常用 shell 命令快速整理成一套可复用的快捷命令。",
    features:[
      "用 justfile 定义命令，`just 命令名` 一键运行，零 Make 学习成本",
      "支持变量、默认值、函数、条件表达式",
      "自动发现：自动向上查找 justfile",
      "内置自动补全，`just` 直接列出可用命令",
      "跨平台、Rust 编写、单二进制、启动极快",
      "简单强大，适合快速整理项目常用命令"
    ],
    tags:["构建工具","CLI","自动化"], lang:"Rust", lic:"MIT OR Apache-2.0", repo:"casey/just" },

  { name:"glow",      cat:"dev",
    desc:"终端里漂亮地渲染 Markdown，语法高亮、响应式布局。",
    intro:"glow 是面向终端的 Markdown 渲染器。它读取一个 Markdown 文件，直接在终端里渲染成排版干净、易读的页面，支持代码语法高亮、表格、引用等。你可以直接指向文件，也可以把内容从管道喂给它，是快速预览 README、文档而不用离开终端的理想伴侣。",
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
    desc:"可视化磁盘占用分析，一眼看出哪些文件夹在吃你的硬盘。",
    intro:"dust 是一个用 Rust 编写的磁盘占用分析工具。它递归扫描一个目录，把各文件夹和文件占用的空间用清晰的树状或条形视图呈现，帮你快速找出是什么在吃掉磁盘。它比传统的 du 快得多、也直观得多，排查磁盘空间时，用它最快最直观。",
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
    intro:"entr 是一个很简单的文件变更监听器。你把关心的文件和一条命令喂给它，每当这些文件发生任何变化，它就自动重新执行那条命令。它只有几千字节的 C 代码、零配置、零依赖，和 shell 管道配合得天衣无缝，是 watchman、fswatch 等工具之外一个轻量又可靠的文件监听选择。",
    features:[
      "文件一变就自动执行命令",
      "几千字节 C 代码，零配置、零依赖",
      "与 shell 管道完美配合",
      "支持多文件、递归监听",
      "跨平台、极轻量",
      "适合快速文件监听、热重载、自动执行"
    ],
    tags:["文件监听","CLI","自动化"], lang:"C", lic:"WTFPL", repo:"eradman/entr" },

  { name:"lazydocker", cat:"host",
    desc:"终端里的 Docker 图形界面，管理容器、镜像、日志不离开终端。",
    intro:"lazydocker 是一个跑在终端里的 Docker TUI（文本图形界面）。它把复杂的 Docker 命令行操作变成一套清晰的交互界面——查看容器状态、启停、看日志、进容器执行命令、管理镜像与卷，全都能一键完成。它是 lazygit 的姊妹项目，重度用 Docker 的人，基本都装一个。",
    features:[
      "Docker 全套操作：容器启停、重启、删除、进容器执行命令",
      "交互式查看日志，实时过滤与搜索",
      "管理镜像、卷、网络、compose",
      "容器资源占用一目了然，stats 视图",
      "单二进制、零依赖，任何终端都能跑",
      "lazygit 姊妹项目，同作者、同风格"
    ],
    tags:["Docker","CLI","TUI"], lang:"Go", lic:"MIT", repo:"jesseduffield/lazydocker" },

  { name:"fastembed", cat:"ai",
    desc:"本地生成文本 / 图像嵌入向量，跑在 CPU 上，无需 GPU。",
    intro:"fastembed 是 Qdrant 出品的本地嵌入向量生成库。它让你在纯 CPU 上就能生成高质量的文本与图像嵌入向量，无需 GPU 和任何重型框架，并且针对速度和内存做了优化。它常与 Qdrant 等向量数据库配合，用来搭建本地、私有的 RAG 与语义搜索管线，轻量嵌入任务，它是最省事的那一个。",
    features:[
      "本地生成文本 / 图像嵌入向量，跑在 CPU 上",
      "无需 GPU、无需重型框架",
      "针对速度与内存优化，推理快",
      "与 Qdrant 等向量数据库无缝集成",
      "适合搭建本地、私有的 RAG 与语义搜索",
      "Python 库，易于集成、跨平台"
    ],
    tags:["嵌入","RAG","本地"], lang:"Python", lic:"Apache-2.0", repo:"qdrant/fastembed" },

  { name:"txtai",     cat:"ai",
    desc:"嵌入、语义搜索与工作流一体化框架，轻量可扩展。",
    intro:"txtai 是一个把嵌入向量、语义搜索与知识工作流整合到一起的一体化框架。它把向量检索、NLP 管线、工作流编排打包成一个轻量、好用的工具，让你用极少代码就能搭出语义搜索与 RAG 应用。它是构建轻量、自包含语义搜索解决方案的好选择。",
    features:[
      "一体化：嵌入 + 语义搜索 + 工作流编排",
      "轻量、易用、代码极少",
      "内置向量存储、多种嵌入模型",
      "支持管线与工作流编排",
      "适合轻量、自包含的语义搜索与 RAG 方案",
      "Python 库、可扩展、跨平台"
    ],
    tags:["嵌入","搜索","RAG"], lang:"Python", lic:"MIT", repo:"neuml/txtai" },

  { name:"Marp",      cat:"prod",
    desc:"用 Markdown 写幻灯片，导出 HTML / PDF / PPTX。",
    intro:"Marp 是用 Markdown 做幻灯片的工具。你用 Markdown 写内容，Marp 把它们渲染成干净、专业的演示页面，并能导出成 HTML、PDF、PPTX。它支持版式、主题、图表，是开发者不想离开文本编辑器就能做出漂亮幻灯片的理想工具。",
    features:[
      "用 Markdown 写幻灯片，无需复杂 PPT 操作",
      "导出 HTML、PDF、PPTX",
      "内置版式、主题、分页",
      "支持图表、代码高亮、公式",
      "CLI 与编辑器插件支持",
      "适合快速产出漂亮的幻灯片"
    ],
    tags:["演示","Markdown","幻灯片"], lang:"TypeScript", lic:"MIT", repo:"marp-team/marp" },

  { name:"tldraw",    cat:"design",
    desc:"开源白板 SDK，搭建协作白板与绘图工具。",
    intro:"tldraw 是一个开源白板 SDK，让你能快速搭建协作白板、绘图与画图应用。它开箱即用地提供完整的白板能力——画布、图形、绘制、擦除、撤销重做、协作——并且高度可扩展。你可以直接用，也可以把它作为组件嵌进自己的产品，是做白板与画板功能的理想底座。",
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
    desc:"长了翅膀的 cat，带语法高亮、git 集成与分页的命令行看文件工具。",
    intro:"bat 是一个“长了翅膀的 cat”，它给朴素的 cat 命令加上了语法高亮、行号、git 集成（显示哪些行被改动过）和自动分页。它用 Rust 编写、启动很快，让在终端里看文件变得赏心悦目。它会自动识别文件类型、支持海量语言，并与 git 集成高亮改动行，终端里快速看文件，很多人直接拿它替代 cat。",
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
    intro:"fd 是一个简单、快速且用户友好的 find 命令替代品。它用 Rust 编写，直接调用操作系统的原生搜索 API（如 Linux 的 readdir），比 find 快得多，语法也直观得多——不用写复杂的 -type -name 表达式。它默认尊重 .gitignore、跳过隐藏文件，输出清晰友好，快速找文件，用它比 find 省事。",
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
    intro:"zoxide 是一个更聪明的 cd 命令。它记录你最常访问的目录，当你输入 `z 部分目录名` 时，它会直接跳到最可能的那个目录。它采用频率 + 近期度评分算法，无需配置、无需索引，兼容 bash、zsh、fish 等任意 shell。它极大缩短了深层目录间的跳转路径，是极受欢迎的效率神器。",
    features:[
      "直接跳到常用目录，比 cd 更聪明",
      "频率 + 近期度评分，学习你的使用习惯",
      "零配置、零索引，兼容任意 shell",
      "支持部分匹配、模糊搜索",
      "Rust 编写、单二进制、跨平台",
      "可与 fzf 等工具组合使用"
    ],
    tags:["CLI","Shell","效率"], lang:"Rust", lic:"MIT", repo:"ajeetdsouza/zoxide" },

  { name:"sd",        cat:"dev",
    desc:"简单安全的 sed 替代品，语法更易读。",
    intro:"sd 是一个简单安全的 sed 替代品。它保留了 sed 的查找替换核心能力，但把语法改成更直观的 `sd 旧 新 文件` 形式，省掉了 sed 里难记的转义符和特殊语法。它用 Rust 编写、快速、默认安全，是终端里快速做文本替换的理想选择。",
    features:[
      "语法是 `sd 旧 新 文件`，比 sed 好懂得多",
      "不用记转义符和特殊语法",
      "默认安全，不会误改原文件",
      "支持正则、多文件、递归",
      "Rust 编写、快速、单二进制、跨平台",
      "适合终端里快速文本替换"
    ],
    tags:["CLI","文本","替换"], lang:"Rust", lic:"MIT OR Apache-2.0", repo:"chmln/sd" },

  { name:"procs",     cat:"dev",
    desc:"现代的 ps 替代品，信息丰富、带树状视图。",
    intro:"procs 是一个现代的 ps 替代品。它显示丰富的进程信息（CPU、内存、磁盘 I/O、网络、命令行等），并支持树状视图、过滤与排序。它用 Rust 编写、启动快、输出清晰易读，终端里看进程，它启动快、看得清。",
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
    intro:"atuin 是一个跨设备同步、可搜索的 shell 历史管理器。它把你执行的每条命令记录到本地 SQLite 数据库，可端到端加密同步。你可以用模糊搜索快速找回历史命令，并支持分享、统计、导入导出 bash/zsh 历史。管理 shell 历史，它最省心。",
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
    desc:"替代 asdf / rbenv / nvm / pyenv 的开发工具版本管理器。",
    intro:"mise 是一个替代 asdf、rbenv、nvm、pyenv 等的开发工具版本管理器。它统一管理多种语言与工具（Node、Python、Rust、Go、Java 等）的版本，只要在项目里放一个 mise.toml 或 .tool-versions 文件，进入目录就会自动切换到正确版本。它用 Rust 编写、快速，支持海量工具，管理开发环境版本，很多人用它统一管理。",
    features:[
      "统一管理多语言与工具版本：Node、Python、Rust、Go、Java 等",
      "按目录自动切换版本，用 mise.toml 或 .tool-versions",
      "替代 asdf、rbenv、nvm、pyenv 等",
      "Rust 编写、快速、单二进制、跨平台",
      "支持海量工具",
      "适合管理开发环境版本"
    ],
    tags:["CLI","版本管理","开发"], lang:"Rust", lic:"MIT OR Apache-2.0", repo:"jdx/mise" },

  { name:"lsd",       cat:"dev",
    desc:"现代的 ls 替代品，彩色、图标、树状视图。",
    intro:"lsd 是一个现代的 ls 替代品。它用彩色、图标和树状视图展示文件，支持丰富的过滤与排序。它用 Rust 编写、启动快、输出美观易读，终端里看目录，它比 ls 直观。",
    features:[
      "彩色、图标、树状视图",
      "丰富的过滤、排序",
      "显示文件类型、大小、权限、属主等",
      "Rust 编写、启动快、单二进制、跨平台",
      "输出美观易读",
      "适合终端里查看目录内容"
    ],
    tags:["CLI","文件","终端"], lang:"Rust", lic:"MIT", repo:"lsd-rs/lsd" },

  { name:"tokei",     cat:"dev",
    desc:"统计各种语言的代码行数，简单快速。",
    intro:"tokei 是一个统计各种语言代码行数的工具。它递归扫描一个目录，统计每种语言的代码行、注释行、空行数，并输出清晰的汇总。它用 Rust 编写、快速、支持海量语言，快速摸一个项目的代码规模，用它很直接。",
    features:[
      "统计各种语言的代码行、注释行、空行数",
      "递归扫描目录，输出清晰汇总",
      "支持海量语言",
      "Rust 编写、快速、单二进制、跨平台",
      "可输出 JSON，易集成进脚本",
      "适合快速了解项目代码规模"
    ],
    tags:["CLI","统计","代码"], lang:"Rust", lic:"MIT", repo:"XAMPPRocky/tokei" },

  { name:"xh",        cat:"dev",
    desc:"现代的 curl 替代品，JSON 优先、输出更友好。",
    intro:"xh 是一个现代的 curl 替代品。它保留 curl 的强大能力，但默认行为更友好——JSON 优先、格式化输出、自动识别 Content-Type 等。它用 Rust 编写、支持 curl 的核心功能，界面更现代，快速发 HTTP 请求，它比 curl 好读。",
    features:[
      "JSON 优先、格式化输出，对人类更友好",
      "自动识别 Content-Type",
      "支持 curl 的核心功能",
      "Rust 编写、快速、单二进制、跨平台",
      "界面更现代",
      "适合快速发 HTTP 请求与调试 API"
    ],
    tags:["CLI","HTTP","API"], lang:"Rust", lic:"MIT OR Apache-2.0", repo:"ducaale/xh" },

  { name:"watchexec", cat:"dev",
    desc:"文件变化就执行命令，带丰富过滤的跨平台文件监听器。",
    intro:"watchexec 是一个跨平台的文件变化监听器，文件一变就执行命令。它支持丰富的过滤（文件类型、目录、忽略规则等），可运行命令、重启进程、发信号。它用 Rust 编写、调用操作系统原生的文件监听 API，高效可靠，热重载、自动构建这类场景，它很稳。",
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
    desc:"命令行个人任务管理器，用简单命令管理待办。",
    intro:"taskwarrior 是一个命令行个人任务管理器。它用简单友好的命令管理你的待办事项，支持优先级、截止日期、项目、标签与报表。它本地、快速、隐私友好，终端里管任务，不上传、够快。",
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
    intro:"micro 是一个带熟悉界面的终端编辑器。它不像 Vim 那样需要学习模式，而是提供鼠标、复制粘贴、多光标等类似图形编辑器的体验。它支持语法高亮、插件、LSP、跨会话撤销，是想在终端里编辑却不想学 Vim 的人的理想选择。",
    features:[
      "熟悉的界面，不用学习模式",
      "鼠标、复制粘贴、多光标编辑",
      "语法高亮、插件、LSP",
      "跨会话撤销",
      "Go 编写、跨平台、单二进制",
      "适合想在终端里编辑却不想学 Vim 的人"
    ],
    tags:["CLI","编辑器","终端"], lang:"Go", lic:"MIT", repo:"micro-editor/micro" },

  { name:"nnn",       cat:"dev",
    desc:"极快的终端文件管理器，占用极小。",
    intro:"nnn 是一个很快的终端文件管理器。它占用极小（不到 200KB）、启动瞬间完成，提供干净高效的文件浏览与管理体验。终端里快速管文件，它最顺手。",
    features:[
      "极快、占用极小（不到 200KB）",
      "干净高效的文件浏览与管理",
      "预览、书签、插件",
      "C 编写、跨平台",
      "可与其他工具组合",
      "适合终端里快速管理文件"
    ],
    tags:["CLI","文件管理器","终端"], lang:"C", lic:"MIT", repo:"jarun/nnn" },

  { name:"tldr",      cat:"dev",
    desc:"社区驱动的 man 页，简洁实用的命令示例。",
    intro:"tldr 是一个社区驱动的 man 页项目。它不像传统 man 页那样冗长，而是为每条命令提供简洁、实用的示例，让你不用读一大篇文档就能快速上手。它由社区维护、覆盖海量命令，可命令行或浏览器使用，快速学命令用法，它给的是最简例子。",
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
    desc:"极速的数据框库，惰性求值 + 并行，比 pandas 快得多。",
    intro:"polars 是一个很快的数据框库。它支持惰性求值与并行处理，在大数据量下比 pandas 快得多。它用 Rust 编写、提供 Python API，高性能数据处理，它够快。",
    features:[
      "极速，大数据量下比 pandas 快得多",
      "惰性求值、并行处理",
      "Rust 编写、提供 Python API",
      "适合高性能数据处理",
      "跨平台",
      "API 直观易用"
    ],
    tags:["数据框","数据","分析"], lang:"Rust", lic:"MIT", repo:"pola-rs/polars" },

  { name:"btop",      cat:"sys",
    desc:"漂亮的系统监视器，CPU / 内存 / 磁盘 / 网络一目了然。",
    intro:"btop 是一个漂亮的系统监视器。它用清晰美观的界面实时显示 CPU、内存、磁盘、网络、进程等信息，并支持进程管理（kill、改优先级等）。它跨平台（Linux、macOS、BSD），易用，快速看系统状态，它最直观。",
    features:[
      "实时显示 CPU、内存、磁盘、网络",
      "清晰美观的界面",
      "进程管理：kill、改优先级",
      "跨平台：Linux、macOS、BSD",
      "易用",
      "适合快速查看系统状态"
    ],
    tags:["系统监视","TUI","运维"], lang:"C++", lic:"MIT", repo:"aristocratos/btop" },

  { name:"glances",   cat:"sys",
    desc:"跨平台系统监视器，也支持 Web 与 API。",
    intro:"glances 是一个跨平台系统监视器。它显示 CPU、内存、磁盘、网络、进程、容器等信息，并支持 Web UI 与 REST API，可远程监控。它用 Python 编写、易安装易使用，跨平台看系统监控，装起来最省事。",
    features:[
      "跨平台：Linux、macOS、Windows、BSD",
      "显示 CPU、内存、磁盘、网络、进程、容器",
      "支持 Web UI 与 REST API，可远程监控",
      "Python 编写、易安装易使用",
      "丰富的展示模式",
      "适合跨平台系统监控"
    ],
    tags:["系统监视","Web","运维"], lang:"Python", lic:"WTFPL", repo:"nicolargo/glances" },

  { name:"iotop",     cat:"sys",
    desc:"I/O 版的 top，实时显示每个进程的磁盘读写。",
    intro:"iotop 是一个 I/O 版的 top。它实时显示每个进程的磁盘 I/O（读与写），帮你快速找出哪些进程在做大量磁盘 I/O。它简单易用，排查磁盘 I/O 瓶颈，它一跑就看出来哪个进程在写。",
    features:[
      "实时显示每个进程的磁盘 I/O",
      "帮你找出 I/O 瓶颈",
      "简单易用",
      "支持多种展示模式",
      "适合排查磁盘 I/O 问题",
      "轻量无依赖"
    ],
    tags:["系统监视","I/O","运维"], lang:"Python", lic:"GPL-2.0", repo:"Tomas-M/iotop" },

  { name:"nethogs",   cat:"net",
    desc:"显示每个进程的网络带宽占用，按进程的 iftop。",
    intro:"nethogs 是一个按进程的网络带宽监视器。它实时显示每个进程的网络上传 / 下载带宽，帮你快速找出哪些进程在大量占用网络。它简单易用，排查谁在占网络，它按进程列出来。",
    features:[
      "实时显示每个进程的网络带宽",
      "帮你找出哪些进程在大量占用网络",
      "简单易用",
      "支持按网卡过滤",
      "适合排查网络带宽问题",
      "轻量无依赖"
    ],
    tags:["网络","监视","运维"], lang:"C", lic:"GPL-2.0", repo:"raboof/nethogs" },

  { name:"gping",     cat:"net",
    desc:"带图表的 ping，用漂亮图形实时显示延迟。",
    intro:"gping 是一个带图表的 ping。它用清晰美观的图形实时显示网络延迟，让你直观看到延迟波动。它用 Go 编写、跨平台，快速看网络延迟，它把数字画成图。",
    features:[
      "用图表实时显示延迟",
      "直观看到延迟波动",
      "Go 编写、跨平台、单二进制",
      "支持多个目标",
      "适合快速检查网络延迟",
      "终端内美观展示"
    ],
    tags:["网络","Ping","监控"], lang:"Go", lic:"MIT", repo:"orf/gping" },

  { name:"Audacity", cat:"media",
    desc:"开源的多轨音频编辑器，录音、剪辑、混音一站式。",
    intro:"Audacity 是开源的多轨音频编辑器，支持录音、剪辑、降噪、混音、格式转换等完整音频工作流。它是跨平台的免费工具，从播客、配音到音乐制作都能胜任，开源音频这块，用得最多的就是它。",
    features:[
      "录音、剪辑、降噪一站式",
      "多轨混音、效果器链",
      "格式转换（MP3 / WAV / FLAC / OGG）",
      "频谱分析、波形编辑",
      "跨平台、开源免费",
      "插件与脚本扩展"
    ],
    tags:["音频","剪辑","开源"], lang:"C++", lic:"GPL-2.0", repo:"audacity/audacity" },

  { name:"duf",       cat:"sys",
    desc:"人类可读的 df，用表格和彩色显示磁盘占用。",
    intro:"duf 是一个人类可读的 df。它用清晰彩色的表格显示所有挂载磁盘的占用情况，让你快速看到哪些磁盘空间紧张。它用 Go 编写、跨平台，快速看磁盘占用，它一条命令列全。",
    features:[
      "用表格显示所有挂载磁盘的占用",
      "彩色、清晰易读",
      "Go 编写、跨平台、单二进制",
      "适合快速查看磁盘占用",
      "支持过滤、排序",
      "轻量无依赖"
    ],
    tags:["磁盘","CLI","系统"], lang:"Go", lic:"Apache-2.0", repo:"muesli/duf" },

  { name:"masscan",   cat:"net",
    desc:"极快的端口扫描器，几分钟扫完全互联网。",
    intro:"masscan 是一个很快的端口扫描器。它能在几分钟内扫完全互联网的开放端口，速度明显快过传统的 nmap。它适合大规模网络侦察与安全评估，但需谨慎使用。它开源且被安全行业广泛采用。",
    features:[
      "极快，几分钟扫完全互联网",
      "大规模网络侦察",
      "安全评估",
      "开源、安全行业广泛采用",
      "需谨慎使用",
      "支持多种输出格式"
    ],
    tags:["安全","扫描","网络"], lang:"C", lic:"BSD-2-Clause", repo:"masscan/masscan" },

  { name:"frp",       cat:"net",
    desc:"高性能反向代理，把内网服务暴露到公网。",
    intro:"frp 是一个高性能反向代理。它把内网服务（HTTP、TCP、UDP 等）暴露到公网，让你在外网访问内网的设备与服务。它支持 TLS、认证、负载均衡，广泛用于远程访问与内网穿透，运维和开发者远程访问常用它。",
    features:[
      "把内网服务暴露到公网：HTTP、TCP、UDP",
      "支持 TLS、认证、负载均衡",
      "Go 编写、高性能、跨平台",
      "广泛用于远程访问与内网穿透",
      "适合内网服务暴露",
      "配置简单"
    ],
    tags:["代理","隧道","运维"], lang:"Go", lic:"MIT", repo:"fatedier/frp" },

  { name:"sing-box",  cat:"net",
    desc:"通用代理平台，支持大量协议与规则路由。",
    intro:"sing-box 是一个通用代理平台。它支持大量代理协议（shadowsocks、vmess、trojan、wireguard 等），并提供强大的规则路由，让你灵活搭建代理方案。它用 Go 编写、跨平台，高级代理配置，它能覆盖很多复杂场景。",
    features:[
      "支持大量代理协议",
      "强大的规则路由",
      "Go 编写、跨平台、单二进制",
      "灵活搭建代理方案",
      "适合高级代理配置",
      "配置驱动"
    ],
    tags:["代理","网络","平台"], lang:"Go", lic:"MIT", repo:"SagerNet/sing-box" },

  { name:"rclone",    cat:"host",
    desc:"云存储的瑞士军刀，一条命令管理多种网盘。",
    intro:"rclone 是云存储的瑞士军刀。它用一个命令管理、同步多种网盘（S3、Google Drive、OneDrive、Dropbox 等），支持复制、同步、挂载等。它用 Go 编写、跨平台、支持海量存储后端，云存储管理和同步，各家网盘它都能搬。",
    features:[
      "管理、同步多种网盘：S3、Google Drive、OneDrive、Dropbox 等",
      "复制、同步、挂载",
      "支持海量存储后端",
      "Go 编写、跨平台、单二进制",
      "适合云存储管理与同步",
      "命令行友好"
    ],
    tags:["云存储","同步","CLI"], lang:"Go", lic:"MIT", repo:"rclone/rclone" },

  { name:"borg",      cat:"host",
    desc:"去重加密的备份工具，增量备份 + 版本化。",
    intro:"borg 是一个去重、加密的备份工具。它把备份数据压缩、加密、去重，支持增量备份与版本化，可回滚到任意历史版本。它用 Python 编写、跨平台，可靠数据备份，它支持加密、去重、增量。",
    features:[
      "去重、加密备份",
      "增量备份、版本化",
      "可回滚到任意历史版本",
      "Python 编写、跨平台",
      "适合可靠的数据备份",
      "支持多种存储后端"
    ],
    tags:["备份","加密","版本化"], lang:"Python", lic:"BSD-2-Clause", repo:"borgbackup/borg" },

  { name:"duckdb",    cat:"ai",
    desc:"进程内分析型数据库，直接在文件上跑 SQL。",
    intro:"duckdb 是一个进程内的分析型数据库。它直接在文件（CSV、Parquet 等）上运行 SQL，无需服务器，让你本地做高性能数据分析。它用 C++ 编写、快速，本地数据分析这块，它最轻。",
    features:[
      "直接在文件上运行 SQL：CSV、Parquet 等",
      "无需服务器、进程内运行",
      "高性能数据分析",
      "C++ 编写、快速",
      "适合本地数据分析",
      "支持多语言 API"
    ],
    tags:["数据库","分析","SQL"], lang:"C++", lic:"MIT", repo:"duckdb/duckdb" },

  { name:"lancedb",   cat:"ai",
    desc:"嵌入式、无服务器的向量数据库，直接在你的进程里跑。",
    intro:"lancedb 是一个嵌入式、无服务器的向量数据库。它直接在你的进程里运行，无需服务器，提供高性能的向量与结构化数据存储和检索。它用 Rust 编写、很快，本地、嵌入式 AI 应用，它把向量存成本地文件。",
    features:[
      "嵌入式、无服务器、直接在进程里跑",
      "无需服务器",
      "高性能的向量与结构化数据存储和检索",
      "Rust 编写、极快",
      "适合本地、嵌入式 AI 应用",
      "支持多语言"
    ],
    tags:["向量数据库","嵌入式","AI"], lang:"Rust", lic:"Apache-2.0", repo:"lancedb/lancedb" },

  { name:"sentence-transformers", cat:"ai",
    desc:"句子嵌入库，用简单 API 把文本编码成向量。",
    intro:"sentence-transformers 是一个句子嵌入库。它提供简单 API，把文本编码成高质量的嵌入向量，支持海量预训练模型。它常用于构建语义搜索与 RAG 管线，文本向量化，它最常用。",
    features:[
      "把文本编码成高质量嵌入向量",
      "简单 API",
      "支持海量预训练模型",
      "常用于语义搜索与 RAG",
      "适合文本向量化",
      "Python 生态"
    ],
    tags:["嵌入","NLP","AI"], lang:"Python", lic:"Apache-2.0", repo:"UKPLab/sentence-transformers" },

  { name:"meilisearch", cat:"ai",
    desc:"即时搜索引擎，容错拼写、开箱即快。",
    intro:"meilisearch 是一个即时搜索引擎。它容错拼写、开箱即快，提供干净的 API 来构建全文搜索。它用 Rust 编写、快速，构建搜索功能很省心。",
    features:[
      "容错拼写、开箱即快",
      "干净的 API，易构建全文搜索",
      "Rust 编写、快速",
      "适合构建搜索功能",
      "支持多语言",
      "轻量易部署"
    ],
    tags:["搜索","引擎","全文"], lang:"Rust", lic:"MIT", repo:"meilisearch/meilisearch" },

  { name:"typesense", cat:"ai",
    desc:"快速、容错拼写的搜索引擎，API 易用。",
    intro:"typesense 是一个快速、容错拼写的搜索引擎。它提供易用的 API 构建全文搜索，支持容错、分面等，构建搜索功能用它很顺。",
    features:[
      "快速、容错拼写",
      "易用的 API，易构建全文搜索",
      "支持分面等",
      "适合构建搜索功能",
      "轻量易部署",
      "支持多语言"
    ],
    tags:["搜索","引擎","全文"], lang:"C++", lic:"GPL-3.0", repo:"typesense/typesense" },

  { name:"openshot",  cat:"design",
    desc:"免费开源视频编辑器，易用、功能全。",
    intro:"openshot 是一个免费、开源的视频编辑器。它易用、功能全（剪辑、转场、特效、音频、字幕等），适合初学者与轻度用户。它跨平台，快速做视频，它适合新手。",
    features:[
      "易用、功能全",
      "剪辑、转场、特效、音频、字幕",
      "跨平台",
      "适合初学者与轻度用户",
      "适合快速做视频",
      "免费开源"
    ],
    tags:["视频剪辑","NLE"], lang:"Python", lic:"GPL-3.0", repo:"OpenShot/openshot-qt" },

  { name:"shotcut",   cat:"design",
    desc:"跨平台开源视频编辑器，多轨、格式广。",
    intro:"shotcut 是一个跨平台、开源的视频编辑器。它支持多轨剪辑、大量格式，功能全（滤镜、转场、音频、字幕等）。它适合个人与小型团队，视频创作，个人和小团队用它很够。",
    features:[
      "多轨剪辑",
      "支持大量格式",
      "功能全：滤镜、转场、音频、字幕",
      "跨平台",
      "适合视频创作",
      "免费开源"
    ],
    tags:["视频剪辑","NLE"], lang:"C++", lic:"GPL-3.0", repo:"mltframework/shotcut" },

  { name:"ardour",    cat:"media",
    desc:"专业数字音频工作站（DAW），多轨录音与混音。",
    intro:"ardour 是一个专业的数字音频工作站（DAW）。它提供多轨录音、混音与编辑，适合音乐制作、播客等。它跨平台，音频制作，音乐、播客都能做。",
    features:[
      "多轨录音、混音、编辑",
      "音乐制作、播客",
      "跨平台",
      "适合音频制作",
      "专业级",
      "免费开源"
    ],
    tags:["音频","DAW","音乐"], lang:"C++", lic:"GPL-2.0", repo:"Ardour/ardour" },
  { name:"processing", cat:"design",
    desc:"创意编程平台，用代码表达、做交互作品。",
    intro:"processing 是一个创意编程平台。它用代码表达，让你做交互作品、动画与视觉艺术。它适合艺术家、设计师与教育者，创意编程，艺术家、设计师、教学都常用。",
    features:[
      "用代码表达",
      "交互作品、动画、视觉艺术",
      "适合艺术家、设计师、教育者",
      "适合创意编程",
      "跨平台",
      "社区活跃"
    ],
    tags:["创意编程","艺术","设计"], lang:"Java", lic:"LGPL-2.1", repo:"processing/processing4" },

  { name:"godot",     cat:"design",
    desc:"免费开源游戏引擎，2D / 3D、功能全。",
    intro:"godot 是一个免费、开源的游戏引擎。它支持 2D 与 3D 开发，功能全（编辑器、物理、动画、网络等），适合个人与团队。它跨平台，游戏开发，个人和团队都能上手。",
    features:[
      "2D 与 3D 开发",
      "功能全：编辑器、物理、动画、网络",
      "适合个人与团队",
      "跨平台",
      "适合游戏开发",
      "免费开源"
    ],
    tags:["游戏引擎","2D","3D"], lang:"C++", lic:"MIT", repo:"godotengine/godot" },
  { name:"Iconoir", cat:"design",
    desc:"开源的线性图标库，2500+ 图标，风格统一。",
    intro:"Iconoir 是开源的线性图标库，提供 2500 多枚风格高度统一的图标，覆盖 UI 设计几乎全部场景。它以 SVG 为格式，可按需按主题、颜色、描边粗细定制，并提供 React、Vue、图标字体等多种集成方式，是 UI 设计师找图标的高性价比选择。",
    features:[
      "2500+ 线性图标，风格、粗细、圆角完全统一",
      "全量 SVG 格式，可按需改颜色、描边、主题",
      "提供 React、Vue、Svelte 等组件库直接引入",
      "支持图标字体与 sprite 多种集成方式",
      "分类清晰，搜索友好，覆盖 UI 全部场景",
      "开源免费，可商用"
    ],
    tags:["图标","UI设计","SVG"], lang:"TypeScript", lic:"MIT", repo:"iconoir-icons/iconoir" ,official:"https://iconoir.com/"},
  { name:"Colormind", cat:"design",
    desc:"用 AI 生成和谐配色的开源工具，设计师配色利器。",
    intro:"Colormind 是用机器学习训练的开源配色生成工具。它从大量真实设计作品中学习色彩搭配规律，一键生成和谐的配色方案，让设计师摆脱凭感觉调色的困境。除了配色生成，它还支持从图片提取色板、检查对比度可访问性，是视觉设计的前期工具。",
    features:[
      "AI 生成和谐配色，摆脱手动调色的低效",
      "从图片 / 截图提取色板，快速还原参考配色",
      "检查文字对比度，满足可访问性标准（WCAG）",
      "支持多种配色风格与情绪（清新、复古、科技感等）",
      "浏览器直接用，开源免费",
      "提供 API 与桌面端，可嵌入设计流程"
    ],
    tags:["配色","设计","可访问性"], lang:"TypeScript", lic:"Apache-2.0", repo:"" ,official:"http://colormind.io/"},
  { name:"Promptfoo", cat:"ai",
    desc:"开源的 LLM 提示词测试与评估框架，系统化验证提示词效果。",
    intro:"Promptfoo 是开源的 LLM 提示词测试与评估框架。它让你用表格定义一批提示词和测试用例，批量跑通各种模型与提示词组合，自动打分、对比、回归测试，把调提示词从玄学变成可量化的工程。适合团队在上线前系统验证提示词质量与模型选择。",
    features:[
      "表格化定义测试用例，批量评估提示词与模型组合",
      "自动评分：规则匹配、LLM-as-judge、人工标注多种模式",
      "回归测试，提示词改动后一键验证不劣化",
      "支持 OpenAI、Anthropic、本地模型等多种后端",
      "可视化对比报告，直观看到不同配置的差异",
      "开源免费，可自托管，CI 集成"
    ],
    tags:["提示词","LLM评估","测试"], lang:"TypeScript", lic:"MIT", repo:"promptfoo/promptfoo" },
  { name:"Stirling-PDF", cat:"prod",
    desc:"自托管的 PDF 工具集合，合并、拆分、转换、加密一站搞定。",
    intro:"Stirling-PDF 是开源的自托管 PDF 工具集合，把合并、拆分、压缩、旋转、加水印、加密解密、格式互转（PDF↔Word、图片↔PDF）等几十种 PDF 操作整合到一个网页界面里。它完全本地运行、不上传文件，是摆脱在线 PDF 服务隐私顾虑的自建方案。",
    features:[
      "合并、拆分、旋转、压缩 PDF，常用操作全覆盖",
      "格式互转：PDF 与 Word、Excel、图片双向转换",
      "加密 / 解密 / 加水印 / 去除水印",
      "完全自托管，文件不离开你的机器，隐私可控",
      "Docker 一键部署，浏览器即用",
      "开源免费，持续新增 PDF 处理能力"
    ],
    tags:["PDF","办公","自托管"], lang:"Java", lic:"MIT", repo:"Stirling-Tools/Stirling-PDF" },
  { name:"Freeplane", cat:"prod",
    desc:"开源的思维导图与概念图工具，梳理复杂知识结构。",
    intro:"Freeplane 是开源的思维导图工具，支持创建思维导图、概念图、流程组织图，用来梳理知识结构、做头脑风暴、规划项目。它功能丰富但不臃肿，支持节点样式、折叠、超链接、嵌入，适合把零散想法组织成可视化的知识图谱。",
    features:[
      "思维导图 / 概念图 / 流程组织图多模式",
      "节点富样式：颜色、图标、超链接、附件",
      "一键折叠展开，快速把握全局与细节",
      "支持导出多种格式，便于分享",
      "跨平台，开源免费",
      "插件可扩展，社区模板丰富"
    ],
    tags:["思维导图","知识管理","头脑风暴"], lang:"Java", lic:"GPL-2.0", repo:"freeplane/freeplane" },
  { name:"Logseq", cat:"prod",
    desc:"开源的双链笔记与大纲工具，本地优先、隐私友好。",
    intro:"Logseq 是开源的本地优先笔记与大纲工具，核心是双链——每条笔记互相引用，自动形成知识网络。它以大纲为组织单位，支持块级引用、反链、数据库属性查询，数据是纯文本存在本地，隐私友好，是 Roam / Notion 的开源替代。",
    features:[
      "双链笔记：块级互相引用，自动生成反链与知识图谱",
      "大纲式组织，层级清晰，支持折叠",
      "本地优先：数据是纯文本文件，存在自己机器上",
      "数据库属性查询，笔记可结构化检索",
      "支持嵌入图片、表格、代码块、嵌入页面",
      "开源免费，插件生态活跃"
    ],
    tags:["笔记","双链","本地优先"], lang:"Clojure", lic:"AGPL-3.0", repo:"logseq/logseq" },
  { name:"FreshRSS", cat:"host",
    desc:"自托管的 RSS 聚合阅读器，掌控自己的信息流。",
    intro:"FreshRSS 是开源的自托管 RSS 阅读器，把分散在各处的博客、新闻、订阅源聚合到一个干净的阅读界面。它不经过任何第三方，不追踪你的阅读行为，支持多用户、多设备同步，是逃离算法推荐、回归我订什么看什么的信息管理方案。",
    features:[
      "聚合 RSS / Atom 订阅源，统一阅读入口",
      "自托管，数据与订阅完全自主可控",
      "多用户、多设备同步，手机 / 网页一套订阅",
      "分类、标签、全文搜索，管理大量订阅源",
      "支持全文抓取与摘要显示",
      "轻量高效，PHP 实现，部署简单"
    ],
    tags:["RSS","信息聚合","自托管"], lang:"PHP", lic:"AGPL-3.0", repo:"FreshRSS/FreshRSS" },
  { name:"Portainer", cat:"host",
    desc:"开源的 Docker / Kubernetes 管理面板，图形化运维容器。",
    intro:"Portainer 是开源的容器管理面板，为 Docker、Swarm、Kubernetes 提供图形化操作界面。它把镜像管理、容器启停、日志查看、网络与卷管理、用户权限这些命令行操作变成点选完成，是自建服务器上管理容器的可视化入口，降低 Docker 运维门槛。",
    features:[
      "图形化管理 Docker 容器、镜像、网络、数据卷",
      "支持 Swarm 与 Kubernetes 集群管理",
      "日志查看、容器启停、资源监控一目了然",
      "用户与权限控制，团队协作管理",
      "模板市场，一键部署常见自托管应用",
      "开源免费（社区版），Docker 一键部署"
    ],
    tags:["Docker","容器管理","自托管"], lang:"Go", lic:"Apache-2.0", repo:"portainer/portainer" },
  { name:"Hugo", cat:"host",
    desc:"极快的静态博客生成器，一个二进制构建整个网站。",
    intro:"Hugo 是用 Go 编写的很快的静态博客生成器，一个静态二进制、无依赖，几秒内就能构建出成千上万页的网站。它以内容为 Markdown 文件、模板为 Go template 的方式工作，构建产物是纯静态文件，部署在任何静态托管上都飞快，是个人博客、文档站、技术站的高性能选择。",
    features:[
      "构建极快，单二进制、零依赖，大站秒级构建",
      "内容为 Markdown 文件，版本管理友好",
      "丰富的主题与插件生态，开箱即用的模板",
      "输出纯静态文件，部署在任何托管平台都飞快",
      "支持博客、文档、多语言、搜索等完整功能",
      "跨平台，开源免费"
    ],
    tags:["博客","静态站","建站"], lang:"Go", lic:"Apache-2.0", repo:"gohugoio/hugo" },
  { name:"Audacious", cat:"media",
    desc:"轻量跨平台音乐播放器，界面清爽、插件可扩展。",
    intro:"Audacious 是轻量级的跨平台音乐播放器，界面清爽、资源占用低，专注播放音乐这件事。它通过插件扩展支持各种音频格式，提供播放列表、均衡器、标签编辑，是想要一个不臃肿、纯听音乐的工具的用户的务实之选。",
    features:[
      "轻量低占用，界面清爽专注听歌",
      "插件化格式支持，可扩展各种音频格式",
      "播放列表、随机播放、均衡器、标签编辑",
      "支持 MPRIS，系统级媒体控制",
      "跨平台，开源免费",
      "皮肤可扩展，自定义外观"
    ],
    tags:["音乐","播放器","轻量"], lang:"C", lic:"GPL-2.0", repo:"audacious-media-player/audacious" },

  { name:"delta",   cat:"dev",
    desc:"git diff 美化工具，语法高亮 + 行内对比。",
    intro:"delta 是一款 git diff 的美化与增强工具，它给 diff 加上语法高亮、行内对比、侧边栏模式，让代码变更一目了然。delta 与 git 深度集成，可作为 git 的 pager 自动使用，是许多开发者提升代码评审体验的首选。它用 Rust 编写，启动飞快。",
    features:[
      "语法高亮的 diff 输出",
      "行内对比与侧边栏模式",
      "作为 git pager 自动使用",
      "用 Rust 编写，启动极快",
      "丰富的主题与自定义",
      "开源（MIT），跨平台，体验极佳"
    ],
    tags:["git","diff","CLI"], lang:"Rust", lic:"MIT", repo:"dandavison/delta" },

  { name:"eza",     cat:"dev",
    desc:"现代 ls 替代，树形视图 + 语法高亮。",
    intro:"eza 是一款用 Rust 编写的现代 ls 替代工具，它提供树形视图、git 状态显示、文件类型图标、语法高亮等增强功能。eza 的 -l 长格式、--tree 树形、--icons 图标，让目录浏览不再是单调的黑白。它是终端体验现代化的代表之一。",
    features:[
      "树形视图（--tree），直观看目录结构",
      "git 状态与文件图标显示",
      "语法高亮的文件预览",
      "长格式、排序、过滤灵活",
      "用 Rust 编写，性能优秀",
      "开源（MIT），跨平台，终端现代化"
    ],
    tags:["文件管理","TUI","CLI"], lang:"Rust", lic:"MIT", repo:"eza-community/eza" },

  { name:"broot",   cat:"dev",
    desc:"交互式树形目录浏览器，键盘驱动。",
    intro:"broot 是一款交互式树形目录浏览器，用键盘导航浏览文件系统，支持搜索、过滤、标记、操作。它把树形视图与键盘操作结合，比传统 ls + cd 高效得多。broot 用 Rust 编写，可集成到 shell（如 Zsh 的 broot 补全），终端里逛目录，它把树画出来，比 ls 直观。",
    features:[
      "交互式树形浏览，键盘导航",
      "搜索、过滤、标记文件",
      "直接操作：打开、复制、移动",
      "集成到 shell 补全（Zsh/Bash）",
      "用 Rust 编写，性能优秀",
      "开源（MIT），跨平台，导航利器"
    ],
    tags:["文件管理","TUI","导航"], lang:"Rust", lic:"MIT", repo:"Canop/broot" },

  { name:"scc",     cat:"dev",
    desc:"极速代码行数统计工具，比 tokei 更快。",
    intro:"scc（Sloc C Code）是一款用 C 编写的很快的代码行数统计工具，比 tokei 更快，能统计代码、注释、空行的占比。scc 支持数百种语言，可输出表格、JSON，适合大型项目的代码规模分析。它的性能优势让它成为代码统计的新选择。",
    features:[
      "极速统计：比 tokei 更快",
      "代码/注释/空行占比分析",
      "支持数百种语言",
      "表格、JSON 输出",
      "大型项目代码规模分析",
      "开源（GPL-3.0），跨平台，性能优秀"
    ],
    tags:["代码统计","CLI","分析"], lang:"C", lic:"GPL-3.0", repo:"boyter/scc" },

  { name:"gitui",   cat:"dev",
    desc:"Rust 编写的 TUI git 客户端。",
    intro:"gitui 是一款用 Rust 编写的终端用户界面（TUI）git 客户端，它提供可视化的分支、提交、暂存、合并操作，比命令行更直观，比桌面客户端更轻量。gitui 的键盘操作流畅，是终端里管理 git 的现代方案，适合不想离开终端的用户。",
    features:[
      "TUI 可视化 git 操作",
      "分支、提交、暂存、合并可视化",
      "键盘驱动，操作流畅",
      "用 Rust 编写，性能优秀",
      "轻量，不离开终端",
      "开源（MIT），跨平台，现代 TUI"
    ],
    tags:["git","TUI","CLI"], lang:"Rust", lic:"MIT", repo:"extrawurst/gitui" },

  { name:"tig",     cat:"dev",
    desc:"终端里的 git 仓库浏览器。",
    intro:"tig 是一款终端里的 git 仓库浏览器，用 C 编写，极轻量。它提供可视化的提交历史、分支、差异浏览，支持交互式操作（查看、cherry-pick、revert）。tig 是命令行 git 的有力补充，让仓库历史在终端里清晰可读，适合喜欢终端的用户。",
    features:[
      "终端里可视化 git 历史",
      "分支、提交、差异浏览",
      "交互式操作：cherry-pick、revert",
      "用 C 编写，极轻量",
      "与 git 命令配合使用",
      "开源（GPL-2.0），跨平台，经典工具"
    ],
    tags:["git","TUI","CLI"], lang:"C", lic:"GPL-2.0", repo:"" ,official:"https://jonas.github.io/tig/"},

  { name:"uv",      cat:"dev",
    desc:"极快的 Python 包与环境管理器，Rust 编写。",
    intro:"uv 是一款用 Rust 编写的很快的 Python 包与环境管理器，是 pip、pip-tools、virtualenv、pyenv 的快替代品。它把依赖解析、环境管理、Python 版本管理整合在一起，速度比 pip 快 10-100 倍。uv 正在重塑 Python 项目的工具链，新一代 Python 开发者，换它的人越来越多。",
    features:[
      "极快：比 pip 快 10-100 倍",
      "整合 pip、virtualenv、pyenv 功能",
      "Python 版本管理",
      "依赖解析与锁定",
      "用 Rust 编写，性能优秀",
      "开源（MIT），跨平台，Python 新宠"
    ],
    tags:["包管理","Python","Rust"], lang:"Rust", lic:"MIT", repo:"astral-sh/uv" },

  { name:"pyenv",   cat:"dev",
    desc:"Python 版本管理器，多版本共存。",
    intro:"pyenv 是一款 Python 版本管理器，让你在同一台机器上安装、切换多个 Python 版本。它支持按项目、按目录设置 Python 版本，解决“不同项目需要不同 Python 版本”的难题。pyenv 是 Python 开发者的标准工具，配合 pip 与 virtualenv 使用。",
    features:[
      "多 Python 版本共存与切换",
      "按项目/目录设置版本",
      "自动编译安装各版本",
      "与 pip、virtualenv 配合",
      "全局、用户、项目级版本控制",
      "开源（MIT），跨平台，Python 标准"
    ],
    tags:["版本管理","Python","CLI"], lang:"Shell", lic:"MIT", repo:"pyenv/pyenv" },

  { name:"nvm",     cat:"dev",
    desc:"Node.js 版本管理器，多版本共存。",
    intro:"nvm（Node Version Manager）是一款 Node.js 版本管理器，让你在同一台机器上安装、切换多个 Node.js 版本。它支持按项目设置 Node 版本（.nvmrc），解决“不同项目需要不同 Node 版本”的难题。nvm 是 Node.js 开发者的标准工具，几乎每个前端项目都依赖它。",
    features:[
      "多 Node.js 版本共存与切换",
      ".nvmrc 按项目设置版本",
      "自动安装各版本",
      "与 npm 配合使用",
      "全局、项目级版本控制",
      "开源（MIT），跨平台，Node 标准"
    ],
    tags:["版本管理","Node.js","CLI"], lang:"Shell", lic:"MIT", repo:"nvm-sh/nvm" },

  { name:"asdf",    cat:"dev",
    desc:"通用运行时版本管理器，一套管所有。",
    intro:"asdf 是一款通用的运行时版本管理器，用统一的工具管理 Python、Node、Ruby、JVM 等数十种运行时。它支持按项目、按目录设置版本，把“每个语言一个版本管理器”的混乱变成“一个工具管所有”。asdf 是 polyglot 开发者的福音。",
    features:[
      "统一管理多种运行时版本",
      "按项目/目录设置版本",
      "插件机制，支持数十种语言",
      ".tool-versions 声明项目版本",
      "一套工具，告别混乱",
      "开源（MIT），跨平台，polyglot 利器"
    ],
    tags:["版本管理","多语言","CLI"], lang:"Ruby", lic:"MIT", repo:"asdf-vm/asdf" },

  { name:"direnv",  cat:"dev",
    desc:"按目录自动加载环境变量。",
    intro:"direnv 是一款按目录自动加载环境变量的工具，它读取每个目录的 .envrc 文件，进入目录时自动加载变量，离开时卸载。它解决了“不同项目需要不同环境变量”的难题，让 shell 环境随目录切换。direnv 是后端与基础设施开发者的常用工具。",
    features:[
      "按目录自动加载环境变量",
      ".envrc 声明目录级变量",
      "进入/离开目录自动切换",
      "变量导出到 shell",
      "与 nix、docker 等集成",
      "开源（Apache-2.0），跨平台，环境管理"
    ],
    tags:["环境变量","CLI","Unix"], lang:"Go", lic:"Apache-2.0", repo:"direnv/direnv" },

  { name:"pre-commit", cat:"dev",
    desc:"git 钩子框架，提交前自动检查。",
    intro:"pre-commit 是一款 git 钩子框架，它让你在提交前自动运行一组检查（lint、格式化、类型检查、秘密扫描等）。它管理钩子的安装与更新，支持数百个现成检查，让代码质量在提交前就被把关。pre-commit 是团队代码质量的标准配置。",
    features:[
      "提交前自动运行检查",
      "管理钩子安装与更新",
      "数百个现成检查可用",
      "支持 lint、格式化、类型检查",
      "团队统一代码质量",
      "开源（MIT），跨平台，质量守门"
    ],
    tags:["git","钩子","质量"], lang:"Python", lic:"MIT", repo:"pre-commit/pre-commit" },

  { name:"shellcheck", cat:"dev",
    desc:"Shell 脚本静态分析器，找出潜在 bug。",
    intro:"shellcheck 是一款 Shell 脚本静态分析器，它能找出脚本中的潜在 bug、坏味道、可移植性问题。它支持 Bash、Zsh、Ksh、POSIX sh，给出可操作的修复建议。shellcheck 写可靠 Shell 脚本，它帮你查坑，配合编辑器能实时提示。",
    features:[
      "静态分析 Shell 脚本",
      "找出 bug、坏味道、可移植性问题",
      "支持 Bash、Zsh、Ksh、POSIX sh",
      "可操作的修复建议",
      "编辑器集成，实时提示",
      "开源（GPL-3.0），跨平台，脚本质量"
    ],
    tags:["Shell","Lint","CLI"], lang:"Haskell", lic:"GPL-3.0", repo:"koalaman/shellcheck" },

  { name:"act",     cat:"dev",
    desc:"在本地运行 GitHub Actions 工作流。",
    intro:"act 是一款在本地运行 GitHub Actions 工作流的工具，它把 CI 工作流拉到本地容器里执行，无需推送到 GitHub 就能测试。act 让你快速迭代 CI 配置，调试工作流，是开发 CI/CD 流程的利器。它支持 macOS、Linux、Windows。",
    features:[
      "本地运行 GitHub Actions 工作流",
      "无需推送即可测试 CI",
      "容器隔离执行",
      "调试工作流，快速迭代",
      "支持多平台",
      "开源（MIT），跨平台，CI 利器"
    ],
    tags:["CI/CD","GitHub Actions","本地"], lang:"Go", lic:"MIT", repo:"nektos/act" },

  { name:"strace",  cat:"dev",
    desc:"Linux 系统调用跟踪器，调试疑难问题。",
    intro:"strace 是 Linux 下强大的系统调用与信号跟踪器，它能实时显示一个进程执行了哪些系统调用、传递了什么参数、返回了什么结果。strace 是调试疑难问题（权限、IO、网络、死锁）的利器，能看清程序与内核交互的全部细节。",
    features:[
      "跟踪系统调用与信号",
      "显示参数与返回值",
      "调试权限、IO、网络问题",
      "过滤特定调用",
      "性能分析辅助",
      "开源（ISC），Linux 标准，调试利器"
    ],
    tags:["调试","系统调用","Linux"], lang:"C", lic:"ISC", repo:"strace/strace" },

  { name:"valgrind", cat:"dev",
    desc:"内存错误检测与性能分析工具。",
    intro:"valgrind 是一款强大的内存错误检测与性能分析工具，它能找出内存泄漏、越界访问、未初始化读取等 C/C++ 常见内存错误。valgrind 的 Memcheck 工具是检测内存问题的标准，Callgrind 则提供性能分析。调试疑难内存问题，它专门查这类。",
    features:[
      "检测内存泄漏、越界、未初始化",
      "Memcheck：内存错误检测标准",
      "Callgrind：性能分析",
      "C/C++ 调试利器",
      "报告精确到行号",
      "开源（GPL-2.0），跨平台，内存调试"
    ],
    tags:["调试","内存","分析"], lang:"C++", lic:"GPL-2.0", repo:"" ,official:"https://valgrind.org/"},

  { name:"GDB",     cat:"dev",
    desc:"GNU 调试器，C/C++ 调试的标准工具。",
    intro:"GDB（GNU Debugger）是 GNU 项目提供的调试器，是 C/C++ 程序调试的标准工具。它支持断点、单步、变量检查、线程调试、远程调试等完整能力。GDB 是理解程序运行时行为、定位崩溃与逻辑错误的利器，几乎所有 C/C++ 开发者都熟悉它。",
    features:[
      "断点、单步、变量检查",
      "多线程与协程调试",
      "远程调试（GDB Server）",
      "脚本化（Python）",
      "C/C++ 调试标准",
      "开源（GPL-3.0），跨平台，经典工具"
    ],
    tags:["调试","C/C++","CLI"], lang:"C++", lic:"GPL-3.0", repo:"gdb" },

  { name:"perf",    cat:"dev",
    desc:"Linux 内核性能分析器，硬件计数器 + 采样。",
    intro:"perf 是 Linux 内核自带的性能分析器，它能利用硬件性能计数器，对程序进行采样式性能分析。perf 可以找出热点函数、缓存未命中、分支预测失败等底层性能问题。它是内核与高性能应用调优的核心工具，数据来自内核与 CPU 硬件。",
    features:[
      "硬件性能计数器采样",
      "找出热点函数与性能瓶颈",
      "缓存、分支、内存分析",
      "内核与用户态全覆盖",
      "火焰图生成",
      "开源（GPL-2.0），Linux 内核自带，调优利器"
    ],
    tags:["性能","分析","Linux"], lang:"C", lic:"GPL-2.0", repo:"torvalds/linux" },

  { name:"fff",     cat:"dev",
    desc:"极速模糊文件查找器，比 find 更快。",
    intro:"fff（fast file finder）是一款很快的模糊文件查找器，它索引文件系统，支持模糊匹配，比传统 find 快得多。fff 用 C 编写，能瞬间在大型文件树里定位文件。终端里快速找文件，它配合 fzf 用很顺手。",
    features:[
      "模糊匹配，极速查找文件",
      "索引文件系统，毫秒响应",
      "比 find 快得多",
      "与 fzf 集成，交互式选择",
      "用 C 编写，性能优秀",
      "开源（GPL-3.0），跨平台，找文件利器"
    ],
    tags:["文件查找","CLI","模糊匹配"], lang:"C", lic:"GPL-3.0", repo:"dylanaraps/fff" },

  { name:"Chroma",        cat:"ai",
    desc:"开源向量数据库，AI 应用首选。",
    intro:"Chroma 是一款开源的向量数据库，专为 AI 应用设计，提供嵌入存储、相似性检索、元数据过滤。它用简单的 API 让 RAG、语义搜索变得容易，支持本地与云端部署。Chroma 是 AI 开发者构建检索功能的常用向量库，易用且功能完整。",
    features:[
      "向量存储与相似性检索",
      "元数据过滤",
      "简单 API，易上手",
      "本地与云端部署",
      "支持多种嵌入模型",
      "开源（Apache-2.0），跨平台，AI 向量库"
    ],
    tags:["向量库","RAG","AI"], lang:"Python", lic:"Apache-2.0", repo:"chroma-core/chroma" },

  { name:"Weaviate",      cat:"ai",
    desc:"云原生向量数据库，混合搜索。",
    intro:"Weaviate 是一款云原生的向量数据库，提供向量搜索、关键词搜索、混合搜索。它内置嵌入模块，支持 GraphQL 与 REST API，可自托管或云端。Weaviate 是企业级向量搜索的成熟方案，功能强大且可伸缩。",
    features:[
      "向量、关键词、混合搜索",
      "内置嵌入模块",
      "GraphQL 与 REST API",
      "云原生，可自托管",
      "高可用与扩展",
      "开源（BSD-3），跨平台，企业级"
    ],
    tags:["向量库","搜索","AI"], lang:"Go", lic:"BSD-3-Clause", repo:"weaviate/weaviate" },

  { name:"Milvus",       cat:"ai",
    desc:"分布式向量数据库，亿级向量检索。",
    intro:"Milvus 是一款开源的分布式向量数据库，专为大规模向量检索设计，能处理十亿级向量。它提供高效的索引、过滤、混合搜索，是大规模 AI 检索的基础设施。Milvus 由 Zilliz 开发，是向量数据库领域的领先开源项目。",
    features:[
      "分布式，亿级向量检索",
      "高效向量索引",
      "过滤与混合搜索",
      "云原生，可伸缩",
      "多租户与高可用",
      "开源（Apache-2.0），跨平台，向量库标杆"
    ],
    tags:["向量库","分布式","AI"], lang:"Go", lic:"Apache-2.0", repo:"milvus-io/milvus" },

  { name:"FAISS",        cat:"ai",
    desc:"Facebook 的相似性搜索库，高性能向量检索。",
    intro:"FAISS 是 Meta（Facebook）开源的相似性搜索与聚类库，提供高性能的向量检索算法（IVF、HNSW 等）。FAISS 是许多向量数据库的底层引擎，支持 GPU 加速与大规模检索。它是向量搜索领域的基石库，被广泛使用。",
    features:[
      "高性能相似性搜索",
      "多种索引（IVF、HNSW）",
      "GPU 加速",
      "大规模向量检索",
      "聚类与压缩",
      "开源（MIT），跨平台，向量搜索基石"
    ],
    tags:["向量检索","搜索","库"], lang:"C++", lic:"MIT", repo:"facebookresearch/faiss" },

  { name:"PEFT",         cat:"ai",
    desc:"参数高效微调库，LoRA 等微调方法。",
    intro:"PEFT（Parameter-Efficient Fine-Tuning）是 Hugging Face 的参数高效微调库，提供 LoRA、QLoRA、Adapter 等微调方法。它让你用少量显存微调大模型，无需全量训练。PEFT 是大模型微调的常用工具，与 Transformers 无缝集成。",
    features:[
      "LoRA、QLoRA、Adapter 微调",
      "少量显存微调大模型",
      "与 Transformers 集成",
      "支持多种模型",
      "训练与推理",
      "开源（Apache-2.0），跨平台，微调标准"
    ],
    tags:["微调","LLM","库"], lang:"Python", lic:"Apache-2.0", repo:"huggingface/peft" },

  { name:"Axolotl",      cat:"ai",
    desc:"LLM 微调框架，配置驱动训练。",
    intro:"Axolotl 是一款 LLM 微调框架，用 YAML 配置驱动训练，支持 LoRA、QLoRA、全量微调。它提供简洁的配置方式，让大模型微调变得简单可复现。Axolotl 是社区热门的微调工具，适合研究与生产微调。",
    features:[
      "YAML 配置驱动训练",
      "LoRA、QLoRA、全量微调",
      "支持多种模型",
      "可复现的训练",
      "分布式训练",
      "开源（MIT），跨平台，微调工具"
    ],
    tags:["微调","LLM","训练"], lang:"Python", lic:"MIT", repo:"axolotl-ai-cloud/axolotl" },

  { name:"Unsloth",     cat:"ai",
    desc:"高速 LLM 微调，2x 加速省显存。",
    intro:"Unsloth 是一款高速的 LLM 微调库，用优化内核让 LoRA/QLoRA 微调提速 2 倍、省显存 60%。它支持主流开源模型（Llama、Mistral 等），让微调更快更省。Unsloth 是社区流行的微调加速工具。",
    features:[
      "微调提速 2 倍",
      "省显存 60%",
      "支持主流开源模型",
      "LoRA、QLoRA",
      "一键微调脚本",
      "开源（Apache-2.0），跨平台，微调加速"
    ],
    tags:["微调","加速","LLM"], lang:"Python", lic:"Apache-2.0", repo:"unslothai/unsloth" },

  { name:"Cline",       cat:"ai",
    desc:"开源 AI 编码代理，VS Code 插件。",
    intro:"Cline 是一款开源的 AI 编码代理，以 VS Code 插件形式运行，让 AI 自主读写文件、执行命令、调试，像结对程序员一样完成编码任务。Cline 支持多种 LLM，是开源编码代理的代表，社区活跃。",
    features:[
      "AI 自主编码代理",
      "读写文件、执行命令",
      "VS Code 插件",
      "支持多种 LLM",
      "开源，社区活跃",
      "开源（Apache-2.0），跨平台，编码代理"
    ],
    tags:["编码","Agent","开源"], lang:"TypeScript", lic:"Apache-2.0", repo:"cline/cline" },

  { name:"Aider",       cat:"ai",
    desc:"终端 AI 编码助手，Git 原生。",
    intro:"Aider 是一款终端的 AI 编码助手，用自然语言指挥 AI 改代码，原生集成 Git，每次改动自动提交。Aider 支持多种 LLM，提供代码库索引、测试、多文件编辑。终端派开发者用 AI 写代码，它很顺手。",
    features:[
      "终端 AI 编码助手",
      "Git 原生，自动提交",
      "多文件编辑",
      "代码库索引",
      "支持多种 LLM",
      "开源（Apache-2.0），跨平台，终端编码"
    ],
    tags:["编码","终端","Git"], lang:"Python", lic:"Apache-2.0", repo:"Aider-AI/aider" },

  { name:"Open Interpreter", cat:"ai",
    desc:"让 AI 在本地运行代码。",
    intro:"Open Interpreter 是一款开源工具，让大语言模型在你的电脑上运行代码（Python、Shell、浏览器）。它用自然语言指挥 AI 执行任务，是“AI 操作电脑”的早期代表。Open Interpreter 让非程序员也能用 AI 完成本地任务。",
    features:[
      "AI 本地运行代码",
      "Python、Shell、浏览器",
      "自然语言指挥",
      "支持多种 LLM",
      "开源，易上手",
      "开源（MIT），跨平台，AI 执行"
    ],
    tags:["执行","代码","开源"], lang:"Python", lic:"MIT", repo:"OpenInterpreter/open-interpreter" },

  { name:"CrewAI",      cat:"ai",
    desc:"多 Agent 协作框架，组建 AI 团队。",
    intro:"CrewAI 是一款多 Agent 协作框架，让你组建“AI 团队”（Crew），每个 Agent 有角色、目标、工具，协作完成复杂任务。CrewAI 提供流程编排与记忆，是构建多 Agent 应用的简洁框架。",
    features:[
      "多 Agent 协作",
      "角色与目标定义",
      "流程编排",
      "记忆与工具",
      "简洁 API",
      "开源（MIT），跨平台，多 Agent 框架"
    ],
    tags:["Agent","多智能体","框架"], lang:"Python", lic:"MIT", repo:"crewAIInc/crewAI" },

  { name:"AutoGen",     cat:"ai",
    desc:"微软多 Agent 对话框架。",
    intro:"AutoGen 是微软推出的多 Agent 对话框架，让多个 AI Agent 通过对话协作解决任务。它提供 Agent 编排、人机协作、代码执行，是研究与应用多 Agent 系统的强大框架。AutoGen 被广泛用于构建协作型 AI 应用。",
    features:[
      "多 Agent 对话协作",
      "人机协作",
      "代码执行",
      "Agent 编排",
      "微软出品，研究级",
      "开源（MIT），跨平台，多 Agent"
    ],
    tags:["Agent","多智能体","微软"], lang:"Python", lic:"MIT", repo:"microsoft/autogen" },

  { name:"LangGraph",   cat:"ai",
    desc:"LangChain 的状态图 Agent 框架。",
    intro:"LangGraph 是 LangChain 推出的状态图 Agent 框架，用图结构编排 Agent 的状态与流转，支持循环、条件、持久化。它让复杂的 Agent 工作流可建模、可调试。LangGraph 是构建有状态 Agent 应用的强大框架。",
    features:[
      "状态图编排 Agent",
      "循环、条件、分支",
      "持久化与检查点",
      "人机协作节点",
      "与 LangChain 集成",
      "开源（MIT），跨平台，Agent 框架"
    ],
    tags:["Agent","状态图","框架"], lang:"Python", lic:"MIT", repo:"langchain-ai/langgraph" },

  { name:"faster-whisper", cat:"ai",
    desc:"CTranslate2 加速的 Whisper，4x 快。",
    intro:"faster-whisper 是用 CTranslate2 引擎加速的 Whisper 实现，比原版快 4 倍、省内存。它保持 Whisper 的识别质量，支持 CPU/GPU，是生产级语音转文字的高效选择。faster-whisper 是 Whisper 的高性能替代。",
    features:[
      "CTranslate2 加速，4x 快",
      "省内存",
      "保持 Whisper 质量",
      "CPU/GPU",
      "多语言转写",
      "开源（MIT），跨平台，语音转写"
    ],
    tags:["语音转写","加速","Whisper"], lang:"Python", lic:"MIT", repo:"SYSTRAN/faster-whisper" },

  { name:"LibreOffice Draw", cat:"design",
    desc:"LibreOffice 的开源画图与排版工具。",
    intro:"LibreOffice Draw 是 LibreOffice 套件的画图与排版组件，做流程图、图表、传单、表单。它开源免费，是 Microsoft Visio 的替代。LibreOffice Draw 让非 Windows 用户也能做图表与简单排版。它是开源办公画图的标准。",
    features:[
      "开源画图与排版",
      "流程图、图表、传单",
      "Visio 替代",
      "与 LibreOffice 联动",
      "跨平台，免费",
      "开源（GPL-3.0），跨平台，办公画图"
    ],
    tags:["画图","排版","开源"], lang:"C++", lic:"GPL-3.0", repo:"LibreOffice/core" },

  { name:"drawpile",    cat:"design",
    desc:"开源协作数字绘画，多人同画。",
    intro:"drawpile 是一款开源的协作数字绘画工具，多人可同时在同一画布上绘画，适合远程协作创作。drawpile 支持图层、笔刷、实时同步。它是开源协作绘画的代表，用于团队绘画与教育。",
    features:[
      "多人协作绘画",
      "图层与笔刷",
      "实时同步",
      "开源，免费",
      "跨平台",
      "开源（MIT），跨平台，协作绘画"
    ],
    tags:["绘画","协作","开源"], lang:"Python", lic:"MIT", repo:"drawpile/Drawpile" },

  { name:"MyPaint",     cat:"design",
    desc:"开源数字绘画工具，笔刷表现自然。",
    intro:"MyPaint 是一款开源的数字绘画工具，专注于自然的笔刷表现与绘画体验。MyPaint 提供丰富的笔刷，适合插画与概念艺术。它是开源数字绘画的代表，免费且功能完整。",
    features:[
      "自然笔刷表现",
      "插画与概念艺术",
      "图层管理",
      "开源，免费",
      "跨平台",
      "开源（GPL-3.0），跨平台，数字绘画"
    ],
    tags:["绘画","笔刷","开源"], lang:"Python", lic:"GPL-3.0", repo:"mypaint/mypaint" },

  { name:"Pinta",       cat:"design",
    desc:"开源轻量位图编辑，GIMP 简化版。",
    intro:"Pinta 是一款开源的轻量位图编辑工具，界面简洁，功能比 GIMP 简单，适合快速修图。Pinta 提供基础编辑、滤镜、图层。它是 GIMP 的轻量替代，适合不需要复杂功能的修图场景。",
    features:[
      "轻量位图编辑",
      "基础编辑、滤镜、图层",
      "界面简洁，易上手",
      "开源，免费",
      "跨平台",
      "开源（MIT），跨平台，轻量修图"
    ],
    tags:["修图","轻量","开源"], lang:"C#", lic:"MIT", repo:"PintaProject/Pinta" },

  { name:"Spline",      cat:"design",
    desc:"浏览器 3D 设计工具，无代码建 3D 场景。",
    intro:"Spline 是一款基于浏览器的 3D 设计工具，无代码建 3D 场景、交互、动画。Spline 让设计师与开发者快速做出可交互的 3D 内容，用于网页与产品。它是 3D 设计的无代码新选择。",
    features:[
      "浏览器 3D 设计",
      "无代码建 3D 场景",
      "交互与动画",
      "导出用于网页",
      "实时协作",
      "商业软件（有免费层），跨平台，3D 设计"
    ],
    tags:["3D","无代码","设计"], lang:"TypeScript", lic:"Proprietary", repo:"spline-dev/spline", official:"https://spline.design/" },

  { name:"Lucidchart",  cat:"design",
    desc:"企业级在线流程图与架构图工具。",
    intro:"Lucidchart 是一款企业级的在线流程图与架构图工具，支持协作、模板、导出。Lucidchart 让团队绘制复杂的技术与业务流程图，是企业的常用画图工具。它是流程图领域的成熟商业方案。",
    features:[
      "企业级流程图、架构图",
      "实时协作",
      "模板丰富",
      "导出多种格式",
      "与 Jira 等集成",
      "商业软件，跨平台，企业画图"
    ],
    tags:["流程图","架构","企业"], lang:"JavaScript", lic:"Proprietary", repo:"lucid/lucidchart", official:"https://www.lucidchart.com/" },

  { name:"Creately",    cat:"design",
    desc:"在线协作白板与流程图，团队共创。",
    intro:"Creately 是一款在线协作白板与流程图工具，支持头脑风暴、流程图、思维导图。Creately 让团队实时共创，提供模板与协作。它是轻量团队协作画图的选择。",
    features:[
      "在线协作白板",
      "流程图、思维导图",
      "团队共创",
      "模板丰富",
      "实时协作",
      "商业软件（有免费层），跨平台，协作画图"
    ],
    tags:["白板","流程图","协作"], lang:"JavaScript", lic:"Proprietary", repo:"creately/creately", official:"https://creately.com/" },

  { name:"SmartDraw",   cat:"design",
    desc:"在线图表与流程图工具，模板驱动。",
    intro:"SmartDraw 是一款在线图表与流程图工具，提供大量模板，做流程图、图表、组织图、地图。SmartDraw 让非设计师快速做出专业的图表。它是模板驱动的图表工具，适合办公场景。",
    features:[
      "在线图表与流程图",
      "大量模板",
      "组织图、地图",
      "导出多种格式",
      "易用，适合办公",
      "商业软件，跨平台，模板图表"
    ],
    tags:["图表","流程图","模板"], lang:"JavaScript", lic:"Proprietary", repo:"smartdraw/smartdraw", official:"https://www.smartdraw.com/" },

  { name:"Prezi",       cat:"design",
    desc:"动态演示工具，缩放式非线性演示。",
    intro:"Prezi 是一款动态演示工具，用缩放式画布做非线性演示，支持动画与交互。Prezi 让演示更生动，打破传统幻灯片的线性限制。它是创意演示的代表，适合路演与展示。",
    features:[
      "缩放式非线性演示",
      "动画与交互",
      "动态画布",
      "实时协作",
      "创意演示",
      "商业软件（有免费层），跨平台，演示"
    ],
    tags:["演示","动画","非线性"], lang:"JavaScript", lic:"Proprietary", repo:"prezi/prezi", official:"https://prezi.com/" },

  { name:"Shortcut",    cat:"prod",
    desc:"现代 issue 跟踪，为工程团队设计。",
    intro:"Shortcut 是一款现代的 issue 跟踪工具，为工程团队设计，支持 issue 管理、循环、路线图、集成。Shortcut 是 Jira 与 Linear 之间的选择，功能介于两者。它是工程 issue 跟踪的替代方案。",
    features:[
      "现代 issue 跟踪",
      "循环与路线图",
      "工程团队设计",
      "大量集成",
      "团队协作",
      "商业软件，跨平台，issue 跟踪"
    ],
    tags:["issue","工程","跟踪"], lang:"TypeScript", lic:"Proprietary", repo:"shortcut/shortcut", official:"https://shortcut.com/" },

  { name:"Height",      cat:"prod",
    desc:"工程团队项目管理，issue+文档一体。",
    intro:"Height 是一款为工程团队设计的项目管理工具，集 issue 跟踪、文档、路线图于一体，与代码仓库集成。Height 让工程流程更顺畅，是新兴的工程项目管理工具。",
    features:[
      "工程项目管理",
      "issue + 文档一体",
      "与代码仓库集成",
      "路线图",
      "团队协作",
      "商业软件，跨平台，工程管理"
    ],
    tags:["工程","issue","文档"], lang:"TypeScript", lic:"Proprietary", repo:"height/height", official:"https://height.app/" },

  { name:"Wrike",       cat:"prod",
    desc:"企业级项目管理，自动化强大。",
    intro:"Wrike 是一款企业级项目管理工具，支持任务、项目、自动化、自定义工作流。Wrike 适合中大型团队，自动化能力强。它是企业项目管理的成熟选择。",
    features:[
      "企业级项目管理",
      "自动化与工作流",
      "自定义配置",
      "多视图",
      "团队协作",
      "商业软件，跨平台，企业项目管理"
    ],
    tags:["项目管理","自动化","企业"], lang:"JavaScript", lic:"Proprietary", repo:"wrike/wrike", official:"https://www.wrike.com/" },

  { name:"Motion",      cat:"prod",
    desc:"AI 自动排期的个人生产力工具。",
    intro:"Motion 是一款 AI 驱动的个人生产力工具，自动排期任务与会议，根据优先级动态调整。Motion 让日程管理智能化，减少手动排期。它是 AI 自动排期的代表。",
    features:[
      "AI 自动排期",
      "任务与会议管理",
      "动态调整",
      "优先级驱动",
      "个人生产力",
      "商业软件，跨平台，AI 排期"
    ],
    tags:["排期","AI","生产力"], lang:"Swift", lic:"Proprietary", repo:"motionapp/motion", official:"https://www.motionapp.com/" },

  { name:"Productboard", cat:"prod",
    desc:"产品管理与路线图规划工具。",
    intro:"Productboard 是一款产品管理与路线图规划工具，收集用户反馈、管理需求、制定路线图。Productboard 让产品团队系统化管理需求与优先级。它是产品管理的专业工具。",
    features:[
      "产品管理与路线图",
      "用户反馈收集",
      "需求管理",
      "优先级规划",
      "团队协作",
      "商业软件，跨平台，产品管理"
    ],
    tags:["产品","路线图","需求"], lang:"JavaScript", lic:"Proprietary", repo:"productboard/productboard", official:"https://www.productboard.com/" },

  { name:"Focalboard",   cat:"prod",
    desc:"Mattermost 的开源看板与任务管理。",
    intro:"Focalboard 是 Mattermost 推出的开源看板与任务管理工具，提供看板、表格、日历视图，可自托管。它是 Trello/Notion 的开源替代。Focalboard 适合需要自托管看板的团队。",
    features:[
      "开源看板与任务管理",
      "看板、表格、日历",
      "自托管",
      "轻量",
      "可嵌入",
      "开源（AGPL-3.0），跨平台，自托管看板"
    ],
    tags:["看板","开源","自托管"], lang:"Go", lic:"AGPL-3.0", repo:"mattermost/focalboard" },

  { name:"Taiga",       cat:"prod",
    desc:"开源敏捷项目管理，Scrum+看板。",
    intro:"Taiga 是一款开源的敏捷项目管理工具，支持 Scrum 与看板，做 issue 跟踪、迭代、路线图。Taiga 界面友好，适合中小团队敏捷开发。它是开源敏捷管理的代表。",
    features:[
      "开源敏捷项目管理",
      "Scrum 与看板",
      "迭代与路线图",
      "issue 跟踪",
      "界面友好",
      "开源（MPL-2.0），跨平台，敏捷管理"
    ],
    tags:["敏捷","看板","开源"], lang:"Python", lic:"MPL-2.0", repo:"taigaio/taiga-back" },

  { name:"rsync",       cat:"sys",
    desc:"文件同步与传输工具，增量复制。",
    intro:"rsync 是文件同步与传输工具，只传输差异部分，支持增量复制、压缩、断点续传。rsync 是备份与同步的标准工具，广泛用于镜像与备份。它是文件同步的经典工具。",
    features:[
      "增量文件同步",
      "只传差异部分",
      "压缩与断点续传",
      "镜像与备份",
      "跨平台",
      "开源（GPL-3.0），跨平台，文件同步"
    ],
    tags:["同步","传输","增量"], lang:"C", lic:"GPL-3.0", repo:"WayneD/rsync" },

  { name:"LVM",         cat:"sys",
    desc:"Linux 逻辑卷管理，灵活磁盘管理。",
    intro:"LVM（Logical Volume Manager）是 Linux 的逻辑卷管理工具，在物理磁盘与逻辑卷之间建立抽象层，支持扩展、快照、条带。LVM 让磁盘管理灵活，是 Linux 磁盘管理的标准。",
    features:[
      "逻辑卷管理",
      "磁盘扩展与收缩",
      "快照",
      "条带与镜像",
      "Linux 标准",
      "开源（GPL-2.0），Linux，磁盘管理"
    ],
    tags:["磁盘","卷管理","Linux"], lang:"C", lic:"GPL-2.0", repo:"lvmteam/lvm2" },

  { name:"libbpf",      cat:"sys",
    desc:"eBPF 用户态库，内核可观测性。",
    intro:"libbpf 是 eBPF 的用户态库，帮助在用户空间加载与管理 eBPF 程序，做内核可观测性与网络处理。libbpf 是 eBPF 生态的核心库，简化了 eBPF 开发。它是内核可观测性的基础。",
    features:[
      "eBPF 用户态库",
      "内核可观测性",
      "简化 eBPF 开发",
      "网络与性能分析",
      "与内核集成",
      "开源（LGPL-2.1），Linux，eBPF 生态"
    ],
    tags:["eBPF","内核","可观测"], lang:"C", lic:"LGPL-2.1", repo:"libbpf/libbpf" },

  { name:"procps",      cat:"sys",
    desc:"Linux 进程管理工具集，ps/top/free。",
    intro:"procps 是 Linux 的进程管理工具集，含 ps、top、free、kill 等命令，查看与管理系统进程与内存。procps 是系统监控的基础工具，几乎所有 Linux 都内置。它是进程管理的标准工具集。",
    features:[
      "进程管理工具集",
      "ps、top、free、kill",
      "进程与内存查看",
      "系统监控基础",
      "Linux 内置",
      "开源（GPL-2.0），Linux，进程管理"
    ],
    tags:["进程","监控","工具集"], lang:"C", lic:"GPL-2.0", repo:"procps-ng/procps" },

  { name:"sysstat",     cat:"sys",
    desc:"Linux 系统性能统计工具，sar/iostat。",
    intro:"sysstat 是 Linux 的系统性能统计工具集，含 sar、iostat、mpstat、pidstat，收集 CPU、IO、网络、内存性能数据。sysstat 是系统性能分析与调优的标准工具。它是性能监控的专业工具。",
    features:[
      "系统性能统计",
      "sar、iostat、mpstat",
      "CPU、IO、网络、内存",
      "性能分析与调优",
      "历史数据",
      "开源（LGPL-2.1），Linux，性能统计"
    ],
    tags:["性能","统计","监控"], lang:"C", lic:"LGPL-2.1", repo:"sysstat/sysstat" },

  { name:"dmesg",       cat:"sys",
    desc:"查看内核环形缓冲区日志。",
    intro:"dmesg 是查看 Linux 内核环形缓冲区日志的工具，显示内核启动与运行时的硬件、驱动、错误信息。dmesg 是排查硬件与内核问题的常用工具。它是内核日志查看的标准命令。",
    features:[
      "查看内核环形缓冲区",
      "硬件、驱动、错误信息",
      "排查内核问题",
      "启动日志",
      "Linux 内置",
      "开源（GPL-2.0），Linux，内核日志"
    ],
    tags:["内核","日志","调试"], lang:"C", lic:"GPL-2.0", repo:"util-linux/util-linux" },

  { name:"ltrace",      cat:"sys",
    desc:"跟踪库函数调用，与 strace 互补。",
    intro:"ltrace 是跟踪 Linux 库函数调用（libc 等）的工具，与 strace（跟踪系统调用）互补。ltrace 显示进程调用的库函数与参数，排查应用层问题。它是库调用跟踪的标准工具。",
    features:[
      "跟踪库函数调用",
      "与 strace 互补",
      "显示函数与参数",
      "排查应用层问题",
      "Linux 调试",
      "开源（GPL-2.0），Linux，库调用跟踪"
    ],
    tags:["调试","库调用","跟踪"], lang:"C", lic:"GPL-2.0", repo:"" ,official:"https://ltrace.org/"},

  { name:"lsof",        cat:"sys",
    desc:"列出打开的文件与网络连接。",
    intro:"lsof（List Open Files）是列出打开文件与网络连接的诊断工具，可查端口占用、文件锁、进程资源。lsof 是排查端口冲突与文件锁问题的标准工具。它是系统诊断的常用命令。",
    features:[
      "列出打开文件",
      "查端口占用",
      "文件锁排查",
      "进程资源查看",
      "诊断利器",
      "开源（BSD），Linux，系统诊断"
    ],
    tags:["诊断","端口","文件"], lang:"C", lic:"BSD", repo:"lsof-org/lsof" },

  { name:"inotify-tools", cat:"sys",
    desc:"文件系统事件监控，inotifywait。",
    intro:"inotify-tools 是文件系统事件监控工具，基于 Linux inotify，用 inotifywait 监听文件变化（创建、删除、修改）。它是自动化脚本与实时监控的基础。它是文件事件监控的标准工具。",
    features:[
      "文件系统事件监控",
      "inotifywait 监听",
      "创建、删除、修改事件",
      "自动化与实时监控",
      "Linux 基础",
      "开源（GPL-3.0），Linux，文件监控"
    ],
    tags:["文件监控","事件","自动化"], lang:"C", lic:"GPL-3.0", repo:"inotify-tools/inotify-tools" },

  { name:"btrfs-progs", cat:"sys",
    desc:"Btrfs 文件系统管理工具集。",
    intro:"btrfs-progs 是 Btrfs 文件系统的管理工具集，含 mkfs.btrfs、btrfs 等，创建与管理 Btrfs 文件系统、子卷、快照、压缩。它是 Btrfs 文件系统的标准管理工具。",
    features:[
      "Btrfs 文件系统管理",
      "创建、子卷、快照",
      "压缩与去重",
      "文件系统检查",
      "Btrfs 标准工具",
      "开源（GPL-2.0），Linux，文件系统管理"
    ],
    tags:["文件系统","Btrfs","管理"], lang:"C", lic:"GPL-2.0", repo:"kdave/btrfs-progs" },

  { name:"mtr",         cat:"net",
    desc:"网络路径跟踪，持续监控。",
    intro:"mtr（My TraceRoute）是网络路径跟踪工具，结合 traceroute 与 ping，持续显示每一跳的延迟与丢包，动态监控网络质量。mtr 是排查网络路径与持续监控的标准工具。它是路径监控的专业工具。",
    features:[
      "网络路径跟踪",
      "持续延迟与丢包监控",
      "动态网络质量",
      "排查网络路径",
      "交互式界面",
      "开源（GPL-2.0），跨平台，路径监控"
    ],
    tags:["路径","监控","丢包"], lang:"C", lic:"GPL-2.0", repo:"" ,official:"https://www.bitwizard.nl/mtr/"},

  { name:"socat",       cat:"net",
    desc:"多协议双向数据转发，netcat 增强。",
    intro:"socat 是多协议的“双向数据转发器”，比 netcat 更强，支持文件、socket、PTY、SSL 等多种组合转发。socat 是网络调试与数据转发的瑞士军刀。它是数据转发的增强工具。",
    features:[
      "双向数据转发",
      "多协议组合",
      "文件、socket、SSL",
      "netcat 增强",
      "网络调试",
      "开源（GPL-3.0），跨平台，数据转发"
    ],
    tags:["转发","多协议","调试"], lang:"C", lic:"GPL-3.0", repo:"" ,official:"http://www.dest-unreach.org/socat/"},

  { name:"ethtool",     cat:"net",
    desc:"网卡配置与诊断工具。",
    intro:"ethtool 是 Linux 网卡配置与诊断工具，查看/设置网卡参数（速率、双工、流量控制）、硬件统计、驱动信息。ethtool 是网卡调优与故障排查的标准工具。它是网卡管理的常用命令。",
    features:[
      "网卡配置",
      "速率、双工、流量控制",
      "硬件统计",
      "驱动信息",
      "网卡调优与排查",
      "开源（GPL-2.0），Linux，网卡管理"
    ],
    tags:["网卡","诊断","Linux"], lang:"C", lic:"GPL-2.0", repo:"ethtool/ethtool" },

  { name:"fping",       cat:"net",
    desc:"快速并行 ping，多主机检测。",
    intro:"fping 是快速并行 ping 工具，同时 ping 多台主机，检测可达性，比 ping 快得多。fping 是批量主机存活检测的标准工具，适合监控与扫描。它是并行 ping 的专业工具。",
    features:[
      "快速并行 ping",
      "多主机检测",
      "可达性检测",
      "批量扫描",
      "比 ping 快",
      "开源（GPL-2.0），Linux，并行 ping"
    ],
    tags:["ping","并行","检测"], lang:"C", lic:"GPL-2.0", repo:"schweikert/fping" },

  { name:"ZeroTier",    cat:"net",
    desc:"虚拟局域网，跨设备组网。",
    intro:"ZeroTier 是虚拟局域网（Virtual LAN）方案，通过软件把任意设备组成一个 LAN，跨网络组网，支持设备间直连。ZeroTier 是远程协作与组网的标准选择。它是虚拟 LAN 的代表。",
    features:[
      "虚拟局域网",
      "跨设备组网",
      "设备间直连",
      "远程协作",
      "跨网络",
      "开源（GPL-2.0），跨平台，虚拟 LAN"
    ],
    tags:["组网","虚拟LAN","协作"], lang:"C++", lic:"GPL-2.0", repo:"zerotier/ZeroTierOne" },

  { name:"Headscale",   cat:"net",
    desc:"WireGuard 控制平面，自建 VPN 后端。",
    intro:"Headscale 是 WireGuard 的控制平面（control plane），提供自建 VPN 后端，管理设备、网络、身份，无需官方 Cloud。Headscale 是自托管 WireGuard 的标准方案。它是自建 VPN 的后端。",
    features:[
      "WireGuard 控制平面",
      "自建 VPN 后端",
      "管理设备与网络",
      "身份管理",
      "自托管",
      "开源（MIT），跨平台，自建 VPN"
    ],
    tags:["VPN","WireGuard","自托管"], lang:"Go", lic:"MIT", repo:"juanfont/headscale" },

  { name:"net-tools",   cat:"net",
    desc:"传统网络工具集，ifconfig/netstat。",
    intro:"net-tools 是传统的 Linux 网络工具集，含 ifconfig、route、netstat、arp 等命令，查看与配置网络。net-tools 是早期网络管理的标准，部分功能被 iproute2 取代。它是传统网络工具的集合。",
    features:[
      "传统网络工具集",
      "ifconfig、route、netstat",
      "arp 工具",
      "网络查看与配置",
      "部分被 iproute2 取代",
      "开源（GPL-2.0），Linux，网络工具"
    ],
    tags:["网络","工具集","传统"], lang:"C", lic:"GPL-2.0", repo:"" ,official:"https://sourceforge.net/projects/net-tools/"},

  { name:"LMMS",        cat:"media",
    desc:"开源音乐制作工作站（DAW）。",
    intro:"LMMS 是开源音乐制作工作站（Digital Audio Workstation），做电子音乐制作、MIDI 编辑、合成、采样。LMMS 是免费音乐制作的标准选择，适合入门。它是开源 DAW 的代表。",
    features:[
      "开源音乐工作站",
      "电子音乐制作",
      "MIDI 编辑",
      "合成与采样",
      "免费入门",
      "开源（GPL-3.0），跨平台，音乐制作"
    ],
    tags:["音乐","DAW","开源"], lang:"C++", lic:"GPL-3.0", repo:"LMMS/lmms" },

  { name:"MuseScore",   cat:"media",
    desc:"开源乐谱编辑与播放软件。",
    intro:"MuseScore 是开源乐谱编辑软件，做五线谱创作、记谱、播放、排版，支持 MIDI 导入导出。MuseScore 是乐谱制作的标准工具，音乐教学与创作常用。它是乐谱编辑的专业工具。",
    features:[
      "开源乐谱编辑",
      "五线谱创作",
      "记谱与播放",
      "排版",
      "MIDI 导入导出",
      "开源（GPL-3.0），跨平台，乐谱编辑"
    ],
    tags:["乐谱","记谱","开源"], lang:"C++", lic:"GPL-3.0", repo:"MuseScore/MuseScore" },

  { name:"TuxGuitar",   cat:"media",
    desc:"吉他六线谱编辑软件，开源。",
    intro:"TuxGuitar 是开源吉他六线谱（TAB）编辑软件，做吉他谱创作、录音、播放、教学。TuxGuitar 是吉他谱制作的常用工具，免费跨平台。它是吉他谱编辑的专业工具。",
    features:[
      "吉他六线谱编辑",
      "吉他谱创作",
      "录音与播放",
      "吉他教学",
      "免费跨平台",
      "开源（GPL-2.0），跨平台，吉他谱"
    ],
    tags:["吉他","六线谱","编辑"], lang:"Java", lic:"GPL-2.0", repo:"" ,official:"https://tuxguitar.com/"},

  { name:"REAPER",      cat:"media",
    desc:"专业数字音频工作站，高效灵活。",
    intro:"REAPER 是专业数字音频工作站（DAW），录音、混音、母带、MIDI，很轻量高效、高度可扩展。REAPER 是专业录音与制作的标杆，价格亲民。它是专业 DAW 的高效选择。",
    features:[
      "专业音频工作站",
      "录音、混音、母带",
      "MIDI 编辑",
      "极致轻量高效",
      "高度可扩展",
      "商用（价格亲民），跨平台，专业 DAW"
    ],
    tags:["音频","DAW","专业"], lang:"C++", lic:"Proprietary", repo:"cockos/reaper", official:"https://www.reaper.fm/" },

  { name:"GarageBand",  cat:"media",
    desc:"Apple 入门音乐制作软件。",
    intro:"GarageBand 是 Apple 的入门音乐制作软件，内置乐器、鼓机、虚拟乐器，录制与混音，适合初学者与移动创作。GarageBand 是 Apple 生态音乐入门的标准。它是入门音乐制作工具。",
    features:[
      "入门音乐制作",
      "内置乐器与鼓机",
      "录制与混音",
      "移动创作",
      "Apple 生态",
      "商用（Apple），iOS/macOS，入门音乐"
    ],
    tags:["音乐","入门","Apple"], lang:"Objective-C", lic:"Proprietary", repo:"apple/GarageBand", official:"https://www.apple.com/mac/garageband/" },

  { name:"Logic Pro",   cat:"media",
    desc:"Apple 专业音乐制作工作站。",
    intro:"Logic Pro 是 Apple 的专业音乐制作工作站（DAW），录音、混音、母带、虚拟乐器库丰富，专业创作标杆。Logic Pro 是 macOS/iOS 专业音乐制作的标准。它是专业 DAW 的 Apple 代表。",
    features:[
      "专业音乐工作站",
      "录音、混音、母带",
      "丰富虚拟乐器库",
      "专业创作",
      "Apple 生态",
      "商用（Apple），macOS/iOS，专业 DAW"
    ],
    tags:["音乐","DAW","专业"], lang:"Swift", lic:"Proprietary", repo:"apple/Logic-Pro", official:"https://www.apple.com/logic-pro/" },

  { name:"Piper",       cat:"media",
    desc:"轻量本地 TTS 引擎，多语言。",
    intro:"Piper 是轻量本地文本转语音（TTS）引擎，基于神经网络，多语言、低延迟、可离线，适合边缘设备与隐私场景。Piper 是本地 TTS 的轻量选择。它是本地语音合成的代表。",
    features:[
      "轻量本地 TTS",
      "神经网络语音",
      "多语言、低延迟",
      "离线可用",
      "边缘设备",
      "开源（MIT），跨平台，本地 TTS"
    ],
    tags:["TTS","语音","本地"], lang:"C++", lic:"MIT", repo:"rhasspy/piper" },

  { name:"Matterbridge",cat:"media",
    desc:"多平台聊天桥，连接不同 IM。",
    intro:"Matterbridge 是多平台聊天桥接工具，把不同即时通讯平台（Discord、Slack、Telegram、IRC 等）桥接互通，消息互发。Matterbridge 是跨平台消息互通的标准选择。它是聊天桥接的代表。",
    features:[
      "多平台聊天桥",
      "连接不同 IM",
      "消息互通",
      "Discord/Slack/Telegram",
      "跨平台",
      "开源（MIT），跨平台，聊天桥"
    ],
    tags:["聊天","桥接","多平台"], lang:"Go", lic:"MIT", repo:"42wim/matterbridge" },

  { name:"Podman",      cat:"host",
    desc:"无守护进程的容器引擎，兼容 Docker。",
    intro:"Podman 是无守护进程的容器引擎，兼容 Docker CLI，支持 rootless 运行、Pod、镜像构建。Podman 是 Docker 的开源替代，安全与权限控制更强。它是无守护进程容器的代表。",
    features:[
      "无守护进程容器",
      "兼容 Docker CLI",
      "rootless 运行",
      "Pod 支持",
      "镜像构建",
      "开源（Apache-2.0），Linux，容器"
    ],
    tags:["容器","无守护","rootless"], lang:"Go", lic:"Apache-2.0", repo:"containers/podman" },

  { name:"LXD",         cat:"host",
    desc:"系统容器与虚拟机管理器，Canonical。",
    intro:"LXD 是系统容器与虚拟机管理器，用 LXC 技术，支持快照、网络、存储、集群，秒级启动。LXD 是系统级容器化的标准选择，由 Canonical 维护。它是系统容器管理的代表。",
    features:[
      "系统容器管理",
      "虚拟机管理",
      "快照",
      "网络与存储",
      "集群支持",
      "开源（LGPL-3.0），Linux，系统容器"
    ],
    tags:["容器","虚拟化","集群"], lang:"Go", lic:"LGPL-3.0", repo:"canonical/lxd" },

  { name:"Incus",       cat:"host",
    desc:"LXD 社区分支，去中心化治理。",
    intro:"Incus 是 LXD 的社区分支，由去中心化社区治理，专注长期维护，支持系统容器、虚拟机、快照、集群。Incus 是 LXD 的社区延续，功能一致。它是社区驱动的系统容器管理。",
    features:[
      "LXD 社区分支",
      "系统容器",
      "虚拟机",
      "快照",
      "集群支持",
      "开源（Apache-2.0），Linux，系统容器"
    ],
    tags:["容器","社区","去中心化"], lang:"Go", lic:"Apache-2.0", repo:"lxc/incus" },

  { name:"Proxmox",     cat:"host",
    desc:"企业级开源虚拟化平台，KVM+LXC。",
    intro:"Proxmox 是企业级开源虚拟化平台，集成 KVM 虚拟机与 LXC 容器，Web 管理界面、备份、高可用、集群。Proxmox 是自托管虚拟化的标准选择。它是开源虚拟化的代表。",
    features:[
      "企业级虚拟化",
      "KVM 虚拟机",
      "LXC 容器",
      "备份与高可用",
      "集群管理",
      "开源（AGPL-3.0），Linux，虚拟化平台"
    ],
    tags:["虚拟化","KVM","集群"], lang:"Perl", lic:"AGPL-3.0", repo:"proxmox/pve-manager" },

  { name:"Cockpit",     cat:"host",
    desc:"Linux 服务器 Web 管理界面。",
    intro:"Cockpit 是 Linux 服务器的 Web 管理界面，做系统监控、日志、存储、网络、用户管理，轻量、安全。Cockpit 是 Linux 服务器管理的标准选择，Red Hat 主导。它是 Web 服务器管理的代表。",
    features:[
      "服务器 Web 管理",
      "系统监控",
      "日志与存储",
      "网络与用户",
      "轻量安全",
      "开源（LGPL-2.1），Linux，服务器管理"
    ],
    tags:["服务器","Web管理","监控"], lang:"TypeScript", lic:"LGPL-2.1", repo:"cockpit-project/cockpit" },

  { name:"Webmin",      cat:"host",
    desc:"经典 Web 管理面板，老牌。",
    intro:"Webmin 是经典的 Linux/Unix Web 管理面板，用 Perl 编写，管理用户、文件系统、网络、服务、数据库，功能全面。Webmin 是老牌 Web 管理面板，历史悠久。它是经典 Web 管理面板的代表。",
    features:[
      "经典 Web 管理面板",
      "用户与文件管理",
      "网络与服务",
      "数据库管理",
      "功能全面",
      "开源（GPL-2.0），Linux，Web 面板"
    ],
    tags:["Web管理","面板","经典"], lang:"Perl", lic:"GPL-2.0", repo:"webmin/webmin" },
  { name:"AppFlowy", cat:"prod",
    desc:"本地优先的开源 Notion 替代，支持文档、数据库与实时协作",
    intro:"AppFlowy 是一款用 Rust 编写的开源 Notion 替代品，主打本地优先——所有内容默认存在你自己的设备上，离线也能完整使用。它把文档、数据库与看板视图整合在同一工作区，适合既想要 Notion 式灵活排版、又在意数据主权的用户。",
    features:[
      "本地优先，数据默认存在本地，离线可用",
      "文档与关系型数据库视图（表格/看板/日历）无缝切换",
      "实时多人协作与细粒度权限",
      "支持导出为 Markdown、CSV，不锁定数据",
      "Rust 编写，桌面端启动快、内存占用低"
    ],
    tags:["效率","自托管","协作"], lang:"Rust", lic:"AGPL-3.0", repo:"AppFlowy-IO/AppFlowy" },

  { name:"AFFiNE", cat:"prod",
    desc:"开源 Notion 替代，文档与无限白板一体",
    intro:"AFFiNE 把文档和无限白板融合成一个工作空间，是 Notion + Miro 的开源合体。同一块内容可以在页面与画布之间自由切换，适合需要边写边画、做产品设计和知识整理的人。",
    features:[
      "文档与无限白板双模式，一键切换",
      "块级编辑，内容可自由拖拽组合",
      "本地优先，支持离线与多端同步",
      "内置 AI 辅助写作与脑图生成",
      "MIT 协议，可自托管与二次开发"
    ],
    tags:["效率","自托管","协作"], lang:"TypeScript", lic:"MIT", repo:"toeverything/AFFiNE" },

  { name:"SiYuan", cat:"prod",
    desc:"思源笔记，本地优先的双链块级知识库",
    intro:"思源笔记是一款本地优先的双链块级知识库，每个段落、标题都是可引用、可移动的独立块。它把双向链接、块引用和大纲笔记结合起来，是中文社区里很受欢迎的个人知识管理工具。",
    features:[
      "块级引用，任意内容块可被复用与双向链接",
      "完全本地存储，支持自托管同步",
      "内置关系图与全局搜索",
      "支持 Markdown 导入导出与自定义主题",
      "活跃的中文社区，插件生态丰富"
    ],
    tags:["效率","自托管","协作"], lang:"Go", lic:"AGPL-3.0", repo:"siyuan-note/siyuan" },

  { name:"Anytype", cat:"prod",
    desc:"本地优先、端到端加密的知识管理与协作空间",
    intro:"Anytype 是一款端到端加密的本地优先知识管理工具，用「对象—关系—视图」的方式组织信息。它把隐私放在第一位，数据先加密存在本地，再按需同步，适合对保密要求高的团队与个人。",
    features:[
      "端到端加密，数据先本地加密再同步",
      "对象化建模，灵活定义类型与关系",
      "多种视图（网格/看板/日历/图）切换",
      "完全离线可用，开源可审计",
      "支持团队协作空间与共享"
    ],
    tags:["效率","自托管","协作"], lang:"Go", lic:"GPL-3.0", repo:"anyproto/anytype-heart" },

  { name:"Standard Notes", cat:"prod",
    desc:"端到端加密、隐私优先的笔记应用",
    intro:"Standard Notes 是一款把隐私做到极致的笔记应用，所有笔记默认端到端加密，连服务商也无法读取内容。它坚持简洁与长久可用，格式开放、导出自由，适合记日记和敏感信息。",
    features:[
      "端到端加密，服务商也无法读取笔记内容",
      "纯文本与 Markdown，数据永远可导出",
      "跨平台同步，支持自托管同步服务器",
      "扩展体系丰富（编辑器、主题、工具）",
      "长期主义设计，重视数据可迁移性"
    ],
    tags:["效率","自托管","协作"], lang:"TypeScript", lic:"GPL-3.0", repo:"standardnotes/app" },

  { name:"Notesnook", cat:"prod",
    desc:"端到端加密的跨平台笔记应用",
    intro:"Notesnook 是一款端到端加密的跨平台笔记应用，目标是做「真正保护隐私的 Evernote」。它把加密、同步和清爽的编辑体验结合起来，免费版就提供端到端加密，这点在同类中少见。",
    features:[
      "端到端加密，零知识架构",
      "免费版即支持加密与多设备同步",
      "富文本编辑器 + Markdown 支持",
      "笔记本、标签、置顶与回收站完整",
      "可自托管，开源可审计"
    ],
    tags:["效率","自托管","协作"], lang:"TypeScript", lic:"GPL-3.0", repo:"streetwriters/notesnook" },

  { name:"Vikunja", cat:"prod",
    desc:"开源 Todoist 替代，任务与项目管理",
    intro:"Vikunja 是一款可自托管的开源 Todoist 替代品，把任务、项目、看板和团队协作用一套系统管理。它兼顾个人待办与小团队协作，界面清爽、自托管简单。",
    features:[
      "任务清单、看板与甘特图多种视图",
      "团队项目、成员权限与协作",
      "支持子任务、重复任务、提醒与标签",
      "提供托管版与自托管，数据自己掌握",
      "有 Web、移动端与命令行客户端"
    ],
    tags:["效率","自托管","协作"], lang:"Go", lic:"AGPL-3.0", repo:"go-vikunja/vikunja" },

  { name:"Timewarrior", cat:"prod",
    desc:"命令行时间追踪工具",
    intro:"Timewarrior 是命令行时间追踪工具，和 Taskwarrior 同门。它不依赖图形界面，用简洁的命令记录你在每件事上花了多久，适合喜欢键盘流、想把时间追踪融入脚本的开发者。",
    features:[
      "纯命令行，启动即用、无图形依赖",
      "自动记录与手动补录时间区间",
      "强大的报表与标签过滤查询",
      "与 Taskwarrior 无缝联动",
      "数据以纯文本存储，便于备份与分析"
    ],
    tags:["效率","自托管","协作"], lang:"Cpp", lic:"MIT", repo:"GothenburgBitFactory/timewarrior" },

  { name:"Kimai", cat:"prod",
    desc:"开源时间追踪与项目记账",
    intro:"Kimai 是一款开源的时间追踪与项目记账系统，最早为自由职业者和小团队设计。它能记录工时、生成报表、按客户与项目统计，也常用于企业内部的时间核算。",
    features:[
      "计时器记录工时，支持手动补录",
      "按客户、项目、活动多维统计",
      "生成可导出的报表与发票数据",
      "多用户与权限管理",
      "可自托管，有丰富的 API"
    ],
    tags:["效率","自托管","协作"], lang:"PHP", lic:"MIT", repo:"kimai/kimai" },

  { name:"Grocy", cat:"prod",
    desc:"自托管家庭库存与杂货管理",
    intro:"Grocy 是一款自托管的家庭库存与杂货管理工具，帮你记录冰箱、储物柜里有什么、什么时候过期。它把购物清单、菜谱和库存打通，减少食物浪费，是智能家居场景里的实用派。",
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
    intro:"Homarr 是一款自托管服务仪表盘，把 NAS、Docker、媒体服务器等自建服务的入口集中到一个页面。它用可拖拽的磁贴展示服务状态与实时监控，是家庭实验室（Homelab）爱好者的常用首页。",
    features:[
      "可拖拽磁贴自定义仪表盘布局",
      "集成 Docker 容器状态与一键启停",
      "显示服务健康状态与监控小组件",
      "支持多用户与主题定制",
      "自托管，数据不出内网"
    ],
    tags:["效率","自托管","协作"], lang:"TypeScript", lic:"MIT", repo:"homarr-labs/homarr" },

  { name:"Kutt", cat:"prod",
    desc:"自托管短链接服务",
    intro:"Kutt 是一款简洁的自托管短链接服务，把长网址压缩成短链并提供点击统计。它界面干净、部署轻量，适合想摆脱第三方短链、自己掌握链接数据的个人与团队。",
    features:[
      "生成短链接并自定义别名",
      "点击次数与来源统计",
      "支持密码保护与链接过期时间",
      "可自托管，数据完全私有",
      "有 API，便于集成到工作流"
    ],
    tags:["效率","自托管","协作"], lang:"JavaScript", lic:"MIT", repo:"thedevs-network/kutt" },

  { name:"HedgeDoc", cat:"prod",
    desc:"自托管协作 Markdown 笔记",
    intro:"HedgeDoc（原 HackMD）是一款自托管的协作 Markdown 笔记工具，多人可以同时编辑同一篇文档并实时看到彼此的光标。它常用于会议纪要、技术文档和实时协作写作。",
    features:[
      "多人实时协作编辑，光标同步",
      "支持 Markdown、图表与幻灯片模式",
      "文档可公开分享或密码保护",
      "版本历史与导出（HTML/Markdown/PDF）",
      "可自托管，数据自主可控"
    ],
    tags:["效率","自托管","协作"], lang:"TypeScript", lic:"AGPL-3.0", repo:"hedgedoc/hedgedoc" },

  { name:"Outline", cat:"prod",
    desc:"自托管团队协作知识库",
    intro:"Outline 是一款面向团队的开源知识库，界面现代、搜索强大，是 Confluence 的轻量替代。它支持 Markdown 编辑、文档层级与团队权限，和 Slack 等工具集成良好。",
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
    intro:"Docmost 是一款新兴的开源协作文档与知识库，定位是 Notion / Confluence 的开源替代。它提供富文本编辑、实时协作与空间权限，界面接近主流商业产品。",
    features:[
      "富文本块编辑器，支持嵌套页面",
      "多人实时协作与评论",
      "团队空间与细粒度权限",
      "全文搜索与目录导航",
      "可自托管，MIT 相关协议友好"
    ],
    tags:["效率","自托管","协作"], lang:"TypeScript", lic:"AGPL-3.0", repo:"docmost/docmost" },

  { name:"Appwrite", cat:"prod",
    desc:"开源后端即服务平台",
    intro:"Appwrite 是一款开源后端即服务平台，把认证、数据库、存储、函数和实时订阅打包成一套服务。它提供 SDK 和可视化控制台，让前端开发者不用从零搭后端。",
    features:[
      "用户认证与 OAuth 集成",
      "数据库、文件存储与云函数",
      "实时数据订阅",
      "多语言 SDK 与可视化控制台",
      "可自托管，Docker 一键部署"
    ],
    tags:["效率","自托管","协作"], lang:"TypeScript", lic:"BSD-3-Clause", repo:"appwrite/appwrite" },

  { name:"Pocketbase", cat:"prod",
    desc:"单文件开源后端，内置 SQLite 数据库",
    intro:"PocketBase 是一款单文件开源后端，一个二进制文件就自带 SQLite 数据库、用户认证、文件存储和实时订阅。它极致轻量，适合原型开发、小型应用和边缘部署。",
    features:[
      "单文件部署，零外部依赖",
      "内置 SQLite、认证与管理后台",
      "实时数据订阅与文件存储",
      "极小的资源占用，启动秒开",
      "Go 编写，跨平台、易嵌入"
    ],
    tags:["效率","自托管","协作"], lang:"Go", lic:"MIT", repo:"pocketbase/pocketbase" },

  { name:"Supabase", cat:"prod",
    desc:"开源 Firebase 替代，Postgres 后端",
    intro:"Supabase 是开源的 Firebase 替代品，以 PostgreSQL 为核心，提供数据库、认证、存储和边缘函数。它开放、可自托管， Larry 数据集与自动生成 API 让开发非常顺手。",
    features:[
      "PostgreSQL 数据库与自动 REST/GraphQL API",
      "用户认证与行级安全策略",
      "对象存储与边缘函数",
      "实时数据订阅",
      "可自托管，避免厂商锁定"
    ],
    tags:["效率","自托管","协作"], lang:"TypeScript", lic:"Apache-2.0", repo:"supabase/supabase" },

  { name:"Mailcow", cat:"prod",
    desc:"自托管邮件服务器套件",
    intro:"Mailcow 是一套完整的自托管邮件服务器方案，用 Docker 把 Postfix、Dovecot、反垃圾邮件和 Web 管理界面整合在一起。它把原本繁琐的邮件服务器搭建变成了相对简单的部署。",
    features:[
      "完整的邮件收发与虚拟域名管理",
      "内置 SpamAssassin / ClamAV 反垃圾与杀毒",
      "Web 管理界面与多域名支持",
      "DKIM/SPF/DMARC 等现代邮件认证",
      "Docker  Compose 一键部署"
    ],
    tags:["效率","自托管","协作"], lang:"Shell", lic:"GPL-3.0", repo:"mailcow/mailcow-dockerized" },

  { name:"Mautic", cat:"prod",
    desc:"开源营销自动化平台",
    intro:"Mautic 是一款开源营销自动化平台，提供邮件营销、用户行为跟踪、表单与落地页。它是 HubSpot 的开源替代，适合想自己掌控客户数据的中小企业。",
    features:[
      "邮件营销与自动化流程编排",
      "用户行为跟踪与线索评分",
      "表单、落地页与活动管理",
      "多渠道营销（邮件/短信/社交）",
      "自托管，数据完全私有"
    ],
    tags:["效率","自托管","协作"], lang:"PHP", lic:"GPL-3.0", repo:"mautic/mautic" },

  { name:"SuiteCRM", cat:"prod",
    desc:"开源 CRM 客户关系管理",
    intro:"SuiteCRM 是 SugarCRM 社区版的开源分支，是功能完整的企业级 CRM。它覆盖销售自动化、客户服务和营销，适合需要深度定制又不愿付商业授权的组织。",
    features:[
      "线索、机会、客户与合同管理",
      "销售流程与报表分析",
      "邮件集成与市场营销模块",
      "高度可定制的模块与工作流",
      "PHP 开源，可自托管"
    ],
    tags:["效率","自托管","协作"], lang:"PHP", lic:"AGPL-3.0", repo:"SuiteCRM/SuiteCRM" },

  { name:"ERPNext", cat:"prod",
    desc:"开源企业资源计划系统",
    intro:"ERPNext 是一套开源的企业资源计划系统，覆盖财务、库存、制造、人力资源和销售。它基于 Frappe 框架，功能覆盖 ERP 的方方面面，是中小企业上 ERP 的高性价比选择。",
    features:[
      "财务、进销存、制造、HR 全模块",
      "可自定义的表单、工作流与报表",
      "内置 CRM 与项目管理",
      "多语言、多币种支持",
      "自托管，Python/JS 开源栈"
    ],
    tags:["效率","自托管","协作"], lang:"Python", lic:"GPL-3.0", repo:"frappe/erpnext" },

  { name:"Celluloid", cat:"media",
    desc:"基于 mpv 的简洁视频播放器",
    intro:"Celluloid 是一款基于 mpv 的简洁视频播放器，为 GNOME 桌面提供原生体验。它把 mpv 强大的播放能力和易用的图形界面结合，默认简洁、不打扰。",
    features:[
      "基于 mpv，格式支持广泛",
      "GNOME 原生风格的简洁界面",
      "支持播放列表、字幕与快捷键",
      "可调节画质与音频输出",
      "轻量，资源占用低"
    ],
    tags:["媒体","播放","开源"], lang:"C", lic:"GPL-2.0", repo:"celluloid-player/celluloid" },

  { name:"SMPlayer", cat:"media",
    desc:"功能全面的跨平台视频播放器",
    intro:"SMPlayer 是一款功能全面的跨平台媒体播放器，基于 mpv/MPlayer。它内置 YouTube 支持、记住播放进度，并提供丰富的字幕与滤镜设置，是老牌的全能播放器。",
    features:[
      "支持几乎所有常见音视频格式",
      "内置在线视频（YouTube）播放",
      "记住每个文件的播放位置",
      "丰富的字幕、音轨与滤镜设置",
      "跨平台（Windows/Linux）"
    ],
    tags:["媒体","播放","开源"], lang:"CPP", lic:"GPL-2.0", repo:"smplayer-dev/smplayer" },

  { name:"Helm", cat:"media",
    desc:"开源合成器与音频工作站",
    intro:"Helm 是一款开源的软件合成器与音频工作站，提供多振荡器、滤波器和效果器。它界面直观、声音表现力强，是电子音乐制作里广受欢迎的开源合成器。",
    features:[
      "多振荡器与减法合成引擎",
      "内置效果器与调制矩阵",
      "丰富的预设音色库",
      "支持 MIDI 与自动化",
      "跨平台开源，社区预设丰富"
    ],
    tags:["媒体","播放","开源"], lang:"CPP", lic:"BSD-3-Clause", repo:"mtytel/helm" },

  { name:"Surge", cat:"media",
    desc:"开源软件合成器",
    intro:"Surge 是一款功能强大的开源软件合成器，以丰富的合成引擎和高质量效果著称。它被许多音乐人用于电子乐制作，声音质感常被拿来与商业合成器媲美。",
    features:[
      "多种振荡器与合成引擎",
      "高质量的合唱、混响等效果器",
      "海量预制音色与调制路由",
      "支持 MIDI 与 DAW 集成",
      "开源且持续更新"
    ],
    tags:["媒体","播放","开源"], lang:"CPP", lic:"GPL-3.0", repo:"surge-synthesizer/surge" },

  { name:"Mixxx", cat:"media",
    desc:"开源 DJ 混音软件",
    intro:"Mixxx 是一款开源 DJ 混音软件，提供双 Deck、混音台、效果器和曲目库管理。它是 Serato/Traktor 的开源替代，适合想零成本入门数字 DJ 的用户。",
    features:[
      "双 Deck 混音与节拍同步（BPM）",
      "内置效果器、滤波器与采样器",
      "支持 MIDI 控制器与唱盘",
      "曲库管理与智能推荐",
      "跨平台开源，社区活跃"
    ],
    tags:["媒体","播放","开源"], lang:"CPP", lic:"GPL-2.0", repo:"mixxxdj/mixxx" },

  { name:"Nomacs", cat:"media",
    desc:"轻量快速的图像查看器",
    intro:"Nomacs 是一款轻量快速的开源图像查看器，启动快、支持格式多。它提供缩放、旋转、批量重命名和简单的图像调整，是 Windows/Linux 上实用的看图工具。",
    features:[
      "启动快，支持大量图片格式",
      "缩放、旋转与幻灯片播放",
      "批量重命名与格式转换",
      "基本图像调整（亮度/色彩）",
      "跨平台开源"
    ],
    tags:["媒体","播放","开源"], lang:"CPP", lic:"GPL-2.0", repo:"nomacs/nomacs" },

  { name:"KeePassXC", cat:"net",
    desc:"开源跨平台密码管理器",
    intro:"KeePassXC 是一款开源跨平台密码管理器，是 KeePass 的现代社区分支。它完全离线工作，把密码加密保存在本地数据库里，只有你用主密码或密钥才能解锁，不依赖任何云服务。",
    features:[
      "完全离线，密码库加密存于本地",
      "跨平台（Windows/macOS/Linux）与浏览器扩展",
      "强密码生成器与自动填充",
      "支持 TOTP 双因素验证码",
      "可导入导出 KeePass 格式，兼容性强"
    ],
    tags:["网络","安全","自托管"], lang:"CPP", lic:"GPL-2.0", repo:"keepassxreboot/keepassxc" },

  { name:"KeePass", cat:"net",
    desc:"经典开源密码管理器",
    intro:"KeePass 是经典开源密码管理器的鼻祖，用 AES/Twofish 加密把密码存在本地数据库。它体积小巧、插件丰富，是很多密码管理工具的数据格式基础（KeePassXC 等都与它兼容）。",
    features:[
      "开源且久经考验的 AES/Twofish 加密",
      "完全离线的本地密码数据库",
      "树状分组与自定义字段",
      "大量插件与多平台客户端",
      "KDBX 格式成为行业通用交换格式"
    ],
    tags:["网络","安全","自托管"], lang:"CPP", lic:"GPL-2.0", repo:"keepassx/keepassx" },

  { name:"Vaultwarden", cat:"net",
    desc:"轻量 Bitwarden 兼容服务端",
    intro:"Vaultwarden 是用 Rust 写的 Bitwarden 兼容服务端，资源占用极低，一个小程序就能搭起自己的密码同步服务。它适合想在自有服务器上托管密码库、又不想跑臃肿官方服务的用户。",
    features:[
      "兼容 Bitwarden 官方客户端与浏览器扩展",
      "单个二进制文件，内存占用很小",
      "支持多用户、组织与附件",
      "可接 SMTP 邮件与反向代理",
      "数据完全自托管，SQLite 存储"
    ],
    tags:["网络","安全","自托管"], lang:"Rust", lic:"AGPL-3.0", repo:"dani-garcia/vaultwarden" },

  { name:"Gophish", cat:"net",
    desc:"开源钓鱼演练框架",
    intro:"Gophish 是一款开源的网络钓鱼演练框架，让企业安全地模拟钓鱼攻击、评估员工的安全意识。它提供邮件模板、落地页和详细的点击数据，是安全培训里的常用工具。",
    features:[
      "批量发送模拟钓鱼邮件",
      "可定制的钓鱼页面与邮件模板",
      "实时跟踪打开、点击与提交数据",
      "活动报表与员工安全意识评估",
      "开源可自托管，需合规授权使用"
    ],
    tags:["网络","安全","自托管"], lang:"Go", lic:"MIT", repo:"gophish/gophish" },

  { name:"Metasploit", cat:"net",
    desc:"开源渗透测试框架",
    intro:"Metasploit 是最知名的开源渗透测试框架，汇集了大量漏洞利用模块和攻击载荷。它是安全从业者做漏洞验证、红队演练的标配工具，也是学习攻击技术的活教材。",
    features:[
      "庞大的漏洞利用与载荷模块库",
      "统一的渗透测试工作流与控制台",
      "支持漏洞扫描与后期利用",
      "可编写自定义模块与脚本",
      "社区持续更新，文档丰富"
    ],
    tags:["网络","安全","自托管"], lang:"Ruby", lic:"BSD-3-Clause", repo:"rapid7/metasploit-framework" },

  { name:"OWASP ZAP", cat:"net",
    desc:"开源 Web 应用安全扫描器",
    intro:"OWASP ZAP 是一款开源的 Web 应用安全扫描器，能自动发现 SQL 注入、XSS 等常见漏洞。它是 OWASP 基金会的旗舰项目，免费且功能强大，适合开发者和安全人员做日常安全测试。",
    features:[
      "自动扫描与主动/被动漏洞检测",
      "拦截代理，可手工改写请求",
      "支持 AJAX 单页应用扫描",
      "丰富的插件与 API",
      "开源免费，社区活跃"
    ],
    tags:["网络","安全","自托管"], lang:"Java", lic:"Apache-2.0", repo:"zaproxy/zaproxy" },

  { name:"Nikto", cat:"net",
    desc:"Web 服务器漏洞扫描器",
    intro:"Nikto 是一款经典的 Web 服务器漏洞扫描器，会检查危险文件、过时组件、错误配置等上千种问题。它以 Perl 编写、命令行运行，是快速做 Web 服务器体检的老牌工具。",
    features:[
      "扫描数千种已知危险文件与漏洞",
      "检测过时服务器组件与配置问题",
      "支持 SSL、代理与认证扫描",
      "可定制扫描策略与插件",
      "命令行轻量，适合自动化"
    ],
    tags:["网络","安全","自托管"], lang:"Perl", lic:"GPL-2.0", repo:"sullo/nikto" },

  { name:"OpenVAS", cat:"net",
    desc:"开源漏洞评估系统",
    intro:"OpenVAS（Greenbone 漏洞管理）是一套开源漏洞评估系统，用大量漏洞测试（VT）扫描网络并给出风险报告。它是 Nessus 的开源替代，适合做定期的合规与漏洞管理。",
    features:[
      "数万条漏洞测试规则（VT）",
      "网络资产发现与漏洞扫描",
      "按 CVSS 给出风险分级报告",
      "支持定时扫描与持续监控",
      "可自托管的完整漏洞管理方案"
    ],
    tags:["网络","安全","自托管"], lang:"C", lic:"GPL-2.0", repo:"greenbone/gvmd" },

  { name:"Suricata", cat:"net",
    desc:"高性能网络 IDS/IPS",
    intro:"Suricata 是一款高性能的网络 IDS/IPS 与网络安全监控引擎，能并行处理流量、检测入侵并支持 multithreading。它兼容 Snort 规则，也支持 Suricata 自身的规则语言。",
    features:[
      "多线程高性能流量检测",
      "入侵检测（IDS）与入侵防御（IPS）",
      "支持 HTTP/TLS/DNS 等协议解析",
      "兼容 Snort 规则集",
      "输出结构化日志，便于 SIEM 分析"
    ],
    tags:["网络","安全","自托管"], lang:"C", lic:"GPL-2.0", repo:"OISF/suricata" },

  { name:"Snort", cat:"net",
    desc:"经典网络入侵检测系统",
    intro:"Snort 是老牌开源网络入侵检测/防御系统，用规则匹配流量中的恶意特征。它是 IDS 领域的奠基者之一，规则生态庞大，至今仍被广泛部署在各类网络环境中。",
    features:[
      "基于规则的流量特征检测",
      "支持入侵检测与内联防御模式",
      "庞大的社区与企业规则集",
      "协议分析与内容匹配",
      "轻量、稳定，适合各类网络"
    ],
    tags:["网络","安全","自托管"], lang:"CPP", lic:"GPL-2.0", repo:"snort3/snort3" },

  { name:"AdGuard Home", cat:"net",
    desc:"自托管 DNS 广告过滤",
    intro:"AdGuard Home 是一款自托管的 DNS 广告与追踪过滤器，把全网设备的广告拦截集中到路由器层面。它用 DNS 过滤拦广告，无需在每台设备安装插件，还能查看详细的查询统计。",
    features:[
      "网络级 DNS 广告与追踪拦截",
      "自定义过滤规则与黑白名单",
      "加密 DNS（DoH/DoT）支持",
      "详细的查询日志与统计面板",
      "单文件部署，支持 Docker"
    ],
    tags:["网络","安全","自托管"], lang:"Go", lic:"GPL-3.0", repo:"AdguardTeam/AdGuardHome" },

  { name:"Pi-hole", cat:"net",
    desc:"自托管 DNS 广告拦截",
    intro:"Pi-hole 是最流行的自托管 DNS 广告拦截器，通常跑在树莓派等小设备上，为整个局域网过滤广告域名。它把广告拦截从单机提升到网络层，是家庭网络的经典玩法。",
    features:[
      "网络级广告域名过滤",
      "轻量，可跑在树莓派等小设备",
      "可视化管理界面与统计",
      "支持条件转发与自定义黑名单",
      "活跃的社区与丰富的文档"
    ],
    tags:["网络","安全","自托管"], lang:"Shell", lic:"EUPL-1.2", repo:"pi-hole/pi-hole" },

  { name:"blocky", cat:"net",
    desc:"自托管 DNS 代理与广告过滤",
    intro:"blocky 是一款用 Go 写的自托管 DNS 代理，主打广告与恶意域名过滤，同时支持 DoH/DoT 加密。它配置灵活、性能好，适合想要一个轻量又现代的 DNS 过滤网关的用户。",
    features:[
      "广告与恶意域名过滤",
      "DNS-over-HTTPS / DNS-over-TLS",
      "基于域名列表与正则的灵活规则",
      "内置查询缓存与统计",
      "单二进制文件，配置简单"
    ],
    tags:["网络","安全","自托管"], lang:"Go", lic:"GPL-3.0", repo:"0xERR0R/blocky" },

  { name:"mitmproxy", cat:"net",
    desc:"交互式 HTTP 调试代理",
    intro:"mitmproxy 是一款交互式的 HTTP/HTTPS 调试代理，能在中间拦截、查看和改写流量。它是开发者调试 API、分析移动端请求的利器，也有命令行和 Web 界面多种用法。",
    features:[
      "拦截并实时查看/改写 HTTP(S) 流量",
      "支持 Python 脚本自定义处理",
      "命令行（mitmproxy）、Web（mitmweb）多界面",
      "可生成 CA 证书解密 HTTPS",
      "常用于调试、测试与安全分析"
    ],
    tags:["网络","安全","自托管"], lang:"Python", lic:"MIT", repo:"mitmproxy/mitmproxy" },

  { name:"OpenWrt", cat:"net",
    desc:"开源路由器操作系统",
    intro:"OpenWrt 是面向路由器的开源 Linux 发行版，把普通路由器变成可自由定制的网络设备。它支持海量软件包，是玩转家庭网络、VPN、旁路由的发烧友首选固件。",
    features:[
      "可安装的模块化软件包体系",
      "支持 VPN、DNS、QoS 等丰富网络功能",
      "Web 管理界面 LuCI 与命令行",
      "支持大量路由器型号",
      "社区活跃，文档与插件生态庞大"
    ],
    tags:["网络","安全","自托管"], lang:"Shell", lic:"GPL-2.0", repo:"openwrt/openwrt" },

  { name:"Ranger", cat:"sys",
    desc:"终端文件管理器",
    intro:"Ranger 是一款基于 curses 的终端文件管理器，用 Vim 风格的按键在文件树里穿梭。它支持预览、批量操作和自定义命令，是命令行重度用户管理文件的经典选择。",
    features:[
      "Vim 风格快捷键，键盘高效操作",
      "多栏布局与文件预览",
      "支持批量重命名、复制、移动",
      "可自定义命令与颜色主题",
      "Python 编写，插件扩展方便"
    ],
    tags:["系统","终端","CLI"], lang:"Python", lic:"GPL-3.0", repo:"ranger/ranger" },

  { name:"Lf", cat:"sys",
    desc:"快速终端文件管理器",
    intro:"Lf（listfiles）是一款用 Go 写的终端文件管理器，设计上追求极简与高速。它只做文件浏览与基本操作，把更多功能交给外部命令，启动快、占用低。",
    features:[
      "Go 编写，启动极快、资源占用低",
      "类似 Ranger 的操作方式但更克制",
      "高度可配置，逻辑交给 shell 命令",
      "支持选择、复制、移动等核心操作",
      "跨平台，单文件部署"
    ],
    tags:["系统","终端","CLI"], lang:"Go", lic:"MIT", repo:"gokcehan/lf" },

  { name:"Gdu", cat:"sys",
    desc:"快速磁盘使用分析工具",
    intro:"Gdu 是一款用 Go 写的快速磁盘使用分析工具，是 ncdu 的现代替代品。它并行扫描磁盘，界面交互流畅，能迅速找出占空间最大的目录和文件。",
    features:[
      "并行扫描，速度远快于传统工具",
      "交互式查看目录占用",
      "支持按大小排序与筛选",
      "可删除文件并实时更新",
      "终端 TUI，跨平台单文件"
    ],
    tags:["系统","终端","CLI"], lang:"Go", lic:"MIT", repo:"dundee/gdu" },

  { name:"Bottom", cat:"sys",
    desc:"跨平台图形化系统监控",
    intro:"Bottom（btm）是一款用 Rust 编写的跨平台系统监控工具，用图表实时展示 CPU、内存、磁盘和网络。它是 htop 的现代替代品，界面美观且支持鼠标操作。",
    features:[
      "Rust 编写，流畅且资源占用低",
      "Graphical 图表展示 CPU/内存/磁盘/网络",
      "支持进程查看、排序与管理",
      "可自定义主题与布局",
      "跨平台（Windows/macOS/Linux）"
    ],
    tags:["系统","终端","CLI"], lang:"Rust", lic:"MIT", repo:"ClementTsang/bottom" },

  { name:"vnStat", cat:"sys",
    desc:"网络流量统计工具",
    intro:"vnStat 是一款基于内核网络统计的流量监控工具，按小时、天、月记录带宽使用。它常驻后台、开销极小，不需要抓包，是统计服务器月度流量的经典选择。",
    features:[
      "按小时/日/月统计网络流量",
      "读取内核计数器，几乎零开销",
      "守护进程长期运行，数据持久化",
      "命令行与 Web 前端可选",
      "支持多网卡与数据导出"
    ],
    tags:["系统","终端","CLI"], lang:"C", lic:"GPL-2.0", repo:"vergoh/vnstat" },

  { name:"LibreSpeed", cat:"sys",
    desc:"自托管开源网速测试",
    intro:"LibreSpeed 是一套开源的网速测试方案，可自建测速服务器，避免依赖 Speedtest 等商业服务。它提供 Web 客户端和命令行工具，测速结果由你自己的服务器产生。",
    features:[
      "可自托管的测速服务器",
      "浏览器与命令行双客户端",
      "测试下载、上传、延迟与抖动",
      "轻量、Docker 部署简单",
      "无追踪、结果数据私有"
    ],
    tags:["系统","终端","CLI"], lang:"Go", lic:"LGPL-3.0", repo:"librespeed/speedtest" },

  { name:"Neofetch", cat:"sys",
    desc:"系统信息展示工具",
    intro:"Neofetch 是一款用 Shell 写的系统信息展示工具，会在终端里打印系统徽标和硬件、系统摘要。它常被用来做漂亮的终端截图和「我的设备」展示，是开源社区的流行小工具。",
    features:[
      "显示系统、CPU、内存、分辨率等信息",
      "几十种发行版/系统 ASCII 徽标",
      "高度可定制的显示字段与配色",
      "Shell 脚本，单文件即可运行",
      "常用于终端美化与截图分享"
    ],
    tags:["系统","终端","CLI"], lang:"Shell", lic:"MIT", repo:"dylanaraps/neofetch" },

  { name:"Fastfetch", cat:"sys",
    desc:"neofetch 的 C 语言重写",
    intro:"Fastfetch 是 Neofetch 的 C 语言重写版，目标同样是展示系统信息，但速度快得多、可配置项更丰富。它保留了熟悉的展示风格，同时更适合追求性能的开发者。",
    features:[
      "C 编写，显示速度远快于 Neofetch",
      "模块化配置，按需显示信息",
      "支持图片、徽标与丰富主题",
      "跨平台（Linux/macOS/Windows 等）",
      "活跃的社区与持续更新"
    ],
    tags:["系统","终端","CLI"], lang:"C", lic:"MIT", repo:"fastfetch-cli/fastfetch" },

  { name:"Gotop", cat:"sys",
    desc:"终端图形化系统监控",
    intro:"Gotop 是一款用 Go 写的终端图形化系统监控工具，用漂亮的图表实时显示 CPU、内存、磁盘和网络。它界面现代、安装简单，是 htop 之外的一个好看选择。",
    features:[
      "终端图形化仪表盘",
      "实时显示 CPU、内存、磁盘、网络",
      "支持主题与自定义配色",
      "Go 单文件，安装部署简单",
      "跨平台支持"
    ],
    tags:["系统","终端","CLI"], lang:"Go", lic:"GPL-3.0", repo:"cjbassi/gotop" },

  { name:"Atop", cat:"sys",
    desc:"高级系统性能监控",
    intro:"Atop 是一款功能强大的系统性能监控工具，比传统 top 记录更全面的进程与资源历史数据。它按间隔记录快照，方便事后回放分析性能问题，常用于服务器排查。",
    features:[
      "记录 CPU、内存、磁盘、网络的历史快照",
      "支持事后回放与区间分析",
      "详细的进程级资源统计",
      "可写日志文件长期留存",
      "命令行，适合服务器运维"
    ],
    tags:["系统","终端","CLI"], lang:"C", lic:"GPL-2.0", repo:"Atoptool/atop" },

  { name:"VidCutter", cat:"media",
    desc:"开源视频剪辑与分割工具",
    intro:"VidCutter 是一款开源的视频剪辑工具，主打快速、无损地剪切视频片段。它基于 FFmpeg，界面直观，适合做简单的视频截取和合并而不想重新编码的场景。",
    features:[
      "基于 FFmpeg 的快速无损剪切",
      "直观的时间轴与帧预览",
      "支持视频合并与片段拼接",
      "可提取音频与调整参数",
      "跨平台开源"
    ],
    tags:["媒体","播放","开源"], lang:"CPP", lic:"GPL-3.0", repo:"ozmartian/vidcutter" },

  { name:"LosslessCut", cat:"media",
    desc:"无损视频剪辑工具",
    intro:"LosslessCut 是一款无损视频剪辑工具，能在不重新编码的情况下快速裁剪视频片段。它适合从大视频里截取精彩片段、去除广告，速度快且画质无损。",
    features:[
      "无损剪切，不重新编码、画质不变",
      "拖拽式时间轴，操作直观",
      "支持视频、音频的裁剪与合并",
      "可导出片段、缩略图与字幕",
      "基于 Electron，跨平台"
    ],
    tags:["媒体","播放","开源"], lang:"TypeScript", lic:"GPL-3.0", repo:"mifi/lossless-cut" },

  { name:"Pitivi", cat:"media",
    desc:"GNOME 视频编辑器",
    intro:"Pitivi 是一款 GNOME 桌面下的开源视频编辑器，面向非线性剪辑。它提供多轨时间线、剪辑和效果，界面简洁，是 Linux 上易上手的视频剪辑选择。",
    features:[
      "多轨时间线非线性编辑",
      "剪辑、转场与视频效果",
      "支持代理剪辑提升流畅度",
      "与 GNOME 生态集成",
      "开源，社区驱动开发"
    ],
    tags:["媒体","播放","开源"], lang:"Python", lic:"GPL-2.0", repo:"GNOME/pitivi" },

  { name:"WaveSurfer", cat:"media",
    desc:"音频波形可视化库",
    intro:"WaveSurfer 是一个用于绘制和交互音频波形的 JavaScript 库，不是面向终端用户的 App，而是开发者在网页里做音频可视化和编辑的常用组件。",
    features:[
      "在浏览器中绘制音频波形",
      "支持播放、缩放与区域选择",
      "可标记区域与自定义交互",
      "基于 Web Audio API",
      "轻量，易于集成到 Web 应用"
    ],
    tags:["媒体","播放","开源"], lang:"JavaScript", lic:"BSD-3-Clause", repo:"katspaugh/wavesurfer.js" },

  { name:"Pure Data", cat:"media",
    desc:"可视化音频编程环境",
    intro:"Pure Data（Pd）是一款开源的可视化编程语言，专为音频、多媒体和交互艺术设计。它通过连线图形化地搭建声音合成与处理逻辑，是新媒体艺术和声音实验的经典工具。",
    features:[
      "图形化数据流编程，无需写代码",
      "实时音频合成与处理",
      "可扩展的外部库（externals）",
      "支持与 Arduino、传感器交互",
      "开源跨平台，社区资源丰富"
    ],
    tags:["媒体","播放","开源"], lang:"C", lic:"BSD-3-Clause", repo:"pure-data/pure-data" },

  { name:"Clementine", cat:"media",
    desc:"跨平台音乐播放器",
    intro:"Clementine 是一款跨平台音乐播放器，是 Amarok 1.4 的现代分支。它支持本地音乐库管理、网络电台和云存储，功能丰富，是很多用户从 Windows 迁移来的播放器选择。",
    features:[
      "本地音乐库整理与播放",
      "支持网络电台与播客",
      "集成 Dropbox/Google Drive 等云存储",
      "歌词、封面与_EQ_ 均衡器",
      "跨平台（Windows/macOS/Linux）"
    ],
    tags:["媒体","播放","开源"], lang:"CPP", lic:"GPL-2.0", repo:"clementine-player/Clementine" },

  { name:"Quod Libet", cat:"media",
    desc:"音乐管理与播放工具",
    intro:"Quod Libet 是一款用 Python 编写的开源音乐播放器，以强大的标签管理和灵活的查询能力著称。它支持用表达式组织音乐库，适合对音乐元数据有精细控制需求的用户。",
    features:[
      "强大的标签编辑与音乐库管理",
      "基于表达式的灵活查询与播放列表",
      "支持歌词、封面与 ReplayGain",
      "可扩展的插件体系",
      "跨平台开源"
    ],
    tags:["媒体","播放","开源"], lang:"Python", lic:"GPL-2.0", repo:"quodlibet/quodlibet" },

  { name:"EasyTAG", cat:"media",
    desc:"音频标签编辑器",
    intro:"EasyTAG 是一款专门用于编辑音频文件标签的工具，支持 MP3、FLAC、OGG 等多种格式。它能批量修改标题、艺术家、专辑等元数据，并自动按标签整理文件名。",
    features:[
      "编辑多种音频格式的 ID3/Vorbis 标签",
      "批量修改与自动填充元数据",
      "根据标签自动重命名文件",
      "支持从文件名解析标签",
      "开源，跨平台"
    ],
    tags:["媒体","播放","开源"], lang:"C", lic:"GPL-2.0", repo:"GNOME/easytag" },

  { name:"Picard", cat:"media",
    desc:"音乐标签与元数据管理工具",
    intro:"Picard 是 MusicBrainz 官方的音频标签工具，用数据库里的权威元数据为音乐文件打标签。它擅长识别专辑信息、封面和发行组，是整理大型音乐库的利器。",
    features:[
      "从 MusicBrainz 获取权威元数据",
      "自动匹配专辑、曲目与封面",
      "批量打标签与重命名文件",
      "支持 CD 识别与扫描",
      "开源跨平台，数据来自社区数据库"
    ],
    tags:["媒体","播放","开源"], lang:"Python", lic:"GPL-2.0", repo:"metabrainz/picard" },

  { name:"Loupe", cat:"sys",
    desc:"GNOME 图像查看器",
    intro:"Loupe 是 GNOME 桌面环境下的现代图像查看器，用 Rust 编写，界面简洁、启动快。它支持常见图片格式和基本的缩放、旋转，是 GNOME 用户的默认看图选择。",
    features:[
      "GNOME 原生风格的简洁界面",
      "Rust 编写，启动快、流畅",
      "支持缩放、旋转与幻灯片",
      "适配触屏与高 DPI",
      "与 GNOME 文件管理器深度集成"
    ],
    tags:["系统","终端","CLI"], lang:"Rust", lic:"GPL-3.0", repo:"GNOME/loupe" },

  { name:"Eog", cat:"sys",
    desc:"GNOME 图像查看器",
    intro:"Eog（Eye of GNOME）是 GNOME 桌面的经典图像查看器，C 编写、轻量稳定。它提供看图所需的基本功能，是很多 Linux 发行版多年的默认图片浏览器。",
    features:[
      "GNOME 桌面原生图片查看",
      "缩放、旋转、全屏与幻灯片",
      "支持 EXIF 信息与插件扩展",
      "轻量稳定，资源占用低",
      "与 GNOME 生态集成良好"
    ],
    tags:["系统","终端","CLI"], lang:"C", lic:"GPL-2.0", repo:"GNOME/eog" },

  { name:"GThumb", cat:"sys",
    desc:"图像查看与管理器",
    intro:"GThumb 是一款 GNOME 下的图像查看与管理工具，除了看图还能整理相册、批量重命名和简单编辑。它比纯查看器功能更全，适合需要轻度管理照片的用户。",
    features:[
      "图像查看与相册管理",
      "批量重命名、缩放与格式转换",
      "基本编辑（裁剪/颜色调整）",
      "支持导入相机与网络相册",
      "GNOME 桌面集成"
    ],
    tags:["系统","终端","CLI"], lang:"C", lic:"GPL-2.0", repo:"GNOME/gthumb" },

  { name:"Shotwell", cat:"sys",
    desc:"照片管理与导入工具",
    intro:"Shotwell 是 GNOME 桌面的照片管理工具，用于导入、整理和分享数码照片。它支持按日期/标签组织、人脸识别和基本的编辑，是 Linux 上主流的个人相册方案。",
    features:[
      "照片导入、整理与相册管理",
      "日期、标签与人脸识别分组",
      "基本的裁剪、旋转与颜色调整",
      "可发布到 Flickr 等平台",
      "GNOME 原生，界面简洁"
    ],
    tags:["系统","终端","CLI"], lang:"Vala", lic:"LGPL-2.1", repo:"GNOME/shotwell" },

  { name:"Darktable", cat:"sys",
    desc:"开源 RAW 照片处理",
    intro:"Darktable 是一款开源 RAW 照片处理与工作流软件，是 Lightroom 的开源替代。它用非破坏性编辑处理 RAW 文件，提供暗房、光影和地图等模块，适合摄影后期。",
    features:[
      "非破坏性 RAW 照片处理",
      "丰富的暗房模块与预设",
      "按标签、地理信息组织照片",
      "支持批量导出与色彩管理",
      "跨平台开源，社区活跃"
    ],
    tags:["系统","终端","CLI"], lang:"C", lic:"GPL-3.0", repo:"darktable-org/darktable" },

  { name:"RawTherapee", cat:"sys",
    desc:"RAW 照片处理软件",
    intro:"RawTherapee 是一款功能强大的开源 RAW 图像处理器，以出色的降噪、锐化和色彩处理能力著称。它提供丰富的调整工具和预览，是注重画质的摄影爱好者的常用选择。",
    features:[
      "高质量 RAW 解码与处理",
      "强大的降噪、锐化与色调工具",
      "非破坏性编辑与批处理",
      "支持的相机型号广泛",
      "跨平台开源"
    ],
    tags:["系统","终端","CLI"], lang:"CPP", lic:"GPL-3.0", repo:"RawTherapee/RawTherapee" },

  { name:"Digikam", cat:"sys",
    desc:"数字照片管理工具",
    intro:"Digikam 是一款功能全面的开源数字照片管理软件，集照片整理、编辑和导出于一身。它支持人脸检测、地理标记和批量处理，被 KDE 社区和摄影爱好者广泛使用。",
    features:[
      "照片整理、标签与相册管理",
      "人脸识别与地理标记",
      "内置丰富的编辑与特效工具",
      "批量重命名、导出与备份",
      "跨平台，KDE 生态集成"
    ],
    tags:["系统","终端","CLI"], lang:"CPP", lic:"GPL-2.0", repo:"KDE/digikam" },

  { name:"KPhotoAlbum", cat:"sys",
    desc:" KDE 照片管理",
    intro:"KPhotoAlbum 是一款 KDE 社区的照片管理工具，以强大的标注和搜索能力见长。它强调给照片打标签、分组和快速检索，适合管理大规模照片库。",
    features:[
      "基于标签与分类的灵活标注",
      "强大的搜索与筛选",
      "按时间线、地点浏览照片",
      "支持幻灯片与基本编辑",
      "开源，KDE 桌面集成"
    ],
    tags:["系统","终端","CLI"], lang:"CPP", lic:"GPL-2.0", repo:"KDE/kphotoalbum" },

  { name:"Photoprism", cat:"sys",
    desc:"自托管 AI 照片管理",
    intro:"PhotoPrism 是一款自托管的 AI 照片管理应用，用人工智能自动识别照片内容、人物和地点。它把 Google Photos 式的智能体验带到自己的服务器上，注重隐私。",
    features:[
      "AI 自动识别人物、地点与内容",
      "按时间、地图、标签多维浏览",
      "支持 RAW 与视频，自动生成缩略图",
      "多用户与分享链接",
      "自托管，Docker 部署，数据私有"
    ],
    tags:["系统","终端","CLI"], lang:"Go", lic:"AGPL-3.0", repo:"photoprism/photoprism" },

  { name:"Immich", cat:"sys",
    desc:"自托管照片与视频备份",
    intro:"Immich 是一款高性能的自托管照片与视频备份方案，定位是 Google Photos 的开源替代。它有漂亮的 Web 界面和移动端 App，支持自动备份、智能分类和人脸识别。",
    features:[
      "移动端自动备份照片与视频",
      "时间线、相册与地图浏览",
      "AI 人脸识别与智能搜索",
      "支持 RAW、Live Photo 等多种格式",
      "自托管，性能优秀，社区活跃"
    ],
    tags:["系统","终端","CLI"], lang:"TypeScript", lic:"AGPL-3.0", repo:"immich-app/immich" },

  { name:"Zulip", cat:"prod",
    desc:"开源团队聊天与协作",
    intro:"Zulip 是一款独特的团队聊天工具，用「主题（topic）」把对话组织成线程，解决了 Slack 式消息流容易混乱的问题。它既支持异步阅读，也能实时聊天，深受开源社区喜爱。",
    features:[
      "按主题组织的流式对话，消息不丢失上下文",
      "支持实时与异步沟通",
      "强大的搜索与消息回顾",
      "与 GitHub、GitLab 等工具集成",
      "开源且可自托管"
    ],
    tags:["效率","自托管","协作"], lang:"Python", lic:"Apache-2.0", repo:"zulip/zulip" },

  { name:"Mattermost", cat:"prod",
    desc:"开源 Slack 替代团队消息",
    intro:"Mattermost 是一款开源的团队消息平台，定位是可自托管的 Slack 替代。它强调安全与合规，提供细粒度权限和审计能力，常被对数据驻留有要求的组织采用。",
    features:[
      "频道、私信与线程对话",
      "文件共享与搜索",
      "企业级权限、审计与合规",
      "丰富的集成与插件生态",
      "Go 编写，可自托管与私有化部署"
    ],
    tags:["效率","自托管","协作"], lang:"Go", lic:"Apache-2.0", repo:"mattermost/mattermost" },

  { name:"Rocket.Chat", cat:"prod",
    desc:"开源 Slack 替代团队聊天",
    intro:"Rocket.Chat 是一款功能全面的开源团队聊天平台，支持频道、视频会议、客服和多工作区。它是 Slack 的开源替代之一，社区活跃、集成丰富。",
    features:[
      "频道、私信、线程与视频通话",
      " omnichannel 客户客服台",
      "多工作区与联邦通信",
      "大量集成与机器人",
      "可自托管，数据私有"
    ],
    tags:["效率","自托管","协作"], lang:"JavaScript", lic:"MIT", repo:"RocketChat/Rocket.Chat" },

  { name:"Element", cat:"prod",
    desc:"Matrix 协议聊天客户端",
    intro:"Element 是 Matrix 协议的旗舰客户端，一个去中心化、端到端加密的聊天工具。它不隶属于任何单一服务器，你可以自选服务器甚至自建，消息加密且可跨服务器互通。",
    features:[
      "端到端加密（Matrix 的 Olm/Megolm）",
      "去中心化，可跨服务器通信",
      "群组、语音/视频通话与文件共享",
      "可自托管 homeserver",
      "开源且社区驱动"
    ],
    tags:["效率","自托管","协作"], lang:"TypeScript", lic:"Apache-2.0", repo:"element-hq/element-web" },

  { name:"Nextcloud Talk", cat:"prod",
    desc:"Nextcloud 视频会议",
    intro:"Nextcloud Talk 是 Nextcloud 生态里的音视频通话与聊天组件，把会议能力集成进你自己的云盘。它自托管、注重隐私，适合想在自有平台上开会而无需依赖第三方服务的团队。",
    features:[
      "音视频会议与屏幕共享",
      "与 Nextcloud 文件、日历深度集成",
      "端到端加密通话（实验性）",
      "可自托管，数据不出内网",
      "有移动端与浏览器客户端"
    ],
    tags:["效率","自托管","协作"], lang:"JavaScript", lic:"AGPL-3.0", repo:"nextcloud/spreed" },

  { name:"Jitsi Meet", cat:"prod",
    desc:"开源视频会议",
    intro:"Jitsi Meet 是一套开源的视频会议系统，无需注册即可开会，也支持完整自托管。它基于 WebRTC，浏览器直接入会，是 Zoom 的开源替代里部署最友好的之一。",
    features:[
      "浏览器直接入会，无需安装客户端",
      "多人视频、屏幕共享与聊天",
      "支持自托管，数据自主",
      "端到端加密（实验性）与主持人控制",
      "可与日历、Slack 等集成"
    ],
    tags:["效率","自托管","协作"], lang:"JavaScript", lic:"Apache-2.0", repo:"jitsi/jitsi-meet" },

  { name:"BigBlueButton", cat:"prod",
    desc:"开源在线教学平台",
    intro:"BigBlueButton 是专为在线教育设计的开源虚拟教室，支持白板、分组讨论、投票和录制。它被众多学校与培训机构采用，是 Zoom 教育版之外的开源选择。",
    features:[
      "互动白板与多屏共享",
      "分组讨论室与举手/投票",
      "会议录制与回放",
      "与 Moodle 等 LMS 集成",
      "可自托管，支持大规模并发"
    ],
    tags:["效率","自托管","协作"], lang:"Java", lic:"LGPL-3.0", repo:"bigbluebutton/bigbluebutton" },

  { name:"Moodle", cat:"prod",
    desc:"开源学习管理系统",
    intro:"Moodle 是全球使用最广泛的开源学习管理系统（LMS），为在线课程提供作业、测验、讨论区和评分。它插件生态庞大，被高校、企业培训广泛采用。",
    features:[
      "课程、作业、测验与评分管理",
      "讨论区、Wiki 与协作活动",
      "海量插件与主题扩展",
      "符合 SCORM 等教育标准",
      "自托管，支持大规模用户"
    ],
    tags:["效率","自托管","协作"], lang:"PHP", lic:"GPL-3.0", repo:"moodle/moodle" },

  { name:"ClamAV", cat:"net",
    desc:"开源杀毒引擎",
    intro:"ClamAV 是一款开源杀毒引擎，主要用于扫描文件、邮件附件中的病毒与恶意软件。它常部署在邮件网关和文件服务器上，是开源世界里反恶意软件的基础设施。",
    features:[
      "多引擎病毒特征扫描",
      "支持邮件网关与文件服务器集成",
      "命令行扫描与守护进程模式",
      "病毒库持续更新",
      "开源且被大量下游产品采用"
    ],
    tags:["网络","安全","自托管"], lang:"C", lic:"GPL-2.0", repo:"Cisco-Talos/clamav" },

  { name:"Yara", cat:"net",
    desc:"恶意软件识别工具",
    intro:"YARA 是一款恶意软件识别与分类工具，用基于文本的规则描述恶意文件的特征。它被称为「恶意软件领域的正则表达式」，是安全分析师做样本分析和威胁情报的必备工具。",
    features:[
      "用简洁规则描述恶意文件特征",
      "基于字符串、字节序列与条件匹配",
      "跨平台，命令行与库两种用法",
      "广泛用于样本分类与威胁 hunting",
      "被众多安全产品与分析流程集成"
    ],
    tags:["网络","安全","自托管"], lang:"C", lic:"BSD-3-Clause", repo:"VirusTotal/yara" },

  { name:"TheHarvester", cat:"net",
    desc:"邮件与域名信息收集",
    intro:"theHarvester 是一款开源的信息收集工具，从搜索引擎和公开数据源收集邮箱、子域名、主机和员工信息。它是渗透测试前期侦察（OSINT）的常用工具。",
    features:[
      "从多数据源收集邮箱与子域名",
      "支持数十种搜索引擎与 API",
      "可枚举主机名与开放端口",
      "结果导出为多种格式",
      "命令行轻量，适合侦察阶段"
    ],
    tags:["网络","安全","自托管"], lang:"Python", lic:"GPL-2.0", repo:"laramies/theHarvester" },

  { name:"BeEF", cat:"net",
    desc:"浏览器攻击框架",
    intro:"BeEF（Browser Exploitation Framework）是一款浏览器攻击框架，通过挂接目标浏览器来演示基于 Web 的攻击链。它用于安全研究与红队演练，能直观展示浏览器端的安全风险。",
    features:[
      "浏览器挂钩（hook）与命令控制",
      "丰富的浏览器攻击模块",
      "演示 XSS 等漏洞的实际危害",
      "实时目标管理与会话控制",
      "安全研究与授权演练专用"
    ],
    tags:["网络","安全","自托管"], lang:"Ruby", lic:"GPL-2.0", repo:"beefproject/beef" },

  { name:"Kismet", cat:"net",
    desc:"无线网络检测与入侵检测",
    intro:"Kismet 是一款无线网络探测器、嗅探器和入侵检测系统，能被动发现并分析 Wi-Fi 网络与设备。它支持多网卡、GPS 定位，是无线安全审计和无线频谱分析的常用工具。",
    features:[
      "被动扫描与发现 Wi-Fi 网络/设备",
      "802.11 协议深度解析",
      "支持多网卡与 GPS 定位绘制",
      "无线入侵检测与异常告警",
      "可导出 PCAP 等数据供分析"
    ],
    tags:["网络","安全","自托管"], lang:"CPP", lic:"GPL-2.0", repo:"kismetwireless/kismet" },

  { name:"Aircrack-ng", cat:"net",
    desc:"WiFi 安全审计工具",
    intro:"Aircrack-ng 是一套完整的 WiFi 安全审计工具集，涵盖抓包、注入、破解 WEP/WPA 密钥等环节。它用于评估无线网络的安全性，是无线安全领域的经典套件。",
    features:[
      "无线抓包与数据包注入",
      "WEP/WPA 密钥破解",
      "支持多款无线网卡与 monitor 模式",
      "包含 airmon-ng、aireplay-ng 等工具",
      "命令行，适合安全审计与教学"
    ],
    tags:["网络","安全","自托管"], lang:"C", lic:"GPL-2.0", repo:"aircrack-ng/aircrack-ng" },

  { name:"Hashcat", cat:"net",
    desc:"高级密码恢复工具",
    intro:"Hashcat 号称世界上最快的密码恢复工具，支持数百种哈希算法和多种攻击模式。它充分利用 GPU 算力，是密码审计与哈希恢复领域的标杆工具。",
    features:[
      "GPU 加速，恢复速度极快",
      "支持 300+ 种哈希类型",
      "字典、规则、掩码、暴力等多种攻击模式",
      "可分布式部署",
      "开源，社区规则与字典资源丰富"
    ],
    tags:["网络","安全","自托管"], lang:"C", lic:"MIT", repo:"hashcat/hashcat" },

  { name:"John the Ripper", cat:"net",
    desc:"经典密码破解工具",
    intro:"John the Ripper（JtR）是一款经典的离线密码破解工具，支持多种哈希格式和平台。它以「 jumbo 版」社区分支最为流行，是密码强度审计的常青树。",
    features:[
      "支持大量哈希与密码格式",
      "字典、规则与暴力破解模式",
      "自动识别哈希类型",
      "支持 CPU/GPU 与分布式",
      "jumbo 社区版功能丰富"
    ],
    tags:["网络","安全","自托管"], lang:"C", lic:"GPL-2.0", repo:"openwall/john" },

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
};
