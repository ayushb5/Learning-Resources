
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieCard from "../Components/MovieCard";

function Movie() {
    const { id } = useParams();

    const [movie, setMovie] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                setLoading(true);
                setError("");
                setMovie(null);

                const response = await fetch(
                    `${import.meta.env.VITE_API}?i=${id}&apikey=${import.meta.env.VITE_API_KEY}`
                );

                const data = await response.json();

                console.log(data);

                if (data.Response === "True") {
                    setMovie(data);
                } else {
                    setError(data.Error || "Movie not found.");
                }
            } catch (error) {
                console.error("Error fetching movie:", error);
                setError("Something went wrong while fetching the movie.");
            } finally {
                setLoading(false);
            }
        };

        fetchMovies();
    }, [id]);

    if (loading) {
        return <p className="text-center mt-10">Loading movie...</p>;
    }

    if (error) {
        return (
            <p className="text-center mt-10 text-red-600">
                {error}
            </p>
        );
    }

    if (!movie) {
        return null;
    }

    return (
        <div className="p-4">
            <MovieCard movie={movie} />
        </div>
    );
}

export default Movie;
