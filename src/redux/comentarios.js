import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    comentarios: []
}

const comentarioSlice = createSlice({
    name: 'comentarios',
    initialState,
    reducers: {
        addComentarios: (state, action) => {

            state.comentarios = action.payload

        }
    }
})

export const {addComentarios} = comentarioSlice.actions

export default comentarioSlice.reducer
