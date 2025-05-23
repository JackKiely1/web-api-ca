import React from "react";
import { useQuery } from "@tanstack/react-query";
import PageTemplate from "../components/templateMovieListPage";
import Spinner from "../components/spinner";
import PlaylistAddIcon from "../components/cardIcons/playlistAdd";
import AddToFavoritesIcon from '../components/cardIcons/addtoFavorites';
import { getTopRated } from "../api/tmdb-api";

const TopRatedPage = () => {
  const { data, error, isPending, isError } = useQuery({
    queryKey: ["top_rated"],
    queryFn: getTopRated,
  });

  if (isPending) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  const movies = data.results;

  return (
    <PageTemplate
      title="Top Rated"
      movies={movies}
      action={(movie) => <>
      <PlaylistAddIcon movie={movie} />
      <AddToFavoritesIcon movie={movie} />
      </>
    }
    />
  );
};

export default TopRatedPage;
