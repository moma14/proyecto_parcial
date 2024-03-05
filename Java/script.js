//estilos para toda la pagina

const estilement = document.createElement('style');
estilement.textContent =`@import url(https://db.onlinewebfonts.com/c/ab596f21664c5582567537d241e2a53e?family=DIN+Next+Rounded+LT+W01+Regular);
@import url(https://db.onlinewebfonts.com/c/14936bb7a4b6575fd2eee80a3ab52cc2?family=Feather+Bold);

header {
  background-color: #ffffff;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  width:112%;
  height: 70px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0 20px;
  position: sticky;
  top: 0;
  z-index: 100;
  margin:center;
}

.btnenca {
  display: flex;
  border: none;
  cursor: pointer;
  user-select: none;
  background-color: #ffffff;
  
}

.spanenca {
  font-family: "Bahnschrift SemiBold";
  font-weight: bolder;
  color: rgb(70, 68, 68);
  opacity: 0.5;
  font-size: 16px;
  letter-spacing: -0.15px;
  margin-left: 650px;
  width:100%;
}
  /*FIN DEL encabezado*/

  /*posicionamiento y tamaño del gif principal*/
  #pajarito{
    height: 100px;
    margin-right: 400px;
    margin-top: -50px;
  }
  /*FIN DEL gif principal*/

  .button-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 700px;
    margin: 0 auto;
  }

  button {
    min-width: 100%;
    border-radius: 16px;
    justify-content: center;
    color: #fff;
    border: 2px solid #449e04;;
    border-bottom: 6px solid #3e8f04;
    margin: 10px;
    transition: all 0.1s;
    padding: 14px 16px;
    cursor: pointer;
    background-color: #51c002;
    font-family: 'Feather Bold';
    font-size: 17px;
  
  }

   /*personalizacion del boton de empieza ahora*/
  #login{
    background-color: #51c002;
    border-color: #449e04;
    justify-content: center;
  }
 
   /*fin de la personalizacion*/

 /*personalizacion del boton de ya tengo una cuenta*/
  #login2 {
    background-color: #ffffff;
    color: #1695df;
    border-color: #e6d7d7;
    justify-content: center;
    margin-left: 10px;
  }

  button:active {
    border-bottom: 2px solid #58cc03;
  }

  .text-buttons{
    margin-left: 500px;
   }
   .text{
    margin-top: 170px;
    margin-left: 500px;
    color: #0c0c0cb7;
   }
   
   #titulo1{
    align-items: center;
    margin-top: 100px;
    color: #58cc02;
    font-size: 255%;
   }
   #texto{
    margin-right: 500px;
    margin-top: 50px;
    font-family: 'Feather Bold';
    color: #808080;
   }
   #gify2{
    width: 100px;
    height: 30px;
    margin-left: 600px;
    margin-top: 100px;
   }
   /*propiedades del texto 3 con su respectivo titulo y del boton que esta debajo*/
   #titulo2{
    color: #58cc02;
    font-size: 255%;
   } 
   #text1{
    margin-left: 490px;
    margin-top: 130px;
    font-family: 'Feather Bold';
    color: #808080;
   }
    #gify3{
    width: 100px;
    height: 0px;
    margin-right: 600px;
    margin-top: 100px;
   }
   
   #titulo3{
    color: #58cc02;
    font-size: 255%;
   } 
   #text2{
    margin-right: 450px;
    margin-top: 150px;
    font-family: 'Feather Bold';
    color: #808080;
   }
   #gify4{
    width: 100px;
    height: 0px;
    margin-left: 700px;
    margin-top: 100px;
   }

   #titulo10{
    align-items: center;
    margin-top: 300px;
    color: #0c0666;
    font-family: 'Feather Bold';
    font-size: 255%;
   } 
/*propiedades del texto 4 con su respectivo titulo y del boton que esta debajo*/
   #titulo4{
    color: #58cc02;
    font-size: 255%;
   } 
   #text3{
    margin-left: 620px;
    margin-top: 200px;
    font-family: 'Feather Bold';
    color: #808080;
   }
   #gify5{
    width: 100px;
    height: 0px;
    margin-left: 200px;
    margin-top: 200px;
   }
   /*propiedades del titulo */

   /*configuracion del super duolingo*/
  
   .container {
    background-color: #0c0666;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 20px; 
    height:550px;
}

.gif-container {
    width: 50%; 
    margin-left:300px;
    
}

#gify.gif {
    width: 100%; 
    height:100%;
    margin-left:900px;
}

.button-container {
    width: 50%; 
    margin-left:400px;
    margin-top:150px;
}
   #super{
  display: flex;
   margin-left: 800px;
   margin-top: -250px;
   width: 100%;
    height: 80px;
   }

  #prueba{
    background-color: #ffffff;
    color: #1695df;
    border-color: #e6d7d7;
    margin-left:-650px;
    margin-top: 200px;
    min-width: 30%;
    height: 65px;
  }
  /*fin  del super duolingo*/

 /*propiedades del texto 4 con su respectivo titulo y del boton que esta debajo*/
 #titulo5{
  color: #58cc02;
  font-size: 255%;
 } 
  #text4{
    margin-right: 490px;
    margin-top: 200px;
    font-family: 'Feather Bold';
    color: #808080;
   }

   #ingles{
    background-color: #ffffff;
    color: #1695df;
    border-color: #e6d7d7;
    margin-right:700px;
    min-width: 30%;
  }
  #gify6{
    width: 100px;
    height: 0px;
    margin-left: 700px;
    margin-top: 400px;
   }
 /*propiedades del texto 5 con su respectivo titulo y del boton que esta debajo*/
 #titulo6{
  color: #58cc02;
  font-size: 255%;
 } 
   #text5{
    margin-left: 545px;
    margin-top: 250px;
    font-family: 'Feather Bold';
    color: #808080;
   }
   #ingles2{
    background-color: #ffffff;
    color: #1695df;
    border-color: #e6d7d7;
    margin-left:600px;
    min-width: 30%;
  }
 

   /*propiedades del texto 6 con su respectivo titulo y del boton que esta debajo*/
   #titulo7{
    font-size: 255%;
    color: #58cc02;
   } 
   #text6{
    margin-right: 480px;
    margin-top: 250px;
    font-family: 'Feather Bold';
    color: #808080;
   }
   #ingles3{
    background-color: #ffffff;
    color: #1695df;
    border-color: #e6d7d7;
    margin-right:700px;
    min-width: 30%;
  }

 /*propiedades del texto 7 con su respectivo titulo y del boton que esta debajo*/
 #titulo8{
  color: #58cc02;
  font-size: 255%;
 }
   #text7{
    margin-left: 540px;
    margin-top: 250px;
    font-family: 'Feather Bold';
    color: #808080;
   }
   #ingles4{
    background-color: #ffffff;
    color: #1695df;
    border-color: #e6d7d7;
    margin-left:600px;
    min-width: 30%;
  }

   #titulo9{
    align-items: center;
    margin-top: 100px;
    color: #58cc02;
    font-family: 'Feather Bold';
    font-size: 350%;
   }


   #navbar img{
    overflow: hidden;
    background-color: #fff;
    
  }
  
  /*propiedades del sticky*/
  #navbar {
    display: flex;
    height: 100px;
    margin-right: 1045px;
    text-decoration: none;
  }

  .body {
    padding: 16px;
  }
  
  
  #ingles5{
    background-color: #51c002;
    border-color: #449e04;
    justify-content: center;
    min-width: 400px;
  }

  footer{
    background-color: #51c002;
   /* Centra horizontalmente el contenido */
    margin-top: -100px;
    margin:100px;
    width:115%;
  }
  footer{/Clase para el contenido del footer/
  background: rgb(84,204,2,1);
}
.contenido{
  display: grid;
  gap: 20px;
  grid-template-columns: minmax(0, 216px);
  margin: 0 auto;
  max-width: 375px;
  overflow-wrap: anywhere;
  padding: 96px 32px 64px;
}
.tipoFooter ul{
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.contenido a{
  color: rgb(165,237,110);
  font-size: 15px;
  font-weight: 900;
  line-height: 22px;
}
@media screen and (min-width: 1080px){/clase responsiva del footer/
    .contenedor{
        gap: 24px;
        grid-template-columns: repeat(5, 178px);
        padding: 96px 0 64px;
    }
    .contenido{
      align-content: start;
      display: grid;
      gap: 32px;
  }
  .tipoFooter{
    color: rgb(215,255,184);
    font-size: 19px;
    font-weight: 700;
    line-height: 1.4;
    margin-bottom: 12px;
}
#sobre1{
  margin-left:150px;
  margin-top:100px;
}
#sobre2{
  margin-left:380px;
  margin-top:-500px;
}
#sobre3{
  margin-left:600px;
  margin-top:-420px;
}
#sobre4{
  margin-left:800px;
  margin-top:-285px;
}
#sobre5{
  margin-left:1000px;
  margin-top:-330px;
}
#sobre6{
  margin-left:1250px;
  margin-top:-310px;
}
  `;
  document.head.appendChild(estilement);

//Creacion de toda la parte del encabezado incluyendo el logo, la parte del menu y un sticky para que no se mueva 
//el encabezado al bajar por la pagina
const header = document.createElement("header");
header.innerHTML = `
<div class="btnenca">
<a href="../HTML/body.html">
<img src="../CSS/images/f92d5f2f7d56636846861c458c0d0b6c.svg">
</a>
<span class="spanenca">IDIOMA DE LA PÁGINA: ESPAÑOL</span>
</div>
`;
 document.body.appendChild(header);


//insercion del gif principal 
const gif12=document.createElement("gif123");
gif12.innerHTML=`<div class="gif" id="pajarito">
<a href="../HTML/body.html">
<img src="../CSS/images/giphy4.gif">
</div>`;
document.body.appendChild(gif12);


//creacion de un arreglo para automatizar la insercion de los elementos del menu

//creacion del texto en grande principal de la pagina
const texto=document.createElement("div");
texto.className="div";
texto.innerHTML=`    <div class="text">
<h1>¡La forma divertida, efectiva y <br>
gratis de aprender un idioma!</h1>
    </div>`;
    document.body.appendChild(texto);

    //creacion de las clases para los botones
const body_1=document.createElement("div");
body_1.innerHTML=` <div class="text-buttons">
<button id="login" type="button">Empieza ahora</button>
<button id="login2" class="text-buttons" type="button">Ya tengo una cuenta</button>
    </div>`;
    document.body.appendChild(body_1);

    //aqui van las banderas

    //creacion del primer texto
 const body=document.createElement("body");
 body.innerHTML=`<div class="gif3">
 <div id="gify2"
 <a href="../HTML/body.html">
 <img src="../CSS/images/giphy2.gif"></div></div>
 <div id="texto">
 <div id="titulo1">
<h3>divertido, efectivo y <br>gratis</h3></div>
 <p>Aprender con Duolingo es divertido y los estudios demuestran <br>que funciona. 
     ¡En nuestras lecciones cortas ganarás puntos y <br>habilitarás nuevas unidades 
     al mismo tiempo que desarrollas <br>tus habilidades de comunicación en la vida real!</p>
</div>`;
document.body.appendChild(body);

//creacion del segundo texto
const body_3=document.createElement("body3")
body_3.innerHTML=`<div class="gif4">
<div id="gify3"
<a href="../HTML/body.html">
<img src="../CSS/images/giphy3.gif"></div></div>
<div id="text1">
<div id="titulo2">
<h3>respaldado por la <br> ciencia</h3></div>
<p>Gracias a la combinación de métodos de enseñanza respaldados <br>por la ciencia y un contenido 
entretenido, creamos cursos que <br> enseñan de forma eficiente a leer, escribir, entender y hablar 
en<br> otros idiomas.</p> </div>`;
document.body.appendChild(body_3);

//creacion del tercer texto
const body_4=document.createElement("body4")
body_4.innerHTML=`<div class="gif5">
<div id="gify4"
<a href="../HTML/body.html">
<img src="../CSS/images/giphy.gif"></div></div>
<div id="text2">
<div id="titulo3">
<h3>mantén tu <br>motivación</h3></div>
<p>Nuestras funcionalidades y desafíos son divertidos y hacen que <br>
aprender se sienta como un juego. ¡Vas a poder formar un hábito de <br>
aprendizaje sin esfuerzo! Y, por supuesto, recibirás recordatorios <br>
de nuestra adorable mascota, Duo, el búho.</p></div>`;
document.body.appendChild(body_4);

//creacion del cuarto texto
const body_5=document.createElement("body5")
body_5.innerHTML=`<div class="gif6">
<div id="gify5"
<a href="../HTML/body.html">
<img src="../CSS/images/giphy5.gif"></div></div>
<div id="text3">
<div id="titulo4">
<h3>aprendizaje <br>personalizado</h3></div>
<p>Al combinar lo mejor de la inteligencia artificial y las ciencias de 
idiomas,<br> las lecciones se adaptan según tu desempeño para ayudarte a aprender
al nivel<br> adecuado y a tu propio ritmo.
</p></div>`;
document.body.appendChild(body_5);

//creacion de un titulo en grande
const body_6=document.createElement("body6")
body_6.innerHTML=`<div id="titulo10" >
<h3>aprende cuando<br> quieras y donde <br>quieras</h3></div>`;
document.body.appendChild(body_6);

//creacion de una clase para la insercion de un gif

//creacion de la seccion de super duolingo
const titulo1 = document.createElement("div");
titulo1.innerHTML = `
<div class="container">
<div class="gif-container">
<div id="gify">
<a href="../HTML/body.html">
<img class="gif" src="../CSS/images/gifazul.gif">
<div id="super">
 <img src="../CSS/images/super.svg">
</div>
</a>
</div>
</div>
<div class="button-container">
<div class="text-buttons2">
<button id="prueba">PRUEBA 2 SEMANAS GRATIS</button>
</div>
 </div>
</div>
`;
document.body.appendChild(titulo1);
    
//primer texto con botones
const body_7=document.createElement("body7")
body_7.innerHTML=`<div class="gif7">
<div id="gify6"
<a href="../HTML/body.html">
<img src="../CSS/images/giphy6.gif"></div></div>
<div id="text4">
<div id="titulo5">
<h3>duolingo english test</h3></div>
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

//segundo texto con botones
const body_8=document.createElement("div")
body_8.innerHTML=`<div id="text5">
<div id="titulo6">
<h3>duolingo for schools</h3></div>
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

//tercer texto con botones
const body_9=document.createElement("body9")
body_9.innerHTML=`<div id="text6">
<div id="titulo7">
<h3>duolingo abc</h3></div>
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
    
//cuarto texto con botones
const body_10=document.createElement("body10")
body_10.innerHTML=
`<div id="text7">
<div id="titulo8">
<h3>duolingo math</h3></div>
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
body_11.innerHTML=`<div id="titulo9">
<h3>aprende idiomas<br> con duolingo</h3></div>`;

document.body.appendChild(body_11);

const boton5=document.createElement("div");
boton5.className="div";
boton5.innerHTML=` 
<div class="text-buttons6">
<button id="ingles5" type="button"> EMPIEZA AHORA</button>
    </div>`;
    document.body.appendChild(boton5);

const piepage=document.createElement("footer")
piepage.className="footer";
piepage.innerHTML=`<div class="contenedor">
<div class="contenido"id="sobre1">
<div>
<div class="tipoFooter" >Sobre nosotros</div>
<ul>
<li><a href="#">Cursos</a></li>
<li><a href="#">Mision</a></li>
<li><a href="#">Metodo de enseñanza</a></li>
<li><a href="#">Eficacia</a></li>
<li><a href="#">Equipo</a></li>
<li><a href="#">Investigacion</a></li>
<li><a href="#">Empleo</a></li>
<li><a href="#">Guia para uso de marca</a></li>
<li><a href="#">Tienda</a></li>
<li><a href="#">Prensa</a></li>
<li><a href="#">Inversionistas</a></li>
<li><a href="#">Contactanos</a></li>
</ul>
</div>
</div>
<div class="contenido"id="sobre2">
<div>
<div class="tipoFooter" >Productos</div>
<ul>
<li><a href="#">Duolingo</a></li>
<li><a href="#">Duolingo for schools</a></li>
<li><a href="#">Duolingo English test</a></li>
<li><a href="#">Podcast</a></li>
<li><a href="#">Duolingo for Business</a></li>
<li><a href="#">Super Duolingo</a></li>
<li><a href="#">Regala Súper Duolingo</a></li>
</ul>
</div>
</div>
<div class="contenido" id="sobre3">
<div>
<div class="tipoFooter" >Aplicaciones</div>
<ul>
<li><a href="#">Duolingo para Android</a></li>
<li><a href="#">Duolingo para IOS</a></li>
</ul>
</div>
</div>
<div class="contenido" id="sobre4">
<div>
<div class="tipoFooter" >Ayuda y soporte</div>
<ul>
<li><a href="#">App para Duolingo</a></li>
<li><a href="#">Schools</a></li>
<li><a href="#">Duolingo English Test</a></li>
<li><a href="#">Estado</a></li>
</ul>
</div>
</div>
<div class="contenido"id="sobre5">
<div>
<div class="tipoFooter" >Terminos y privacidad</div>
<ul>
<li><a href="#">Normas de la comunidad</a></li>
<li><a href="#">Terminos</a></li>
<li><a href="#">Privacidad</a></li>
</ul>
</div>
</div>
<div class="contenido"id="sobre6">
<div>
<div class="tipoFooter" >Social</div>
<ul>
<li><a href="#">Blog</a></li>
<li><a href="#">Instagram</a></li>
<li><a href="#">Facebook</a></li>
<li><a href="#">Twitter</a></li>
<li><a href="#">Youtube</a></li>
</ul>
</div>
</div>
</div>
</div>
`;
document.body.appendChild(piepage);















