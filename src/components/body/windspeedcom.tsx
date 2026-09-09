import { faGauge, faWater, faWind } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { WeatherContext } from "../weatherContext/contextProvider";
import { GetDetails } from "../getIconAndDetals";
function Windspeedcom() {
  const { weatherData } = useContext(WeatherContext);
  const SunRiceTime = new Date(weatherData?.daily?.sunrise[0] || "");
  const SunSetTime = new Date(weatherData?.daily?.sunset[0] || "");
  const Actual_Temperature = `${weatherData?.current?.temperature_2m}${weatherData?.current_units?.temperature_2m}`;
  const Feels_Like_Temperature = `${weatherData?.current?.apparent_temperature} ${weatherData?.current_units?.temperature_2m}`;
  const Humidity_level = `${weatherData?.current?.relative_humidity_2m}${weatherData?.current_units?.relative_humidity_2m}`;
  const Wind_Speed = `${weatherData?.current.wind_speed_10m}${weatherData?.current_units?.wind_speed_10m}`;
  const Pressure = `${weatherData?.current.surface_pressure}${weatherData?.current_units?.surface_pressure}`;
  const Code = weatherData?.current?.weather_code ?? 0;
  const { color, icon, label } = GetDetails(Code);

  const Sunrice =
    SunRiceTime?.toLocaleString("en-US", {
      hour: "numeric",
      minute: "2-digit",
    }) || "";
  const SunSet =
    SunSetTime?.toLocaleString("en-US", {
      hour: "numeric",
      minute: "2-digit",
    }) || "";
  return (
    <div className="p-6 flex justify-around flex-2 dark:bg-[var(--bg)]  rounded-3xl border-[1px]  border-[#44434336] shadow-[11px_10px_15px_-8px_black]">
      <div className="flex justify-around flex-col flex-1">
        <div>
          <h1 className="text-5xl font-extrabold! mb-1">
            {Actual_Temperature}
          </h1>
          <p>
            feels like{" "}
            <span className="text-2xl font-black!">
              {Feels_Like_Temperature}
            </span>
          </p>
        </div>
        <div className="text-3xl">
          <div className="mb-2">
            <h3 className="text-2xl dark:text-[var(--text-h)]">SunRise</h3>
            <span>{Sunrice}</span>
          </div>
          <div className="mb-2">
            <h3 className="text-2xl dark:text-[var(--text-h)]">Sunset</h3>
            <span>{SunSet}</span>
          </div>
        </div>
      </div>

      <div className="flex-1 flex flex-col justify-around ">
        <h1 className="mb-6">
          <FontAwesomeIcon className={`text-9xl ${color}`} icon={icon} />
        </h1>
        <span className="text-2xl">{label}</span>
      </div>
      <div className="flex-1">
        <div className="mb-4">
          <h1 className="mb-2">
            <FontAwesomeIcon icon={faWater} />
          </h1>
          <span>{Humidity_level}</span>
          <p>Humidity</p>
        </div>
        <div className="mb-4">
          <h1 className="mb-2">
            <FontAwesomeIcon icon={faWind} />{" "}
          </h1>

          <span>{Wind_Speed}</span>
          <p>Wind Speed</p>
        </div>
        <div className="mb-4">
          <h1 className="mb-2">
            <FontAwesomeIcon icon={faGauge} />{" "}
          </h1>

          <span>{Pressure}</span>
          <p>Pressure</p>
        </div>
      </div>
    </div>
  );
}

export default Windspeedcom;
