// Examples use USGS Earthquake API:
//   https://earthquake.usgs.gov/fdsnws/event/1/#methods
var earthquakes;
var news;
var timer = 0;
var p;


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
 

} 

 //setInterval(newsOnline,1000);
