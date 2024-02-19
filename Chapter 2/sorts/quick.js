export function quick(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    const pivot = arr[arr.length-1];
    const left = [];
    const right = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else if (arr[i] > pivot) {
            right.push(arr[i]);
        }
    }
    return quick(left).concat(pivot, quick(right));
}

