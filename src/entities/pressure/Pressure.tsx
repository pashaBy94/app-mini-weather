import { useEffect, useRef } from 'react';
import { drawPressure, setPressure } from './lib/utils';

export function Pressure({ pressure }: { pressure: number }) {
    const canvasRef = useRef(null);
    useEffect(() => {
        const { startRad, endRad, currentDelta } = setPressure(pressure);
        drawPressure({
            canvas: canvasRef.current as unknown as HTMLCanvasElement,
            startRad,
            endRad,
            currentDelta,
        });
    }, []);
    return (
        <div className="bg-white rounded-xl p-2 bm:p-3 cm:p-4 dm:p-2 flex flex-col gap-2 w-full ">
            <h3 className=" text-[.8rem]  bm:text-[.9rem]">Давление</h3>
            <div className=" flex am:gap-0 abm:gap-2 bm:gap-5 dm:gap-2">
                <p className=" font-semibold flex flex-col ">
                    <span className=" text-gray-600 text-[1.1rem]">
                        {Math.round((pressure / 1000) * 750.1)}
                    </span>
                    <span className="text-gray-600 am:text-[.6rem] bm:text-[.9rem] dm:text-[.8rem]">
                        мм.рт.ст.{' '}
                    </span>
                </p>
                <canvas height={59} width={59} ref={canvasRef} className="" id="canvas"></canvas>
            </div>
        </div>
    );
}
