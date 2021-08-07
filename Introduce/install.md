# JS Install

기본적으로 `JavaScript`는 웹 브라우저에서 작동하기때문에, 따로 설치를 하지 않아도 사용이 가능합니다.  
하지만 저희는 브라우저와는 별개로 돌아가는 `Node.js`를 이용하여 실습을 할 예정입니다.

간단한 코드는 브라우저에서 개발자 도구를 여신이후, `Console`에서 실습을 하셔도 무방합니다.

## Install Node.js

[Node.js](https://nodejs.org/ko/)는 `Chrome V8 JavaScript 엔진`으로 빌드된 `JavaScript 런타임`입니다.  
말이 많이 어렵네요, 다시 한번 정리해보겠습니다.  

저희가 사용할 `Node.js`는 `Chrome V8` 브라우저에서 사용하는 `JavaScript`를 실행하는 엔진으로 만들어진
`JavaScript`가 구동 될 환경입니다.  

그러기때문에 따로 브라우저를 거치지않고서도 `JavaScript`가 구동 될 환경이 제공되었기때문에  
이것만 있다면 어디서든 사용이 가능한 것 입니다.  

### 1. Node.js 설치파일 다운로드하기
![image](https://user-images.githubusercontent.com/64676070/128599403-e20b6ad3-0c21-4dae-a562-fdcfc4a9a7d8.png)
Node.js 설치파일은 Node.js 사이트인 [여기](https://nodejs.org/)서 다운로드가 가능합니다.

`LTS`의 경우 안정화된 버전으로, 안정적으로 사용이 가능하며, 그에따라 신뢰도가 높은 편입니다.  
`Current`버전의 경우 현재 버전으로써, 가장 최신버전으로 볼 수 있습니다.  
그에 따라 최신 기능을 받아볼 수 있으며 여러 버그를 볼수도 있는거죠  

사이트에 접속을 한다면 `Current` 또는 `LTS` 둘 중 하나를 고르게 되는데, 주관적으로 `LTS`를 추천드립니다.  

버튼을 누르게 된다면, 설치파일인 `msi` 파일을 다운받아 볼 수 있습니다.

### 2. Node.js 설치파일을 이용하여 다운로드하기

1번에서 다운받은 파일을 열게 된다면 다음과 같이 나타날 것 입니다.
![image](https://user-images.githubusercontent.com/64676070/128599483-1e7947f7-fdbd-4fe4-a935-f497863f9078.png)

여기서 좀 기다렸다가, next를 여러번 쭈주죽 누르다보면 설치가 될 것 입니다.  
그닥 따로 설정할만한 그런 것이 없기에, 좀 편하네요.

모두 설치가 되었다면, `cmd`창에서 `node -v`를 입력하여 버전이 제대로 출력이 된다면 성공입니다!  
![image](https://user-images.githubusercontent.com/64676070/128599567-5f9edb0c-93fa-4499-8c10-94f358c870bc.png)

#### 다음 명령어를 찾을 수 없다고 해요!
이런 경우 두가지로 유추할 수 있습니다.

1. 환경변수 설정이 안되었다.
2. 설치를 안하였다.

만약 node가 환경변수 설정이 안되었다면, 명령어를 찾을 수 없다고 뜹니다.  
![image](https://user-images.githubusercontent.com/64676070/128599595-842df288-ca95-4fcf-971c-53cd4356f1ff.png)

이런식으로 말이죠

## 마무리하며...

이렇게 `Node.js`를 설치하게 되었습니다.
다음 강의인 `Hello World`에서는 환경 구축 및 간단하게  
`Hello World`를 출력하는 코드를 작성하고 실행하는 실습을 할 것 입니다.
