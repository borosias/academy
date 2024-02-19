export function bubble(arr) {
    let notDone = true;
    while (notDone){
        notDone = false;
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                let tmp = arr[i]
                arr[i] = arr[i + 1]
                arr[i + 1] = tmp
                notDone = true;
            }
        }
    }
    return arr
}
