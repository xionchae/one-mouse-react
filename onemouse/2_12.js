// 배열 내장함수

'use strict'

const arr = [1,2,3,4,5,6,7,8,9,10];

for(let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

arr.forEach((item, index) => console.log(`index : ${index}, item : ${item}`));

const newArr = arr.map((item, index) => {
  return item * 2;
});

console.log(newArr);

let number = 3;

console.log(arr.includes(number));  // 배열에 해당 값이 있는지 없는지 확인 

console.log(arr.indexOf(number)); // 없으면 -1 반환 있으면 해당 인덱스 반환

const arr2 = [
  { color:"red",
    size:"big"
  },
  { color:"blue",
    size:"small"
  },
  { color:"green",
    size:"big"
  },
  { color:"yellow",
    size:"small"
  }
];

const idx = arr2.findIndex((item, index) => {
  return item.color === "blue";
});

console.log(arr2[idx]);

const result = arr2.filter((item, index) => {
  return item.size === "big";
});

console.log(result);

arr2.slice(0, 3); // 0번째 인덱스부터 2번째 인덱스까지 잘라서 새로운 배열을 만든다.

console.log(arr2);

console.log(arr.concat(arr2)); // arr2를 arr에 붙인다.

let numbers = [0,1,10,3,30,2,20,4,40];

const numberSort = numbers.sort();

console.log(numberSort);

let numbers2 = [0,1,10,3,30,2,20,4,40];

const compare = (a, b) => {
  // 1. 같다
  // 2. a가 b보다 작다
  // 3. a가 b보다 크다

  if(a > b) return 1;
  if(a < b) return -1;
  return 0;
}

console.log(numbers2.sort(compare));

const arr3 = ["xion","님","안녕하세요"]

console.log(arr3.join(" ")); // 배열을 문자열로 바꿔준다. 만약 아무것도 안넣으면 ,로 구분된다.




