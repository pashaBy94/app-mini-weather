import { iconMarker } from '@/lib/images';
import Image from 'next/image';
import { useEffect } from 'react';

export function SpeedWind({ deg, speed }: { deg: number; speed: number }) {
    useEffect(() => {
        const collection = document.querySelectorAll(
            '.rotate__deg',
        ) as NodeListOf<HTMLImageElement>;
        collection.forEach(el => {
            el.style.rotate = `${180 + (deg as number)}deg`;
        });
    }, []);
    return (
        <div className="bg-white rounded-xl p-2 bm:p-3 cm:p-4 dm:p-2 flex flex-col gap-2 w-full ">
            <h3 className=" text-[.8rem] bm:text-[.9rem]">Скорость ветра</h3>
            <div className=" flex gap-2 items-center">
                <p className=" font-semibold flex flex-col bm:flex-row">
                    <span className=" text-gray-600 text-[1.1rem]">{speed}&nbsp;</span>{' '}
                    <span className=" text-gray-600 text-[1.1rem]">м/с</span>
                </p>
                <Image
                    className={`rotate__deg block h-10 w-10 bm:h-14 bm:w-14 dm:h-10 dm:w-10`}
                    src={iconMarker.direction}
                    alt="speed"
                    width={30}
                    height={30}
                />
            </div>
        </div>
    );
}
