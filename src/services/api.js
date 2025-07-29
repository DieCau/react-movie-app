const API_URL = import.meta.env.VITE_API_URL;
const API_KEY = import.meta.env.VITE_API_KEY;

export async function fetchPopularMovies() {
  const res = await fetch(`${API_URL}/movie/popular?api_key=${API_KEY}`);
  if (!res.ok) throw new Error('Error al obtener los datos de la pelicula'); 
  const data = await res.json();
  return data.results;
}
