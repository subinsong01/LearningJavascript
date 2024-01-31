//문자형
const string1 = "Hello";
const string2 = `hello ${string1}!?`; 
  //템플릿 리터럴이라고 한다 -> 기호를 통해서 데이터를 만들어내는 것을 의미한다.
const string3 = 'hello'
// NaN = Not a Number

//typeof
const pi = 3.14;
console.log(typeof(pi));

//소수점 자르기
const a = 0.3;
const b = 0.3;

console.log(Number((a + b).toFixed(1)));
/*toFixed 주의할 점 : 숫자 데이터를 문자 데이터로 바꾼다
  해결하기 위해서 Number을 써주면 된다 */