# JS의 데이터 타입

모든 프로그래밍 언어는 모두 내장 자료형이 있습니다.  
그렇지만 이러한 내장 자료형은 언어마다 종종 다르기도 합니다.

그러기 때문에 여기서는 JS의 내장 자료형과,  
여기서 사용할 수 있는 속성들에 대해 알아볼 예정입니다.

## 동적 타이핑

자바스크립트는 느슨한 타입 또는 동적 언어입니다.  
그러기에 변수 타입을 미리 지정할 필요가 없다는거죠

C언어를 예시로 들면

```c
int a = 1; // 정수형
char b = 'c'; // 문자형
```

다음과 같이 미리 타입을 지정해놓습니다.

하지만 저희가 사용할 JS에서는 다음과 같이 사용합니다.

```js
var a = 1;
var b = "c";
```

분명 같은 방법으로 선언했는데 각기 다른 타입이 들어가는 이유는  
프로그램이 동작을 하면서 타입이 자동으로 파악되기 때문입니다.

## 변수 선언

데이터 타입을 이용하기에 앞서, 변수를 선언해야 사용이 가능하겠죠?  
JS는 변수를 선언하는 방법이 세가지가 있고, 각기 다른 형태를 지닙니다.

1. [var](#var)(function-scoped)
2. [let](#let)(block-scoped)
3. [const](#const)(block-scoped)
4. [function-scoped, block-scoped](#scoped)

### var

var 타입은 선언 이후 선택적으로 값 변경이 가능한 형태입니다.

```js
var a = 1;
console.log(a);

a = 2;
console.log(a);
```

> 1
> 2

다음과 같이, 값이 변경되는 것을 볼 수 있습니다.

### let

let 타입 또한 var타입 처럼 선택적으로 값 변경이 가능한 형태입니다.

```js
let a = 1;
console.log(a);

a = 2;
console.log(a);
```

> 1
> 2

다음과 같이 값이 변경 되는 것을 볼 수 있습니다.

그러면 var타입과의 차이가 무엇인지 여쭤볼 수 있는데, 이는 밑에서 다루도록 하겠습니다.

### const

const 타입은 위에서 변수라 불렀지만, 정확히는 상수에 속합니다.  
한번 선언하면 값을 재정의 할 수 없는 형태인거죠

그러기에 값을 재정의하려고 할 경우, 에러가 나타나게 됩니다.

```js
const a = 1;
console.log(a);

a = 2; // VM122:1 Uncaught TypeError: Assignment to constant variable.
console.log(a);
```

> 1
> 1

다음과 같이 에러가 출력되며, 값은 변경되지 않습니다.

### scoped

JS에서는 scoped의 형태가 두가지로 존재합니다.

1. function-scoped
2. block-scoped

물론 지금은 이해 잘 안될 것이다. 그러기에 더 배우고나서 다시 한번 더 찾아오는 것을 추천한다.
그리고 `let`이랑 `const`만 사용하면 된다는 것을 기억하면 된다.

#### function-scoped

```js
for (var j = 0; j < 10; j++) {
  console.log(j); // 1 ~ 10
}
console.log(j); // 10
// 이 경우 정상적으로 작동을 한다.

// 그러나 아래의 경우에는 에러가 발생한다.
function counter() {
  for (var i = 0; i < 10; i++) {
    console.log(i);
  }
}
counter();
console.log(i); // ReferenceError: i is not defined
```

말 그대로 `function-scoped`이기에, scope의 단위가 `function`일 뿐이다.

그러기에 `j`의 경우 `for 반복문`안에서 선언된 값도 그저 밑에서 사용 가능하지만  
`i`의 경우 함수 안에서 선언되었기에, 밑에서 사용을 못하고, 에러가 나타날 뿐이다.

> 한줄 요약 : `var`의 경우, 함수 안에서 선언한 건 함수 안에서만 사용 가능하다. 끝

#### block-scoped

```js
for (let j = 0; j < 10; j++) {
  console.log(j); // 1 ~ 10
}
console.log(j); // ReferenceError: j is not defined

function counter() {
  for (let i = 0; i < 10; i++) {
    console.log(i); // 1 ~ 1-
  }
}
counter();
console.log(i); // ReferenceError: i is not defined
```

이 경우는 두개 모두 에러가 나타난다.

`for` 블럭 안에서 사용된건 `for` 안에서만 사용 가능하기 때문이다
`function` 블럭 안에서 사용된건 `function`안에서만 사용 가능한거기도하고

이처럼 `{}` 중괄호로 이루어진 블럭 단위로 `scope`가 구분이 되어, 변수 사용 범위를 지정해준다.

`function-scoped`처럼 여러 변수가 나타나지 않기에, 인기가 많은 편이다.
