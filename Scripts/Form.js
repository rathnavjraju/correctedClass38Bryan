class Form{
    constructor(){
        this.input=createInput("Name");
        this.button=createButton("Play");
        this.greeting=createElement("h2");
        this.title=createElement('h1');
    }

    hide(){
        this.input.hide();
        this.button.hide();
        this.greeting.hide();
        this.title.hide();
    }

    display(){
        this.title.html("Blitz");
        this.title.position(displayWidth/2,20);

        this.input.position(displayWidth/2-50,displayHeight/2-80);

        this.button.position(displayWidth/2,displayHeight/2);

        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();

            player.name=this.input.value();
            playerCount+=1;
            player.index=playerCount;

            player.update();
            player.updateCount(playerCount);

            this.greeting.html("Hey "+player.name+" waiting for players");
            this.greeting.position(displayWidth/2,displayHeight/2);
        }); 
    }
}