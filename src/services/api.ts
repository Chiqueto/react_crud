import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3001'
});

export const getMovies = () => api.get('/Movies');
export const getMoviesById = (id: string) => api.get(`/Movies/${id}`);
export const createMovie = (movie: any) => api.post('/Movies', movie);
export const updateMovie = (id: string, movie: any) => api.put(`/Movies/${id}`, movie);
export const deleteMovie = (id: string) => api.delete(`/Movies/${id}`);