import RenderProdutoItem from '../RenderProdutoItem';
import { useState, useEffect } from 'react';
import { baseUrl } from "../../baseUrl";

const PaginaInicial = () => {

    const [produtos, setProdutos] = useState({rows: []})

    useEffect(() => {
        fetch(baseUrl + "produtos/destaques/1")
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
        .then(response => {
            setProdutos(response)
        })
        .catch(error => console.log(error.message));
    }, [])

    const produtoRender = produtos.rows.map((produto) => {
            return (
                <div key={produto.id} className="col-10 col-md-3 m-3">
                    <RenderProdutoItem produto={produto}/>
                </div>
            )
    });

    return (
        <div>
            <h1 className='mx-5'>Destaques</h1>
            <div className="row offset-1">{produtoRender}</div>
            

        </div>
    )
}

export default PaginaInicial