
/* ============================================================
   下载目录 —— 合并自「开源下载」独立页
   命名空间 dl- / REPOS_DL / *DL，不污染主目录变量
   ============================================================ */
/* 下载资产数据已拆到 /assets/repos.js?v=c9cbb0e6f5（独立缓存，减小 HTML 体积） */
const BUILT_DL="2026-11-17";
const DL_GH =r=>"https://github.com/"+r+"/releases/latest";
const DL_GHM=r=>"https://gh-proxy.com/https://github.com/"+r+"/releases/latest";
window.__dlLive=window.__dlLive||{};

// 下载数据助手：OS 识别 + 按平台挑选最佳安装包，暴露给精选 / 小众卡片渲染
window.__detectOS=function(){
  var ua=navigator.userAgent||'',p=navigator.platform||'';
  if(/Android/i.test(ua))return 'android';
  if(/iPhone|iPad|iPod/i.test(ua))return 'ios';
  if(/Win/i.test(p)||/Windows/i.test(ua))return 'win';
  if(/Mac/i.test(p)||/Mac OS X/i.test(ua))return 'mac';
  if(/Linux/i.test(p)||/Linux/i.test(ua))return 'linux';
  return 'win';
};
window.__OS_LABEL={win:'Windows',mac:'macOS',linux:'Linux',android:'Android',ios:'iOS'};
window.__bestAssetDL=function(a,os){
  if(!a||!a.length)return null;
  os=os||window.__detectOS();
  var hint={win:/win|windows|msi|msix|exe/i,mac:/mac|darwin|dmg|pkg/i,linux:/linux|appimage|deb|rpm/i,android:/android|apk/i,ios:/ios|ipa/i};
  var ext={win:['msix','msi','exe','zip','7z'],mac:['dmg','pkg','zip'],linux:['appimage','deb','rpm','tar.gz','tar.xz'],android:['apk'],ios:['ipa']};
  var scored=[];
  a.forEach(function(x){
    var n=(x.n||'').toLowerCase();
    // 文件名里点名了别的系统就跳过（例如 mac 资产里的 dmg）
    var other=false;
    Object.keys(hint).forEach(function(k){if(k!==os&&hint[k].test(n))other=true;});
    if(other&&!hint[os].test(n))return;
    var s=0,list=ext[os]||[];
    list.forEach(function(p,i){if(n.indexOf(p)>-1)s=Math.max(s,900-i*40);});
    if(hint[os].test(n))s+=120;
    if(/x64|amd64|arm64|aarch64/.test(n))s+=40;
    if(/\.sha|\.sig|\.asc|\.zsync|checksum/i.test(n))s-=500;
    if(/\d/.test(String(x.s||'')))s+=10;
    scored.push({o:x,s:s});
  });
  if(!scored.length)return a.length===1?a[0]:null;
  scored.sort(function(p,q){return q.s-p.s;});
  return scored[0].s>0?scored[0].o:null;
};
window.__TYPE_LABEL={"A":"二进制直下","B":"源码构建","C":"官网下载","D":"在线应用"};
