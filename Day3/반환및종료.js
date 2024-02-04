function  plus(num) {
  if (typeof num !== 'number'){
    console.log('숫자를 입력해주세요 :');
    return 0;
  }
    return num + 1; 
  }
console.log(plus(0));
console.log(plus()); // number가 아닌경우
