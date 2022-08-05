/*--Product---*/
const bigImg = document.querySelector(".product-content-left-big-img img")
const smaImg =  document.querySelectorAll(".product-content-left-small-img img")
smaImg.forEach(function(imgItem,x){
    imgItem.addEventListener("click",function(){
        bigImg.src = imgItem.src
    })
})



const Preserve = document.querySelector(".Preserve")
const Describe = document.querySelector(".Describe")
const Evaluate = document.querySelector(".Evaluate")

if(Preserve){
    Preserve.addEventListener("click",function(){
        document.querySelector(".product-content-Describe").style.display = "none"
        document.querySelector(".product-content-Preserve").style.display = "block"
        document.querySelector(".product-content-Evaluate").style.display = "none"

    })
}
if(Describe){
    Describe.addEventListener("click",function(){
        document.querySelector(".product-content-Describe").style.display = "block"
        document.querySelector(".product-content-Preserve").style.display = "none"
        document.querySelector(".product-content-Evaluate").style.display = "none"

    })
}
if(Evaluate){
    Evaluate.addEventListener("click",function(){
        document.querySelector(".product-content-Describe").style.display = "none"
        document.querySelector(".product-content-Preserve").style.display = "none"
        document.querySelector(".product-content-Evaluate").style.display = "block"

    })
}


