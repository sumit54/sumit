// Examples use USGS Earthquake API:
//   https://earthquake.usgs.gov/fdsnws/event/1/#methods
var earthquakes;
var news;
var timer = 0;
var p;
function preload() {
  // Get the most recent earthquake in the database
  
  
 
}

function setup() { 
 createCanvas(windowWidth ,100);

} 

var counter=0;

 function draw() { 
  background(-1);
  textAlign(CENTER, CENTER);
  textSize(70);
  //text(timer, width/2, height/2);
  fill("white");
  text(hour()+':'+minute()+':'+second(), width/2, height/2);
 

  // Get the magnitude and name of the earthquake out of the loaded JSON
  
  
} 

 //setInterval(newsOnline,1000);
