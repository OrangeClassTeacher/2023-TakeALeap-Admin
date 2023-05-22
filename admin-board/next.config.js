/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "m.media-amazon.com",
        port: "",
        pathname: "/images/**",
      },
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
      },
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "media.istockphoto.com",
      },
      {
        protocol: "https",
        hostname: 'res.cloudinary.com'
      }
    ],
  },
  env: {
    CLOUDINARY_API: process.env.CLOUDINARY_API,
    SECRET_KEY: process.env.SECRET_KEY,
    CLOUDINARY_API_KEY: process.env.CLOUDINARY_API_KEY
  }
};

module.exports = nextConfig;
