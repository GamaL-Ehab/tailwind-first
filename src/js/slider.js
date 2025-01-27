const img = document.getElementById("slider-img");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

const images = ["images/ales-nesetril-Im7lZjxeLhg-unsplash-EFNYJM67.jpg",
    "images/christopher-gower-m_HRfLhgABo-unsplash.jpg",
    "images/bg2.jpg", "images/fabian-irsara-67l-QujB14w-unsplash.jpg",
    "images/testtwo.jpg"
];

let i = 0;
img.src = 'src/' + images[i];

prev.addEventListener('click', function(){
    if(i == 0 ){
        i = images.length-1
        img.src = 'src/' + images[i];
    }else{
        i--
        img.src = 'src/' + images[i];
    }  
})
next.addEventListener('click', function(){
    if(i == images.length - 1){
        img.src = 'src/' + images[i];
        i = 0
    }else{
        i++
        img.src = 'src/' + images[i];
    }  
})