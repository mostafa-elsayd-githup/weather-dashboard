import { createContext } from "react";
import type { WeatherContextType } from "./weathercontext";
export const WeatherContext = createContext<WeatherContextType>(
  {} as WeatherContextType,
);
