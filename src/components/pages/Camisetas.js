import RenderProdutoItem from "../RenderProdutoItem";
import { useEffect, useState } from "react";
import { baseUrl } from "../../baseUrl";
import { useParams } from "react-router-dom";
import BotoesPage from "../BotoesPage";

const Camisetas = () => {

    const [produtos, setProdutos] = useState({rows: []})

    const params = useParams()

    const page = params.page

    useEffect(() => {
        fetch(baseUrl + "produtos/camiseta/" + page)
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
    }, [page])

    const renderProdutos = produtos.rows.map((produto) => {
            return (
                <div key={produto.id} className="col-10 col-md-3 m-3">
                    <RenderProdutoItem produto={produto}/>
                </div>
            )
    });


    return (
        <div>
            <h1 className="mx-5">Camisetas</h1>
            <div className="row offset-1">{renderProdutos}</div>
            <BotoesPage page={page} totalPage={Math.ceil(produtos.count/9)} link="camisetas" />
        </div>
    )
}

export default Camisetas