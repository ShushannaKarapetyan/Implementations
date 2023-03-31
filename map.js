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

function map(arr, fn) {
    let index = 0;
    let newArr = [];

    while (arr.length > index) {
        newArr[index] = fn(arr[index], index);

        index++;
    }

    return newArr;
}

let names = map(people, function (value, index) {
    return value.name;
});

console.log(names);