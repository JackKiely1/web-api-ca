export const getMovies = () => {
  return fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=${import.meta.env.VITE_TMDB_KEY}&language=en-US&include_adult=false&include_video=false&page=1`
  ).then((response) => {
    if (!response.ok) {
      return response.json().then((error) => {
        throw new Error(error.status_message || "Something went wrong");
      });
    }
    return response.json();
  })
  .catch((error) => {
      throw error
  });
};

  
export const getMovie = (args) => {
  console.log(args)
  const [, idPart] = args.queryKey;
  const { id } = idPart;
  return fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${import.meta.env.VITE_TMDB_KEY}`
  ).then((response) => {
    if (!response.ok) {
      return response.json().then((error) => {
        throw new Error(error.status_message || "Something went wrong");
      });
    }
    return response.json();
  })
  .catch((error) => {
    throw error
 });
};

  
  export const getGenres = () => {
    return fetch(
      "https://api.themoviedb.org/3/genre/movie/list?api_key=" +
        import.meta.env.VITE_TMDB_KEY +
        "&language=en-US"
    ).then( (response) => {
      if (!response.ok) {
        return response.json().then((error) => {
          throw new Error(error.status_message || "Something went wrong");
        });
      }
      return response.json();
    })
    .catch((error) => {
      throw error
   });
  };

  
  export const getMovieImages = ({ queryKey }) => {
    const [, idPart] = queryKey;
    const { id } = idPart;
    return fetch(
      `https://api.themoviedb.org/3/movie/${id}/images?api_key=${import.meta.env.VITE_TMDB_KEY}`
    ).then( (response) => {
      if (!response.ok) {
        return response.json().then((error) => {
          throw new Error(error.status_message || "Something went wrong");
        });
      }
      return response.json();
    })
    .catch((error) => {
      throw error
   });
  };


  export const getMovieReviews = ({ queryKey }) => {
    const [, idPart] = queryKey;
    const { id } = idPart;
    return fetch(
      `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${import.meta.env.VITE_TMDB_KEY}`
    ).then( (response) => {
      if (!response.ok) {
        return response.json().then((error) => {
          throw new Error(error.status_message || "Something went wrong");
        });
      }
      return response.json();
    })
    .catch((error) => {
      throw error
   });
  };

  export const getUpcomingMovies = () => {
    return fetch(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=${import.meta.env.VITE_TMDB_KEY}&language=en-US&page=1`
    )
      .then((response) => {
        if (!response.ok) {
          return response.json().then((error) => {
            throw new Error(error.status_message || "Something went wrong");
          });
        }
        return response.json();
      })
      .catch((error) => {
        throw error;
      });
  };
  
  export const getTopRated = () => {
    return  fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${import.meta.env.VITE_TMDB_KEY}&language=en-US&page=1`)
      .then((response) => {
        if (!response.ok) {
          return response.json().then((error) => {
            throw new Error(error.status_message || "Something went wrong");
          });
        }
        return response.json();
      })
      .catch((error) => {
        throw error;
      });
  };
  
  export const getMovieRecommendation = async (movieId) => {
    if (!movieId) throw new Error("Invalid movie ID");
  
    const response = await fetch(
      ` https://api.themoviedb.org/3/movie/${movieId}/recommendations?api_key=${import.meta.env.VITE_TMDB_KEY}&language=en-US&page=1`
    );
  
    if (!response.ok) {
      throw new Error("Failed to fetch movie recommendations");
    }
  
    return response.json();
  };


  export const getPopular = () => {
    const currentYear = new Date().getFullYear();
    return fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${import.meta.env.VITE_TMDB_KEY}&language=en-US&primary_release_year=${currentYear}&sort_by=popularity.desc&page=1`
    )
      .then((response) => {
        if (!response.ok) {
          return response.json().then((error) => {
            throw new Error(error.status_message || "Something went wrong");
          });
        }
        return response.json();
      })
      .catch((error) => {
        throw error;
      });
  };
  
  
  export const getMovieVideo = async (movieId) => {
    if (!movieId) throw new Error("Invalid movie ID");
  
    const response = await fetch(
      ` https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${import.meta.env.VITE_TMDB_KEY}&language=en-US&page=1`
    );
  
    if (!response.ok) {
      throw new Error("Failed to fetch movie recommendations");
    }
  
    return response.json();
  };