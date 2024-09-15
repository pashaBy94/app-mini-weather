import { Humdity, Pressure, SpeedWind, SunTime, Uvi } from '@/entities';
import { CurrentData } from '@/shared/model/types';

export function ParamsOfWeather({ currentWeather }: { currentWeather: CurrentData }) {
    return (
        <section>
            <h2 className={'mb-2 am:text-[.9rem] bm:text-base'}>Погода сейчас</h2>
            <div className=" dm:flex dm:gap-3 dm:justify-between">
                <div className=" flex gap-3 mb-3 w-full">
                    <SpeedWind speed={currentWeather.wind_speed} deg={currentWeather.wind_deg} />
                    <Humdity
                        dew_point={currentWeather.dew_point}
                        humidity={currentWeather.humidity}
                    />
                </div>
                <div className=" flex gap-3 mb-3 w-full">
                    <Pressure pressure={currentWeather.pressure} />
                    <Uvi uvi={currentWeather.uvi} />
                </div>
            </div>
            <SunTime
                sunrise={currentWeather.sunrise}
                sunset={currentWeather.sunset}
                dt={currentWeather.dt}
            />
        </section>
    );
}
