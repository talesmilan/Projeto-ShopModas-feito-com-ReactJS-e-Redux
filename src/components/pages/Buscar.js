import { Button, Input, Form} from "reactstrap"
import RenderProdutoItem from '../RenderProdutoItem'
import { useState, useEffect } from "react";
import { baseUrl } from "../../baseUrl";
import { useParams } from "react-router-dom";
import BotoesPage from "../BotoesPage";
import { useNavigate } from "react-router-dom"
import axios from 'axios'

const Buscar = () => {

    const [palavra , setPalavra] = useState("")

    const [busca, setBusca] = useState("")

    const [produtos, setProdutos] = useState({rows: []})

    const params = useParams()

    const page = params.page

    const navegar = useNavigate()

    useEffect(() => {
        if (busca !== "") {
            axios.get(`${baseUrl}buscar/${busca}/${page}`).then(response => {
                setProdutos(response.data)
            }).catch(erro => {
                console.log(erro.message)
            })
        }
    }, [page, busca])  

    const handleOnChange = (e) => {
        const value = e.target.value
        setPalavra(value)
    }

    const iniciarBusca = (e) => {
        e.preventDefault()
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
            <Form onSubmit={iniciarBusca} className="offset-sm-3 col-sm-6 my-5 p-5 border rounded border-primary bg-dark">
                <div className="text-center col-7 offset-1 col-sm-6 offset-sm-2 inputBuscar">
                    <Input type="text" value={palavra} onChange={handleOnChange} />
                </div>
                <div className="col-sm-4 botaoBuscar">
                    <Button type="submit" className="mx-2 bg-danger">Buscar</Button>
                </div>
                <div className="m-5"></div>
            </Form>
            <div className="row offset-1">{renderProdutos}</div>
            {produtosEncontrados > 0 && (<BotoesPage page={page} tipo="buscar" totalPage={Math.ceil(produtos.count/9)} />)}
        </div>
    )
}

export default Buscar