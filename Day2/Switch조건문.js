/* 기본 구조 
switch(조건) {
  case 값1 : 
    break;
  case 값2 :
    break
  default :
    //값1도 2도 아닌경우 출력 
}
*/
// switch -> if 변환이 항상 가능하지만, 역 방향은 때로 불가능함

//break 기호 사용하는 경우
function price(fruit){
  let p; 
  switch (fruit) {
    case 'Apple':
      p = 1000;
      break;
    case 'Banana':
      p = 1500;
      break;
      
    default:
      p = 0;
}
  return p
}

console.log(price('Apple'));

//break 대신 return 사용
function price(fruit){
  switch (fruit) {
    case 'Apple':
      return 1000;
    case 'Banana':
      return 1500;
    default:
      return 0;
}
}
console.log(price('Apple'));
console.log(price('J'));