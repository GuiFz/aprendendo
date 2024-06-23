let visor = ' ';
let res = new Number(null);
let opt = " ";
let i = 0;
let opera = " ";
function calc(){ 
    document.getElementById('vis').innerHTML = res;
}
//Função de soma
function som(opera){
   if(i>0){
        if(opt!=opera){
            sub_calc();
            opt = opera;        
        }else{
            opt = opera;
        res+=Number(visor); 
        };
   }else{
    i++;
    res = Number(visor)
    opt = opera;
   }
    visor = " ";
    document.getElementById('vis').innerHTML = visor;
}
//Função de Subtração
function sub(opera){
    if(i>0){
        if(opt!=opera){
            sub_calc();
            opt = opera;    
        }else{
           res-=Number(visor)
           opt = (opera); 
        }
    } else{
        i++;
        res = Number(visor)
        opt = opera;
    }
    visor = " ";
    document.getElementById('vis').innerHTML = visor;
}
//Função de Multiplicação
function mult(opera){
    if(i>0){
        if(opt!=opera){
            sub_calc();
            opt = opera;   
            console.log(res); 
        }else{
            res*=Number(visor);
        }
    } else{
        i++;
        res = Number(visor);
        opt = opera;
    }
    visor = " ";
    document.getElementById('vis').innerHTML = visor;
}
// function divi(opera){ 
//     opt = opera;
//     if(i>0){
//         res/=Number(visor);
//     } else{res += Number(visor)}
//     i++;
//     res/=Number(visor);
//     visor = " ";
//     document.getElementById('vis').innerHTML = visor;
// }

function add(valor){
    if(visor.length < 14){
        visor += valor;
        document.getElementById('vis').innerHTML = visor;
    }
}
function igual(){
    sub_calc();
    visor = " ";
    document.getElementById('vis').innerHTML = "<span style=\"color:#0a0\">"+res+"</span>";
    res = 0;
    opt = " ";
    i = 0;
}
function bc(){
    visor = visor.slice(0,-1);
    document.getElementById('vis').innerHTML = visor;
}
function C(){
    visor = " ";
    res = 0;
    dgt = 0;
    i = 0;
    document.getElementById('vis').innerHTML = visor;
}
function sub_calc(){
    switch(opt){
        case "+":
            res+=Number(visor);
        break;
        case "-" :
            res-=Number(visor);
        break;
        case "x":
            res*=Number(visor);
        break;
        // case "/":
        //     res/=Number(visor);
        // break;
    };
}   
//Digitação por meio do teclado
document.addEventListener("keyup",(tecla)=>{
    if(tecla.key === "0" || tecla.key === "1" || tecla.key === "2" || tecla.key === "3" || tecla.key === "4" || tecla.key === "5" || tecla.key === "6" || tecla.key === "7" || tecla.key === "8" || tecla.key === "9"){
        add(Number(tecla.key));
    }else{
        switch(tecla.key){
        case ".":
            add(".");
        break;
        case "Backspace":
            bc();
        break;
        case "Enter":
            igual();
        break;
        case "c":
            C();
        break;
        case "+":
            som("+");
        break;
        case "-":
            sub("-");
        break;
        case "x":
            mult("x");
        break;
        case "*":
            mult("x");
        break;
        };
    }
})