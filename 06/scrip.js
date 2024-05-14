let value1 = "10";
let value2 = "20";
value1 = 30;
value1 = 40;
const firstName = "Java";
let result = value1 + value2 + " :" + firstName;
console.log({ result });

const sum1 = (value3, value4) => {
  return value3 + value4;
};
console.log("sum1 :", sum1(10, 20));

const value5 = 10;
const value6 = 20;
const sum2 = () => {
  return value5 + value6;
};
console.log("sum2 :", sum2());

function sum3() {
  return value5 + value6;
}
console.log("sum3 :", sum3());

const food = {
  name: "Pizza",
  price: 50000,
};
console.log("Food :", food.name);
console.log("price :", food.price);

const dataArray = [
  {
    name: "Pizza",
    price: 50000,
  },
  {
    name: "Grilled chicken",
    price: 35000,
  },
  {
    name: "Chicken soup",
    price: 20000,
  },
  {
    name: "Cake",
    price: 150000,
  },
  {
    name: "Bamboo soup",
    price: 35000,
  },
  {
    name: "Coffee",
    price: 10000,
  },
  {
    name: "tea",
    price: 15000,
  },
  {
    name: "Fish soup",
    price: 25000,
  },
];
function handelesumary2(price, index) {
  console.log("index", index, ", ", "Price: ", dataArray[index].price);
}
dataArray.forEach(handelesumary2);

const handlesumary = (item, index) => {
  console.log("index :", index, "item :", item.name);
};
dataArray.map(handlesumary);

function handelesumary1(item, index) {
  console.log("index", index, ", ", "item: ", dataArray[index].name);
}
dataArray.forEach(handelesumary1);

for (let index = 0; index < dataArray.length; index++) {
  console.log("Use for loop");
  console.log("index :", index, " ,", "item :", dataArray[index].name, ".");
  if (index == 4) break;
}

const Khamhou = () => {
  let random = (Math.random() * 99).toFixed(2);
  console.log({ random });
  let result = 100 * random;
  result = result.toFixed(2);
  console.log({ result });
  const elResult = document.querySelector(".random");
  elResult.innerHTML = `Randon: ${random}`;
  const elrse = document.querySelector(".result");
  elrse.innerHTML = `Result: ${result}`;
};
const khamhou = () => {};
