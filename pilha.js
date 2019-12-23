const Pilha = () => {
  let top = -1;
  let vector = [];

  const push = (value) => {
    top++;
    vector[top] = value;

    return value;
  }

  const pop = () => {
    if (top < 0) {
      return undefined;
    }

    vector.splice(top, 1);
    top--;

    return top;
  }

  const topper = () => {
    if (top < 0) {
      return undefined;
    }

    return vector[top];
  }

  const print = () => (top < 0 ) ? console.log([]) : console.log(vector);


  return {
    push, pop, topper, print
  }
}

let A = Pilha();

console.log(A.push(1));
console.log(A.push(2));
console.log(A.push(3));
console.log(A.push(5));
console.log(A.print());
console.log(A.pop());
console.log(A.pop());
console.log(A.pop());
console.log(A.print());
console.log(A.topper());
console.log(A.pop());
console.log(A.print());
console.log(A.topper());
console.log(A.push(9));
console.log(A.push(7));
console.log(A.print());