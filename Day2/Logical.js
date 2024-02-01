//논리 

//1.And(&&) 
const a = true;
const b = false;

if(a&&b){
  console.log('모두가 참!');
} // 실행 안됨 

//주의할 점 
console.log( 0 && 1);
//0이 출력된다 -> 코드의 왼쪽에서 부터 확인을 해서, 거짓 데이터를 출력한다.
console.log('A' && 'B' && 'C');
//거짓을 찾지 못하면 결과적으로 마지막 문자가 출력된다.

//2.OR(||)

if(a||b){
  console.log('둘 중 하나가 참!');
}
//가장 먼저 만나는 참 데이터를 출력한다. (AND랑 완전히 반대 개념)
