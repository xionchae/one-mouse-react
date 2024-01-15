// 조건문

'use strict'

let a = 3;

if (a >= 5) {
  console.log("5 이상");
} else {
  console.log("5 미만");
}

let country = "ko";

switch (country) {
  case "ko":
    console.log("한국");
    break;
  case "jp":
    console.log("일본");
    break;
  default:
    console.log("모르겠음");
    break;
}