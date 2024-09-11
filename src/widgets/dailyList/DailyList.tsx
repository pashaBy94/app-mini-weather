import { DailyItem, HourlyItem } from '@/entities';
import { DailyData, HourlyListComponent } from '@/shared/model/types';

export function DailyList({ dailyData }: { dailyData: DailyData[] }) {
    return (
        <section>
            <h2 className={'mb-2'}>Прогноз погоды на 7 дней</h2>
            <ul className=" rounded-xl flex flex-col gap-1 overflow-hidden font-semibold text-[.8em]">
                {dailyData?.map((day, ind) => <DailyItem key={ind} day={day} ind={ind} />)}
            </ul>
        </section>
    );
}
