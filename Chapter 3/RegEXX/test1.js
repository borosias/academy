//const regEx = /[a-z]+/ig

//const regEx = /[^a-z\s,\-_+]+/ig

//const regEx = /\d/g

//const regEx =/(?<=\W)\w+(?=\W)/;

//const text = "Hello, - World. 1234+"

//const regEx = /(?<=<@)\w+/g

//const regEx = /[a-z0-9_]+@[a-z0-9._]+\.[a-z]{2,12}/ig

//const regEx = /(\+?)\d+[0-9\-)(\s]{10,16}\d/g

//const text = "<@Boros/> Hayo, guys, especially, bebrus123_341HotDog@saray.bulalay.com and kira0981@mus.info.com, i need 64 stone stacks to 18:32. Here my phone +38(050) 555-24-07 <@Moris/> Okay, i get it. My phone is 380963925677"

//const regEx = /(MESS|CALL)\w+(?:CA|US)/g

//const text = "MESS532J23GFD835LD3US, 9I043H92390F9023JFIORNFIPOJFIO2HF0O23J034HJGF ,CALL00944BFD3GS2135GDSFRH33CA, 90I34WTUT4HUOGRI-932UIOGE9-O23IJ923, MESS000000211FF0CA, SKFJBOWRHGOIERJIO3TW8ERIG93U1 ,CALLFFFFFFFFFF135ZDHFUS"

const text = 'http://server.pro/server.id?=2'

const regEx = /^http(s?):\/{2}[a-z0-9.\-_]+\/[a-z0-9?=,.\-_+]+$/g

console.time('test')
console.log(regEx.test(text))
console.log(text.match(regEx))
console.timeEnd('test')