import React from 'react'
import Celdas from './Celdas'


const Tablero = (props) => {

    const Tablero = props.esquemaTableroParticipante.map((array, indexFila) => {
        return array.map((celda, indexCelda) => {
            return <Celdas 
            key={indexFila.toString() + indexCelda.toString()} 
            index={indexFila.toString() +indexCelda.toString()} 
            celdaValor={celda} 
            toggleClickCelda={props.toggleClickCelda} 
            apellido="player" colorGolpe={"golpeJugador"} 

            toggleJugadorActivo={props.toggleJugadorActivo}
            jugadorActivo={props.jugadorActivo}/>
        })
    })

    const tableroPC = props.esquemaTableroPC.map((array, indexFila) => {
        return array.map((celda, indexCelda) => {
            return <Celdas key={indexFila.toString() + indexCelda.toString()} 
            index={(indexFila.toString()) + (indexCelda.toString())} 
            celdaValor={celda} 
            toggleClickCelda={props.toggleClickCelda} 
            apellido="computer" colorGolpe={"golpePc"} 
            toggleJugadorActivo={props.toggleJugadorActivo}
            jugadorActivo={props.jugadorActivo}/>
        })
    })

    return (
        <>
        <div className="tableroJuego">
            <div className={props.jugadorActivo === true ? "Tablero" : "Tablero disabled"}>
                <div className={props.jugadorActivo === true ? "title turn" : "title"}>
                    <h3>Tablero Jugador</h3>
                </div>
            
            {Tablero}
            </div>
            <div className={props.jugadorActivo === false ? "tableroPC" : "tableroPC disabled"}>
                <div className={props.jugadorActivo === false ? "titulo turn" : "titulo"}>
                    <h3>Tablero PC</h3>
                </div>
            {tableroPC}
            </div>

        </div>

        </>
    )
}

export default Tablero