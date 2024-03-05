const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://auth.imsejong.com',
      changeOrigin: true,
      pathRewrite: { '/api': '/auth' },
    })
  );

  // app.use(
  //   '/api',
  //   createProxyMiddleware({
  //     target: 'https://www.api-sejongpeer.shop/api/v1',
  //     changeOrigin: true,
  //     pathRewrite: { '/api': '/auth' },
  //   })
  // );
};
