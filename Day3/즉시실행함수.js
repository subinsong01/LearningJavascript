const a = 7;

//1.일반적인 호출
const double = () =>{
  console.log(a * 2)
};
double();
//2.즉시실행함수
double();
(() => {
  consol.log(a*2)
});

;((a,b) => {
  console.log(a);
  console.log(b);
})(1,2);