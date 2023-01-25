import {Card, CardHeader, CardImg, CardText, CardTitle, CardImgOverlay, Breadcrumb, BreadcrumbItem} from 'reactstrap' 
import {Link} from 'react-router-dom'
import { baseUrl } from '../../baseUrl'

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



const PaginaInicial = ({produtos}) => {



    const menu = produtos.map((produto) => {
        return (
            <div key={produto.id} className="col-12 col-md-3 m-3">
                <RenderProdutoItem produto={produto}/>
            </div>
        )
    });

    return (
        <div>
            <h1 className='mx-5'>Destaques</h1>
            <div className="row offset-1">{menu}</div>

        </div>
    )
}

export default PaginaInicial