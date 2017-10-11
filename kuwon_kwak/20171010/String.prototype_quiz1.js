// 1. 1 ~ 10,000의 숫자 중 8이 등장하는 횟수 구하기 (Google)
/*
1부터 10,000까지 8이라는 숫자가 총 몇번 나오는가? 
이를 구하는 함수를 완성하라.

단, 8이 포함되어 있는 숫자의 갯수를 카운팅 하는 것이 아니라 8이라는 숫자를 모두 카운팅 해야 한다. 
예를들어 8808은 3, 8888은 4로 카운팅 해야 한다.

(hint) 문자열 중 n번째에 있는 문자 : str.charAt(n) or str[n]
*/
function getCount8() {
    //   내 방식
    var n = 0;
    for (str = 1; str <= 10000; str++) {
        str = str + ''
        for (var i = 0; i < str.length; i++) {
            if (str[i] == 8) {
                n += 1;
            }
        }
    }
    console.log(n);

    //   이중 for문을 쓰지 않고 하는 방식 (미완)
    // var n = 0
    // for (str = 1; str <= 10000; str++) {
    //     var a = str + '';
    // }
    // for (i = 0; i < a.length; i++) {
    //     if (a[i] == 8) {
    //         n += 1;
    //     }
    // };
    // console.log(n);
}
console.log(getCount8()); // 4000