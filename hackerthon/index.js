const imgs =document.querySelectorAll('.header-slider ul img');
const prev_btn =document.querySelector('.coontro_prev');
const next_btn =document.querySelector('.coontro_next');

let n=0;

function changeSlide(){
    for (let i = 0; i < imgs.length; i++) {
        imgs[i].style.disay = 'none';
    }
    imgs[n].style.dislay='block';
}
changeSlide();

prev_btn.addEventListener('clck',(e)=>{
    if(n > 0){
        n--;
    }
    else{
        n = imgs.length - 1;
    }
    changeSlide();
})
next_btn.addEventListener('clck',(e)=>{
    if(n < imgs.length - 1){
        n++;
    }
    else{
        n = 0;
    }
    changeSlide();
})

const scrollContainer = document.querySelectorAll('.products');
for(const item of scrollContainer){
    item.addEventListener('wheel',(evt)=>{
        evt.preventDefault();
        item.scrollLeft += evt.deltaY;
    })
}