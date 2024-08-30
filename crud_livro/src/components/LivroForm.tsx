import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { createLivro, getLivroById, updateLivro } from '../services/api';

interface Livro {
    titulo: string;
    autor: string;
    anoPublicacao: number;
    genero: string;
    numPagina: number;
}

function LivroForm() {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const [livro, setLivro] = useState<Livro>({
        titulo: '',
        autor: '',
        anoPublicacao: 0,
        genero: '',
        numPagina: 0,
    });
    useEffect(() => {
        if (id) {
            loadLivro();
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id]);
    const loadLivro = async () => {
        try {
            const response = await getLivroById(id as string);
            setLivro(response.data);
        } catch (error) {
            console.error("Error loading livro data", error);
        }
    };
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLivro({
            ...livro,
            [e.target.name]: e.target.value,
        });
    };
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            if (id) {
                await updateLivro(id, livro);
            } else {
                await createLivro(livro);
            }
            navigate('/');
        } catch (error) {
            console.error("Error saving livro", error);
        }
    };
    return (
        <form onSubmit={handleSubmit}>
        <div>
            <label>Título</label>
            <input
                type="text"
                name="titulo"
                value={livro.titulo}
                onChange={handleChange}
            />
        </div>
        <div>
            <label>Autor</label>
            <input
                type="text"
                name="autor"
                value={livro.autor}
                onChange={handleChange}
            />
        </div>
        <div>
            <label>Ano da publicação</label>
            <input
                type="number"
                name="anoPublicacao"
                value={livro.anoPublicacao}
                onChange={handleChange}
            />
        </div>
        <div>
            <label>Gênero</label>
            <input
                type="text"
                name="genero"
                value={livro.genero}
                onChange={handleChange}
            />
        </div>
        <div>
            <label>Número de páginas</label>
            <input
                type="number"
                name="numPagina"
                value={livro.numPagina}
                onChange={handleChange}
            />
        </div>
        <br />
        <button type="submit">Salvar</button>
    </form>
);
}
export default LivroForm;