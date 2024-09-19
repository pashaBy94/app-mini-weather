'use client';
import { NewsItem } from '@/entities';
import { OnlyNewsData } from '@/shared/model/types';

export function NewsList({ newsData }: { newsData: Array<OnlyNewsData> | undefined }) {
    return (
        <section className="mb-5">
            <h2 className="mb-2 ">Только свежие новости</h2>
            <ul className=" grid am:grid-cols-1 cm:grid-cols-2 gap-4">
                {newsData &&
                    newsData.map(item => {
                        return <NewsItem key={item.article_id} newsItemData={item} />;
                    })}
            </ul>
        </section>
    );
}
