//creacion del elemento logo y la insercion de la imagen del logo
const logo = document.getElementById("logo");
logo.src="/CSS/images/f92d5f2f7d56636846861c458c0d0b6c.svg";

//Creacion de la cajita de menu
const dropMenu= document.createElement("select");
const defaultOption=document.createElement("option")

//Creacion de titulo y opciones del menu
defaultOption.value=""
defaultOption.text="Idioma de la pagina:Español"
dropMenu.add(defaultOption)


//insercion de una prueba de un gif
//const gif12=document.getElementById("gif12")
//gif12.src="/CSS/images/giphy.gif"

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
const menu_1=document.createElement("menu1")
document.body.appendChild(dropMenu)

//creacion de la clase button y del texto que principal de la pagina
const body_1=document.createElement("body_1");
body_1.className="div";
body_1.innerHTML=`    <div class="text-buttons">
<h1>¡La forma divertida, efectiva y gratis de aprender un idioma!</h1>
<button id="login" type="button">Empieza ahora</button>
<button id="login2" type="button">Ya tengo una cuenta</button>
    </div>`;
    document.body.appendChild(body_1);

    //creacion del texto
 const body=document.createElement("body");
 body.innerHTML=`<div id="texto">
 <h2>divertido, efectivo y gratis</h2>
 <p>Aprender con Duolingo es divertido y los estudios demuestran que funciona. 
     ¡En nuestras lecciones cortas ganarás puntos y habilitarás nuevas unidades 
     al mismo tiempo que desarrollas tus habilidades de comunicación en la vida real!</p>
</div>`;
document.body.appendChild(body);

//creacion del segundo texto
const body_3=document.createElement("body3")
body_3.innerHTML=`<h3>respaldado por la ciencia</h3>
<p>Gracias a la combinación de métodos de enseñanza respaldados por la ciencia y un contenido 
entretenido, creamos cursos que enseñan de forma eficiente a leer, escribir, entender y hablar 
en otros idiomas.</p>`;
document.body.appendChild(body_3);

//creacion del tercer texto
const body_4=document.createElement("body4")
body_4.innerHTML=`<h3>mantén tu motivación</h3>
<p>Nuestras funcionalidades y desafíos son divertidos y hacen que 
aprender se sienta como un juego. ¡Vas a poder formar un hábito de 
aprendizaje sin esfuerzo! Y, por supuesto, recibirás recordatorios 
de nuestra adorable mascota, Duo, el búho.</p>`;
document.body.appendChild(body_4);

//creacion del cuarto texto
const body_5=document.createElement("body5")
body_5.innerHTML=`<h3>aprendizaje personalizado</h3>
<p>Al combinar lo mejor de la inteligencia artificial y las ciencias de 
idiomas, las lecciones se adaptan según tu desempeño para ayudarte a aprender
al nivel adecuado y a tu propio ritmo.
</p>`;
document.body.appendChild(body_5);

//creacion de un titulo en grande
const body_6=document.createElement("body6")
body_6.innerHTML=`<h3>aprende cuando quieras y donde quieras</h3>`;
document.body.appendChild(body_6);

//const gifis=document.createElement("gifis")
//gifis.id = "gif1";
//const gif=document.getElementById("gif1")
//gifis.src="/CSS/images/gifazul.gif"
//document.body.appendChild(gifis);













