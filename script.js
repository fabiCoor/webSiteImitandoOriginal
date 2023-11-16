//propiedades para video desde DOM

/*let video= document.querySelector("#video");
let zonaTiempo=document.querySelector(".tiempo");
//console.dir(video)

let cVTiempo=(tiempo)=>{
    let min;
    let seg;
if(tiempo<60){
min=0;
seg=tiempo.toFixed(0)
 } 
 return min+":"+seg
}*/

window.addEventListener('load',()=>{
    zonaTiempo.textContent=cVTiempo(video.duration)
});
//---------------------play y pausa-----------------------------------------//
const inicioVideo=()=>{
    video.play();

}
const pausaVideo=()=>{
    video.pause();
}


//---------------JUGUEMOS------------------------

// imagenes 1 del juego arrastre

let imagen1=document.querySelector(".im1");

let caja1=document.querySelector(".c1");


imagen1.addEventListener('dragstart',inicioTranslado);

function inicioTranslado(evento){
    evento.dataTransfer.setData('Text',"./imagens/rompe1.png");
};


imagen1.addEventListener('dragend',finalTranslado);

function finalTranslado(evento){
    let img1=evento.target;
    //img1.style.visibility='hidden';
    img1.style.display="none"
};

caja1.addEventListener('drop',soltarImg1);

function soltarImg1(evento){
    let dataImagen1=evento.dataTransfer.getData('Text');
    caja1.innerHTML=`<img class="im1" src="${dataImagen1}">`
    imagen1.style.display="none"
};

caja1.addEventListener('dragover',preventDefault);

function preventDefault(evento){
    evento.prevenirDefault()
}
//----no logro hacer que aparezca la imagen en la caja


//----------img2-------------------------

let imagen2=document.querySelector(".im2");

let caja2=document.querySelector(".c2");


imagen2.addEventListener('dragstart',inicioTranslado);

function inicioTranslado(evento){
    evento.dataTransfer.setData('Text',"./imagens/rompe2.png");
};


imagen2.addEventListener('dragend',finalTranslado);

function finalTranslado(evento){
    let img2=evento.target;
    img2.style.display="none"
};

caja2.addEventListener('drop',soltarImg1);

function soltarImg2(evento){
    let dataImagen2=evento.dataTransfer.getData('Text');
    caja2.innerHTML=`<img class="im1" src="${dataImagen2}">`
    imagen2.style.display="none"
};

caja2.addEventListener('dragover',preventDefault);

function preventDefault(evento){
    evento.prevenirDefault()
}

//img3________________________________________
let imagen3=document.querySelector(".im3");

let caja3=document.querySelector(".c3");


imagen3.addEventListener('dragstart',inicioTranslado);

function inicioTranslado(evento){
    evento.dataTransfer.setData('Text',"./imagens/rompe3.png");
};


imagen3.addEventListener('dragend',finalTranslado);

function finalTranslado(evento){
    let img3=evento.target;
    img3.style.display="none"
};

caja3.addEventListener('drop',soltarImg1);

function soltarImg3(evento){
    let dataImagen3=evento.dataTransfer.getData('Text');
    caja3.innerHTML=`<img class="im1" src="${dataImagen3}">`
    imagen3.style.display="none"
};

caja3.addEventListener('dragover',preventDefault);

function preventDefault(evento){
    evento.prevenirDefault()
}

//_________________boton Reiniciar____________________
function reinicio(){
    window.location.reload();
}
