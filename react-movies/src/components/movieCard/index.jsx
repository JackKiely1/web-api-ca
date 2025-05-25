// import Card from "@mui/material/Card";
// import CardActions from "@mui/material/CardActions";
// import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
// import CardHeader from "@mui/material/CardHeader";
// import Button from "@mui/material/Button";
// import Typography from "@mui/material/Typography";
// import FavoriteIcon from "@mui/icons-material/Favorite";
// import CalendarIcon from "@mui/icons-material/CalendarTodayTwoTone";
// import StarRateIcon from "@mui/icons-material/StarRate";
// import IconButton from "@mui/material/IconButton";
// import Grid from "@mui/material/Grid2";
// import img from '../../images/film-poster-placeholder.png'
// import { Link } from "react-router";
// import Avatar from '@mui/material/Avatar';
// import React, { useContext } from "react";
// import { MoviesContext } from "../../contexts/moviesContext";
// import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";

// export default function MovieCard({ movie, action }) {
//   const { favorites, addToFavorites, mustWatch, addToMustWatch } = useContext(MoviesContext);

//   if (favorites.find((id) => id === movie.id)) {
//     movie.favorite = true;
//   } else {
//     movie.favorite = false;
//   }

//   if (mustWatch.find((id) => id === movie.id)) {
//     movie.watchlist = true;
//   } else {
//     movie.watchlist = false;
//   }

//   const handleAddToFavorite = (e) => {
//     e.preventDefault();
//     addToFavorites(movie);
//   };

//   const handleAddToWatchList = (e) => {
//     e.preventDefault();
//     addToMustWatch(movie.id);
//   };

//   return (
//     <Card>
//       <CardHeader
//         avatar={
//           <>
//             {movie.favorite && (
//               <Avatar sx={{ backgroundColor: 'red' }}>
//                 <FavoriteIcon />
//               </Avatar>
//             )}
//             {movie.watchlist && (
//               <Avatar sx={{ backgroundColor: 'green' }}>
//                 <PlaylistAddIcon />
//               </Avatar>
//             )}
//           </>
//         }
//         title={
//           <Typography variant="h5" component="p">
//             {movie.title}{" "}
//           </Typography>
//         }
//       />

//       <CardMedia
//         sx={{ height: 500 }}
//         image={
//           movie.poster_path
//             ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
//             : img
//         }
//       />
//       <CardContent>
//         <Grid container>
//           <Grid size={{xs: 6}}>
//             <Typography variant="h6" component="p">
//               <CalendarIcon fontSize="small" />
//               {movie.release_date}
//             </Typography>
//           </Grid>
//           <Grid size={{xs: 6}}>
//             <Typography variant="h6" component="p">
//               <StarRateIcon fontSize="small" />
//               {"  "} {movie.vote_average}{" "}
//             </Typography>
//           </Grid>
//         </Grid>
//       </CardContent>
//       <CardActions disableSpacing>
//         {action(movie)}
//         <Link to={`/movies/${movie.id}`}>
//           <Button variant="outlined" size="medium" color="primary">
//             More Info ...
//           </Button>
//         </Link>
//       </CardActions>
//     </Card>
//   );
// }


import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardHeader from "@mui/material/CardHeader";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CalendarIcon from "@mui/icons-material/CalendarTodayTwoTone";
import StarRateIcon from "@mui/icons-material/StarRate";
import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Grid";
import img from '../../images/film-poster-placeholder.png';
import { Link } from "react-router-dom";
import Avatar from '@mui/material/Avatar';
import React, { useContext } from "react";
import { MoviesContext } from "../../contexts/moviesContext";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";

export default function MovieCard({ movie, action }) {
  const { favorites, addToFavorites, mustWatch, addToMustWatch } = useContext(MoviesContext);

  movie.favorite = favorites.includes(movie.id);
  movie.watchlist = mustWatch.includes(movie.id);

  const handleAddToFavorite = (e) => {
    e.preventDefault();
    addToFavorites(movie);
  };

  const handleAddToWatchList = (e) => {
    e.preventDefault();
    addToMustWatch(movie.id);
  };

  return (
    <Card 
      sx={{ 
        maxWidth: 345, 
        borderRadius: 2, 
        boxShadow: 3, //shadow on radius of box
        transition: "0.3s", 
        "&:hover": { boxShadow: 6 } //increases when hovering on each movie 
      }}
    >
      <CardHeader
        avatar={
          <>
            {movie.favorite && (
              <Avatar sx={{ backgroundColor: 'red' }}>
                <FavoriteIcon />
              </Avatar>
            )}
            {movie.watchlist && (
              <Avatar sx={{ backgroundColor: 'green' }}>
                <PlaylistAddIcon />
              </Avatar>
            )}
          </>
        }
        title={
          <Typography variant="h6" component="p" sx={{ fontWeight: "bold" }}>
            {movie.title}
          </Typography> //changed to bold for better readability 
        }
      />

      <CardMedia
        sx={{ height: 500, borderRadius: 1 }}
        image={
          movie.poster_path
            ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
            : img
        }
      />

      <CardContent>
        <Grid container spacing={1} alignItems="center">
          <Grid item xs={6} sx={{ display: "flex", alignItems: "center" }}>
            <CalendarIcon fontSize="small" sx={{ marginRight: 0.5 }} />   {/*icon aligned */}
            <Typography variant="body2">{movie.release_date}</Typography>  
          </Grid>
          <Grid item xs={6} sx={{ display: "flex", alignItems: "center" }}>
            <StarRateIcon fontSize="small" sx={{ color: "gold", marginRight: 0.5 }} /> {/* color changed to gold icon aligned*/}
            <Typography variant="body2">{movie.vote_average}</Typography>
          </Grid>
        </Grid>
      </CardContent> 

      <CardActions sx={{ justifyContent: "space-between", padding: 2 }}> 
        {action(movie)}
        <Link to={`/movies/${movie.id}`} style={{ textDecoration: "none" }}>
          <Button variant="contained" size="small" color="primary"> {/*sizing adjusted to fit better with icons */}
            More Info
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}
