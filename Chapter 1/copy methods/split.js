function split(text, divider) {
    text = text.trim();
    let refStr = ''
    let arr = [];
    let tempStr = '';
    let j = 0;
    for (let i = 0; i < text.length; i++) {
        if (divider.length > 1) {
            if (text[i] === divider[j]) {
                j++;
                refStr += text[i]
                if (refStr === divider) {
                    arr.push(tempStr);
                    [j, refStr] = [0, ''];
                    tempStr = '';
                }
            } else if (text[i] === divider[0]) {
                refStr += text[i];
                j = 0;
            } else {
                tempStr = tempStr + refStr + text[i];
                [j, refStr] = [0, ''];
            }
        } else {
            if (text[i] === divider) {
                arr.push(tempStr);
                tempStr = '';
            } else {
                tempStr = tempStr + text[i];
            }
        }

    }
    arr.push(tempStr)
    return arr;
}
let str = "Hello my name is Viktor and my friend name is Ilya";
console.log(split(str, "name is"))
console.log(str.split("name is"))