let mobilenet;
let video;
let label;

function clsReady(){
  console.log("Classifier is loaded !");
  mobilenet.classify(gotResults);
}

function gotResults(error, results){
  if (error){
    console.log(error);
  } else {
    // console.log(results);
    label = results[0].label
    mobilenet.classify(gotResults);
  }
}

function setup() {
  createCanvas(640, 550);
  video = createCapture(VIDEO);
  video.hide();
  background(0);
  let options = {
    // version: 'darknet-tiny'
  }
  mobilenet = ml5.imageClassifier('mobilenet', video, options, clsReady);
}

function draw() {
  background(0);
  image(video, 0, 0);

  fill(255);
  textSize(32);
  text(label, 10, height - 40);
}
