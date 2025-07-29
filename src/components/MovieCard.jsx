export default function MovieCard({ movie }) {
  return (
    <div className="card">
      <img
        src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/300x445?text=No+Image'}
        alt={movie.Title}
      />
      <div className="card-content">
        <h3 className="card-title">{movie.Title}</h3>
        <p className="card-year">{movie.Year}</p>
      </div>
    </div>
  );
}
