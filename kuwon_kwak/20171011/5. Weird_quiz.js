// 5번 이상한 문자열 만들기
function toWeirdCase(str) {
    var splited = str.split(' ')
    var result = ''
    for (i = 0; i < splited.length; i++) {
        var a = splited[i];
        for (j = 0; j < a.length; j++) {
            if (j % 2 === 0) {
                var c = a[j].toUpperCase();
            } else {
                var c = a[j].toLowerCase();
            }
            result += c;
        }
        result += ' '
    }
    return result;
}

// 임기완 조교님 방법
// 공백이 복수로 연달아 있거나 ,. 등이 들어갈 경우를 생각해 정규표현식을 활용.



console.log(toWeirdCase('hello world')); // 'HeLlO WoRlD'
console.log(toWeirdCase('my name is lee')); // 'My NaMe Is LeE'
console.log(toWeirdCase('Battle cuiser and carrier')); // BaTtLe CuIsEr AnD CaRrIeR
console.log(toWeirdCase('Star bucks')); // StAr BuCkS
console.log(toWeirdCase('fast     campus     crews')); // FaSt CaMpUs CrEwS
console.log(toWeirdCase('f,a,.st   smf,.  campus     crews')); // FaSt CaMpUs CrEwS