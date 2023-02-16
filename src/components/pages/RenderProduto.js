import { baseUrl } from '../../baseUrl'
import { useEffect, useState } from "react"
import CommentButton from "../CommentButton"
import RenderComentarios from '../RenderComentarios'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addComentarios } from '../../redux/comentarios'
import { addProduto } from '../../redux/carrinho'

const RenderProduto = () => {

    const params = useParams()

    const parametros = params.produtoId

    const [produto, setProduto] = useState({nome: ""})

    const dispatch = useDispatch()

    const adicionaProduto = () => {
        dispatch(addProduto(produto))
    }

    useEffect(() => {
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
        .then(response => dispatch(addComentarios(response)))
        .catch(error => console.log(error.message));

        fetch(baseUrl + `produto/${parametros}`)
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
        .then(response => setProduto(response))

    }, [])

    if (produto.nome != "") {
        return (
            <div>
                <h1 className="mx-5">{produto.nome}</h1>
                <div className="row">
                    <div className="offset-sm-1 col-12 col-sm-5 my-5 text-center">
                        <img width="100%" src={baseUrl + produto.imagem} alt={produto.nome} />
                    </div>
                    <div className="col-12 col-sm-4 my-5">
                        <h1>Preço: R${produto.preco}</h1>
                        <button className="btn btn-success btn-lg my-4 col-12">Comprar</button>
                        <button onClick={adicionaProduto} className="btn btn-danger btn-lg col-12">Adicionar no Carinho</button>
                        <p className="my-5">{produto.descricao}</p>
                    </div>
                </div>
                <div className="row">
                    <RenderComentarios produtoId={produto.id} />
                    <CommentButton produtoId={produto.id} />
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