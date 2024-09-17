'use client';
import { useEffect, useState } from 'react';
import { getNews } from '@/shared/api/newsApi';
import { NewsData } from '@/shared/model/types';

export default function MainNews() {
    const [newsData, setNewsData] = useState<NewsData>();

    useEffect(() => {
        getNews({}).then(res => {
            if (res) setNewsData(res);
        });
    }, []);
    useEffect(() => {
        console.log(newsData);
    }, [newsData]);

    return (
        <div className="flex flex-col gap-4 bg-indigo-100 max-w-[770px] m-0 mx-auto">
            {/* <Header weatherData={weatherData} /> */}
            <main className="px-2 cm:px-5"></main>
            <footer className=""></footer>
        </div>
    );
}
