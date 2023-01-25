import { useParams } from "react-router-dom"
import { baseUrl } from '../../baseUrl'
import { useState, useEffect } from "react"


const RenderComentarios = ({comentarios, produtoId}) => {
    return (
        <div>
            <h1 className="mx-5">Comentários</h1>
            <div className="offset-1 mt-5">
                {comentarios.map(comentario => {
                    console.log(comentario.comentario)
                    if (comentario.produtoId == produtoId) {
                        return (
                            <>
                                <p>{comentario.comentario}</p>
                                <p>-- {comentario.autor}, {comentario.data.substr(8, 2)}-{comentario.data.substr(5, 2)}-{comentario.data.substr(0, 4)}</p>
                            </>)
                    }
                })}
            </div>
        </div>
    )
}


const RenderProduto = ({produtos}) => {

    const produtoId = useParams()

    const [comentarios, setComentarios] = useState([])

    useEffect(() => {
        fetch(baseUrl + 'comentarios')
        .then((response) => response.json())
        .then(response => setComentarios(response))
    }, [])


    return (
        <div>
            <h1 className="mx-5">{produtos[produtoId.produtoId].nome}</h1>
            <div className="row">
                <div className="offset-1 col-12 col-sm-5 my-5">
                    <img height="350px" src={baseUrl + produtos[produtoId.produtoId].imagem} alt={produtos[produtoId.produtoId].nome} />
                </div>
                <div className="col-12 col-sm-4 my-5">
                    <h1>Preço: R${produtos[produtoId.produtoId].preco}</h1>
                    <button className="btn btn-success btn-lg my-4 col-12">Comprar</button>
                    <button className="btn btn-danger btn-lg col-12">Adicionar no Carinho</button>
                    <p className="my-5">{produtos[produtoId.produtoId].descricao}</p>
                </div>
            </div>
            <div className="row">
                <RenderComentarios comentarios={comentarios} produtoId={produtoId.produtoId} />
            </div>

        </div>
    )
}

export default RenderProduto