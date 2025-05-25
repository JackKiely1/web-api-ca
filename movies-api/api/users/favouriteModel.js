import mongoose from 'mongoose';

const favouriteSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  movieId: { type: Number, required: true },
  title: String,
  poster_path: String,
  release_date: String,
});

const Favourite = mongoose.model('Favourite', favouriteSchema);

export default Favourite;
