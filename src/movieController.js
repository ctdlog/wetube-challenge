import {
  getMovieById,
  getMovies,
  getMovieByMinimumRating,
  getMovieByMinimumYear,
} from "./db";

export const home = async (req, res) => {
  const movies = getMovies();
  return res.render("movies", { movies });
};

export const movieDetail = (req, res) => {
  const { id } = req.params;
  const movie = getMovieById(id);
  const { genres } = movie;
  return res.render("detail", { movie, genres });
};

export const filterMovie = (req, res) => {
  const {
    query: { year, rating },
  } = req;
  if (year) {
    const movies = getMovieByMinimumYear(year);
    return res.render("movies", {
      searchingBy: "year",
      searchingTerm: year,
      movies,
    });
  }
  if (rating) {
    const movies = getMovieByMinimumRating(rating);
    return res.render("movies", {
      pageTitle: `Searching by rating: ${rating}`,
      movies,
    });
  }
  res.render("404", { pageTitle: "Movie not found" });
};

export const getUpload = (req, res) => {
  return res.render("upload");
};

export const postUpload = (req, res) => {
  const movies = getMovies();
  const { title, synopsis, genres } = req.body;
  console.log(req.body);
  const newMovie = {
    title,
    synopsis,
    genres,
    id: Object.keys(movies).length + 1,
  };
  movies.push(newMovie);
  return res.redirect("/");
};
