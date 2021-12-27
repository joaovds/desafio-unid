import React from 'react';
import { Link /* , useParams */ } from 'react-router-dom';
import { BsStarFill } from 'react-icons/bs';

import Header from '../../components/Header';
import Badge from './components/Badge';
import Footer from '../../components/Footer';

import styles from './styles.module.scss';

const MovieDetails: React.FC = function () {
  // const { idMovie } = useParams();

  return (
    <div className={styles.container}>
      <Header />

      <div className={styles.goBack}>
        <Link to="/">Voltar para home</Link>
      </div>

      <main>
        <header>
          <section>
            <h1>Homem-Aranha: Sem Volta Para Casa</h1>

            <span>O Multiverso está aberto!</span>

            <div className={styles.rating}>
              <BsStarFill className={styles.icon} />
              8.6
            </div>

            <div className={styles.badges}>
              <Badge name="Ação" />
              <Badge name="Ficção" />
              <Badge name="Ficção científica" />
            </div>
          </section>

          <img
            src="https://image.tmdb.org/t/p/original/fVzXp3NwovUlLe7fvoRynCmBPNc.jpg"
            alt="poster"
            className={styles.poster}
          />
        </header>

        <section>
          <p>
            <b>Enredo:</b> Peter Parker é desmascarado e não consegue mais
            separar sua vida normal dos grandes riscos de ser um super-herói.
            Quando ele pede ajuda ao Doutor Estranho, os riscos se tornam ainda
            mais perigosos, e o forçam a descobrir o que realmente significa ser
            o Homem-Aranha.
          </p>

          <p>
            <b>Data de estreia:</b> 15/12/2021
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default MovieDetails;
