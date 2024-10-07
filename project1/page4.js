var myRec = new p5.SpeechRec('en-US'); // new P5.SpeechRec object
		myRec.continuous = true; // do continuous recognition
		myRec.interimResults = false; // allow partial recognition (faster, less accurate)
        myRec.resultString = ""

		let result='';
        let button;
     


        function preload() {


            fire = loadImage('Pictures/fire.gif');
            chef = loadImage('Pictures/chef.gif');
			pasta = loadImage('Pictures/pasta.gif')
          
          }

		function setup() {
			// graphics stuff:
			createCanvas(windowWidth, windowHeight);
			background(00,0,0);
        
			fill(255, 255, 255);
			x = width / 2;
			y = height / 2;
			dx = 0;
			dy = 0;

            
           
             


			// instructions:
			textSize(30);
			textAlign(LEFT);
			textFont('Courier');
			// text("draw: up, down, left, right, clear", 20, 20);

			//myRec.onResult = parseResult; // now in the constructor



            
			myRec.start(); // start engine




		}

		function draw() {

            // text('What is bothering you? What is on your mind?', 70, 90);
			// ellipse(x, y, 5, 5);
			// x+=dx;
			// y+=dy;
			// if(x<0) x = width;
			// if(y<0) y = height;
			// if(x>width) x = 0;
			// if(y>height) y = 0;




            // if (mouseIsPressed === true) {
            //     image(thumbs, 0, 600);
            //     // tint(0, 153, 600, 126);
            //   } 

            //   if (mouseIsPressed === true) {
            //     image(thumbs, 200, 600);
            //     // tint(100, 300, 24, 500);
            //   } 
          
			myRec.onResult = drawText
            console.log(myRec.resultString)
            let tempResult;
            tempResult = myRec.resultString.includes("stove")
            console.log(tempResult)
            if (tempResult == true){
                image(fire, 1000, 200);
				text('no worries! I have burned boiled eggs', 1000, 100, width, height)
            }


            tempResult = myRec.resultString.includes("pasta")
            console.log(tempResult)
            if (tempResult == true){
                image(pasta, 1000, 200);
				text('The pastabilities are endless!', 1000, 100, width, height)
            }

			tempResult = myRec.resultString.includes("Chef")
            console.log(tempResult)
            if (tempResult == true){
                image(chef, 900, 200);
				text('My kitchen is your kitchen', 1000, 100, width, height)
            }
            
		}

        function SpeechRec(){

        }

		function drawText() {
			result+=myRec.resultString;
			result += ' ';
			text(result, 300, 100, width, height)
			console.log(result)
			
		}


        function doubleClicked() {
            clear();
            background(000);
            describe(
              'canvas is cleared, small white ellipse is drawn at mouse X and mouse Y'
            );
          }
          
