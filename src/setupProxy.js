const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
  });
  
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://auth.imsejong.com',
      changeOrigin: true,
      pathRewrite: { '/api': '/auth' },
    })
  );
};