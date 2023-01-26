import * as ActionTypes from './ActionsTypes';

export const Comentarios = (state = { errMess: null, comentarios:[]}, action) => {
    switch (action.type) {
      case ActionTypes.ADD_COMMENTS:
        return {...state, errMess: null, comentarios: action.payload};
  
      case ActionTypes.COMMENTS_FAILED:
        return {...state, errMess: action.payload};
  
      case ActionTypes.ADD_COMMENT:
          var comment = action.payload;
          return { ...state, comments: state.comments.concat(comment)};
  
      default:
        return state;
    }
  };