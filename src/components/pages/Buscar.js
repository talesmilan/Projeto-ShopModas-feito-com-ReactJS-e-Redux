import { Button, Input, Card, CardHeader, CardImg, CardTitle } from "reactstrap"
import { useState } from "react"
import { baseUrl } from "../../baseUrl"
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


const Buscar = ({produtos}) => {

const [busca , setBusca] = useState("")

    const handleOnChange = (e) => {
        const value = e.target.value
        setBusca(value)
    }


    const renderProdutos = produtos.map((produto) => {


        const nomeProduto = produto.nome.toUpperCase()

        const nomeProdutoSemAcento = nomeProduto.normalize('NFD').replace(/[\u0300-\u036f]/g, "")

        const buscaProduto = busca.toUpperCase()
    
        const buscaSemAcento = buscaProduto.normalize('NFD').replace(/[\u0300-\u036f]/g, "")
    
        if (buscaSemAcento && nomeProdutoSemAcento.substr(0, buscaSemAcento.length) == buscaSemAcento) {

            return (
                <div key={produto.id} className="col-12 col-md-3 m-3">
                    <RenderProdutoItem produto={produto} buscar={busca} />
                </div>
            )
        }

    });
    

    return (
        <div>
            <h1 className="mx-5">Busque por um produto</h1>
            <div className=" offset-3 col-sm-6 my-5 col-12 p-5 border rounded border-primary bg-dark">
                <div className="text-center col-sm-6 offset-2 inputBuscar">
                    <Input type="text" value={busca} onChange={handleOnChange} />
                </div>
                <div className="col-sm-4 botaoBuscar">
                    <Button className="mx-2 bg-danger">Buscar</Button>
                </div>
                <div className="m-5 col-12"></div>
            </div>
            <div className="row offset-1">{renderProdutos}</div>
        </div>
    )
}

export default Buscar