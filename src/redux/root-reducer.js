import { combineReducers } from "redux";

import produtosReducer from "./produtos";

import comentariosReducer from "./comentarios"

const rootReducer = combineReducers({produtosReducer, comentariosReducer})

export default rootReducer