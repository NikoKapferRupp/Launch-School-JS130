let num = 0;

function add(toAdd) {
  num += toAdd;
  console.log(num);
}

function subtract(toSub) {
  num -= toSub;
  console.log(num);
}

add(1);       // 1
add(42);      // 43
subtract(39); // 4
add(6);       // 10