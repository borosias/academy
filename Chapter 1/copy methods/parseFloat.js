function parseFloat(str) {
    let text = str.trim();
    let num = 0, rest = 0;
    let radix = 0;
    let isNegative = false, notEmpty = false;
    let afterDot = false;
    let startChar = text.charCodeAt(0);

    if (startChar === 45) {
        startChar = text.charCodeAt(1);
        isNegative = true;
    }
    if (startChar < 48 || startChar > 57) {
        return NaN;
    }
    for (let i = 0; i < text.length; i++) {
        notEmpty = true;
        const tmpChar = text.charCodeAt(i);
        if (tmpChar === 46) {
            afterDot = true;
        } else if (tmpChar === 45 && num === 0) {

            isNegative = true;
        }else if (tmpChar >= 48 && tmpChar <= 57) {
            if (afterDot) {
                rest = rest * 10 + (tmpChar - 48)
                radix--;
            } else {
                num = num * 10 + (tmpChar - 48);
            }
        } else if (num !== 0) {
            break;

        }
    }
    num += rest * 10 ** radix
    if (isNegative) {
        num *= (-1)
    }
    if (notEmpty) {
        return num;
    }
    return NaN;
}

a = ["-25.1371hfsh"," ","Hello 0.21562","         -0.13664272HFS", "10 years"]
a.forEach(value => console.log(parseFloat(value)))
