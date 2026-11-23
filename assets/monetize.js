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

  function injectCards() {
    var main = document.querySelector('main');
    if (!main || main.querySelector('.mz-section')) return;
    /* 合作页本身不再重复插入卡片 */
    if (/(^|\/)sponsor\.html$/.test(location.pathname)) return;

    var sponsors = enabledItems(window.SPONSORS);
    var recs = enabledItems(window.RECOMMENDED_SERVICES);
    if (!sponsors.length && !recs.length) return;

    var frag = document.createDocumentFragment();
    if (sponsors.length) {
      frag.appendChild(section('SPONSOR · 赞助商', sponsors, '赞助商',
        '赞助不影响目录排序、收录标准与介绍文字；所有赞助位均明确标注。'));
    }
    if (recs.length) {
      frag.appendChild(section('AFFILIATE · 推荐服务', recs, '推广 · 返佣',
        '标注为推广的链接可能产生佣金，不影响你的购买价格，也不影响目录排序。'));
    }
    main.insertBefore(frag, main.firstChild);
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
    syncContactEmail();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
