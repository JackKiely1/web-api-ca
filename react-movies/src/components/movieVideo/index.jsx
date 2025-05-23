import React, { useEffect, useState } from "react";
import { getMovieVideo } from "../../api/tmdb-api"; // Adjust the path if needed
import Typography from "@mui/material/Typography";

const MovieVideo = ({ movieId }) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const data = await getMovieVideo(movieId);
        setVideos(data.results);
      } catch (error) {
        console.error("Error fetching movie videos:", error);
      }
    };

    if (movieId) {
      fetchVideos();
    }
  }, [movieId]);

  return (
    <div>

      {videos.length > 0 ? (
        <div>
          {videos
            .filter((video) => video.site === "YouTube" && video.type === "Trailer")
            .map((video) => (
              <div key={video.id}>
                <iframe
                  width="560"
                  height="315"
                  src={`https://www.youtube.com/embed/${video.key}`}
                  title={video.name}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            ))}
        </div>
      ) : (
        <Typography variant="body1">No trailers available</Typography>
      )}
    </div>
  );
};

export default MovieVideo;
