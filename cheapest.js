const phones = [
  { name: "iphone", camera: 12, storage: 256, price: 110000, color: "black" },
  { name: "samsung", camera: 12, storage: 256, price: 100000, color: "black" },
  { name: "vivo", camera: 50, storage: 128, price: 90000, color: "black" },
  { name: "xaomi", camera: 48, storage: 128, price: 70000, color: "black" },
  { name: "realme", camera: 12, storage: 64, price: 50000, color: "black" },
  { name: "oppo", camera: 10, storage: 64, price: 30000, color: "black" },
  { name: "walton", camera: 5, storage: 32, price: 20000, color: "black" },
];

function cheapestPhone(phones) {
  let cheapest = phones[0];
  for (let i = 0; i < phones.length; i++) {
    const phone = phones[i];
    if (phone.price < cheapest.price) {
      cheapest = phone;
    }
  }
  return cheapest;
}

const myChoice = cheapestPhone(phones);
console.log(myChoice);
