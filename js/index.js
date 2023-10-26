window.onload=inicio;
var link, links, item;
let mostrar = false;
function inicio(){
   
    link = document.querySelector(".link");
    links = document.querySelector(".links");
   

    link.onclick = desplegar;




}

function desplegar() {

    if(mostrar){
        links.classList.remove("aparecer");
        links.classList.add("desaparecer");
    }else{
        
        links.classList.add("aparecer");
        links.classList.remove("desaparecer");
    }


    links.classList.add("linksmq");
    for(let i = 0; i < links.childElementCount ; i++){
        document.querySelectorAll("nav a")[i].classList.add("navmq");
    }

    mostrar=!mostrar;

    
}