/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {
                protocol: "https",
                hostname: "wallpapercave.com"
            },
            {
                protocol: "https",
                hostname: "gogocdn.net"
            },
            {
                protocol: "https",
                hostname: "s4.anilist.co"
            }
        ]
    }
};

export default nextConfig;
