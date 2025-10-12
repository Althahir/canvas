// import { solImg } from "./background";
// import { kokiri } from "./object";

const heartFull = new Image();
heartFull.src = './assets/vie1.PNG';

const heartEmpty = new Image();
heartEmpty.src = './assets/vie0.PNG';

export const rubisImage = new Image();
rubisImage.src = './assets/rubis.png';
export const salamBackImg = new Image();
salamBackImg.src = './assets/salam_back.png';
export const salamFontImg = new Image();
salamFontImg.src = './assets/salam_font.png';
export const triforceImg = new Image();
triforceImg.src = './assets/logo.png';


export const downeauImg = new Image();
downeauImg.src = './assets/down_eau.png';
export const upeauImg = new Image();
upeauImg.src = './assets/up_eau.png';
export const lefteauImg = new Image();
lefteauImg.src = './assets/left_eau.png';
export const righteauImg = new Image();
righteauImg.src = './assets/right_eau.png';
export const personnageImg = new Image();
personnageImg.src = './assets/personnage.png';

export const player = {
  x: 400,
  y: 480,
  w :59,
  h:49,
  life:3,
  max_life:3,
  eau:0,
  money:0,
  speed: 4,
  direction: "down",    // "up", "down", "left", "right"
  frame: 0,             // numéro de l’image dans l’animation
  frameDelay: 10,       // vitesse d’animation (plus petit = plus rapide)
  frameCount: 0, 
  epee:0, 
  bouclier:0, 
  kokiri:1,
  goron:1,
  zora:1,
  triforce:0,    // compteur interne
  sprites: {
    up: [new Image(), new Image(), new Image()],
    down: [new Image(), new Image(), new Image()],
    left: [new Image(), new Image(), new Image()],
    right: [new Image(), new Image(), new Image()],
  }
};
export const personnage={
    x:1480,
    y:680,
    w:59,
    h:49
}

export const salam={
x:920,
y:780,
w:40,
h:40,
direction:"down"

}

export function drawDownEau(ctx, x,y){
   ctx.save(); // 🔒 on garde le contexte
    if (downeauImg.complete){
        ctx.drawImage(downeauImg,x,y);
    }
    else{
        downeauImg.onload=()=>{
            ctx.drawImage(downeauImg,x,y)
        }
    }
     ctx.restore(); // 🔒 on garde le contexte
}
export function drawUpEau(ctx, x,y){
   ctx.save(); // 🔒 on garde le contexte
    if (upeauImg.complete){
        ctx.drawImage(upeauImg,x,y);
    }
    else{
        upeauImg.onload=()=>{
            ctx.drawImage(upeauImg,x,y)
        }
    }
     ctx.restore(); // 🔒 on garde le contexte
}
export function drawLeftEau(ctx, x,y){
   ctx.save(); // 🔒 on garde le contexte
    if (lefteauImg.complete){
        ctx.drawImage(lefteauImg,x,y);
    }
    else{
        lefteauImg.onload=()=>{
            ctx.drawImage(lefteauImg,x,y)
        }
    }
     ctx.restore(); // 🔒 on garde le contexte
}
export function drawRightEau(ctx, x,y){
   ctx.save(); // 🔒 on garde le contexte
    if (righteauImg.complete){
        ctx.drawImage(righteauImg,x,y);
    }
    else{
        righteauImg.onload=()=>{
            ctx.drawImage(righteauImg,x,y)
        }
    }
     ctx.restore(); // 🔒 on garde le contexte
}
// Dans './js/perso.js' ou le fichier qui contient la définition de 'player'

// Charger les images du joueur sans bouclier par défaut (initialisation)
export function loadPlayerSprites() {
    
    // 1. PRIORITÉ MAX : EST-IL DANS L'EAU ? 
    if (player.eau === 1) {
        // Charge les images DANS L'EAU (Ceci remplace tous les autres états visuels)
        
        // UP
        player.sprites.up[0].src = "./assets/up_eau.png"; // <-- CORRIGÉ
        player.sprites.up[1].src = "./assets/up_eau.png"; // <-- CORRIGÉ
        player.sprites.up[2].src = "./assets/up_eau.png"; // <-- CORRIGÉ

        // DOWN
        player.sprites.down[0].src = "./assets/down_eau.png"; // <-- CORRIGÉ (selon votre down_eau.png)
        player.sprites.down[1].src = "./assets/down_eau.png"; // <-- CORRIGÉ
        player.sprites.down[2].src = "./assets/down_eau.png"; // <-- CORRIGÉ

        // LEFT
        player.sprites.left[0].src = "./assets/left_eau.png"; // <-- CORRIGÉ
        player.sprites.left[1].src = "./assets/left_eau.png"; // <-- CORRIGÉ
        player.sprites.left[2].src = "./assets/left_eau.png"; // <-- CORRIGÉ

        // RIGHT
        player.sprites.right[0].src = "./assets/right_eau.png"; // <-- CORRIGÉ (selon votre right_eau.png)
        player.sprites.right[1].src = "./assets/right_eau.png"; // <-- CORRIGÉ
        player.sprites.right[2].src = "./assets/right_eau.png"; // <-- CORRIGÉ
        
    // 2. Sinon, quelle est l'équipement ? Vérifie d'abord le bouclier
    } else if (player.bouclier === 1) {
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
        
    // 3. Sinon (player.eau est 0 ET player.bouclier est 0)
    } else { // On utilise un simple 'else' car il couvre tous les cas restants
        // Charge les images sans bouclier (Normal)
        
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
export function drawSalam(ctx,salam){
    if(salam.direction=="up"){
        ctx.drawImage(salamBackImg,salam.x,salam.y);
    }
    else{
         ctx.drawImage(salamFontImg,salam.x,salam.y);
    }
}
export function drawPersonnage(ctx,x,y){
    if(personnageImg.complete){
        ctx.drawImage(personnageImg,x,y);
    }
    else{
        personnageImg.onload=()=>{
            ctx.drawImage(personnageImg,x,y);
        }
    }
    
}

export function drawHearts(ctx, life, max) {
//   const total = 3; // nombre total de cœurs
  const size = 55; // taille (pixels)
  const spacing = 10; // espacement entre cœurs

  const startX = 50;
  const startY = 50;

  for (let i = 0; i < max; i++) {
    const img = i < life ? heartFull : heartEmpty;
    ctx.drawImage(img, startX + i * (size + spacing), startY, size, size);
  }
}
// On passe l'objet Image déjà chargé
export function drawMoney(ctx, rubisImage, money, x, y) {
  const size = 55;

  // Dessiner l'image
  ctx.drawImage(rubisImage, x, y, size, size);

  // Dessiner le texte
  ctx.font = '55px "Pixelify Sans"';
  ctx.fillStyle = 'white';
  
  const textX = x + size + 10;
  const textY = y + size - 15;
  
  ctx.fillText(money, textX, textY);
}
export function drawTriforce(ctx){
        ctx.drawImage(triforceImg,965,580);
}