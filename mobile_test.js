(function countdown(num){
  console.log(num);
  num -= 1;
  if (num >= 0) {
    countdown(num)
  }
  
})(7)