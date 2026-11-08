import { useContext } from "react";
import { WeatherContext } from "../components/weatherContext/contextProvider";

export const useFormattedTime = () => {
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
  const month = currentDate.toLocaleDateString("en-US", {
    day: "2-digit",
    month: "short",
  });
  return { time, weekday, month, location };
};
