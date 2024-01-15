// 반복문

'use strict'

for(let i = 0; i <= 100; i++) {
  console.log("xion");
}

let person = {
  name: "xion",
  age: 25,
  tall:180
};

const personKeys = Object.keys(person);
const personValue = Object.values(person);

for(let i = 0; i < personKeys.length; i++) {

  const currentKey = personKeys[i];
  const currentValue = person[currentKey];

  console.log(`curKey : ${currentKey}`);
  console.log(`currentValue : ${personValue[i]}`)
}