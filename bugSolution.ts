function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

function addSafe(a: number | string, b: number | string): number {
  const numA = typeof a === 'string' ? parseFloat(a) : a;
  const numB = typeof b === 'string' ? parseFloat(b) : b;

  if (isNaN(numA) || isNaN(numB)) {
    return 0; // Or throw an error: throw new Error("Invalid input");
  }
  return numA + numB;
}

let result = add(5, 3); // result is 8
console.log(result); //Prints 8

result = subtract(10, 5); // result is 5
console.log(result); //Prints 5

//No Error
result = addSafe(5, "3");
console.log(result); //Prints 8
result = addSafe("5", 3);
console.log(result); //Prints 8
result = addSafe("5", "3");
console.log(result); //Prints 8