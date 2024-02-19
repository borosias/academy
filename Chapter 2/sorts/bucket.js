export function bucket(arr,size) {
    if (arr.length === 0) {
        return arr;
    }

    let min = arr[0];
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        } else if (arr[i] > max) {
            max = arr[i];
        }
    }

    const bucketSize =  size || 10;
    let bucketCount = Math.floor((max - min) / bucketSize) + 1;

    let buckets = new Array(bucketCount)
    for (let i = 0; i < bucketCount; i++) {
        buckets[i] = []
    }

    for (let i = 0; i < arr.length; i++) {
        let bucketIndex = Math.floor((arr[i] - min) / bucketSize);
        buckets[bucketIndex].push(arr[i])
    }
    arr = []
    buckets.forEach((x) => {
        x.sort((a, b) => a - b)
        x.forEach((y) => arr.push(y))
    })

    return arr;
}

