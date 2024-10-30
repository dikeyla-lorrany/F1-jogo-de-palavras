let palavra;

function setup() {
  createCanvas(400, 400);
  palavra = palavraAleatoria();
}

function palavraAleatoria() {
  let palavras = ["Laclerc","Mônaco","Carlos Saints","F1"];
  return random(palavras);
}    
    
  function inicializaCores() {
  background("red");
  fill("black");
  textSize(64)
  textAlign(CENTER, CENTER);
}

function draw() {
  inicializaCores();
  let maximo = width;
  let minimo = 0;
  let quantidade = map(mouseX, 0, width, 1 , palavra.length);
  let parcial = palavra.substring(0, quantidade);
  text(parcial, 200, 200);
  
  /*if(mouseX < 50){
  let palavra = "F";
  text(palavra, 200, 200);
   } else if (mouseX <100) {
     let palavra = "Fe";
    text(palavra, 200, 200);
   } else if (mouseX <150) {
    let palavra = "Fer";
     text(palavra, 200, 200);
   } else if (mouseX <200);
  let palavra = "Ferra";
     text(palavra, 200, 200);
   } else if (mouseX <150);
      let palavra = "Ferrar";
      text(palavra,200, 200);
   } else if (mouseX <200);
  let palavra = "Ferrari"
      text(palavra, 200, 200);
      } */
}