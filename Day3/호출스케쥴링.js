
const hello = () => {
  console.log('Hello~')
};
// setTimeout(hello, 2000);

const timeout = setTimeout(hello,2000); 
const h1El = document.querySelector('h1');
h1El.addEventListener('click', () => {
  console.log('Clear');
  clearTimeout(timeout);
})