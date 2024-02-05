const userA = { name: 'A', parent: null};
const userB = { name: 'B', parent: userA};
const userC = { name: 'C', parent: userB};
const userD = { name: 'D', parent: userC};

const getRootUser = () => {
  if(userA.parent){
    return getRootUser(use.parent);
  }
  return user;
}
console.log(getRootUser(userD));