class A {
  constructor(){}
}
class B extends A{
  constructor(){
    super()
  }
}
class C extends B{
  constructor(){
    super()
  }
}

const a = new A();
const b = new B();
const c = new C();

console.log(a instanceof A);
console.log(a.constructor === A);
console.log(c.constructor === A);

const fruits = ['Apple', 'Banana'];
console.log(fruits.constructor === Array);