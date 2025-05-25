import express from 'express';
import asyncHandler from 'express-async-handler';
import jwt from 'jsonwebtoken';
import Favourite from './favouriteModel.js';
import User from './userModel.js';

const router = express.Router();

// Middleware to authenticate user from token
const authenticate = asyncHandler(async (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) return res.status(401).json({ success: false, msg: 'No token provided' });

  const token = authHeader.split(' ')[1];
  try {
    const decoded = jwt.verify(token, process.env.SECRET);
    const user = await User.findByUserName(decoded.username);
    if (!user) throw new Error();
    req.user = user;
    next();
  } catch {
    res.status(401).json({ success: false, msg: 'Invalid token' });
  }
});

// get all favourites for logged-in user
router.get('/', authenticate, asyncHandler(async (req, res) => {
  const favourites = await Favourite.find({ userId: req.user._id });
  res.status(200).json(favourites);
}));

export default router;
