/** @type {import('next').NextConfig} */;
const WindiCSSWebpackPlugin = require('windicss-webpack-plugin')
const nextConfig = {
  experimental: {
    appDir: false,
  },
  webpack(config){
    config.plugins.push(new WindiCSSWebpackPlugin());
    return config;
}
}

module.exports = nextConfig; 
