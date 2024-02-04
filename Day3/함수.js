//함수 선언문
function hello(){
  console.log('Hello~')
}
hello();
//함수 표현식
const hello = function(){ 
}
//함수 선언문과 표현식 차이점 = 호이스팅

/*함수 선언문과 표현식 차이점 = 호이스팅
호이스팅 = 함수가 선언되어져 있는 그 해당 코드를 선언된 부분 내에서 유효한 범위 안에서 제일 꼭대기로 끌어올려서 동작하는 개녕 
선언에서만 발생하고, 표현에는 에러가 발생한다.*/ 

hello()

function hello(){
  console.log('Hello');
}// 에러가 발생하지 않음

const hello = function(){
  console.log('Hello~')
} //에러 발생 