//콜백 함수

const a = callback => {
  console.log('A')
  callback();
}
const b = () => {
  console.log('B')
}
a(b);

const loadImage = (url, cb) => {
  const imgEl = document.createElement('img');
  imgEl.src = url;
  imgEl.addEventListener('load', () => {
    setTimeout(() => {
      cb(imgEl)
    }, 1000)
  })
}
const containerEl = document.querySelector('.container');
loadImage('https://www.gstatic.com/webp/gallery/4.jpg', imgEl => {
  containerEl.innerHTML = '';
  containerEl.append(imgEl);
})