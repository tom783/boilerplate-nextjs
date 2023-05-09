const withTwin = require('./config/withTwin.js');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;
// TODO: withTwin으로적용해보기..지금은 .babelrc 직접사용
// module.exports = withTwin(nextConfig);
