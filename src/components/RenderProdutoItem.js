import { Card, CardHeader, CardImg, CardTitle } from "reactstrap"
import { baseUrl } from "../baseUrl"
import { Link } from "react-router-dom"

function RenderProdutoItem({produto}) {

    return (
        <Card>
            <Link className="marcador-link" to={`/produto/${produto.id}`}>
                <CardHeader>
                    <CardTitle>{produto.nome} - <span>R${produto.preco}</span></CardTitle>         
                </CardHeader>
                
                <CardImg height="200px" src={baseUrl + produto.imagem} alt={produto.nome} />
                
            </Link>
        </Card>
    )

}

export default RenderProdutoItem