class Vehicle {
  constructor(acceleration = 1){
    this.speed = 0
    this.acceleration = acceleration
  }
  accelerate(){
    this.speed += this.acceleration
  }
  decelerate(){
    if(this.speed <= 0 ) {
      console.log('정지!');
      return
    }
    this.speed -= this.acceleration
  }
}
class Bicycle extends Vehicle {
  constructor(price = 100, acceleration) {
    super(acceleration);
    this.price = price;
    this.wheel = 2;
  }
}
const bicycle = new Bicycle(300, 2);
bicycle.accelerate();
console.log(bicycle);
console.log( bicycle instanceof Bicycle); //true 출력  : 키워드 앞 쪽에 있는 데이터가, 키워드 뒤쪽에 있는 클래스에서 인스턴스로 만들어져 있는지 확인하는 것
console.log( bicycle instanceof Vehicle); //true 출력

class Car extends Bicycle {
  constructor(license, price, acceleration) {
    super(price, acceleration);
    this.license = license;
    this.wheel = 4; 
  }
  //오버라이딩 : 자신만의 새로운 메소드로 덮어쓰는 것을 의미
  accelerate(){
    if(!this.license){
      console.log('무면허!')
      return
    }
    this.speed += this.acceleration
    console.log('가속!', this.speed);
  }
}

const carA = new Car(true, 7000, 10);
const carB = new Car(false, 4000, 6);
carA.accelerate();
carB.accelerate();
console.log(carA);
console.log(carB);

class Boats extends Vehicle {
  constructor(price, acceleration) {
    super(acceleration);
    this.price = price;
    this.motor = 1;
  }
}
const boat = new Boats(10000,5);
console.log(boat);