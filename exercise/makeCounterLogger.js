function makeCounterLogger(arg1) {
  return function(arg2) {
    let start = arg1;
    let counter = arg1 < arg2 ? 1 : -1            
    console.log(start);

    while(start !== arg2) {
      start += counter
      console.log(start);

    }
  }
}

let countlog = makeCounterLogger(5);

countlog(8)

countlog(2)