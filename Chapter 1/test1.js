const str = '0.000190007';

function parseNumberFromRightToLeft(str) {
    const length = str.length - 1;
    let res = 0;
    let radix = 10;
    let decimal = 1;

    const zero = '0'.charCodeAt(0);
    const nine = '9'.charCodeAt(0);

    for(let i = length; i >=0; i--) {
        const charCode = str[i].charCodeAt(0);
        if(charCode >= zero && charCode <= nine) {
            const digit = (charCode - zero) * radix;
            radix *= 10;
            res += digit;
        } else if (str[i] === '.') {
            decimal = radix;
        }
    }
    return res / decimal;
}

console.log(parseNumberFromRightToLeft(str));
