import {createStore, combineReducers, applyMiddleware} from 'redux'
import { Produtos } from './products'
import {Comentarios} from './comments'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            produtos: Produtos,
            comentarios: Comentarios
        }),
        applyMiddleware(thunk, logger)
    )

    return store
}