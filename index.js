"use strict";
class country {
    constructor(name1, vahed) {
        this.name = name1;
        this.vahed_pool = vahed;
    }
    get_name() {
        return this.name;
    }
    get_pool() {
        return this.vahed_pool;
    }
}
let iran = new country("iran", "rial");
console.log(iran);
