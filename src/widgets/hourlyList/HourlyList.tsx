import { HourlyItem } from '@/entities';
import { HourlyListComponent } from '@/shared/model/types';

export function HourlyList({ hourlyData }: HourlyListComponent) {
    return (
        <section className="mb-4">
            <h2 className="mb-2">Почасовой прогноз</h2>
            <ul className="hidden__sroll p-2 overflow-auto grid grid-flow-col auto-cols-[65px] gap-2 bg-white rounded-xl">
                {hourlyData?.map((hour, ind) => <HourlyItem key={ind} hour={hour} ind={ind} />)}
            </ul>
        </section>
    );
}
