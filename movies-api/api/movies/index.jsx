import express from 'express';
import asyncHandler from 'express-async-handler';
import { getMovies, getUpcomingMovies, getTopRated } from '../tmdb-api.js';



const router = express.Router();

// movie routes to be added
router.get('/discover', asyncHandler(async (req, res) => {
    const discoverMovies = await getMovies();
    res.status(200).json(discoverMovies);
}));

router.get('/upcoming', asyncHandler(async (req, res) => {
    const UpcomingMovies = await getUpcomingMovies();
    res.status(200).json(UpcomingMovies);
}));

router.get('/toprated', asyncHandler(async (req, res) => {
    const TopRated = await getTopRated();
    res.status(200).json(TopRated);
}));



export default router;
