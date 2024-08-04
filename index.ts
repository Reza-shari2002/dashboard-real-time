let make_hello = (a:string , b:number):string=>{
    return a+b;
}

let s2:number = 13;
let s3:string = "alireza";
type Car={
    name:string
    last_name:string
    price:number
    get_price: (paraama:void)=>number
    drivers:string[]
}

let obj:Car={
    name:"lambo",
    last_name:"ginni",
    price:199,
    get_price:function():number{
        return this.price
    },
    drivers:["ali" , "reza"  ,"farzan"]
}


interface motor{
    name1:string
    pelak1:string
    seda1:()=>void

}

let s:motor={
    name1 : "asd",
    pelak1 : "asdasd",
    seda1 : function(){
        console.log("asdas");
    }
}


interface person{

    make_voice : ()=>void

}

class myclass implements person{
    make_voice(){
        console.log("");
    }
}



