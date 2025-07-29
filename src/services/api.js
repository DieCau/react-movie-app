const API_URL = import.meta.env.VITE_API_URL;
const API_KEY = import.meta.env.VITE_API_KEY;

/**
 * Busca una película por ID
 * @param {string} imdbID
 */
export const fetchMovieById = async (imdbID) => {
  const response = await fetch(`${API_URL}?i=${imdbID}&apikey=${API_KEY}`);
  const data = await response.json();
  return data;
};

/**
 * Buscar películas por nombre
 * (esto lo dejamos por si querés mantener búsqueda por título)
 */
export const searchMovies = async (title = "batman") => {
  const response = await fetch(`${API_URL}?s=${title}&apikey=${API_KEY}`);
  const data = await response.json();
  return data.Search || [];
};