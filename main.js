const a = (callback) => {
  setTimeout(() => {
    console.log(1)
    callback()
  },1000)
} //비동기 코드
const b = (callback) => { 
  setTimeout(() => {
    console.log(2)
    callback()
  }, 1000);
} 
const c = () => {
  console.log(3)
};

a(() => {
  b(() => {
    c()
  })
})
