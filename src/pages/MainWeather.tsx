'use client';
import { useEffect, useState } from 'react';
import { getWeather } from '@/shared/api/weatherApi';
import { WeatherData } from '@/shared/model/types';
import { parseData, parseUTC } from '@/shared/lib';
import Image from 'next/image';
import { iconMarker } from '@/lib/images';

export function MainWeather() {
    const [weatherData, setWeatherData] = useState<WeatherData>();
    useEffect(() => {
        getWeather({ data: 'Mogilev' })
            .then(res => {
                if (res) setWeatherData(res);
                console.log(res);
            })
            .catch(console.log);
    }, []);
    return (
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <header className=" flex justify-between items-center gap-4">
                <Image alt="eee" src={iconMarker.icon} height={50} width={50} />
                {weatherData && parseData(parseUTC(weatherData.current.dt))}
            </header>
            <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
                <h1>Hello world</h1>
            </main>
            <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
        </div>
    );
}
