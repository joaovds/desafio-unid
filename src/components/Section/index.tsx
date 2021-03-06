import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { FiArrowRight } from 'react-icons/fi';

import { api } from '../../services/api';

import Card from '../Card';
import styles from './styles.module.scss';

interface IProps {
  name: string;
  query: string;
  // search?: string;
}

interface Movie {
  id: number;
  poster_path: string;
  title: string;
  vote_average: number;
}

const Section: React.FC<IProps> = function ({
  name,
  query /* , search = '' */,
}) {
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

        <Link to={`movies/${query}`}>
          Ver Mais
          <FiArrowRight className={styles.icon} />
        </Link>
      </header>

      <section>
        {movies.map(movie => (
          <Card key={movie.id} movie={movie} />
        ))}
      </section>
    </div>
  );
};

export default Section;
