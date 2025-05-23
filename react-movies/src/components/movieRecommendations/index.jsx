import React, { useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import { getMovieRecommendation } from "../../api/tmdb-api"; 
import MovieCard from "../movieCard"; 
import Grid from "@mui/material/Grid";
import CircularProgress from "@mui/material/CircularProgress";
import Alert from "@mui/material/Alert";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import { MoviesContext } from "../../contexts/moviesContext";

const MovieRecommendations = ({ movieId }) => {
  const { addToFavorites, addToMustWatch } = useContext(MoviesContext);

  const { data, error, isLoading } = useQuery({
    queryKey: ["movieRecommendations", movieId],
    queryFn: () => getMovieRecommendation(movieId),
  
  });

  const action = (movie) => (
    <>
      <IconButton onClick={(e) => { e.preventDefault(); addToFavorites(movie); }} color="primary">
        <FavoriteIcon />
      </IconButton>
      <IconButton onClick={(e) => { e.preventDefault(); addToMustWatch(movie.id); }} color="primary">
        <PlaylistAddIcon />
      </IconButton>
    </>
  );

  if (isLoading) return <CircularProgress />;
  if (error) return <Alert severity="error">{error.message}</Alert>;

  return (
    <Grid container spacing={2}>
      {data?.results?.length > 0 ? (
        data.results.map((movie) => (
          <Grid item key={movie.id} xs={12} sm={6} md={4}>
            <MovieCard movie={movie} action={action} />
          </Grid>
        ))
      ) : (
        <p>No recommendations found.</p>
      )}
    </Grid>
  );
};

export default MovieRecommendations;
