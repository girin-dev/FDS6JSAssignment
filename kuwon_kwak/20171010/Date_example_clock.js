(function printNow() {
    var today = new Date();

    var dayNames = ['(일요일)', '(월요일)', '(화요일)', '(수요일)', '(목요일)', '(금요일)', '(토요일)']
        // getDay: 해당 요일(0 ~ 6)을 나타내는 정수를 반환한다.
    var day = dayNames[today.getDay()];

    var year = today.getFullYear(),
        month = today.getMonth() + 1,
        date = today.getDate(),
        hour = today.getHours(),
        minute = today.getMinutes(),
        second = today.getSeconds(),
        ampm = hour >= 12 ? 'PM' : 'AM';

    // 12시간제로 변경
    hour = hour % 12;
    hour = hour ? hour : 12; // 0 => 12

    // 10분 미만인 분과 초를 2자리로 변경
    minute = minute < 10 ? '0' + minute : minute;
    second = second < 10 ? '0' + second : second;

    var now = year + '년 ' + month + '월 ' + date + '일 ' + day + ' ' + hour + ':' + minute + ':' + second + ' ' + ampm;

    console.log(now);
    setTimeout(printNow, 1000);
}());