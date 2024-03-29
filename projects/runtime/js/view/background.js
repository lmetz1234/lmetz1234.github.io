var background = function (window) {
    'use strict';
    
    window.opspark = window.opspark || {};
    var draw = window.opspark.draw;
    var createjs = window.createjs;
    
    /*
     * Create a background view for our game application
     */
    window.opspark.makeBackground = function(app,ground) {
        if(!app) {
            throw new Error("Invaid app argument");
        }
        if(!ground || typeof(ground.y) == 'undefined') {
            throw new Error("Invalid ground argument");
        }

        // container which will be returned
        var background;
        var tree; 
        var floats = []; 
    
        // ANIMATION VARIABLES HERE:
        
        
        // add objects for display inb ackground
        // called at the start of game and whenever the page is resized
        function render() {
            // useful variables
            var canvasWidth = app.canvas.width;
            var canvasHeight = app.canvas.height;
            var groundY = ground.y;

            background.removeAllChildren();

            // this fills the background with a obnoxious yellow
            // you should modify this to suit your game
            var backgroundFill = draw.rect(canvasWidth, canvasHeight,'skyBlue');
            background.addChild(backgroundFill);
            
            
            
          
            // TODO: 3 - Add a moon and starfield
            // var cloud = draw.bitmap('img/cloud.png');
            // cloud.x = 200;
            // cloud.y = 75;
            // cloud.scaleX = .5;
            // cloud.scaleY = .5;
            // background.addChild(cloud);
            
            
            var cloud;
            for (var i = 0; i < 10; i++){
                cloud = draw.bitmap('img/cloud.png');
                cloud.x = canvasWidth * Math.random();
                cloud.y = 30 * Math.random();
                cloud.scaleX = .5;
                cloud.scaleY = .5;
                background.addChild(cloud);
            } 
                

            // TODO: 5 - Add buildings!     Q: This is before TODO 4 for a reason! Why?
            
            var floatHeight = 300;
            var float;
            for (var i = 0; i < 5; i++){
                float = draw.bitmap('img/mardi-gras-float.png');
                float.x = 500*i;
                float.y = 200;
                float.scaleX = .35;
                float.scaleY = .35;
                background.addChild(float);
                floats.push(float);
            }
            
            
            
            
            
            // TODO 4: Part 1 - Add a tree
             
            tree = draw.bitmap('img/tree-with-beads.png');
            tree.x = 300;
            tree.y = 200;
            tree.scaleX = .35; 
            tree.scaleY = .35;
            background.addChild(tree);
            
            // tree = draw.bitmap('img/tree-with-beads.png');
            // tree.x = 900;
            // tree.y = 200;
            // tree.scaleX = .35; 
            // tree.scaleY = .35;
            // background.addChild(tree);
            
            tree = draw.bitmap('img/tree-with-beads.png');
            tree.x = 1500;
            tree.y = 200;
            tree.scaleX = .35; 
            tree.scaleY = .35;
            background.addChild(tree);
            
            
            
            
        }
        
        // Perform background animation
        // called on each timer "tick" - 60 times per second
        function update() {
            // useful variables
            var canvasWidth = app.canvas.width;
            var canvasHeight = app.canvas.height;
            var groundY = ground.y;
            
            // TODO 4: Part 2 - Move the tree!
            tree.x = tree.x + 0; 
            
            
            // TODO 5: Part 2 - Parallax
            for(var i = 0; i < floats.length; i++){
                if(floats[i].x< -600){
                    floats[i].x = canvasWidth;
                }
                floats[i].x = floats[i].x - 1;
            }
            
            
            

        }

        background = new createjs.Container();
        background.resize = render;
        background.update = update;
        
        app.addResizeable(background);
        app.addUpdateable(background);
        
        render();
        return background;
    };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = background;
}
