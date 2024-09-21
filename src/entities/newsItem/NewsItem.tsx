import { iconMarker } from '@/lib/images';
import { parseData } from '@/shared/lib';
import { useGetPlatform } from '@/shared/lib/hooks';
import { OnlyNewsData } from '@/shared/model/types';
import { Spinner } from '@/shared/ui';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export function NewsItem({ newsItemData }: { newsItemData: OnlyNewsData }) {
    const [isDownloaded, setIsDownloaded] = useState<boolean>(false);
    const [isFail, setIsFail] = useState<boolean>(false);
    const [, isMobile] = useGetPlatform();

    useEffect(() => {
        console.log(3333);
    }, [isDownloaded]);

    return (
        <li className=" flex flex-col items-center gap-1 border-b-2 border-blue-300 pb-4">
            <div className="relative">
                {isDownloaded ? (
                    ''
                ) : (
                    <div className=" absolute rounded-md top-0 left-0 z-20 bg-white opacity-65 w-full h-full flex justify-center items-center">
                        <Spinner />
                    </div>
                )}
                {isMobile ? (
                    <Link href={newsItemData.link}>
                        {!isFail && newsItemData.image_url ? (
                            <Image
                                src={newsItemData.image_url}
                                loading="lazy"
                                width={200}
                                height={140}
                                alt={newsItemData.country[0]}
                                onLoad={() => setIsDownloaded(true)}
                                onError={() => setIsFail(true)}
                                className=" relative z-10 rounded-md bm:w-[280px] bm:h-[160px]"
                            />
                        ) : (
                            <Image
                                src={iconMarker.not_image || ''}
                                width={200}
                                height={140}
                                alt={newsItemData.country[0]}
                                onLoad={() => setIsDownloaded(true)}
                                className=" relative z-10 rounded-md bm:w-[280px] bm:h-[160px]"
                            />
                        )}
                    </Link>
                ) : !isFail && newsItemData.image_url ? (
                    <Image
                        src={newsItemData.image_url}
                        loading="lazy"
                        width={200}
                        height={140}
                        alt={newsItemData.country[0]}
                        onLoad={() => setIsDownloaded(true)}
                        onError={() => setIsFail(true)}
                        className=" relative z-10 rounded-md w-[200px] h-[140px] bm:w-[280px] bm:h-[160px]"
                    />
                ) : (
                    <Image
                        src={iconMarker.not_image || ''}
                        width={200}
                        height={140}
                        alt={newsItemData.country[0]}
                        onLoad={() => setIsDownloaded(true)}
                        className=" relative z-10 rounded-md bm:w-[280px] bm:h-[160px]"
                    />
                )}
            </div>
            <div className=" text-[0.7rem] flex w-full">
                {parseData(Date.now(), ['time', 'day', 'month', 'year'])}
            </div>
            <h3 className="text-[1.2rem] leading-none fonts-semibold text-justify">
                {newsItemData.title}
            </h3>
            <p className=" leading-none text-justify">
                {!newsItemData.description
                    ? ''
                    : newsItemData.description.endsWith('Читать далее...')
                      ? newsItemData.description.split('Читать далее...')[0]
                      : newsItemData.description}{' '}
                <Link href={newsItemData.link} className=" text-blue-500 whitespace-nowrap">
                    Читать далее...
                </Link>
            </p>
        </li>
    );
}
