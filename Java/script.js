//document.addEventListener("DOMContentLoaded", function() {
const logo = document.getElementById("logo");
logo.src="/CSS/images/f92d5f2f7d56636846861c458c0d0b6c.svg"

//Creacion de la cajita de menu
const dropMenu= document.createElement("select");
const defaultOption=document.createElement("option")

//Creacion de titulo y opciones del menu
defaultOption.value=""
defaultOption.text="Idioma de la pagina:Español"
dropMenu.add(defaultOption)

/*var content=0;
function CalTime(){
    var tiempo=setTimeout(Cambiar(),20);
}
{
    function Cambiar(){
        content ++;
        if(content >105){
            content=0;
        }
        document.getElementById("img").src="giphy/"+content+".gif"
    }
}*/

//insercion de una prueba de un gif
const gif=document.getElementById("gif")
gif.src="/CSS/images/giphy.gif"

//creacion de un arreglo para automatizar la insercion de los elementos del menu
const idiomas= [{ nombre: "Español", emoji: "🇪🇸" },
{ nombre: "Israel", emoji: "🇬🇧" },
{ nombre: "Cestina", emoji: "🇷🇺" },
{ nombre: "Griego", emoji: "🇫🇷" },
{ nombre: "Alemán", emoji: "🇩🇪" }
]
idiomas.forEach(function(idioma){
    const options=document.createElement("option")
    options.value=idioma.nombre.toLowerCase()
    options.text=idioma.emoji+" "+idioma.nombre
    dropMenu.add(options)
})
const menu=document.getElementById("menu")
menu.appendChild(dropMenu)














