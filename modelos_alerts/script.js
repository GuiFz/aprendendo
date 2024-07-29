const text = "Cadastro Concluido"
//Variável criada apenas para servir de valor ao alert padrão, já que não é possível usar aspas no html;

class PersonalizedAlert {
    constructor(text = "Alert") {
        let newAlert = document.createElement("div");
        document.body.appendChild(newAlert);
        newAlert.setAttribute("class", "newAlertClass");
        newAlert.setAttribute("id", "newAlert");
        newAlert.innerHTML += `<p>${text}</p>`;

        let ButtonOk = document.createElement("button");
        ButtonOk.setAttribute("class", "newAlertButtonsClass")
        ButtonOk.innerText = "OK";
        newAlert.appendChild(ButtonOk);

        ButtonOk.addEventListener("click", function () {
            outAlert();
        })

        document.addEventListener("keyup", function (tecla) {
            if (tecla.key == "Enter") {
                ButtonOk.click();
            }
        })
    }
}

class PersonalizedInfo {
    constructor(text = "Informação") {
        if (document.getElementById("newInfo") == undefined) {
            let newInfo = document.createElement("div");

            newInfo.setAttribute("id", "newInfo");
            document.body.appendChild(newInfo);
            newInfo.setAttribute("id", "newInfo");
            newInfo.innerHTML = `<p>${text}</p>`;
        }
    }
}

function callAlert() {
    if (document.getElementById("newAlert") == undefined) {
        let alerta = new PersonalizedAlert("Cadastro Concluido!");
    }
};

function outAlert() {
    document.getElementById("newAlert").style.animation = "";
    setTimeout(() => document.getElementById("newAlert").style.animation = "newAlertOutTop 1000ms forwards"
        , 50);

    setTimeout(() => document.getElementById("newAlert").remove()
        , 1500)

    delete alerta;
}

function callInfo() {
    if (document.getElementById("newInfo") == undefined) {
        let info = new PersonalizedInfo("Cadastro Concluído!");
        setTimeout(() => {
            document.getElementById("newInfo").remove();
            delete info;
        }, 5500);
    }
}