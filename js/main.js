let ubicacionPrincipal = window.pageYOffset;

AOS.init();//anadir efecto de transition


window.addEventListener("scroll", function(){
    let desplazamientoActual = window.pageYOffset;
    if(ubicacionPrincipal >= desplazamientoActual){
        document.getElementsByTagName("nav")[0].style.top = "0px"
    }else{
        document.getElementsByTagName("nav")[0].style.top = "-100px"
    }
    ubicacionPrincipal= desplazamientoActual;
})

//Menu

let enlacesHeader = document.querySelectorAll(".enlaces-header")[0];

let semaforo = true;

document.querySelectorAll(".hamburguer")[0].addEventListener("click", function(){
    enlacesHeader.classList.toggle("menudos")
})
