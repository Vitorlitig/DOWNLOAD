// function sum(number1 = myNumber, number2 = 1 ){

// console.log(number1 + number2)

// }

// sum(13, 15)


// function sub(number1 = myNumber, number2 = 1 ){

//     console.log(number1 - number2)

//     }

//     sub(15, 13) 


// function mult(number1 = myNumber, number2 = 1 ){

//         console.log(number1 * number2)

//         }

//         mult(15, 13)

//     function div(number1 = myNumber, number2 = 1 ){

//             console.log(number1 / number2)

//             }

//             div(15, 13)

const cart = [22, 244, 5, 67, 99, 85, 260]
let finalPriceTithDiscont = 0;
let valorFinal = 0;

function calculateDiscont(price, discont) {
    const result = (price * discont) / 100

    return result
}


cart.forEach(elemenvalue => {
    
});
function totalValue(valueFinal) { valorFinal += valueFinal; }

cart.forEach(totalValue);

calculateDiscont()

cart.forEach(value => {
    if (value > 30) {
        const discont = calculateDiscont(value, 10)
        finalPriceTithDiscont = finalPriceTithDiscont + (value - discont)
    } else {
        finalPriceTithDiscont += value
    }

}); 
console.log(`
    O valor final da sua compra sem desconto seria R$:${valorFinal.toFixed(2)}
    Porem você recebeu desconto e sua compra ficou por apenas R$:${finalPriceTithDiscont.toFixed(2)} 
    !Você economizou R$:${valorFinal - finalPriceTithDiscont} na sua compra!`)