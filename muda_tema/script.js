const form = document.getElementById("form1");
const nome = document.getElementById("name");
const apelido = document.getElementById("nick");
const idade = document.getElementById("age");
// const button = document.getElementsByName("button");

form.addEventListener("submit", function (event) {
    event.preventDefault();
    if (nome.value && apelido.value && idade.value) {
        let Dados = {
            nome: nome.value,
            apelido: apelido.value,
            idade: idade.value
        };

        console.log(Dados);

        nome.value = "";
        apelido.value = "";
        idade.value = "";
    } else {
        const elements = [nome, apelido, idade];
        elements.map(function (element) {
            if (!element.value) {
                element.style.border = "2px solid #F20";
            } else {
                element.style.border = "2px solid #0F0";
                setTimeout(() => element.style.border = "inherit", 1000);
            }
        })
    }
});

document.getElementById("lightMode").addEventListener("click", lightMode);
document.getElementById("darkMode").addEventListener("click", darkMode);

function darkMode() {
    document.documentElement.style.setProperty("--bgColor", "#000");
    document.documentElement.style.setProperty("--secColor", "#FFF");
}
function lightMode() {
    document.documentElement.style.setProperty("--bgColor", "#FFF");
    document.documentElement.style.setProperty("--secColor", "#000");
    document.getElementById("shadow").style.display = "none";
}