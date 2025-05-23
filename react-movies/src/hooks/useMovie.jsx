import { useEffect, useState } from "react";
import {getMovie, getMovieRecommendations} from '../api/tmdb-api'

const useMovie = id => {
  const [movie, setMovie] = useState(null);
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    getMovie(id).then(movie => {setMovie(movie);});
    getMovieRecommendations(id)
    .then((data) => setRecommendations(data.results || []))
      .catch((error) => console.error("Error fetching recommendations:", error));
  }, [id]);


  return [movie, setMovie, recommendations];
};

export default useMovie;

