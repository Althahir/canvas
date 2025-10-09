// js/house.js
import { player } from './perso.js';

// On crée une image JS
const maisonImg = new Image();
maisonImg.src = './assets/maison.png'; // à adapter si elle est dans un sous-dossier

const porteImg = new Image();
porteImg.src = './assets/porte.png'; // image à fournir (voir remarque ci-dessous)
const piedImg = new Image();
piedImg.src = './assets/piedestal.png'; // image à fournir (voir remarque ci-dessous)
const plantImg = new Image();
plantImg.src = './assets/plante.png'; // image à fournir (voir remarque ci-dessous)
const swordImg = new Image();
swordImg.src = './assets/sword.png'; // image à fournir (voir remarque ci-dessous)
const treeImg = new Image();
treeImg.src = './assets/tree.png'; // image à fournir (voir remarque ci-dessous)
const stormImg = new Image();
stormImg.src = './assets/bouclier.png'; // image à fournir (voir remarque ci-dessous)
const herbeImg = new Image();
herbeImg.src = './assets/herbe.png'; // image à fournir (voir remarque ci-dessous)
const fontaineImg = new Image();
fontaineImg.src = './assets/fontaine.png'; // image à fournir (voir remarque ci-dessous)
const lacImg = new Image();
lacImg.src = './assets/lac.png'; // image à fournir (voir remarque ci-dessous)
// export let attackAngle

export const sword={
    x:30,
    y:45,
    h:120,//h:player.h,
    w:player.w,
    attackAngle:-60
}
export const pied={
  x:680,
  y:480,
  w:62,
  h:54
}
export const house = {
  x: 320,   // même position que ton drawHouse
  y: 280,
  w: 216,   // largeur de la maison (ajuste selon ton image)
  h: 200
};
export const porte = {
  x: 320,   // même position que ton drawHouse
  y: 280,
  w: 216,   // largeur de la maison (ajuste selon ton image)
  h: 200
};
export const tree = {
  x: 550,   
  y: 280,
  w: 144,   
  h: 173
};
export const tree1 = {
  x: 680,   
  y: 280,
  w: 144,   
  h: 173
};
export const tree2 = {
  x: 810,   
  y: 280,
  w: 144,   
  h: 173
};
export const tree3 = {
  x: 940,   
  y: 280,
  w: 144,   
  h: 173
};
export const tree4 = {
  x: 940,   
  y: 410,
  w: 144,   
  h: 173
};
export const tree5 = {
  x: 940,   
  y: 540,
  w: 144,   
  h: 173
};
export const tree6 = {
  x: 940,   
  y: 670,
  w: 144,   
  h: 173
};
export const tree7 = {
  x: 940,   
  y: 800,
  w: 144,   
  h: 173
};
export const tree8 = {
  x: 940,   
  y: 930,
  w: 144,   
  h: 173
};
export const tree9 = {
  x: 940,   
  y: 1070,
  w: 144,   
  h: 173
};
export const tree10 = {
  x: 810,   
  y: 1070,
  w: 144,   
  h: 173
};
export const tree11 = {
  x: 680,   
  y: 1070,
  w: 144,   
  h: 173
};
export const tree12 = {
  x: 550,   
  y: 1070,
  w: 144,   
  h: 173
};
export const tree13 = {
  x: 170,   
  y: 1070,
  w: 144,   
  h: 173
};
export const tree14 = {
  x: 170,
  y: 280,
  w: 144,
  h: 173
};
export const tree15 = {
  x: 170,   
  y: 410,
  w: 144,   
  h: 173
};
export const tree16 = {
  x: 170,   
  y: 540,
  w: 144,   
  h: 173
};
export const tree17 = {
  x: 170,   
  y: 670,
  w: 144,   
  h: 173
};
export const tree18 = {
  x: 170,   
  y: 800,
  w: 144,   
  h: 173
};
export const tree19 = {
  x: 170,   
  y: 930,
  w: 144,   
  h: 173
};

export const plant={
    x:320,
    y:1150,
    w:45,
    h:43,
}
export const plant1={
    x:360,
    y:1150,
    w:45,
    h:43,
}
export const plant2={
    x:400,
    y:1150,
    w:45,
    h:43,
}
export const plant3={
    x:440,
    y:1150,
    w:45,
    h:43,
}
export const plant4={
    x:480,
    y:1150,
    w:45,
    h:43,
}
export const plant5={
    x:520,
    y:1150,
    w:45,
    h:43,
}
export const rock = {
    x:4,
    y:570,
    w:135,
    h:85
  }
export const fontaine = {
    x:634,
    y:650,
    w:121,
    h:119
  }
export const lac = {
    x:620,
    y:725,
    w:145,
    h:145
  }
export const storm={
    x:70,
    y:740,
    w:58,
    h:74,
}
export const herbe={
    x:570,
    y:490,
    w:40,
    h:40,
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
  if (maisonImg.complete) {
    ctx.drawImage(maisonImg, x, y); // ajuster les coords selon ta porte
  } else {
    // Attendre que les images soient prêtes avant de dessiner
    maisonImg.onload = () => {
      ctx.drawImage(maisonImg, x, y);
    };

    };
}
export function drawPorte(ctx,x=house.x,y=house.y){
    if(porteImg.complete){
      ctx.drawImage(porteImg, x, y);
    }else {
    // Attendre que les images soient prêtes avant de dessiner
    porteImg.onload = () => {
      ctx.drawImage(porteImg, x, y);
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

export function drawStorm(ctx, x,y){
    if (stormImg.complete){
        ctx.drawImage(stormImg,x,y);
    }
    else{
        stormImg.onload=()=>{
            ctx.drawImage(stormImg,x,y)
        }
    }
}
export function drawHerbe(ctx, x,y){
    if (herbeImg.complete){
        ctx.drawImage(herbeImg,x,y);
    }
    else{
        herbeImg.onload=()=>{
            ctx.drawImage(herbeImg,x,y)
        }
    }
}
export function drawFontaine(ctx, x,y){
    if (fontaineImg.complete){
        ctx.drawImage(fontaineImg,x,y);
    }
    else{
        fontaineImg.onload=()=>{
            ctx.drawImage(fontaineImg,x,y)
        }
    }
}
export function drawLac(ctx, x,y){
    if (lacImg.complete){
        ctx.drawImage(lacImg,x,y);
    }
    else{
        lacImg.onload=()=>{
            ctx.drawImage(lacImg,x,y)
        }
    }
}

export function drawPied(ctx,x=pied.x,y=pied.y){
    if(piedImg.complete){
      ctx.drawImage(piedImg, x, y);
    }else {
    // Attendre que les images soient prêtes avant de dessiner
    piedImg.onload = () => {
      ctx.drawImage(piedImg, x, y);
    };
  }
}


