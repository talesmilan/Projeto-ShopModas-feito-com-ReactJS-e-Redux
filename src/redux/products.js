import * as ActionTypes from './ActionsTypes'

export const Produtos = (state = {
    isLoading: true,
    errMess: null,
    produtos: []
}, action) => {
    switch(action.type) {
        case ActionTypes.ADD_PRODUCT:
            return {...state, isLoading: false, errMess: null, produtos: action.payload}
        case ActionTypes.PRODUCT_LOADING:
            return {...state, isLoading: true, errMess: null, produtos: []}
        case ActionTypes.PRODUCT_FAILED:
            return {...state, isLoading: false, errMess: action.payload, produtos: []}
        default:
            return state
    }
}