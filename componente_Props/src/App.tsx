import React from 'react';
import './App.css';
// Definindo uma interface para as props
interface WelcomeProps {
  name: string;
  age: number;
  endereco: string;
  cidade: string;
}
// Componente funcional que utiliza props
const Welcome: React.FC<WelcomeProps> = ({ name, age, endereco, cidade}) => {
  return (
    <div>
      <h1>Hello, {name}!</h1>
      <h3>You are {age} years old.</h3>
      <h3>Seu endereço é {endereco}, {cidade}.</h3>
    </div>
  );
};

function App() {
  return (
    <div className='App'>
      <Welcome name='Alice' age={25} endereco='Avenida Saudade' cidade='Ipuã'/>
      <Welcome name='Bob' age={30} endereco='Rua da cachaça' cidade='Guaira'/>
      <Welcome name='Charlie' age={35} endereco='Avenida paixão' cidade='Franca'/>
    </div>
  );
}

export default App;