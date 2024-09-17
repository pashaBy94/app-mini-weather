import MainNews from '@/pagesTamplates/MainNews';
import MainWeather from '@/pagesTamplates/MainWeather';

export default function Home({ params }: { params: { slug: string } }) {
    console.log(params);
    if (params.slug === 'news') {
        return <MainNews />;
    }
    if (params.slug === 'weather') {
        return <MainWeather />;
    }
    // return <div>{params.slug}</div>;
}
