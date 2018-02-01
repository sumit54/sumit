function preload() {
 mySound = loadSound('assets/doorbell.mp3');
}

function setup() {
  mySound.setVolume(0.1);
  mySound.play();
}