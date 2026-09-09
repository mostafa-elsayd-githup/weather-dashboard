import { useEffect, useState } from "react";
import type { childrentype, LocationType, WeatherApiResponse } from "../../../types/types";
import { WeatherContext } from "./contextProvider";
import axios from "axios";
export type WeatherContextType = {
  location: LocationType;
  setLocation: React.Dispatch<React.SetStateAction<LocationType>>;
  weatherData: WeatherApiResponse | null;
  setWeatherData: React.Dispatch<
    React.SetStateAction<WeatherApiResponse | null>
  >;
};

export const WeatherContextProvider = ({ children }: childrentype) => {
  const [location, setLocation] = useState<LocationType>({
    country: "Egypt",
    lat: 30.06263,
    lon: 31.24967,
    name: "Cairo",
    results: [],
  });
  const [weatherData, setWeatherData] = useState<WeatherApiResponse | null>(
    null,
  );

  useEffect(() => {
    const getweather = async (): Promise<void> => {
      try {
        const res = await axios.get<WeatherApiResponse>(
          `https://api.open-meteo.com/v1/forecast?latitude=${location.lat}&longitude=${location.lon}&current=temperature_2m,relative_humidity_2m,apparent_temperature,weather_code,surface_pressure,wind_speed_10m&daily=weather_code,temperature_2m_max,sunrise,sunset&timezone=auto`,
        );

        setWeatherData(res.data);
      } catch (error) {
        console.error("Failed to fetch weather data", error);
      }
    };

    getweather();
  }, [location]);

  return (
    <WeatherContext.Provider
      value={{ location, setLocation, weatherData, setWeatherData }}
    >
      {children}
    </WeatherContext.Provider>
  );
};
