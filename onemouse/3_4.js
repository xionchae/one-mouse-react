// 조건문 업그레이드
'use strict'

function isKoreanFood(food) {
  if (food === "김치찌개" || food === "삼겹살") {
    return true;
  }

  return false;
}

const food1 = isKoreanFood("김치찌개");
const food2 = isKoreanFood("족발");
console.log(food1);
console.log(food2);

const getMeal = (mealType)  => {
  if (mealType === "아침") {
    return "김치찌개";
  } else if (mealType === "점심") {
    return "삼겹살";
  } else if (mealType === "저녁") {
    return "치킨";
  } else {
    return "오늘은 식사를 안 합니다.";
  }
}

console.log(getMeal("아침"));

const meal = {
  한식: "불고기",
  중식: "짜장면",
  일식: "초밥",
  양식: "스테이크"
};

const getMeal2 = (mealType) => {
  return meal[mealType] || "오늘은 식사를 안 합니다.";  // mealType이 meal에 없으면 undefined가 나오기 때문에 오른쪽에 있는 "오늘은 식사를 안 합니다."가 실행된다.
}

console.log(getMeal2("한식"));
console.log(getMeal2());
