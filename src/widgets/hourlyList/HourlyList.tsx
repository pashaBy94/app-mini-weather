import { HourlyItem } from '@/entities';
import { HourlyListComponent } from '@/shared/model/types';

export function HourlyList({ hourlyData }: HourlyListComponent) {
    return (
        <section className="mb-4">
            <h2 className="mb-2">Почасовой прогноз</h2>
            <div className="hidden__sroll overflow-auto bg-white rounded-xl">
                <ul className=" p-2 grid grid-flow-col auto-cols-[65px] gap-2">
                    {hourlyData?.map((hour, ind) => <HourlyItem key={ind} hour={hour} ind={ind} />)}
                </ul>
            </div>
        </section>
    );
}
