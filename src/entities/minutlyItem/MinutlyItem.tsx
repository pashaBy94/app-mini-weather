import { iconMarker } from '@/lib/images';
import { parseData, parseUTC } from '@/shared/lib';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export function MinutlyItem({
    minute,
    ind,
}: {
    ind: number;
    minute: { dt: number; precipitation: number };
}) {
    const [isRain, setIsRain] = useState(false);
    useEffect(() => {
        setIsRain(minute.precipitation > 20);
    }, []);

    return (
        <li className=" flex flex-col items-center gap-1">
            <p className="text-[0.8rem] fonts-semibold">
                {ind === 0 ? 'Сейчас' : parseData(parseUTC(minute.dt), ['time'])}
            </p>
            <Image
                src={isRain ? iconMarker.rain : iconMarker['not_rain']}
                alt="rain"
                width={20}
                height={40}
                style={{ width: '20px', height: '40px' }}
            />
            <p className="font-bold text-[.9em]">{Math.round(minute.precipitation)} %</p>
        </li>
    );
}
