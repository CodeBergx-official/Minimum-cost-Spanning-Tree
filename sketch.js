//Minimun Spanning Tree (Prim's algorithm)
let vertices = [];
//Create an array

function setup() {
  createCanvas(windowWidth, windowHeight);
  for(let i=0;i<10;i++){
    let v = createVector(random(width), random(height));
  vertices.push(v);
  }
  //Fill the array(default)
}
function mousePressed() {
  let v = createVector(mouseX, mouseY);
  vertices.push(v);
  //Fill the array(interactive)
}

function draw() {
  background(0);
  tint(255,100)
  image(img,0,0,width,height)
  for (let i = 0; i < vertices.length; i++) {
    fill(255);
    ellipse(vertices[i].x, vertices[i].y, 10);
  }
  //draw dots for every element in the array
  let unreached = [];
  let reached = [];
  //Create 2 arrays to distinguish reached and unreached vertices

  for (let i = 0; i < vertices.length; i++) {
    unreached.push(vertices[i]);
  }
  //Intially all veritces are unreached
  reached.push(unreached[0]);
  unreached.splice(0, 1);
  //Initiate by adding 1 random element from unreached to reached and removing it from unreached
  while (unreached.length > 0) {
    let marker = Infinity;
    let rIndex;
    let uIndex;
    //Important variables(self-explanatory)
    for (let i = 0; i < reached.length; i++) {
      for (let j = 0; j < unreached.length; j++) {
        let v1 = reached[i];
        let v2 = unreached[j];
        let d = dist(v1.x, v1.y, v2.x, v2.y);
        //Compute d
        if (d < marker) {
          marker = d;
          rIndex = i;
          uIndex = j;
        }
        //Compare d with the marker and set a new marker
      }
    }
    //Using nested for lop to check, compare and hence find the shortest distance from a reached vertice to an unreached vertice( a.k.a the marker)
    stroke(255);
    line(
      reached[rIndex].x,
      reached[rIndex].y,
      unreached[uIndex].x,
      unreached[uIndex].y
    );
    //Draw a line to highlight the marker
    reached.push(unreached[uIndex]);
    unreached.splice(uIndex, 1);
    //Add the new found vertice to the reached array and remove it from the unreached array
  }
  //repeat this loop until there's nothing left in the unreached array
}
