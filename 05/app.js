const handleAction = () => {
  const num1 = Number(document.querySelector("#num1").value);
  const num2 = Number(document.querySelector("#num2").value);
  console.log({ num1 });
  console.log({ num2 });
  console.log(typeof num1, typeof num2);
  const elResult = document.querySelector(".result");
  const elResult1 = document.querySelector(".result1");
  elResult.innerHTML = `Result: ${num1 + num2}`;
};

const handSort = () => {
  const arrNum = [1, 2, 3, 4, 5, 6];
  const number = "123456789";
  // const newArr =arrNum.sort;
  arrNum.sort();
  arrNum.shift();
  arrNum.pop();
  arrNum.slice(-2);

  console.log("before: ", { arrNum });

  let num2 = document.querySelector("#num2").value;
  const tel = num2.slice(0, 3);
  const tel2 = num2.slice(0, 2);
  console.log({ tel });

  let phone = num2;
  if (tel == "020" || tel2 == "20") {
    phone = num2.slice(-8);
  } else if (num2.slice(-8).length != 8) {
    document.querySelector(".error").innerHTML = "Phone number is not valid";
    console.error("Phone number is not valid");
  }

  console.log({ phone });
};

const testGit = (value, value1) => {
  return value + value1;
};
console.log("result :", testGit(2, 3));
