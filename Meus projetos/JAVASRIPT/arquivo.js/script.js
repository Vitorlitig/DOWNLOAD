const result = document.querySelector('.result')
const myScore = document.querySelector('#human-score')
const machineScore = document.querySelector('#machine-score')

let humanScoreNumber = 0
let machineScoreNumber = 0


const playHuman = (humanChoice) => {
    //     console.log(humanChoice)
    //     console.log( playMachine())

    playTheGame(humanChoice, playMachine())
}

const playMachine = () => {
    const choices = ['pedra', 'papel', 'tesoura']
    const ramdonNumber = Math.floor(Math.random() * 3)

    console.log(ramdonNumber)

    return choices[ramdonNumber]
}

const playTheGame = (human, machine) => {

    console.log("humano:  " + human + "Maquina: " + machine)

    if (human === machine) {
        result.innerHTML = "Deu empate!"
    } else if ((human === 'papel' && machine === 'pedra') ||
        (human === 'pedra' && machine === 'tesoura')
        || (human === 'tesoura' && machine === 'papel')) {

        humanScoreNumber++   
        myScore.innerHTML = humanScoreNumber  
        result.innerHTML = "Você ganhou 😁"
    } else {
        machineScoreNumber++
        machineScore.innerHTML = machineScoreNumber
        result.innerHTML = "Você perdeu para a Alexa 🤖"
    }


}