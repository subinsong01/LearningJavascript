/* Nullish 병합
왼쪽에서부터 데이터를 확인하고, undefined, null이 아닌 경우를 제외하고 번환해줌 */

const a = 0;

const num = a || 7;
console.log(num); //7출력

const num2 = a ?? 7;
console.log(num2); // 0출력

console.log(null ?? undefined); //undefined 출력

//삼항 연산자

let n = 1;

if (n<2){
  console.log('참!')
} else {
  console .log('거짓!')
}

console.log(n < 2 ? '참!' : '거짓!');

function getAlert(message){
  return message ? message : '메세지가 존재하지 않아요 ㅠㅠ';
}

console.log(getAlert('메세지 왔어용 >3<'));
console.log(getAlert(''));