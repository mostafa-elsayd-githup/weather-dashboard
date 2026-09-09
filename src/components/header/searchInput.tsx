import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useContext, useState } from "react";
import { WeatherContext } from "../weatherContext/contextProvider";
function SearchInput() {
  const { setLocation } = useContext(WeatherContext);
  const [city, setcity] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && city.trim() !== "") {
      const GetCity = async (): Promise<void> => {
        try {
          setErrorMessage(null);
          const data = await axios.get(
            `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1&language=en&format=json`,
          );
          if (data.data.results && data.data.results.length > 0) {
            setLocation({
              results: [],
              country: data.data.results[0].country || "",
              lat: data.data.results[0].latitude,
              lon: data.data.results[0].longitude,
              name: data.data.results[0].name,
            });
            setcity("");
          } else {
            setErrorMessage("No location found. Please check the spelling");
          }
        } catch (error) {
          console.error("fetching error", error);
        }
      };
      GetCity();
    }
  };

  return (
  <div className="flex-6 w-full m-auto mr-4 flex flex-col gap-1 relative">
    <div className="relative text-start shadow-2xl shadow-black w-full rounded-3xl border-[1px] border-[#4443432c]">
      <input
        onKeyDown={handleSearch}
        onChange={(e) => {
          setcity(e.target.value);
          if (errorMessage) setErrorMessage(null);
        }}
        className="w-full h-10 pl-15 bg-transparent text-[var(--text-h)] placeholder:text-[var(--text)] placeholder:text-[1rem] placeholder:opacity-30 focus:outline-0"
        type="search"
        value={city}
        placeholder="Search for your preferred city..."
      />
      <FontAwesomeIcon
        className="absolute left-4 top-1/2 -translate-y-1/2 text-2xl"
        icon={faMagnifyingGlass}
      />
    </div>

    {errorMessage && (
      <p className="absolute -bottom-6 left-4 text-red-500 text-xs font-medium transition-all">
        {errorMessage}
      </p>
    )}
  </div>
);
}

export default SearchInput;
