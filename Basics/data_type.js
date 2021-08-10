for (var j = 0; j < 10; j++) {
  console.log("j", j);
}
console.log("after loop j is ", j); // after loop j is 10

// 아래의 경우에는 에러가 발생한다.
function counter() {
  for (var i = 0; i < 10; i++) {
    console.log("i", i);
  }
}
counter();
console.log("after loop i is", i); // ReferenceError: i is not defined

for (let j = 0; j < 10; j++) {
  console.log(j); // 1 ~ 10
}
console.log(j);

function counter() {
  for (let i = 0; i < 10; i++) {
    console.log(i); // 1 ~ 1-
  }
}
counter();
console.log(i);
