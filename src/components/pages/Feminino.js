import RenderProdutoItem from "../RenderProdutoItem";


const Feminino = ({produtos}) => {


    const renderProdutos = produtos.map((produto) => {


    
        if (produto.genero === "feminina" ) {

            return (
                <div key={produto.id} className="col-12 col-md-3 m-3">
                    <RenderProdutoItem produto={produto}/>
                </div>
            )
        }

    });


    return (
        <div>
            <h1 className="mx-5">Produtos Femininos</h1>
            <div className="row offset-1">{renderProdutos}</div>
        </div>
    )
}

export default Feminino