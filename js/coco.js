let video;
let detector;
let detections = [];

function preload(){
  let modelName = 'cocossd'
  console.log(`Loading model: ${modelName}`)
  detector = ml5.objectDetector(modelName);
  console.log("Model loaded !!")
}

function gotResults(error, results){
  if (error) {
    console.log(error);
  } else {
    detections = results;
  }
  detector.detect(video, gotResults);
}

function setup(){
  createCanvas(640, 480);
  var constraints = {
    audio: false,
    video: {
      facingMode: {
        exact: "environment"
      }
    }    
    // video: {
    //   facingMode: "user"
    // } 
  };
  video = createCapture(constraints);
  video.size(640, 480);
  video.hide()

  detector.detect(video, gotResults);
}

function draw(){
  image(video, 0, 0);
  for(const obj of detections){
    stroke(0, 255,0);
    strokeWeight(4);
    noFill();
    rect(obj.x, obj.y, obj.width, obj.height);
    noStroke();
    fill(0);
    textSize(24)
    text(obj.label, obj.x + 10, obj.y + 34 )
  }
}