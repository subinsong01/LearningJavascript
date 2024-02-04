const user = {
  name: 'Subin',
  age : 12
}
function getName({name}){
  return name
};

function getEmail({email = '이메일이 존재하지 않습니다.'}){
  return email
};

console.log(getName(user));
console.log(getEmail(user));

//나머지 매개변수 활용 <-> arguments : 유사배열 (객체데이터), 직관적이기 때문에 일반적으로 사용하지 않는다.
function sum(...rest){
  console.log(rest);
}

console.log(sum(1,2));
console.log(sum(1,2,3,4));
console.log(sum(1,2,3,4,5,6,7));

//나머지 매개변수 활용
function sum(...rest){
  console.log(rest);
  return rest.reduce (function(acc,cur) {
    return acc + cur 
  }, 0)
}

console.log(sum(1,2));
console.log(sum(1,2,3,4));
console.log(sum(1,2,3,4,5,6,7));