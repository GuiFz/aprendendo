let visor = ' ';
let res = new Number(null);
let opt = " ";
let i = 0;
let opera = " ";
function calc(){ 
    document.getElementById('vis').innerHTML = res;
}
function som(opera){
    if(opt!=opera){
        opt = opera;        
        sub_calc();
    }else{
        opt = opera;
       res+=Number(visor); 
    };
    visor = " ";
    document.getElementById('vis').innerHTML = visor;
    opt = opera;
}
function sub(opera){
    if(i>0){
        if(opt!=opera){
            sub_calc();
            opt = opera;    
        }else{
           res-=Number(visor); 
        }
    } else{res += Number(visor)}
    i++;
    visor = " ";
    document.getElementById('vis').innerHTML = visor;
    opt = opera;
}
function mult(opera){
    if(i>0){
        if(opt!=opera){
            sub_calc();
            opt = opera;    
        }else{
           res*=Number(visor); 
        }
        res*=Number(visor);
    } else{res+=Number(visor);}
    i++;
    visor = " ";
    document.getElementById('vis').innerHTML = visor;
    opt = opera;
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

    visor += valor;
    document.getElementById('vis').innerHTML = visor;
}
function igual(){
    sub_calc();
    visor = " ";
    document.getElementById('vis').innerHTML = res;
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