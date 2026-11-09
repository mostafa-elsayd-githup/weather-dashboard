import { MoonIcon, SunIcon } from "lucide-react";
import { useEffect, useState } from "react";

function Themetoggle() {
  const [dark, setDark] = useState<boolean>(() => {
    const dark = localStorage.getItem("Theme");
    return dark === "dark";
  });
  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("Theme", dark ? "dark" : "light");
  }, [dark]);
  const ToggleTheme = () => {
    setDark((e) => !e);
  };
  return (
    <button onClick={ToggleTheme} className="cursor-pointer">
      {dark ? (
        <SunIcon size={25} className="text-(--sunrise)" />
      ) : (
        <MoonIcon size={25} className="text-[#8a97b6]" />
      )}
    </button>
  );
}

export default Themetoggle;
