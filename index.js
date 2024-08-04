"use strict";
let make_hello = (a, b) => {
    return a + b;
};
let s2 = 13;
let s3 = "alireza";
let obj = {
    name: "lambo",
    last_name: "ginni",
    price: 199,
    get_price: function () {
        return this.price;
    },
    drivers: ["ali", "reza", "farzan"]
};
class basic_printer {
    constructor() {
        this.name1 = "ss";
        this.pelak1 = "sasd";
    }
    seda() {
        console.log("aleasd");
    }
}
console.log(basic_printer.name);
//console.log(obj);
//console.log(obj.get_price());
