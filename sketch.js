let img;
let detector;

function preload(){
  img = loadImage('img/dogncat_small.jpg');
  detector = ml5.objectDetector('cocossd');
}

function gotResults(error, results){
  if (error) {
    console.log(error);
  } else {
    for(const obj of results){
      console.log(obj);
      stroke(0, 255,0);
      strokeWeight(4);
      noFill();
      rect(obj.x, obj.y, obj.width, obj.height);
      console.log(obj.x, obj.y, obj.width, obj.height);
      noStroke();
      fill(0);
      textSize(24)
      text(obj.label, obj.x + 10, obj.y + 34 )
    }
  }
}

function setup(){
  createCanvas(640, 480);
  image(img, 0,0, width, height);
  detector.detect(img, gotResults);
}
