function parseBalance(str) {
    let refStr = "";
    let num = 0;

    for (let i = 0; i < str.toString().trim().length; i++) {
        const tmpChar = str.charCodeAt(i);
        if (tmpChar >= 48 && tmpChar <= 57) {
            refStr += refStr.charCodeAt(tmpChar);
            num = num * 10 + (tmpChar - 48);
        } else if (refStr !== "") {
            break;
        }
    }
    if (num === null || num === undefined || (refStr === "" && num === 0)) {
        num = NaN;
    }
    return num;
}



console.log(parseBalance("My wallet balance is 14960 USDT"))