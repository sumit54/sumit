// Examples use USGS Earthquake API:
//   https://earthquake.usgs.gov/fdsnws/event/1/#methods
var earthquakes;
var news;
var timer = 0;
var p;
function preload() {
  // Get the most recent earthquake in the database
  var url =
   'https://samples.openweathermap.org/data/2.5/weather?q=mumbai&appid=b6907d289e10d714a6e88b30761fae22';
  earthquakes = loadJSON(url);
  
 
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
  var earthquakeMag = earthquakes.main.temp;
  
  //var earthquakeName = earthquakes.features[0].properties.place;
  //ellipse(width / 2, height / 2, earthquakeMag * 10, earthquakeMag * 10);
 textAlign(RIGHT);
  text(earthquakeMag+'°C',  windowWidth, height/2);
  textSize(14);
  stroke(0);
  
} 

 //setInterval(newsOnline,1000);
