import React from 'react'
import styles from "./EditMovie.module.css"
import { useLoaderData } from 'react-router-dom'
import axios from 'axios'
import { useState,useEffect } from 'react';


export async function loader({ params }) {
  const movieId = params.movieId
  try{
    const movieData = await axios.get('http://localhost:3001/movies/' + movieId)
    console.log(movieData)
    const movie = movieData.data
  
    return { movie }
  }
  catch(error){
    return {movie:null}
  }
  
}

function EditMovie(props){
  const [movieName, setMovieName] = useState('')
  const [director, setDirector] = useState('')
  const [poster ,setPoster] = useState('')
  const [summary,setSummary] = useState('')
  const[updated,setUpdated] = useState(false)


  const {movie}  = useLoaderData()

    useEffect(()=>{
      if(movie){
        setMovieName(movie.title)
        setDirector(movie.director)
        setPoster(movie.poster)
        setSummary(movie.summary)
      }
      

    },[])

    function handleSubmit(e){
      e.preventDefault()
      const data = {
        title:movieName,
        director:director,
        poster:poster,
        summary:summary
      }

      axios.patch('http://localhost:3001/movies/'+ movie._id,data)
      .then(data=>{
        console.log(data)
        setUpdated(true)
      })
      .catch(error=>{
        console.log(error)
      })
        
     

    }


  return(
    
<main>
 
{movie?<section className={styles.sectionForm}>
<h1>You can Edit here!</h1>

<form className={styles.addForm} onSubmit={handleSubmit}>
  <label htmlFor="title" id='title'>Title</label>
  <input type="text" id='title'placeholder='Enter movie title'  value={movieName} onChange={(e)=>{setMovieName(e.target.value)}}/>
  <label htmlFor="director" id='director'>Director</label>
  <input type="text " id='director' placeholder='who is the Director?' value={director} onChange={(e)=>{setDirector(e.target.value)}}/>
  <label htmlFor="poster" id='poster'>Poster</label>
  <input type="text"  id='poster' placeholder='Enter the URL of movie poster' value={poster} onChange={(e)=>{setPoster(e.target.value)}}/>
  <label htmlFor="summary" id='summary' >Summary</label>
  <textarea id='summary' placeholder=' A small description of the movie' value={summary} onChange={(e)=>{setSummary(e.target.value)}}/>
  <button type="submit"> save changes </button>

</form>
</section>: <span>movie not found</span>}
  



</main>
  );
}

export default EditMovie
