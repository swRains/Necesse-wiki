// service-worker.js
// 请确保引入了JSZip库，它可以从CDN获得或者是打包到您的Service Worker文件中。
// importScripts('https://path-to-jszip-cdn/jszip.min.js'); // 如果您的服务工作器可以这样引入外部脚本
importScripts('/js/jszip.min.js');

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('site-static').then(cache => {
      return cache.addAll([
        '/images/images.zip', // 预缓存图片压缩包
        // ... 预缓存其他资源
      ]);
    })
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.open('site-static').then(cache => {
      return cache.match('/images/images.zip').then(response => {
        if (!response) {
          throw new Error('Zip file not found in cache');
        }
        return response.blob();
      }).then(JSZip.loadAsync).then(zip => {
        return Promise.all(
          Object.keys(zip.files).filter(filename => {
            // 确保不是文件夹而是文件
            return !zip.files[filename].dir;
          }).map(filename => {
            return zip.files[filename].async('blob').then(blob => {
              // 对于每个文件，创建一个新的请求和响应对象然后存储它们
              const request = new Request(`/images/${filename}`);
              const response = new Response(blob, {
                headers: { 'Content-Type': 'image/png' } // 注意：这里假设所有图片都是PNG格式，可能需要根据实际情况调整
              });
              return cache.put(request, response); // 存储在缓存中
            });
          })
        );
      }).then(() => {
        // 完成所有文件的缓存之后，删除ZIP文件缓存
        return cache.delete('/images/images.zip');
      });
    })
  );
});

self.addEventListener('fetch', event => {
  // 检查是否是图片请求
  if (event.request.url.startsWith(self.location.origin) && event.request.url.includes('/images/')) {
    event.respondWith(
      caches.match(event.request).then(cachedResponse => {
        // 如果图片已缓存，则返回缓存的图片，否则进行网络请求
        return cachedResponse || fetch(event.request);
      })
    );
  }
});