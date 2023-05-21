function insertionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let current = arr[i];
        let j = i - 1;

        while (j > -1 && current < arr[j]) {
            arr[j + 1] = arr[j];
            j--;
        }

        arr[j + 1] = current;
    }

    return arr;
}

console.log(insertionSort([8, 31, 7, 19]))