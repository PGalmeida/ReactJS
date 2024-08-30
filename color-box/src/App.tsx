import "./App.css";
import { useState } from "react";
import ColorBox from "./components/ColorBox";
import ColorInput from "./components/ColorInput";
import BotaoInput from "./components/botaoinput";
import BotaoBox from "./components/BotaoBox";

function App() {
  const [color, setColor] = useState<string>("white");
  const [botao, setBotao] = useState<number>(200);
  return (
    <div className="App">
      <div>
        <h1>Mudar Cor de Fundo com useEffect</h1>
        <ColorInput color={color} setColor={setColor} />
        <ColorBox color={color} />
      </div>
      <div>
        <h1>Mudar o tamanho do Botão</h1>
        <BotaoInput botao={botao} setBotao={setBotao} />
        <BotaoBox botao={botao}/>
      </div>
    </div>
  );
}

export default App;
