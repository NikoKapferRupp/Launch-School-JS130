function newStack() {
  let array = [];
  return {
    
    push(arg) {
      array.push(arg)
    },

    pop() {
      return array.pop();
    },

    printStack() {
      array.forEach(entry => console.log(entry))
    }

  }
}