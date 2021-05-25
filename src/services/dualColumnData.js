export default function getDualColumnData(vaccine, males, females) {
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
      M: Number.isNaN(males[vaccine][key]) ? 0 : round(males[vaccine][key]),
      F: Number.isNaN(females[vaccine][key]) ? 0 : round(females[vaccine][key]),
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
      M: Number.isNaN(males[vaccine][key]) ? 36 : round(males[vaccine][key]),
      F: Number.isNaN(females[vaccine][key])
        ? 36
        : round(females[vaccine][key]),
    });
  }
  return vacData;
}

function round(num) {
  var m = Number((Math.abs(num) * 10).toPrecision(15));
  return (Math.round(m) / 10) * Math.sign(num);
}
