import React from 'react';
import ReactDOM from 'react-dom/client';
import styles from './App.css'
import ErrorPage from './error-page';
import Home from './routes/home';
import AddMovies from './routes/addMovies'
import EditMovie,{loader as EditMovieLoader} from'./routes/EditMovie'
import Movies,{loader as MoviesLoader} from "./routes/movies"
import SignUp from './routes/signUp'
import Root from './routes/root'
// import AddReviewForm from './components/addReviewForm/AddReviewForm'
// import reviewSlice from './features/reviews/reviewSlice';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import store from './app/store'
import { Provider } from 'react-redux';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement:<ErrorPage/>,
    children:[
      {
        path: '/',
        element:<Home/>
      },
      {
        path:'/movies/:movieId',
        element:<Movies/>,
        loader: MoviesLoader

      },
      {
        path:"/add-movie",
        element:<AddMovies/>
      },
      {
        path:"/edit-movie/:movieId",
        element:<EditMovie/>,
        loader:EditMovieLoader
      },
      {
        path:"/signup",
        element:<SignUp/>
      }

    ]
  },
  
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Provider store={store}>
    <RouterProvider router={router} /> 
  </Provider>
   </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
