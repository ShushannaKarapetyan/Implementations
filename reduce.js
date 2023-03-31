let arr = [3, 9, 14, 22];

function reduce(arr, fn, aggr) {
    arr.forEach(function (value, index) {
        if (index === 0 && aggr === undefined) {
            aggr = value
        } else {
            aggr = fn(aggr, value, index);
        }
    });

    return aggr;
}

console.log(reduce(arr, function (aggr, value, index) {
    return aggr + value;
}))


// Get one object
let a = [
    {
        name: "Joe",
    },
    {
        age: "25",
    },
    {
        phone: "123456789",
    },
];

let obj = a.reduce(function (person, value) {
    let key = Object.keys(value)[0];
    person[key] = value[key];

    return person;
}, {});

console.log(obj);

// Implementation of the map, using reduce
function map(arr, fn) {
    return arr.reduce(function (newArr, value, index) {
        newArr[index] = fn(value);

        return newArr;
    }, []);
}

map(arr, function (value) {
    return value * 2;
});