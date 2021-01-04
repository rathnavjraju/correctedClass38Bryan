var canvas, backgroundImage, 
gameState=0, playerCount,distance=0, //added distance variable
database,
form, player,allPlayers, game,
cars=[],car1,car2,car3,car4;

function setup(){
    canvas=createCanvas(displayWidth-30,displayHeight-140);
    database = firebase.database();
    game=new Game();
    //gameState=1; c1
    game.getState();
    game.start();
}

function draw(){
    if(playerCount===4){
        game.update(1);
    }
    if(gameState===1){
        clear();
        game.play();
    }
   // drawSprites(); inside game class
}