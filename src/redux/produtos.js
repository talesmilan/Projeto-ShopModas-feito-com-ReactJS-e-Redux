import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    produtos: []
}

const produtoSlice = createSlice({
    name: 'produtos',
    initialState,
    reducers: {
        addProduto: (state, action) => {

            state.produtos = action.payload

        }
    }
})

export const {addProduto} = produtoSlice.actions

export default produtoSlice.reducer
