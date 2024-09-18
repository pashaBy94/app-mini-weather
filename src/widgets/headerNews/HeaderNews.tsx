'use client';
import { WeatherData } from '@/shared/model/types';
import { parseData, parseUTC } from '@/shared/lib';
import Image from 'next/image';
import { iconMarker } from '@/lib/images';

export function HeaderNews() {
    return (
        <header className=" flex justify-between am:gap-3 items-center shadow-[inset_0_-7px_5px_rgb(224,231,255)] bg-[url('/images/header.jpg')] bg-cover bg-center bg-no-repeat px-2 cm:px-7 py-2 font-semibold">
            <div className=" p-1 bg-slate-50 rounded-full">
                <Image alt="eee" src={iconMarker.iconNews} height={50} width={50} />
            </div>
            <div className=" relative overflow-hidden p-1 rounded-full am:rounded-xl ">
                <div className="absolute inset-0 bg-slate-200 blur-2xl"></div>
                <p className="relative flex flex-col cm:gap-3 cm:flex-row-reverse justify-end items-end">
                    <span className=" text-xl ">{parseData(Date.now(), ['time'])}</span>

                    <span className=" am:text-xs bm:text-base ">
                        {parseData(Date.now(), ['day', 'month']) +
                            ', ' +
                            parseData(Date.now(), ['week'])}
                    </span>
                </p>
            </div>
        </header>
    );
}
