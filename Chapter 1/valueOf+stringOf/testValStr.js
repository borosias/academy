const obj = {
    valueOf() {
        return "text"
    },
    toString() {
        return 20;
    }
};
obj[Symbol.toPrimitive] = (hint) => {
    if (hint === "number") {
        return "40"
    }
    if (hint === "string") {
        return 10;
    }
    return true;
}


console.log(`My dad is ${+obj} years old, so my mom makes ${obj} cookies.
And it's ${obj + ""} that my dad really likes these cookies.
But! Before he can eat it, Mom instructs him to write a ${obj.valueOf()} 
in which Dad will tell what he likes about Mom.
And my dad can eat his ${obj.toString()} cookies... 
But wait, where does he get ${obj} more cookies??
`)

Date.prototype.valueOf = () => {
    return 500;
}
Date.prototype.toString = () => {
    return 20
}

const date = new Date()

console.log(+date);
console.log(`${date}`);
console.log(date + "");