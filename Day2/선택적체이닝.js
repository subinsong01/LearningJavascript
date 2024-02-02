const user = undefined;
console.log(user?.name); // 물음표 앞에 있는 데이터가 점표기법 사용이 불가한 경우에도, 에러를 발생시키지 않고 단순하게 출력해준다. 

const userA = {
  name : 'Lee',
  age : 20,
  address : {
    city : '서울',
    country : 'Korea'
  }
};

const userB = {
  name : 'Song',
  age : 23,
};

function getInfo(user){
  return user.address.city || '정보 없음';
}

console.log(getInfo(userB));
// == 오류발생

//해결 방법
function getInfo(user){
  return user.address?.city || '정보 없음';
}