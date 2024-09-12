import { Humdity, SpeedWind, SunTime } from '@/entities';
import { CurrentData } from '@/shared/model/types';

export function ParamsOfWeather({ currentWeather }: { currentWeather: CurrentData }) {
    return (
        <section>
            <h2 className={'mb-2'}>Погода сейчас</h2>
            <SpeedWind speed={currentWeather.wind_speed} deg={currentWeather.wind_deg} />
            <Humdity dew_point={currentWeather.dew_point} humidity={currentWeather.humidity} />
            <SunTime
                sunrise={currentWeather.sunrise}
                sunset={currentWeather.sunset}
                dt={currentWeather.dt}
            />
        </section>
    );
}
