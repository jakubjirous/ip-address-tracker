/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["ts", "tsx"],
  compiler: {
    styledComponents: true,
  },
  experimental: {
    appDir: true,
    fontLoaders: [
      { loader: "@next/font/google", options: { subsets: ["latin"] } },
    ],
  },
  env: {
    apiUrl: "https://api.adviceslip.com",
  },
};

module.exports = nextConfig;
