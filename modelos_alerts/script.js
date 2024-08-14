function newAlert(text) {
    if (document.getElementById("newPopup") === null) {
        let newPopup = document.createElement("div");
        document.body.appendChild(newPopup);
        newPopup.setAttribute("class", "newAlertClass");
        newPopup.setAttribute("id", "newPopup");
        newPopup.innerHTML += `<p>${text}</p>`;

        let ButtonOk = document.createElement("button");
        ButtonOk.innerText = "Ok";
        newPopup.appendChild(ButtonOk);

        ButtonOk.addEventListener("click", function () {
            document.getElementById("newPopup").style.animation = "";

            setTimeout(() => document.getElementById("newPopup").style.animation = "newPopupOutBottom 1000ms forwards"
                , 100);

            setTimeout(() => document.getElementById("newPopup").remove()
                , 1500)

        })
    }

}

function newConfirm(text) {
    if (document.getElementById("newPopup") === null) {
        let newPopup = document.createElement("div");
        document.body.appendChild(newPopup);
        newPopup.setAttribute("class", "newConfirmClass");
        newPopup.setAttribute("id", "newPopup");
        newPopup.innerHTML += `<p>${text}</p>`;

        let buttons = document.createElement("div");
        let buttonYes = document.createElement("button");
        let buttonNo = document.createElement("button");

        buttons.setAttribute("class", "confirmButtons");
        buttons.appendChild(buttonYes);
        buttons.appendChild(buttonNo);

        buttonYes.innerText = "Sim";
        buttonNo.innerText = "Não";

        buttonYes.setAttribute("value", "Ok");
        buttonYes.setAttribute("id", "buttonYes");
        buttonNo.setAttribute("value", "Cancelar");
        buttonNo.setAttribute("id", "buttonNo");

        newPopup.appendChild(buttons);

        buttonYes.addEventListener("click", function () {
            document.getElementById("newPopup").style.animation = "";
            setTimeout(() => document.getElementById("newPopup").style.animation = "newPopupOutBottom 1000ms forwards"
                , 100);
            setTimeout(() => document.getElementById("newPopup").remove()
                , 1500)
        })

        buttonNo.addEventListener("click", function () {
            document.getElementById("newPopup").style.animation = "";
            setTimeout(() => document.getElementById("newPopup").style.animation = "newPopupOutBottom 1000ms forwards"
                , 100);
            setTimeout(() => document.getElementById("newPopup").remove()
                , 1500)
        })
    }
}

function newInfo(text) {
    if (document.getElementById("newInfo") === null) {
        let newInfo = document.createElement("div");
        newInfo.setAttribute("id", "newInfo");
        document.body.appendChild(newInfo);
        newInfo.innerHTML = `<p>${text}</p>`;

        setTimeout(() => {
            document.getElementById("newInfo").remove();
        }, 5500);
    }
}   