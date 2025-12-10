// src/data/countries.ts

export const countries = ["Nepal", "India", "Japan", "USA"];

export const countryDetails: Record<
  string,
  { label: string; options: string[] }
> = {
  Nepal: {
    label: "Select Province",
    options: [
      "Koshi",
      "Madhesh",
      "Bagmati",
      "Gandaki",
      "Lumbini",
      "Karnali",
      "Sudurpashchim",
    ],
  },

  India: {
    label: "Select State",
    options: ["Delhi", "Punjab", "Maharashtra", "Gujarat", "Rajasthan"],
  },

  Japan: {
    label: "Select Prefecture",
    options: ["Tokyo", "Osaka", "Kyoto", "Hokkaido", "Yokohama"],
  },

  USA: {
    label: "Select State",
    options: ["California", "Texas", "Florida", "New York", "Virginia"],
  },
};
