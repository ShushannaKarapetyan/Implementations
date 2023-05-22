let people = [
    {
        name: "John",
        lastName: "Doe"
    },
    {
        name: "Mike",
        lastName: "Johnson"
    },
];

Array.prototype.map = function (fn) {
    let index = 0;
    let newArr = [];

    while (this.length > index) {
        newArr[index] = fn(this[index], index);

        index++;
    }

    return newArr;
}

let names = people.map(function (value, index) {
    return value.name;
});

console.log(names);