import { WeatherContext } from "../weatherContext/contextProvider";
import { useContext } from "react";
import { GetDetails } from "../getIconAndDetals";
import { useformateTableDate } from "../../hooks/useFormattedWeatherData";
function DaysForcast() {
  const { weatherData } = useContext(WeatherContext);
  const timeData: string[] = weatherData?.daily.time ?? [];
  const degree: string = weatherData?.current_units.temperature_2m ?? "";
  return (
    <div className="p-5 bg-(--card-bg) text-(--text) shadow-(--shadow) border border-(--border) rounded-3xl">
      <h1 className="w-fit text-xl md:text-2xl text-(--text-h)">
        Days Forecast {timeData.length}
      </h1>

      <table className="w-full table-fixed text-center mt-5">
        <tbody>
          {timeData.map((data: string, index: number) => {
            const Code: number = weatherData?.daily.weather_code[index] ?? 0;
            const { icon, color } = GetDetails(Code);
            const Icon = icon;
            const max_temperature: number =
              weatherData?.daily.temperature_2m_max[index] ?? 0;
            const { formattedDate } = useformateTableDate(data);
            return (
              <tr
                key={index}
                className="border-(--border) not-last-of-type:border-b hover:scale-[1.02] transition-all"
              >
                <td className="flex justify-center p-4">
                  <Icon size={40} className={`md:hidden ${color}`} />
                  {<Icon size={45} className={`hidden md:block ${color}`} />}
                </td>
                <td>
                  {max_temperature}
                  {degree}
                </td>
                <td>{formattedDate} </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default DaysForcast;
