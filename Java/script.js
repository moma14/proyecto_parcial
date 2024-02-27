//document.addEventListener("DOMContentLoaded", function() {
const logo = document.getElementById("logo");
logo.src="/CSS/images/f92d5f2f7d56636846861c458c0d0b6c.svg"

//Creacion de la cajita de menu
const dropMenu= document.createElement("select");
const defaultOption=document.createElement("option")

//Creacion de titulo y opciones del menu
defaultOption.value=""
defaultOption.text="Idiomas"
dropMenu.add(defaultOption)

//creacion de un arreglo para automatizar la insercion de los elementos del menu
const idiomas= [{ nombre: "Español", emoji: "🇪🇸" },
{ nombre: "Inglés", emoji: "🇬🇧" },
{ nombre: "Ruso", emoji: "🇷🇺" },
{ nombre: "Francés", emoji: "🇫🇷" },
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














