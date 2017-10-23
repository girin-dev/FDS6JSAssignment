var answer = 0;
function collatz(num) {
    while (num !== 1 && answer < 500) {
        answer += 1;
        banbok(num);
        console.log('결과값: ' + num)
        console.log('반복횟수: ' + answer)
    };
    return num;
};

var banbok = function (n) {
    if (n % 2) {
        // 홀수의 경우
        n = n * 3 + 1;
        collatz(n)
    } else {
        // 짝수의 경우
        n = n / 2;
        collatz(n)
    }
}

    // 아래는 테스트로 출력해 보기 위한 코드입니다.
    console.log(collatz(6));
