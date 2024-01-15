// 연산자
'use strict'

let a = 1;
let b = 2;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);

let c = "j";
let d = "s";
let e = 3;

console.log(c + d);

console.log(c + e);

let f = 1;
f += 2;
console.log(f);

let g = 10;
g ++;
console.log(g);
console.log(g++); // 이 줄이 끝나고 1을 더함
console.log(g);

let h;

h = h ?? 100;  // h가 null이나 undefined면 10을 넣어라 null 병합 연산자
console.log(h);

