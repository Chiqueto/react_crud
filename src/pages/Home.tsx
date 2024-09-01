import { Link } from "react-router-dom";
import MovieList from "../_components/MovieList";

const Home = () => {
    return ( 
        <div>
            <h1>Lista de Filmes</h1>
            <Link to={`/add`}>Adicionar</Link>
            <MovieList/>
        </div>
     );
}
 
export default Home;