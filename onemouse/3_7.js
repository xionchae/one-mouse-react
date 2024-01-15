// 동기, 비동기
'use strict'

function taskA(a, b, cb) {    // setTimeout은 비동기 함수이다. cb는 콜백함수
  setTimeout(() => {
    const res = a + b;
    cb(res);
  }, 2000)
}

function taskB(a, cb) {
  setTimeout(() => {
    const res = a - 1;
    cb(res);
  }, 1000)
}

taskA(1, 2, (res) => {
  console.log("A TASK RESULT :: ", res);
})

taskB(3, (res) => {
  console.log("B TASK RESULT :: ", res);
})

console.log("END");

// 콜백 지옥
// 비동기 함수를 순차적으로 실행하기 위해 콜백 함수를 중첩해서 사용하는 것
taskA(4, 5, (a_res) => {
  taskB(a_res, (b_res) => {
    console.log("A TASK RESULT :: ", a_res);
    console.log("B TASK RESULT :: ", b_res);
  })
});

// JS Engine은 싱글 스레드로 동작한다. 하나의 작업을 처리하고 다음 작업을 처리한다.
// Heap : 메모리 할당이 일어나는 곳
// Call Stack : 코드 실행에 따라 호출 스택이 쌓이는 곳
// - Main Context : Call Stack에 쌓이는 가장 처음의 Context (시작점)
// - 종료된 Context는 Call Stack에서 제거된다.
// - Main Context가 종료되면 JS Engine은 종료된다.