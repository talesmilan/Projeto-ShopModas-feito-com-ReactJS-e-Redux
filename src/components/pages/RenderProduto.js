import { baseUrl } from '../../baseUrl'
import { useEffect, useState } from "react"
import CommentButton from "../CommentButton"
import RenderComentarios from '../RenderComentarios'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addProduto } from '../../redux/carrinho'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { addComentarios } from '../../redux/comentarios'

const RenderProduto = () => {

    const params = useParams()

    const parametros = params.produtoId

    const [produto, setProduto] = useState({nome: ""})

    const dispatch = useDispatch()

    const navigate = useNavigate()

    const {carrinho} = useSelector(rootReducer => rootReducer.carrinhoReducer)

    const adicionaProduto = () => {
        dispatch(addProduto(produto))
    }

    const comprarProduto = () => {
        const produtoFind = carrinho.find(produto => produto.id == parametros)
        if(produtoFind == undefined) {
            dispatch(addProduto(produto))
            navigate('/carrinho')
        } else {
            navigate('/carrinho')
        }

    }

    useEffect(() => {
        axios.get(baseUrl + `produto/${parametros}`).then(response => {
            setProduto(response.data)
        }).catch(erro => {
            console.log(erro)
        })
        axios.get(baseUrl + "comentarios/" + parametros).then(response => {
            dispatch(addComentarios(response.data))
        }).catch(erro => {
            console.log(erro)
        })
    }, [])

    if (produto.nome != "") {
        return (
            <div>
                {console.log(produto)}
                <h1 className="mx-5">{produto.nome}</h1>
                <div className="row">
                    <div className="offset-sm-1 col-12 col-sm-5 my-5 text-center">
                        <img width="100%" src={baseUrl + produto.imagem} alt={produto.nome} />
                    </div>
                    <div className="col-12 col-sm-4 my-5">
                        <h1>Preço: R${produto.preco}</h1>
                        <button onClick={comprarProduto} className="btn btn-success btn-lg my-4 col-12">Comprar</button>
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