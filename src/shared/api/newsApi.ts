import { NewsData } from '../model/types';

// const CATEGORY = '&category=education,health,science,technology,world';
const CATEGORY = '';

export async function getNews({
    page,
}: {
    page?: number | string | null;
}): Promise<NewsData | void> {
    console.log('page from getNews:', page);

    // for test +++++++++++++++++++++++++++++++++
    // const res = await localStorage.getItem('news');

    // if (res) {
    //     const result = await JSON.parse(res);
    //     result.results.forEach((el: any) => {
    //         el.article_id = Math.random();
    //     });
    //     console.log(result.results);

    //     return await result;
    // }
    // +++++++++++++++++++++++++++++++++++++++
    // else
    try {
        const response = await fetch(
            `https://newsdata.io/api/1/latest?apikey=${process.env.NEXT_PUBLIC_KEY_API_NEWS}&language=ru${CATEGORY}&country=by${page ? '&page=' + page : ''}`,
        );
        const result = await response.json();
        await localStorage.setItem('news', JSON.stringify(result));
        if (result.status === 'error') throw Error('I am sory.');
        console.log(result);
        const newsArray = result.results || [];
        newsArray.length -= 1;
        const data = { ...result, results: newsArray };
        return data;
    } catch (error) {
        console.log(error);
    }
}
