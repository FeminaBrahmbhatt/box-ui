export type CountryISO = "IN" | "BE" | "DE" | "FR" | "IT" | "NL" | "RU" | "US";

type image =  CountryISO ;

// Development images
// const devImages: Record<image, string> = {
//   logo: require("./logo.png"),
//   demoAvatar: require("./demoAvatar.png"),

//   IN: require("./in.svg"),
//   BE: require("./be.svg"),
//   DE: require("./de.svg"),
//   FR: require("./fr.svg"),
//   IT: require("./it.svg"),
//   NL: require("./nl.svg"),
//   RU: require("./ru.svg"),
//   US: require("./us.svg"),

// };

// Production images (CDN)
const prodImages: Record<image, string> = {
  IN: "https://kapowaz.github.io/circle-flags/flags/in.svg",
  BE: "https://kapowaz.github.io/circle-flags/flags/be.svg",
  DE: "https://kapowaz.github.io/circle-flags/flags/de.svg",
  FR: "https://kapowaz.github.io/circle-flags/flags/fr.svg",
  IT: "https://kapowaz.github.io/circle-flags/flags/it.svg",
  NL: "https://kapowaz.github.io/circle-flags/flags/nl.svg",
  RU: "https://kapowaz.github.io/circle-flags/flags/ru.svg",
  US: "https://kapowaz.github.io/circle-flags/flags/us.svg",
};

export const images = prodImages;
// export const images = process.env.NODE_ENV === "production" ? prodImages : devImages;
