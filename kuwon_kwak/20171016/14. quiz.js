// #14. 피보나치 수

// 피보나치 수는 0과 1로 시작하며, 다음 피보나치 수는 바로 앞의 두 피보나치 수의 합이 된다. 
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765, 10946…

// 2 이상의 n이 입력되었을 때, fibonacci 함수를 작성하여 n번째 피보나치 수를 반환하라. 예를 들어 n = 3 이라면 2 를 반환한다.

// 재귀함수 활용
// 재귀함수는 자신을 정의할 때 자기 자신을 재참조하는 방법을 뜻한다.(https://ko.wikipedia.org/wiki/재귀함수)
function fibonacci(n) {
    if (n === 1 || n === 2) {
        return 1;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2)
    }
}

console.log(fibonacci(2)); // 1
console.log(fibonacci(3)); // 2
console.log(fibonacci(4)); // 3
console.log(fibonacci(5)); // 5
console.log(fibonacci(6)); // 8