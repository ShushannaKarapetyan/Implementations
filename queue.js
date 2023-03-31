function createQueue() {
    const values = [];

    return {
        enqueue: function (item) {
            values.push(item);
        },
        dequeue: function () {
            return values.shift();
        },
        isEmpty: function () {
            return !values.length;
        }
    }

}

const queue = createQueue();

console.log(queue.isEmpty())

queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)

console.log(queue.isEmpty())
console.log(queue.dequeue())

