import { parseData, parseUTC } from '@/shared/lib';
import { useEffect } from 'react';
import { setSunny } from './lib/utils';

export function SunTime({ sunrise, sunset, dt }: { sunrise: number; sunset: number; dt: number }) {
    useEffect(() => {
        setSunny({
            sunrise,
            sunset,
            dt,
            node: document.querySelector('.fanny_suny') as HTMLImageElement,
        });
    }, []);
    return (
        <div className="bg-white rounded-xl p-2 flex flex-col gap-2">
            <h3 className=" text-[.8rem]">Закат и рассвет</h3>
            <div className=" relative flex gap-2 items-center">
                <p className=" font-semibold">
                    <span className=" text-gray-600 text-[1.1rem]">
                        {parseData(parseUTC(sunrise), ['time'])}
                    </span>{' '}
                </p>
                <div className=" relative h-10 w-28 overflow-hidden ">
                    <div className=" fanny_suny absolute z-10 rounded-full w-4 h-4 bg-yellow-500 "></div>
                    <div className=" absolute top-3 left-2 rounded-[50%] w-24 h-16 border-dotted border-gray-600 border-[1px]"></div>
                </div>
                <p className=" font-semibold">
                    <span className=" text-gray-600 text-[1.1rem]">
                        {parseData(parseUTC(sunset), ['time'])}
                    </span>{' '}
                </p>
            </div>
        </div>
    );
}
