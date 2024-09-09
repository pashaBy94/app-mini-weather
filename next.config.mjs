/** @type {import("next").NextConfig} */

import { resolve, dirname } from 'path';
import path from 'path';

const __dirname = path.resolve();
export const images = {
    formats: ['image/webp'],
    domains: [
        'lh3.googleusercontent.com',
        'firebasestorage.googleapis.com',
        'dynamic-media-cdn.tripadvisor.com',
        'platform-lookaside.fbsbx.com',
    ],
    remotePatterns: [
        {
            protocol: 'https',
            hostname: 'lh3.googleusercontent.com',
            port: '',
            pathname: '/a/**',
        },
        {
            protocol: 'https',
            hostname: 'firebasestorage.googleapis.com',
            port: '',
            pathname: '/v0/b/guider-base.appspot.com/o/**',
        },
    ],
    deviceSizes: [320, 375, 640, 750, 768, 828, 1024, 1080, 1200, 1240, 1920, 2048, 3840],
    imageSizes: [
        16, 32, 48, 64, 96, 128, 256, 350, 384, 388, 700, 776, 1024, 1080, 1200, 1240, 1920, 2048,
        3840,
    ],
};

export function webpack(config) {
    config.resolve.alias = {
        ...config.resolve.alias,
        '@': resolve(__dirname),
        '@/images': resolve(__dirname, 'src/shared/assets/images'),
        '@/pages': resolve(__dirname, 'src/pages'),
        '@/widgets': resolve(__dirname, 'src/widgets'),
        '@/features': resolve(__dirname, 'src/features'),
        '@/entities': resolve(__dirname, 'src/entities'),
        '@/shared': resolve(__dirname, 'src/shared'),
    };

    return config;
}
