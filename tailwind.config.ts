import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
        './src/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            screens: {
                am: '270px',
                abm: '320px',
                bm: '400px',
                cm: '500px',
                dm: '600px',
                fm: '700px',
            },
            colors: {
                background: 'var(--background)',
                foreground: 'var(--foreground)',
            },
            gridTemplateColumns: {
                custom: '4fr 1fr 1fr',
            },
            gridTemplateRows: {
                custom: '1fr',
            },
        },
    },
    plugins: [],
};
export default config;
