// 함수 표현식 , 애로우 함수

'use strict'

console.log(helloB());  // 함수 선언식으로 만들어진 함수는 함수 선언문 이전에 호출해도 실행됨 (호이스팅)
console.log(helloA());  // 함수 표현식으로 만들어진 함수는 함수 선언문 이전에 호출하면 에러 발생함

let helloA = function() {
  return "Hello World";
} // 함수 표현식, 함수 리터럴 방식의 함수 생성

function helloB() {
  return "Hello World";
} // 함수 선언식, 함수 선택 방식의 함수 생성


console.log(helloA);

let hello2 = () => "Hello World"; // 함수 표현식은 함수 이름을 생략할 수 있음 (익명 함수 - 호이스팅은 안된다.)

const helloText= hello2();
console.log(helloText);