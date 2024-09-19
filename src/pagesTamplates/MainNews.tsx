'use client';
import { useEffect, useRef, useState } from 'react';
import { getNews } from '@/shared/api/newsApi';
import { OnlyNewsData } from '@/shared/model/types';
import { HeaderNews } from '@/widgets';
import { NewsList } from '@/widgets/newsList/NewsList';
import { LoaderPages } from '@/shared/ui';

export default function MainNews() {
    const [newsData, setNewsData] = useState<Array<OnlyNewsData>>();
    const [nextPage, setNextPage] = useState<string | null | number>(0);
    const [fetching, setFetching] = useState<boolean>(false);
    const ref = useRef<unknown>(null);
    ref.current = true;

    async function fetchData() {
        console.log(nextPage);

        if (nextPage === null) return;
        else
            return getNews({ page: nextPage }).then(res => {
                if (res) {
                    setNextPage(res.nextPage);
                    setNewsData((prevState: Array<OnlyNewsData> | undefined) => {
                        if (!prevState) return res.results;
                        else return [...prevState, ...res.results];
                    });
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
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        if (fetching) fetchData().finally(() => setFetching(false));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [fetching]);
    return (
        <div className="flex flex-col gap-4 bg-indigo-100 max-w-[770px] m-0 mx-auto">
            <HeaderNews />
            <main className="px-2 bm:px-5">
                <NewsList newsData={newsData} />
                {fetching && <LoaderPages />}
            </main>
            <footer className=""></footer>
        </div>
    );
}
