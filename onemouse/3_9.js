// async & await - 직관적인 비 동기 처리 코드 작성

// 1. async
// async function 함수명() {
//   await 비동기_처리_메소드_명();
// }


function hello() {
  return "Hello";
}

async function helloAsync() {
  return "Hello";
}

console.log(hello());
console.log(helloAsync());

function delay (ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms)
  })
}

async function main() {
  console.log("시작");
  await delay(3000);    // await : 비동기 처리 메소드를 동기 처리 메소드처럼 사용할 수 있다.
  console.log("3초 뒤");
}

main();