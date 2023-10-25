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

