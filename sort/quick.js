function quickSort(arr) {
    if (arr.length <= 1)
        return arr;

    let pivot = arr[0];
    let left = arr.filter(x => x < pivot);
    let right = arr.filter(x => x > pivot);

    return [...quickSort(left), pivot, ...quickSort(right)];
}

console.log(quickSort([8, 31, 7, 19, 11]));