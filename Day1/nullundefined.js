let age = null;
// null : 데이터가 일단 존재하지 않는다 / 혹은 값이 비어있다 

console.log(age);
setTimeout(function() {
  age = 85;
  console.log(age);
}, 1000)
//1000ms = 1초 

/* null <-> undefined 차이점은 
  1.null의 경우 명시적임으로, 우리가 직접 입력해주는 경우 -> 직접 할당해준다 
  2. undefined는 암시적으로, 우리가 직접 입력해주는 경우는 많지 않다. -> 
*/