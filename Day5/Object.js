//Object.assign():정적메소드 == 하나 이상의 출처(Source) 객체로부터 대상(Target) 객체로 속성을 복사하고 대상 객체를 반환
const target = { a:1, b:1};
const source1 = {b:3, c:4};
const source2 = {c:5, d:6};
const results = Object.assign(target, source1, source2);
const results2 = Object.assign({},target, source1, source2);


console.log(target); // [1.2];
console.log(results2);

console.log(target);//[1,3,5,6];
console.log(results);
//2.Object.keys(): 주어진 객체의 속성 이름을 나열한 배열을 반환합니다.
const user = {
  name: 'Subin',
  age : 12,
  isValid : true
};
console.log(Object.keys(user)); //[name,age,isValid]
//3.Object.values(): 주어진 객체의 속성 이름을 나열한 값을 반환합니다.
console.log(Object.values(user)); //[Subin, 12, true]

