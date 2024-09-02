import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { createMovie, getMoviesById, updateMovie } from "../services/api";

interface Movie{
    name: string,
    description: string,
    author: string,
    duration: string,
    publishment_year: number
}


const MovieForm = () => {
    const {id} = useParams<{id: string}>()
    const navigate = useNavigate();
    const [movie, setMovie] = useState<Movie>({
        name: '',
        description: '',
        author: '',
        duration: '',
        publishment_year: 0,
    })

    useEffect(() => {
        if (id) {
            loadMovie();
        }
    }, [id])

    const loadMovie = async () => {
        try{
            const response = await getMoviesById(id as string)
            setMovie(response.data)
        } catch(error){
            console.error("Error loading movie data", error)
        }
    }

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setMovie({
            ...movie,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async(e:React.FormEvent) => {
        e.preventDefault()
        try{
            if(!movie.name || !movie.description || !movie.author || !movie.duration || !movie.publishment_year) {
                alert('Preencha todos os campos')
            }else{
                if(id)  {
                    await updateMovie(id, movie)
                }else {
                    await createMovie(movie)
                }
                navigate('/')
            }
        } catch(error) {
            console.error('Error saving movie', error)
        }

    }

    return ( 
    <div className="container">
        <form  onSubmit={handleSubmit}>
         <Link className="back" to={'/'}>Voltar</Link>   
          <label htmlFor="name">Nome do filme</label>
          <input type="text" name="name" id="name" value={movie.name} onChange={handleChange}/>
          <label htmlFor="description">Descrição</label>
          <input name="description" id="description" value={movie.description} onChange={handleChange}></input>
          <label htmlFor="author">Autor</label>
          <input type="text" name="author" id="author" value={movie.author} onChange={handleChange}/>
          <label htmlFor="duration">Duração do filme</label>
          <input type="time" name="duration" id="duration" value={movie.duration} onChange={handleChange}/>
          <label htmlFor="publishment_year">Ano de publicação</label>
          <input type="number" name="publishment_year" id="publishment_year" value={movie.publishment_year} onChange={handleChange}/>
          <button type="submit"> {id ? 'Editar' : 'Adicionar'} </button>
        </form>
    </div> );
}
 
export default MovieForm;