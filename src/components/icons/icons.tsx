import { Moon, SunMedium } from "lucide-react";

export type IconKeys = keyof typeof icons;

type IconsType = {
  [key in IconKeys]: React.ElementType;
};

const icons = {
  sun: SunMedium,
  moon: Moon,
};

export const Icons: IconsType = icons;

export type ImagesKeys = keyof typeof images;

type ImagesType = {
  [key in ImagesKeys]: string;
};

const images = {
  logo: "/icons/icon.png",
};

export const Images: ImagesType = images;
