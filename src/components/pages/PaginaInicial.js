import RenderProdutoItem from '../RenderProdutoItem';



const PaginaInicial = ({produtos}) => {



    const produtoRender = produtos.map((produto) => {

        if (produto.destaque) {
            return (
                <div key={produto.id} className="col-12 col-md-3 m-3">
                    <RenderProdutoItem produto={produto}/>
                </div>
            )
        }

    });

    return (
        <div>
            <h1 className='mx-5'>Destaques</h1>
            <div className="row offset-1">{produtoRender}</div>
            

        </div>
    )
}

export default PaginaInicial