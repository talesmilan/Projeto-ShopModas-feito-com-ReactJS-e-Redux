import { Card } from "reactstrap"

const RenderComentarios = ({comentarios, produtoId}) => {

    return (
        <div>
            <h1 className="mx-5">Comentários</h1>
            <div className="mt-5">
                {comentarios.map(comentario => {
                    if (comentario.produtoId == produtoId) {
                        return (
                            <Card className="offset-1 col-10 p-3">
                                <p>{comentario.comentario}</p>
                                <p>-- {comentario.autor}, {comentario.data.substr(8, 2)}-{comentario.data.substr(5, 2)}-{comentario.data.substr(0, 4)}</p>
                            </Card>)
                    }
                })}
            </div>
        </div>
    )
}

export default RenderComentarios