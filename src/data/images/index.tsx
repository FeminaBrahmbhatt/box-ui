export type CountryISO = "IN" | "BE" | "DE" | "FR" | "IT" | "NL" | "RU" | "US";

type image =  CountryISO | "logo";

// Development images
// const devImages: Record<image, string> = {
// logo: require("./logo.png"),
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
  logo: "https://media-hosting.imagekit.io/0ec1ca8b900e4e8b/logo.svg?Expires=1838348369&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=pCHsmoIdugCAGgRQuivkSFGORbcd0DMZjw-l9LQlxqEs77-19RpmN8TrGsMdYdKwLic46nDsKt44NPaRyu~mxJDKX7I0acu5x53nLqrjh-fs6s8VATv5eHASNeV83rLF3LXgXwMkXubchLy79xPaEHKlRlvJgcqrjZd3cE4C8QXC0KIG4dSjtkd0rECwtweKFuh1BrJIwcKIxiu5cEJUKgDvi4TUS22KVFh4c52c9CjBGa0ulrxxyZHMj2eXff-uQBkecyW-QYillwmsuz2i5PFf6Ud~9JZ2xYOBWwrq4VRSY-8p~c6Czqagg-w6gqyk-3xEM-f-cDfor~11~xwtTg__",
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
