import { MinutlyItem } from '@/entities';
import { useGetPlatform } from '@/shared/lib/hooks';

export function MinutlyList({
    minutlyData,
}: {
    minutlyData: { dt: number; precipitation: number }[];
}) {
    const [, isMobile] = useGetPlatform();

    return (
        <section className="mb-5">
            <h2 className="mb-2 am:text-[.9rem] bm:text-base">Осадки в ближайший час</h2>
            <div className=" relative">
                {isMobile ? null : <div className="after-pill"></div>}
                <div
                    className={`${isMobile ? 'hidden__sroll' : 'visible__scroll'} overflow-auto bg-white rounded-xl relative `}
                >
                    <ul className=" p-2 grid grid-flow-col auto-cols-[65px] gap-2">
                        {minutlyData?.map((minute, ind) => (
                            <MinutlyItem key={ind} minute={minute} ind={ind} />
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}
