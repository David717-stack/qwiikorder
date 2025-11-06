/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {protocol: "https",
            hostname: "1h3.goodleusercontent.com"
            }
        ]
    }
};

export default nextConfig;
