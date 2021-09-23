import {
  getMovieById,
  getMovies,
  getMovieByMinimumRating,
  getMovieByMinimumYear,
} from "./db";

export const home = async (req, res) => {
  const movies = getMovies();
  return res.render("home", { movies });
};
export const movieDetail = (req, res) => {
  const { id } = req.params;
  const movie = getMovieById(id);
  const { genres } = movie;
  return res.render("detail", { movie, genres });
};

export const getFilterMovie = (req, res) => {
  return res.render("filter");
};

export const postFilterMovie = (req, res) => {
  const { year, rating } = req.body;
  console.log(year);
  if (!year) {
    const filterByRating = getMovieByMinimumRating(rating);
    return res.render("filter", {
      filterByRating,
      rating,
    });
  } else {
    const filterByYear = getMovieByMinimumYear(year);
    return res.render("filter", {
      filterByYear,
      year,
    });
  }
};
