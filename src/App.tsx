import Pencil from './assets/pencil.svg';
import { useState } from 'react';
import './App.css';

const App = () => {
  const [colorRed, setColorRed] = useState<string>('94');
  const [colorGreen, setColorGreen] = useState<string>('121');
  const [colorBlue, setColorBlue] = useState<string>('184');

  return (
    <>
      <h1>Gerador RGB</h1>
      <section className="datetime">
        <h3><img src={Pencil} alt="caneta" /> {new Date().toLocaleDateString()} - {`${new Date().getHours()}:${(new Date().getMinutes() < 10 ? '0' : '') + new Date().getMinutes()}`}</h3>
      </section>
      <section className="container commands">
        <section className="inputs-ranger">
          <div className="input-ranger red">
            <input type="range" min="0" max="255" name="red" id="red" onChange={(e) => setColorRed(e.target.value)} />
            <h1>red: {colorRed}</h1>
          </div>
          <div className="input-ranger green">
            <input type="range" min="0" max="255" name="green" id="green" onChange={(e) => setColorGreen(e.target.value)} />
            <h1>green: {colorGreen}</h1>
          </div>
          <div className="input-ranger blue">
            <input type="range" min="0" max="255" name="blue" id="blue" onChange={(e) => setColorBlue(e.target.value)} />
            <h1>blue: {colorBlue}</h1>
          </div>
        </section>
        <div id="color" style={{ backgroundColor: `rgb(${colorRed}, ${colorGreen}, ${colorBlue})` }}></div>
        <p>RGB: {`(${colorRed}, ${colorGreen}, ${colorBlue})`}</p>
      </section>
      <h4>Desenvolvido por <a href="https://matheusdsilva01.github.io/portfolio/" target="_blank" rel="noopener noreferrer">Matheus Silva &#128150;</a></h4>
    </>
  )
}

export default App;