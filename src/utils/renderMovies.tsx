import Components from "$/@types/Components";
import Movie from "$/components/Movie";

export const renderMovies = (movie: Components.Movie) => <Movie {...movie} key={movie.imdbID} />
