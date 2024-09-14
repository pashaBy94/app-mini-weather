import { MinutlyItem } from '@/entities';

export function MinutlyList({
    minutlyData,
}: {
    minutlyData: { dt: number; precipitation: number }[];
}) {
    return (
        <section className="mb-4">
            <h2 className="mb-2">Осадки в ближайший час</h2>
            <div className="hidden__sroll overflow-auto bg-white rounded-xl">
                <ul className=" p-2 grid grid-flow-col auto-cols-[65px] gap-2">
                    {minutlyData?.map((minute, ind) => (
                        <MinutlyItem key={ind} minute={minute} ind={ind} />
                    ))}
                </ul>
            </div>
        </section>
    );
}
