import React from 'react'
import { useEffect, useState } from 'react'
import styles from './home.module.css'
import { Link } from 'react-router-dom'
// import { Outlet } from 'react-router-dom'

function Home(props) {
  const [movies, setmovies] = useState([])
  useEffect(() => {
    fetch('http://localhost:3001/movies')
      .then(res => res.json())
      .then(movies => setmovies(movies))
      .catch(err => console.log(err))

  }, [])
  return (
    <main>
      <section className={styles.section1}>
        <h1>Welcome to the Udayakrishna movie Universe</h1>
      </section>
      <section className={styles.section2}>
        <h2>Mindblowing movies of Udayakrishna!</h2>
        <ul className={styles.moviesList}>
          {
            movies.map(movie =>
              <Link to={"/movies/"+movie._id} key={movie._id}>
                <li className={styles.movie} >

                  <img src={movie.poster} alt="" />
                  <h3>{movie.title}</h3>
                  <span>Directed by {movie.director}</span>
                </li>
              </Link>

            )
          }

        </ul>

      </section>
    </main>
  );
}

export default Home;