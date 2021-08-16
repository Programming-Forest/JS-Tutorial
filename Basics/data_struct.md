# 데이터 자료형

여기서는 데이터타입에서 배운 6가지 기본 데이터 유형을 제외한 나머지 `구조 유형`에 대해서 다룰 예정입니다.

## 구조 유형

1. [Object](#Object)
2. [Function](#Function)
3. [Structural Root Primitive](#Structural-Root-Primitive)

### Object

> `typeof instance === "object";
> Object는 데이터 구조로 사용되는 모든 생성된 개체 인스턴스에 대한 데이터가 아닌 특수한 구조 유형을 이릅니다.

예를 든다면 다음과 같겠죠

```js
new Object();
new Array();
new Map();
new Set();
new WeakMap();
new WeakSet();
new Date();
```

기타 등, 거의 대부분이 `new`라는 키워드를 이용하여 만들어집니다.

저번에 배운 Object랑 같은 개념이기도 하죠

키와 값의 매핑이며, 키는 문자열이고 값은 어떤 값이든 가능하다.

이러한 오브젝트는 [hashmaps](https://en.wikipedia.org/wiki/Hash_table)를 표현하는데 적합하다고 볼 수 있죠,
그리고 개인적인 견해로는 `JSON`의 형태와 매우 비슷하다 생각합니다.

이러한 형태를 지녔기에, 복잡한 데이터 구조도 쉽게 나타낼 수 있습니다.

#### Dates

> `new Date();`

[시간을 나타내기에 가장 적합한 오브젝트 형태](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Date)이며, JS에서 기본적으로 지원합니다.

#### Arrays

```js
const a = [];
const b = new Array();

console.log(a instanceof Array); // true
console.log(b instanceof Array); // true
```

[배열](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array)은 정수키를 가지는 일련의 값들을 표현하기 위한 오브젝트입니다.  
배열 오브젝트는 길이를 나타내기 위한 `length`라는 프로퍼티도 있습니다.

또한 이 배열은 `Array.prototype`을 상속받기에, 배열을 더욱 편리하게 다루기 위한 `indexOf`(배열에서 값 검색)이나 `push`(새로운 값 추가)와 같은 함수들을 사용 가능합니다.

이러한 배열은 리스트나 집합을 표현하는데에 적합합니다.

#### Maps, Sets, WeakMaps, WeakSets

이 자료형들에서는 키가 오브젝트도 가능해집니다.

`Set`은 오브젝트의 집합을 나타내는 반면에 `WeakMpas`와 `Maps`는 오브젝트에 값을 연관시킬 수 있습니다.

> `Maps`와 `WeakMaps`의 차이는 `Maps`는 오브젝트 키가 열거 가능하다는 것이다.
> 이 사항은 가비지 콜렉션에 이점을 준다.

#### JSON

> **J**ava**S**cript **O**bject **N**otation

JSON은 JavaScript에서 파생된 경량 데이터 교환 형식이며  
많은 프로그램이 언어에서 사용됩니다.  
JSON은 범용 데이터 구조를 구축합니다.

세부 사항은 다음을 참조해주시길 바랍니다.

- [일반적인 JSON](https://developer.mozilla.org/ko/docs/Glossary/JSON)
- [JS에서의 JSON](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/JSON)
