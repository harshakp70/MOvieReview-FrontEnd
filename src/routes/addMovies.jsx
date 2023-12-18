import React from 'react'
import styles from "./addMovies.module.css"
import { useRef } from 'react'
import axios from 'axios'
function AddMovies(props){

    const titleRef = useRef()
    const directorRef = useRef()
    const posterRef = useRef()
    const summaryRef = useRef()

    function handleSubmit(e){
        e.preventDefault()
        const title = titleRef.current.value
        const director = directorRef.current.value
        const poster = posterRef.current.value
        const summary = summaryRef.current.value


        const data ={
            title:title,
            director:director,
            poster:poster,
            summary:summary
        }

        axios.post('http://localhost:3001/movies',data)
        .then(data=>{
            console.log(data)
        })
        .catch(error=>{
            console.log(error)
        })
    }
  return(
<main>
<section className={styles.sectionForm}>
  <h1>Add a New Movie</h1>
 
  <form  onSubmit = {handleSubmit}className={styles.addForm}>
    <label htmlFor="title" >Title</label>
    <input ref={titleRef} type="text" id='title'placeholder='Enter movie title' />
    <label htmlFor="director" >Director</label>
    <input ref={directorRef} type="text " id='director' placeholder='who is the Director?' />
    <label htmlFor="poster" >Poster</label>
    <input ref={posterRef}type="text"  id='poster' placeholder='Enter the URL of movie poster'/>
    <label htmlFor="summary"  >Summary</label>
    <textarea  ref={summaryRef}id='summary' placeholder=' A small description of the movie' />
    <button type="submit">Add movie</button>
  
  </form>
  </section>

</main>
  );
}

export default AddMovies