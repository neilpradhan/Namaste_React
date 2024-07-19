const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://op.fd-api.com',
      changeOrigin: true,
      pathRewrite: { '^/api': '' },
    })
  );
};
