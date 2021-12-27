import React, { useEffect, useState } from 'react';

import { api } from '../../services/api';

import styles from './styles.module.scss';

interface Movie {
  id: number;
  backdrop_path: string;
  title: string;
  overview: string;
}

const Banner: React.FC = function () {
  const [movie, setMovie] = useState<Movie>({
    id: 0,
    backdrop_path: '',
    title: '',
    overview: '',
  });

  useEffect(() => {
    (async () => {
      const { data } = await api.get(
        `movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=pt-BR`,
      );
      setMovie(data.results[0]);
    })();
  }, []);

  return (
    <div className={styles.container} style={{ backgroundImage: '' }}>
      <img
        src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
        alt="banner"
      />

      <div className={styles.content}>
        <div className={styles.badge}>Em alta</div>

        <h1>{movie.title}</h1>

        <p>{movie.overview}</p>

        <button type="button">Ver Detalhes</button>
      </div>
    </div>
  );
};

export default Banner;
