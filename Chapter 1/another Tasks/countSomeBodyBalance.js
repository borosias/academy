function countBalance(str) {
    let radix = 0, countEnd = false, name = '', count = 0, obj = {}, nameWrite = false;
    for (let i = str.length + 1; i >= 0; i--) {
        let charCode = str.charCodeAt(i)
        if (charCode >= 48 && charCode <= 57) {
            count += ((charCode - 48) * (10 ** radix))
            radix++;
            if (countEnd) {
                count = 0
                countEnd = false
            }
        }

        if (charCode === 47 && str.charCodeAt(i + 1) === ">".charCodeAt(0)) {
            countEnd = true;
            name = '';
            nameWrite = true;
        } else if (charCode === 64 && str.charCodeAt(i - 1) === "<".charCodeAt(0)) {
            nameWrite = false
            obj[name] = count
            radix = 0
        } else if (nameWrite) {
            if (charCode !== 32) {
                let rule = charCode < 97 ? charCode + 32 : charCode
                name = String.fromCharCode(rule) + name;
            }
        }
    }

    return obj;
}

console.log(countBalance("Hello <@Kate /> and <@Den /> you did your work well and I sent you 1000 USDT. <@Dmitrty />" +
    " like <@Antony /> was working at the weekend so I sent you 350 USDT. <@Max /> won 600 USDT"))