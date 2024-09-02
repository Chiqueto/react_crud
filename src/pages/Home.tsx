import { Link } from "react-router-dom";
import MovieList from "../_components/MovieList";

const Home = () => {
    return ( 
        <div className="container">
            <div className="header">
                <h1>Lista de Filmes</h1>
                <Link className="adicionar" to={`/add`}>Adicionar</Link>
            </div>
            <MovieList />
        </div>
    );
}

export default Home;
