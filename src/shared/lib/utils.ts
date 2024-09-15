export function parseData(
    mlsec: number,
    option: Array<'day' | 'month' | 'year' | 'week' | 'time' | 'timeOfDay' | 'minute'>,
) {
    const date: Date = new Date(mlsec);
    const months = [
        'января',
        'февраля',
        'марта',
        'апреля',
        'мая',
        'июня',
        'июля',
        'августа',
        'сентября',
        'октября',
        'ноября',
        'декабря',
    ];
    const days = [
        'воскресенье',
        'понедельник',
        'вторник',
        'среда',
        'четверг',
        'пятница',
        'суббота',
    ];

    const year = date.getFullYear();
    const month = months[date.getMonth()];
    const dayNumber = date.getDate();
    const dayName = days[date.getDay()];
    const hours = date.getHours();
    const minutes = date.getMinutes();

    let timeOfDay;
    if (hours >= 0 && hours < 6) {
        timeOfDay = 'ночи';
    } else if (hours >= 6 && hours < 12) {
        timeOfDay = 'утра';
    } else if (hours >= 12 && hours < 18) {
        timeOfDay = 'дня';
    } else {
        timeOfDay = 'вечера';
    }
    const formattedTime = `${hours}:${minutes.toString().padStart(2, '0')} ${option.includes('timeOfDay') ? timeOfDay : ''}`;

    return `${option.includes('day') ? dayNumber : ''} ${option.includes('month') ? month : ''} ${option.includes('year') ? year : ''}${option.includes('week') ? ' ' + dayName : ''} ${option.includes('time') ? formattedTime : ''}`.trim();
}
export function parseUTC(mlsec: number): number {
    return mlsec * 1000;
}

export function parseParams(search: string) {
    const data: Record<string, string> = { city: 'Minsk' };
    if (search) {
        const params = search.split('?')[1].split('&');
        params.forEach(par => {
            const res: string[] = par.split('=');
            data[res[0]] = res[1];
        });
    }
    return data;
}
