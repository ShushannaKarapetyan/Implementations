let arr = ['apple', 'orange', 'blueberry'];

function forEach(arr, fn) {
    let index = 0;

    while (arr.length > index) {
        fn(arr[index], index);

        index++;
    }
}

forEach(arr, function (value, index) {
    console.log(index, value);
});
