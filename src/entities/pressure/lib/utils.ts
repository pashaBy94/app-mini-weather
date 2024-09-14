export function setPressure(pressure: number) {
    const startRad = 2.1;
    const endRad = 7.41;
    const deltaRad = (endRad - startRad) / 100;
    const lowPressure = 637.55;
    const heightPressure = 814.27;
    const deltaPressure = heightPressure - lowPressure;
    if (pressure < 850 || pressure > 1082) pressure = lowPressure;
    const currentPressure = (pressure / 1000) * 750.1;
    const currentDelta =
        startRad + ((currentPressure - lowPressure) / deltaPressure) * 100 * deltaRad;
    return { currentDelta, startRad, endRad };
}
export function drawPressure({
    canvas,
    startRad,
    endRad,
    currentDelta,
}: {
    canvas: HTMLCanvasElement;
    startRad: number;
    endRad: number;
    currentDelta: number;
}) {
    const ctx = canvas.getContext('2d');

    if (ctx) {
        ctx.lineWidth = 10;
        ctx.lineCap = 'round';
        ctx.strokeStyle = '#bad5eb';
        ctx.beginPath();
        ctx.arc(28, 28, 20, startRad, endRad);

        ctx.stroke();
        ctx.beginPath();
        ctx.strokeStyle = '#82c4fa';
        ctx.arc(28, 28, 20, startRad, currentDelta);
        ctx.stroke();
    }
}
