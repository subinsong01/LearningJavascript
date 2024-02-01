/* 전개연산자(SpreadOperator) : 배열의 괄호를 없애줌
 */

// const a = [1,2,3];
// const b = [4,5,6];

// console.log(...a);

// const c = a.concat(b);
// console.log(c);

const n = {x : 1, y : 2};
const m = {y : 3, z : 4};

const k = Object.assign({}, n, m);
console.log(k);

const w = {...n, ...m};
console.log(w);