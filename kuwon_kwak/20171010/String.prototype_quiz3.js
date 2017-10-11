// 3. 문자열 다루기
/*
alphaString46 함수는 문자열 s를 매개변수로 입력받는다. 
s의 길이가 4 ~ 6이고, 숫자로만 구성되어 있는지 확인하는 함수를 완성하라. 
예를 들어 s가 'a234'이면 false를 리턴하고 '1234'라면 true를 리턴한다
*/

function alphaString46(s) {
    // isNaN 써보시길
    s += ''
    var checkNum = 0;
    for (i = 0; i < 6; i++) {
        if (Number.isInteger(parseInt(s[i])) === true) {
            checkNum = checkNum + 1;
        }
    }
    if (checkNum > 3 && checkNum < 7) {
        return true;
    } else {
        return false;
    }

    // isNaN 써본 방법
    if (!s) return false;
    var len = s.length;
    return (len >= 4 && len <= 6) && !isNaN(s);

    // 정규표현식을 활용한 방법
    return /^\d{4, 6}$/.test(s);
}

console.log(alphaString46('123412'));
console.log(alphaString46('1234')); // true
console.log(alphaString46('9014')); // true
console.log(alphaString46('723')); // false
console.log(alphaString46('a234')); // false
console.log(alphaString46('')); // false
console.log(alphaString46()); // false