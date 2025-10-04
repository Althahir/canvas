// js/house.js


// On crée une image JS
const maisonImg = new Image();
maisonImg.src = './assets/maison.png'; // à adapter si elle est dans un sous-dossier

const porteImg = new Image();
porteImg.src = './assets/porte.png'; // image à fournir (voir remarque ci-dessous)
const plantImg = new Image();
plantImg.src = './assets/plante.png'; // image à fournir (voir remarque ci-dessous)

export const house = {
  x: 320,   // même position que ton drawHouse
  y: 280,
  w: 216,   // largeur de la maison (ajuste selon ton image)
  h: 200
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

