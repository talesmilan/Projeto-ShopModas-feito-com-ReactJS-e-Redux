import Navbar from './Navbar'
import Jumbotron from './Jumbotron'
import { Switch, Route, withRouter, Redirect} from 'react-router-dom'
import PaginaInicial from './pages/PaginaInicial'
import Produtos from './pages/Produtos'
import Sobre from './pages/Sobre'
import Contato from './pages/Contato'
import { useEffect, useState } from 'react'
import { baseUrl } from '../baseUrl'
import RenderProduto from './pages/RenderProduto'
import Footer from './Footer'
import { postComment, postFeedback, fetchProdutos, fetchComments } from '../redux/ActionCreators';
import {connect} from 'react-redux'

const mapStateToProps = state => {
    return {
      produtos: state.produtos,
      comentarios: state.comentarios
    }
  }
  
  const mapDispatchToProps = dispatch => ({
    postComment: (produtoId, nota, autor, comentario) => dispatch(postComment(produtoId, nota, autor, comentario)),
    fetchProdutos: () => { dispatch(fetchProdutos())},
    fetchComments: () => dispatch(fetchComments())
  });

const Main = (props) => {


    useEffect(() => {

        props.fetchProdutos();
        props.fetchComments();

    }, [])

        const RenderProdutoId = ({match}) => {
            return (<div>Teste {console.log(match)} </div>)
        }

        return(
            <div>
                <Navbar />
                <Jumbotron />
                <Switch>
                    <Route path="/pagina-inicial" component={() => <PaginaInicial produtos={props.produtos.produtos} />}/>
                    <Route path="/produtos" component={() => <Produtos />}/> 
                    <Route path="/produto/:produtoId" 
                        component={({match}) => <RenderProduto produtos={props.produtos.produtos} comentarios={props.comentarios.comentarios} params={match.params.produtoId} />} />    
                    <Route path="/contato" component={() => <Contato />}/> 
                    <Route path="/sobre" component={() => <Sobre />}/>
                    <Redirect to="pagina-inicial" />
                </Switch>
                <Footer />
            </div>
        )
    }


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main))