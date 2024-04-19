let imagens = ['./img/Carros/porshe_1.jpg','./img/Carros/porshe_2.jpg','./img/Carros/porshe_3.jpg'];
let index = 0;
let time = 3000;

function slideshow(){
    document.getElementById("imgbanner").src = imagens[index];
    index++;
    if(index == imagens.length){
        index = 0;
    }
    setTimeout('slideshow()', time);
}
slideshow();