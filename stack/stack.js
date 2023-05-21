function createStack() {
    const values = [];

    return {
        push: function (item) {
            values.push(item);
        },
        pop: function () {
           return  values.pop();
        },
        isEmpty: function () {
            return values.length === 0;
        }
    }
}

const myStack = createStack();
console.log("Is empty: " + myStack.isEmpty())
myStack.push(1)
myStack.push(2)
myStack.push(3)

console.log("Is empty: " + myStack.isEmpty())
console.log("pop:", myStack.pop())




