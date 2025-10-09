
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
  epee:0, 
  bouclier:0,      // compteur interne
  sprites: {
    up: [new Image(), new Image(), new Image()],
    down: [new Image(), new Image(), new Image()],
    left: [new Image(), new Image(), new Image()],
    right: [new Image(), new Image(), new Image()],
  }
};


// Dans './js/perso.js' ou le fichier qui contient la définition de 'player'

// Charger les images du joueur sans bouclier par défaut (initialisation)
export function loadPlayerSprites() {
    if (player.bouclier === 1) {
        // Charge les images avec bouclier
        player.sprites.up[0].src = "./assets/bouclierUpA.png";
        player.sprites.up[1].src = "./assets/bouclierUpB.png";
        player.sprites.up[2].src = "./assets/bouclierUpC.png";
        
        // ... (etc. pour down, left, right)
        player.sprites.down[0].src = "./assets/bouclierDownA.png";
        player.sprites.down[1].src = "./assets/bouclierDownB.png";
        player.sprites.down[2].src = "./assets/bouclierDownC.png";
        
        player.sprites.left[0].src = "./assets/bouclierLeftA.png";
        player.sprites.left[1].src = "./assets/bouclierLeftB.png";
        player.sprites.left[2].src = "./assets/bouclierLeftC.png";
        
        player.sprites.right[0].src = "./assets/bouclierRightA.png";
        player.sprites.right[1].src = "./assets/bouclierRightB.png";
        player.sprites.right[2].src = "./assets/bouclierRightC.png";
        
    } else {
        // Charge les images sans bouclier
        player.sprites.up[0].src = "./assets/upA.png";
        player.sprites.up[1].src = "./assets/upB.png";
        player.sprites.up[2].src = "./assets/upC.png";
        
        // ... (etc. pour down, left, right)
        player.sprites.down[0].src = "./assets/downA.png";
        player.sprites.down[1].src = "./assets/downB.png";
        player.sprites.down[2].src = "./assets/downC.png";
        
        player.sprites.left[0].src = "./assets/leftA.png";
        player.sprites.left[1].src = "./assets/leftB.png";
        player.sprites.left[2].src = "./assets/leftC.png";
        
        player.sprites.right[0].src = "./assets/rightA.png";
        player.sprites.right[1].src = "./assets/rightB.png";
        player.sprites.right[2].src = "./assets/rightC.png";
    }
}

export function drawPerso(ctx, player) {
  const img = player.sprites[player.direction][player.frame];
  ctx.drawImage(img, player.x, player.y);
}

