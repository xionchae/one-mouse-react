// API 호출하기
'use strict'

let url = "https://jsonplaceholder.typicode.com/posts";

let response = fetch(url).then((res) => {
  console.log(res);
},
(err) => {
  console.log(err);
});

async function getData() {
  let res = await fetch(url);
  let data = await res.json();
  console.log(data);
}

getData();