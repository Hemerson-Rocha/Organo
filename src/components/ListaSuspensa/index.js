import "./ListaSuspensa.css"

const ListaSuspensa = (props) => {

    const aoSelecionado = (e) => {
        props.aoAlterado(e.target.value)
    }

    return(
        <div className="lista-suspensa">
            <label>{props.label}</label>
            <select required={props.obrigatorio} value={props.valor} onChange={aoSelecionado}>
                <option></option>
                {props.itens.map((item) => 
                    <option key={item}>{item}</option>
                )}
            </select>
        </div>
    )
}

export default ListaSuspensa