function parseInt(str) {
    let text = str.trim()
    let refStr = "";
    let num = 0;
    let isNegative = false;
    let startChar = text.charCodeAt(0);

    if (startChar === 45){
        startChar = text.charCodeAt(1);
        isNegative = true;
    }
    if (startChar < 48 || startChar > 57) {
        return NaN;
    }
    for (let i = 0; i < text.length; i++) {
        const tmpChar = text.charCodeAt(i);

        if (tmpChar === 45 && refStr === "") {
            isNegative = true;
        } else if (tmpChar >= 48 && tmpChar <= 57) {
            refStr += refStr.charCodeAt(tmpChar);
            num = num * 10 + (tmpChar - 48);
        } else if (refStr !== "") {
            break;
        }
    }
    if (isNegative) {
        num = -1 * num;
    }
    if (num === null || num === undefined || (refStr === "" && num === 0)) {
        num = NaN;
    }
    return num;
}



const a = ["-/-315"," -00050.42Stringdg "," -0Stringdg ", " 40-0","My wallet balance is 14960 USDT", "23.326gsd"," "]

 a.forEach(value => {
     console.log(`${parseInt(value)} = ${Number.parseInt(value)}
${parseInt(value)===Number.parseInt(value)}
`)
 })
