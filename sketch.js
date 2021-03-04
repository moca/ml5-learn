let mobilenet;
let puffin;

function clsReady(){
  console.log("Classifier is loaded !");
  mobilenet.classify(puffin, gotResults);
}

function gotResults(error, results){
  if (error){
    console.log(error);
  } else {
    console.log(results);
    let label = results[0].label
    fill(0);
    textSize(64);
    text(label, 10, height - 100);
    createP(label);
    
  }
}

function imgReady(){
  image(puffin, 0, 0, width, height)
}

function setup() {
  createCanvas(640, 480);
  puffin = createImg('./img/puffin.jpg', imgReady);
  puffin.hide()

  background(0);


  mobilenet = ml5.imageClassifier('MobileNet', clsReady);
}

function draw() {
}
