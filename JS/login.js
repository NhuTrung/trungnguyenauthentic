const Lo_gin = document.querySelector(".login")
const Sig_up  = document.querySelector(".sigup")

if(Lo_gin){
    Lo_gin.addEventListener("click",function(){
        document.querySelector(".formLogin").style.display ="block"
        document.querySelector(".formsigup").style.display="none"
    })

}
if(Sig_up){
    Sig_up.addEventListener("click",function(){
        document.querySelector(".formLogin").style.display ="none"
        document.querySelector(".formsigup").style.display="block"
    })

}