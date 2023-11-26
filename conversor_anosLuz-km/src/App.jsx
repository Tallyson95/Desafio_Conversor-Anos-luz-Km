import React, { useState } from 'react';

const ConversorAnosLuz = () => {
  const [anosLuzInput, setAnosLuzInput] = useState('');
  const [kmInput, setKmInput] = useState('');
  const [resultadoAnosLuz, setResultadoAnosLuz] = useState('');
  const [resultadoKm, setResultadoKm] = useState('');
  const [historico, setHistorico] = useState([]);

  const converterAnosLuzParaKm = () =>{
    const valorEmAnosLuz = parseFloat(anosLuzInput);

    if(valorEmAnosLuz >= 1){
      const distanciaLuzEmKm = 9.461 * Math.pow(10, 12);
      const distanciaEmKm = valorEmAnosLuz * distanciaLuzEmKm;
      const resultado = distanciaEmKm.toLocaleString(undefined, { maximumFractionDigits: 2 });

      setResultadoAnosLuz(resultado);
      setHistorico([...historico, { tipo: 'Anos-Luz para Km', resultado }]);
    }else{
      alert('Insira um valor maior ou igual a 1');
    }
  };

  const converterKmParaAnosLuz = () => {
    const valorEmKm = parseFloat(kmInput);

    if (valorEmKm >= 1) {
      const distanciaLuzEmKm = 9.461 * Math.pow(10, 12);
      const anosLuz = valorEmKm / distanciaLuzEmKm;
      const resultado = anosLuz.toExponential(2);

      setResultadoKm(resultado);
      setHistorico([...historico, { tipo: 'Km para Anos-Luz', resultado }]);
    } else {
      alert('Insira um valor maior ou igual a 1');
    }
  };

  return (
    <div id='inicio'>
      <link href="https://fonts.googleapis.com/css2?family=Coiny&family=Shrikhand&display=swap" rel="stylesheet"></link>
      <nav>
        <ul className='navBar'>
          <a href='#inicio' className='sobre1'><li>HOME</li></a>
          <a href="#sobre" className='sobre1'><li>SOBRE</li></a>
          <li className='sobre1'>LOGIN</li>
        </ul>
      </nav>
      <div className="card-container">
        <div className='card'>
          <h1 className='h1Style'>Conversor Anos-Luz/Km</h1>

          <label className='nomeInput' htmlFor="anos-luz">Insira o valor em anos-luz:</label><br></br>
          <input className='inputStyle'
            type="number" id="anos-luz" placeholder="Digite o valor em anos-luz" value={anosLuzInput}
            onChange={(e) => setAnosLuzInput(e.target.value)}
            min="1"
          /><br></br><br></br>

          <button onClick={converterAnosLuzParaKm}>Converter para Km</button><br></br><br></br>
          <h2 className='resultado'>Resultado:</h2>
          <div className='rst' id="resultado-anos-luz">Resultado: {resultadoAnosLuz} km</div>
        </div>

        <div className='card'>
          <h1 className='h1Style'>Conversor Km/Anos-Luz</h1>

          <label className='nomeInput' htmlFor="km">Insira o valor em quilômetros:</label><br></br>
          <input className='inputStyle'
            type="number" id="km" placeholder="Digite o valor em quilômetros" value={kmInput}
            onChange={(e) => setKmInput(e.target.value)}
            min="1"
          /><br></br><br></br>

          <button onClick={converterKmParaAnosLuz} >Converter para Anos-Luz</button><br></br><br></br>
          <h2 className='resultado'>Resultado:</h2>
          <div className='rst' id="resultado-km">Resultado com notação científica: {resultadoKm} anos-luz</div>
        </div>
      </div>
      <div className="table-container">
        <h2 className="txt2">Histórico de Conversões</h2>
        <table className="txt">
          <thead>
            <tr>
              <th>Tipo</th>
              <th>Resultado</th>
            </tr>
          </thead>
          <tbody>
            {historico.map((item, index) => (
              <tr key={index}>
                <td>{item.tipo}</td>
                <td>{item.resultado}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <section id='sobre'>
        <div>
          <h1 className='sobre'>SOBRE</h1>
          <p className='card2'>Me chamo Tallyson, graduando em Análise e Desenvolvimento de Sistemas pela Faculdade de Educação Tecnológica do Estado do Rio de Janeiro - FAETERJ Rio, tenho 27 anos e sou residente na zona norte do Rio de Janeiro. Estou em busca de uma oportunidade de estágio na área de Tecnologia da Informação. Minha paixão genuína envolve inovações tecnológicas, programação e filmes de ficção científica. <br></br>Tenho interesse em aprendizado contínuo, práticas esportivas como corrida e momentos de descontração.<br></br>
            Estou determinado a mergulhar de cabeça nessa oportunidade, e sem dúvida, dedicarei meu máximo para absorver conhecimentos ao longo do processo de estágio. <br></br>
            Amo a série da Netflix chamada "Dark", temáticas relacionadas a astrofísica e cyberpunk estão no meu coração. Esperto poder mostrar mais do Tallyson.
          </p>
        </div>
      </section>
    </div>
  );
};

export default ConversorAnosLuz;
