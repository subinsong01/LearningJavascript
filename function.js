// function getNumber() {
//   return 123;
// }
// console.log(getNumber());

const a = function(){
  console.log('A');
}

const b = function(c){
  console.log(c);
  c();
}
 b(a);

 // 중요 개념 : 함수는 하나의 자바스크립트 데이터로서 그 함수 자체와 함수 호출, 즉 소괄호를 열고 닫아서 실행하는 것과는 완전히 다른 개념 