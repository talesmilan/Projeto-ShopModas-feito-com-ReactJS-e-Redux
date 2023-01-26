import * as ActionTypes from './ActionsTypes';

export const Comentarios = (state = { errMess: null, comentarios:[]}, action) => {
    switch (action.type) {
      case ActionTypes.ADD_COMMENTS:
        return {...state, errMess: null, comentarios: action.payload};
  
      case ActionTypes.COMMENTS_FAILED:
        return {...state, errMess: action.payload};
  
      case ActionTypes.ADD_COMMENT:
          var comentarios = action.payload;
          return { ...state, comentarios: state.comentarios.concat(comentarios)};
  
      default:
        return state;
    }
  };