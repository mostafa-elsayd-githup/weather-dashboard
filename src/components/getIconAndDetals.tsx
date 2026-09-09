import {
  faSun,
  faCloudSun,
  faCloud,
  faSmog,
  faCloudRain,
  faSnowflake,
  faBolt,
  type IconDefinition,
} from "@fortawesome/free-solid-svg-icons";
type iconstype = {
  label:string,
  icon: IconDefinition;
  color:string
}
export const GetDetails = (cond: number):iconstype => {
  switch (cond) {
    case 0:
      return { label: "Sunny", icon: faSun, color: "text-[#f7ba21]" };
    case 1:
    case 2:
      return {
        label: "Partly Cloudy",
        icon: faCloudSun,
        color: "text-[#ffd166]",
      };
    case 3:
      return { label: "Cloudy", icon: faCloud, color: "text-[#a8b2d1]" };
    case 45:
    case 48:
      return { label: "Foggy", icon: faSmog, color: "text-[#8d99ae]" };
    case 51:
    case 53:
    case 61:
    case 63:
    case 65:
      return { label: "Rainy", icon: faCloudRain, color: "text-[#4cc9f0]" };
    case 71:
    case 73:
    case 75:
      return { label: "Snowy", icon: faSnowflake, color: "text-[#e0fbfc]" };
    case 95:
    case 96:
    case 99:
      return { label: "Thunderstorm", icon: faBolt, color: "text-[#f72585]" };
    default:
      return { label: "Clear", icon: faSun, color: "text-[#f7ba21]" };
  }
};
