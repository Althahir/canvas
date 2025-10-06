// js/house.js
import { player } from './perso.js';

// On crée une image JS
const maisonImg = new Image();
maisonImg.src = './assets/maison.png'; // à adapter si elle est dans un sous-dossier

const porteImg = new Image();
porteImg.src = './assets/porte.png'; // image à fournir (voir remarque ci-dessous)
const plantImg = new Image();
plantImg.src = './assets/plante.png'; // image à fournir (voir remarque ci-dessous)
const swordImg = new Image();
swordImg.src = './assets/sword.png'; // image à fournir (voir remarque ci-dessous)
const treeImg = new Image();
treeImg.src = './assets/tree.png'; // image à fournir (voir remarque ci-dessous)
// export let attackAngle

export const sword={
    x:30,
    y:45,
    h:120,//h:player.h,
    w:player.w,
    attackAngle:-60
}
export const house = {
  x: 320,   // même position que ton drawHouse
  y: 280,
  w: 216,   // largeur de la maison (ajuste selon ton image)
  h: 200
};
export const tree = {
  x: 550,   // même position que ton drawHouse
  y: 280,
  w: 144,   // largeur de la maison (ajuste selon ton image)
  h: 173
};
export const plant={
    x:570,
    y:800,
    w:45,
    h:43,
}

export const plant1={
    x:610,
    y:800,
    w:45,
    h:43,
}
export const plant2={
    x:650,
    y:800,
    w:45,
    h:43,
}
export const plant3={
    x:690,
    y:800,
    w:45,
    h:43,
}
export const rock = {
    x:370,
    y:951,
    w:135,
    h:85
  }

// fonction de collision
export function isColliding(a, b) {
  return (
    a.x < b.x + b.w &&
    a.x + a.w > b.x &&
    a.y < b.y + b.h &&
    a.y + a.h > b.y
  );
}


// Fonction d'affichage
export function drawHouse(ctx, x=house.x, y=house.y) {
  // Si les 2 images sont chargées, on les dessine
  if (maisonImg.complete && porteImg.complete) {
    ctx.drawImage(maisonImg, x, y);
    ctx.drawImage(porteImg, x, y); // ajuster les coords selon ta porte
  } else {
    // Attendre que les images soient prêtes avant de dessiner
    maisonImg.onload = () => {
      ctx.drawImage(maisonImg, x, y);
      if (porteImg.complete) {
        ctx.drawImage(porteImg, x, y);
      }
    };
    porteImg.onload = () => {
      if (maisonImg.complete) {
        ctx.drawImage(maisonImg, x, y);
        ctx.drawImage(porteImg, x, y);
      }

    };
  }


}
export function drawPlant(ctx, x,y){
    if (plantImg.complete){
        ctx.drawImage(plantImg,x,y);
    }
    else{
        plantImg.onload=()=>{
            ctx.drawImage(plantImg,x,y)
        }
    }
}
export function drawTree(ctx, x,y){
    if (treeImg.complete){
        ctx.drawImage(treeImg,x,y);
    }
    else{
        treeImg.onload=()=>{
            ctx.drawImage(treeImg,x,y)
        }
    }
}
export function drawSword(ctx) {
//   if (!swordVisibility) return;

  let angle = 0;
  let offsetX = 0;
  let offsetY = 0;

  switch (player.direction) {
    case "up":
      angle = 20;
      offsetX = 0;
      offsetY = -25;
      break;
    case "down":
      angle = 200;
      offsetX = 8;
      offsetY = -40;
      break;
    case "left":
      angle = -90;
      offsetX = -10;
      offsetY = -40;
      break;
    case "right":
      angle = 90;
      offsetX = 10;
      offsetY = -25;
      break;
  }
  angle += sword.attackAngle;
  // Position réelle de l'épée (utile pour collisions)
  sword.x = player.x + offsetX;
  sword.y = player.y + offsetY;

  // Dessin visuel (rotation autour du centre du joueur)
  const centerX = player.x + player.w / 2;
  const centerY = player.y + player.h / 2;

  ctx.save();
  ctx.translate(centerX, centerY);
  ctx.rotate((angle * Math.PI) / 180);

  if (swordImg.complete) {
    ctx.drawImage(
  swordImg,
  -swordImg.width / 2 + offsetX,
  -swordImg.height / 2 + offsetY
);

  } else {
    swordImg.onload = () => {
      ctx.drawImage(
  swordImg,
  -swordImg.width / 2 + offsetX,
  -swordImg.height / 2 + offsetY
);

    };
  }

  ctx.restore();

  

}



