// #7. 문자열을 숫자로 바꾸기

// strToInt 메소드는 문자열 str을 매개변수로 받는다. 
// str을 숫자로 변환한 결과를 반환하도록 strToInt를 작성하라. 
// 예를들어 str이 '1234'이면 1234를 반환하고, '-1234'이면 -1234를 반환한다. 
// str은 부호(+,-)와 숫자로만 구성되어 있고, 잘못된 값이 입력되는 경우는 없다.
// 4가지 이상의 방법이 존재

function strToInt(str) {
    return ((typeof(str) === "string") ? parseInt(str) : str.toString());
}

console.log(strToInt('1234')); // 1234
console.log(strToInt('-1234')); // -1234