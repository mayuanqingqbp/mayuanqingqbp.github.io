/* 静态页交互：主题切换 + 赞助浮层点击外部关闭。同源外链，配合 CSP */
document.addEventListener('DOMContentLoaded', function () {
  var SUN = '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>';
  var MOON = '<path d="M21 12.8A9 9 0 1 1 11.2 3 7 7 0 0 0 21 12.8Z"/>';
  function apply(t) {
    document.documentElement.setAttribute('data-theme', t);
    try { localStorage.setItem('osc-theme', t); } catch (e) {}
    var icon = document.getElementById('themeIcon');
    var label = document.getElementById('themeLabel');
    if (icon) icon.innerHTML = (t === 'dark') ? MOON : SUN;
    if (label) label.textContent = (t === 'dark') ? '亮色' : '暗色';
    if (btn) btn.setAttribute('aria-label', '切换明暗主题：' + (t === 'dark' ? '亮色' : '暗色'));
  }
  var btn = document.getElementById('themeBtn');
  if (btn) {
    apply(document.documentElement.getAttribute('data-theme') || 'light');
    btn.addEventListener('click', function () {
      apply(document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark');
    });
  }
  // 赞助浮层：点击空白处关闭
  var sp = document.querySelector('.sponsor-wrap');
  if (sp) {
    document.addEventListener('click', function (e) {
      if (sp.open && !sp.contains(e.target)) sp.open = false;
    });
  }
});
