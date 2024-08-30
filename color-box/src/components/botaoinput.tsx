function BotaoInput({botao, setBotao }: {
    botao: number, setBotao: (value: number) => void;}) {
    return (
    <div>
        <label htmlFor="botaoInput">Digite o tamanho do Botão: </label>
        <input
        type="text"
        id="botaoInput"
        value={botao}
        onChange={(e) => setBotao(Number(e.target.value))}
        />
    </div>
    );
}

export default BotaoInput;
