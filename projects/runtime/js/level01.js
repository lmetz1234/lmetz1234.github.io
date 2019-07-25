var level01 = function (window) {

    window.opspark = window.opspark || {};

    var draw = window.opspark.draw;
    var createjs = window.createjs;

    window.opspark.runLevelInGame = function(game) {
        // some useful constants 
        var groundY = game.groundY;

        
        
        // this data will allow us to define all of the
        // behavior of our game
        var levelData = {
            name: "Robot Romp",
            number: 1, 
            speed: -3,
            gameItems: [
                {type: 'mardiGrasCup',x:400,y:groundY},
                {type: 'mardiGrasCup',x:800,y:330},
                {type: 'mardiGrasCup',x:1200,y:groundY},
                {type: 'mardiGrasCup',x:1600,y:330},
                {type: 'mardiGrasCup',x:2000,y:groundY},
                {type: 'mardiGrasCup',x:2400,y:330},
                {type: 'mardiGrasCup',x:2800,y:groundY},
                {type: 'mardiGrasCup',x:3200,y:330},
                {type: 'mardiGrasCup',x:3600,y:groundY},
                {type: 'mardiGrasCup',x:4000,y:330},
                {type: 'mardiGrasCup',x:4400,y:groundY},
                {type: 'mardiGrasCup',x:4800,y:330},
                
                
                {type: 'mardiGras', x:1000, y:groundY},
                {type: 'mardiGras', x:1400, y:groundY},
                {type: 'mardiGras', x:2200, y:groundY},
                {type: 'mardiGras', x:3000, y:groundY},
                {type: 'mardiGras', x:3800, y:groundY},
                {type: 'mardiGras', x:4600, y:groundY},
                
                
                
                
                
                {type: 'bead', x:2000, y:300},
                {type: 'bead', x:1500, y:325},
                {type: 'bead', x:2500, y:300},
                {type: 'bead', x:3100, y:325},
                {type: 'bead', x:4250, y:300},
                {type: 'bead', x:4500, y:325},
                {type: 'bead', x:4750, y:300},
                
            ]
        };
        
        
        
        
        
        
        
        window.levelData = levelData;
        // set this to true or false depending on if you want to see hitzones
        game.setDebugMode(false);

        // BEGIN EDITING YOUR CODE HERE
        // var hitZoneSize = 25;
        // var damageFromObstacle = 10; 
        // var myObstacle = game.createObstacle(hitZoneSize,damageFromObstacle);
        
        // myObstacle.x = 400;
        // myObstacle.y = 375;
        
        // game.addGameItem(myObstacle);
        
        // var obstacleImage = draw.bitmap('img/mardi-gras-cup.png');
        // myObstacle.addChild(obstacleImage);
        
        
        // obstacleImage.x = -25;
        // obstacleImage.y = -25;
        // obstacleImage.scaleX = .05;
        // obstacleImage.scaleY = .05;
        
             
        
              
            
        
            function createMardiGrasCup(x,y){
            var hitZoneSize = 25;
            var damageFromObstacle = 10; 
            var myObstacle = game.createObstacle(hitZoneSize,damageFromObstacle);
            
            myObstacle.x = x;
            myObstacle.y = y;
        
            game.addGameItem(myObstacle);
            
            var obstacleImage = draw.bitmap('img/mardi-gras-cup.png');
            myObstacle.addChild(obstacleImage);
            
            obstacleImage.x = -25;
            obstacleImage.y = -25;
            obstacleImage.scaleX = .05;
            obstacleImage.scaleY = .05;
        }
        
            
            
            
            
         
         function createEnemy(x,y){
         
         var enemy = game.createGameItem('enemy',50);
         var mardiGras = draw.bitmap('img/mardi-gras-clipart-person-2.png');
         mardiGras.x = -621/2*.15;
         mardiGras.y = -1297/2*.15;
         mardiGras.scaleX = .15;
         mardiGras.scaleY = .15;
         enemy.addChild(mardiGras);
         
         enemy.x = x;
         enemy.y = y;
         enemy.velocityX = -1;
         enemy.rotationalVelocity = 3;
         
         game.addGameItem(enemy);
         
         
         
         enemy.onPlayerCollision = function(){
             console.log('The enemy has hit Halle');
             game.changeIntegrity(-10);
             enemy.fadeOut();
         };
        
        enemy.onProjectileCollision = function (){
            console.log('Halle has hit the enemy');
            game.increaseScore(100);
            enemy.shrink();
        };
        
         }  
        
        function createReward(x,y){
            var reward = game.createGameItem('reward', 50);
            var bead = draw.bitmap('img/mardigrasbead.png');
            bead.x = -25;
            bead.y = -25;
            bead.scaleX = .50;
            bead.scaleY = .50;
            reward.addChild(bead);
            
            reward.x = x;
            reward.y = y;
            reward.velocityX = -1;
            reward.rotationalVelocity = 1;
            
            
            game.addGameItem(reward);
            
        reward.onPlayerCollision = function (){
            console.log('Halle has collected reward');
            game.changeIntegrity(20);
            game.increaseScore(50);
            reward.shrink();
        };
            
            
            
        };
        
        for(var i = 0; i < levelData.gameItems.length; i++){
                var gameItem = levelData.gameItems[i];
                if(gameItem.type === 'mardiGrasCup'){
                    createMardiGrasCup(gameItem.x, gameItem.y);
                }
                
                if(gameItem.type === 'mardiGras'){
                    createEnemy(gameItem.x, gameItem.y);
                }
                
                if(gameItem.type === "bead"){
                    createReward(gameItem.x, gameItem.y);
                }
                
                
                
                
            };
        
    };
    
        

        
};

    

        

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = level01;
}