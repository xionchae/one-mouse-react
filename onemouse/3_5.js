// 비 구조화 할당
'use strict'

let arr = ["one", "two", "three"];

// let one = arr[0];
// let two = arr[1];
// let three = arr[2];

// 위에 코드를 비 구조 할당으로 만들어보자.
// let [one, two, three] = arr;

// 위에 코드는 아래와 같이 변경할 수도 있다.
let [one, two, three] = ["one", "two", "three"];

console.log(one, two, three);

// 스왑
let a = 1;
let b = 2;

[a, b] = [b, a];
console.log(a, b);

let object = {one1:"one", two1:"two", three1:"three"};
// let one1 = object.one;
// let two1 = object.two;
// let three1 = object.three;

// 위에 코드를 비 구조 할당으로 만들어보자.
// let {one1, two1, three1} = object;

console.log(one1, two1, three1);
