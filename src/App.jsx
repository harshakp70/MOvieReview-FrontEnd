import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const [movies, setmovies] = useState([
    {
      _id: "1",
      title: "Bandra",
      director: "Arun Gopy",
      poster: "https://pbs.twimg.com/media/FypDYtPWIAEZdSJ?format=jpg&name=medium"
    },
    {
      _id: "2",
      title: "Aarattu",
      director: "Unnikrishnan B",
      poster: "https://upload.wikimedia.org/wikipedia/en/f/f1/Aaraattu.jpg"
    },
    {
      _id:"3",
    title:"Pulimurugan",
    director:"Vysakh",
    poster:"https://upload.wikimedia.org/wikipedia/en/e/e1/Pulimurugan_film_poster.jpg"

    }
  ])

   useEffect(()=>{
    fetch('http://localhost:3000/movies')
    .then(res=>res.json())
    .then(movies=>setmovies(movies))
    .catch(err=>console.log(err))

   },[])
    
  
  return (
    <>
      <header>
        <span>
          <h1>CineReviews</h1>
        </span>

        <nav>
          <ul className='navList'>

            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Movies</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>

      </header>
      <main>
        <section className='section1'>
          <h1>Welcome to the Udayakrishna movie Universe</h1>
        </section>
        <section className='section2-container'>
          <h2>Mindblowing movies of Udayakrishna!</h2>
          <ul className='moviesList'>
            {
              movies.map(movie =>
                <li className="movie"key={movie.id}>
                  <img src={movie.poster} alt="" />
                  <h3>{movie.title}</h3>
                  <span>Directed by {movie.director}</span>

                </li>
              )
            }
            
          </ul>

        </section>
      </main>
      <footer></footer>
    </>
  );
}

export default App;
