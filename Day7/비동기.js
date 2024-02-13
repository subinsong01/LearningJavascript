//동기 = 순차적으로 코드가 실행된다. 
/*비동기 = 동기랑 반대개념
- 대표적으로 setTimeout()방식이 있다
*/
const btnEl = document.querySelector('h1')
btnEl.addEventListener('click', ()=>{
  console.log('Clicked!')
});

console.log("Hello world!");
