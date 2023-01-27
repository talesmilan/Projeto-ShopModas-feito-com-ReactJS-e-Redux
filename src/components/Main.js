import Navbar from './Navbar'
import Jumbotron from './Jumbotron'
import { Routes, Route} from 'react-router-dom'
import PaginaInicial from './pages/PaginaInicial'
import Sobre from './pages/Sobre'
import Contato from './pages/Contato'
import { useEffect, useState } from 'react'
import { baseUrl } from '../baseUrl'
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

const Main = (props) => {

    const [produtos, setProdutos] = useState([])

    const fetchProduto = () => {
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
        .then(response => setProdutos(response))
        .catch(error => console.log(error.message));
    }

    useEffect(() => {
        fetchProduto()
    }, [])

        return(
            <div>
                <Navbar />
                <Jumbotron />
                <Routes>
                    <Route path="/" element={<PaginaInicial produtos={produtos} />}/>
                    <Route path="/produto/:produtoId" 
                        element={<RenderProduto produtos={produtos} />} />    
                    <Route path="/contato" element={ <Contato />}/> 
                    <Route path="/sobre" element={<Sobre />}/>
                    <Route path="/cadastro" element={<Cadastro />}/>
                    <Route path="/buscar" element={<Buscar produtos={produtos} />}/>
                    <Route path="/produtos/roupas" element={<Roupas produtos={produtos} />}/>
                    <Route path="/produtos/calcados" element={<Calcados produtos={produtos} />}/>
                    <Route path="/produtos/acessorios" element={<Acessorios produtos={produtos} />}/>
                    <Route path="/produtos/bermudas" element={<Bermudas produtos={produtos} />}/>
                    <Route path="/produtos/camisetas" element={<Camisetas produtos={produtos} />}/>
                    <Route path="/produtos/bones" element={<Bones produtos={produtos} />}/>
                    <Route path="/produtos/tenis" element={<Tenis produtos={produtos} />}/>
                    <Route path="/produtos/feminino" element={<Feminino produtos={produtos} />}/>
                    <Route path="/produtos/masculino" element={<Masculino produtos={produtos} />}/>
                </Routes>
                <Footer />
            </div>
        )
    }


export default Main