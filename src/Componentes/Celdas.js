import React, {useState} from 'react'


const Celdas = (props) => {
    const valorCelda = (props.celdaValor)
    const [fallo, setFallo] = useState(false)
    const colorGolpe = props.colorGolpe
    const toggleSetFallo = () => {
        if (valorCelda === 0){
            setFallo(true)
        } else if (valorCelda !== 0){
            setFallo(false)
        }
    }



const [Contador, setContador] = useState(0)
const toggleSetContador = ()=>{
    setContador(Contador+1)
    console.log("Se ejecuta correctamente")
}

const jugadorActivo = props.jugadorActivo


    return (
        <div id="celda" className={Contador===0 ? "celda " : (fallo ? "celda fallo" : "celda "+ colorGolpe)} 
        onClick={(e)=> props.toggleClickedCelda(props.index, valorCelda, toggleSetFallo, props.apellido,toggleSetContador, props.toggleJugadorActivo, jugadorActivo, props.colorGolpe)}>
            {fallo === true ? "X" : ""}
        </div>
    )
}

export default Celdas