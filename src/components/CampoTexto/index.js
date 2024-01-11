import "./CampoTexto.css"

const CampoTexto = (props) => {

    const aoDigitado = (e) => {
        props.aoAlterado(e.target.value);
    }

    return (
        <div className="campo-texto">
            <label htmlFor="">
                {props.label}
            </label>
            <input 
                value={props.valor}
                onChange={aoDigitado}
                required={props.obrigatorio}
                type={`${props.type}`} 
                placeholder={props.placeholder} 
                name="" 
                id="" />
        </div>
    )
}

export default CampoTexto