// 12번 퀴즈 함수화하기 

console.log('#12. 정삼각형 출력하기');

var triangle = function(n) {
  for (i = 1; i <= n; i++) {
    var tree = "";
    for (z = 0; z < n - i; z++) {
      tree += " "
    }
    for (x = 0; x < 2 * i - 1; x++) {
      tree += "*"
    }
    console.log(tree);
  }
}

triangle(5);
triangle(1);
triangle(3);
triangle(8);

// 13번 퀴즈 함수화
console.log('\n' + '#13. 역정삼각형 출력하기');

/* eslint-disable */

function triangle(n) {

  var result = '';

  for (var cnt = 0; cnt < n; cnt += 1) {

    // 공백을 print 하는 loop
    for (var j = 0; j < cnt; j += 1) {
      result += ' ';
    }

    // *을 print 하는 loop
    for (var k = 0; k < (n + n - cnt - cnt - 1); k += 1) {
      result += '*';
    }

    // 개행
    result += '\n';
  }

  return result;
}

console.log(triangle(3));