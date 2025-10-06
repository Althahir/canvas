
const heartFull = new Image();
heartFull.src = './assets/vie1.PNG';

const heartEmpty = new Image();
heartEmpty.src = './assets/vie0.PNG';

export function drawHearts(ctx, life) {
  const total = 3; // nombre total de cœurs
  const size = 55; // taille (pixels)
  const spacing = 10; // espacement entre cœurs

  const startX = 50;
  const startY = 50;

  for (let i = 0; i < total; i++) {
    const img = i < life ? heartFull : heartEmpty;
    ctx.drawImage(img, startX + i * (size + spacing), startY, size, size);
  }
}

export const player = {
  x: 400,
  y: 480,
  w :59,
  h:59,
  life:4,
  speed: 4,
  direction: "down",    // "up", "down", "left", "right"
  frame: 0,             // numéro de l’image dans l’animation
  frameDelay: 10,       // vitesse d’animation (plus petit = plus rapide)
  frameCount: 0, 
  epee:0,       // compteur interne
  sprites: {
    up: [new Image(), new Image(), new Image()],
    down: [new Image(), new Image(), new Image()],
    left: [new Image(), new Image(), new Image()],
    right: [new Image(), new Image(), new Image()],
  }
};

// Charger les images
player.sprites.up[0].src = "./assets/up1.png";
player.sprites.up[1].src = "./assets/up2.png";
player.sprites.up[2].src = "./assets/up3.png";

player.sprites.down[0].src = "./assets/perso.png";
player.sprites.down[1].src = "./assets/down2.png";
player.sprites.down[2].src = "./assets/down3.png";

player.sprites.left[0].src = "./assets/left1.png";
player.sprites.left[1].src = "./assets/left2.png";
player.sprites.left[2].src = "./assets/left3.png";

player.sprites.right[0].src = "./assets/right1.png";
player.sprites.right[1].src = "./assets/right2.png";
player.sprites.right[2].src = "./assets/right3.png";

export function drawPerso(ctx, player) {
  const img = player.sprites[player.direction][player.frame];
  ctx.drawImage(img, player.x, player.y);
}

