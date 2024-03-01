//creacion del elemento logo y la insercion de la imagen del logo
//const logo = document.getElementById("logo");
//logo.src="/CSS/images/f92d5f2f7d56636846861c458c0d0b6c.svg";

//creacion de la clase e insercion de la imagen del encabezado
/*const head=document.createElement('head1');
head.innerHTML=`<div class="header">
<a href="../HTML/body.html">
<img src="../CSS/images/f92d5f2f7d56636846861c458c0d0b6c.svg">
</div>`;
document.body.appendChild(head);*/

const sticky=document.createElement("sticky1");
sticky.innerHTML=`<div id="navbar">
<div class="sticky">
<div class="header">
<a href="../HTML/body.html">
<img src="../CSS/images/f92d5f2f7d56636846861c458c0d0b6c.svg">
</div>
</div>
</div>`;
document.body.appendChild(sticky);


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
body_6.innerHTML=`<div id="titulo1">
<h3>aprende cuando quieras y donde quieras</h3></div>`;
document.body.appendChild(body_6);

//creacion de una clase para la insercion de un gif


const gif_2=document.createElement("gif2")
gif_2.innerHTML=`<div class="gif2">
<a href="../HTML/body.html">
<img src="../CSS/images/gifazul.gif">
</div>`
document.body.appendChild(gif_2);

const titulo1=document.createElement("titulo1");
titulo1.className="div";
titulo1.innerHTML=` 
<div class="text-buttons2">
<button id="prueba" type="button"> PRUEBA 2 SEMANAS GRATIS</button>
    </div>`;
    document.body.appendChild(titulo1);
    

const body_7=document.createElement("body7")
body_7.innerHTML=`<div id="text4">
<h3>duolingo english test</h3>
<p>Nuestro examen de inglés es conveniente, rápido y económico. <br>
El Duolingo English Test integra los últimos avances en la<br> ciencia 
e inteligencia artificial para dar a todas las personas la <br> posibilidad 
de elegir dónde y cuándo hacer el examen y que <br> puedan dar lo mejor de sí.
</p></div>`;
document.body.appendChild(body_7);

const boton=document.createElement("boton1");
boton.className="div";
boton.innerHTML=` 
<div class="text-buttons3">
<button id="ingles" type="button"> CERTIFICA TU INGLES</button>
    </div>`;
    document.body.appendChild(boton);

const body_8=document.createElement("body8")
body_8.innerHTML=`<div id="text5">
<h3>duolingo for schools</h3>
<p>
Maestras y maestros: ¡estamos para ayudarlos! Nuestra <br>
herramienta gratuita ayuda a tus estudiantes a aprender <br>
idiomas a través de la app de Duolingo, tanto dentro como fuera <br>
del salón de clases
</p></div>`;
document.body.appendChild(body_8);

const boton2=document.createElement("boton2");
boton2.className="div";
boton2.innerHTML=` 
<div class="text-buttons4">
<button id="ingles2" type="button"> POTENCIA TU SALON DE CLASES</button>
    </div>`;
    document.body.appendChild(boton2);


const body_9=document.createElement("body9")
body_9.innerHTML=`<div id="text6">
<h3>duolingo abc</h3>
<p>
¡Desde aprender idiomas hasta alfabetismo! Con lecciones de <br>
fonética y cuentos divertidos, Duolingo ABC enseña a niños y <br>
niñas de entre 3 y 8 años a leer y escribir… ¡y es totalmente <br>
gratis!
</p></div>`;
document.body.appendChild(body_9);

const boton3=document.createElement("boton3");
boton3.className="div";
boton3.innerHTML=` 
<div class="text-buttons5">
<button id="ingles3" type="button"> CONOCE DUOLINGO ABC</button>
    </div>`;
    document.body.appendChild(boton3);

const body_10=document.createElement("body10")
body_10.innerHTML=
`<div id="text7">
<h3>duolingo math</h3>
<p>
¡Prueba nuestras lecciones cortas y gratis para matemáticas! <br>
Con Duolingo Math, los estudiantes podrán adelantarse en sus <br>
 clases de matemáticas y los adultos podrán practicar para <br>
 mejorar su destreza matemática.
</p></div>`;

document.body.appendChild(body_10);

const boton4=document.createElement("boton4");
boton4.className="div";
boton4.innerHTML=` 
<div class="text-buttons5">
<button id="ingles4" type="button"> MEJORA EN MATEMATICA</button>
    </div>`;
    document.body.appendChild(boton4);

const body_11=document.createElement("body11")
body_11.innerHTML=`<div id="titulo2">
<h3>aprende idiomas con duolingo</h3></div>`;
document.body.appendChild(body_11);


















