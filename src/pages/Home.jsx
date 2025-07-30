import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import { searchMovies } from "../services/api";


export default function Home() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("batman");

  useEffect(() => {
    searchMovies(search).then(setMovies);
  }, [search]);

  return (
    <div className="container">
      <input
        type="text"
        placeholder="Buscar película..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="grid">
        {movies.length ? (
          movies.map((movie) => (
            <MovieCard key={movie.imdbID} movie={movie} />
          ))
        ) : (
          <p>No se encontraron resultados</p>
        )}
      </div>
    </div>
  );
}
