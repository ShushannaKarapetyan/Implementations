class Stack {
    constructor() {
        this.items = [];
    }

    push(value) {
        this.items.push(value);
    }

    pop() {
        if (this.items.length === 0) {
            return null;
        }

        return this.items.pop();
    }

    peek() {
        return this.items[this.items.length - 1];
    }

    print() {
        for (let i = this.items.length - 1; i >= 0; i--) {
            console.log(this.items[i]);
        }
    }
}

let stack = new Stack();
stack.push(7);
stack.push(1);
stack.pop()
stack.push(45);

// console.log(stack.peek())

stack.print();