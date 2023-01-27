import Navbar from './Navbar'
import Jumbotron from './Jumbotron'
import { Routes, Route, useParams} from 'react-router-dom'
import PaginaInicial from './pages/PaginaInicial'
import Produtos from './pages/Produtos'
import Sobre from './pages/Sobre'
import Contato from './pages/Contato'
import { useEffect, useState } from 'react'
import { baseUrl } from '../baseUrl'
import RenderProduto from './pages/RenderProduto'
import Footer from './Footer'
import { fetchProdutos } from './FetchsExport'


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
                    <Route path="/produtos" element={<Produtos />}/> 
                    <Route path="/produto/:produtoId" 
                        element={<RenderProduto produtos={produtos} />} />    
                    <Route path="/contato" element={ <Contato />}/> 
                    <Route path="/sobre" element={<Sobre />}/>
                </Routes>
                <Footer />
            </div>
        )
    }


export default Main