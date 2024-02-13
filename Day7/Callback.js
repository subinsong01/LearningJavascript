//콜백 패턴 -> 불편하고 계속 들여쓰기를 해야한다는 단점이 존재한다(비동기방식에서 사용)

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
