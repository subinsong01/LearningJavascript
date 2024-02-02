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
  return user.address?.city || '정보 없음';
}

console.log(getInfo(userB));