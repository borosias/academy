function jsonParse(json){
        return eval('(' + json + ')');
}

let arr = [1, 5, 3, 73, 47, 3]
let obj = {
    arad: 125,
    bars: "true",
    syst: [1, 5, 2]
}
let date = new Date();
let intl = new Intl.Collator()
obj = JSON.stringify(obj)

console.log(JSON.parse(obj))
console.log(jsonParse(obj))