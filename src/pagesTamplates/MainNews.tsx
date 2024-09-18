'use client';
import { useEffect, useRef, useState } from 'react';
import { getNews } from '@/shared/api/newsApi';
import { OnlyNewsData } from '@/shared/model/types';
import { Pagination } from '@/shared/ui';
import { HeaderNews } from '@/widgets';

export default function MainNews() {
    const [newsData, setNewsData] = useState<Array<OnlyNewsData>>();
    const [numbPage, setNumbPage] = useState<number>(0);
    const [nextPage, setNextPage] = useState<number>(0);
    const [totalResults, setTotalResults] = useState<number>();
    const [fetching, setFetching] = useState<boolean>(false);
    const ref = useRef<any>(null);
    const pageRef = useRef<any>(null);
    ref.current = true;

    async function fetchData() {
        return getNews({ page: nextPage }).then(res => {
            if (res) {
                setNextPage(+res.nextPage);
                pageRef.current = +res.nextPage;
                setTotalResults(res.totalResults);
                setNewsData((prevState: any) => {
                    if (!prevState) return res.results;
                    else return [...prevState, ...res.results];
                });
                setNumbPage(prev => prev + 1);
            }
        });
    }
    const scrolling = () => {
        if (window.innerHeight + window.pageYOffset >= document.documentElement.scrollHeight) {
            console.log('Прокрутка достигла конца страницы!');
            setFetching(true);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', scrolling);
        if (ref.current) {
            fetchData();
        }
        return () => {
            window.removeEventListener('scroll', scrolling);
            ref.current = false;
        };
    }, []);

    useEffect(() => {
        if (fetching) fetchData().finally(() => setFetching(false));
    }, [fetching]);
    return (
        <div className="flex flex-col gap-4 bg-indigo-100 max-w-[770px] m-0 mx-auto">
            <HeaderNews />
            <main className="px-2 cm:px-5">
                {newsData?.map(item => (
                    <div key={item.article_id} className="mb-12">
                        <p>{item.title}</p>
                        <p>{item.description}</p>
                    </div>
                ))}
                <Pagination numbPage={numbPage} nextPage={nextPage} totalResults={totalResults} />
            </main>
            <footer className=""></footer>
        </div>
    );
}
