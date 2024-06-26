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
  //   '/measurements',
  //   createProxyMiddleware({
  //     target: 'process.env.REACT_APP_FEST_SERVER',
  //     changeOrigin: true,
  //   })
  // );
};
