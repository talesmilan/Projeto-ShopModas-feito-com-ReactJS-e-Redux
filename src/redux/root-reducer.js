import { combineReducers } from "redux";
import produtosReducer from "./produtos";
import comentariosReducer from "./comentarios"
import carrinhoReducer from "./carrinho"
import loginReducer from './login'
import messageSuccessReducer from "./messageSuccess";

const rootReducer = combineReducers({produtosReducer, comentariosReducer, carrinhoReducer, loginReducer, messageSuccessReducer})

export default rootReducer