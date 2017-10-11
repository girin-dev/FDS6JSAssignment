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

console.log(toWeirdCase('hello world')); // 'HeLlO WoRlD'
console.log(toWeirdCase('my name is lee')); // 'My NaMe Is LeE'
console.log(toWeirdCase('Battle cuiser and carrier')); // BaTtLe CuIsEr AnD CaRrIeR
console.log(toWeirdCase('Star bucks')); // StAr BuCkS
console.log(toWeirdCase('fast campus crews')); // FaSt CaMpUs CrEwS