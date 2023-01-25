import Navbar from './Navbar'
import Jumbotron from './Jumbotron'
import {BrowserRouter as Router, Routes, Route,} from 'react-router-dom'
import PaginaInicial from './pages/PaginaInicial'
import Produtos from './pages/Produtos'
import Sobre from './pages/Sobre'
import Contato from './pages/Contato'
import { useEffect, useState } from 'react'
import { baseUrl } from '../baseUrl'
import RenderProduto from './pages/RenderProduto'
import Footer from './Footer'


const Main = () => {

    const [produtos, setProdutos] = useState([])

    useEffect(() => {
        fetch(baseUrl + 'produtos')
        .then((response) => response.json())
        .then(response => setProdutos(response))
    }, [])

        return(
            <div>
                <Router>
                    <Navbar />
                    <Jumbotron />
                    <Routes>
                        <Route path="/" element={<PaginaInicial produtos={produtos} />}/>
                        <Route path="/produtos" element={<Produtos />}/> 
                        <Route path="/produto/:produtoId" 
                            element={<RenderProduto produtos={produtos} />} />    
                        <Route path="/contato" element={<Contato />}/> 
                        <Route path="/sobre" element={<Sobre />}/>
                    </Routes>
                    <Footer />
                </Router>
            </div>
        )
    }


export default Main