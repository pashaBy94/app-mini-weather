export type Weather = Array<{
    id: number;
    main: string;
    description: string;
    icon: string;
}>;

export interface Message {
    new_chat_participant?: string;
    message?: { reply_markup: unknown };
    location?: { latitude: number; longitude: number };
    chat: { id: string; first_name: string };
    text: string;
}

export interface TimeData {
    dt: number;
    pressure: number;
    humidity: number;
    dew_point: number;
    uvi: number;
    clouds: number;
    wind_speed: number;
    wind_deg: number;
    wind_gust: number;
    weather: Weather;
}

export interface CurrentData extends TimeData {
    sunrise: number;
    sunset: number;
    temp: number;
    feels_like: number;
    visibility: number;
}

export interface HourlyData extends TimeData {
    temp: number;
    feels_like: number;
    visibility: number;
    pop: number;
}

export interface DailyData extends TimeData {
    sunrise: number;
    sunset: number;
    moonrise: number;
    moonset: number;
    moon_phase: number;
    summary: string;
    temp: {
        day: number;
        min: number;
        max: number;
        night: number;
        eve: number;
        morn: number;
    };
    feels_like: {
        day: number;
        night: number;
        eve: number;
        morn: number;
    };
    pop: number;
    rain: number;
}

export interface WeatherData {
    lat: number;
    lon: number;
    timezone: string;
    timezone_offset: number;
    current: CurrentData;
    hourly?: Array<HourlyData>;
    daily?: Array<DailyData>;
    minutely?: Array<{ dt: number; precipitation: number }>;
    alerts?: Array<{
        sender_name: string;
        event: string;
        start: number;
        end: number;
        description: string;
        tags: Array<unknown>;
    }>;
}
export type CoordCity = Array<{
    name: string;
    local_names: { [keys: string]: string };
    lat: number;
    lon: number;
    country: string;
    state: string;
}>;
export interface WeatherArgument {
    data?: string;
    coord?: { latitude: number; longitude: number };
    units?: string;
    exclude?: string;
}

export interface HourlyListComponent {
    hourlyData:
        | {
              [key: string]: string | number;
          }[]
        | undefined;
}
export interface HourlyItemComponent {
    hour: { [key: string]: string | number };
    ind: number;
}
