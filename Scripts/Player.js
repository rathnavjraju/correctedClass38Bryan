
class Player{
    constructor(){
        this.index=null;
        this.distance=0;
        this.name=null; //initialising null value
    }

    static getPlayerInfo(){
        var playerInfoRef = database.ref('players');
        playerInfoRef.on("value",(data)=>{
            allPlayers=data.val();
        });
    }

    

    getCount(){
        var playerRef=database.ref('playerCount');
        playerRef.on("value",(data)=>{ //using arrow to attach class
            playerCount=data.val();
        });
    }

    updateCount(count){
        database.ref('/').update({
            playerCount:count
        });
    }

    update(){
        //console.log(this.index);
        var playerIndex="players/player"+this.index;
        database.ref(playerIndex).set({
            name:this.name,
            distance:this.distance
        });
    }
}