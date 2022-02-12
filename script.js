let order = [];
let clickedOrder = [];

let score = 0;

// 0  - green
// 1 - red
// 2 - yellow
// 3 - blue

const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const yellow = document.querySelector('.yellow');
const green = document.querySelector('.green');
const scoreLabel = document.getElementById('score');

let shuffleOrder = () => {
    let colorOrder = Math.floor(Math.random() * 4);
    order.push(colorOrder);
    clickedOrder = [];

    for (let i in order) {
        let elementColor = createColorElement(order[i]);
        setTimeout(() => {
            ligthColor(elementColor);
        }, 500 * i);
    };
}


let ligthColor = (elementColor) => {
    elementColor.classList.add('selected')

    setTimeout(() => {
        elementColor.classList.remove('selected');
    }, 250);
}

//verifica se ordem foi selecionada corretamente
let checkOrder = () => {
    for (let i in clickedOrder) {
        if (clickedOrder[i] != order[i]) {
            gameOver();
            break;
        }
    }

    if (clickedOrder.length == order.length) {
        alert(`Pontuação:${score}\n Você acertou Iniciando proximo nivel!`);
        nextLevel();
    }
}
//função ao clicar 
let click = (color) => {
    clickedOrder[clickedOrder.length] = color;
    createColorElement(color).classList.add('selected');

    setTimeout(() => {
        createColorElement(color).classList.remove('selected');
        checkOrder();
    }, 250);


}
//seleciona o elemento
let createColorElement = (color) => {
    switch (color) {
        case 0:
            return green;
        case 1:
            return red
        case 2:
            return yellow
        case 3:
            return blue;
    }

}

let nextLevel = () => {
    setTimeout(() => {
        score++;
        scoreLabel.innerHTML = score;
        shuffleOrder();
    }, 250)
}

let gameOver = () => {
    alert(`Pontuação: ${score} \n Você perdeu o jogo \n clique em ok para reiniciar o jogo`);
    order = [];
    clickedOrder = [];

    playGame();
}

let playGame = () => {
    alert(`Bem vindo ao Genesis! \Iniciando novo jogo!`);
    score = 0;
    scoreLabel.innerHTML = score;
    nextLevel();

}



green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);

playGame();