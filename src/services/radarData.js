export default function getRadarData(vaccine, males, females) {
  if (vaccine === undefined || vaccine === "Choose vaccine") {
    return undefined;
  }
  var vacData = [];
  for (const key in males[vaccine]) {
    vacData.push({
      subject: key,
      M: males[vaccine][key] / males[vaccine]["total"],
      F: females[vaccine][key] / females[vaccine]["total"],
    });
  }
  vacData.pop("total");
  vacData.pop("none_of_the_above");
  return vacData;
}
