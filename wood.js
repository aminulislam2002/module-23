/**
 * fixed: per items wood requirements
 * 1. chair = 5 cft
 * 2. table = 15 cft
 * 3. bed = 50 cft
 *
 * vary: quantity
 */

function woodCalculator(chairQuantity, tableQuantity, bedQuantity) {
  const perChairWood = 5;
  const perTableWood = 15;
  const perBedWood = 50;

  const woodNeedForChair = chairQuantity * perChairWood;
  const woodNeedForTable = tableQuantity * perTableWood;
  const woodNeedForBed = bedQuantity * perBedWood;

  const totalNeedWood = woodNeedForChair + woodNeedForTable + woodNeedForBed;
  return totalNeedWood;
}

const totalNeedWood = woodCalculator(10, 2, 1);
console.log(totalNeedWood);
