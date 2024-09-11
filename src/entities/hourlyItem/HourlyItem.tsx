import { iconMarker } from '@/lib/images';
import { HourlyItemComponent } from '@/shared/model/types';
import Image from 'next/image';
import { useEffect } from 'react';

export function HourlyItem({ hour, ind }: HourlyItemComponent) {
    useEffect(() => {
        const collection = document.querySelectorAll(
            '.rotate__deg',
        ) as NodeListOf<HTMLImageElement>;
        collection.forEach(el => {
            el.style.rotate = `${180 + (hour.deg as number)}deg`;
        });
    }, []);

    return (
        <li className=" flex flex-col items-center gap-3">
            <p className="font-bold text-[.9em]">{Math.round(+hour.temp)}&deg;</p>
            <Image src={hour.clouds + ''} alt="clouds" width={30} height={30} />
            <p className="text-[0.7rem] font-semibold">{ind === 0 ? 'Сейчас' : hour.time}</p>
            <div className="flex flex-col items-center gap-1">
                <Image
                    className={`rotate__deg block`}
                    src={iconMarker.direction}
                    alt="speed"
                    width={25}
                    height={25}
                />
                <span className="text-[0.7rem] font-semibold">{(+hour.speed).toFixed(1)} м/с</span>
            </div>
        </li>
    );
}
