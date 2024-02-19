function countBalanceFront(str) {
    let refStr = "";
    let balance = 0;
    let isBalanceNotDone = true;
    let num = 0;

    for (let i = 0; i < str.toString().trim().length; i++) {
        const tmpChar = str.charCodeAt(i);
        if (tmpChar >= 48 && tmpChar <= 57) {
            refStr += refStr.charCodeAt(tmpChar);
            if (isBalanceNotDone) {
                balance = balance * 10 + (tmpChar - 48);
            } else {
                num = num * 10 + (tmpChar - 48);
            }
        } else if (refStr !== "") {
            isBalanceNotDone = false;
            balance -= num;
            num = 0;
            refStr = ""

        }
    }

    if (balance === null || balance === undefined || (refStr === "" && balance === 0)) {
        balance = NaN;
    }
    return balance;
}


function countBalanceBack(str) {
    let refStr = "";
    let balance = 0;
    let isBalanceNotDone = true;
    let num = 0;

    for (let [i,j] = [str.toString().trim().length,0]; i > 0; i--) {
        const tmpChar = str.charCodeAt(i);
        if (tmpChar >= 48 && tmpChar <= 57) {

            refStr += refStr.charCodeAt(tmpChar);
            if (isBalanceNotDone) {
                balance = balance + ((tmpChar - 48)*(10**j) )  ;
            } else {
                num = num + ((tmpChar - 48)*(10**j) ) ;
            }
            j++;
        } else if (refStr !== "") {

            isBalanceNotDone = false;
            balance -= num;
            num = 0;
            j = 0;
            refStr = ""
        }
    }

    if (balance === null || balance === undefined || (refStr === "" && balance === 0)) {
        balance = NaN;
    }
    return balance;
}


console.log(countBalanceFront("My wallet balance is 14690 USDT. I paid 750 USDT for plane tickets and 921 USDT for a flat"))
console.log(countBalanceBack("I paid 750 USDT for plane tickets and 921 USDT for a flat. My wallet balance is 14690 USDT."))