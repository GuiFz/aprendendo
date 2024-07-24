class ErroNadaFoiDigitado extends Error{
    constructor(){
        super(" Você deve Adicionar um ou mais itens a lista antes de concluir esta ação !");
    }
}


const botaoReiniciar = document.getElementById("botaoReiniciar");
const botaoAdd = document.getElementById("botaoAdd");
const barraDigitar = document.getElementById("barraDigitar");
const botaoCopiar = document.getElementById("botaoCopiar");
const lista = document.getElementById("lista");
let itens = [];
/*O Maxlength do html não estava funcionando :) */
barraDigitar.setAttribute("maxlength", 110);

botaoAdd.addEventListener("click", () => {
    if (barraDigitar.value) {
        if (!itens.includes(String(barraDigitar.value))) {
            itens.push(String(barraDigitar.value));
            addItem(String(barraDigitar.value));
        } else {
            alert("O item já está na lista !\nPara fazer Alterações antes remova-o usando o botão de remoção");
        }
    }
})

function addItem(item) {
    let novoItem = document.createElement("li");
    novoItem.textContent = item;
    novoItem.setAttribute("id", itens.indexOf(item));
    novoItem.innerHTML += "<br>";
    lista.appendChild(novoItem);

    let botaoRemove = document.createElement("input");
    botaoRemove.setAttribute("type", "button");
    botaoRemove.setAttribute("class", "remove");
    botaoRemove.setAttribute("value", "X");
    botaoRemove.style.display = "none";
    novoItem.appendChild(botaoRemove);

    novoItem.addEventListener("mouseenter", function () {
        botaoRemove.style.display = "inline";
    });
        novoItem.addEventListener("mouseleave", function () {
        setTimeout(()=> botaoRemove.style.display = "none", 10);
    });
    botaoRemove.addEventListener("click", function () {
        itens[novoItem.getAttribute("id")] = "*Item Removido*";
        lista.removeChild(novoItem);
    })

    /*Animação */
    document.getElementById("contLista").style.animation = "";
    setTimeout(function(){document.getElementById("contLista").style.animation = "adicionado 1000ms forwards";},200);

};

botaoReiniciar.addEventListener("click", () => {
    itens = [];
    let itensTemp = [...document.getElementsByTagName("li")];
    itensTemp.map(function (elemento) {
        lista.removeChild(elemento);
    })
    
    /*Animação */
    document.getElementById("contLista").style.animation = "";
    setTimeout(function(){document.getElementById("contLista").style.animation = "reiniciado 1000ms forwards";},200);

    barraDigitar.value = "";
})

botaoCopiar.addEventListener("click", () => {
    navigator.clipboard.writeText(lista.innerText).then(function () {
        if(lista.childElementCount == 0){
            throw new ErroNadaFoiDigitado();
        }

        /*Animação */
        document.getElementById("geral").style.animation = "";
        setTimeout(function(){document.getElementById("geral").style.animation = "copiado 1000ms forwards";},200);

    }).catch(function(e){
        alert("Erro ao copiar para Área de transferência \n\n"+e);
    })
});
