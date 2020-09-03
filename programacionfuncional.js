//PROGRAMACION FUNCIONAL

const numero = [4,6,8,10];
const double = numero.map(n => n*2);

console.log(double)

//funciones recursivas()

function marcaTennis(){
    console.log("adidas,nike,yordan");
    marcaTennis();
}
   
marcaTennis();
