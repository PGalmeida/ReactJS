import { useEffect, useState } from "react";

function BotaoTam({ botao }: { botao: number }) {
    const [tamanho, setTamanho] = useState<number>(200);
    useEffect(() => {
        setTamanho(botao);
    }, [botao]);
    return (
    <div
        style={{
        backgroundColor: "white",
        width: tamanho,
        height: tamanho,
        border: "1px solid black",
        }}
    >
        <p style={{ textAlign: "center", lineHeight: "200px", color: "black" }}>
        Tamanho Atual: {tamanho}
        </p>
    </div>
    );
}

export default BotaoTam;
