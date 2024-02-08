//1.join() : 대상 배열의 모든 요소를 구분자로 연결한 문자를 반환한다.
const arr = ['Apple','Banana', 'Cherry'];
console.log(arr.join('/')); 
//2. map() : 대상 배열의 길이만큼 주어진 콜백을 실행하고, 콜백의 반환 값을 모아 새로운 배열을 반환한다.
const numbers = [1,2,3,4];
const newNumbers = numbers.map(item => item * 2);
console.log(newNumbers); //[2,4,6,8]출력
//3.pop() : 대상 배열에서 마지막 요소를 제거하고 그 요소를 반환한다 + 대상 배열 원본이 변경된다.
const fruits = ['Apple','Banana', 'Cherry'];

console.log(fruits);
console.log(fruits.pop()); // Cherry
console.log(fruits); //['Apple','Banana']

//4.push() : 대상 배열의 마지막에 하나 이상의 요소를 추가하고, 배열의 새로운 길이를 반환합니다. + 대상 배열의 원본이 변경된다.
const fruits2 = ['Apple','Banana', 'Cherry'];

const newLength = fruits2.push('Orange');
console.log(newLength);
console.log(fruits2);
//5.reduce() : 대상 배열의 길이만큼 콜백을 실행하고, 마지막에 호출되는 콜백의 반환 값을 반환한다. + 각 콜백의 반환 값은 다음 콜백으로 전달된다.
 const numbers2 = [1,2,3]; //1부터 3까지의 합을 알려줌
 const sum = numbers2.reduce((accumulator, currentValue) => {
  return accumulator + currentValue
 },0)
 console.log(sum); // accumulator(=누적되는 값) 시작은 뒤에 쓰여져 있는 0부터 시작한다. 
 const numbers3 = [1,2,3,4,5,6]; //1부터 3까지의 합을 알려줌
 const sum1= numbers3.reduce((acc,cur) => acc+cur,0)
 console.log(sum); // accumulator(=누적되는 값) 시작은 뒤에 쓰여져 있는 0부터 시작한다. 
 
const user = [
 { name :'Neo', age : 30 },
 { name : 'Subin', age :1},
 { name : 'Yoon', age : 10}
]
const totalAge = user.reduce((acc, cur) => {
  return acc + cur.age //cur이 기준
},0);
console.log(totalAge);
console.log(`${(totalAge / user.length).toFixed(2)}세`); 
//6.reverse() : 대상 배열의 순서를 반대로 뒤집는다. + 대상 배열의 원본이 바뀜
const arr12 = ['A','B','C'];
const reversed = arr12.reverse();

console.log(reversed);
console.log(arr12);
//7.shift(): 대상 배열의 첫 번째 요소를 제거하고, 제거된 요소를 반환 + 원본 변경

const arr1 = ['A','B','C'];

console.log(arr1.shift());
console.log(arr1);
//8.slice()
//9.some(): 대상 배열의 어떤 요소라도 콜백 테스틑 통과하는지 획인한다.
const arr4 = [1,2,3,4];
const isValid = arr4.some(item => item > 5);
console.log(isValid); //false
//10.sort():대상 배열의 콜백 반환값을 정렬해준다.(음수, 0, 양수)순서로
// 콜백을 제공하지 않으면, 요소를 문자로 반환하고 유니코드 코드 순서로 정렬한다.
// 원본이 변경된다.

const numbers10 = [2,5,6,0,-2,234];
numbers10.sort();
console.log(numbers10);

numbers10.sort((a,b) => a - b );
console.log(numbers10);

numbers10.sort((a,b) => b - a );
console.log(numbers10);
//11.splice(): 대상 배열에 요소를 추가하거나 삭제하거나 교체한다. + 원본이 변경된다.
const arr40 = ['A', 'B', 'C'];
arr40.splice(2,0,'X');//(인덱스 번호,삭제하고자 하느 갯수, 추가할 요소)
console.log(arr40);
arr40.splice(1,1);
console.log(arr40);
//12.unshift():새로운 요소를 대상 배열의 맨 앞에 추가하고 새로운 배열의 길이를 반환 + 원본 길이 변경
 
const arr167 = ['A','B','C'];
arr167.unshift('D');
console.log(arr167);
//13. array.isArray() : 배열 데이터인지 확인