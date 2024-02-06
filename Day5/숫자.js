/*1.toFixed() : 소수점 잘라서 문자로 반환
- parseFloat : 숫자로 반환해준다.
*/
const num = 3.1415115;

console.log(typeof(num.toFixed(2))); //string
console.log(parseFloat(num.toFixed(2))); //number

//2.toLocalString() : 숫자를 현지 언어 형식의 문자로 반환한다.
const num1 = 100000000;

console.log(num1.toLocaleString()); //문자데이터
console.log(`${num1.toLocaleString()}원`);

//3. Number.isInteger() : 숫자가 정수인지 확인 -> prototype 없이 class가 나온다 => 정적 메소드 (데이터에서 사용하는 것이 아님)
const a = 233411;
const b = 3.14;

console.log(Number.isInteger(a));
console.log(Number.isInteger(b));

//4.Number.isNaN() : 주어진 값이 'NaN'인지 확인
const c = NaN;
console.log(Number.isNaN(c)); // true 출력

//5. parseInt() : 주어진 값을 파싱해 특정 진수의 정수(숫자)로 반환한다. <-> parseFloat() : 주어진 값을 실수로 반환하며, 두반 째 인수를 적을 필요가 없다.
const str = '12.123213121';
const num8 = 12.313123;  

console.log(parseInt(str,10));
console.log(parseInt(num8,10));