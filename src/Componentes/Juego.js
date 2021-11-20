import React, { useState, useEffect } from "react";
import Tablero from "./Tablero";

const Juego = () => {

  let esquemaTableroJugador1 = [
    [1, 1, 1, 1, 1, 0, 0, 0, 0, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 0, 0, 1, 1, 0, 0, 0, 0, 0],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
  ];

  let esquemaTableroPc = [
    [0, 0, 1, 0, 0, 0, 1, 1, 1, 1],
    [0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 1, 0, 0, 1, 0, 0, 0, 0],
    [0, 0, 1, 0, 0, 1, 0, 0, 0, 0],
    [0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 1, 1, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
  ];

  // randomizar en cada juego?

  const [esquemaTableroParticipante, setEsquemaTableroParticipante] = useState(esquemaTableroJugador1);
  const [esquemaTableroPC, setEsquemaTableroPc] = useState(esquemaTableroPc);
  const [clickCelda, setClickCelda] = useState("");
  const [jugadorActivo, setJugadorActivo] = useState(true); // false yo, true pc

  const comprobarBarco = (valorCelda, toggleSetFallo, apellido, posicion) => {
    let nuevoEsquemaTableroParticipante = [...esquemaTableroParticipante];
    let nuevoEsquemaTableroPC = [...esquemaTableroPC];
    console.log(valorCelda, "Valor Celda", apellido, "Valor Disparo");
    if (valorCelda === 0) {
      if (apellido === "jugador") {
        nuevoEsquemaTableroParticipante[posicion[0]][posicion[2]] = 3;
        console.log(nuevoEsquemaTableroParticipante);
        setEsquemaTableroParticipante(nuevoEsquemaTableroParticipante);
      } else if (apellido === "Pc") {
        nuevoEsquemaTableroPC[posicion[0]][posicion[2]] = 3;
        console.log(nuevoEsquemaTableroPC);
        setEsquemaTableroPc(nuevoEsquemaTableroPC);
      }
      console.log("fallo en", apellido);
      toggleSetFallo();
    } else if (valorCelda === 1) {
      console.log(apellido, "le ha dado en", valorCelda);
      if (apellido === "Jugador") {
        nuevoEsquemaTableroParticipante[posicion[0]][posicion[2]] = 2;
        console.log(nuevoEsquemaTableroParticipante, "tablero de jugador");
        setEsquemaTableroParticipante(nuevoEsquemaTableroParticipante);
      } else if (apellido === "Pc") {
        nuevoEsquemaTableroPC[posicion[0]][posicion[2]] = 2;
        console.log(nuevoEsquemaTableroPC, "tablero Pc");
        setEsquemaTableroPc(nuevoEsquemaTableroPC);
      }
    }
  };

  const toggleClickCelda = (
    posicion,
    valorCelda,
    toggleSetFallo,
    apellido,
    toggleSetContador,
    togglejugadorActivo,
    jugadorActivo
  ) => {
    setClickCelda(posicion);
    console.log(posicion, valorCelda);
    comprobarBarco(valorCelda, toggleSetFallo, apellido, posicion);
    toggleSetContador();
    togglejugadorActivo(jugadorActivo);
  };

  const turnoPc = () => {
    let columnaAleatoria = Math.floor(Math.random() * 9);
    let filaAleatoria = Math.floor(Math.random() * 9);
    let posicion = parseInt(filaAleatoria.toString() + columnaAleatoria.toString());
    let posicionNueva = null;
    let contador = 0
    let nuevoEsquemaTableroParticipante = [...esquemaTableroParticipante];
    let valorCelda = nuevoEsquemaTableroParticipante[filaAleatoria][columnaAleatoria];
    console.log(posicion);
    for (let x = 0; x < nuevoEsquemaTableroParticipante.length; x++) {
      for (let y = 0; y < nuevoEsquemaTableroParticipante.length[x]; y++) {
          if (x === posicion[0] && y === posicion[1]) {
            posicionNueva = contador
            valorCelda = nuevoEsquemaTableroParticipante[posicionNueva]
            console.log(posicionNueva, "posicion nueva");
              
          }
          else{
            contador += 1
          }
          }
      }
      console.log(contador, "contador")
    let cambiarCelda = document.querySelectorAll("#celda")[posicion]
    console.log(valorCelda, "Valor celda aleatorio", cambiarCelda);

    while (valorCelda === 2 || valorCelda === 3){
      let columnaAleatoria = Math.floor(Math.random() * 9);
      let filaAleatoria = Math.floor(Math.random() * 9);
      let posicion = parseInt(filaAleatoria.toString() + columnaAleatoria.toString());
      valorCelda = nuevoEsquemaTableroParticipante[filaAleatoria][columnaAleatoria];
      cambiarCelda = document.querySelectorAll("#celda")[posicion]
    }
    
    if (valorCelda === 0 || valorCelda === 3){
      valorCelda = 3
      setEsquemaTableroParticipante(nuevoEsquemaTableroParticipante)
      cambiarCelda.classList.add("celda", "missed")
      cambiarCelda.innerHTML = "X"
      
    }
    else if(valorCelda === 1 || valorCelda === 2){
      valorCelda = 2
      cambiarCelda.classList.add("celda", "hitPlayer")
      setEsquemaTableroParticipante(nuevoEsquemaTableroParticipante)
      
    }
    
    console.log(posicion, valorCelda, "posicion y valorCelda PC");
    console.log(esquemaTableroParticipante);
    toggleSetContador();

    //MODIFICAR TABLEROOOO
  };

  const [contador, setContador] = useState(0);
  const toggleSetContador = () => {
    setContador(contador + 1);
    console.log("Se ejecuta correctamente");
  };

  useEffect(() => {
      turnoPc();
      togglejugadorActivo(jugadorActivo);
      romper() 
  }, [esquemaTableroPC]);

  const togglejugadorActivo = (jugadorActivo) => {
    //OK
    setJugadorActivo(!jugadorActivo);
    console.log(jugadorActivo, "Jugador Activo");
  };
  function romper(){
    console.log("==============================");
  }
  return (
    <div>
      <div className="container">
        <h1>Battleship</h1>
        <div className="board">
          <Tablero
            togglejugadorActivo={togglejugadorActivo}
            jugadorActivo={jugadorActivo}
            toggleClickCelda={toggleClickCelda}
            esquemaTableroParticipante={esquemaTableroParticipante}
            esquemaTableroPC={esquemaTableroPC}
          />
        </div>
      </div>
      <div className="instrucciones">
        <h4>Como jugar:</h4>
        <p>Haz clic en el tablero de la computadora e intenta hundir todos sus barcos, antes de que ella hunda con los tuyos!</p>
      </div>
    </div>
  );
};

export default Juego;
