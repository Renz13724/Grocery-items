function groceryStack() {
  const stack = [];
  const maxSize = 5;

  for (let i = 0; i < maxSize; i++) {
    let item = prompt(`Enter grocery item ${i + 1}:`);
    stack.push(item);
    console.log("Stack after push:", stack);
  }

  console.log("Peeking at the top:", stack[stack.length - 1]);

  while (stack.length > 0) {
    let poppedItem = stack.pop();
    console.log("Popped item:", poppedItem);
    console.log("Stack after pop:", stack);
  }
}

groceryStack();
