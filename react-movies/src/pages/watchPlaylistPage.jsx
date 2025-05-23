import React, { useContext } from "react";
import PageTemplate from "../components/templateMovieListPage";
import { MoviesContext } from "../contexts/moviesContext";
import { useQueries } from "@tanstack/react-query";
import { getMovie } from "../api/tmdb-api";
import Spinner from '../components/spinner';
import RemoveFromWatchList from "../components/cardIcons/removeFromWatchList";



const WatchPlaylistPage = () => {
    const { mustWatch: movieIds } = useContext(MoviesContext); // Access mustWatch from context
  
    // Create an array of queries to fetch movie details
    const watchlistMovieQueries = useQueries({
      queries: movieIds.map((movieId) => ({
        queryKey: ['movie', { id: movieId }],
        queryFn: getMovie,
      })),
    });
  
    // Check if any of the queries are still loading
    const isPending = watchlistMovieQueries.find((m) => m.isPending === true);
  
    if (isPending) {
      return <Spinner />; // Show spinner while movies are loading
    }
  
    const movies = watchlistMovieQueries.map((q) => {
      q.data.genre_ids = q.data.genres.map((g) => g.id);
      return q.data;
    });
  
    return (
      <PageTemplate
        title="Watch Playlist"
        movies={movies}
        action={(movie) => (
          <>
          <RemoveFromWatchList movie={movie} />
          </>
        )}
      />
    );
  };
  
  export default WatchPlaylistPage;