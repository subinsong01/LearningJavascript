for(i = 9; i > -1; i-=1) {
  if( i < 4 ){
    break;
  }
  console.log(i);
}
//continue : 현재 반복을 중지하고 다음 반복으로 넘어간다.

//for of [] + 점표기법 사용 가능


const fruits = ['Apple', 'Banana', 'Cherry'];

// for (let i = 0; i < fruits.length; i+= 1){
//   console.log(fruits[i]);
// }

for ( const a of fruits ){
  console.log(a);
}
//객체 데이터를 사용하는 경우에는 for in을 사용해준다. + 순서 상관 없이 출력됨 
const user1 = {
  name : 'Lee',
  age : 23,
  city : 'Seoul'
}
for (const a in user1) {
  console.log(user1.name);
} // 객체 데이터이기 때문에 점 표기법 사용 가능 

const user = {
  name : 'Lee',
  age : 23,
  city : 'Seoul'
}
for (const a in user) {
  console.log(a);
  console.log(user[a]);
}
