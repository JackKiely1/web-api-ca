import fetch from 'node-fetch';

export const getMovies = async () => {
  const response = await fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.TMDB_KEY}&language=en-US&include_adult=false&include_video=false&page=1`
  );

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || 'Failed to fetch movies');
  }

  return await response.json();
};

export const getUpcomingMovies = async () => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.TMDB_KEY}&language=en-US&page=1`
  );

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.status_message || 'Failed to fetch upcoming movies');
  }

  return await response.json();
};

export const getTopRated = async () => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.TMDB_KEY}&language=en-US&page=1`
  );

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.status_message || 'Failed to fetch TopRated movies');
  }

  return await response.json();
};

