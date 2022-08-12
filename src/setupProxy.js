const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "https://www.googleapis.com/youtube/v3",
      pathRewrite: {
        "^/api": "",
      },
    })
  );
};
