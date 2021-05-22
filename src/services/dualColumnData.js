import { getRatingAverage } from "./data";

export default function getDualColumnData(vaccine, setData) {
  if (vaccine == undefined || vaccine == "Choose vaccine") {
    return undefined;
  }

  getRatingAverage("male", (males) => {
    getRatingAverage("female", (females) => {
      var vacData = [];
      const yesyes = [
        "Chills",
        "Headache",
        "Nausea",
        "Pain at Point",
        "Fatigue",
        "Body Aches",
      ];
      for (const key of yesyes) {
        vacData.push({
          name: key,
          M: males[vaccine][key],
          F: females[vaccine][key],
        });
      }
      setData(vacData);
      console.log(vacData);
    });
  });
}

export function getFeverData(vaccine, setData) {
  if (vaccine == undefined || vaccine == "Choose vaccine") {
    return undefined;
  }
  getRatingAverage("male", (males) => {
    getRatingAverage("female", (females) => {
      var vacData = [];
      const yesyes = ["Fever"];
      for (const key of yesyes) {
        vacData.push({
          name: key,
          M: males[vaccine][key],
          F: females[vaccine][key],
        });
      }
      setData(vacData);
      console.log(vacData);
    });
  });
}
