
function MovieCard({ movie }) {
    return (
        <div className="w-full max-w-4xl mx-auto p-4 sm:p-6 bg-white rounded-xl shadow-lg border border-gray-200">
            <div className="flex flex-col sm:flex-row gap-5">

                {/* Poster */}
                <img
                    src={movie.Poster}
                    alt={movie.Title}
                    className="w-full sm:w-48 h-64 sm:h-72 object-cover rounded-lg"
                />

                {/* Main Details */}
                <div className="flex-1 min-w-0 space-y-3">
                    <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                        {movie.Title}
                    </h2>

                    <p className="text-sm text-gray-500">
                        {movie.Year} · {movie.Rated} · {movie.Runtime}
                    </p>

                    <p><strong>Genre:</strong> {movie.Genre}</p>
                    <p><strong>Director:</strong> {movie.Director}</p>
                    <p><strong>Actors:</strong> {movie.Actors}</p>

                    <p className="text-sm text-gray-700 leading-relaxed">
                        <strong>Plot:</strong> {movie.Plot}
                    </p>

                    {/* Ratings */}
                    <div>
                        <h3 className="font-semibold mb-1">Ratings</h3>

                        {movie.Ratings?.length > 0 ? (
                            <div className="flex flex-wrap gap-2">
                                {movie.Ratings.map((rating) => (
                                    <span
                                        key={rating.Source}
                                        className="px-3 py-1 bg-gray-100 rounded-full text-sm"
                                    >
                                        {rating.Source === "Internet Movie Database"
                                            ? "IMDb"
                                            : rating.Source}: {rating.Value}
                                    </span>
                                ))}
                            </div>
                        ) : (
                            <p className="text-sm text-gray-500">
                                No ratings available.
                            </p>
                        )}
                    </div>

                    <p className="text-sm text-gray-600">
                        <strong>IMDb:</strong> {movie.imdbRating}/10
                        {" · "}
                        <strong>Votes:</strong> {movie.imdbVotes}
                    </p>

                    <p className="text-sm text-gray-600">
                        <strong>Released:</strong> {movie.Released}
                        {" · "}
                        <strong>Country:</strong> {movie.Country}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default MovieCard;
