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

## 기본적인 7가지 타입

최신 ECMAScript 표준은 기본적인 7가지의 자료형을 정의합니다.

1. Boolean
2. Null
3. Undefined
4. Number
5. String
6. Symbol
7. Object

다음 중 1~6번의 경우 기본 자료형(Primitive)이다.

### 기본 타입(Primitive)

7번인 `Object`를 제외한 모든 값은 변경 불가능한 값입니다. (immutable value)

이는 추후 JS-Tutorial이 아닌, 다른 곳에서 설명할 예정이니 기다려주시길 바랍니다 ㅎ..

#### Boolean 타입

`Boolean`은 논리적인 요소를 뜻하며, `true` 또는 `false`의 값을 지니게 된다.

#### Null 타입

`Null`은 한 가지 값인 `null`만을 의미합니다.

`Null`은 타입인 반면 `null`은 값을 의미합니다.  
`Null`은 [다음](https://developer.mozilla.org/ko/docs/Glossary/Null)을 참조 바랍니다.  
`null`은 어떤 값이 **의도적**으로 비어있음을 표현하며, `Boolean`연산에서는 `false`를 뜻합니다.

#### Undefined 타입

값을 할당하지 않은 변수는 `undefined`값을 지닙니다.

`Undefined`는 타입이며, `undefined`는 값입니다.
선언한 이후, 값을 할당하지 않은 변수 혹은 인수에 자동으로 `undefined`라는 값이 `Undefined`라는 타입을 가지고 할당됩니다.

#### Number 타입

##### 부동소수점

ECMAScript 표준에 따르면, 숫자 자료형은 `배정밀도 64비트 형식 IEEE 754값` 단 하나만 존재한다.

> `배정밀도 64비트 형식 IEEE 754`는 -(2^53 -1) ~ 2^53 -1 까지 표현한다.

이는 부동 소수점을 표현할 수 있는 것 말고도, `Number` 타입은 세가지 의미있는 몇가지 상징적인 값들도 표현할 수 있다.

이 값에는 `+/- 무한대`, `NaN`이 있다.

위의 `+/- 무한대`보다 크거나 작은지 확인하는 용도의 상수값인 `Number.MAX_VALUE`를 사용할 수 있다.

또한, ECMAScript 6 부터는 숫자가 배정밀도 부동소수점 숫자인지 확인하는 용도로 다음 세가지가 있다.

1. `Number.isSafeInteger()`
2. `Number.MAX_SAFE_INTEGER`
3. `Number.MIN_SAFE_INTEGER`

만약 이를 넘어간다면, 그 숫자는 안전하지않다.

##### 0의 특성

유일하게 0은 `-0`이나 `+0`으로 표시할 수 있다.

> `0`은 `+0`을 의미한다.

하지만 이 값은 거의 의미가 없다.
`+0 === -0`은 `true`이다.

##### 이진 연산자

`bit masking`기법으로 한 숫자 안에 여러 Boolean값을 저장하는데에 사용 가능하다.  
물론 이는 좋지않은 행위지만, JS에서는 Boolean 덩어리(배열이나 객체 같은 형태)를 나타낼 마땅한 다른 방법이 없다.

또한 `bit masking`은 코드를 관리하는데에 있어서 좀 더 어렵게 만들기도 한다.  
하지만 이는 저장공간의 절약이나, 비트를 직접 다루는 등의 극단적이며 제한적인 상황에서 필요할 수 있다.

> 따라서 `bit masking`은 크기를 최대한 줄이는 상황에서만 사용을 고려해야한다.

#### String 타입

`String` 타입은 텍스트 데이터를 나타나는데에 사용한다.

이는 16비트 부호없는 정수 값 요소들의 집합이다.

> 16비트 부호없는 정수는 문자값이랑 1 : 1 치환이 되기 때문이다.

`String`은 연속된 인덱스의 형태인데  
첫번째 값은 0번 인덱스, 두번째 값은 1번 인덱스 같은 방식이다.  
그러기에 `String`의 길이는 `String`이 가지고 있는 값의 갯수이다.

JS에서의 문자열은 변경 불가능(immutable)합니다.
이는 문자열이 한번 생성이 된다면, 그 문자열을 수정할 수 없다는 것을 의미합니다.  
그러나 원래 문자열에서 수정된 다른 문자열을 할당하는 것은 가능합니다.

JS 원시값의 불변성에 대해서 검색해보고 배워보심이 좋습니다.  
추후 튜토리얼이 끝나고 다른 곳에서 다룰 예정입니다 :D

##### 문자열의 자료형화

문자열은 복잡한 자료형을 표현하는 용도로 눈독 들일 수 있습니다.  
이는 단기적으로 이러한 장점들을 가지고옵니다.

1. 접합 연산자로 손쉽게 복잡한 문자열을 만들 수 있다.
2. 문자열은 화면 출력 내용이 문자열 변수값과 똑같다.(디버깅이 쉽다.)
3. 문자열은 많은 API에서 사용하는 공통분모이며, 그러기에 이로만 작업하는게 유혹적일 수 있다.

이는 규칙만 잘 정의한다면, 어떤 자료구조든 문자열로 흉내낼 수 있습니다.  
그러나 이가 좋은 것은 아닌게 구분자로 리스트를 흉내낼 수는 있어도 JS의 배열을 이용하는 것이 더 효율적이라는 것이죠

규칙을 정의하고 사이드이펙트들을 관리하는 것은 불필요한 관리부담을 낳게됩니다.

그러기에 복잡한 데이터를 나타낼 경우에는 문자열을 분석해서 적합하게 자료구조를 이용하는 것이 좋습니다.

#### Symbol 타입

이 타입은 ECMAScript 6 에서 추가되었습니다.  
Symbol은 **유일**하고 **변경 불가능한(immutable)** 원시값(primitive value)입니다.  
또한 객체 속성의 `key` 값으로 이용될 수 있습니다.

이 타입은 주로 이름의 충돌 위험이 없는 **유일한** 객체의 프로퍼티 키를 만들기 위해 사용합니다.

심볼은 생성하기 위해 `new`키워드를 사용하지 않고, `Symbol()`함수로 생성합니다.  
이는 호출될 때마다 `Symbol`값을 생성하며, 이때 생성된 값은 객체가 아닌, 기본값으로써 생성됩니다.

```js
const symbol1 = Symbol();
const symbol2 = Symbol(42);
const symbol3 = Symbol("foo");

console.log(symbol1);
// expected output: "Symbol()"
console.log(typeof symbol1);
// expected output: "symbol"

console.log(symbol2 === 42);
// expected output: false

console.log(symbol3.toString());
// expected output: "Symbol(foo)"

console.log(Symbol("foo") === Symbol("foo"));
// expected output: false
```

또한 `Symbol()` 함수에 이용된 문자열 인자값은 그저 `Symbol`에 대한 설명(description)으로 디버깅 용도로만 이용됩니다.

##### Symbol의 이용

```js
const obj = {};

obj.first = "첫번째 프로퍼티";
obj[123] = 123;
obj["first" + 123] = true;
// obj.456 = 789; // Uncaught SyntaxError: Unexpected number

console.log(obj);
// expected output : {123: 123, first: "첫번째 프로퍼티", first123: true}
console.log(obj[first]); // "첫번째 프로퍼티"
```

다음처럼 객체의 프로퍼티 키는 빈 문자열을 포함하는 모든 문자열로 만들 수 있습니다.

또한 다음처럼 Symbol을 이용하여 객체의 프로퍼티 키로 사용가능합니다.

```js
const obj = {};

const keySymbol = Symbol("keys");
obj[keySymbol] = 123;

console.log(obj); // {Symbol(keys): 123}
console.log(obj[keySymbol]); // 123
```

#### Symbol 객체

`Symbol()`은 함수객체의 형태입니다. 그러기에 여러 프로퍼티와 메서드를 지니고 있죠

[사진1]

이 수많은 프로퍼티와 메서드들 중 `length`와 `prototype`을 제외한 프로퍼티를 `Well-Known Symbol`이라고 부릅니다.
