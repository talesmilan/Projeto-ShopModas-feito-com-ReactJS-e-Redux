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
import { useDispatch} from 'react-redux'
import { baseUrl } from '../baseUrl'
import Carrinho from './pages/Carrinho'
import { addUser } from '../redux/login'
import PedidoAceito from './pages/PedidoAceito'
import { adicionaVariosProdutos } from '../redux/carrinho'
import axios from 'axios'

const Main = (props) => {

    const dispatch = useDispatch()

    useEffect(() => {
        const tokenRecuperado = localStorage.getItem("user");
        const carrinhoRecuperado = localStorage.getItem("carrinho");
        if (carrinhoRecuperado !== null) {
            const carrinhoConvertido = JSON.parse(carrinhoRecuperado)
            console.log(carrinhoConvertido)
            if(carrinhoConvertido.objeto !== undefined) {
                dispatch(adicionaVariosProdutos(carrinhoConvertido.objeto))
            }
        }
        if(tokenRecuperado != undefined) {
            if(tokenRecuperado.token != "") {
                var tokenConvertido = JSON.parse(tokenRecuperado)
                console.log(tokenConvertido.token)
                const config = {
                    headers: { Authorization: `Bearer ${tokenConvertido.token}` }
                };
                axios.get(baseUrl + "autorizacao", config).then((response) => {
                    dispatch(addUser(response))
                }).catch(erro => {
                    console.log(erro.message)
                })
            }
        }
 
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
                    <Route path="/carrinho" element={<Carrinho />}/>
                    <Route path="/buscar/:page" element={<Buscar/>}/>
                    <Route path="/produtos/roupas/:page" element={<Roupas/>}/>
                    <Route path="/produtos/calcados/:page" element={<Calcados/>}/>
                    <Route path="/produtos/acessorios/:page" element={<Acessorios/>}/>
                    <Route path="/produtos/bermudas/:page" element={<Bermudas/>}/>
                    <Route path="/produtos/camisetas/:page" element={<Camisetas/>}/>
                    <Route path="/produtos/bones/:page" element={<Bones/>}/>
                    <Route path="/produtos/tenis/:page" element={<Tenis/>}/>
                    <Route path="/produtos/feminino/:page" element={<Feminino/>}/>
                    <Route path="/produtos/masculino/:page" element={<Masculino/>}/>
                    <Route path="/pedido-realizado" element={<PedidoAceito/>}/>
                </Routes>
                <Footer />
            </div>
        )
    }

export default Main