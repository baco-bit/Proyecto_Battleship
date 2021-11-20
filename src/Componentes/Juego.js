import React, { useState, useEffect } from "react";
import Tablero from "./Tablero";
import Celdas from "./Celdas";

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

  const [esquemaTableroParticipante, setEsquemaTableroParticipante] = useState(esquemaTableroJugador1);
  const [esquemaTableroPC, setEsquemaTableroPc] = useState(esquemaTableroPc);
  const [clickCelda, setClickCelda] = useState("");
  const [jugadorActivo, setJugadorActivo] = useState(true); // false yo, true pc

  const comprobarBarco = (valorCelda, toggleSetFallo, elGamer, posicion) => {
    let nuevoEsquemaTableroParticipante = [...esquemaTableroParticipante];
    let nuevoEsquemaTableroPC = [...esquemaTableroPC];
    console.log(valorCelda, "Valor Celda", elGamer, "Valor Disparo");
    if (valorCelda === 0) {
      if (elGamer === "jugador") {
        nuevoEsquemaTableroParticipante[posicion[0]][posicion[2]] = 3;
        console.log(nuevoEsquemaTableroParticipante);
        setEsquemaTableroParticipante(nuevoEsquemaTableroParticipante);
      } else if (elGamer === "Jugador2") {
        nuevoEsquemaTableroPC[posicion[0]][posicion[2]] = 3;
        console.log(nuevoEsquemaTableroPC);
        setEsquemaTableroPc(nuevoEsquemaTableroPC);
      }
      console.log("fallo en", elGamer);
      toggleSetFallo();
    } else if (valorCelda === 1) {
      console.log(elGamer, "le ha dado en el blanco", valorCelda);
      if (elGamer === "Jugador") {
        nuevoEsquemaTableroParticipante[posicion[0]][posicion[2]] = 2;
        console.log(nuevoEsquemaTableroParticipante, "tablero de jugador");
        setEsquemaTableroParticipante(nuevoEsquemaTableroParticipante);
      } else if (elGamer === "Pc") {
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
    elGamer,
    toggleSetContador,
    toggleJugadorActivo,
    jugadorActivo
  ) => {
    setClickCelda(posicion);
    console.log(posicion, valorCelda);
    comprobarBarco(valorCelda, toggleSetFallo, elGamer, posicion);
    toggleSetContador();
    toggleJugadorActivo(jugadorActivo);
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
        else {
          contador += 1
        }
      }
    }
    console.log(contador, "contador")
    let cambiarCelda = document.querySelectorAll("#celda")[posicion]
    console.log(valorCelda, "Valor celda aleatorio", cambiarCelda);

    while (valorCelda === 2 || valorCelda === 3) {
      let columnaAleatoria = Math.floor(Math.random() * 9);
      let filaAleatoria = Math.floor(Math.random() * 9);
      let posicion = parseInt(filaAleatoria.toString() + columnaAleatoria.toString());
      valorCelda = nuevoEsquemaTableroParticipante[filaAleatoria][columnaAleatoria];
      cambiarCelda = document.querySelectorAll("#celda")[posicion]
    }

    if (valorCelda === 0 || valorCelda === 3) {
      valorCelda = 3
      setEsquemaTableroParticipante(nuevoEsquemaTableroParticipante)
      cambiarCelda.classList.add("celda", "missed")
      cambiarCelda.innerHTML = "X"

    }
    else if (valorCelda === 1 || valorCelda === 2) {
      valorCelda = 2
      cambiarCelda.classList.add("celda", "hitPlayer")
      setEsquemaTableroParticipante(nuevoEsquemaTableroParticipante)

    }

    console.log(posicion, valorCelda, "posicion y valorCelda PC");
    console.log(esquemaTableroParticipante);
    toggleSetContador();

  };

  const [contador, setContador] = useState(0);
  const toggleSetContador = () => {
    setContador(contador + 1);
    console.log("Se ejecuta correctamente");
  };

  useEffect(() => {
    turnoPc();
    toggleJugadorActivo(jugadorActivo);
  }, [esquemaTableroPC]);

  const toggleJugadorActivo = (jugadorActivo) => {
    setJugadorActivo(!jugadorActivo);
    console.log(jugadorActivo, "Jugador Activo");
  };

  return (
    <div>
        
      <div className="container">

        <div className="instrucciones">
          <div className="tituloInstrucciones">
            <h4>Como jugar:</h4>
          </div>
          <div className="cuerpoInstrucciones">
            <ol>
              <li>
                Juego para 2 personas.
              </li>
              <li>
                Los barcos se generan de forma aleatoria.
              </li>
              <li>
                Si haces click en un lugar que ya hayas disparado, este se contara como jugada, asi que piensa antes de apuntar.
              </li>
              <li>
                Gana el que derribe primero los barcos del otro.
              </li>
            </ol>

          </div>
            

        </div>
        <div className="tableroTotal">
          <Tablero
            toggleJugadorActivo={toggleJugadorActivo}
            jugadorActivo={jugadorActivo}
            toggleClickCelda={toggleClickCelda}
            esquemaTableroParticipante={esquemaTableroParticipante}
            esquemaTableroPC={esquemaTableroPC}
          />
        </div>

      </div>
    </div>
  );
};

export default Juego;
