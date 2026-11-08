import {
  Cloud,
  CloudFog,
  CloudLightning,
  CloudRain,
  CloudSun,
  Snowflake,
  Sun,
  type LucideIcon,
} from "lucide-react";

type iconstype = {
  label: string;
  icon: LucideIcon;
  color: string;
};

export const GetDetails = (cond: number): iconstype => {
  switch (cond) {
    case 0:
      return { label: "Sunny", icon: Sun, color: "text-[#f7ba21]" };
    case 1:
    case 2:
      return {
        label: "Partly Cloudy",
        icon: CloudSun,
        color: "text-[#ffd166]",
      };
    case 3:
      return { label: "Cloudy", icon: Cloud, color: "text-[#a8b2d1]" };
    case 45:
    case 48:
      return { label: "Foggy", icon: CloudFog, color: "text-[#8d99ae]" };
    case 51:
    case 53:
    case 61:
    case 63:
    case 65:
      return { label: "Rainy", icon: CloudRain, color: "text-[#4cc9f0]" };
    case 71:
    case 73:
    case 75:
      return { label: "Snowy", icon: Snowflake, color: "text-[#e0fbfc]" };
    case 95:
    case 96:
    case 99:
      return {
        label: "Thunderstorm",
        icon: CloudLightning,
        color: "text-[#f72585]",
      };
    default:
      return { label: "Clear", icon: Sun, color: "text-[#f7ba21]" };
  }
};
