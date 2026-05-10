/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/auth/forgot",
        destination: "/auth/forgot-password",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
