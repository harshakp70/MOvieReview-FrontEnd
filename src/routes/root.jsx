import  React from 'react';
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';
import styles from './root.module.css'

function Root(props){
    return(
        <div>
            <header className={styles.Header}>
        <span>
          <h1>CineReviews</h1>
        </span>

        <nav>
          <ul className={styles.navList}>

            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="#">About</Link>
            </li>
            <li>
              <Link to="#">Contact</Link>
            </li>
             <li>
              <Link to="/add-movie">AddMovie</Link>
            </li>
          </ul>
        </nav>

      </header>
      
      <Outlet/>
     
      <footer>
        
      </footer>
        </div>
    );
}

export default Root;