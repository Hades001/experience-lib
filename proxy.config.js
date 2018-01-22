const PROXY_CONFIG = [
  {
    context: [
     "/lesson",
      "/problem",
      "/make"
    ],
    target: "http://10.192.2.239:5000/",
    secure: false,
    logLevel: "debug",
    changeOrigin: true
  }

];

module.exports = PROXY_CONFIG;
