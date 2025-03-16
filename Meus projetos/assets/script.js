const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")
//const currencySelect0 = document.querySelector(".currency-select0")

function convertValues(){
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
    const currencyValueconverted = document.querySelector(".currency-value")

    const dolarToday = 5.2
    const euroToday = 6.2
    const libraToday = 7.46
    const btcToday = 523302.47
    // const dolarLibra = 0.77
    // const dolarEuro = 0.92
    // const dolarBtc = 0

    //const convertedValue = inputCurrencyValue / dolarToday

    if(currencySelect.value == "dolar"){
        currencyValueconverted.innerHTML = new Intl.NumberFormat("en-US", {
            style:"currency",
            currency:"USD"
        }).format(inputCurrencyValue/dolarToday)
    }
    if(currencySelect.value == "libra"){
        currencyValueconverted.innerHTML = new Intl.NumberFormat("en-UK", {
            style:"currency",
            currency: "GBP"
        }).format(inputCurrencyValue/libraToday)
    }

    if(currencySelect.value == "bitcoin"){
        currencyValueconverted.innerHTML = new Intl.NumberFormat("de-DE", {
          style: 'currency',
          currency: 'XBT'
        }).format(inputCurrencyValue/btcToday)
    }
    
    if(currencySelect.value == "euro"){
        currencyValueconverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style:"currency",
            currency: "EUR"
        }).format(inputCurrencyValue/euroToday)
    }
    // if(currencySelect0.value == "dolar"){
    //     currencyValueconverted.innerHTML = new Intl.NumberFormat("de-DE", {
    //         style:"currency",
    //         currency: "EUR"
    //     }).format(inputCurrencyValue/dolarLibra)
    //}
    // if(currencySelect0.value == "libra"){
    //     currencyValueconverted.innerHTML = new Intl.NumberFormat("de-DE", {
    //         style:"currency",
    //         currency: "USD"
    //     }).format(inputCurrencyValue = dolarLibra)
    //}
currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL"
}).format(inputCurrencyValue)
  
}

function changeCurrency(){
    const currencyName = document.getElementById("currency-name")
    const currencyImg = document.querySelector(".currency-img")

if(currencySelect.value == "dolar"){
    currencyName.innerHTML = "Dólar americano"
    currencyImg.src = "./estados-unidos (1) 1.png"
}

if(currencySelect.value == "euro") {
    currencyName.innerHTML = "Euro"
    currencyImg.src = "./euro.png"
}

if(currencySelect.value == "bitcoin") {
    currencyName.innerHTML = "Bitcoin"
    currencyImg.src = "./bitcoin.png"
}

if(currencySelect.value == "libra") {
    currencyName.innerHTML = "libra"
    currencyImg.src = "./libra.png"
}





// function changeCurrency0(){
//     const currencyName0 = document.getElementsById("currency-convert")
//     const currencyImg0 = document.querySelector(".currency-coin")

// if(currencySelect0.value == "real"){
//     currencyName0.innerHTML = "Real Brasileiro"
//     currencyImg0.src = "./brasil 2.png"
// }

// if(currencySelect0.value == "dolar0"){
//     currencyName0.innerHTML = "Dólar americano"
//     currencyImg0.src = "./estados-unidos (1) 1.png"
// }

// if(currencySelect0.value == "euro0") {
//     currencyName0.innerHTML = "Euro"
//     currencyImg0.src = "./euro.png"
// }

// if(currencySelect0.value == "bitcoin0") {
//     currencyName0.innerHTML = "Bitcoin"
//     currencyImg0.src = "./bitcoin.png"
// }

// if(currencySelect0.value == "libra0") {
//     currencyName0.innerHTML = "libra"
//     currencyImg0.src = "./libra.png"
// }

 convertValues()
}


//.addEventListener("change", changeCurrency0)
currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)

