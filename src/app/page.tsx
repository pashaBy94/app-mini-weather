'use client';
import { parseData } from '@/shared/lib';
import weather from './../../json/weather.json';
import { useEffect, useState } from 'react';

export default function Home() {
    const [widthView, setWidthView] = useState(0);
    const [heightView, setHeightWhView] = useState(0);

    useEffect(() => {
        setWidthView(window.innerWidth);
        setHeightWhView(window.innerHeight);
    }, []);
    return (
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
                <h1>Hello world</h1>
                Width: {widthView} {}
                Height" {heightView}
            </main>
            <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
        </div>
    );
}
