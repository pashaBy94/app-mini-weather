import { iconMarker } from '@/lib/images';
import Image from 'next/image';
import { useEffect } from 'react';

export function SunTime({ sunrise, sunset, dt }: { sunrise: number; sunset: number; dt: number }) {
    useEffect(() => {
        console.log(sunset - sunrise, sunset - dt);

        //     const collection = document.querySelectorAll(
        //         '.rotate__deg',
        //     ) as NodeListOf<HTMLImageElement>;
        //     collection.forEach(el => {
        //         el.style.rotate = `${180 + (deg as number)}deg`;
        //     });
    }, []);
    return (
        <div className="bg-white rounded-xl p-2 flex flex-col gap-2">
            <h3 className=" text-[.8rem]">Закат и рассвет</h3>
            <div className=" relative flex gap-2">
                <p className=" font-semibold">
                    <span className=" text-gray-600 text-[1.1rem]">{sunrise}</span> м/с
                </p>
                <div className=" relative h-8 w-28 overflow-hidden">
                    <div className=" absolute z-10 rounded-full w-4 h-4 bg-yellow-500 bottom-0 left-0"></div>
                    <div className=" absolute top-0 left-0 rounded-[50%] w-28 h-16 border-dotted border-gray-600 border-[1px]"></div>
                </div>
                <p className=" font-semibold">
                    <span className=" text-gray-600 text-[1.1rem]">{sunset}</span> м/с
                </p>
            </div>
        </div>
    );
}
