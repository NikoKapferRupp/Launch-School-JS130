function makeMultipleLister(num) {
  return function() {
    let sum = num;
    while(true) {
      console.log(sum);
      sum += num;
      if (sum > 100) {
        break;
      } 
    }
  }
}

let lister = makeMultipleLister(17);
lister();