// Simple example
function factorialExample(number) {
    let factorial = 1;

    for (let i = 1; i <= number; i++) {
        factorial = factorial * i;
    }

    return factorial;
}

// Recursion
function recursion(number) {
    if (number === 0 || number === 1) {
        return 1;
    } else if (number < 0) return;

    return number * recursion(number - 1);
}

console.log(recursion(4))