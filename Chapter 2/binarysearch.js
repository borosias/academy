function binarySearch(target, array) {
    let leftEnd = 0, rightEnd = array.length - 1
    while (leftEnd <= rightEnd) {
        let mid = Math.floor((rightEnd + leftEnd) / 2)
        if (array[mid] === target) {
            return  mid;
        } else if (array[mid] < target) {
            leftEnd = mid + 1;
        } else {
            rightEnd = mid - 1;
        }
    }
    return -1;
}


let arr = [12, 53, 126, 75, 97, 4573, 85, 236, 876, 23];
let target = 236;
arr = arr.sort( (a, b) => {
    return a - b;
})
console.log(Object.is(arr[binarySearch(target, arr)], target))
