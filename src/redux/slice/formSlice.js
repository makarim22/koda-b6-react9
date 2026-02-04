import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    formData : null
}

const formSlice = createSlice ({
    name: 'form',
    initialState,
    reducers : {
     saveFormData: (state, action) => {
         state.formData = action.payload
     },
     resetFormData: (state) => {
         state.formData = null
     }
    }
})

export const { saveFormData, resetFormData } = formSlice.actions
export default formSlice.reducer