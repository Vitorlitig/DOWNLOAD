const boxResult = document.querySelector(".caixa-de-resultados")
const masc = document.querySelector(".mascara-form")
const paragrafoResul = document.querySelector("#paragrafo-result")

function generateNumber(){

    const min = Math.ceil(document.querySelector(".input-min").value)
    const max = Math.floor(document.querySelector(".input-max").value)

    const result = Math.floor(Math.random() * (max - min + 1)) + min;
    
    boxResult.style.left = "50%"
    boxResult.style.transform = "translateX(-50%)"
    masc.style.visibility = "visible"
    paragrafoResul.innerHTML = result;

}

function clickOnMasc(){
    boxResult.style.left = "-50%"
    boxResult.style.transform = "translateX(50%)"
    masc.style.visibility = "hidden"
   
}


    









