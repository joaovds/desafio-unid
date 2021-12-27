import React, { useEffect, useState } from 'react';

import { FiArrowRight } from 'react-icons/fi';

import { api } from '../../services/api';

import Card from '../Card';
import styles from './styles.module.scss';

interface IProps {
  name: string;
  query: string;
}

interface Movie {
  id: number;
  poster_path: string;
  title: string;
  vote_average: number;
}

const Section: React.FC<IProps> = function ({ name, query }) {
  const [movies, setMovies] = useState<Movie[]>([
    { id: 0, poster_path: '', title: '', vote_average: 0 },
  ]);

  useEffect(() => {
    (async () => {
      const { data } = await api.get(
        `movie/${query}?api_key=${process.env.REACT_APP_API_KEY}&language=pt-BR`,
      );
      setMovies([
        data.results[0],
        data.results[1],
        data.results[2],
        data.results[3],
      ]);
    })();
  }, []);

  return (
    <div className={styles.container}>
      <header>
        <h3>{name}</h3>

        <a href="-">
          Ver Mais
          <FiArrowRight className={styles.icon} />
        </a>
      </header>

      <section>
        {movies.map(movie => (
          <Card movie={movie} />
        ))}
      </section>
    </div>
  );
};

export default Section;
