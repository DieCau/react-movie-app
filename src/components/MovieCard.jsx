export default function MovieCard({ movie }) {
  return (
    <div className="bg-white shadow rounded-lg overflow-hidden">
      <img
        src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/300x445?text=No+Image'}
        alt={movie.Title}
        className="w-full h-72 object-cover"
      />
      <div className="p-3">
        <h3 className="font-bold text-lg">{movie.Title}</h3>
        <p className="text-sm text-gray-500">{movie.Year}</p>
      </div>
    </div>
  );
}