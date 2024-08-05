
//object orinted
class country{
    private name : string
    private vahed_pool : string
        constructor(name1:string , vahed:string){
            this.name = name1;
            this.vahed_pool = vahed;
        }
        get_name():string{
            return this.name;
        }
        get_pool():string{
            return this.vahed_pool;
        }

}

let iran = new country("iran" , "rial");
console.log(iran);
//// generic type

