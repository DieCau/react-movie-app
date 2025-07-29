const API_URL = import.meta.env.VITE_API_URL;
const API_KEY = import.meta.env.VITE_API_KEY;

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0Mzk1YmM4NDNiZDc5YzZjMjBiZjBlZjIwMjEzY2Y3OSIsIm5iZiI6MTYyNDc2MTI1My4wNDEsInN1YiI6IjYwZDdlM2E1Y2M5NjgzMDA3NmQxNWY2YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.LBA7gJ9VZku7igohtcXP4MahP8gFwazdY-f9AEXf8vs'
  }
};

export async function fetchMovies() {
  // api_key=${API_KEY}
    // /movie/popular?language=en-US&page=1', options
  const res = await fetch(`${API_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`, options);
  if (!res.ok) throw new Error('Error al obtener los datos de la pelicula');
  console.log(res) 
  const data = await res.json();
  return data.results;
}
