function setup(){
    for (var i = 0 ; i < 10; i ++){
       var p = createA('#', 'Fake');
        var x = floor (random(windowWidth));
        var y = floor (random(windowHeight));
        p.position(x,y);
        p.class('Fake');
        p.mousePressed(becomeTrue);
    }

    for (var i = 0; i < 10; i ++){
        p = createA('#', 'True');
        x = floor(random(windowWidth));
        y = floor(random(windowHeight));
        p. position(x,y);
        p.class('True');
        p.mousePressed(becomeFake);
    }

}

function becomeFake() {
    this.removeClass('True');
    this.class('Fake');
  }

  function becomeTrue() {
    this.removeClass('Fake');
    this.class('True');
  }



function draw(){

}