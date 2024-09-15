import { parseData, parseUTC } from '@/shared/lib';
import { useEffect, useRef } from 'react';
import { drawSunny } from './lib/utils';

export function SunTime({ sunrise, sunset, dt }: { sunrise: number; sunset: number; dt: number }) {
    const ref = useRef(null);
    useEffect(() => {
        drawSunny({
            sunrise,
            sunset,
            dt,
            node: ref.current as HTMLCanvasElement | null,
        });
    }, []);
    return (
        <div className="bg-white rounded-xl p-2 bm:p-3 cm:p-4 dm:p-2 flex flex-col gap-2 ">
            <h3 className=" text-[.8rem]  bm:text-[.9rem]">Закат и рассвет</h3>
            <div className=" relative flex am:gap-2 bm:gap-5 dm:gap-20 items-center ">
                <div>
                    <p className=" font-semibold  flex gap-1 mb-1 items-center ">
                        <span className=" text-gray-600 text-[.8rem] am:hidden abm:inline">
                            Рассвет:{' '}
                        </span>
                        <span className=" text-gray-600 text-[1.1rem]">
                            {parseData(parseUTC(sunrise), ['time'])}
                            <br />
                        </span>
                    </p>
                    <p className=" font-semibold  flex gap-1 items-center ">
                        <span className=" text-gray-600 text-[.8rem] am:hidden abm:inline">
                            Закат:{' '}
                        </span>
                        <span className=" text-gray-600 text-[1.1rem]">
                            {parseData(parseUTC(sunset), ['time'])}
                            <br />
                        </span>
                    </p>
                </div>
                <div className=" flex items-end ">
                    <canvas
                        ref={ref}
                        width={220}
                        height={140}
                        className=" w-[180px] h-[110px] abm:w-[190px] abm:h-[115px] bm:w-[220px] bm:h-[140px] cm:w-[240px] cm:h-[145px] dm:w-[280px] dm:h-[160px]"
                    ></canvas>
                </div>
            </div>
        </div>
    );
}
