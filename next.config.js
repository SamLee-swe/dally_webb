/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_GOOGLE_API: process.env.NEXT_PUBLIC_GOOGLE_API,
  },

  compiler: {
    styledComponents: true,
  },
};

module.exports = {
  nextConfig,
};
