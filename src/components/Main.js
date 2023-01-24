import Navbar from './Navbar'
import Jumbotron from './Jumbotron'
import {BrowserRouter as Router, Routes, Route,} from 'react-router-dom'
import PaginaInicial from './pages/PaginaInicial'
import Produtos from './pages/Produtos'
import Sobre from './pages/Sobre'
import Contato from './pages/Contato'


const Main = () => {
        return(
            <div>
                <Router>
                    <Navbar />
                    <Jumbotron />
                    <Routes>
                        <Route path="/" element={<PaginaInicial />}/>
                        <Route path="/produtos" element={<Produtos />}/>     
                        <Route path="/contato" element={<Contato />}/> 
                        <Route path="/sobre" element={<Sobre />}/>
                    </Routes>
                </Router>
            </div>
        )
    }


export default Main