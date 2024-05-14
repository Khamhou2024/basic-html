const khamhou=()=>{

document.body.style.background="red";
}

const sum=(value1,value2)=>{
    return value1,value2;
}
// ເອີ້ນໃຊ້ຟັງຊັນ
console.log("Result :",sum(10,20));  

function ctof(celsius){
   var cTemp=celsius;
   var ctoFar=cTemp*9/5+32;
   var messange=cTemp+"\xB0C is " + ctoFar+"\xB0F";
   console.log(messange);
}
ctof(30);

function fToC(fahrenheit){
    var fTemp=fahrenheit;
    var fToCel=(fTemp-32)*5/9;
    var messange=fTemp+ "\xB0F" + fToCel +"\xB0C";
    console.log(messange);
}
fToC(86);

let myCar=[
   {
  brand:"Ford",
  model:"1",
  color:"Black",
},
{
  brand:"Ford",
  model:"1",
  color:"Black",
}

]

const chang=(brand,model,index)=>{
 console.log("index :",index,"brand :",myCar[index].brand,"model :",myCar[index].model);
}
myCar.map(chang);