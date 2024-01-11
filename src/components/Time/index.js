import './Time.css'
import Colaborador from '../Colaborador';

const Time = (props) => {

    const corPrimaria = { borderColor:props.corPrimaria }
    const corSecondaria = { backgroundColor:props.corSecondaria }

    return(
        props.colaboradores.length > 0 && 
        <section className='time' style={corSecondaria}>
            <h3 style={corPrimaria}>{props.nome}</h3>
            <div className="colaboradores">
            {props.colaboradores.map(colaborador =>
                <Colaborador key={colaborador.nome} colaborador={colaborador} corDeFundo={props.corPrimaria}/>
            )}
            </div>
        </section>
    )
}

export default Time;