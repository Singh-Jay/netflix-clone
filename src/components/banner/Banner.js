import React, { useState, useEffect } from "react";
import requests from "../../requests";
import axios from "../../axios";
import "./Banner.css";

const Banner = () => {
  const [movie, setmovie] = useState([]);

  useEffect(() => {
    const getRandomMovie = async () => {
      const res = await axios.get(requests.fetchNetflixOriginals);
      setmovie(
        res.data.results[
          Math.floor(Math.random() * res.data.results.length - 1)
        ]
      );
      return res;
    };
    getRandomMovie();
  }, []);

  const truncate = (str, n) =>
    str?.length > n ? `${str.substr(0, n - 1)}...` : str;

  return (
    <div>
      <header
        className='banner'
        style={{
          backgroundSize: "cover",
          backgroundImage: `url('https://image.tmdb.org/t/p/original/${movie?.backdrop_path}')`,
          backgroundPosition: "center center",
        }}>
        <div className='banner__contents'>
          <h1 className='banner__title'>
            {movie?.title || movie.name || movie.original_name}
          </h1>

          <div className='banner__buttons'>
            <button className='banner__button'>Play</button>
            <button className='banner__button'>My List</button>
          </div>

          <h1 className='banner__description'>
            {truncate(movie.overview, 150)}
          </h1>
        </div>

        <div className='banner--fadeBottom'></div>
      </header>
    </div>
  );
};

export default Banner;
