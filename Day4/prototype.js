// const neo = {
//   firstname : 'Subin',
//   lastname : 'Lee',
//   getFullName (){
//     return `${this.firstname} ${this.lastname}`
//   }
// };
// const jin = {
//   firstname : 'jin',
//   lastname :'kim'
// }
// console.log(neo.getFullName());
// console.log(neo.getFullName.call(jin));

function User (first,last) {
  this.firstname = first,
  this.lastname = last
}
User.prototype.getFullname = function(){
  return `${this.firstname} ${this.lastname}`
};

const neo = new User('d','afe');
const jin = new User('g','wer');

console.log(neo);
console.log(jin);
console.log(neo.getFullname());
console.log(jin.getFullname());