# JavaScript 04. 자료형과 변수(Data type & Variable)
  * 프로그래밍이란
  **변수**를 통해 값을 저장, 참조하고
  **연산자**로 값을 연산, 평가하고
  **조건문과 반복문**에 의한 흐름제어로 데이터 흐름을 제어하고
  **함수**로 재사용이 가능한 구문의 집합을 만들며
  **객체, 배열** 등으로 자료를 구조화하는 것  
  * 변수
    * 변수에 값을 할당한다는 것은 OS가 값을 저장하기 위해 메모리 공간을 확보하는 것을 말한다. JavaScript의 경우 `undefined`라는 변수값을 통해 확보하는데 이를 초기화라고 한다.
    * 결국 변수라는 것은 값이 할당된 메모리의 주소(Memory address)에 접근하기 위해 사람이 이해할 수 있는 언어로 지정한 이름표(식별자, identifier). 실제 위치틑 0x00.... 식의 16진수 숫자로 나타난다.
  * 변수값 할당과 재할당
    * 할당 : `undefined`로 할당되어 있던 메모리 위치를 다른 위치에 할당한 변수값의 위치로 가르키게 함 (참조). 이때 `undefined`는 바로 사라지지 않고 적절한 때에 삭제됨([가비지 콜렉션](https://developer.mozilla.org/ko/docs/Web/JavaScript/Memory_Management)
    * 재할당 : 기존에 할당된 값을 바꾸는 것이 아니라 다른 위치에 값을 입력하고 그 위치로 재할당하는 것(참조를 바꿈)
    * 변경불가한 값에 해당(immutable value)
  * 자료형은 이러한 변수를 할당할 때, 값의 종류에 따라 확보해야할 메모리 크기가 다르기 때문에 나타나는 분류이다.

## 기본자료형 (Primitive Data Type)
  * 변경 불가능한 값(immutable value)
  * **pass-by-value**
    값은 값으로 복사되어 전달되지, 변경되지 않는다.
  1. `boolean`
  `true`/`false` 두 가지 값을 가질 수 있고
  `null`, `undefined`, 숫자 0은 `false`로 간주된다.
  2. `null`
  오직 `null` 값만을 갖는다. `null` 값은 참조정보를 제거한다, 변수값이 할당되어 있는 메모리 주소를 제거한다 정도의 의미. 참조가 없어진 메모리 영역은 마찬가지로 가비지 콜렉션 수행.
  3. `undefined`
  값이 할당되지 않은 변수가 가진 값. 선언되었으나 할당이 되지 않았을 경우.
  4. `Number`
  JavaScript는 오로지 하나의 숫자 자료형만 존재.
  `+/- Infinity`, `NaN`을 포함
  5. `String`
  문자열 타입으로 텍스트 데이터 사용.
  **유사배열** 로서 인덱스를 통해 접근가능하나 변경할 수 없고 오직 read만 가능하다.
  6. `Symbol`
  ES6에 새롭게 추가된 자료형으로 애플리케이션 전체에서 유일하며 변경 불가능한(immutable) 기본 자료형(primitive)이다. 주로 객체의 프로퍼티 키(property key)로 사용한다.

## 객체형 (Object type, 참조형)
  * 객체는 데이터와 그 데이터에 관련되는 동작(절차,방법,기능)을 모두 포함할 수 있는 개념적 존재.
  * 프로퍼티(property, 이름과 값을 갖는 데이터)와 메소드(method, 동작을 의미)를 포함하는 독립적 주체
  * **pass-by-reference**

## 변수
  * 변수명 명명규칙
    * 목적과 기능에 맞고 알아보기 쉽게 짓기
    * 대소문자 구분 가능 주의
    * 첫글자는 영문자(특수문자 제외), underscore ( _ ), 또는 달러 기호($)만 가능
  * 변수의 중복 선언
    * 사용 가능하다 비추.
  * 변수 선언시 var 생략 허용
    * 사용가능하지만 의도치 않게 변수를 전역화할 수 있음. 비추.
  * 동적 타이핑 (Dynamic Typing)
    * 변수의 타입설정이 필요없이 할당되는 과정에서 자동으로 자료형이 결정되는 구조.
  * 변수 호이스팅(Variable Hoisting)
    * 변수 선언의 3단계
      1. 선언 단계 (VO(variable object)에서 이루어짐)
      2. 초기화 단계
      3. 할당 단계
    * 선언단계와 초기화단계는 한번에 이루어짐. 이 단계는 한줄한줄 읽어가면서 var을 만날 때 하는것이 아니라 자바스크립트 전체 문서를 쫙 읽은 다음에 변수 선언문을 싹 뽑아서 이 단계를 실행한 뒤 한줄한줄 읽어나간다. 이것이 변수 호이스팅.
    * 변수 선언문의 위치가 별로 중요하지 않으나 가급적 변수 이용문(?) 보다 위에, 그리고 문서 맨 위에 위치시키는 것이 좋다. 이것은 ESLint의 규칙이기도 하다.
  * var 키워드로 선언된 변수의 문제점
    * Function-level scope, var 생략 허용, 중복 선언 허용, 변수 호이스팅 등 JavaScript의 특징이 전역 변수의 남발, 의도치 않은 변수값 변경 등의 문제를 발생시킴.
    * 복잡성, 성능이슈, 상호의존성 등 여러 면에서 변수의 범위는 좁을수록 좋다. 전역변수는 남발하지 말 것.

# JavaScript 05. 연산자(Operator)
  * 하나 혹은 그 이상의 값을 하나의 값으로 만들 때 사용한다.
  * 값을 연산, 평가할 때 사용한다.

## 산술연산자 (Arithmetic Operator)
  * `+`, `-`, `*`, `/` 덧셈, 뺼셈, 곱셈, 나눗셈
  * `%` 나머지
  * `++`, `--` 1씩 증가, 감소
  * `+`의 특징
    * 연산 대상이 모두 숫자일 경우: 덧셈 수행
    * 문자열이 포함된 경우: 문자열 연결 연산
    ```javascript
    var a = 1;
    var b = 2;
    console.log(a+b);
    // 3

    var a = 5;
    var b = 'hello';
    var c = true;
    var d = null;
    var e; // undefined
    var f = Symbol('key');

    a + b; // '5hello'
    a + c; // 6
           // (boolean true를 1로 치환해 계산, false는 0으로 치환)
    a + d; // 5
    a + e; // NaN
    a + f; // TypeError: Cannot convert a Symbol value to a number
    ```

## 대입연산자 (Assignment Operators)
  * `+=`, `-=`, `*=`, `/=`, `%=`
  * 원리
    대입연산자를 보면 해석된 식을 떠올릴 수 있어야 함.
    ```javascript
    var a = 4;
    var b = 2;

    a += b; // a = a + b;
            // 6;
    a *= b; // a = a * b;
            // 8;
    a /= b; // a = a / b;
            // 2;
    a %= b; // a = a % b;
            // 0;
    ```

## 비교연산자 (Comparison Operator)
  * `==`, `===`의 차이(엄격성)
  * 관계비교 연산자: 이상, 이하 부호순서 주의
  * 삼항연산자: 한 줄로 처리할 수 있을 때만 쓰고 그 이상일 경우 if문을 쓰는게 낫다.

  | Operator       | Description    |
  | :------------- | :------------- |
  | ==             | 동등비교(loose equality) 최대한 비교 가능하게 형 변환후, 비교       |
  | ===       | 일치비교(strict equality) 값의 내용 뿐만 아니라 타입까지 일치해야 true 반환       |
  | != , !==      | 부등비교 , 불일치비교       |
  | >, <, >=, <=     | 관계비교       |
  | ?        | 삼항 연산자       |
  ```JavaScript
  var condition = true;
  var result = condition ? ['result of true'] : ['result of false'];
  console.log(result);
  // 설정된 condition이 true인가? 그럼 ['result of true']이고 false이면 ['result of false']
  ```

## 논리연산자 (Logical Operators)
  * Boolean (true/false) 값을 반환하는 것이 일반적
  * 사실 원리는 피연산자 중 하나를 반환하는 것. 연산자에 따라 뒤의 값까지 판단하여 뒤 피연산자를 반환하거나 앞의 피연산자 값만으로도 판단이 가능하여 즉시 그 값을 반환할 수 있음.(단축 평가와 연관)
  * `||` or
  * `&&` and
  * `!` not
  ```javascript
  true || true // true, 앞의 피연산자 값
  true || false // true, 앞의 피연산자 값
  false || true // true, 뒤의 피연산자 값
  false || false // false, 뒤의 피연산자 값

  true && true // true, 뒤의 피연산자 값
  true && false // false, 뒤의 피연산자 값
  false && true // false, 앞의 피연산자 값
  false && false // false, 앞의 피연산자 값

  !true // false
  !false // true

  // true와 false로 간주되는 것들
  !1 // false
  !'string' // false
  !0 // true
  !null // true
  !undefined // true
  ```

## 단축평가 (Short-Circuit Evaluation)
  * Boolean값과 함께 사용되지 않은 논리연산자의 경우 판단근거가 되는 피연산자값을 반환한다. 이때 반환하는 피연산자값은 Boolean이 아닐 수 있다.

  | 평가식 | 평가 결과     |
  | :------------- | :------------- |
  | true \|\| anything       | true (앞)       |
  | false \|\| anything       | anything (뒤)       |
  | true && anything       | anything (뒤)      |
  | false && anything       | false (앞)     |

```javascript
'foo' || 'bar' // 'foo'
'foo' && 'bar' // 'bar'
0 || 'bar' // 'bar'
'foo' && 0 // 0
```

## 타입 연산자 (Type Operators)
  * `typeof()` 피연산자의 데이터 타입을 문자열로 출력.
  ```javascript
  // 기본자료형(null 제외)
  typeof('girin-dev'); // "string"

  // 함수
  typeof(function(){}); // "function"

  // null, 배열 등 객체(object)
  typeof([1,2,3,4]); // "object"
  typeof({name:'girin', city:'seoul'}); // "object"
  typeof(null); // "object", 설계적 결함

  // 선언되지 않은 변수에 대해 오류를 출력하지 않는 설계적 결함
  typeof(variable_undefined); // "undefined"
  ```
  * `instanceof()` 객체가 해당 객체형의 인스턴스인지 확인
  ```javascript
  function Person(){}
  var girin = new Person();
  girin instanceof Person; // true
  ```

## !!
  * 피연산자를 불린값으로 변환.
  * 기본자료형과 달리 객체는 빈 객체라도 존재하기만 하면 true로 변환.
  ```javascript
  !!''; // false
  !!1; // true

  obj = {};
  !!obj; // true
  arr = [];
  !!arr; // true
  ```

# JavaScript 06. 제어문(Control Flow)
  * **제어문(조건문과 반복문)** 에 의한 흐름제어로 데이터 흐름을 제어
  * 조건에 따른 명령 실행(조건문)과 반복 실행(반복문)이며 일반적으로 순차적으로 진행되는 코드의 진행을 변경하고 조건과 실행여부 등을 변경, 반복할 수 있다.

## 블록 구문 (Block statement)
  * `{ }` 구문의 기본
  * 함수는 함수 선언 단계에서 실행되지 않고 호출을 할 때에만 실행된다.
  * 자바스크립트에서 지역변수는 함수에만 적용된다. (Scope)

## 조건문 (Conditional statement)
  * `if문`
    * [조건식]이 `true`일 경우 특정 코드블록을 실행한다.
    * `else if`와 `else`는 생략해도 코드는 실행된다.
  ```JavaScript
  if ([조건식1]){
    // 조건식1이 true일 경우 이 코드불록을 실행.
  } else if ([조건식2]) {
    // 조건식1이 false이고 조건식2가 true일 경우 이 코드블록을 실행.
  } else {
    // 조건식1, 조건식2가 모두 false일 경우 이 코드블록을 실행
  }
  ```
  * `switch문`
    * `switch` 변수의 값과 일치하는 `case`문 실행.
    * `break`를 넣지 않으면 변수값과 일치하는 `case`문을 실행한 이후에도 진행하여 `break;`에 대항하는 값 반환
    ```javascript
    var coffee = 'americano';

    switch (coffee) {
      case 'americano':
        console.log('coffee americano');        
        break;
      case 'cafe-latte':
        console.log('coffee cafe-latte');        
        break;
      case 'espresso':
        console.log('coffee espresso');        
        break;
      default:
        console.log('unknown coffee');        
    }
    ```

## 반복문 (Loop, Iteration)
  * `for문`, `while문`, `do while문`
  * `for문`
    * 가장 일반적인 반복문
    * 특정 조건이 거짓일 때까지 반복
    * 내부의 식들은 선택사항. (아무 것도 선언하지 않으면 무한루프)
    * 초기문 선언시 변수는 전역변수로 처리되어 메모리 할당(ES5의 문제점)
    * [반복문 시행순서](http://poiemaweb.com/js-control-flow#31-for-문) 유의
  ```javascript
  for ([초기문]; [조건문]; [증감문]) {
    구문;
  }

  for (var i = 0; i < 5; i++) {
    console.log(i);
  }
  // i가 0부터 1씩 증가시킨 값을 출력하는데 5 미만까지 출력하라.
  // 0
  // 1
  // 2
  // 3
  // 4

  // 역으로 반복하는 것도 가능
  // i가 4부터 1씩 감소시킨 값을 출력하는데 0 이상까지 출력하라.
  for (var i = 4; i >= 0; i--) {
    console.log(i)
  }
  // 출력 값은 위와 같으나 순서가 역순
  ```

  * `while문`  
    * 조건문이 참이면 코드블록 반복(언제나 참이면 무한루프)
    * 조건문이 언제나 참이어도 특정 조건에서 break문을 이용해 무한루프에서 탈출할 수 있다.
  ```javascript
  var n = 0;
  var x = 0;

  while (n < 5) {
    n++;
    x += 1;
    console.log(x);
  }
  // 0
  // 1
  // 2
  // 3
  // 4
  ```

  * `do while문`
    * while문과 유사하나 조건문 확인 전 무조건 1회 실행.
    * 현업에서 거의 쓰이지 않는다고 함.
  ```javascript
  var i = 0;
  do {
    console.log(i);
    i++;
  } while (i < 3);
  // 0, 무조건 1회 실행된 값
  // 1
  // 2
  ```

  * continue
    * 구문 실행을 스킵하고 반복문 조건문으로 이동
    ```JavaScript
    for (var i = 0; i < 5; i++){
      if (i < 3) continue;
      console.log(i);
    }
    // 3
    // 4
    // 0,1,2는 3보다 작기 때문에 continue;에 의해 스킵.
    ```

## 평가 (Evaluating)
  * 조건식에 일반적 표현식(피연산자와 이항연산자) 뿐만 아니라 문자열, 숫자, 변수, 내장값(true, falsse, null, undefined, NaN, Infinity 등) 또한 들어갈 수 있음.
  * 이때 최대한 이 조건식을 참/거짓의 boolean으로 해석하려고 노력함. 문맥에 따른 암묵적인 강제 형 변환이 이루어진다는 뜻.
  * [Type Conversion Table](http://poiemaweb.com/js-control-flow#42-type-conversion-table)

  * 자료형 변환
    * 문자열(string) -> 숫자(number)
    ```javascript
    var string = '123'; // '123'
    string = +string; // 123
    string = string * 1; // 123
    string = parseInt(string); // 123
    string = Number(string); // 123, 그러나 Number()는 형변환을 위해 만들어진 함수가 아니기 때문에 비추. 원래 Number()란 숫자를 만들어내기 위해 자바스크립트가 갖고 있는 객체.
    ```  
    * 숫자(Number) -> 문자열(string)
    ```javascript
    var = number = 123; // 123
    number = number + ''; // '123'
    number = number.toString(); // '123'
    number = String(number) // '123', 그러나 String()은 형변환을 위해 만들어진 함수가 아니기 때문에 비추. 원래 String()도 Number()와 마찬가지로 문자열를 만들어내기 위해 자바스크립트가 갖고 있는 객체.
    ```

  * Truthy & Falsy values
    * 왠지 `false`일 것 같은 느낌이 드는 것들은 `false` 처리된다.(Falsy values)
    * `false`
    * `undefined`
    * `null`
    * `0`
    * `NaN`
    * `''`
    * 이외의 값과 객체들은 모두 `true`로 처리. (Truthy values)

  * Checking equality
    * 두 값을 비교할 때에는 동등연산자(==, !=)보다 일치연산자(===, !==)을 사용
    * 의도치 않은 결과와 복잡성, 예측성을 때문.
  * Checking existence
    * 객체나 배열이 값을 갖고 있으면 truthy value로 취급되는데 이를 통해 존재여부를 확인할 수 있다.(빈 객체나 배열도 `true` 취급, 그러나 빈 문자열은 `false`)

# JavaScript 07. 객체(Object)

  * 자바스크립트에서 기본자료형(문자열, 숫자, Boolean, null, undefined, symbol)을 제외한 모든 값들은 객체

## 객체(Object)란?
  * property(데이터-이름(키)과 값)와 method(행위)로 구성되어 있고, 갖고 있는 데이터를 활용하게 하는 것을 포함한 것.
  * 객체 간의 상속관계를 통해 각 개체들에 프로퍼티와 메소드를 쓰는 불필요한 중복을 방지할 수 있다.

  * 프로퍼티 (Property)
    * 프로퍼티 명명법: 변수명과 다르게 빈 문자열이나 숫자로 시작해도 무관.
    * 프로퍼티 값: `undefined`는 오지 못함(`undefined`는 값을 할당하지 않은 경우 강제적으로 할당하는 것으로 객체의 정보를 담고 있지 않은 객체로서의 프로퍼티는 존재의 의미가 없다. 따라서 `undefined`을 쓰면 syntax error 발생. 관련 링크 http://insanehong.kr/post/javascript-object/)

  * 메소드 (Method)
    * 프로퍼티 값에 일반 값이 아닌 함수가 오면 메소드가 됨.

## 객체 생성 방법(암기)
  객체를 마음대로 언제든지 바꿀 수 있다는 것이 자바스크립트의 장점.
  * 객체 생성 방법 3가지
    1. 객체 리터럴
    2. Object() 생성자 함수
    3. 생성자 함수

  1. **객체리터럴**
  * 내부적으로 2번 방식으로 처리하며, 쓰기 편하라고 만들어 놓은 편의기능.
  * 선언과 동시에 인스턴스 생성.

  ```javascript
  var [객체명] = {
    [프로퍼티명]: [프로퍼티값];
    [프로퍼티명]: [함수(메소드)];
  };

  var girin = {
    location: 'Seoul',
    computer: 'MacBook Pro',
    saySth: function () {
      console.log('I live in '+ this.location)
    }
  }
  ```
  2. Object() 생성자 함수
  * new 연산자와 Object() 생성자 함수를 이용해 빈 객체를 생성하고 여기에 프로퍼티와 메소드를 추가하는 방법.
  * 특별한 이유가 없다면 1. 객체리터럴 방식이 더 유용.(어차피 내부 작동방식은 동일)
  ```javascript
  var [객체명] = new Object();
  [객체명].[프로퍼티명] = [프로퍼티값];
  [객체명].[프로퍼티명] = [함수(메소드)];


  var girin = new Object();

  girin.cafe = 'americano';
  girin.coffee = function(){
    console.log('I like ' + this.cafe)
  }
  ```
  3. 생성자 함수
  * 중복된 객체를 다수 만들어야 할 경우(중복된 인스턴스가 많을 경우) 사용.
  * 생성자 함수명은 일반적으로 대문자로 시작(암묵적 약속, 일반 함수와의 혼란을 방지)

  ```javascript
  // 내용을 채운 객체(생성자 함수) 생성
  function [생성자함수명]([인자값1],[인자값2]){
    this.[프로퍼티명] = [인자값1];
    this.[프로퍼티명] = [인자값2];
    this.[프로퍼티명] = [함수(메소드)]
  }

  // 정의한 생성자 함수를 이용해 인스턴스 생성
  var [객체명] = new [생성자함수명]([인자값1], [인자값2]);
  ```
  ```javascript
  function Seoulian(name, gender){
    var married = true; // private
    this.name = name; // public
    this.gender = gender;
    this.sayHello = function(){
      console.log('Hi! I\'m Seoulian, ' + this.name)
    };
  }

  var seoulian1 = new Seoulian('girin', 'female');
  var seoulian2 = new Seoulian('owl', 'male');

  console.log(seoulian1.name); // 'girin'
  console.log(seoulian1.married); // undefined
  ```
  * 이때 `this`는 생성자 함수로 생성될 인스턴스를 가르키며 외부에서 참조 가능하다.(public)
  * 반면 `var`는 생성자 함수 안에서 선언된 지역 변수로서 외부에서 접근 불가능하다.(private)

## 객체 프로퍼티 접근
  이미 생성한 프로퍼티를 어떻게 쓸 것인가에 대한 문제
  * 프로퍼티 이름
    * 프로퍼티명은 사실 문자열이기 때문에 ''를 붙여줘야 하지만 자바스크립트에서 생략 가능.
    * 그러나 `-`와 같이 연산자로 착각할 수 있는 문자열이 프로퍼티명에 있을 경우 ''를 반드시 써줘야 함. (케밥케이스) 그래서 그냥 캐멀케이스나 스네이크케이스를 쓰든지 해라.
    * ''로 처리된 프로퍼티명은 외부에서 접근시 ['']로만 접근 할 수 있음. 안 붙이면 프로퍼티가 아닌 변수로 인식.
    * 자바스크립트에서 이미 약속되어 있는 `예약어`도 가급적 피할 것.

  * 프로퍼티 읽기
    * 마침표 표기법
    * 대괄호 표기법
  ```javascript
  var seoulian = {
    'location': 'gangnamgu',
    'former-job' : 'teacher',
    gender: 'etc',
  };

  // console.log()를 빼고 입력하면 출력시 ''를 포함
  // 마침표 표기법
  console.log(seoulian.former-job); // ReferenceError: job is not defined
  console.log(seoulian[former-job]); // ReferenceError: former is not defined
  console.log(seoulian['former-job']); // teacher
  // 대괄호 표기법
  console.log(seoulian.location); // gangnamgu
  console.log(seoulian[location]); // undefined(브라우저), ReferenceError: location is not defined(node.js)
  console.log(seoulian['location']); // gangnamgu
  ```
  * 프로퍼티 값 갱신
    * 변수의 재할당과 동일한 원리로 갱신(복사 후 참조 변경)
    * 동일한 원리인 이유는 객체는 변경가능하나 객체 내의 프로퍼티들은 변경불가한 기본형이기 때문.
  ```javascript
  var seoulian = {
    'location': 'gurogu',
    'former-job': 'teacher',
    gender: 'etc',
  };

  seoulian['former-job'] = 'soldier';
  console.log(seoulian['former-job']); // soldier
  ```

  * 프로퍼티 동적 생성
    * 객채가 이미 갖고 있지 않은 프로퍼티라도 값을 할당하면 객체에 해당 프로퍼티를 추가하고 값을 할당함.
  ```javascript
  var seoulian = {
    'location': 'jongrogu',
    'former-job': 'ironman',
    gender: 'female',
  }
  seoulian.age = 62;
  console.log(seoulian.age); // 62
  ```

  * 프로퍼티 삭제
    * `delete` 연산자 활용
  ```javascript
  delete [객체명].[프로퍼티명] // 프로퍼티 삭제
  delete [객체명] // 그냥 무시됨.
  // 객체를 삭제한다는 것은 참조값을 삭제한다는 것으로 [객체명]이 null을 참조하게 해야한다는 것이다. 일반적인 의미로 ''객체를 삭제한다'라는 것 자체가 모순.
  ```

  * for-in문 / for-of문
    * `for-in문` 객체 내 모든 프로퍼티에 대한 루프(loop)를 수행하게 함.
      프로퍼티 갯수만큼 알아서 순회한다.
      그러나 프로퍼티의 순서를 보장하지 않는다.(객체는 동적할당이라는 개념이 있기 때문).
      여간하면 쓴 순서대로 나오지만 그렇게 나오지 않는 경우가 존재한다는 뜻.\
      따라서 배열에서는 쓰지 않는 것을 추천.
    * `for-of문` 배열 내 모든 요소에 대한 루프(loop)를 수행하게 함.
      배열은 순서가 중요하기 때문에 ES6에서 새롭게 추가되었다.
    ```javascript
    var seoulian = {
      'first-name': 'girin',
      'last-name': 'dev',
      gender: 'male'
    };

    // for-in문
    for (var prop in seoulian) {
      console.log(prop + ': ' + seoulian[prop]);
    }
    /*
    first-name: girin
    last-name: dev
    gender: male
    */

    // for-of문
    var array = ['남','한','산','성'];
    for (const value of array) {
      console.log(value);
    }
    /*
    남
    한
    산
    성
    */
    ```
## Pass-by-reference
  * 객체는 메모리 저장시 heap이라는 방법으로 할당. heap은 차곡차곡 쌓아 순차적 저장을 하는 stack과 다르게 공간을 찾아서 분리저장하는 것.
  * object는 객체형 또는 참조형. 즉, 객체는 값을 갖고 있는게(실제값) 아니라 값을 갖고 있는 메모리의 주소를 갖고 있는 것(참조값).
  ```javascript
  var bar = [객체];
  ```
  * 위와 같은 코드가 있다고 하면 **전역변수 bar와 객체가 모두 정확히 같은 메모리를 가르키게 되고**, 이것은 복사해서 사실상 다른 위치에 저장하게 되는 pass-by-value와 다르다.
  * **이 방식은 원본 객체가 다른 요소에 의해 변경될 위험을 내재하고 있다.**
  ```javascript
  // 객체 리터럴 방식 생성
  var jeju = {
    tangerine: 10
  }

  var seoguipo = jeju;
  console.log(jeju.tangerine, seoguipo.tangerine); // 10 10
  console.log(jeju === seoguipo); // true

  seoguipo.tangerine = 20;
  console.log(jeju.tangerine, seoguipo.tangerine); // 20 20
  console.log(jeju === seoguipo); // true
  // 전역변수 seoguipo의 프로퍼티를 변경하였지만 객체 jeju의 프로퍼티도 같이 변경됨을 확일할 수 있다.
  ```

## Pass-by-value
  * 기본자료형은 값이 한번 정해지면 바뀔 수 없다.(변경불가성)
  ```javascript
  var a = 1;
  var b = a;

  console.log(a, b); // 1 1
  console.log(a === b); // true

  a = 10;
  console.log(a, b); // 10 1
  console.log(a === b); // false
  // 전역변수 a는 1이라는 숫자형 값을 갖고 있고, b는 마찬가지로 a와 같은 값의 숫자형 값 1을 갖고 있다. 이후 a를 10에 할당(재할당)하자 a는 10이 되지만, b는 그대로 1이다. 기본자료형의 값은 변경이 불가하며 값을 복사하여 저장한다. 즉, a와 b는 같은 1을 갖고 있지만 다른 메모리 위치를 참조하고 있다.
  ```

## 객체의 분류
  * Object는 웹페이지 등을 표현하기 위해 이미 내장되어 있는 Built-in Object(내장객체)와 사용자가 임의로 생성할 수 있는 Host Object(사용자 정의 객체)를 갖고 있다.
  * Built-in Object에는 Standard Built-in Objects (or Global Objects), BOM (Browser Object Model), DOM (Document Object Model)이 있다.
  * 이 중 BOM와 DOM을 묶어 Native Object라고 하는데 이것은 브라우저(클라이언트)에 존재.(node에는 없다.)
  * 자바스크립트는 DOM을 컨트롤하는 것.

# JavaScript 09. 함수 (Function)
  * 특정 작업 수행을 위해 구문들을 그룹화해 놓은 개념.
  * 코드의 재사용
  * 객체 생성, 객체의 행위 지정(메소드), 정보의 구성/은닉, 클로저, 모듈화 등 여러 기능 수행
  * 함수도 객체의 일부이며 변수나 객체, 배열 등에 저장할 수 있고, 인수 및 반환값으로도 기능할 수 있다.(일급객체의 특징)

## 함수 정의 방법 3가지(암기)
  * 함수를 정의하는 방식
    1. 함수선언식 (Function declaration)
    2. 함수표현식 (Function expression)hd
    3. Function() 생성자 함수
  1. 함수선언식 (Function declaration)
  * 내부적으로 변수명과 함수명을 똑같이 만든 함수표현식으로 인식한다.
  * 호이스팅에서 함수표현식과 차이가 나는데, 정의되는 위치와 무관하게 어디서든 호출할 수 있다. 반면 함수표현식은 변수 호이스팅 발생.
  * 함수명을 생략할 수 없고 0개 이상의 매개변수(자료형 미정으로 함수 몸체에서 자료형 체크 필요) 실행 구문을 갖는다.
  ```javascript
  function plus(num){
    return num + num;
  }
  ```

  2. 함수표현식 (Function expression)
  * 함수는 일급객체로서의 특징을 갖는다
  * 함수를 정의하고 변수에 할당하는 방식
  * 아래 식에서 함수명 plus는 함수 안에서면 유요한 이름.(재귀적이거나 디버깅에만 쓰임)
  ```javascript
  // 기명 함수표현식(이름붙은 함수 표현식)
  // 호출시 함수명이 아니라 변수명으로 해야한다.
  var foo = function plus(num1, num2){
    return num1 + num2;
  }
  // 익명 함수표현식(이름없는 함수 포현식)
  var bar = function(num1, num2){
    return num1 + num2;
  }

  console.log(foo(1, 2)); // 3
  console.log(bar(1, 2)); // 3
  console.log(plus(1, 2)); // Uncaught ReferenceError: plus is not defined
  ```
  <!-- * 함수표현식을 다른 변수로 새로 할당하면 객체인 함수의 특성상 동일한 참조값을 갖는다.
  * 일반 객체와 달리 다른 변수를 재할당하면 다른 값을 갖도록 할당된다(?) 재공부 필요.
  ```javascript
  var foo = function(a, b){
    return a * b;
  }

  var bar = foo;
  console.log(foo(2, 5), bar(2, 5)); // 10 10
  console.log(foo === bar); // true

  var foo = function(a, b){
    return a + b;
  }
  console.log(foo(2, 5), bar(2, 5)); // 7 10
  console.log(foo === bar); // false
  ``` -->

  3. Function() 생성자 함수
  * 내부적으로 함수선언식은 함수표현식으로 처리되고, 함수표현식은 Function() 생성자 함수로 처리된다. 결국 앞의 두 방법은 3번의 방법을 쓰기 편하게 만들어 놓은 것.
  * 성능 이슈와 함수의 호이스팅을 고려했을때 함수 표현식을 쓰는게 좋다.
  ```javascript
  new Function([매개변수1], [매개변수2], ... [매개변수N], [함수 몸체] )
  var cup = new Function('number', 'return number + number');
  console.log(cup(10)); // 20
  ```
## 함수 호이스팅 (Function Hoisting)
  * 호이스팅이란 var나 function 등의 선언문을 해당 Scope의 맨 위로 옮기는 것.
  * 자바스크립트 엔진이 스크립트 로딩되는 그 시점에 바로 함수선언식으로 정의된 함수를 한번에 선언, 초기화, 할당해버린다. (VO, variable object에 저장)
  * 이 때문에 **함수선언식** 의 경우 어디에서 선언하든 호출이 가능하다. 그러나 이런 식의 코드는 비추.
  ```javascript
  // 함수선언식
  var foo = plus(5,6);

  function apple(num1, num2){
   return num1 + num2;
  }
  ```
  * ES6는 `let`, `const`를 포함한 모든 선언(var, let, const, function, class)를 호이스팅
  * **함수표현식** 은 변수 호이스팅이 발생하기 때문에 변수 생성, undefined으로 초기화만 진행되고, 선언할 때 할당된다. 스크립트 로딩 시점에 VO에 함수를 할당하는 함수선언식과 구분.
  * 우리의 논리적 직관에 맞지 않고 VO에 부담을 주는 함수선언식보다 함수표현식을 쓸 것을 추천(Douglas Crockford)

## First-class object (일급객체)
  * 일급객체의 조건
    >1. 무명의 리터럴로 표현 가능
    >2. 변수나 자료구조(객체, 배열..)에 저장 가능
    >3. 함수의 파라미터로 전달 가능
    > 함수의 인자로 다른 함수를 넣을 수 있다.(콜백함수)
    >4. 반환값(return value)으로 사용 가능
    이렇게 짜여진 남의 코드를 독해할 줄 알아야 한다.
  * javascript 함수는 일급객체
  * 다른 객체와 구별되는 특징: 호출 가능

## 매개변수 (Parameter, 인자)
  함수내 변수와 동일하게 작동
  * 매개변수 (Parameter, 인자)와 인수(argument)
    * 매개변수는 인수가 할당된 파라미터에 할당된 것.
    * 인수를 전달받지 못한 매개변수는 undefined로 초기화된다.
  ```javascript
  var foo = function(p1, p2){
    console.log(p1, p2);
  }
  foo(1); // 1 undefined
  ```
  * Call-by-value
    * 기본자료형의 동작방식
    * 함수 호출시 기본자료형 인수를 매개변수로 전달할 때, 매개변수에 값을 복사하여 함수로 전달하는 방식
    * 따라서 함수 내에서 전달된 인수의 값이 변경되었다고 해도 전달이 완료된 기본자료형 값은 변경되지 않는다.
    ```javascript
    function foo(primitive){
      primitive += 1;
      return primitive;
    }

    var x = 0;

    console.log(foo(x)); // 1
    console.log(x); // 0
    // 함수 foo를 통해 함수 내 인수(x)의 값이 변경되었으나 기존의 기본자료형 전역변수인 x는 그대로 0이다.
    ```
  * Call-by-reference
    * 함수의 인자(매개변수)에 외부의 객체를 전달했을때, 해당 함수에서 객체의 값이 변경되면, 외부의 원래 객체의 값도 같이 변경된다. (객체는 변경가능하니까)
    * Pass-by 와 동일한 작동. pass와 call는 용어가 다르지만 사용처의 차이일 뿐.(pass는 변수, call은 함수)
    ```javascript
    function changeVal(primitive, obj){
      primitive += 10;
      obj.name = 'Yi';
      obj.gender = 'male';
    }

    var num = 100;
    var objt = {
      name: 'Park',
      gender: 'female'
    };

    console.log(num); // 100;
    console.log(objt); // Object {name: 'Park', gender: 'female'}

    changeVal(num, objt);

    // 함수를 통해 매개변수로 받은 인수를 변경하면
    // num은 기본자료형으로 그 값이 변하지 않지만
    // objt는 객체로 그 값이 변한다.
    console.log(num); // 100;
    console.log(objt); // Object {name: 'Yi', gender: 'male'}
    ```
    * 순수함수와 비순수함수
      * 순수함수
      외부에 영향을 주지 않는 함수
      * 비순수 함수
      위 `changeVal`과 같이 외부에 영향을 주는 함수
      외부 객체를 인자로 갖고 있는 함수일 확률이 높고 의도치 않은 값의 변경이 나타날 수 있음.
      즉, 코드의 예측성을 떨어뜨림.

## 반환값 (return value)
  * `return`을 만나면 함수 진행을 중단하고 함수를 호출한 코드로 되돌아간다.
  * `return`이 없으면 `undefined`을 반환.
  * 비순수함수의 경우 의도적으로 return을 생략하기도 한다. (외부 값 변경을 막기 위해서)

## 함수의 객체 프로퍼티
  * 함수도 객체이기 때문에 프로퍼티를 갖는다.
  * 일반 객체와 달리 함수만의 표준 프로퍼티를 갖는다.
  * arguments, caller, length, name, prototype, \__proto__
  1. arguments
  * 유사 배열 객체(순회가능)
  ```javascript
  function multiply(x, y) {
    console.log(arguments);
    return x * y;
  }

  console.log(multiply());     // {}
  console.log(multiply(1));    // { '0': 1 }
  console.log(multiply(1,2));  // { '0': 1, '1': 2 }
  console.log(multiply(1,2,3));// { '0': 1, '1': 2, '2': 3 }
  ```
  * 여기서 ‘0’은 프로퍼티명, 1은 프로퍼티값. 프로퍼티명을 0,1,2,3,.... 이런 순서로 갖고 있기 때문에 배열처럼 쓰이는 객체다~라고하면서 유사배열객체라고 한다.

  * 매개변수를 몇개 받아야 할지 판단할 수 없거나 이용자의 판단에 맡겨야 하는 상황이라면, 이때 아예 매개변수를 의도적으로 쓰지 않고 유사배열객체인 arguments를 사용한다. 이를 가변 인자 함수 구현이라고 한다.

  2. caller
  * 자신을 호출한 함수 의미

  3. length
  * 매개변수의 갯수

  4. name
  * 함수명
  * 익명함수의 경우 빈 문자열을 값으로 가짐

  5. \__proto__
  * 프로토타입 체인, [[Prototype]] 프로퍼티
  * 자식에게 없으면 생성자함수로 가는게 아니라 부모를 찾아간다. 엄밀히 말하면 부모-자식관계가 아니라 부모 역할을 하는 프로토타입 객체를 찾는데 거기도 없으면 쭉 찾아서 Object prototype까지 가서 있으면 출력, 없으면 Reference Error 출력.

  6. prototype
  * 함수 객체만이 갖고 있는 프로퍼티(객체지향의 근간)
  * 함수 객체가 생성자로 사용될 때 이 함수를 통해 생성된 객체의 부모 역할을 하는 객체를 가리킨다.
  ```javascript
  [객체생성자함수명].prototype.[프로퍼티명]= “[어떤값]”
  ```
  * 위 코드의 경우 실행결과가 [객체생성자함수명]이 만든 모든 인스턴스에 동시에 적용이 된다. 공통적인 내용을 다수의 인스턴스가 적용할 때 하나하나 일일히 인스턴스마다 추가해 주는 것은 비효율적이기 때문에 사용된다. 예를 들면 Person.prototype이라는 부모에 sayHello= “[어떤값]” 을 추가해놓으면 알아서 자동으로 모든 인스턴스가 해당 값을 갖게 된다.


## 함수의 다양한 형태
  * 즉시호출함수표현식(IIFE, Immediately Invoke Function Expression)
    * 최초 한번만 호출되어 재호출 불가.
    * 초기화 처리 등에 사용.
    * 변수명 충돌을 방지하는 목적으로도 사용.(jQuery 등 여러 라이브러리의 변수들의 변수명 충돌 방지)
    * 서버같은거 설정 바뀌면 껏다 켜야 하는데 이 경우가 설정파일을 실행 후 딱 한번만 읽게 하는 것으로 이 경우에 사용가능.
    * 전역변수로 골머리를 앓는데 이때도 유용. 전역변수를 하나도 안 쓸 수 있음.
  ```javascript
  // 기명 즉시실행함수(named immediately-invoked function expression)
  (function namedFunction() {
    var a = 2;
    var b = 4;
    return a * b;
  }());

  // 익명 즉시실행함수(immediately-invoked function expression)
  (function () {
    var a = 2;
    var b = 4;
    return a * b;
  }());
  ```

  * 내부함수 (Inner function)
    * 전역/지역 구분 필요
    * 함수 내부에 정의된 함수
    * 내부함수(자식)는 부모함수의 변수에 접근할 수 있다.
    * 부모함수는 자식함수의 변수에 접근할 수 없다.
    * 내부함수는 부모함수 외부에서 접근할 수 없다.

  * 콜백함수 (Callback function)
    * 명시적 호출이 아닌 특정 이벤트 발생시 시스템에 의해 호출되는 함수
    * 이벤트 핸들러가 대표적인 예
    * 비동기식 처리 모델에 사용(처리가 종료되었을때 호출될 함수(콜백함수)를 미리 매개변수에 전달해 놓았다가, 실제 처리가 종료되면 콜백함수 호출)
  ```html
  <!DOCTYPE html>
  <html>
  <body>
    <button id="myButton">Click me</button>
    <script>
      // 특정 이벤트(클릭)이 발생했을때 시스템에 의해 호출.
      var button = document.getElementById('myButton');
      button.addEventListener('click', function() {
        console.log('button clicked!');
      });
    </script>
  </body>
  </html>
  ```
# JavaScript 10. 프로토타입과 객체지향 (Prototype)
  * 보통 객체지향언어는 클래스를 사용해서 상속으르 구현. 그러나 자바스크립트는 프로토타입으로 함.
## 프로토타입 객체
  * 모든 객체의 prototype 종점은 Object.prototype
## \[[Prototype]] 프로퍼티 vs prototype 프로퍼티

## constructor 프로퍼티
  * constructor는 생모를 찾아가는 과정
  ```
  me.constructor
  => __proto__
  => Person.prototype.constructor === Person 생성자 함수
  ```
## Prototype chain
  * 객체 리터럴로 생성한 인스턴스와 생성자 함수로 생성한 인스턴스는 prototype chain이 다르다. 따라서 prototype을 활용하고 싶다면 ‘생성자 함수를 통한 인스터스 생성’을 해야 한다.
  * 왜 생성자 함수를 통한 인스턴스 생성을 해야하나? 라는 질문에 대한 답이 된다.
## 프로토타입 객체의 확장

## 기본자료형(Primitive data type)의 확장
  * new String() -> 문자열을 객체로 갖는 객체 생성자 함수.
  * 문자열.constructor === String이 가능한 건 자바스크립트가 연관 객체(String())로 일시적으로 변환되어 프로토타입 객체를 공유하기 때문
  * 기본자료형 뒤에 점을 찍고 메소드를 적으면 자바스크립트가 내부적으로 관련한 객체로 변환하여 작동시키고, 작동이 끝나면 다시 기본자료형으로 돌려놓음.
  * 빌트인을 건드려서 관련 모든 인스턴스에 영향을 미칠 수 있는 나만의 메소드를 만들 수 있는데... 이것은 비추! 관대한 자바스크립트의 특성을 볼 수 있는 부분.(다른 언어들은 빌트인을 아예 못 건드리게 하는게 보통)

## 프로토타입 객체의 변경
  * 자바스크립트는 클래스를 활용하는 자바와 같지 않은데... 자바처럼 쓸 수 없을까? 라는 생각으로 나온 꼼수. 이후에 ES6에서 클래스를 아예 추가해줬다. 물론 이것도 내부적으로는 프로토타입개념으로 작동
  * 권장하는 방식은 아님
  * constructor 연결이 깨짐.
## 프로토타입 체인 동작 조건
  * 객체의 프로퍼티를 참조하는 경우, 해당 객체에 프로퍼티가 없는 경우, 프로토타입 체인이 동작한다.
  * 객체의 프로퍼티에 값을 할당하는 경우, 프로토타입 체인이 동작하지 않는다.  이미 찾았는데 뭐하러 프로토타입에 올라가겠음

# JavaScript 11. 변수에의 접근성과 생존기간 (life-cycle)
  * 자바스크립트는 블록레벨스코프가 아니라 펑션레벨스코프!
  * 블록레벨스코프처럼 쓰고 싶으면 var가 아니라 ES6에 새롭게 추가된 let을 쓰자.
  * 스코프는 동일한 변수를 또 쓰기 위해서 고안된 개념(폴더와 디렉토리 개념과 비슷)

## Global scope
  * 전역의 실체
    * server-side(Node.js)에서는 `glabal`(전역객체)
    * 브라우저-side에서 `window`라는 전역객체
  * 전역변수라는 것은 결국 전역객체 window의 프로퍼티.

## Non block-level scope
  * function 밖에서 선언된 변수는 블럭 내에서 선언되었다고 할지라도 모두 전역변수, 즉 global scope를 가짐.

## Function scope
  * 함수 내에서 선언된 매개변수와 변수는 내부에서만 유효(지역변수)
  * 전역변수와 지역변수가 같은 이름으로 중복 선언 되었다고 해도 지역변수를 우선한다.
  * 즉, 실행 컨텍스트에서 스코프 체인에 의한 참조 순위가 존재한다는 뜻.

## 암묵적 전역 (inplied globals)
  * 함수 내에서 `var`를 사용하지 않고 변수를 설정하더라도 자바스크립트는 이를 암묵적으로 전역변수로 선언
  * 하지만 의도치 않은 전역변수는 혼란을 초래하므로 `var`를 반드시 사용할 것.
  * 각각의 코드를 실행해보면서 확인해 볼 것.

## Lexical scoping (Static scoping)
  * 자바스크립트는 함수가 선언된 시점에서의 유효범위를 갖는다. 호출 시점이 아니다.
  * 따라서 지역함수 내에 호출이 벌어져도 선언 시점에서의 스코프가 결정.

## 변수명의 중복
  * 여러 javascript파일을 불러오는 경우 전역변수들끼리 중복이 될 수 있다.
  * 이 경우 중복된 변수가 영향을 미쳐 코드가 정상작동하지 않을 수 있다.
  * 따라서 전역변수는 되도록 쓰지 말아야 하며 스코프는 좁힐수록 좋다.

## 최소한의 전역변수 사용
  * 즉시실행함수사용
  * 더글라스 크락포드의 제안: 굳이 쓰려면 전연변수를 모아놓은 객체를 만들어서 쓸 것.

## 즉시실행함수를 이용한 전역변수 사용 억제
  * 즉시실행함수를 사용하면 전역변수를 만들지 않게 되어 라이브러리에 자주 이용된다. 실행함수가 실행된 후 해당 함수는 바로 전역에서 사라진다.

# JavaScript 12. 함수 호출 패턴에 따라 결정되는 this
  * 일반적인 객체에는 this가 없고 함수객체에만 존재.
  * 기본은 this가 전역객체(window/global)를 의미
  * 이 두가지 빼고는 메소드와 생성자 함수일 때만 다름.

## 함수 호출 패턴과 this 바인딩
  * 아래 4가지 패턴에 따라 어떤 객체 this에 바인딩할지 결정.
  1. 함수 호출 패턴
  2. 매소드 호출 패턴
  3. 생성자 호출 패턴
  4. apply 호출 패턴

## 함수 호출 패턴(Function Invocation Pattern)
  * 브라우저에서는 `window`, 서버(node.js)에서는 `global`

## 메소드 호출 패턴(Method Invocation Pattern)
  * 해당 메소드를 소유한 객체가 this

## 생성자 호출 패턴(Constructor Invocation Pattern)
  * 생성자로 만든 함수라면 new를 넣어주자...
  * new 연산자와 함께 생성자 함수를 호출하면 자바스크립트가 알아서 빈 객체를 생성하고 함수 내부의 this 의 참조(원래 window)를 지우고 생성한 빈 객체를 참조하게 한다.  따라서 이때 this는 생성된 빈 객체~(this를 생성된 빈 객체에 바인딩한다.)
  * `[앞] instanceof [뒤]`=> ‘뒤’가 ‘앞’을 만든 주체니? 라는 뜻
  callee 는 불림 당한 것
  caller 는 부른 것

## apply 호출 패턴(Apply Invocation Pattern)
arguments는 아무거나 다 되는게 아니라 유사배열객체만 가능.
이번엔 this가 아니라 apply(arguments)를 this로 쓸게~ 라는 의미.
call()은 하는 일은 같다.
