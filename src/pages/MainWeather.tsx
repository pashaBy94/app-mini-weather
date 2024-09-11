'use client';
import { useEffect, useState } from 'react';
import { getWeather } from '@/shared/api/weatherApi';
import { WeatherData } from '@/shared/model/types';
import { parseData, parseUTC } from '@/shared/lib';
import Image from 'next/image';
import { iconMarker } from '@/lib/images';
import { DailyList, HourlyList } from '@/widgets';
import { DailyItem } from '@/entities';

export function MainWeather() {
    const [weatherData, setWeatherData] = useState<WeatherData>();
    const [hourlyData, setHourlyData] = useState<
        undefined | Array<{ [key: string]: string | number }>
    >();
    useEffect(() => {
        getWeather({ data: 'Mogilev' })
            .then(res => {
                if (res) setWeatherData(res);
                console.log(res);
            })
            .catch(console.log);
    }, []);
    useEffect(() => {
        const result: undefined | Array<{ [key: string]: string | number }> =
            weatherData?.hourly?.map(hour => {
                console.log(iconMarker[hour?.weather[0].icon]);

                return {
                    time: parseData(parseUTC(hour.dt), ['time']),
                    temp: hour.temp,
                    clouds: iconMarker[hour?.weather[0]?.icon] || '',
                    speed: hour.wind_speed,
                };
            });
        setHourlyData(result);
    }, [weatherData]);
    return (
        <div className="flex flex-col gap-4 bg-indigo-100">
            <header className=" flex justify-between items-center shadow-[inset_0_-7px_5px_rgb(224,231,255)] bg-[url('/images/header.jpg')] bg-cover bg-center bg-no-repeat px-2 py-2 font-semibold">
                <div className=" p-1 bg-slate-50 rounded-full">
                    <Image alt="eee" src={iconMarker.icon} height={50} width={50} />
                </div>
                <div className=" relative overflow-hidden p-1 rounded-full ">
                    <div className="absolute inset-0 bg-slate-200 blur-2xl"></div>
                    <p className="relative">
                        {weatherData &&
                            parseData(parseUTC(weatherData.current.dt), [
                                'day',
                                'month',
                                'week',
                                'time',
                            ])}
                    </p>
                </div>
            </header>
            <main className="px-2">
                <HourlyList hourlyData={hourlyData} />
                {weatherData?.daily && <DailyList dailyData={weatherData?.daily} />}
            </main>
            <footer className=""></footer>
        </div>
    );
}
