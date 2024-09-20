import { parseData, parseUTC } from '@/shared/lib';

export function drawSunny({ sunset, sunrise, dt, node }: { [key: string]: any }) {
    function timePassedtoPercent({ sunset, sunrise, dt }: { [key: string]: any }): number {
        const delta = sunset - sunrise;
        const onePercent = delta / 100;
        const howLong = dt - sunrise;
        const howLongPercent = Math.round(howLong / onePercent);
        return howLongPercent > 100 ? 100 : howLongPercent;
    }
    const perc = Math.max(0, timePassedtoPercent({ sunset, sunrise, dt }));
    console.log(perc);

    if (node) {
        const ctx = node.getContext('2d');
        const centerCircleX = 110;
        const centerCircleY = 130;
        const radius = 90;

        const startRad = 3.4906;
        const endRad = 5.934;
        const positioRad = startRad + (perc * (endRad - startRad)) / 100;
        const coordTextX = centerCircleX + radius * Math.cos(positioRad) - 17;
        const coordTextY = centerCircleY + radius * Math.sin(positioRad) - 22;

        if (ctx) {
            ctx.lineWidth = 2;
            ctx.lineCap = 'round';
            ctx.strokeStyle = '#bad5eb';
            ctx.beginPath();
            ctx.arc(centerCircleX, centerCircleY, radius, startRad - 0.2, endRad + 0.2);

            ctx.font = '13px Arial';
            ctx.fillText(`${parseData(parseUTC(sunrise), ['time'])}`, 12, 134);
            ctx.fillText(`${parseData(parseUTC(sunset), ['time'])}`, 182, 134);
            ctx.stroke();
            ctx.beginPath();
            ctx.lineWidth = 40;
            ctx.strokeStyle = 'yellow';
            ctx.arc(centerCircleX, centerCircleY, radius, positioRad, positioRad);
            ctx.stroke();
            ctx.fillText(`${parseData(parseUTC(dt), ['time'])}`, coordTextX, coordTextY);
        }
    }
}
