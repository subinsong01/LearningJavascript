//객체(Object)

//1. 생성자 함수 방식으로 데이터 만들기
// const user = new Object();
// user.name = 'SUBIN';
// user.age = 10;


// function User() {
//   this.name = 'SUBIN';
//   this.age = 10;
// }
// const user = new User();

//리터럴 방식으로 객체 데이터 생성 방법 -> 가장 편리한 방법

const user = {
  name : 'aaa',
  age : 10
}
console.log(user);
console.log(user.name); //점표기법
console.log(user['name']);//대괄호표기법 -> 데이터의 속성을 조회하는 경우 사용 

//Key는 고유하며 순서가 따로 존재하지 않는다.