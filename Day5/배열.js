//1.at : 대상 배열을 인덱싱한다. 음수 값을 사용하면 뒤에서부터 인덱싱한다.
const arr = ['A', 'B', 'C'];
console.log(arr[0]);
console.log(arr.at(0)); //위랑 같은 의미

console.log(arr[arr.length - 1]);
console.log(arr.at(-1)); // 위랑 같은 의미

//2.concat : 두 배열을 합쳐준다
const arr1 = ['A', 'B', 'C'];
const arr2 = ['D', 'E', 'F'];
//const arr3 = arr1.concat(arr2);
const arr3 = [...arr1, ...arr2];
console.log(arr3);

//3.every : 대상 배열의 모든 요소가 콜백 테스트에서 truthy을 반환하는지 확인한다.
const arr6 = [1,2,3,4];
const isValid = arr6.every(item => {
    return item < 5
})
console.log(isValid);

//4.filter() : 주어진 콜백 테스트를 통과하는 모든 요소를 새로운 배열로 반환한다.
// -> 모든 요소가 테스트를 통과하지 못하면 빈 배열을 반환한다.

const arr7 = [1,2,3,4,565];
const filteredNumbers = arr7.filter(number => number < 30);
console.log(filteredNumbers);

//5.find : 대상 배열에서 콜백 테스트를 통과하는 첫 번째 요소를 반환한다.
const arr8 = [5, 8, 43, 546, 646];
const foundItem = arr8.find(item => item > 10);

console.log(foundItem); // 43출력

//6.findIndev() : 대상 배열에서 콜백 테스트를 통과하는 첫 번째 요소의 인덱싱을 반환한다.
const arr9 = [5, 8, 676, 45, 42];
const index = arr9.findIndex(item => item > 50);

console.log(index); // 2출력

/* 7.flat 
- 대상 배열의 모든 하위 배열을 지정한 길이까지 이어붙인 새로운 배열을 생성한다.
- 깊이의 기본 값은 1이다
*/

const arr10 = [1,2,3,[4,5]];
console.log(arr10.flat()); //[1,2,3,4,5] 출력

const arr11 = [1,2,3,[4,5,[7,8]]];
console.log(arr11.flat()); //[1,2,3,4,5,[7,8]] 출력
console.log(arr11.flat(2));//[1,2,3,4,5,7,8]

console.log(arr11.flat(Infinity));
//8.forEach() : 대상 배열의 길이만큼 주어진 콜백을 실행한다. */
const arr12 = ['A','B','C'];
arr12.forEach(item => console.log(item));

/*9.includes() : 대상 배열이 특정 요소를 포함하고 있는지 확인 */
const arr113 = [ 1,2, 3];
console.log(arr113.includes(2)); //true

const users = [
  { name : 'Subin', age : 23},
  { name : 'Neo', age : 34} ,
  { name : 'ete', age :80 }
]
console.log(users.includes({name:'Neo', age:34})); //fasle 출력

const neo = users[1];
console.log(users.includes[neo]); 
