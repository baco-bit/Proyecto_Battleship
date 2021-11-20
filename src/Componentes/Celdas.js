import React, {useState} from 'react'


const Celdas = (props) => {
    const valorCelda = (props.celdaValor)
    const [missed, setMissed] = useState(false)
    const colorGolpe = props.colorGolpe
    const toggleSetMissed = () => {
        if (valorCelda === 0){
            setMissed(true)
        } else if (valorCelda !== 0){
            setMissed(false)
        }
    }



const [Contador, setContador] = useState(0)
const toggleSetContador = ()=>{
    setContador(Contador+1)
    console.log("Se ejecuta correctamente")
}

const jugadorActivo = props.jugadorActivo


    return (
        <div id="celda" className={Contador===0 ? "celda " : (missed ? "celda missed" : "celda "+ colorGolpe)} 
        onClick={(e)=> props.toggleClickCelda(props.index, valorCelda, toggleSetMissed, props.apellido,toggleSetContador, props.toggleJugadorActivo, jugadorActivo, props.colorGolpe)}>
            {missed === true ? "X" : ""}
        </div>
    )
}

export default Celdas