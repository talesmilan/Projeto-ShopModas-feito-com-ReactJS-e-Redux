import * as ActionTypes from './ActionsTypes'
import { baseUrl } from '../baseUrl'

export const addComment = (comment) => ({
    type: ActionTypes.ADD_COMMENT,
    payload: comment
})

export const postComment = (produtoId, nota, autor, comentario) => (dispatch) => {

    const newComment = {
        produtoId: produtoId,
        nota: nota,
        autor: autor,
        comentario: comentario
    }

    newComment.data = new Date().toISOString()

    return fetch(baseUrl + 'comentarios', {
        method: 'POST',
        body: JSON.stringify(newComment),
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: 'same-origin'
    })
        .then(response => {
            if (response.ok) {
                return response
            } else {
                var error = new Error('Error' + response.status + ": " + response.statusText)
                error.response = response
                throw error
            }
        }, 
        error => {
            var errmess = new Error(error.message)
            throw errmess
        })
        .then(response => response.json())
        .then(response => dispatch(addComment(response)))
        .catch(error => {console.log('Post comments ', error.message)
            alert("Seu comentário não pode ser postado.\nErro: " + error.message)})
}



export const postFeedback = (name, telnum, email, agree, contactType, message) => (dispatch) => {

    const newFeedback = {
        name: name,
        telnum: telnum,
        email: email,
        agree: agree,
        contactType: contactType,
        message: message
    }

    newFeedback.date = new Date().toISOString()

    return fetch(baseUrl + 'feedback', {
        method: 'POST',
        body: JSON.stringify(newFeedback),
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: 'same-origin'
    })
        .then(response => {
            if (response.ok) {
                return response
            } else {
                var error = new Error('Error' + response.status + ": " + response.statusText)
                error.response = response
                throw error
            }
        }, 
        error => {
            var errmess = new Error(error.message)
            throw errmess
        })
        .then(response => response.json())
        .then(response => alert("O seu Feedback foi postado com sucesso!" + JSON.stringify(response)))
        .catch(error => {console.log('Post comments ', error.message)
            alert("Seu feedback não pode ser postado.\nErro: " + error.message)})
}



export const fetchProdutos = () => (dispatch) => {
    dispatch(produtosLoading(true))

    return fetch(baseUrl + 'produtos')
    .then(response => {
        if (response.ok) {
            return response
        } else {
            var error = new Error('Error' + response.status + ": " + response.statusText)
            error.response = response
            throw error
        }
    }, 
    error => {
        var errmess = new Error(error.message)
        throw errmess
    })
    .then(response => response.json())
    .then(produtos => dispatch(addProdutos(produtos)))
    .catch(error => dispatch(produtosFailed(error.message)));
}

export const produtosLoading = () => ({
    type: ActionTypes.PRODUCT_LOADING
})

export const produtosFailed = (errmess) => ({
    type: ActionTypes.PRODUCT_FAILED,
    payload: errmess
})

export const addProdutos = (produtos) => ({
    type: ActionTypes.ADD_PRODUCT,
    payload: produtos
})


export const fetchComments = () => (dispatch) => {    
    return fetch(baseUrl + 'comentarios')
    .then(response => {
        if (response.ok) {
            return response
        } else {
            var error = new Error('Error' + response.status + ": " + response.statusText)
            error.response = response
            throw error
        }
    }, 
    error => {
        var errmess = new Error(error.message)
        throw errmess
    })
    .then(response => response.json())
    .then(comments => {
        return dispatch(addComments(comments))})
    .catch(error => dispatch(commentsFailed(error.message)));
};

export const commentsFailed = (errmess) => ({
    type: ActionTypes.COMMENTS_FAILED,
    payload: errmess
});

export const addComments = (comments) => ({
    type: ActionTypes.ADD_COMMENTS,
    payload: comments
});


