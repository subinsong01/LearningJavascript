/*fetch(주소, 옵션) 
1. 네트워크를 통해 요청과 응답을 처리
2. Promise instance를 반환한다.
*/
fetch("주소", {
  method: 'GET',
  headers:{
    'Content-Type': 'application/json'//json이라는 데이터의 포맥으로 통신한다는 의미
  },
  body:JSON.stringify({
    name : '',
    age : 54
  }) //stringify : 데이터를 전부 문자화 시켜줌
})