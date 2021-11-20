import React from 'react'
import Celdas from './Celdas'


const Tablero = (props) => {

    const Tablero = props.esquemaTableroParticipante.map((array, indexFila) => {
        return array.map((celda, indexCelda) => {
            return <Celdas
                key={indexFila.toString() + indexCelda.toString()}
                index={indexFila.toString() + indexCelda.toString()}
                celdaValor={celda}
                toggleClickCelda={props.toggleClickCelda}
                elGamer="jugador1" colorGolpe={"golpeJugador"}

                toggleJugadorActivo={props.toggleJugadorActivo}
                jugadorActivo={props.jugadorActivo} />
        })
    })

    const tablero2 = props.esquemaTableroPC.map((array, indexFila) => {
        return array.map((celda, indexCelda) => {
            return <Celdas key={indexFila.toString() + indexCelda.toString()}
                index={(indexFila.toString()) + (indexCelda.toString())}
                celdaValor={celda}
                toggleClickCelda={props.toggleClickCelda}
                elGamer="jugador2" colorGolpe={"golpeJugador2"}
                toggleJugadorActivo={props.toggleJugadorActivo}
                jugadorActivo={props.jugadorActivo} />
        })
    })

    return (
        <>
        
            <div className="tableroJuego">
            
                <div className={props.jugadorActivo === true ? "Tablero" : "Tablero disabled"}>
                    <div className={props.jugadorActivo === true ? "titulo turn" : "titulo"}>
                        <h3> Jugador 1 </h3>
                    </div>
                    <div className="diezxdiez">
                        {Tablero}
                    </div>
                </div>
                <div className={props.jugadorActivo === false ? "tablero2" : "tablero2 disabled"}>
                    <div className={props.jugadorActivo === false ? "titulo turn" : "titulo"}>
                        <h3> Jugador 2 </h3>
                    </div>
                    <div className="diezxdiez">
                        {tablero2}
                    </div>
                </div>
            </div>

        </>
    )
}

export default Tablero