import { iconMarker } from '@/lib/images';
import { HourlyItemComponent } from '@/shared/model/types';
import Image from 'next/image';

export function HourlyItem({ hour, ind }: HourlyItemComponent) {
    return (
        <li className=" flex flex-col items-center gap-3">
            <p className="font-bold text-[.9em]">{Math.round(+hour.temp)}&deg;</p>
            <Image src={hour.clouds + ''} alt="clouds" width={30} height={30} />
            <p className="text-[0.7rem] font-semibold">{ind === 0 ? 'Сейчас' : hour.time}</p>
            <div className="flex flex-col items-center gap-1">
                <Image
                    className=" bock [transform:rotate(30deg)]"
                    src={iconMarker.direction}
                    alt="speed"
                    width={25}
                    height={25}
                />
                <span className="text-[0.7rem] font-semibold">{(+hour.speed).toFixed(1)}м/с</span>
            </div>
        </li>
    );
}
