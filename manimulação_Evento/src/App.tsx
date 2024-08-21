import React, { useState } from 'react';
import './App.css';

const EventHandlingExample: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const [inputValue1, setInputValue1] = useState<string>('');
  const [clickCount, setClickCount] = useState<number>(0);

// Função para manipular mudanças no campo de entrada
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleInputChange1 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue1(event.target.value);
  };

// Função para manipular cliques no botão
  const handleButtonClick = () => {
    setClickCount(clickCount + 1);
  };
  const handleButtonClick1 = () => {
    setClickCount(clickCount - 1);
  };

  return (
    <div>
      <h1>Exemplo de Manipulação de Eventos</h1>
      <div>
        <label htmlFor='inputField'>Digite algo: </label>
        <input
          type='text'
          id='inputField'
          value={inputValue}
          onChange={handleInputChange}
        />
        <p>Você digitou: {inputValue}</p>
      </div>
      <div>
        <label htmlFor='inputField'>Digite seu nome: </label>
        <input
          type='text'
          id='inputField'
          value={inputValue1}
          onChange={handleInputChange1}
        />
        <p>Seu nome é: {inputValue1}</p>
      </div>

      <div>
      <h3>
          <button onClick={handleButtonClick}>
            + 1 
          </button>
        </h3>
        <p>O botão foi clicado {clickCount} vezes</p>
      <h3>
        <button onClick={handleButtonClick1}>
          - 1 
        </button>
      </h3>
        </div>
    </div>
  );
};

function App() {
  return (
    <div className='App'>
      <EventHandlingExample />
    </div>
  );
}

export default App;