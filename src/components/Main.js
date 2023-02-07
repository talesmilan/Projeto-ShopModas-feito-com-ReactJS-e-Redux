import Navbar from './Navbar'
import Jumbotron from './Jumbotron'
import { Routes, Route} from 'react-router-dom'
import PaginaInicial from './pages/PaginaInicial'
import Sobre from './pages/Sobre'
import Contato from './pages/Contato'
import { useEffect } from 'react'
import RenderProduto from './pages/RenderProduto'
import Footer from './Footer'
import Cadastro from './pages/Cadastro'
import Buscar from './pages/Buscar'
import Roupas from './pages/Roupas'
import Acessorios from './pages/Acessorios'
import Calcados from './pages/Calcados'
import Camisetas from './pages/Camisetas'
import Tenis from './pages/Tenis'
import Bones from './pages/Bones'
import Bermudas from './pages/Bermudas'
import Feminino from './pages/Feminino'
import Masculino from './pages/Masculino'
import { useSelector, useDispatch } from 'react-redux'
import { addProduto } from '../redux/produtos'
import { baseUrl } from '../baseUrl'

const Main = (props) => {


    const {produtos} = useSelector(rootReducer => rootReducer.produtosReducer)

    const dispatch = useDispatch()

    console.log(produtos)

    useEffect(() => {

        fetch(baseUrl + 'produtos')
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
        .then(response => dispatch(addProduto(response)))
        .catch(error => console.log(error.message));

    }, [])

        return(
            <div>
                <Navbar />
                <Jumbotron />
                <Routes>
                    <Route path="/" element={<PaginaInicial/>}/>
                    <Route path="/produto/:produtoId" 
                        element={<RenderProduto/>} />    
                    <Route path="/contato" element={ <Contato />}/> 
                    <Route path="/sobre" element={<Sobre />}/>
                    <Route path="/cadastro" element={<Cadastro />}/>
                    <Route path="/buscar" element={<Buscar/>}/>
                    <Route path="/produtos/roupas" element={<Roupas/>}/>
                    <Route path="/produtos/calcados" element={<Calcados/>}/>
                    <Route path="/produtos/acessorios" element={<Acessorios/>}/>
                    <Route path="/produtos/bermudas" element={<Bermudas/>}/>
                    <Route path="/produtos/camisetas" element={<Camisetas/>}/>
                    <Route path="/produtos/bones" element={<Bones/>}/>
                    <Route path="/produtos/tenis" element={<Tenis/>}/>
                    <Route path="/produtos/feminino" element={<Feminino/>}/>
                    <Route path="/produtos/masculino" element={<Masculino/>}/>
                </Routes>
                <Footer />
            </div>
        )
    }


export default Main