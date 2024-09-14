'use client';
import { HourlyItem } from '@/entities';
import { useGetPlatform } from '@/shared/lib/hooks';
import { HourlyListComponent } from '@/shared/model/types';

export function HourlyList({ hourlyData }: HourlyListComponent) {
    const [, isMobile] = useGetPlatform();

    return (
        <section className="mb-5">
            <h2 className="mb-2">Почасовой прогноз</h2>
            <div className=" relative">
                {isMobile ? null : <div className="after-pill"></div>}
                <div
                    className={`${isMobile ? 'hidden__sroll' : 'visible__scroll'} overflow-auto bg-white rounded-xl relative`}
                >
                    <ul className=" p-2 grid grid-flow-col auto-cols-[65px] gap-2">
                        {hourlyData?.map((hour, ind) => (
                            <HourlyItem key={ind} hour={hour} ind={ind} />
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}
