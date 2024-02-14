/*HTML 문서를 객체로 표현헌 것으로, JS에서 HTML 제어를 가능하게 해준다.*/

const element = document.querySelector('h1');
console.log(element.textContent);
/*
1. Node : HTML 요소, 텍스트, 주석 등 모든 것을 의미한다.
2. 요소 : HTML 요소를 의미(Node의 하위 개념)
*/

/*
document.getElementById() 
1. HTML 'id' 속성 값으로 검색한 요소를 반환합니다.
2. 여러 요소가 검색되면, 가장 먼저 찾은 값을 반환한다.
3. 검색 결과가 없으면 null을 반환
document.querySelector()
1.'CSS 선택자'로 검색한 요소를 하나 반환한다.
2. 여러 요소가 검색되면, 가장 먼저 찾은 값을 반환한다.
3. 검색 결과가 없으면 null을 반환 
document.querySelectorAll()
1.'CSS 선택자'로 검색한 모든 요소를 'NodeList'로 반환한다.
2.'NodeList' 객체는 '.forEach()'를 사용할 수 있다.
Node.parentElement() / previousSilbing() / nextSibling()
E.closet() 
1.자신을 포함한 조상 요소 중에 'CSS 선택자'와 일치하는, 가장 가까운 요소를 반환
2.요소를 찾지 못하면 null 반환
E.previousElementSibling() / E.nextElementSibling() / E.child()
*/
