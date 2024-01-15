// 콜백 함수

'use strict'

function checkMood (mood, goodCallback, badCallback) {
  if(mood === 'good') {
    // 기분 좋을 때 하는 동작
    goodCallback();
  } else {
    // 기분 안 좋을 때 하는 동작
    badCallback();
  } 
}

function cry() {
  console.log("Action :: CRY");
}

function sing() {
  console.log("Action :: SING");
}

function dance() {
  console.log("Action :: DANCE");
}

checkMood('good', sing, cry);

checkMood('sad', sing, cry);