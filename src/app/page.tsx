'use client';
import { useEffect, useRef, useState } from 'react';

export default function Home() {
    const rowHeight = 40;
    const visibleRows = 4;
    const data = [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 171, 18, 19, 20, 21, 22, 23, 24, 25,
        26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48,
        49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60,
    ];

    const rootRef = useRef(null);
    const [start, setStart] = useState(0);

    function getTopHeight() {
        return rowHeight * start;
    }

    function getBottomHeight() {
        return rowHeight * (data.length - (start + visibleRows + 1));
    }

    useEffect(() => {
        function onScroll(e: any) {
            setStart(
                Math.min(data.length - visibleRows - 1, Math.floor(e.target.scrollTop / rowHeight)),
            );
        }
        if (rootRef.current) (rootRef.current as HTMLElement).addEventListener('scroll', onScroll);

        return () => {
            if (rootRef.current)
                (rootRef.current as HTMLElement).removeEventListener('scroll', onScroll);
        };
    }, [data.length, visibleRows, rowHeight]);

    return (
        <div
            style={{ height: rowHeight * visibleRows + 1, overflow: 'auto' }}
            ref={rootRef}
            className=" w-40 my-64 m-auto"
        >
            <div style={{ height: getTopHeight() }} />
            <div>
                {data.slice(start, start + visibleRows + 1).map((row, ind) => (
                    <div style={{ height: rowHeight }} key={ind + start}>
                        {row}
                    </div>
                ))}
            </div>
            <div style={{ height: getBottomHeight() }} />
        </div>
    );
}
