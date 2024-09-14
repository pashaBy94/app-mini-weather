import { useEffect, useRef } from 'react';

export function Humdity({ humidity, dew_point }: { humidity: number; dew_point: number }) {
    const ref = useRef(null);
    useEffect(() => {
        (ref.current as unknown as HTMLElement).style.height = (56 * humidity) / 100 + 'px';
    }, []);
    return (
        <div className="w-full bg-white rounded-xl p-2 flex flex-col gap-2 ">
            <h3 className=" text-[.8rem]">Влажность</h3>
            <div className=" flex gap-2">
                <p className=" font-semibold flex flex-col gap-1">
                    <span className=" text-gray-600 text-[1.1rem]">{humidity} %</span>
                    <span className=" text-gray-600 text-[.8rem]">
                        Точка росы: {dew_point}&deg;
                    </span>
                </p>
                <div>
                    <div className=" relative h-14 w-5 bg-gradient-to-r from-indigo-200  via-sky-200 to-emerald-200 grad rounded-full overflow-hidden">
                        <div
                            ref={ref}
                            className=" absolute bottom-0 left-0 bg-gradient-to-r from-indigo-500  via-sky-500 to-emerald-500 w-5"
                        ></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
