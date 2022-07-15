const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = (app) => {
  app.use(
    ":8080/deploy",
    createProxyMiddleware({
      target: "http://3.94.85.13",
      changeOrigin: true,
    })
  );
};
