
const { i18n } = require("./next-i18next.config");

module.exports = {
  i18n,
  transpilePackages: [
    "@refinedev/nextjs-router",
    "@refinedev/antd",
    // "@refinedev/inferencer",
  ],
  
  webpack: (config) => {
    config.resolve.fallback = { fs: false };

    return config;
  },
  
};
