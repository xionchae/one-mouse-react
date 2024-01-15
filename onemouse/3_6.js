// spread 연산자
'use strict'

const cookie = {
  base: "쿠키",
  maadeIn: "김해",
}

const chocolateCookie = {
  ...cookie,
  topping: "초코칩",
}

console.log(cookie);
console.log(chocolateCookie);

const noToppingCookie = ["기본쿠키", "특별한 쿠키"];
const toppingCookie = ["초코칩 쿠키", "딸기쿠키"];

const allCookie = [...noToppingCookie, "아무거나 추가하는 배열값", ...toppingCookie]; 
console.log(allCookie);
