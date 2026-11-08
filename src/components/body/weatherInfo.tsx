import DaysForcast from "./daysForcast";
import Time from "./time";
import Windspeedcom from "./windspeedcom";

function WeatherInfo() {
  return (
    <div className="grid gap-4">
      <div className="mt-10 grid grid-cols-12 gap-4">
        <div className="grid col-span-12 md:col-span-4">
          <Time />
        </div>
        <div className="col-span-12 md:col-span-8">
          <Windspeedcom />
        </div>
      </div>
      <DaysForcast />
    </div>
  );
}

export default WeatherInfo;
