import {messageDebut}from'../main.js'

const tirerEpeeImg = new Image();
tirerEpeeImg.src = './assets/n.png'; 
const message1Img = new Image();
message1Img.src = './assets/message1.png'; 
const message2Img = new Image();
message2Img.src = './assets/message2.png'; 

export function drawTirerEpee (ctx, x=50, y=250){
if (tirerEpeeImg.complete) {
    ctx.drawImage(tirerEpeeImg, x, y);
  } else {
    // Attendre que les images soient prêtes avant de dessiner
    tirerEpeeImg.onload = () => {
      ctx.drawImage(tirerEpeeImg, x, y);
    };
  }
}

export function DrawMessage1(ctx, x=600, y=600,messageDebut){
 if(messageDebut==true){
  if(message1Img.complete){
    ctx.drawImage(message1Img,x,y);
  }
  else{
    message1Img.onload=()=>{
      ctx.drawImage(message1Img,x,y);
    }
  }
}
}
export function DrawMessage2(ctx, x=600, y=600,){
  if(message1Img.complete){
    ctx.drawImage(message2Img,x,y);
  }
  else{
    message1Img.onload=()=>{
      ctx.drawImage(message2Img,x,y);
    }
  }
}
