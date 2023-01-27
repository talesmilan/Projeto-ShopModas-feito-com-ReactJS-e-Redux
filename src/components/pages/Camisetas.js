import RenderProdutoItem from "../RenderProdutoItem";


const Camisetas = ({produtos}) => {


    const renderProdutos = produtos.map((produto) => {


    
        if (produto.tipo === "camiseta" ) {

            return (
                <div key={produto.id} className="col-12 col-md-3 m-3">
                    <RenderProdutoItem produto={produto}/>
                </div>
            )
        }

    });


    return (
        <div>
            <h1 className="mx-5">Camisetas</h1>
            <div className="row offset-1">{renderProdutos}</div>
        </div>
    )
}

export default Camisetas