let country=document.getElementById("counties2");
let btn = document.querySelector('button ');
function HideShow(){
    console.log(btn)
    if(country.style.display=="grid"){
        country.style.display="none";
        btn.innerHTML="SHOW MORE";
    }
    else{
        country.style.display="grid";
        btn.innerHTML="SHOW LESS";
    }
}
let menuDropdown = document.getElementById("dropdown1");
function openmenu() {
    if (menuDropdown.style.display == "block") {
        menuDropdown.style.display = "none";
    }
    else {
        menuDropdown.style.display = "block";
    }
}