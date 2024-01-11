import { useState } from "react"
import Botao from "../Botao"
import CampoTexto from "../CampoTexto"
import ListaSuspensa from "../ListaSuspensa"
import "./Formulario.css"

const Formulario = (props) => {

    const aoSalvar = (e) => {
        e.preventDefault();
        props.aoColaboradorCadastrado({
            nome, 
            cargo, 
            imagem, 
            time
        });
        
        setNome("");
        setCargo("");
        setImagem("");
        setTime("");
    }

    const [nome, setNome] = useState('');
    const [cargo, setCargo] = useState('');
    const [imagem, setImagem] = useState('');
    const [time, setTime] = useState('');

    return(
        <section className="formulario">
            <form action="" onSubmit={aoSalvar}>
            <h2>Preencha os dados para criar o card do colaborador.</h2>
            <CampoTexto 
                valor={nome}
                aoAlterado={setNome}
                obrigatorio={true}
                label="Nome" 
                type="text"
                placeholder="Digite seu nome" />
            <CampoTexto 
                valor={cargo}
                aoAlterado={setCargo}
                obrigatorio={true}
                label="Cargo" 
                type="text"
                placeholder="Digite seu cargo"/>
            <CampoTexto 
                valor={imagem}
                aoAlterado={setImagem}
                label="Imagem" 
                type="text"
                placeholder="informe o endereço da imagem"/>
            <ListaSuspensa 
                valor={time}
                aoAlterado={setTime}
                obrigatorio={true}
                label="Time"
                itens={props.times}/>
            <Botao>
                Criar card
            </Botao>
            </form>
        </section>
    )
}

export default Formulario