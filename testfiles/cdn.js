// CDN 基础路径
const cdnBasePath = 'http://wiki.cryzy.cn';

// 当页面加载完成后执行
window.addEventListener('DOMContentLoaded', (event) => {
  // 获取页面上所有的 img 元素
  const images = document.querySelectorAll('img');

  // 更新每个 img 元素的 src 属性
  images.forEach(img => {
    const src = img.getAttribute('src');
    // 假设原始 src 是相对路径
    // 如果是绝对路径，您需要先解析出相对路径部分
    img.src = cdnBasePath + src;
  });
});