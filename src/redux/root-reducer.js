import { combineReducers } from "redux";

import produtosReducer from "./produtos";

import comentariosReducer from "./comentarios"

import carrinhoReducer from "./carrinho"

import loginReducer from './login'

const rootReducer = combineReducers({produtosReducer, comentariosReducer, carrinhoReducer, loginReducer})

export default rootReducer