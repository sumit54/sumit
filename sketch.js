// Examples use USGS Earthquake API:
//   https://earthquake.usgs.gov/fdsnws/event/1/#methods
var earthquakes;
var news;
var timer = 0;
var p;
function preload() {
  // Get the most recent earthquake in the database
  var url =
   'http://api.openweathermap.org/data/2.5/weather?q=mumbai&APPID=7f3e06f2859683c336e51a66c47d18c5&units=metric';
  earthquakes = loadJSON(url);
  var urlnews='https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=6c99432eb9214699a7dba0ba9d83f1e2';
  news=loadJSON(urlnews);
  timer = windowWidth;
 
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
  var newsContaint=news.status;
  //var earthquakeName = earthquakes.features[0].properties.place;
  //ellipse(width / 2, height / 2, earthquakeMag * 10, earthquakeMag * 10);
 textAlign(RIGHT);
  text(earthquakeMag+'°C',  windowWidth, height/2);
  textSize(14);
  stroke(0);
  text(news.articles[counter].title,  timer, height/7);
  //text(timer,  100, height/6);
 //newsOnline();
  //setInterval(newsOnline,1000);
  timer--;
  
  if(timer<0)
  {
    counter++;
    timer=windowWidth;
  }
  else if(counter==5)
  {
    counter=0;
  }
  
} 

 //setInterval(newsOnline,1000);