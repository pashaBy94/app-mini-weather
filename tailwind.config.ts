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
            scrollbar: {
                hidden: {
                    // Firefox
                    'scrollbar-width': 'none',
                    // Safari and Chrome
                    '&::-webkit-scrollbar': {
                        width: '0px',
                        height: '0px',
                    },
                    // IE and Edge
                    '-ms-overflow-style': 'none',
                },
            },
        },
    },
    plugins: [],
};
export default config;
