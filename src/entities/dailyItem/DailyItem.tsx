import { iconMarker } from '@/lib/images';
import { parseData, parseUTC } from '@/shared/lib';
import { DailyData } from '@/shared/model/types';
import Image from 'next/image';

export function DailyItem({ day, ind }: { day: DailyData; ind: number }) {
    return (
        <li className=" bg-white grid grid-cols-custom grid-rows-custom p-2 rounded-md">
            <p className=" font-semibold">
                {ind === 0 ? 'Сегодня' : parseData(parseUTC(day.dt), ['week', 'day', 'month'])}
            </p>
            <Image
                className=""
                src={iconMarker[day.weather[0].icon] || ''}
                alt="speed"
                width={25}
                height={25}
            />
            <p className="">
                {Math.round(day.temp.max)}&deg;/{Math.round(day.temp.min)}&deg;
            </p>
        </li>
    );
}
