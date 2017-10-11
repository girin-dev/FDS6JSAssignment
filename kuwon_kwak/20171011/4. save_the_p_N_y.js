// 4. 문자열 내 p와 y의 개수

// numPY함수는 대문자와 소문자가 섞여있는 문자열 s를 매개변수로 입력받는다. 
// 대소문자를 구별하지 않으며 s에 'p'의 개수와 'y'의 갯수를 비교해 같으면 true, 다르면 false를 리턴하도록 함수를 완성하라. 
// 'p', 'y' 모두 하나도 없는 경우는 항상 true를 리턴한다.
// 예를 들어 s가 'pPoooyY'면 true를 리턴하고 'Pyy'라면 false를 리턴한다.

// 정규 표현식 없이 만들기
function numPY(s) {
    // 인자에 아무것도 들어오지 않았을 경우를 대비한 방어코드
    s = s ? s : '';
    var str = s.toLowerCase();
    var check_p = 0;
    var check_y = 0;
    for (i = 0; i < str.length; i++) {
        if (str[i] === 'p') check_p += 1;
        if (str[i] === 'y') check_y += 1;
    }
    return (check_p === check_y);
}

// 정규표현식 이용한 방법
function numPY(s) {
    s = s ? s : ''
    var regexp_p = /p/gi;
    var regexp_y = /y/gi;
    return ((s.match(regexp_p) ? s.match(regexp_p).length : 0) === (s.match(regexp_y) ? s.match(regexp_y).length : 0));
}

console.log(numPY('pPoooyY')); // true
console.log(numPY('Pyy')); // false
console.log(numPY('ab')); // true
console.log(numPY('')); // true
console.log(numPY()); // true