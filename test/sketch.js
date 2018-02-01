// Examples use USGS Earthquake API:
//   https://earthquake.usgs.gov/fdsnws/event/1/#methods
var earthquakes;
function preload() {
  // Get the most recent earthquake in the database
  var url =
   'http://api.openweathermap.org/data/2.5/weather?q=mumbai&APPID=7f3e06f2859683c336e51a66c47d18c5&units=metric';
  earthquakes = loadJSON(url);
}

function setup() {
  noLoop();
}

function draw() {
  background(200);
  // Get the magnitude and name of the earthquake out of the loaded JSON
  var earthquakeMag = earthquakes.features[0].properties.mag;
  var earthquakeName = earthquakes.features[0].properties.place;
  ellipse(width / 2, height / 2, earthquakeMag * 10, earthquakeMag * 10);
  textAlign(CENTER);
  text(earthquakeName, 0, height - 30, width, 30);
}