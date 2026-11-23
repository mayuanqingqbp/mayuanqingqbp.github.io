/* 推荐服务卡片 + 站内链接返佣规则。
   默认全部关闭，不会显示任何占位内容，也不会改写任何链接。 */

/* 带「推广 · 返佣」标注的推荐服务卡片 */
window.RECOMMENDED_SERVICES = [
  { enabled: false, name: '服务名称', desc: '一句话介绍', url: 'https://REPLACE_ME.example', badge: '推广 · 返佣' }
];

/* 站内已有链接的推广改写规则：
   { match: 'https://官方原始URL', to: '你的推广链接', name: '工具名', prefix: false }
   prefix=true 时按前缀匹配，false 时按完整 URL 匹配。 */
window.AFFILIATE_RULES = [
];
