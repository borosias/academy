const data = ['abc', 'def', 'xzy', 'yz', 'fgh'];

function getSortedString(data) {
    let str = data.join('')
    let res = {}
    for (const string of str) {
        res[string.charCodeAt(0)] = string
    }
    return Object.values(res).join('')
}

console.log(getSortedString(data))

