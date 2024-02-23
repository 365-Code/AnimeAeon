/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {
                protocol: "https",
                hostname: "wallpapercave.com"
            }
        ]
    }
};

export default nextConfig;
