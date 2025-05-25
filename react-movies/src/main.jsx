import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";
import HomePage from "./pages/homePage";
import MoviePage from "./pages/movieDetailsPage";
import FavoriteMoviesPage from "./pages/favoriteMoviesPage";
import MovieReviewPage from "./pages/movieReviewPage";
import SiteHeader from './components/siteHeader';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import MoviesContextProvider from "./contexts/moviesContext";
import AddMovieReviewPage from './pages/addMovieReviewPage';
import UpcomingMoviesPage from "./pages/upcomingMoviesPage";
import TopRatedPage from "./pages/topRatedPage";
import WatchPlaylistPage from "./pages/watchPlaylistPage";
import PopularPage from "./pages/popularPage";

// new  pages
import StartPage from "./pages/startPage";
import LoginPage from "./pages/loginPage";
import SignUpPage from "./pages/signUpPage";
import ProfilePage from "./pages/profilePage";
import AuthContextProvider from "./contexts/authContext";
import ProtectedRoutes from "./protectedRoutes";


const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000,
      refetchOnWindowFocus: false
    },
  },
});

const App = () => {
  return (

   <QueryClientProvider client={queryClient}>
  <BrowserRouter>
    <AuthContextProvider>
      <MoviesContextProvider>
        <SiteHeader />
        <Routes>
          {/* Public routes */}
          <Route path="/" element={<StartPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />

          {/* Updated Protected routes */}
          <Route element={<ProtectedRoutes />}>
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/movies/favorites" element={<FavoriteMoviesPage />} />
            <Route path="/reviews/:id" element={<MovieReviewPage />} />
            <Route path="/movies/:id" element={<MoviePage />} />
            <Route path="/reviews/form" element={<AddMovieReviewPage />} />
            <Route path="/movies/upcoming" element={<UpcomingMoviesPage />} />
            <Route path="/movies/topRated" element={<TopRatedPage />} />
            <Route path="/movies/watchlist" element={<WatchPlaylistPage />} />
            <Route path="/movies/popular" element={<PopularPage />} />
            <Route path="/discover" element={<HomePage />} />
          </Route>

          {/* fallback */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </MoviesContextProvider>
    </AuthContextProvider>
  </BrowserRouter>
  <ReactQueryDevtools initialIsOpen={false} />
</QueryClientProvider>

  );
};


const rootElement = createRoot(document.getElementById("root"));
rootElement.render(<App />);
