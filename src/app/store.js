import {configureStore} from '@reduxjs/toolkit'
import reviewReducer from '../features/reviews/reviewSlice'


export default configureStore({
    reducer: {
        reviews: reviewReducer
    }
})