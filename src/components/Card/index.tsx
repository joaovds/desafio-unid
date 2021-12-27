import React from 'react';

import { BsStarFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

import styles from './styles.module.scss';

interface Movie {
  id: number;
  poster_path: string;
  title: string;
  vote_average: number;
}

interface IProps {
  movie: Movie;
}

const Card: React.FC<IProps> = function ({ movie }) {
  return (
    <div className={styles.container}>
      <img
        src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
        alt="movie"
      />

      <h4>{movie.title}</h4>

      <div className={styles.rating}>
        <BsStarFill className={styles.icon} />
        {movie.vote_average}
      </div>

      <div className={styles.containerButton}>
        <Link to={`movie/${movie.id}`} className={styles.button}>
          Ver detalhes
        </Link>
      </div>
    </div>
  );
};

export default Card;
