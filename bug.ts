function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

let result = add(5, 3); // result is 8
console.log(result); //Prints 8

result = subtract(10, 5); // result is 5
console.log(result); //Prints 5

//Type Error
result = add(5, "3");