function flat(arr, setDepth = 1) {

    const res = [];
    const stack = [{array: arr, depth: 0}];

    while (stack.length) {
        const {array, depth: currentDepth} = stack.pop();

        array.forEach((element) => {
            if (Array.isArray(element) && currentDepth < setDepth) {
                stack.push({array: element, depth: currentDepth + 1});
            } else {
                res.push(element);
            }
        });
    }

    return res;
}

let arr = [1, 2,[3, 4, [5, 6],4,6,[32,35]],5,3,2,6,[3,6,42,3]]
console.log(flat(arr,3))
console.log(arr.flat(3))