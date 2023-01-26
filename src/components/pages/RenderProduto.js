import { baseUrl } from '../../baseUrl'
import { useState, useEffect } from "react"
import CommentButton from "../CommentButton"
import RenderComentarios from '../RenderComentarios'


const RenderProduto = (props) => {


    return (
        <div>
            <h1 className="mx-5">{props.produtos[props.params].nome}</h1>
            <div className="row">
                <div className="offset-1 col-12 col-sm-5 my-5">
                    <img height="350px" src={baseUrl + props.produtos[props.params].imagem} alt={props.produtos[props.params].nome} />
                </div>
                <div className="col-12 col-sm-4 my-5">
                    <h1>Preço: R${props.produtos[props.params].preco}</h1>
                    <button className="btn btn-success btn-lg my-4 col-12">Comprar</button>
                    <button className="btn btn-danger btn-lg col-12">Adicionar no Carinho</button>
                    <p className="my-5">{props.produtos[props.params].descricao}</p>
                </div>
            </div>
            <div className="row">
                <RenderComentarios comentarios={props.comentarios} produtoId={props.params} />
                <div className="col-3 offset-1 mt-3">
                    <CommentButton produtoId={props.params} />
                </div>
            </div>

        </div>
    )
}

export default RenderProduto