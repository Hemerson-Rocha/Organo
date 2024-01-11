import { useState } from 'react';
import Banner from './components/Banner';
import Formulario from './components/Formulario';
import Time from './components/Time';
import Footer from './components/Footer';


function App() {

  const times = [
    {
      nome:'Programação' ,
      corPrimaria:'#57C278',
      corSecondaria:'#D9F7E9'
    },
    {
      nome:'Front-End',
      corPrimaria:'#82CFFA',
      corSecondaria:'#E8F8FF'
    },
    {
      nome:'Data Science',
      corPrimaria:'#A6D157',
      corSecondaria:'#F0F8E2'
    },
    {
      nome:'Devops',
      corPrimaria:'#E06B69',
      corSecondaria:'#FDE7E8'
    },
    {
      nome:'UX e Design',
      corPrimaria:'#DB6EBF',
      corSecondaria:'#FAE9F5'
    },
    {
      nome:'Mobile',
      corPrimaria:'#FFBA05',
      corSecondaria:'#FFF5D9'
    },
    {
      nome:'Inovação e Gestão',
      corPrimaria:'#FF8A29',
      corSecondaria:'#FFEEDF'
    },
];

  const nomesTimes = times.map(time => time.nome)

  const [colaboradores, setColaboradores] = useState([]);

  const aoNovoColaboradorAdicionado = (colaborador) => {
    setColaboradores([...colaboradores, colaborador]);
  }

  return (
    <div className="App">
      <Banner />
      <Formulario 
        times={nomesTimes}
        aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}/>

      {times.map((time) => 
        <Time 
          key={time.nome} 
          nome={time.nome}
          corPrimaria={time.corPrimaria}
          corSecondaria={time.corSecondaria}
          colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}/>
      )}
      <Footer />
      {/* <img src="./img/fundo.png" alt="" /> */}
    </div>
  );
}

export default App;
