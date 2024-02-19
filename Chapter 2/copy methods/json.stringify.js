function stringify(data) {
    if (typeof data === 'object' && data !== null) {
        if (Array.isArray(data)) {
            return '[' + data.map(item => stringify(item)).join(',') + ']';
        } else if (data instanceof Date) {
            return `"${data.toISOString()}"`
        } else {
            return (
                '{' +
                Object.keys(data)
                    .map(key => `"${key}":${stringify(data[key])}`)
                    .join(',') +
                '}'
            )
        }
    } else if (typeof data === 'string') {
        return `"${data}"`
    } else {
        return String(data)
    }
}

let arr = [1, 5, 3, 73, 47, 3]
let obj = {
    arad: 125,
    bars: "true",
    syst: [1, 5, 2]
}
let date = new Date();
let intl = new Intl.Collator()

console.log(JSON.stringify(obj))
console.log(stringify(obj))
