import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import { fetchMovies } from "../services/api";

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("batman");

  useEffect(() => {
    fetchMovies(search).then(setMovies);
  }, [search]);

  return (
    <div className="p-4 max-w-screen-lg mx-auto">
      <input
        type="text"
        placeholder="Buscar película..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full p-2 rounded-md border border-gray-300 mb-4"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {movies.length ? (
          movies.map((movie) => (
            <MovieCard key={movie.imdbID} movie={movie} />
          ))
        ) : (
          <p className="text-center col-span-full">No se encontraron resultados</p>
        )}
      </div>
    </div>
  );
}
