import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
    name : "carter",
    initialState : [],
    reducers : {
        addToCart : (state, action) => {
            console.log(action)
            let result = state
            if(state.some(item => item.id == action.payload.id)) return state.filter(item => item.id !== action.payload.id)
            result.push(action.payload);
            return result;
        },
        clearCart : (state) => {
            return []
        }
    }
})

export const cart = cartSlice.reducer
export const {addToCart, clearCart} = cartSlice.actions