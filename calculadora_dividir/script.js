let divisor = 0;
let dividento = 0;
let resultado  = 0;

class DivisaoPorZero extends Error{
    constructor(message){
        super("Não é Possível Dividir por (0) Zero.");
    }
}
class InputVazia extends Error{
    constructor(message){
        super("Preencha  Dividendo e Divisor usando Números")
    }
}

function calcular(){
    divisor = parseFloat(document.getElementById("divisor").value);
    dividendo = parseFloat(document.getElementById("dividendo").value);
    try{
        if(divisor == 0 ){
            throw new DivisaoPorZero();
        }else if(!dividendo || !divisor){
            throw new InputVazia();
        }
        resultado = dividendo/divisor;
        document.getElementById("saida").innerHTML = resultado.toPrecision(3); 
    }catch(e){
        alert(" "+e);
    }finally{
        console.log("Operação Realizada");
    }
}