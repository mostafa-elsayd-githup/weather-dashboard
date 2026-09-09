import DaysForcast from "./daysForcast";
import Time from "./time";
import Windspeedcom from "./windspeedcom";

function WeatherInfo() {
  return (
      <div className=" flex flex-col gap-4 ">
    <div className="mt-20 flex flex-wrap gap-4">
      <Time />
      <Windspeedcom />
    </div>
      <DaysForcast />
      </div>
  );
}

export default WeatherInfo;
