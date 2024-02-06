const date = new Date();
console.log(date); //타임스탬프 

const d1 = new Date(2022,11,16,12,57,30)//년도, 월, 일, 시간, 분, 초 
console.log(d1);

//1 -> .getFullYear()와 .setFullYear() : 날짜 인스턴스의 '연도'를 반환하거나 지정한다.
//2 -> .getMonth() / setMonth() : 날짜 인스턴스의 월'을 반환하거나 지정한다. *JS는 유일하게 월을 제로베이스 기준으로 입력한다.*
//3 -> .getDate() / setDate() : 날짜 인스턴스의 '일'을 반환하거나 지정한다.

date.setFullYear(2025);
console.log(date.getFullYear());
console.log(date);
//4 -> .getHours() / .setHours()
//5 -> .getMinutes() / .setMinutes()
//6 -> .getSeconds() / .setSeconds()
//7 -> .getDay() : 날짜 인스턴스의 '요일'을 반환한다. 
const date1 = new Date();
const day = date1.getDay();

console.log(day);

function getDayKo(day){
  switch(day){
    case 0 : return '일요일'
    case 1 : return '월요일'
    case 2 : return '화요일'
    case 3 : return '수요일'
    case 4 : return '목요일'
    case 5 : return '금요일'
    case 6 : return '토요일'
  }
}

//8. getTime() / .setTime() -> `1970-01-01 00:00:00(유닉스)부터 경과한 날짜 인스턴스의 밀리초(ms)로 반환하거나 지정한다.
const date3 = new Date();
console.log(date3.getTime());
console.log(date3);

date3.setTime(1700000000);
console.log(date3.getTime());
console.log(date3);
//8. getTime() / .setTime() -> `1970-01-01 00:00:00(유닉스)부터 경과한 날짜 인스턴스의 밀리초(ms)로 반환하거나 지정한다.

const date4 = new Date();
console.log(date4.getTime());
console.log(date3);

date3.setTime(1700000000);
console.log(date3.getTime());
console.log(date3);

//9.isAfter : 두 시간을 비교해서 어떤게 더 나중인지를 반환
Date.prototype.isAfter = function (date) {
  const a = this.getTime();
  const b = date.getTime();
  return a > b;
}
const d4 = new Date('Sat Jan 01 2022 00:00:00 GMT+0900 (한국 표준시)');
const d2 = new Date('Sat Jan 01 2023 00:00:00 GMT+0900 (한국 표준시)');

console.log(d4.isAfter(d2));//false