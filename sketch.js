let cor;
let posicaohorizontal; //x
let posicaovertical; //y

let posicaohorizontal2; //x
let posicaovertical2; //y

function setup() {
  createCanvas(400, 400);
  background ("white")
  cor = color (random (0, 255),random (0, 255),random (0, 255) );
  posicaohorizontal = 0;
  posicaovertical = random (height)
  
  posicaohorizontal2=
  posicaovertical2= random (height)
}

function draw() {
  fill (cor)
 circle (posicaohorizontal, posicaovertical, 50)
  
   circle (posicaohorizontal2, posicaovertical2, 50)
  
  posicaohorizontal+= random (0,3)
  posicaovertical+= random (-3,3)
   posicaohorizontal2+= random (0,3)
  posicaovertical2+= random (-3,3)
  
}