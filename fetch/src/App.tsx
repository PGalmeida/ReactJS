import './App.css'; 
import UserList from './components/UserList'; 
import ToggleMessage from './components/ToggleMessage'; 

function App() { 
    return ( 
        <div className="App"> 
            <h1>Exemplo de React com TypeScript</h1> 
            <UserList /> 
            <ToggleMessage /> 
        </div> 
    ); 
} 

export default App; 