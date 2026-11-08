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
    <div className="p-4 flex flex-col md:flex-row justify-around gap-4 bg-(--bg) rounded-3xl border border-[#44434336] shadow-[11px_10px_15px_-8px_black]">
      <div className="flex gap-2 justify-around md:flex-col">
        <div>
          <h1 className="text-xl md:text-4xl">{Actual_Temperature}</h1>
          <p className="flex items-center gap-1">
            <span className="text-xs md:text-lg"> feels :</span>
            <span className="text-sm font-black">{Feels_Like_Temperature}</span>
          </p>
        </div>
        <div className="flex gap-8 items-center md:flex-col">
          <div className="flex flex-col items-center gap-1">
            <Sunrise size={25} />
            <span>{Sunrice}</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <Sunset size={25} />
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
          <div className="md:hidden">
            <WavesHorizontal size={25} className="mb-1.5" />
          </div>
          <div className="hidden md:block">
            <WavesHorizontal size={35} className="mb-1.5" />
          </div>
          <span>{Humidity_level}</span>
          <p className="text-xs">Humidity</p>
        </div>
        <div className="flex flex-col items-center ">
          <div className="md:hidden">
            <Wind size={25} className="mb-1.5" />
          </div>
          <div className="hidden md:block">
            <Wind size={35} className="mb-1.5" />
          </div>
          <span>{Wind_Speed}</span>
          <p className="text-xs">Wind Speed</p>
        </div>
        <div className="flex flex-col items-center ">
          <div className="md:hidden">
            <Gauge size={25} className="mb-1.5" />
          </div>
          <div className="hidden md:block">
            <Gauge size={35} className="mb-1.5" />
          </div>
          <span>{Pressure}</span>
          <p className="text-xs">Pressure</p>
        </div>
      </div>
    </div>
  );
}

export default Windspeedcom;
