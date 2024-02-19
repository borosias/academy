let arr1 = ['ag', 'ab', 'b', 'c', 'z', 'f', 'g', 'i','aga']
let arr2 = [-1, 0, 3, 5, 2, 6, 21, 73, 26, 25]

function sort(arr, compareFunction) {
    if (typeof compareFunction !== 'function') {
        compareFunction = (a, b) => {
            const minLength = Math.min(a.length, b.length);
            for (let i = 0; i < minLength; i++) {
                if (a.charCodeAt(i) !== b.charCodeAt(i)) {
                    return a.charCodeAt(i) - b.charCodeAt(i);
                }
            }
            return a.length - b.length;
        }
    }
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (compareFunction(arr[i], arr[j]) > 0) {
                const temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}


const compare = (a, b) => {
    return a - b
};
console.log(sort(arr1.slice()))
console.log(arr1.sort())
console.log(sort(arr2.slice(), compare));
console.log(arr2.sort(compare));




