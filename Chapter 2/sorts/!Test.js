import {bubble} from "./bubble.js";
import {bucket} from "./bucket.js";
import {counting} from "./counting.js";
import {insertion} from "./insertion.js";
import {merge} from "./merge.js";
import {selection} from "./selection.js";
import {quick} from "./quick.js";
import {heap} from "./heap.js";
import {radix} from "./radix.js";
import {shell} from "./shell.js";
import {tim} from "./tim.js";


let arr = [21,125,732,732,312,75,2385,23,750,75342,-5342,32678,5453,-34,-784,86,-23,81]

console.log(bubble(Array.of(...arr)))
console.log(bucket(Array.of(...arr)))
console.log(counting(Array.of(...arr)))
console.log(insertion(Array.of(...arr)))
console.log(merge(Array.of(...arr)))
console.log(selection(Array.of(...arr)))
console.log(quick(Array.of(...arr)))
console.log(heap(Array.of(...arr)))
console.log(shell(Array.of(...arr)))
console.log(radix(Array.of(...arr)))
console.log(tim(Array.of(...arr)))
