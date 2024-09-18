import { iconMarker } from '@/lib/images';
import { parseData, parseUTC } from '@/shared/lib';
import { OnlyNewsData } from '@/shared/model/types';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export function NewsItem({ newsItemData }: { newsItemData: OnlyNewsData }) {
    useEffect(() => {}, []);

    return (
        <li className=" flex flex-col items-center gap-1">
            <p className="text-[0.8rem] fonts-semibold"></p>
        </li>
    );
}
