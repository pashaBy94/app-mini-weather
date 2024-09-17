import { NewsData } from '../model/types';

export async function getNews({ page }: { page?: number }): Promise<NewsData | void> {
    try {
        const response = await fetch(
            `https://newsdata.io/api/1/latest?apikey=${process.env.NEXT_PUBLIC_KEY_API_NEWS}&language=ru&country=by&${page ? 'page=' + page : ''}`,
        );
        const result = await response.json();
        return result;
    } catch (error) {
        console.log(error);
    }
}
