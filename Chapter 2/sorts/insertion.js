export function insertion(arr) {
    for (let i = 1; i < arr.length; i++) {
        let check = arr[i];
        let temp = i - 1;
        while (check < arr[temp] && temp >= 0) {
            arr[temp + 1] = arr[temp]
            temp = temp - 1;
        }
        arr[temp + 1] = check;
    }
    return arr;
}