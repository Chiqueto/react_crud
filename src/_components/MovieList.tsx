import { useEffect, useState } from "react";
import { getMovies } from "../services/api";

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

    return ( 
        <ul>
            {movies.map((movie) => (
                <li key={movie.id}>
                    <p>{movie.name}, {movie.publishment_year}</p>
                    <p>{movie.author}, {movie.duration}</p>
                    <textarea value={movie.description} readOnly></textarea>
                    <div><button>Editar</button> <button>Excluir</button></div>
                </li>
            ))}
            
        </ul>
     );
}
 
export default MovieList;