
const Men_shirt = document.querySelector(".Men-shirt")
const Men_clothes  = document.querySelector(".Men-clothes")
const Male_pants  = document.querySelector(".Male-pants")


if(Men_shirt){
    Men_shirt.addEventListener("click",function(){
        document.querySelector(".cartegory-right-Men-shirt").style.display = "block"
        document.querySelector(".cartegory-right-Men-clothes").style.display = "none"
        document.querySelector(".cartegory-right-Male-pants").style.display = "none"
        

    })
}
if(Men_clothes){
    Men_clothes.addEventListener("click",function(){
        document.querySelector(".cartegory-right-Men-shirt").style.display = "none"
        document.querySelector(".cartegory-right-Men-clothes").style.display = "block"
        document.querySelector(".cartegory-right-Male-pants").style.display = "none"
    })
}
if(Male_pants){
    Male_pants.addEventListener("click",function(){
        document.querySelector(".cartegory-right-Men-shirt").style.display = "none"
        document.querySelector(".cartegory-right-Men-clothes").style.display = "none"
        document.querySelector(".cartegory-right-Male-pants").style.display = "block"
        

    })
}



$(document).ready(function (){
    $('.nav_mb-list .icon-menu').click(function () {
        $(this).parent('li').children('.sub-menu').slideToggle();
        $(this).toggleClass('fa-chevron-down fa-chevron-right');
    });
});
