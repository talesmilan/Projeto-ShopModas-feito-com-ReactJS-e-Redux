import RenderProdutoItem from '../RenderProdutoItem';
import { useState, useEffect } from 'react';
import { baseUrl } from "../../baseUrl";
import axios from 'axios'
import { useSelector } from 'react-redux'
import FlashMessage from "../FlashMessage"

const PaginaInicial = () => {

    const [produtos, setProdutos] = useState({rows: []})

    const {message} = useSelector(rootReducer => rootReducer.messageSuccessReducer)

    useEffect(() => {
        axios.get(baseUrl + "produtos/destaques/1").then(response => {
            setProdutos(response.data)
        }).catch(erro => {
            console.log(erro.message)
        })
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
            <div className='container mt-4'><FlashMessage time={10000}/></div>
            <div className="row offset-1">{produtoRender}</div>
        </div>
    )
}

export default PaginaInicial