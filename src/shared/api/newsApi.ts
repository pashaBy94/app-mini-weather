import { NewsData } from '../model/types';

export async function getNews({ page }: { page?: number }): Promise<NewsData | void> {
    const CATEGORY_EXCLUDE = 'politics';
    console.log('page from getNews:', page);

    // for test +++++++++++++++++++++++++++++++++
    // const res = await localStorage.getItem('news');
    // // console.log(res);

    // if (res) {
    //     console.log(JSON.parse(res).results);

    //     return await JSON.parse(res);
    // }
    // // // +++++++++++++++++++++++++++++++++++++++
    // else
    try {
        const response = await fetch(
            `https://newsdata.io/api/1/latest?apikey=${process.env.NEXT_PUBLIC_KEY_API_NEWS}&language=ru&category=!${CATEGORY_EXCLUDE}&country=by${page ? '&page=' + page : ''}`,
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
