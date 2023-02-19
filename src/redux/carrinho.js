import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    carrinho: []
}

const carrinhoSlice = createSlice({
    name: 'carrinho',
    initialState,
    reducers: {
        addProduto: (state, action) => {
            const productIsAlreadyCart = state.carrinho.some((product => product.id === action.payload.id))
            if (productIsAlreadyCart) {
                state.carrinho = state.carrinho.map(product => product.id === action.payload.id ? {...product, quantity: product.quantity + 1} : {...product})
                return
            }
            state.carrinho = [...state.carrinho, {...action.payload, quantity: 1}]
        },
        removeProduto: (state, action) => {
            state.carrinho = state.carrinho.filter(product => product.id !== action.payload)
        },
        incrementaQuantidade: (state, action) => {
            state.carrinho = state.carrinho.map(product => product.id === action.payload ? {...product, quantity: product.quantity + 1} : product)
        },
        decrementaQuantidade: (state, action) => {
            state.carrinho = state.carrinho.map((product) => product.id === action.payload ? {...product, quantity: product.quantity -1 } : product).filter((product) => product.quantity > 0)
        },
        removeTodosProdutos: (state, action) => {
            state.carrinho = []
        }
    }
})

export const {addProduto, removeProduto, incrementaQuantidade, decrementaQuantidade, removeTodosProdutos} = carrinhoSlice.actions

export default carrinhoSlice.reducer
