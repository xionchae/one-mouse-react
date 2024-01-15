// Promise
// 비동기 작업이 가질 수 있는 3가지 상태
// - Pending : 작업이 수행중인 상태 (대기 상태)
// Pending -> resolve -> Fulfilled : 작업이 성공적으로 완료된 상태
// Pending -> reject ->  Rejected : 작업이 실패한 상태

'use strict'

function isPositive(number, resolve, reject) {
  setTimeout(() => {
    if (typeof number ==='number') {
      // 성공 -> resolve
      resolve(number >= 0 ? "양수": "음수");
    } else {
      // 실패 -> reject
      reject("숫자가 아닙니다.");
    }
  }, 2000)
}

isPositive(10, (res) => {
  console.log("성공적으로 수행됨", res);
}, 
(err) => {
  console.log("실패함", err);
})

// Promise 객체를 리턴하는 함수
function isPositivePromise(number) {
  return new Promise((resolve, reject) => {
    isPositive(number, resolve, reject);
  })
}

// Promise 객체를 이용해서 비동기 작업을 수행할 때
// then 메소드를 사용해서 resolve, reject를 처리한다.
isPositivePromise(10).then((res) => {
  console.log(res);
}, (err) => {
  console.log(err);
})

// 3_7.js의 taskA, taskB를 Promise 객체를 리턴하는 함수로 변경
function taskA(a, b) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const res = a + b;
      resolve(res);
    }, 2000)
  })
}

function taskB(a) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const res = a - 1;
      resolve(res);
    }, 1000)
  })
}

// then chainning
taskA(5, 7).then((res) => {
  console.log("A TASK RESULT :: ", res);
  return taskB(res);
}).then((res) => {
  console.log("B TASK RESULT :: ", res);
})
