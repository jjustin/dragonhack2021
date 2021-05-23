import { getRatingAverage } from "./data";

export default function getDualColumnData(vaccine, males, females) {
  console.log(vaccine, males, females);
  if (vaccine === undefined || vaccine === "Choose vaccine") {
    return undefined;
  }

  var vacData = [];
  const yesyes = [
    "Chills",
    "Headache",
    "Nausea",
    "Pain at point",
    "Fatigue",
    "Body aches",
  ];
  for (const key of yesyes) {
    vacData.push({
      name: key,
      M: males[vaccine][key] | 0,
      F: females[vaccine][key] | 0,
    });
  }
  return vacData;
}

export function getFeverData(vaccine, males, females) {
  if (vaccine === undefined || vaccine === "Choose vaccine") {
    return undefined;
  }
  var vacData = [];
  const yesyes = ["Fever"];
  for (const key of yesyes) {
    vacData.push({
      name: key,
      M: males[vaccine][key] | 36,
      F: females[vaccine][key] | 36,
    });
  }
  console.log(vacData);
  return vacData;
}
