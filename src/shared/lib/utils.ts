export function parseData(mlsec: number) {
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
    const formattedTime = `${hours}:${minutes.toString().padStart(2, '0')} ${timeOfDay}`;

    return `${dayNumber} ${month} ${year}, ${dayName} | ${formattedTime}`;
}
export function parseUTC(mlsec: number): number {
    return mlsec * 1000;
}
