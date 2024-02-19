export function heap(arr) {
    const maxHeapify = (arr, i, size) => {
        let largest = i,
            left = 2 * i + 1,
            right = 2 * i + 2;
        if (left < size && arr[left] > arr[largest]) largest = left;
        if (right < size && arr[right] > arr[largest]) largest = right;
        if (largest !== i) {
            [arr[i], arr[largest]] = [arr[largest], arr[i]];
            maxHeapify(arr, largest, size);
        }
    }
    const buildMaxHeap = (arr) => {
        for (let i = Math.floor(arr.length / 2) - 1; i >= 0; i--) {
            maxHeapify(arr, i, arr.length);
        }
    }
    buildMaxHeap(arr);
    for (let i = arr.length - 1; i > 0; i--) {
        [arr[0], arr[i]] = [arr[i], arr[0]];
        maxHeapify(arr, 0, i);
    }
    return arr;
}
