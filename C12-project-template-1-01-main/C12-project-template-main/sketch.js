var path, boy, leftBoundary, rightBoundary;
var pathImg, boyImg;
var i;

function preload() {
  pathImg = LoadImage ("path.png");
  boyImg = LoadAnimation ("Runner-1.png","Runner-2.png");
}

function setup() {

  createCanvas(400, 400);

  //crie um sprite de menino
  //crie um sprite para a pista 
  path = createSprite(200, 200, 20, 20);
  boy = createSprite(200, 200, 20, 20);

  //crie um limite à esquerda
  //crie um limite à direita
  rightBoundary = createSprite(410, 0, 100, 800);
  leftBoundary = createSprite(0, 0, 100, 800);

  //adicione uma animação de corrida para ele
  //adicione uma imagem para a pista
  path.addImage("path" ,pathImg);
  boy.addAnimation("boy" ,boyImg);

  //Faça com que a pista seja um fundo que se move dando a ela velocity Y.
  path.velocityY = 4

  boy.scale = 0.08;
  path.scale = 1.2;

  //defina visibilidade como falsa para o limite à direita
  //defina visibilidade como falsa para o limite à esquerda
  leftBoundary.visible = false;
  rightBoundary.visible = false;

}


function draw() {
  background(0);
  path.velocityY = 4;

  // mover o menino com o mouse usando mouseX
  boy.x = world.mouseY

  
  boy.collide(edges[3]);

  // colidir o menino com os limites invisíveis da esquerda e da direita
  boy.collide(rightBoundary);
  boy.collide(leftBoundary);

  //código para redefinir o fundo
  if (path.y > 400) {
    path.y = height / 2;
  }

  drawSprites();
}
