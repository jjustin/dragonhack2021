import { getCounts } from "./data";

export default function getRadarData(vaccine, setData) {
  if (vaccine == undefined || vaccine == "Choose vaccine") {
    return undefined;
  }
  getCounts("male", (males) => {
    getCounts("female", (females) => {
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
      setData(vacData);
    });
  });
}
