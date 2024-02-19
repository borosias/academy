function countApples(str) {
    let emoji = 'apple', lastCount = 0, word = '', name = '', count = 0, obj = {}, wordWrite = false, nameWrite = false;
    for (let i = str.length + 1; i >= 0; i--) {
        let tmpChar = str.charCodeAt(i)
        if (tmpChar === ":".charCodeAt(0) && !wordWrite) {
            wordWrite = true
            word = '';
        } else if (wordWrite) {
            if (tmpChar === ":".charCodeAt(0)) {
                wordWrite = false;
            } else {
                word = String.fromCharCode(tmpChar) + word;
            }
        }
        if (emoji === word) {
            count++;
            lastCount = count;
            word = '';
        }
        if (tmpChar === 47) {
            nameWrite = true;
        } else if (tmpChar === 64 && str.charCodeAt(i - 1) === "<".charCodeAt(0)) {
            nameWrite = false

            if (obj[name]) {
                lastCount += obj[name]
                count += obj[name]
            }
            if (count === 0) {
                obj[name] = lastCount;
            } else {
                obj[name] = count;
            }

            name = '';
            count = 0;
        } else if (nameWrite) {
            if (tmpChar !== 32) {
                let rule = tmpChar < 97 ? tmpChar + 32 : tmpChar
                name = String.fromCharCode(rule) + name;
            }
        }
    }

    return obj;
}

function countEmojis(str) {
    let radix = 0, emoji = '',countEnd = false,emojis = {}, name = '', count = 0, obj = {}, nameWrite = false;
    for (let i = str.length + 1; i >= 0; i--) {

        let codePoint = str.codePointAt(i)
        if ((codePoint >= 0x1F600 && codePoint <= 0x1F64F) ||
            (codePoint >= 0x1F300 && codePoint <= 0x1F5FF) ||
            (codePoint >= 0x1F680 && codePoint <= 0x1F6FF) ||
            (codePoint >= 0x1F900 && codePoint <= 0x1F9FF)) {
            radix = 0;
            if (countEnd){
                emojis = {}
                countEnd = false;
            }
            count = 0;
            emoji = String.fromCodePoint(codePoint);
        } else if (codePoint >= 48 && codePoint <= 57) {
            count += ((codePoint-48)*(10**radix))
            radix++;
        } else if (emoji!==""){
            emojis[emoji]=count;
        }

        if (codePoint === 47) {
            countEnd = true;
            name = '';
            nameWrite = true;
        } else if (codePoint === 64 && str.codePointAt(i - 1) === "<".codePointAt(0)) {
            nameWrite = false
            obj[name] = emojis

        } else if (nameWrite) {
            if (codePoint !== 32) {
                let rule = codePoint < 97 ? codePoint + 32 : codePoint
                name = String.fromCodePoint(rule) + name;
            }
        }
    }

    return obj;
}

//console.log(countApples(':apple::apple:<@KATE / >:apple:<@VIKTOR/ >:apple::apple:<@SERGEY/><@Dima />:apple::apple:<@viktor/><@Kate /><@Max/><@alisa /> :like: received:apple::apple::apple: this is so cool:apple: <@oleg/>:like:apple:like:!'))
console.log(countEmojis(
    '<@kate/> <@max/> have 5 🍎, but <@anton/> and <@alex/> have 20 🍅, 9 🍌, 15 🍎. ' +
        'Also u need to remember that <@Betty/> likes to eat 12 🥓 with 7 🍔'))
