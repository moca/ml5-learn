let mobilenet;
let classifier;
let video;
let label;
let button;

function modelReady(){
  console.log("Classifier is loaded !");
  // mobilenet.classify(gotResults);
}

function videoReady(){
  console.log("video is ready!");
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
  mobilenet = ml5.featureExtractor('mobilenet', modelReady);
  classifier = mobilenet.classification(video, videoReady)
  button = createButton('ukulele');
  button.mousePressed( function() {
    // classifier.addImage()
  });
}

function draw() {
  background(0);
  image(video, 0, 0);

  fill(255);
  textSize(32);
  text(label, 10, height - 40);
}
