import RenderProdutoItem from "../RenderProdutoItem";
import { useEffect, useState } from "react";
import { baseUrl } from "../../baseUrl";
import { useParams } from "react-router-dom";
import BotoesPage from "../BotoesPage";
import axios from 'axios'

const Bones = () => {

    const [produtos, setProdutos] = useState({rows: []})

    const params = useParams()

    const page = params.page

    useEffect(() => {
        axios.get(baseUrl + "produtos/bone/" + page).then(response => {
            setProdutos(response.data)
        }).catch(erro => {
            console.log(erro.message)
        })
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
            <h1 className="mx-5">Bonés</h1>
            <div className="row offset-1">{renderProdutos}</div>
            <BotoesPage page={page} link="bones" totalPage={Math.ceil(produtos.count/9)} />
        </div>
    )
}

export default Bones