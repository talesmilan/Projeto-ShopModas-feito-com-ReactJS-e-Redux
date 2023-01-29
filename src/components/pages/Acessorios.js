import RenderProdutoItem from "../RenderProdutoItem";


const Acessorios = ({produtos}) => {


    const renderProdutos = produtos.map((produto) => {


    
        if (produto.tipo === "bone" ) {

            return (
                <div key={produto.id} className="col-10 col-md-3 m-3">
                    <RenderProdutoItem produto={produto}/>
                </div>
            )
        }

    });


    return (
        <div>
            <h1 className="mx-5">Acessórios</h1>
            <div className="row offset-1">{renderProdutos}</div>
        </div>
    )
}

export default Acessorios