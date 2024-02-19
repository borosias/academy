const x = 72367.2368438;

console.log(Number.isFinite(20*(1/5)**200));
console.log(Number.isInteger(35.643))
console.log(Number.isNaN(NaN))
console.log(Number.isSafeInteger(x ** 40))
console.log(Number.parseInt("001111001100001", 2))
console.log(Number.parseFloat("00111.1001100001"))
console.log(x.toExponential(3))
console.log(x.toFixed(3))
console.log(x.toPrecision(3))
console.log((7777).toString(2))
console.log(x.toLocaleString("ja-JP", {style: "currency", currency: "EUR"}))
console.log(x.valueOf())
