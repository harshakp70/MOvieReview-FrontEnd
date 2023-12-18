import {createSlice} from '@reduxjs/toolkit'

export const reviewSlice = createSlice({
    name: 'reviews',
    initialState: {
        reviews:[]

    },
    reducers:{
        addReviews:(state,action) =>{
            state.reviews = action.payload
        },
        addOneReview:(state,action) =>{
            state.reviews.push(action.payload)
        },
        deleteReview:(state,action)=>{
            const id = action.payload
            state.reviews = state.reviews.filter(function(review){
                return review._id !== id
            })
        }
    }
})


export const {addReviews,addOneReview,deleteReview} = reviewSlice.actions

export default reviewSlice.reducer