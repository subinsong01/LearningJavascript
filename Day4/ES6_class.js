//ES6 Classes 문법

// function User(first, last){
//   this.firstname = first,
//   this.lastname = last
// };

// User.prototype.getFullname = function (){
//   return `${this.firstname} ${this.lastname}`
// }; -> 옛날 방식

//새로운 방식
class User {
  constructor(first, last){
    this.firstName = first
    this.lastName = last
  }
  getFullname(){
    return `${this.firstname} ${this.lastname}`
  }
}

const subin = new User('Subin', 'Kim');
const neo = new User('Jin', 'U');

console.log(subin.getFullname());