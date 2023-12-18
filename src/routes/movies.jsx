import React from 'react'
import styles from "./movies.module.css"
import axios from 'axios';
import { Link, useLoaderData } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { useState, useEffect } from 'react'
import AddReviewForm from "../components/addReviewForm/AddReviewForm"
import { addReviews, deleteReview } from '../features/reviews/reviewSlice';
import deleteButton from '../icons/delete.svg'

export async function loader({ params }) {
  const movieId = params.movieId
  try {
    const movieData = await axios.get('http://localhost:3001/movies/' + movieId)
    console.log(movieData)
    const movie = movieData.data
    return { movie }

  }
  catch (error) {
    return { movie: null }
  }


}
function Movies(props) {

  const [addReviewFormVisible, setAddReviewFormVisible] = useState(false)

  const { movie } = useLoaderData()

  const dispatch = useDispatch()
  const reviews = useSelector(state => state.reviews.reviews)


  useEffect(() => {
    if (movie) {
      axios.get('http://localhost:3001/reviews')
        .then(({ data }) => {
          dispatch(addReviews(data))

        })
        .catch(error => {
          console.log(error)

        })

    }
  }, [movie])


  function handleDeleteReview(reviewId) {
    axios.delete('http://localhost:3001/reviews/'+ reviewId)
      .then(res => {
        dispatch(deleteReview(reviewId))
      })
      .catch(error => {
        console.log(error)
      })
  }
  return (
    <main className={styles.section1}>
      <AddReviewForm addReviewFormVisible={addReviewFormVisible} setAddReviewFormVisible={setAddReviewFormVisible} movieId={movie._id} />
      <section className={styles.sectionMovieDetail}>
        <img className={styles.MoviePoster} src={movie.poster} alt="" />
        <div>
          <h1>{movie.title}</h1>
          <p>{movie.summary}</p>
          <Link className={styles.edit} to={'/edit-movie/' + movie._id}>Edit</Link>
        </div>
      </section>
      <section className={styles.section2}>
        <header className={styles.section2Header}>
          <h1>Reviews</h1>
          <button onClick={() => setAddReviewFormVisible(true)}>AddReview</button>
        </header>

        <ul className={styles.reviews}>
          {
            reviews ? reviews.map(review => {
              return (
                <li key={review._id} className={styles.listItem}>
                  <div className={styles.reviewList}>
                    <h2>{review.title}</h2>
                    <p>{review.description}</p>
                  </div>
                  <button className={styles.deleteButton} onClick={() => { handleDeleteReview(review._id) }}>
                    <img src={deleteButton} alt="" />
                  </button>
                </li>
              )
            }) : <span>Movie is not Reviewed</span>
          }


        </ul>

      </section>
    </main>

  );
}

export default Movies
