import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { api } from '../../services/api';

import Header from '../../components/Header';
import Card from './components';

import styles from './styles.module.scss';

interface Movie {
  id: number;
  poster_path: string;
  title: string;
  vote_average: number;
}

const ListMovies: React.FC = function () {
  const { query } = useParams<'query'>();
  const [movies, setMovies] = useState<Movie[]>([
    { id: 0, poster_path: '', title: '', vote_average: 0 },
  ]);

  useEffect(() => {
    (async () => {
      const { data } = await api.get(
        `movie/${query}?api_key=${process.env.REACT_APP_API_KEY}&language=pt-BR`,
      );
      setMovies(data.results);
    })();
  }, []);

  return (
    <div className={styles.container}>
      <Header />

      <div className={styles.goBack}>
        <Link to="/">Voltar para home</Link>
      </div>

      <h2>Mais resultados</h2>

      <section>
        {movies.map(movie => (
          <Card key={movie.id} movie={movie} />
        ))}
      </section>
    </div>
  );
};

export default ListMovies;
