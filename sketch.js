let img;

let saveButton, clearButton;

function preload() {
    img= loadImage("img/str.jpg");
}

function setup() {
    createCanvas(1300, 997);
    background(img);
    
    
  // Creating the save button for the file
  saveButton = createButton('sačuvaj');
  saveButton.mousePressed(saveFile);

  // Creating the clear screen button
  clearButton = createButton('očisti');
  clearButton.mousePressed(clearScreen);
    
  // Creating the button for Full Screen
  fullscreenButton = createButton('full screen');
  fullscreenButton.mousePressed(screenFull);

}



// Save File Function
function saveFile() {
  save('spomenar.jpg');
    }

// Clear Screen function
function clearScreen() {
  background(img);
}

// Full Screen Function
function screenFull() {
  let fs = fullscreen();
  fullscreen(!fs);
}


function draw() {

  stroke(0);
  if (mouseIsPressed === true) {
    line(mouseX, mouseY, pmouseX, pmouseY);
     }
    
}