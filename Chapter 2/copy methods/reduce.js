function reduce(arr,callback,initialValue) {

    if (typeof callback !== 'function') {
        throw new TypeError('Callback is not a func');
    }

    let accumulator = initialValue !== undefined ? initialValue : arr[0];
    let startIndex = initialValue !== undefined ? 0 : 1;

    for (let i = startIndex; i < arr.length; i++) {
        accumulator = callback(accumulator, arr[i],i,arr);
    }
    
    return accumulator
}

function reduceRight(arr,callback,initialValue) {

    if (typeof callback !== 'function') {
        throw new TypeError('Callback is not a func');
    }

    let accumulator = initialValue !== undefined ? initialValue : arr[arr.length-1];
    let endIndex = initialValue !== undefined ? arr.length - 1 : arr.length-2;

    for (let i = endIndex; i >= 0; i--) {
        accumulator = callback(accumulator, arr[i],i,arr);
    }

    return accumulator
}

const arr = [
    [0, 1],
    [2, 3],
    [4, 5],
];
console.log(reduceRight(arr,(accumulator, currentValue) =>
    accumulator.concat(currentValue),
));
console.log(reduce(arr,(accumulator, currentValue) =>
    accumulator.concat(currentValue),
))

