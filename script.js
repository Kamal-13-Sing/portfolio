
function opentab(tabname){
    var tabl= document.getElementsByClassName("tab-links");
    var tabc = document.getElementsByClassName("tab-contents");

    for(tabl of tabl){
        tabl.classList.remove("active-link");
    }
    for(tabc of tabc){
        tabc.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
} 
/*-----------------small screen size-----------------*/
var sidemeu = document.getElementById("sidemenu");
function openmenu(){
     sidemeu.style.right= "0";
}
function closemenu(){
    sidemeu.style.right= "-200px";
}
