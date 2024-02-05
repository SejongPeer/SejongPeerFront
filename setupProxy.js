const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://auth.imsejong.com',
      changeOrigin: true,
      pathRewrite: {'^/api': '/auth'},
    })
  );
};
