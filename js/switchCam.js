//Also see https://coderwall.com/p/i817wa/one-line-function-to-detect-mobile-devices-with-javascript
//To detect wether something is a mobile device

//Also check out this guide on making p5js look good on mobile: https://creative-coding.decontextualize.com/mobile/

let video;

function setup() {

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
  createCanvas(640, 480);
  background(100);
  video = createCapture(VIDEO);
  video.size(640, 480);
  video.hide()


}


function draw() {
  image(video, 0, 0); 
}