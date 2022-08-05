const sub_menu_Men_shirt = document.querySelector(".sub-menu-Men-shirt")
const sub_menu_Men_clothes  = document.querySelector(".sub-menu-Men-clothes")


if( sub_menu_Men_shirt){
    sub_menu_Men_shirt.addEventListener("click",function(){
        document.querySelector(".Men-shirt").style.display = "block"
        document.querySelector(".Men-clothes").style.display = "none"

    })
}
if(sub_menu_Men_clothes){
    sub_menu_Men_clothes.addEventListener("click",function(){
        document.querySelector(".Men-shirt").style.display = "none"
        document.querySelector(".Men-clothes").style.display = "block"

    })
}