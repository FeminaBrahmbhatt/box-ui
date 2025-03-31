
export type CountryISO = "BE" | "DE" | "FR" | "IT" | "NL" | "RU" | "US";

type image = CountryISO;

// Development images
const devImages: Record<string, image> = {
  NL: require("./nl.svg")
};

// Production images (CDN)
// const prodImages: Record<string, image> = {
//   NL: "https://res.cloudinary.com/tailwindcss/image/upload/v1635279277/nl_tpy2ab.svg",
// };

export const assets = devImages;