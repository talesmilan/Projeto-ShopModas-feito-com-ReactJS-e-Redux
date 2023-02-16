import { Card } from "reactstrap"
import { useSelector } from "react-redux"

const RenderComentarios = ({produtoId}) => {

    let existeComentarios = false

    const {comentarios} = useSelector(rootReducer => rootReducer.comentariosReducer)

    return (
        <div>
            <h1 className="mx-5">Comentários</h1>
            <div className="mt-5">
                {comentarios.map(comentario => {
                    if (comentario.produtoId == produtoId) {
                        existeComentarios = true
                        return (
                            <Card key={comentario.id} className="offset-sm-1 col-sm-10 col-12 p-3">
                                <p>{comentario.comentario}</p>
                                <p>-- {comentario.autor}, {comentario.createdAt.substr(8, 2)}-{comentario.createdAt.substr(5, 2)}-{comentario.createdAt.substr(0, 4)}</p>
                            </Card>)
                    }
                })}
                {!existeComentarios && (<p className="offset-sm-1 texto-comentario">Não existem comentários ainda.</p>)}
            </div>
        </div>
    )
}

export default RenderComentarios