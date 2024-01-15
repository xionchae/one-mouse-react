// 자바스크립트 객체
// 자바스크립트 자료형
// 1. 원시타입 (number, string...) 한번에 하나의 값만 가질 수 있고 하나의 고정된 저장 공간을 이용한다.
// 2. 비 원시 타입 (array ...) 한번에 여러 개의 값을 가질 수 있다. 고정되지 않은 동적 공간 사용한다.

'use strict'

// 객체 생성 방식은 아래 2가지 방법으로 만들 수 있다.

let personObj = new Object();  //생성자 방식

let person = {
  key: "value",   //프로퍼티 (객체 프로퍼티)
  key1: "value2",
  key2: true,
  key3: undefined,
  key4: [1,2],
  key5: function () {},
  name: "xion",
  age: 25
}; // 객체 리터럴 방식

console.log(person);
console.log(person.key);
console.log(person.key1);
console.log(person["name"]);
console.log(person.age);


const saram = {
  name:"xion",
  age:25,
  say: function() {
    console.log(`안녕 나는 ${this["name"]}`);
  }
}

function getPropertyValue(key) {
  return person[key]
}

console.log(getPropertyValue("name"));  
// 동적인 파라미터를 전달받거나 값을 꺼내야 하는데 아직 키 값이 정해지지 않을 때 person["프로퍼티 키값"] 사용하면 좋다.

person.locaton = "한국";
person["gender"] = "남성";

person.age = 30;

console.log(person);

saram.name = "louis";
 // const 이지만 에러 안난다. saram의 객체 내용을 변경하는 거라서 saram = {name : "louis"} 이렇게 하면 에러남

 saram.age = null;

 console.log(saram);

saram.say();

console.log(`name ${"name" in person}`);  // 값이 있는지 확인하는 방법 (in)
