import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    formArray : [],
    formData : null
}

const formSlice = createSlice ({
    name: 'form',
    initialState,
    reducers : {
     addFormData: (state, action) => {
         state.formArray.push(action.payload)
     },   
     saveFormData: (state, action) => {
         state.formData = action.payload
     },
     resetFormData: (state) => {
         state.formData = null
     }
    }
})

export const { addFormData, saveFormData, resetFormData } = formSlice.actions
export default formSlice.reducer