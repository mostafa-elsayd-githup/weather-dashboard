import { useContext } from "react";
import { WeatherContext } from "../components/weatherContext/contextProvider";

export const useFormattedWeatherData = () => {
  const { weatherData } = useContext(WeatherContext);
  const SunRiceTime = new Date(weatherData?.daily?.sunrise[0] || "");
  const SunSetTime = new Date(weatherData?.daily?.sunset[0] || "");
  const Actual_Temperature = `${weatherData?.current?.temperature_2m}${weatherData?.current_units?.temperature_2m}`;
  const Feels_Like_Temperature = `${weatherData?.current?.apparent_temperature} ${weatherData?.current_units?.temperature_2m}`;
  const Humidity_level = `${weatherData?.current?.relative_humidity_2m}${weatherData?.current_units?.relative_humidity_2m}`;
  const Wind_Speed = `${weatherData?.current.wind_speed_10m}${weatherData?.current_units?.wind_speed_10m}`;
  const Pressure = `${weatherData?.current.surface_pressure}${weatherData?.current_units?.surface_pressure}`;
  const Code = weatherData?.current?.weather_code ?? 0;
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

  return {
    Actual_Temperature,
    Feels_Like_Temperature,
    Humidity_level,
    Wind_Speed,
    Pressure,
    Code,
    Sunrice,
    SunSet,
  };
};
export const useformateTableDate = (data: string) => {
  const date = new Date(data);
  const formattedDate = date.toLocaleDateString("en-US", {
    weekday: "short",
    day: "numeric",
    month: "short",
  });
  return { formattedDate };
};
