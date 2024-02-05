//Getter : 값을 조회할 때 사용, Setter : 값을 할당할 때 사용하는 용도

class User {
  constructor(first,last){
    this.firstName = first
    this.lastName = last
  }
  get fullName(){
    console.log('Getting full Name!')
    return `${this.firstName} ${this.lastName}`
  }
  set fullName(value){
    console.log(value);
    [this.firstName, this.lastName] = value.split(' ')
  } 
}

const kim = new User('Kim','Jenny');
console.log(kim.fullName);

kim.firstName = 'Neo';
console.log(kim.fullName);

kim.fullName = 'Neo Anderson'
console.log(kim);