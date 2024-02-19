function toExponential(num, fractionDigits) {
    const length = num.toString().length;
    let afterPointLength = fractionDigits ? fractionDigits : length - 1;
    if (fractionDigits <= 0) {
        afterPointLength = -1;
    }
    let res = (num * (10 ** (1 - length))).toString()
    if (afterPointLength + 2 < res.length) {
        if (res.charCodeAt(afterPointLength + 2) >= 53) {
            let res1
            res1 = res.slice(0, afterPointLength + 1)
            res1 += String.fromCharCode(res.charCodeAt(afterPointLength+1)+1)
            res = res1
        } else {
            res = res.slice(0, afterPointLength + 2)
        }

    } else if (afterPointLength + 2 > res.length) {
        while (res.length < afterPointLength + 2) {
            res += "0"
        }
    }

    res += `e+${length - 1}`

    return res
}

let a = 123456789
let foo = 4
console.log(`${toExponential(a, foo)} ?= ${a.toExponential(foo)}
${toExponential(a, foo) === a.toExponential(foo)}`)
console.log()