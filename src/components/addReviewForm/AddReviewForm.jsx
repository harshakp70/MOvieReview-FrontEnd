import React from 'react'
import styles from '../addReviewForm.module.css'
import close from '../../icons/close.svg'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react'
import { addOneReview } from '../../features/reviews/reviewSlice'

function AddReviewForm(props) {
  const addReviewFormVisible = props.addReviewFormVisible
  const setAddReviewFormVisible = props.setAddReviewFormVisible
  const dispatch = useDispatch()

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    const data = {
      title: title,
      description: description,
      movie: props.movieId

    }
    try {
      const resData = await axios.post('http://localhost:3001/reviews', data)
      const reviewData = resData.data
      dispatch(addOneReview(reviewData))
      setAddReviewFormVisible(false)
    }
    catch (error) {
      console.log(error)
    }



  }
  return (
    <>
      {addReviewFormVisible && <div className={styles.AddReviewOverlay}>
        <form className={styles.addReviewForm} onSubmit={handleSubmit}>
          <div className={styles.reviewFormButton}>
            <img onClick={() => { setAddReviewFormVisible(false) }} src={close} alt="" />
          </div>
          <label htmlFor="title">Title</label>
          <input type="text" id="title" onChange={(e) => { setTitle(e.target.value) }} />
          <label htmlFor="description">Description</label>
          <textarea id="description" onChange={(e) => { setDescription(e.target.value) }} ></textarea>
          <button type="submit">AddReview</button>

        </form>
      </div>}
    </>
  )
}


export default AddReviewForm
