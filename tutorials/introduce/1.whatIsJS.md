# JavaScript가 뭔가요?

방금 전 문서에서 JS에 대해서 대충 알게되었지만, 사실 그것만으로는 감이 안잡힐겁니다.  
그러기때문에 실제로 어디에서 사용이 되는지에 대해서 배우게 될 것입니다.

웹은 크게 3가지의 요소로 이루어져있습니다.

1. HTML  
2. CSS  
3. JavaScript  

![https://mdn.mozillademos.org/files/13502/cake.png](https://mdn.mozillademos.org/files/13502/cake.png)

- [HTML](https://developer.mozilla.org/ko/docs/Glossary/HTML)은 제공할 웹 컨텐츠의 구조와 의미를 문단, 제목, 표, 이미지, 동영상 등으로 정의하고 부여해주는 마크업 언어입니다.
- [CSS](https://developer.mozilla.org/ko/docs/Glossary/CSS)는 배경색, 폰트 등의 레이아웃등을 지정하여 `HTML` 컨텐츠를 꾸며주는 스타일 규칙 언어입니다.
- [JS](https://developer.mozilla.org/ko/docs/Glossary/JavaScript)는 동적으로 컨텐츠를 변경시켜주고, 멀티미디어를 다루며, 움직이는 이미지 또는 사이트를 만들어주는 스크립트 언어입니다.

이 3개의 요소는 각 각 유기적으로 잘 구성되어있습니다.
다음과 같은 예제를 작성해봅시다.

html
```html
<p>Player 1: chris</p>
```
이것은 다음과 같이 나옵니다.

![image](https://user-images.githubusercontent.com/64676070/118229086-5525d880-b4c6-11eb-9b9a-c1c772b525aa.png)

그리고 CSS를 추가하여 이쁘게 해줄 수 있습니다.

css
```css
p {
  font-family: 'helvetica neue', helvetica, sans-serif;
  letter-spacing: 1px;
  text-transform: uppercase;
  text-align: center;
  border: 2px solid rgba(0,0,200,0.6);
  background: rgba(0,0,200,0.3);
  color: rgba(0,0,200,0.6);
  box-shadow: 1px 1px 2px rgba(0,0,200,0.4);
  border-radius: 10px;
  padding: 3px 10px;
  display: inline-block;
  cursor:pointer;
}
```

![image](https://user-images.githubusercontent.com/64676070/118229300-b9e13300-b4c6-11eb-8632-76e40478fd0e.png)

그리고 JS로 기능을 추가해줄 수 있습니다.
```js
const para = document.querySelector('p');

paraa.addEventListener('click', updateName);

function updateName(){
    let name = prompt('새로운 이름을 입력해주세요');
    para.textContent = 'Player 1 : ' + name;
```

이 코드들의 전체 모습은 [이것](https://github.com/mdn/learning-area/blob/master/javascript/introduction-to-js-1/what-is-js/javascript-label.html)과 같습니다.

한번 직접 구현하여 텍스트를 클릭해보세요!  

## 그래서 이런거 말고는 뭘 더 할 수 있는데!?
JS의 핵심은 다음과 같은 기능들을 해주는 프로그래밍 기능들로 구성되어 있습니다.

- 변수 안에 값을 저장할 수 있습니다. 위에 만든 텍스트를 보면 `name`이라는 변수에 이름 값을 저장하였습니다.
- 프로그래밍에서 `문자열(String)`이라고 불리는 문자들도 조작이 가능합니다. 위의 텍스트를 보면 `'player 1 : ' + name;`처럼 plyaer 1 이라는 텍스트와 name이라는 변수를 결합하여 텍스트를 완성시킬 수 있었습니다.
- 웹 페이지 상의 이벤트에 응답하는 코드를 작성할 수 있습니다. 위의 예제를 보면 `click`이벤트를 통해 요소가 클릭되면 무엇을 할지를 정의하였습니다.
- 이 외에도 다양한 것들이 있지만, 한단계씩 배워나가면서 알아보도록 합시다

하지만 이외에도 소위 불리는 **Application Programming INterfaces(APIs)** 라는 것을 여러분의 JS 코드에 이용할 수 있습니다.

API는 이미 만들어진 코드의 집합체, 즉 이미 구현된 기능들이며, 직접 구현을 하지 않더라도, 이를 이용하면 쉽게 구현이 가능합니다.  
마치 책상을 직접 재료 하나 하나 구하고, 다듬어서 책상을 만드는 것이 아닌, 책상 만들기 키트를 사는 것과 유사하다고 보면 됩니다.

일반적으로 APIs는 두 종류로 구분됩니다.
![https://mdn.mozillademos.org/files/13508/browser.png](https://mdn.mozillademos.org/files/13508/browser.png)

### Brower API
**Brower API**는 웹 브라우저에 설치된 API들로, 컴퓨터 환경구성으로부터 데이터를 보이게 하고 복잡한 일들을 하도록 합니다.

- [DOM(Document Object Model)](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model)은 동적으로 페이지의 스타일을 정하는 등 HTML과 CSS를 알맞게 조정하는 역할을 합니다. 우리가 매일 보는 팝업창이나, 위의 사진들이 보이는 것들이 모두 DOM의 결과입니다.
- [Canvas](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API)과 [WebGL](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API) API는 2D와 3D 그래픽을 만들 수 있도록 합니다. 이러한 웹 기술들을 이용하여 플래시 게임 등 다양하고 재미있는 것들을 만들 수 있습니다.

### Third party API
**Third party API**는 브라우저에 기본적으로 설치된 API가 아닌 인터넷에서 개인적으로 정보와 코드를 얻어 프로그래밍한 것을 얘기합니다.

- [Twitter API](https://developer.twitter.com/en/docs)
- [Google Maps API](https://developers.google.com/maps/)와 [OpenStreetMap API](https://wiki.openstreetmap.org/wiki/API)는 웹사이트에 지도를 넣어주고, 추가 기능을 지원해줍니다.

> 물론 이 API들을 이용하기까지의 길은 멀기때문에, 여기서는 다루지않습니다.

이 외에도 여러 API들이 존재하지만, 우리는 기본적인 것들부터 배울 것 입니다.
