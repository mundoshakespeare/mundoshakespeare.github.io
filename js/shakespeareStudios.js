//let iconShakespeare = document.querySelector('.iconShakespeare');

// Botones para controlar vista de las sesiones en shakespeare Studios
let buttonFirst = document.getElementById('first');
let buttonSecond = document.getElementById('second');
let buttonThird = document.getElementById('third');
let buttonForward = document.getElementById('forward');
let buttonBackward = document.getElementById('backward');
let sesion_uno = true;
let sesion_dos = false;
let sesion_tres = false;
let counter = 0;



buttonForward.addEventListener('click', function(){
  if(counter >=0 && counter < 3)
  {
    counter = counter + 1;
    change();
  }
});

buttonBackward.addEventListener('click', function(){
  if(counter > 0 && counter < 4)
  {
    counter = counter - 1;
    change();
  }
});



buttonFirst.addEventListener('click', function() {
  document.getElementById('sesion1').style.display = 'initial';
  document.getElementById('sesion2').style.display = 'none';
  document.getElementById('sesion3').style.display = 'none';
  sesion_uno = true;
  sesion_dos = false;
  sesion_tres = false;
  counter = 0;
  change();
});

buttonSecond.addEventListener('click', function() {
  document.getElementById('sesion1').style.display = 'none';
  document.getElementById('sesion2').style.display = 'initial';
  document.getElementById('sesion3').style.display = 'none';
  sesion_uno = false;
  sesion_dos = true;
  sesion_tres = false;
  counter = 0;
  change();
});

buttonThird.addEventListener('click', function() {
  document.getElementById('sesion1').style.display = 'none';
  document.getElementById('sesion2').style.display = 'none';
  document.getElementById('sesion3').style.display = 'initial';
  sesion_uno = false;
  sesion_dos = false;
  sesion_tres = true;
  counter = 0;
  change();
});
//funcion para cambiar el contenido que se presenta dentro de cada sesión 1, 2 y 3

let primero = document.querySelectorAll('.contenedor-first');
let segundo = document.querySelectorAll('.contenedor-second');
let tercero = document.querySelectorAll('.contenedor-third');
let cuarto = document.querySelectorAll('.contenedor-fourth');

function change(){

  if (counter === 0){
    primero[0].style.display = 'initial';
    segundo[0].style.display = 'none';
    tercero[0].style.display = 'none';
    cuarto[0].style.display = 'none';

    primero[1].style.display = 'initial';
    segundo[1].style.display = 'none';
    tercero[1].style.display = 'none';
    cuarto[1].style.display = 'none';

    primero[2].style.display = 'initial';
    segundo[2].style.display = 'none';
    tercero[2].style.display = 'none';
    cuarto[2].style.display = 'none';

    document.querySelector('.popup2').style.visibility = "visible";
  }

  if (counter === 1){
    primero[0].style.display = 'none';
    segundo[0].style.display = 'initial';
    tercero[0].style.display = 'none';
    cuarto[0].style.display = 'none';

    primero[1].style.display = 'none';
    segundo[1].style.display = 'initial';
    tercero[1].style.display = 'none';
    cuarto[1].style.display = 'none';

    primero[2].style.display = 'none';
    segundo[2].style.display = 'initial';
    tercero[2].style.display = 'none';
    cuarto[2].style.display = 'none';

    document.querySelector('.popup2').style.visibility = "visible";
  }

  if (counter === 2){
    primero[0].style.display = 'none';
    segundo[0].style.display = 'none';
    tercero[0].style.display = 'initial';
    cuarto[0].style.display = 'none';

    primero[1].style.display = 'none';
    segundo[1].style.display = 'none';
    tercero[1].style.display = 'initial';
    cuarto[1].style.display = 'none';

    primero[2].style.display = 'none';
    segundo[2].style.display = 'none';
    tercero[2].style.display = 'initial';
    cuarto[2].style.display = 'none';

    document.querySelector('.popup2').style.visibility = "visible";

  }

  if (counter === 3){
    primero[0].style.display = 'none';
    segundo[0].style.display = 'none';
    tercero[0].style.display = 'none';
    cuarto[0].style.display = 'initial';

    primero[1].style.display = 'none';
    segundo[1].style.display = 'none';
    tercero[1].style.display = 'none';
    cuarto[1].style.display = 'initial';

    primero[2].style.display = 'none';
    segundo[2].style.display = 'none';
    tercero[2].style.display = 'none';
    cuarto[2].style.display = 'initial';

    document.querySelector('.popup2').style.visibility = "visible";

  }

}
/*
function changed(){
if (counter === 0){
  document.querySelector('.contenedor-first').style.display = 'inline-block';
  document.querySelector('.contenedor-second').style.display = 'none';
  document.querySelector('.contenedor-third').style.display = 'none';
  document.querySelector('.contenedor-fourth').style.display = 'none';

}

if (counter === 1){
  document.querySelector('.contenedor-first').style.display = 'none';
  document.querySelector('.contenedor-second').style.display = 'inline-block';
  document.querySelector('.contenedor-third').style.display = 'none';
  document.querySelector('.contenedor-fourth').style.display = 'none';

}

if (counter === 2){
  document.querySelector('.contenedor-first').style.display = 'none';
  document.querySelector('.contenedor-second').style.display = 'none';
  document.querySelector('.contenedor-third').style.display = 'inline-block';
  document.querySelector('.contenedor-fourth').style.display = 'none';
}

if (counter === 3){
  document.querySelector('.contenedor-first').style.display = 'none';
  document.querySelector('.contenedor-second').style.display = 'none';
  document.querySelector('.contenedor-third').style.display = 'none';
  document.querySelector('.contenedor-fourth').style.display = 'inline-block';
}
return;
}

function changeDos(){
if (counter === 0){
  document.querySelector('.contenedor-first-s2').style.display = 'inline-block';
  document.querySelector('.contenedor-second-s2').style.display = 'none';
  document.querySelector('.contenedor-third-s2').style.display = 'none';
  document.querySelector('.contenedor-fourth-s2').style.display = 'none';

}

if (counter === 1){
  document.querySelector('.contenedor-first-s2').style.display = 'none';
  document.querySelector('.contenedor-second-s2').style.display = 'inline-block';
  document.querySelector('.contenedor-third-s2').style.display = 'none';
  document.querySelector('.contenedor-fourth-s2').style.display = 'none';
}

if (counter === 2){
  document.querySelector('.contenedor-first-s2').style.display = 'none';
  document.querySelector('.contenedor-second-s2').style.display = 'none';
  document.querySelector('.contenedor-third-s2').style.display = 'inline-block';
  document.querySelector('.contenedor-fourth-s2').style.display = 'none';
}

if (counter === 3){
  document.querySelector('.contenedor-first-s2').style.display = 'none';
  document.querySelector('.contenedor-second-s2').style.display = 'none';
  document.querySelector('.contenedor-third-s2').style.display = 'none';
  document.querySelector('.contenedor-fourth-s2').style.display = 'inline-block';
}
return;
}*/

// Interaccion con la burbuja de texto de Julieta
let julietaSpeech = document.getElementById('julieta');

julietaSpeech.addEventListener('mouseover', function(){
  document.querySelector('.popup').style.visibility = "hidden";
  document.getElementById('julietaSpeech').style.visibility = "visible";
});

julietaSpeech.addEventListener('mouseout', function(){
  document.getElementById('julietaSpeech').style.visibility = "hidden";
});

// Interaccion con la burbuja de texto de Romeo
let romeoSpeech = document.getElementById('romeo');


romeoSpeech.addEventListener('mouseover', function(){
  if (sesion_uno === true)
  {
    if (counter === 0){
      document.getElementById('romeoSpeech').style.visibility = "visible";
      document.getElementById('romeoSpeech2').style.visibility = "hidden";
      document.getElementById('romeoSpeech3').style.visibility = "hidden";
      document.getElementById('romeoSpeech4').style.visibility = "hidden";
      document.querySelector('.popup2').style.visibility = "hidden";
    }
    else if (counter === 1){
      document.getElementById('romeoSpeech').style.visibility = "hidden";
      document.getElementById('romeoSpeech2').style.visibility = "visible";
      document.getElementById('romeoSpeech3').style.visibility = "hidden";
      document.getElementById('romeoSpeech4').style.visibility = "hidden";
      document.querySelector('.popup2').style.visibility = "hidden";
    }
    else if (counter === 2){
      document.getElementById('romeoSpeech').style.visibility = "hidden";
      document.getElementById('romeoSpeech2').style.visibility = "hidden";
      document.getElementById('romeoSpeech3').style.visibility = "visible";
      document.getElementById('romeoSpeech4').style.visibility = "hidden";
      document.querySelector('.popup2').style.visibility = "hidden";
    }
    else if (counter === 3){
      document.getElementById('romeoSpeech').style.visibility = "hidden";
      document.getElementById('romeoSpeech2').style.visibility = "hidden";
      document.getElementById('romeoSpeech3').style.visibility = "hidden";
      document.getElementById('romeoSpeech4').style.visibility = "visible";
      document.querySelector('.popup2').style.visibility = "hidden";
    }
}

else if (sesion_dos === true) {
      if (counter === 0){
        document.getElementById('romeoSpeech5').style.visibility = "visible";
        document.getElementById('romeoSpeech6').style.visibility = "hidden";
        document.getElementById('romeoSpeech7').style.visibility = "hidden";
        document.getElementById('romeoSpeech8').style.visibility = "hidden";
        document.querySelector('.popup2').style.visibility = "hidden";
      }
      else if (counter === 1){
        document.getElementById('romeoSpeech5').style.visibility = "hidden";
        document.getElementById('romeoSpeech6').style.visibility = "visible";
        document.getElementById('romeoSpeech7').style.visibility = "hidden";
        document.getElementById('romeoSpeech8').style.visibility = "hidden";
        document.querySelector('.popup2').style.visibility = "hidden";
      }
      else if (counter === 2){
        document.getElementById('romeoSpeech5').style.visibility = "hidden";
        document.getElementById('romeoSpeech6').style.visibility = "hidden";
        document.getElementById('romeoSpeech7').style.visibility = "visible";
        document.getElementById('romeoSpeech8').style.visibility = "hidden";
        document.querySelector('.popup2').style.visibility = "hidden";
      }
      else if (counter === 3){
        document.getElementById('romeoSpeech5').style.visibility = "hidden";
        document.getElementById('romeoSpeech6').style.visibility = "hidden";
        document.getElementById('romeoSpeech7').style.visibility = "hidden";
        document.getElementById('romeoSpeech8').style.visibility = "visible";
        document.querySelector('.popup2').style.visibility = "hidden";
      }
}
else if (sesion_tres === true){
      if (counter === 0){
        document.getElementById('romeoSpeech9').style.visibility = "visible";
        document.getElementById('romeoSpeech10').style.visibility = "hidden";
        document.getElementById('romeoSpeech11').style.visibility = "hidden";
        document.querySelector('.popup2').style.visibility = "hidden";
      }
      else if (counter === 1){
        document.getElementById('romeoSpeech9').style.visibility = "hidden";
        document.getElementById('romeoSpeech10').style.visibility = "visible";
        document.getElementById('romeoSpeech11').style.visibility = "hidden";
        document.querySelector('.popup2').style.visibility = "hidden";
      }
      else if (counter === 2){
        document.getElementById('romeoSpeech9').style.visibility = "hidden";
        document.getElementById('romeoSpeech10').style.visibility = "hidden";
        document.getElementById('romeoSpeech11').style.visibility = "visible";
        document.querySelector('.popup2').style.visibility = "hidden";
      }
      else if (counter === 3){
        document.getElementById('romeoSpeech9').style.visibility = "hidden";
        document.getElementById('romeoSpeech10').style.visibility = "hidden";
        document.getElementById('romeoSpeech11').style.visibility = "hidden";
        document.querySelector('.popup2').style.visibility = "hidden";
      }
}

});

romeoSpeech.addEventListener('mouseout', function(){
  document.getElementById('romeoSpeech').style.visibility = "hidden";
  document.getElementById('romeoSpeech2').style.visibility = "hidden";
  document.getElementById('romeoSpeech3').style.visibility = "hidden";
  document.getElementById('romeoSpeech4').style.visibility = "hidden";
  document.getElementById('romeoSpeech5').style.visibility = "hidden";
  document.getElementById('romeoSpeech6').style.visibility = "hidden";
  document.getElementById('romeoSpeech7').style.visibility = "hidden";
  document.getElementById('romeoSpeech8').style.visibility = "hidden";
  document.getElementById('romeoSpeech9').style.visibility = "hidden";
  document.getElementById('romeoSpeech10').style.visibility = "hidden";
  document.getElementById('romeoSpeech11').style.visibility = "hidden";

});
