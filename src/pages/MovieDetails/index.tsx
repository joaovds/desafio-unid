import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { BsStarFill } from 'react-icons/bs';

import Header from '../../components/Header';
import Badge from './components/Badge';
import Footer from '../../components/Footer';

import { api } from '../../services/api';
import styles from './styles.module.scss';

interface Movie {
  id: number;
  backdrop_path: string;
  genres: [{ id: number; name: string }];
  title: string;
  tagline: string;
  overview: string;
  poster_path: string;
  release_date: string;
  runtime: number;
  vote_average: number;
}

const MovieDetails: React.FC = function () {
  const { idMovie } = useParams<'idMovie'>();
  const [movie, setMovie] = useState<Movie>({
    id: 0,
    backdrop_path: '',
    vote_average: 0,
    runtime: 0,
    release_date: '',
    poster_path: '',
    overview: '',
    tagline: '',
    title: '',
    genres: [{ id: 0, name: '' }],
  });
  const [trailer, setTrailer] = useState('');

  useEffect(() => {
    (async () => {
      const { data } = await api.get(
        `movie/${idMovie}?api_key=${process.env.REACT_APP_API_KEY}&language=pt-BR`,
      );
      setMovie(data);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      const { data } = await api.get(
        `movie/${idMovie}/videos?api_key=${process.env.REACT_APP_API_KEY}&language=pt-BR`,
      );
      setTrailer(data.results[0].key);
    })();
  }, []);

  return (
    <div className={styles.container}>
      <Header />

      <div className={styles.goBack}>
        <Link to="/">Voltar para home</Link>
      </div>

      <main>
        <header>
          <section>
            <h1>{movie.title}</h1>

            <span>{movie.tagline}</span>

            <div className={styles.rating}>
              <BsStarFill className={styles.icon} />
              {movie.vote_average}
            </div>

            <div className={styles.badges}>
              {movie.genres.map(genre => (
                <Badge key={genre.id} name={genre.name} />
              ))}
            </div>
          </section>

          <img
            src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
            alt="poster"
            className={styles.poster}
          />
        </header>

        <section>
          <p>
            <b>Enredo:</b> {movie.overview}
          </p>

          <p>
            <b>Data de estreia:</b>{' '}
            {(() => {
              return new Date(movie.release_date).toLocaleString('pt-BR', {
                dateStyle: 'long',
              });
            })()}
          </p>

          <p>
            <b>Duração:</b> {movie.runtime}min
          </p>

          <iframe
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            width="100%"
            src={`https://www.youtube.com/watch?v=${trailer}`}
          />

          <img
            src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
            alt="cover"
          />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default MovieDetails;
