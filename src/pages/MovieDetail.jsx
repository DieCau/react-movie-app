import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieById } from "../services/api";

export default function MovieDetail() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetchMovieById(id).then(setMovie);
  }, [id]);

  if (!movie) return <p className="container">Cargando...</p>;

  return (
    <div className="container">
      <h2>{movie.Title}</h2>
      <img src={movie.Poster} alt={movie.Title} style={{ maxWidth: "300px" }} />
      <p><strong>Año:</strong> {movie.Year}</p>
      <p><strong>Género:</strong> {movie.Genre}</p>
      <p><strong>Director:</strong> {movie.Director}</p>
      <p><strong>Actores:</strong> {movie.Actors}</p>
      <p><strong>Sinopsis:</strong> {movie.Plot}</p>
    </div>
  );
}
