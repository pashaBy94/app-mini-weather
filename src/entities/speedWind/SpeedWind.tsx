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
        <div className="bg-white rounded-xl p-2 flex flex-col gap-2 w-full ">
            <h3 className=" text-[.8rem]">Скорость ветра</h3>
            <div className=" flex gap-2">
                <p className=" font-semibold">
                    <span className=" text-gray-600 text-[1.1rem]">{speed}</span> м/с
                </p>
                <Image
                    className={`rotate__deg block`}
                    src={iconMarker.direction}
                    alt="speed"
                    width={30}
                    height={30}
                />
            </div>
        </div>
    );
}
