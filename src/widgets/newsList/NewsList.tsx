'use client';
import { HourlyItem, NewsItem } from '@/entities';
import { useGetPlatform } from '@/shared/lib/hooks';
import { HourlyListComponent, OnlyNewsData } from '@/shared/model/types';

export function NewsList({ newsData }: { newsData: Array<OnlyNewsData> }) {
    const [, isMobile] = useGetPlatform();

    return (
        <section className="mb-5">
            <h2 className="mb-2 am:text-[.9rem] bm:text-base">Только свежие новости</h2>
            <ul className=" ">
                {newsData.map(item => {
                    return <NewsItem key={item.article_id} newsItemData={item} />;
                })}
            </ul>
        </section>
    );
}
