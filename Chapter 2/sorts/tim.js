
function findMinrun(n) {
    let r = 0;
    while (n >= 64) {
        r |= n & 1;
        n >>= 1;
    }
    return n + r;
}

export function tim(arr) {
    const n = arr.length;
    const MINRUN = findMinrun(n);
    for (let i = 0; i < n; i += MINRUN)
        insertionSort(arr, i, Math.min((i + MINRUN - 1), (n - 1)));

    for (let size = MINRUN; size < n; size = 2 * size) {
        for (let left = 0; left < n; left += 2 * size) {
            let mid = left + size - 1;
            let right = Math.min((left + 2 * size - 1), (n - 1));
            merge(arr, left, mid, right);
        }
    }
    return arr;
}

function insertionSort(arr, left, right) {
    for (let i = left + 1; i <= right; i++) {
        let temp = arr[i];
        let j = i - 1;
        while (arr[j] > temp && j >= left) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = temp;
    }
}

function merge(arr, l, m, r) {
    let len1 = m - l + 1, len2 = r - m;
    let left = new Array(len1), right = new Array(len2);
    for (let x = 0; x < len1; x++) {
        left[x] = arr[l + x];
    }
    for (let x = 0; x < len2; x++) {
        right[x] = arr[m + 1 + x];
    }
    let i = 0, j = 0, k = l;
    while (i < len1 && j < len2) {
        if (left[i] <= right[j]) {
            arr[k] = left[i];
            i++;
        } else {
            arr[k] = right[j];
            j++;
        }
        k++;
    }

    while (i < len1) {
        arr[k] = left[i];
        k++;
        i++;
    }

    while (j < len2) {
        arr[k] = right[j];
        k++;
        j++;
    }
}


