import React, { useState, useEffect } from "react";
import "./Row.css";
import axios from "../../axios";

const baseURL = "https://image.tmdb.org/t/p/original";

const Row = ({ title, fetchUrl, isLargeRow = false }) => {
  const [movies, setmovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const res = await axios.get(fetchUrl);
      setmovies(res.data.results);
    };
    getMovies();
  }, [fetchUrl]);

  return (
    <div className='row'>
      <div className='row__title'>
        <h3>{title}</h3>
      </div>
      <div className='row__posters'>
        {movies.map((movie) => (
          <img
            key={movie.id}
            className={`row__poster ${isLargeRow && "row__posterLarge"}`}
            src={`${baseURL}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.original_name}
          />
        ))}
      </div>
    </div>
  );
};

export default Row;
