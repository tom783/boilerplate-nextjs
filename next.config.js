/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack: (config, options) => {
    const { dev, isServer } = options;
    config.module.rules.push({
      test: /\.(tsx|ts)$/,
      use: [
        options.defaultLoaders.babel,
        {
          loader: 'babel-loader',
          options: {
            sourceMaps: dev,
            plugins: [
              require.resolve('babel-plugin-macros'),
              [require.resolve('@babel/plugin-syntax-typescript'), { isTSX: true }],
            ],
          },
        },
      ],
    });

    if (!isServer) {
      config.resolve.fallback = {
        ...(config.resolve.fallback || {}),
        fs: false,
        module: false,
        path: false,
        os: false,
        crypto: false,
      };
    }

    return config;
  },
  compiler: {
    styledComponents: true,
  },
};

module.exports = nextConfig;
