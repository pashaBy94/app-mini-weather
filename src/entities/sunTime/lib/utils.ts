export function setSunny({ sunset, sunrise, dt, node }: { [key: string]: any }) {
    function timePassedtoPercent({ sunset, sunrise, dt }: { [key: string]: any }): number {
        const delta = sunset - sunrise;
        const onePercent = delta / 100;
        const howLong = dt - sunrise;
        const howLongPercent = Math.round(howLong / onePercent);
        return howLongPercent > 100 ? 100 : howLongPercent;
    }
    const perc = timePassedtoPercent({ sunset, sunrise, dt, node });
    const deltaBottom = perc <= 50 ? perc * 2 : (100 - perc) * 2;
    node.style.bottom = `${deltaBottom}%`;
    if (perc > 50) {
        node.style.right = `${100 - perc}%`;
    } else {
        node.style.left = `${perc}%`;
    }
}
