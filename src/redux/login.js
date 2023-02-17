import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    login: {token: ""}
}

const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        addUser: (state, action) => {

            state.login = action.payload

        },
        removeUser: (state, action) => {
            state.login = {token: ""}
        }
    }
})

export const {addUser, removeUser} = loginSlice.actions

export default loginSlice.reducer
