//1.module : 특정 데이터들의 집합(파일) + index.html에서 type=module으로 명시가 되어 있어야 작동한다
export const hello = 'Hello World~';
//2.기본 내보내기 : export default 123; = 이름을 따로 지정하지 않고, main에서 가지고 올 때 정해준다. + 한 번만 가능
//3.이름 내보내기 : export const hello = 'Hello World~';

export default 123;
export const arr = [];
//4.import * as abc from './Day6/module' : *(와일드카드) : 여러 개의 개념을 한 번에 지정한다는 의미 = 전체
//5. 중간에서 module을 import 해야하는 상황인 경우
setTimeout(()=>{
  import ('./module.js').then(abc =>{
    console.log(abc);
  })
},1000);
import numbers, { hello as xyz, arr } from './Day6/module';

console.log(numbers);
console.log(xyz);
console.log(arr);

setTimeout(()=>{
  import ('./Day6/module.js').then(abc =>{
    console.log(abc);
  })
},1000);

setTimeout(async()=>{
 const abc = await import('./Day6/module.js')
 console.log(abc);
},1000);
