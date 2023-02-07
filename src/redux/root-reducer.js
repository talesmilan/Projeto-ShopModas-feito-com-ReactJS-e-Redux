import { combineReducers } from "redux";

import produtosReducer from "./produtos";

import comentariosReducer from "./comentarios"

import carrinhoReducer from "./carrinho"

const rootReducer = combineReducers({produtosReducer, comentariosReducer, carrinhoReducer})

export default rootReducer