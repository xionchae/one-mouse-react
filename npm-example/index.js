// npm init 한 후에
// pakage.json에 "start": "node index.js"
// npm start 로 실행 하면 node index.js 와 같은 결과가 나온다.
// 외부 npm 은 npm install 로 설치 한다. (npm install randomcolor)
// - https://www.npmjs.com/ 에 가면 다양한 npm 을 확인 할 수 있다.
// - 설치된 외부 npm 은 node_modules 에 설치 된다.
// - 설치된 외부 npm 은 package.json 에 dependencies 에 추가 된다.
// - 외부 npm 은 require('randomcolor') 로 사용 할 수 있다.

const randomColor = require('randomcolor');

let color1 = randomColor();
let color2 = randomColor();
let color3 = randomColor();

console.log(color1, color2, color3);
