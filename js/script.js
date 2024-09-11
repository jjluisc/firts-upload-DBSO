
console.log('estoy funcionando');
const btnLeft= document.querySelector('.btn-left'),
 btnRight= document.querySelector('.btn-right'),
 slider=document.querySelector('#slider'),
 sliderSection=document.querySelector('.slider-section');

 btnLeft.addEventListener("click",e=>moveToLeft());
 btnRight.addEventListener("click",e=>moveToright());
let operation=0;
        
function moveToright(){
 slider.style.transform=`translateY(-${operation}%)`;
}


function moveToLeft(){
}
