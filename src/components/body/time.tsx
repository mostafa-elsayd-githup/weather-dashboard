import { useFormattedTime } from "../../hooks/useFormattedTime";

function Time() {
  const { time, month, location, weekday } = useFormattedTime();
  return (
    <div className="p-5 flex flex-col gap-2 md:gap-10 justify-center shadow-(--shadow) rounded-3xl border border-(--border) bg-(--card-bg)">
      <div>
        <h3 className="font-black mb-4 text-3xl text-(--text-h)">
          {location.country}
        </h3>
        <span className="text-2xl text-(--muted)">{location.name}</span>
      </div>
      <div>
        <p className="text-3xl font-bold md:text-4xl">{time}</p>
        <span className="text-(--muted)">
          {weekday} - {month}
        </span>
      </div>
    </div>
  );
}

export default Time;
