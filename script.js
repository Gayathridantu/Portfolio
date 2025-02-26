function myMenuFunction(){
    var menuBth=document.getElementById("mymenu");
    if (menuBth.className==="nav-menu")
        menuBth.className+="-responsive";
    else
     menuBth.className="nav-menu";

}
const body=document.querySelector("body")
const toogleSwitch=document.querySelector("#toggle-switch");
toogleSwitch.addEventListener("click",()=>{
        body.classList.toggle("dark");
})