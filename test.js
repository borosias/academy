const obj = {};

obj["gas"] = 15;
obj["oil"] = 29;

console.log(obj)

const oilStation = Object.create(obj)
oilStation.oil = 40;
oilStation.gas = 34;
oilStation["diesel"] = 60;
console.log(oilStation)
const oilStation1 = {}
Object.assign(oilStation1,oilStation);
console.log(Object.entries(oilStation1))
