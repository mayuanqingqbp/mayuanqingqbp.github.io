/* 变现模块：渲染明确标注的赞助 / 推荐卡片、改写返佣链接、注入爱发电入口。
   底线：无第三方脚本、无埋点、无用户画像；所有付费链接都带可见标注与 rel="sponsored"。
   默认数据全部关闭，不填配置时页面表现与原站一致。 */
(function () {
  'use strict';

  var PLACEHOLDER = /REPLACE_ME|example\.com|^\s*#?\s*$/i;

  function validUrl(u) {
    if (typeof u !== 'string') return false;
    var s = u.trim();
    if (!s || PLACEHOLDER.test(s)) return false;
    return /^https?:\/\//i.test(s);
  }

  function enabledItems(list) {
    if (!Array.isArray(list)) return [];
    return list.filter(function (x) {
      return x && x.enabled === true && validUrl(x.url) && x.name;
    });
  }

  function el(tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text !== null && text !== undefined) n.textContent = String(text);
    return n;
  }

  function card(item, defaultBadge) {
    var a = el('a', 'mz-card');
    a.href = item.url;
    a.target = '_blank';
    a.rel = 'noopener noreferrer sponsored';
    a.appendChild(el('span', 'mz-tag', item.badge || defaultBadge));
    a.appendChild(el('span', 'mz-card-name', item.name));
    if (item.desc) a.appendChild(el('span', 'mz-card-desc', item.desc));
    a.appendChild(el('span', 'mz-card-go', '查看详情 →'));
    return a;
  }

  function section(kicker, items, badge, note) {
    var s = el('section', 'mz-section');
    s.appendChild(el('div', 'mz-kicker', kicker));
    var g = el('div', 'mz-grid');
    items.forEach(function (it) { g.appendChild(card(it, badge)); });
    s.appendChild(g);
    var more = el('a', 'mz-more', '了解合作 →');
    more.href = '/sponsor.html';
    s.appendChild(more);
    s.appendChild(el('p', 'mz-note', note));
    return s;
  }

  var SPONSOR_NOTE = '赞助不影响目录排序、收录标准与介绍文字；所有赞助位均明确标注。';
  var AFF_NOTE = '标注为推广的链接可能产生佣金，不影响你的购买价格，也不影响目录排序。';

  /* 首页：付费位做成卡片列表里的一张卡，固定在默认浏览视图的第 13 张位置。
     原来它是插在 <main> 最前面的一节，等于把广告摆在首屏正中——现在挪到
     用户真正开始浏览之后才出现，而且筛选/搜索时完全不出现。
     app.js 每次渲染卡片都会调用这个钩子（innerHTML 会被重建）。 */
  function gridHook(grid, ctx) {
    var items = enabledItems(window.SPONSORS).concat(enabledItems(window.RECOMMENDED_SERVICES));
    if (!items.length) return;
    if (!ctx || !ctx.defaultView) return;
    var at = Math.max(0, Math.min(ctx.slot || 0, grid.children.length));
    var frag = document.createDocumentFragment();
    items.forEach(function (it) {
      var c = card(it, it.badge || '赞助商');
      c.className = 'mz-card mz-slot';
      frag.appendChild(c);
    });
    grid.insertBefore(frag, grid.children[at] || null);
  }

  /* 没有卡片网格的页面（分类页 / 指南页 / 工具页）：仍然是一节，但放在正文末尾，
     不在首屏。 */
  function injectSections(main) {
    var sponsors = enabledItems(window.SPONSORS);
    var recs = enabledItems(window.RECOMMENDED_SERVICES);
    if (!sponsors.length && !recs.length) return;
    if (sponsors.length) main.appendChild(section('SPONSOR · 赞助商', sponsors, '赞助商', SPONSOR_NOTE));
    if (recs.length) main.appendChild(section('AFFILIATE · 推荐服务', recs, '推广 · 返佣', AFF_NOTE));
  }

  /* 页脚细带：不管有没有赞助商，只要配了爱发电就在页脚留一条一行高的入口。
     这是全站唯一常驻的自推广位，措辞保持事实性，不做倒计时/紧迫感。 */
  function injectFooterBand() {
    var foot = document.querySelector('footer');
    if (!foot || foot.querySelector('.mz-band')) return;
    var afdian = validUrl(window.AFDIAN_URL);
    var hasSponsor = enabledItems(window.SPONSORS).length > 0;
    if (!afdian && !hasSponsor) return;

    var band = el('div', 'mz-band');
    var wrap = el('div', 'wrap');
    band.appendChild(wrap);
    wrap.appendChild(el('span', 'mz-band-text',
      hasSponsor ? '本页含明确标注的赞助位。目录免费、无追踪，更新靠读者支持。'
                 : '这份目录免费、无追踪、无广告脚本，长期更新靠读者支持。'));
    var a = el('a', 'mz-band-link', afdian ? '按月支持 · 爱发电 ↗' : '赞助与合作 →');
    a.href = afdian ? window.AFDIAN_URL : '/sponsor.html';
    if (afdian) {
      a.target = '_blank';
      a.rel = 'noopener noreferrer';
    }
    wrap.appendChild(a);
    var note = foot.querySelector('.note');
    foot.insertBefore(band, note || null);
  }

  function injectCards() {
    var main = document.querySelector('main');
    if (!main) return;
    /* 合作页本身不再重复插入卡片 */
    if (/(^|\/)sponsor\.html$/.test(location.pathname)) return;
    /* 首页（有卡片网格）由 app.js 调 KB_GRID_HOOK 把付费位放进卡片列表，这里不插手 */
    if (document.getElementById('grid')) return;
    if (main.querySelector('.mz-section')) return;
    injectSections(main);
  }

  function rewriteAffiliateLinks() {
    var rules = window.AFFILIATE_RULES;
    if (!Array.isArray(rules) || !rules.length) return;
    var links = document.querySelectorAll('a[href]');
    Array.prototype.forEach.call(links, function (a) {
      if (a.getAttribute('data-mz-aff')) return;
      var orig = a.getAttribute('href') || '';
      for (var i = 0; i < rules.length; i++) {
        var r = rules[i];
        if (!r || !validUrl(r.to)) continue;
        var m = String(r.match || '');
        if (!m) continue;
        var same = r.prefix ? orig.indexOf(m) === 0 : orig === m;
        if (!same) continue;
        a.setAttribute('href', r.to);
        a.setAttribute('rel', ((a.getAttribute('rel') || '') + ' sponsored').trim());
        a.appendChild(el('span', 'aff-tag', '推广 · ' + (r.name || '返佣')));
        a.setAttribute('data-mz-aff', '1');
        break;
      }
    });
  }

  function injectAfdian() {
    var url = window.AFDIAN_URL;
    if (!validUrl(url)) return;

    var btn = document.getElementById('afdianBtn'); /* 合作页的按钮 */
    if (btn) {
      btn.href = url;
      btn.hidden = false;
      btn.textContent = '按月支持 · 爱发电 ↗';
    }

    /* 静态页是 .sponsor-pop（details 浮层），首页是 #qrBox（modal 弹窗） */
    var pops = document.querySelectorAll('.sponsor-pop, #qrBox');
    Array.prototype.forEach.call(pops, function (pop) {
      if (pop.querySelector('.afdian-link')) return;
      var a = el('a', 'afdian-link', '按月支持 · 爱发电 ↗');
      a.href = url;
      a.target = '_blank';
      a.rel = 'noopener noreferrer';
      pop.appendChild(a);
    });
  }

  /* 让 CONTACT_EMAIL 成为唯一配置源：同步页面里所有 mailto 链接的文字与地址 */
  function syncContactEmail() {
    var email = window.CONTACT_EMAIL;
    if (typeof email !== 'string' || email.indexOf('@') < 0) return;
    var links = document.querySelectorAll('a[href^="mailto:"]');
    Array.prototype.forEach.call(links, function (a) {
      a.setAttribute('href', 'mailto:' + email);
    });
  }

  function init() {
    injectCards();
    rewriteAffiliateLinks();
    injectAfdian();
    injectFooterBand();
    syncContactEmail();
  }

  /* app.js 渲染卡片时会调这个钩子；必须在 app.js 首次渲染前挂好
     （monetize.js 是普通脚本，app.js 是 module，普通脚本先执行）。 */
  window.KB_GRID_HOOK = gridHook;

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
