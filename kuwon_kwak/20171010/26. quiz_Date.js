// 26. 요일 구하기
/* 
2016년 1월 1일은 금요일이다. 2016년 a월 b일은 무슨 요일일까? 
두 수 a, b를 입력받아 a월 b일이 무슨 요일인지 출력하는 getDayName 함수를 완성하라.

요일의 이름은 일요일부터 토요일까지 각각 SUN, MON, TUE, WED, THU, FRI, SAT를 출력한다.
예를 들어 a = 5, b = 24 가 입력된다면 5 월 24 일은 화요일이므로 TUE를 반환한다.
*/

// getDay()로 받아온 값을 "Sun"과 같은 문자열로 바꾸는 방법을 몰라 switch문을 사용하였다.
// 'Sun'과 같은 문자열을 배열에 집어넣고 0~n의 숫자를 매칭시키면 된다. 
// 의문점: today를 console.log()로 출력하면 2016-05-23T15:00:00.000Z 이게 뜬다. 구하고자 하는 시간-09:00 으로 뜨는데 그렇다면 이 값을 토대로 요일을 구하면 5월 24일의 요일이 구해지는게 아니라 5월 23일의 요일이 구해져야 하는 것 아닌가? 그러나 막상 코드를 실행하면 24일의 요일이 잘만 구해진다.
// 생각할 점: day는 코드를 실행할 때마다 계속해서 선언, 초기화, 할당, 참조 제거가 반복된다. day는 변할 필요가 없는데 다른 방법은 없을까? 그렇다고 전역변수로 처리하자면 더 많은 문제가 생긴다. 어떻게 해야할까?
function getDayName(a, b) {
    var today = new Date(2016, a - 1, b);
    console.log(today)
    var day = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    return day[today.getDay()]
}

// // getDay()로 받아온 값을 "Sun"과 같은 문자열로 바꾸는 방법을 몰라 switch문을 사용하였는데 아래와 같다.
// function getDayName(a, b) {
//     var today = new Date(2016, a - 1, b);
//     switch (today.getDay()) {
//         case 0:
//             return "Sun";
//             break;
//         case 1:
//             return "Mon";
//             break;
//         case 2:
//             return "Tue";
//             break;
//         case 3:
//             return "Wed";
//             break;
//         case 4:
//             return "Thu";
//             break;
//         case 5:
//             return "Fri";
//             break;
//         default:
//             return "Sat";
//     }
// }
console.log(getDayName(5, 24)); // TUE