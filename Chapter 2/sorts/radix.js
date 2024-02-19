export function radix(arr) {
    let max = Math.max(...arr);
    let minusArr = [];
    arr.forEach(v => {
        if (v < 0) {
            minusArr.push(v * (-1))
        }
    })
    max = Math.max(max, Math.max(...minusArr))
    for (let exp = 1; Math.floor(max / exp) > 0; exp *= 10) {
        arr = countingSort(arr, exp);
        minusArr = countingSort(minusArr, exp);
    }
    for (let i = 0; i < minusArr.length; i++) {
        minusArr[i] *= (-1);
    }

    return minusArr.reverse().concat(arr);
}

function countingSort(arr, exp) {
    const output = [];
    const count = new Array(10).fill(0);

    for (let i = 0; i < arr.length; i++) {
        const digit = Math.floor(arr[i] / exp) % 10;
        count[digit]++;
    }

    for (let i = 1; i < 10; i++) {
        count[i] += count[i - 1];
    }

    for (let i = arr.length - 1; i >= 0; i--) {
        const digit = Math.floor(arr[i] / exp) % 10;
        output[count[digit] - 1] = arr[i];
        count[digit]--;
    }

    return output;
}