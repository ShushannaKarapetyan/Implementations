let a = [9, 14, 27, 35, 40, 96, 101];

function filter(array, fun) {
    let index = 0;
    let filteredArray = [];

    a.forEach(function (value) {
        if (fun(value)) {
            filteredArray[index] = value;
            index++;
        }
    })

    return filteredArray;
}

let result = filter(a, function (value) {
    return value % 2 === 0;
})

console.log(result);