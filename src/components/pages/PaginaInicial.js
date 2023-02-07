import RenderProdutoItem from '../RenderProdutoItem';

import { useSelector } from 'react-redux';

const PaginaInicial = () => {

    const {produtos} = useSelector(rootReducer => rootReducer.produtosReducer)
    
    const produtoRender = produtos.map((produto) => {

        if (produto.destaque) {
            return (
                <div key={produto.id} className="col-10 col-md-3 m-3">
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