import Header from "./header/header";
import WeatherInfo from "./body/weatherInfo";
import { WeatherContext } from "./weatherContext/contextProvider";
import { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
function Dispalyweather() {
  const context = useContext(WeatherContext);
  if (!context) {
    return (
      <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/30 backdrop-blur-md transition-all duration-300">
        <div className="flex flex-col items-center gap-4 p-8 rounded-3xl bg-white/10 border border-white/20 shadow-2xl backdrop-blur-xl">
          <FontAwesomeIcon
            icon={faSpinner}
            className="text-5xl text-blue-400 animate-spin"
          />
          <p className="text-white text-lg font-medium tracking-wide">
            Loading Weather Data...
          </p>
        </div>
      </div>
    );
  }
  return (
    <>
      <Header />
      <WeatherInfo />
    </>
  );
}

export default Dispalyweather;
