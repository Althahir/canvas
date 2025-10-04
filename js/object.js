// js/house.js

// On crée une image JS
const maisonImg = new Image();
maisonImg.src = './assets/maison.png'; // à adapter si elle est dans un sous-dossier

const porteImg = new Image();
porteImg.src = './assets/porte.png'; // image à fournir (voir remarque ci-dessous)


// Fonction d'affichage
export function drawHouse(ctx, x, y) {
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

