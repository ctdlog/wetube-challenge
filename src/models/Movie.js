import mongoose from "mongoose";

// Create a Movie Model here.
const movieSchema = new mongoose.Schema({
  title: String,
  summary: String,
  year: Number,
  rating: Number,
  genres: [String],
});

const Movie = mongoose.model("Movie", movieSchema);

export default Movie;
