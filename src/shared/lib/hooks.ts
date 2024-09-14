import { useEffect, useState } from 'react';

export function useGetPlatform() {
    const [platform, setPlatform] = useState<string>();
    const [isMobile, setIsMobile] = useState<boolean>(false);

    useEffect(() => {
        const userDeviceArray: { device: string; platform: RegExp }[] = [
            { device: 'Android', platform: /Android/ },
            { device: 'iPhone', platform: /iPhone/ },
            { device: 'iPad', platform: /iPad/ },
            { device: 'Symbian', platform: /Symbian/ },
            { device: 'Windows Phone', platform: /Windows Phone/ },
            { device: 'Tablet OS', platform: /Tablet OS/ },
            { device: 'Linux', platform: /Linux/ },
            { device: 'Windows', platform: /Windows NT/ },
            { device: 'Macintosh', platform: /Macintosh/ },
        ];
        function getPlatform() {
            const data = window.navigator.userAgent;
            for (const i in userDeviceArray) {
                if (userDeviceArray[i].platform.test(data)) {
                    setPlatform(userDeviceArray[i].device);
                    return;
                }
            }
            setPlatform('unknown');
        }
        getPlatform();
    }, []);
    useEffect(() => {
        if (
            platform &&
            ['Android', 'iPhone', 'iPad', 'Symbian', 'Windows Phone', 'Tablet OS'].includes(
                platform,
            )
        )
            setIsMobile(true);
        else setIsMobile(false);
    }, [platform]);
    console.log(isMobile, platform);

    return [platform, isMobile];
}
