// 객체 데이터와 배열 데이터에서 사용한다.

const arr = [1,2,3];
const [a,b,c] = arr;

console.log(a,b,c);

//기본적으로 구조를 맞춰서 순서대로 변수에다 할당함 -> 사용하지 않을 변수는 단순하게 쉼표로 구분 

let n = 0;
let m = 0;
const arr2 = [1,2,3];

[,n,m] = arr2;
console.log(n,m);


const obj = {
  p: 1,
  q: 2,
  r: 3
};

const {p,q} = obj;
console.log(p,q);

//임시 저장 <-> 만약 기본값이 설정되어 있으면, 기본값이 출력된다.
const { u = 4 } = obj;
console.log(u);
//중간에 변수 이름을 변경하고 싶은 경우

const obj2 = {
  p: 1,
  q: 2,
  r: 3
};

const {x = 4, p : subin, y:ten = 10} = obj2
console.log(x,subin,ten);
//나머지 값 다 출력하는 방법
const obj3 = {
  p: 1,
  q: 2,
  r: 3,
  x : 7,
  y: 8
};

const { r, ...rest} = obj3;
console.log(r, rest);