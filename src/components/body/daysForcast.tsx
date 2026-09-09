import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { WeatherContext } from "../weatherContext/contextProvider";
import { useContext } from "react";
import { GetDetails } from "../getIconAndDetals";
function DaysForcast() {
  const { weatherData } = useContext(WeatherContext);
  const timeData: string[] = weatherData?.daily.time ?? [];
  const degree: string = weatherData?.current_units.temperature_2m ?? "";
  return (
    <div className="p-5  text-white dark:bg-[var(--card-bg)] dark:text-[var(--text)] shadow-[11px_10px_15px_-8px_black] flex-1 rounded-3xl  border-[1px]  border-[#44434336]">
      <h1 className="pt-8">{timeData.length} Days Forecast : </h1>
      <div>
        {timeData.map((data: string, index: number) => {
          const Code: number = weatherData?.daily.weather_code[index] ?? 0;
          const { icon, color } = GetDetails(Code);
          const max_temperature: number =
            weatherData?.daily.temperature_2m_max[index] ?? 0;
          const date = new Date(data);
          const formattedDate = date.toLocaleDateString("en-US", {
            weekday: "short",
            day: "numeric",
            month: "short",
          });
          return (
            <div className="mt-10 flex justify-around text-2xl pb-5 not-last:border-b-[0.4px] dark:border-[var(--border)] ">
              <h2>
                <FontAwesomeIcon className={`text-4xl ${color}`} icon={icon} />
              </h2>
              <p className="">
                {max_temperature}
                {degree}{" "}
              </p>
              <span>{formattedDate}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default DaysForcast;
