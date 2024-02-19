function join(arr, separator = ",") {
    let res = ""
    for (let i = 0; i < arr.length; i++) {
        if (i === arr.length - 1) {
            separator = ""
        }
        res += arr[i] + separator;
    }
    return res;
}


const elements = ['Fire', 'Air', 'Water'];

console.log(elements.join());
console.log(join(elements));

console.log(elements.join(''));
console.log(join(elements, ''));

console.log(elements.join('-'));
console.log(join(elements, '-'));