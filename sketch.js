// Cloud Variables

var cloudOne = 200;
var cloudTwo = 150;
var cloudThree = 300;
var cloudFour = 100;
var cloudFive = 500;
var cloudSix = 550;
var cloudSeven = 50;
var CloudWidth = 200;
var CloudHeight = 50;
var s = 10;

function setup() {
    createCanvas(500,500);
}

function draw() {
    
    //sunset

    
    
    //sun
    noStroke()
    background(0,191,255);
    fill('yellow');
    ellipse(250, 250, 200, 200);
    
    //clouds
	fill('white');
    ellipse(cloudOne, 100+s, CloudWidth, CloudHeight);
    ellipse(cloudTwo, 15+s, CloudWidth, CloudHeight);
    ellipse(cloudThree, 400-s, CloudWidth, CloudHeight);
    ellipse(cloudFour, 370+s, CloudWidth, CloudHeight);
    ellipse(cloudFive, 50+s, CloudWidth, CloudHeight);
    ellipse(cloudSix, 450-s, CloudWidth, CloudHeight);
    ellipse(cloudSeven, 480-s, CloudWidth, CloudHeight);

	

    //Cloud Moving Repeat
    cloudOne++;
    cloudTwo++;
    cloudThree++;
    cloudFour++;
    cloudFive++;
    cloudSix++;
    cloudSeven++;
    
	if (cloudOne > 500) { 
		cloudOne = 0;
	}
	
		if (cloudTwo > 500) { 
		cloudTwo = 0;
	}
	
		if (cloudThree > 500) { 
		cloudThree = 0;
	}
	
		if (cloudFour > 500) { 
		cloudFour = 0;
	}
	
		if (cloudFive > 500) { 
		cloudFive = 0;
	}

		if (cloudSix > 500) { 
		cloudSix = 0;
	}

		if (cloudSeven > 500) { 
		cloudSeven = 0;
	}
    
}

function mousePressed() {
	s += 10;
}
