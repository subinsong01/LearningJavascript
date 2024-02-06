//1.includes()
const str = 'Hello World';
console.log(str.includes('Hello')); //true 출력

/*2.indexOf()
- 일치하는 문자가 없는 경우 -1 반환
- 대상 문자에서 주어진 문자와 일치하는 첫 번째 인덱스(숫자)를 반환 
- 0부터 시작한다*/
const str1 = 'Hello World';
console.log(str1.indexOf('World'));
console.log(str1.indexOf('Subin'));

/*3.padEnd() <-> padStart()는 반대 개념 : 앞에 붙어서 반환
- 대상 문자의 길이가 지정된 길이보다 작으면, 주어진 문자를 지정된 길이까지 끝에 붙여서 새로운 문자를 반환 */

const str3 = '1234567';
console.log(str3.padEnd(10, '0')); // 앞 숫자는 지정된 길이를 의미한다.//클 때 또는 작을 때만 실행된다.
//출력 1234567000
console.log(str);
//4.replace() => 교체해서 반환한다.
const str4 = 'Hello, Hello?!'

console.log(str4.replace('Hello', 'Hi'));
console.log(str4.replace(/Hello/g, 'Hi')); //정규표현식, g = global
console.log(str4);

/*5.slice()
- 대상 문자의 일부분을 추출해서 새로운 문자를 반환한다
- 두 번째 직전의 인수 직전까지 추출하고, 두 번째 인수를 샐략하면 대상 문자 끝까지 추출한다 */

const str5 ='Hello World!';

console.log(str5.slice(0, 5)); //Hello 출력
console.log(str5.slice(6, -1)); //World 출력
/*6. split()
- 대상 문자를 주어진 구분자로 나눠서 배열로 반환한다. */

const str6 = 'Apple, Banana, Cherry';

console.log(str6.split('').reverse().join('')); // ,를 기준으로 구분한다는 의미
// 빈 문자()를 입력하면 모든 문자들이 하나씩 출력된다.
//reverse() : 거꾸로 출력
//join : split랑 반대 개념
//7.toLowerCase() : 모든 데이터를 소문자로 출력한다.
//8.toUpperCase() : 모든 데이터를 대문자로 출력한다.
//9.trim() : 공복문자를 제거해서 출력해줌 *문자 중간에 띄어쓰기에는 영향이 없다 == 제거를 안 해줌 * 
const str7 = '   Sub  in   '

console.log(str7.trim());