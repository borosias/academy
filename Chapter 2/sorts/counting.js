export function counting(arr) {
    let min = arr[0];
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        } else if (arr[i] > max) {
            max = arr[i];
        }
    }

    let temp = Array(max - min + 2).fill(0)
    for (let i = 0; i < arr.length; i++) {
        temp[arr[i]-min]++;}

    arr = []

    for (let i = 0; i < temp.length; i++) {
        while (temp[i] > 0) {
            arr.push(i+min)
            temp[i]--;
        }
    }

    return arr;
}