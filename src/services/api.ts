import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3001'
});

export const getMovies = () => api.get('/Movies');
export const getMoviesById = (id: string) => api.get(`/movies/${id}`);
export const createMovie = (movie: any) => api.post('/movies', movie);
export const updateMovie = (id: string, movie: any) => api.put(`/movies/${id}`, movie);
export const deleteMovie = (id: string) => api.delete(`/movie/${id}`);