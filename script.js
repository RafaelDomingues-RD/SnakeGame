//Seta o canvas na variavel. Selecionando o id que foi colocado no canvas 
let canvas = document.getElementById("snake");
//Informa as dimensoes
let context = canvas.getContext("2d");
//Defini os pixels
let box = 32;
let snake = [];
snake[0] = {
    x: 8 * box,
    y: 8 * box
}
let direction = "right";

//Cria o canvas
function criarBG(){
    //Defini a cor
    context.fillStyle = "lightgreen";
    //Criar a tela
    context.fillRect(0, 0, 16 * box, 16 * box);
}

function criarCobrinha(){
    for(i=0; i < snake.length; i++){
        context.fillStyle = "green";
        context.fillRect(snake[i].x, snake[i].y, box, box);
    }
}

function iniciarJogo(){
    criarBG();
    criarCobrinha();

    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    if(direction == "right") snakeX += box;
    if(direction == "left") snakeX -= box;
    if(direction == "up") snakeY -= box;
    if(direction == "down") snakeY += box;

    snake.pop();

    let newHead = {
        x: snakeX,
        y: snakeY
    }

    snake.unshift(newHead);
}

//
let jogo = setInterval(iniciarJogo, 100);

