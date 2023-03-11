const names = [
  "Aminul",
  "Islam",
  "Emon",
  "Tamima",
  "Ema",
  "Aminul",
  "Mithun",
  "Emon",
  "Ema",
  "Miraj",
  "Aminul",
  "Emon",
  "Tamima",
  "Aminul",
];

function removeDuplicateName(names) {
  const unique = [];
  for (let i = 0; i < names.length; i++) {
    const name = names[i];
    if (unique.includes(name) === false) {
      unique.push(name);
    }
  }
  return unique;
}
const uniqueNames = removeDuplicateName(names);
console.log(uniqueNames); // return ['Aminul', 'Islam', 'Emon', 'Tamima', 'Ema', 'Mithun', 'Miraj']
