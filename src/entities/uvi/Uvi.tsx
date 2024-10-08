import { useEffect, useRef } from 'react';

export function Uvi({ uvi }: { uvi: number }) {
    const ref = useRef(null);
    useEffect(() => {
        (ref.current as unknown as HTMLElement).style.height = (48 * uvi) / 11 + 'px';
    }, []);
    return (
        <div className="bg-white rounded-xl p-2 bm:p-3 cm:p-4 dm:p-2 flex flex-col gap-2 w-full ">
            <h3 className=" text-[.8rem]  bm:text-[.9rem]">УФ-индекс</h3>
            <div className=" flex gap-2 abm:gap-3 bm:gap-12 dm:gap-3">
                <p className=" font-semibold flex flex-col">
                    <span className=" text-gray-600 text-[1.1rem]">{uvi}</span>
                    <span className=" text-gray-600 am:text-[.6rem] bm:text-[.9rem] dm:text-[.8rem]">
                        балла
                    </span>
                </p>
                <div className=" relative h-12 w-12 bg-gradient-to-r from-yellow-50  via-yellow-100 to-yellow-50 grad rounded-full overflow-hidden">
                    <div
                        ref={ref}
                        className=" absolute bottom-0 left-0 bg-gradient-to-r from-orange-600  via-orange-500 to-orange-300 w-12"
                    ></div>
                </div>{' '}
            </div>
        </div>
    );
}
