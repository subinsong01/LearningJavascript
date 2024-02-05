/*this
1. 일반함수의 this는 호출 위치에서 정의*/

const user = {
  firstName : 'SUBIN',
  lastName : 'Song',
  age : 85,
  getFullName : () => {
    return `${this.firstName} ${this.lastName} `
  }
};
console.log(user.getFullName());
/*2. 화살표 함수의 this는 자신이 선언된 함수 범위에서 정의 */ 
function user() {
  this.firstName = 'Neo',
  this.lastName = 'Yu'

  return {
    firstName : 'SUBIN',
    lastName : 'Song',
    age : 85,
    getFullName () {
      return `${this.firstName} ${this.lastName} `
    }
  }
}
const Jenny = {
  firstName : 'Jenny',
  lastName: 'Jang'
};

const u = user();
console.log(u.getFullName());
console.log(u.getFullName.call(Jenny));


const timer = {
  title: 'TIMER',
  timeout(){
    console.log(this.title)
    setTimeout(()=>{
      console.log(this.title)
    }, 1000)
  }
}
timer.timeout();