import { useEffect, useState } from "react";
import { deleteMovie, getMovies } from "../services/api";
import { Link } from "react-router-dom";

interface Movie{
    id: string,
    name: string,
    description: string,
    author: string,
    duration: string,
    publishment_year: number
}
const MovieList = () => {
    const [movies, setMovies] = useState<Movie[]>([])

    useEffect(() =>{
        loadMovies()
    }, [])

    const loadMovies = async () => {
        const response = await getMovies()
        setMovies(response.data)
    }

    const HandleDelete = async(id:string) => {
        await deleteMovie(id)
        loadMovies()
    }

    return ( 
        <ul className="container">
            {movies.map((movie) => (
                <li key={movie.id}>
                    <p>{movie.name}, {movie.publishment_year}</p>
                    <p>{movie.author},</p>
                    <p>Duração: {movie.duration}</p>
                    <textarea value={movie.description} readOnly></textarea>
                    <div className="actions"><Link to={`/edit/${movie.id}`}>Editar</Link> <button onClick={() => confirm('Tem certeza que deseja deletar permanentemente esse registo?') && HandleDelete(movie.id) }  >Excluir</button></div>
                </li>
            ))}
        </ul>
     );
}
 
export default MovieList;