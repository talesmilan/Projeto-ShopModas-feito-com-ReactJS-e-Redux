import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    login: {usuario: "", email: ""}
}

const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        addUser: (state, action) => {

            state.login = {usuario: action.payload.usuario, email: action.payload.email}

        },
        removeUser: (state, action) => {
            state.login = {usuario: "", email: ""}
        }
    }
})

export const {addUser, removeUser} = loginSlice.actions

export default loginSlice.reducer
