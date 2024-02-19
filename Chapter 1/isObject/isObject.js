function isObject(data) {
    return data ? data.constructor === Object : false;
}

const foo = null;
console.log(isObject(foo))