import { baseUrl } from '../../baseUrl'
import { useState, useEffect } from "react"
import CommentButton from "../CommentButton"
import RenderComentarios from '../RenderComentarios'
import { useParams } from 'react-router-dom'


const RenderProduto = ({produtos}) => {

    const params = useParams()

    const [comentarios, setComentarios] = useState([])

    const fetchComentario = () => {
        fetch(baseUrl + 'comentarios')
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
        .then(response => setComentarios(response))
        .catch(error => console.log(error.message));
    }

    useEffect(() => {
        fetchComentario()
    }, [])

    if (produtos.length > 0) {
        return (
            <div>
                <h1 className="mx-5">{produtos[params.produtoId].nome}</h1>
                <div className="row">
                    <div className="offset-1 col-12 col-sm-5 my-5">
                        <img height="350px" src={baseUrl + produtos[params.produtoId].imagem} alt={produtos[params.produtoId].nome} />
                    </div>
                    <div className="col-12 col-sm-4 my-5">
                        <h1>Preço: R${produtos[params.produtoId].preco}</h1>
                        <button className="btn btn-success btn-lg my-4 col-12">Comprar</button>
                        <button className="btn btn-danger btn-lg col-12">Adicionar no Carinho</button>
                        <p className="my-5">{produtos[params.produtoId].descricao}</p>
                    </div>
                </div>
                <div className="row">
                    <RenderComentarios comentarios={comentarios} produtoId={params.produtoId} />
                    <CommentButton produtoId={params.produtoId} fetchComentario={fetchComentario} />
                </div>
    
            </div>
        )
    } else {
        return (
            <div></div>
        )
    }

}

export default RenderProduto