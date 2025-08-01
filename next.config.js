// next.config.js
module.exports = {
  async rewrites() {
    return [
      {
        source: '/student/:path*',
        destination: 'http://93.177.64.145:7818/student/:path*',
      },
    ];
  },
};
