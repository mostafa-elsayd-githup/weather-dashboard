import { useState } from "react";

function Themetoggle() {
  const [DarkTheme, setDarkTheme] = useState(false);
  const ToggleTheme = () => {
    setDarkTheme((e) => !e);
    document.documentElement.classList.toggle("dark");
  };
  return (
    <div className="mr-4 w-fit items-center max-[630px]:mt-6">
      <button onClick={ToggleTheme}>
        <span className="contents text-gray-400">
          {DarkTheme ? "Iight Mode" : "Dark Mode"}
          {"  "}
        </span>
        <input
          type="checkbox"
          defaultChecked
          className="toggle w-10 rounded-2xl mb-1"
        />
      </button>
    </div>
  );
}

export default Themetoggle;
