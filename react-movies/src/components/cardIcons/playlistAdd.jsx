import React, { useContext } from "react";
import { PlaylistAdd } from "@mui/icons-material";
import { MoviesContext } from "../../contexts/moviesContext"; // Ensure correct import path

const PlaylistAddIcon = ({ movie }) => {
  const { addToMustWatch } = useContext(MoviesContext); // Get the function from context

  const handleAddToMustWatch = () => {
    addToMustWatch(movie.id);
  };

  return <PlaylistAdd fontSize="large" onClick={handleAddToMustWatch} style={{ cursor: "pointer" }} />;
};

export default PlaylistAddIcon;
