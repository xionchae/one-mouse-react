// Truthy & Falsy
'use strict'

let a = "String";

if (a) {
  console.log("true");
} else {
  console.log("false");
} 

const getNmae = (person) => {
  if (!person) {  // false Not => true
    return "객체가 아닙니다.";
  }

  return person.name;
}

let person = null
const name = getNmae(person);
console.log(name);

