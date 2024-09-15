import { iconMarker } from '@/lib/images';
import { parseData, parseUTC } from '@/shared/lib';
import { DailyData } from '@/shared/model/types';
import Image from 'next/image';

export function DailyItem({ day, ind }: { day: DailyData; ind: number }) {
    return (
        <li className=" bg-white grid grid-cols-custom grid-rows-custom p-2 cm:px-4 rounded-md cm:text-[1rem]">
            <p className=" font-semibold flex am:flex-col abm:flex-row">
                {ind === 0 ? (
                    'Сегодня'
                ) : (
                    <>
                        <span>{parseData(parseUTC(day.dt), ['day', 'month'])},&nbsp;</span>
                        <span>{parseData(parseUTC(day.dt), ['week'])}</span>
                    </>
                )}
            </p>
            <Image
                className=" cm:w-8 cm:h-8"
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
