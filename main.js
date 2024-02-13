const delayadd = index => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(index > 10) {
        reject(`${index}는 숫자 10보다 클 수 없습니다 ㅠㅠ`)
        return 
      }
      console.log(index);
      resolve(index + 1)
    }, 1000)
  })
}
delayadd(1)
  .then(res => console.log(res),)
  .catch( err => console.error(err))

const wrap = async () => {
  try{
  const res = await delayadd(2)
  console.log(res)
} catch (err) {
  console.error(err)
  }
}
wrap();
   