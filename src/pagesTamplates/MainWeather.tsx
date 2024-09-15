'use client';
import { useEffect, useState } from 'react';
import { getWeather } from '@/shared/api/weatherApi';
import { WeatherData } from '@/shared/model/types';
import { parseData, parseUTC } from '@/shared/lib';
import { iconMarker } from '@/lib/images';
import { DailyList, Header, HourlyList, MinutlyList } from '@/widgets';
import { parseParams } from '@/shared/lib/utils';
import { ParamsOfWeather } from '@/widgets/paramsOfWeather/ParamsOfWeather';

export default function MainWeather() {
    const [weatherData, setWeatherData] = useState<WeatherData>();
    const [hourlyData, setHourlyData] = useState<
        undefined | Array<{ [key: string]: string | number }>
    >();
    const [minutlyData, setMinutlyData] = useState<Array<{ dt: number; precipitation: number }>>();

    useEffect(() => {
        // let initial = window.pageYOffset;
        // function trottleScroll() {
        //     let timer: any;
        //     return () => {
        //         if (timer) {
        //             return;
        //         }
        //         window.addEventListener('scroll', scrollingContent);
        //         timer = setTimeout(() => {
        //             timer = null;
        //             clearTimeout(timer);
        //             window.removeEventListener('scroll', scrollingContent);
        //         }, 700);
        //     };
        // }
        // const trottle = trottleScroll();
        // function scrollingContent(ev: Event) {
        //     ev.preventDefault();
        //     ev.stopPropagation();
        //     window.scrollTo(0, initial);
        // }
        // function wheelContent(ev: WheelEvent) {
        //     initial = window.pageYOffset;
        //     const parent: HTMLElement | null =
        //         (ev.target as HTMLElement).closest('.hidden__sroll') ||
        //         (ev.target as HTMLElement).closest('.visible__scroll');

        //     if (parent) {
        //         trottle();
        //         let coord = parent.children[0].getBoundingClientRect();
        //         parent.scrollTo(Math.abs(coord.x) + ev.deltaY, 0);
        //     } else {
        //         window.removeEventListener('scroll', scrollingContent);
        //     }
        // }
        // window.addEventListener('wheel', wheelContent);

        const data: Record<string, string> = parseParams(window.location.search);

        getWeather(
            data.latitude && data.longitude
                ? { coord: { latitude: +data.latitude, longitude: +data.longitude } }
                : { data: data.city },
        )
            .then(res => {
                if (res) setWeatherData(res);
            })
            .catch(console.log);
        // return () => {
        //     window.removeEventListener('wheel', wheelContent);
        //     window.removeEventListener('scroll', scrollingContent);
        // };
    }, []);
    useEffect(() => {
        const result: undefined | Array<{ [key: string]: string | number }> =
            weatherData?.hourly?.map(hour => {
                return {
                    time: parseData(parseUTC(hour.dt), ['time']),
                    temp: hour.temp,
                    clouds: iconMarker[hour?.weather[0]?.icon] || '',
                    speed: hour.wind_speed,
                    deg: hour.wind_deg,
                };
            });
        setHourlyData(result);
        if (weatherData?.minutely) setMinutlyData(weatherData?.minutely);
    }, [weatherData]);
    return (
        <div className="flex flex-col gap-4 bg-indigo-100 max-w-[770px] m-0 mx-auto">
            <Header weatherData={weatherData} />
            <main className="px-2 cm:px-5">
                <HourlyList hourlyData={hourlyData} />
                {minutlyData && <MinutlyList minutlyData={minutlyData} />}
                {weatherData?.daily && <DailyList dailyData={weatherData?.daily} />}
                {weatherData?.current && <ParamsOfWeather currentWeather={weatherData?.current} />}
            </main>
            <footer className=""></footer>
        </div>
    );
}
