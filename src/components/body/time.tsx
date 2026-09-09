import { useContext } from "react";
import { WeatherContext } from "../weatherContext/contextProvider";

function Time() {
  const context = useContext(WeatherContext);
  const { location, weatherData } = context;
  const currentDate = new Date(weatherData?.current.time || "");
  const time = currentDate.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "numeric",
  });
  const weekday = currentDate.toLocaleDateString("en-US", {
    weekday: "long",
  });
  const mounth = currentDate.toLocaleDateString("en-US", {
    day: "2-digit",
    month: "short",
  });

  return (
    <div className="p-5 flex flex-col justify-around border-0 shadow-[11px_10px_15px_-8px_black] flex-1 rounded-3xl border-[1px] border-[#44434336] dark:bg-[var(--card-bg)]">
      <div className="content-center h-full">
        <h3 className="font-black mb-4 text-3xl dark:text-[var(--text-h)]">{location.country}</h3>
        <span className="font-normal text-2xl dark:text-[var(--text)] ">{location.name}</span>
      </div>
      <div className="text-2xl content-end h-full">
        <p className="font-black! text-5xl">{time}</p>
        <span className="dark:text-[var(--text)]">{weekday}</span>
        <span>{mounth}</span>
      </div>
    </div>
  );
}

export default Time;
