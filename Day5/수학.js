//1.Math.abs() : 주어진 숫자의 절댓값을 반환한다.
console.log(Math.abs(-2)); //2출력
//2.Math.ceil() : 올림처리해서 정수로 반환 <-> Math.floor() : 내립처리해서 반환
console.log(Math.ceil(3.14141)); //4출력
console.log(Math.floor(3.1414141));//3출력
//3.Math.max() : 가장 큰 숫자를 반환 <-> Math.min() : 가장 작은 숫자를 반환(음수도 포험)
console.log(Math.max(12,23,45,456,234));
//4.Math.pow() : 주어진 숫자의 거듭제곱한 값을 반환
console.log(Math.pow(4,2)); //16출력
//5.Math.random(): 숫자 0이상, 1미만의 난수를 반환
console.log(Math.random());
function random(min = 0, max = 10){
  return Math.floor(Math.random() * (max - min)) + min
}
console.log(random(10, 200));
//6.Math.round(): 반올림해서 정수로 반환한다.
const k = 2.21312;
const u = 2.6767;

console.log(Math.round(k));
console.log(Math.round(u));