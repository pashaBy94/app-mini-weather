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
        <div className="bg-white rounded-xl p-2 flex flex-col gap-2 ">
            <h3 className=" text-[.8rem]">Закат и рассвет</h3>
            <div className=" relative flex gap-10 items-center">
                <div>
                    <p className=" font-semibold  flex gap-1 mb-1 items-center ">
                        <span className=" text-gray-600 text-[.8rem]">Рассвет: </span>
                        <span className=" text-gray-600 text-[1.1rem]">
                            {parseData(parseUTC(sunrise), ['time'])}
                            <br />
                        </span>
                    </p>
                    <p className=" font-semibold  flex gap-1 items-center ">
                        <span className=" text-gray-600 text-[.8rem]">Закат: </span>
                        <span className=" text-gray-600 text-[1.1rem]">
                            {parseData(parseUTC(sunset), ['time'])}
                            <br />
                        </span>
                    </p>
                </div>
                <div className=" flex items-end ">
                    <span className=" text-gray-600 text-[.7rem]">
                        {parseData(parseUTC(sunrise), ['time'])}
                    </span>
                    <div className=" relative h-20 w-28 overflow-hidden p-4 pt-6 ">
                        <div className=" relative h-full w-full border-b-2 border-dotted border-indigo-500">
                            <div className="fanny_suny absolute z-10 flex flex-col items-center">
                                <span className=" text-gray-600 text-[.7rem]">
                                    {parseData(parseUTC(dt), ['time'])}
                                </span>
                                <div className=" rounded-full w-4 h-4 bg-yellow-500 "></div>
                            </div>
                        </div>
                    </div>
                    <span className=" text-gray-600 text-[.7rem]">
                        {parseData(parseUTC(sunset), ['time'])}
                    </span>
                </div>
            </div>
        </div>
    );
}
