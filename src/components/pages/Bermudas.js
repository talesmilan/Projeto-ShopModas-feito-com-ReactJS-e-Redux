import RenderProdutoItem from "../RenderProdutoItem";


const Bermudas = ({produtos}) => {


    const renderProdutos = produtos.map((produto) => {


    
        if (produto.tipo === "bermuda" ) {

            return (
                <div key={produto.id} className="col-12 col-md-3 m-3">
                    <RenderProdutoItem produto={produto}/>
                </div>
            )
        }

    });


    return (
        <div>
            <h1 className="mx-5">Bermudas</h1>
            <div className="row offset-1">{renderProdutos}</div>
        </div>
    )
}

export default Bermudas