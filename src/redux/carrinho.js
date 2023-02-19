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
            localStorage.setItem('carrinho', JSON.stringify({objeto: state.carrinho}))
        },
        removeProduto: (state, action) => {
            state.carrinho = state.carrinho.filter(product => product.id !== action.payload)
            localStorage.setItem('carrinho', JSON.stringify({objeto: state.carrinho}))
        },
        incrementaQuantidade: (state, action) => {
            state.carrinho = state.carrinho.map(product => product.id === action.payload ? {...product, quantity: product.quantity + 1} : product)
            localStorage.setItem('carrinho', JSON.stringify({objeto: state.carrinho}))
        },
        decrementaQuantidade: (state, action) => {
            state.carrinho = state.carrinho.map((product) => product.id === action.payload ? {...product, quantity: product.quantity -1 } : product).filter((product) => product.quantity > 0)
            localStorage.setItem('carrinho', JSON.stringify({objeto: state.carrinho}))
        },
        removeTodosProdutos: (state, action) => {
            state.carrinho = []
            localStorage.setItem('carrinho', JSON.stringify({objeto: state.carrinho}))
        },
        adicionaVariosProdutos: (state, action) => {
            state.carrinho = action.payload
        }
    }
})

export const {addProduto, removeProduto, incrementaQuantidade, decrementaQuantidade, removeTodosProdutos, adicionaVariosProdutos} = carrinhoSlice.actions

export default carrinhoSlice.reducer
