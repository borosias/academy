const pirate = {
    name: "Marshal D Teach",
    pirateName:"Black Beard",
    perks:[
        {name: "devil fruit",
         devilFruit:'Yami Yami Nomi'},
        {name:'Three souls',
        ability:'Can eat three devil fruits'},
        {name:'second devil fruit',
            secondDevilFruit:'Gura Gura Nomi' }
    ],
    bounty:125_000_000_000,
    position: 'Yonka'
}

let {pirateName:nickName,
    bounty:costInWorldGov,
    position:yourPosition,
    perks:[ , ,{secondDevilFruit: devilFruit}]} = pirate;

console.log(nickName)
console.log(costInWorldGov)
console.log(yourPosition)
console.log(devilFruit)

for (let {name:value} of pirate.perks) {
    console.log(`perk name is ${value}`)
}