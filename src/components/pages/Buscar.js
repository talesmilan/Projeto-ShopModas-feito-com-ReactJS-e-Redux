import { Button, Input} from "reactstrap"
import RenderProdutoItem from '../RenderProdutoItem'
import { useState, useEffect } from "react";
import { baseUrl } from "../../baseUrl";
import { useParams } from "react-router-dom";
import BotoesPage from "../BotoesPage";
import { useNavigate } from "react-router-dom"

const Buscar = () => {

    const [palavra , setPalavra] = useState("")

    const [busca, setBusca] = useState("")

    const [produtos, setProdutos] = useState({rows: []})

    const params = useParams()

    const page = params.page

    const navegar = useNavigate()

    useEffect(() => {
        if (busca !== "") {
            fetch(baseUrl + `buscar/${busca}/${page}`)
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
            .then(response => {
                setProdutos(response)
            })
            .catch(error => console.log(error.message));
        }
    }, [page, busca])  

    const handleOnChange = (e) => {
        const value = e.target.value
        setPalavra(value)
    }

    const iniciarBusca = () => {
        navegar("/buscar/1")
        setBusca(palavra.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, ""))
    }

    var renderProdutos;
    var produtosEncontrados = 0
    if (busca !== "") {
        renderProdutos = produtos.rows.map((produto) => {
                produtosEncontrados++
                return (
                    <div key={produto.id} className="col-10 col-md-3 m-3">
                        <RenderProdutoItem produto={produto} />
                    </div>
                )
        });
        if (produtosEncontrados === 0) {
            renderProdutos = (<div>Não foi encontrado nenhum produto com esse nome.</div>)
        }
    } else {
        renderProdutos = (<div>Você deve digitar o nome de um produto para realizar uma busca.</div>)
    }

    

    return (
        <div>
            <h1 className="mx-5">Busque por um produto</h1>
            <div className="offset-sm-3 col-sm-6 my-5 p-5 border rounded border-primary bg-dark">
                <div className="text-center col-7 offset-1 col-sm-6 offset-sm-2 inputBuscar">
                    <Input type="text" value={palavra} onChange={handleOnChange} />
                </div>
                <div className="col-sm-4 botaoBuscar">
                    <Button onClick={iniciarBusca} className="mx-2 bg-danger">Buscar</Button>
                </div>
                <div className="m-5"></div>
            </div>
            <div className="row offset-1">{renderProdutos}</div>
            {produtosEncontrados > 0 && (<BotoesPage page={page} tipo="buscar" totalPage={Math.ceil(produtos.count/9)} />)}
        </div>
    )
}

export default Buscar