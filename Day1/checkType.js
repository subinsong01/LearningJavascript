console.log(typeof 'Hello' === 'string');
console.log(typeof 123 === 'number');
console.log(typeof false === 'boolean');
console.log(typeof undefined === 'undefined');

console.log(typeof null === 'object');
console.log(typeof[] === 'object');
console.log(typeof{}=== 'object');
console.log(typeof function(){} === 'function');

//constructor을 사용해서 배열과 객체 데이터를 분리 가능하다.
console.log([].constructor === Array);
console.log({}.constructor === Object);

console.log(Object.prototype.toString.call(null).slice(8, -1) === 'Null')

function checkType(data){
  return Object.prototype.toString.call(data).slice(8, -1);
}
console.log(checkType(null));
console.log(checkType([]));
console.log(checkType({}));
console.log(checkType('Hello') === 'String'); // 체크할 때 꼭 대문자 사용해주기 