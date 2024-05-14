const dataArraystudent = [
  {
    name: "Khamhou",
    age: 20,
  },
  {
    name: "nouhuk",
    age: 19,
  },
  {
    name: "somesuk",
    age: 14,
  },
  {
    name: "bounmee",
    age: 24,
  },
  {
    name: "thay",
    age: 17,
  },
  {
    name: "seevone",
    age: 20,
  },
  {
    name: "shangdow",
    age: 15,
  },
  {
    name: "phone",
    age: 23,
  },
  {
    name: "sun",
    age: 18,
  },
  {
    name: "youd",
    age: 13,
  },
  {
    name: "kham",
    age: 34,
  },
  {
    name: "thaisun",
    age: 20,
  },
];

const student = () => {
  let random = Math.floor(Math.random() * dataArraystudent.length);
  console.log("No:", random);

  const names = dataArraystudent[random].name;

  console.log("Name: ", names);
  const age = dataArraystudent[random].age;
  console.log("Age :", age);
  const elResult2 = document.querySelector(".name");
  elResult2.innerHTML = `Name: ${names}`;

  const elResult = document.querySelector(".random");
  elResult.innerHTML = `Randon: ${random}`;
  const elResult1 = document.querySelector(".age");
  elResult1.innerHTML = `Age: ${age}`;
};
console.log("Length:", dataArraystudent.length);
