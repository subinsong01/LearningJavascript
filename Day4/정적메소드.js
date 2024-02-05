class User {
  constructor(first, last) {
    this.firstname = first
    this.lastname = last
  }
  getFullName(){
    return `${this.firstname} ${this.lastname}`
  }
  static isUser(user) {
    if (user.firstname && user.lastname){
      return true
    }
    else 
      return false
  } 
}
const subin = new User('Kim','Yu');
const neo = new User('Neo', 'Yang');
const lewis = {
  name: 'haely',
  age : 30
}
console.log(subin.getFullName());
console.log(User.isUser(subin)); //true
console.log(User.isUser(lewis)); //false