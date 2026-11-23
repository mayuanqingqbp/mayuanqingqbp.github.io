/* 由 scripts/build-static.ps1 生成，请勿手改。PWA 离线缓存。 */
const CACHE='kaibang-v2-7020c4da6440';
const PRECACHE=[
  "/",
  "/index.html",
  "/all-tools.html",
  "/404.html",
  "/sponsor.html",
  "/manifest.webmanifest",
  "/favicon.svg",
  "/apple-touch-icon.png",
  "/assets/tools.css?v=a62d7a31ff",
  "/assets/static.js?v=21331c783d",
  "/categories/ai.html",
  "/categories/design.html",
  "/categories/dev.html",
  "/categories/host.html",
  "/categories/media.html",
  "/categories/net.html",
  "/categories/prod.html",
  "/categories/sys.html",
  "/guides/g01.html",
  "/guides/g02.html",
  "/guides/g03.html",
  "/guides/g04.html",
  "/guides/g05.html",
  "/guides/g06.html",
  "/guides/g07.html",
  "/guides/g08.html",
  "/guides/g09.html",
  "/guides/g10.html",
  "/guides/index.html",
  "/assets/theme.js?v=6cd6f3c161",
  "/fonts/archivo-latin-var.woff2?v=347eef1c29",
  "/fonts/jetbrains-mono-latin-var.woff2?v=30b3242294",
  "/assets/app.js?v=4243d03d69",
  "/assets/downloads.js?v=0aa8ba740a",
  "/data/alternatives.js?v=212ae9a45d",
  "/data/pinyin.js?v=b6f96d334d",
  "/data/stars.js?v=12cdf490b2",
  "/data/tools-data.js?v=5ad05e0617",
  "/assets/repos.js?v=56717ed754",
  "/assets/site.css?v=f41bfca71c",
  "/assets/monetize.css?v=e5b4472e7b",
  "/assets/qr-wechat.avif?v=8257e3a363",
  "/assets/qr-wechat.webp?v=774bfaf3f0",
  "/assets/qr-alipay.avif?v=d345f242cb",
  "/assets/qr-alipay.webp?v=726d1cba10",
  "/data/sponsors.js?v=dee67b95bb",
  "/data/affiliates.js?v=7b836a72a4",
  "/assets/monetize.js?v=a272aef295"
];
self.addEventListener('install',e=>{
  e.waitUntil(caches.open(CACHE).then(c=>c.addAll(PRECACHE)).then(()=>self.skipWaiting()).catch(()=>{}));
});
self.addEventListener('activate',e=>{
  e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));
});
self.addEventListener('fetch',e=>{
  const req=e.request;
  if(req.method!=='GET')return;
  const url=new URL(req.url);
  if(url.origin!==self.location.origin)return;       // 第三方资源不缓存
  if(url.pathname.startsWith('/api/'))return;          // API 不走缓存
  // 导航请求：网络优先。成功时按 URL 缓存该页；离线先回落该页自身，再回落首页。
  // 版本升级时 activate 会删除旧缓存，因此按需缓存不会堆积过期副本。
  if(req.mode==='navigate'){
    e.respondWith(fetch(req).then(r=>{
      if(r.ok){const cp=r.clone();caches.open(CACHE).then(c=>c.put(req,cp)).catch(()=>{});}
      return r;
    }).catch(()=>caches.match(req).then(hit=>hit||caches.match('/index.html').then(r=>r||Response.error()))));
    return;
  }
  // 静态资源：缓存优先
  e.respondWith(caches.match(req).then(hit=>hit||fetch(req).then(r=>{if(r.ok){const cp=r.clone();caches.open(CACHE).then(c=>c.put(req,cp)).catch(()=>{});}return r;})));
});