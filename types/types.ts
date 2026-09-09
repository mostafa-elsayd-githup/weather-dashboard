import type { ReactNode } from "react";

export type childrentype = {
  children: ReactNode;
};
export type LocationType = {
  results: [];
  country: string;
  lat: number;
  lon: number;
  name: string;
};
export type WeatherApiResponse = {
  current: {
    time: string;
    temperature_2m: number;
    apparent_temperature: number;
    relative_humidity_2m: number;
    surface_pressure: number;
    weather_code: number;
    wind_speed_10m: number;
  };
  daily: {
    time: string[];
    weather_code: number[];
    temperature_2m_max: number[];
    sunrise: string[];
    sunset: string[];
  };
  current_units: {
    temperature_2m: string;
    wind_speed_10m: string;
    relative_humidity_2m: string;
    surface_pressure: string;
  };
};
