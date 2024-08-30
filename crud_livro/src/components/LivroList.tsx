import { useEffect, useState } from 'react';
import { getLivros, deleteLivro } from '../services/api';
import { Link } from 'react-router-dom';

interface Livro {
    id: string;
    titulo: string;
    autor: string;
    anoPublicacao: number;
    genero: string;
    numPagina: number;
}

function LivroList() {
    const [livros, setLivros] = useState<Livro[]>([]);
    useEffect(() => {
        loadLivros();
    }, []);
    const loadLivros = async () => {
        const response = await getLivros();
        setLivros(response.data);
    }; const handleDelete = async (id: string) => {
        await deleteLivro(id);
        loadLivros();
    };
    return (
        <div>
            <h1>Lista de livros</h1>
            <Link to="/add">Adicionar um livro</Link>
            <ul>
                {livros.map((livro) => (
                    <li key={livro.id}>
                        {livro.titulo} - {livro.autor} - {livro.anoPublicacao} - {livro.genero} - {livro.numPagina} - {" "} 
                        <button><Link to={`/edit/${livro.id}`}>Editar</Link></button>    
                        {' '}
                        <button onClick={() => handleDelete(livro.id)}>Excluir</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default LivroList;