//creacion del elemento logo y la insercion de la imagen del logo
//const logo = document.getElementById("logo");
//logo.src="/CSS/images/f92d5f2f7d56636846861c458c0d0b6c.svg";

//creacion de la clase e insercion de la imagen del encabezado
const head=document.createElement('head1');
head.innerHTML=`<div class="header">
<a href="../HTML/body.html">
<img src="../CSS/images/f92d5f2f7d56636846861c458c0d0b6c.svg">
</div>`;
document.body.appendChild(head);

//Creacion de la cajita de menu
const dropMenu= document.createElement("select");
const defaultOption=document.createElement("option")

//Creacion de titulo y opciones del menu
defaultOption.value=""
defaultOption.text="Idioma de la pagina:Español"
dropMenu.add(defaultOption)


//insercion de una prueba de un gif
const gif12=document.createElement("gif123");
gif12.innerHTML=`<div class="gif">
<a href="../HTML/body.html">
<img src="../CSS/images/giphy4.gif">
</div>`;
document.body.appendChild(gif12);


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

//creacion del texto en grande principal de la pagina
const texto=document.createElement("texto");
texto.className="div";
texto.innerHTML=`    <div class="text">
<h1>¡La forma divertida, efectiva y <br>
gratis de aprender un idioma!</h1>
    </div>`;
    document.body.appendChild(texto);

    //creacion de las clases para los botones
const body_1=document.createElement("body_1");
body_1.className="div";
body_1.innerHTML=` <div class="text-buttons">
<button id="login" type="button">Empieza ahora</button>
<button id="login2" class="text-buttons2" type="button">Ya tengo una cuenta</button>
    </div>`;
    document.body.appendChild(body_1);

    //aqui van las banderas

    //creacion del texto
 const body=document.createElement("body");
 body.innerHTML=`<div id="texto">
 <h2>divertido, efectivo y gratis</h2>
 <p>Aprender con Duolingo es divertido y los estudios demuestran <br>que funciona. 
     ¡En nuestras lecciones cortas ganarás puntos y <br>habilitarás nuevas unidades 
     al mismo tiempo que desarrollas <br>tus habilidades de comunicación en la vida real!</p>
</div>`;
document.body.appendChild(body);

//creacion del segundo texto
const body_3=document.createElement("body3")
body_3.innerHTML=`<div id="text1">
<h3>respaldado por la ciencia</h3>
<p>Gracias a la combinación de métodos de enseñanza respaldados <br>por la ciencia y un contenido 
entretenido, creamos cursos que <br> enseñan de forma eficiente a leer, escribir, entender y hablar 
en<br> otros idiomas.</p> </div>`;
document.body.appendChild(body_3);

//creacion del tercer texto
const body_4=document.createElement("body4")
body_4.innerHTML=`<div id="text2">
<h3>mantén tu motivación</h3>
<p>Nuestras funcionalidades y desafíos son divertidos y hacen que <br>
aprender se sienta como un juego. ¡Vas a poder formar un hábito de <br>
aprendizaje sin esfuerzo! Y, por supuesto, recibirás recordatorios <br>
de nuestra adorable mascota, Duo, el búho.</p></div>`;
document.body.appendChild(body_4);

//creacion del cuarto texto
const body_5=document.createElement("body5")
body_5.innerHTML=`<div id="text3>
<h3>aprendizaje personalizado</h3>
<p>Al combinar lo mejor de la inteligencia artificial y las ciencias de 
idiomas,<br> las lecciones se adaptan según tu desempeño para ayudarte a aprender
al nivel<br> adecuado y a tu propio ritmo.
</p></div>`;
document.body.appendChild(body_5);

//creacion de un titulo en grande
const body_6=document.createElement("body6")
body_6.innerHTML=`<div id="titulo1>
<h3>aprende cuando quieras y donde quieras</h3></div>`;
document.body.appendChild(body_6);















