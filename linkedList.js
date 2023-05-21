class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.previous = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    append(value) {
        // if the list is empty
        if (!this.tail) {
            this.tail = this.head = new Node(value);
        } else {
            // store "reference" to current tail
            let oldTail = this.tail;

            // move the tail to the brand new Node
            this.tail = new Node(value);

            // create new pointer(reference) to new tail
            oldTail.next = this.tail;

            // create previous pointer(reference) to previous tail
            this.tail.previous = oldTail;
        }
    }

    prepend(value) {
        if (!this.head) {
            this.head = this.tail = new Node(value);
        } else {
            // store a "reference" to the current head
            let oldHead = this.head;

            // mode a head pointer to the brand new Node
            this.head = new Node(value);

            // connect the old head to the new
            oldHead.previous = this.head;

            // create the back link
            this.head.next = oldHead;
        }
    }

    delete(valueToDelete) {
        if (this.head.value === valueToDelete) {
            this.head = this.head.next;
            this.head.previous = null;

            return;
        }

        let current = this.head;
        let previous = current.previous;
        let next = current.next;

        while (current.value !== valueToDelete) {
            previous = current;
            current = current.next;

            if (current !== null) {
                next = current.next;
            }
        }

        previous.next = next;

        if (next !== null) {
            next.previous = previous;
        }
    }

    search(value) {
        let current = this.head;

        while (current !== null) {
            if (current.value === value) {
                return current;
            }

            current = current.next;
        }

        return null;
    }

    print() {
        let current = this.head;

        while (current !== null) {
            console.log(current.value)
            current = current.next;
        }
    }
}

let list = new LinkedList();
list.append(1);
list.append(5);
list.append(8);
list.append(45);
list.delete(8);

list.print();

console.log(list.search(5));