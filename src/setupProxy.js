const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = (app) => {
  app.use(
    "/deploy",
    createProxyMiddleware({
      target: "http://3.94.85.13:8080",
      changeOrigin: true,
    })
  );
};
