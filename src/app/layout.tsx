import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
    title: 'Погода',
    description: 'Погода в вашем городе',
};
export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={` bg-indigo-100`}>{children}</body>
        </html>
    );
}
