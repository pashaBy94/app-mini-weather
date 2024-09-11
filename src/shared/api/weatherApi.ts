import { CoordCity, WeatherArgument, WeatherData } from '../model/types';

export async function getWeather({
    data,
    coord,
    units,
    exclude,
}: WeatherArgument): Promise<WeatherData | void> {
    try {
        let response;
        if (coord) {
            response = await fetch(
                `https://api.openweathermap.org/data/3.0/onecall?lat=${coord.latitude}&lon=${coord.longitude}&lang=ru&units=${units}&exclude=${exclude}&appid=${process.env.NEXT_PUBLIC_KEY_API_WEATHER}`,
            );
        }
        if (data) {
            const parse = await fetch(
                `https://api.openweathermap.org/geo/1.0/direct?q=${data},%20BY&limit=5&appid=${process.env.NEXT_PUBLIC_KEY_API_WEATHER}`,
            );
            const resultCoord = (await parse.json()) as CoordCity;
            const coord = {
                latitude: resultCoord[0].lat,
                longitude: resultCoord[0].lon,
            };
            response = await fetch(
                `https://api.openweathermap.org/data/3.0/onecall?lat=${coord.latitude}&lon=${coord.longitude}&units=metric&exclude=${exclude}&appid=${process.env.NEXT_PUBLIC_KEY_API_WEATHER}`,
            );
        }
        if (response) {
            const result = (await response.json()) as WeatherData;
            return result;
        }
        return;
    } catch (error) {
        console.log(error);
    }
}

function setConfigWeather() {}
