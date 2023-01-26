import { baseUrl } from "../baseUrl";

export const fetchProdutos = () => {

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
    .then(response => response)
    .catch(error => console.log(error.message));
}
