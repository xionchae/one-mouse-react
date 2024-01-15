// 단락 회로 평가

'use strict'

const getName = (person) => {
  // if (!person) {
  //   return "객체가 아닙니다.";
  // }

  // return person.name;

  // 단락 회로 평가로 위의 코드를 아래와 같이 줄일 수 있다.
  // return person && person.name;

  const name = person && person.name;
  return name || "객체가 아닙니다.";

};

// let person;

let person = {name: "xion"};

const name = getName(person);
console.log(name);

person = null;
const name2 = getName(person);
console.log(name2);