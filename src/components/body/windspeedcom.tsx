import { GetDetails } from "../getIconAndDetals";
import { useFormattedWeatherData } from "../../hooks/useFormattedWeatherData";
import { Gauge, Sunrise, Sunset, WavesHorizontal, Wind } from "lucide-react";
function Windspeedcom() {
  const {
    Actual_Temperature,
    Feels_Like_Temperature,
    Humidity_level,
    Pressure,
    SunSet,
    Sunrice,
    Wind_Speed,
    Code,
  } = useFormattedWeatherData();
  const { color, icon, label } = GetDetails(Code);
  const WeatherIcon = icon;

  return (
    <div className="p-4 flex flex-col md:flex-row justify-around gap-4 bg-(--card-bg) rounded-3xl border border-(--border) shadow-(--shadow)">
      <div className="flex gap-2 justify-around md:flex-col">
        <div>
          <h1 className="text-xl md:text-4xl">{Actual_Temperature}</h1>
          <span className="text-xs md:text-lg text-(--muted)">
            feels : {Feels_Like_Temperature}
          </span>
        </div>
        <div className="flex gap-8 items-center md:flex-col">
          <div className="flex flex-col items-center gap-1">
            <Sunrise size={25} className="text-(--sunrise) md:hidden" />
            <Sunrise size={35} className="text-(--sunrise) hidden md:block" />
            <span>{Sunrice}</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <Sunset size={25} className="text-(--sunset) md:hidden" />
            <Sunset size={35} className="text-(--sunset) hidden md:block" />
            <span>{SunSet}</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-2 items-center md:justify-center">
        <span>
          <WeatherIcon size={80} className={`${color}`} />
        </span>

        <span className=" text-sm md:text-lg">{label}</span>
      </div>
      <div className="flex justify-around md:gap-4 md:flex-col">
        <div className="flex flex-col items-center ">
          <WavesHorizontal
            size={25}
            className="mb-1.5 text-(--humidity) md:hidden"
          />

          <WavesHorizontal
            size={35}
            className="mb-1.5 text-(--humidity) hidden md:block"
          />
          <span>{Humidity_level}</span>
          <p className="text-xs text-(--muted)">Humidity</p>
        </div>
        <div className="flex flex-col items-center ">
          <Wind size={25} className="mb-1.5 md:hidden text-(--windSpeed)" />
          <Wind size={35} className="mb-1.5 text-(--windSpeed) hidden md:block" />
          <span>{Wind_Speed}</span>
          <p className="text-xs text-(--muted)">Wind Speed</p>
        </div>
        <div className="flex flex-col items-center ">
          <Gauge size={25} className="mb-1.5 text-(--pressure) md:hidden" />
          <Gauge
            size={35}
            className="mb-1.5 text-(--pressure) hidden md:block"
          />
          <span>{Pressure}</span>
          <p className="text-xs text-(--muted)">Pressure</p>
        </div>
      </div>
    </div>
  );
}

export default Windspeedcom;
