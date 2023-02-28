import React, { useState } from 'react';
import {NavLink} from 'react-router-dom'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Button,
  Form,
  Input,
  Label,
  FormGroup,
  Modal,
  ModalBody,
  ModalHeader, 
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu
} from 'reactstrap';
import MensagemErros from './MensagemErros'
import { baseUrl } from '../baseUrl';
import { useDispatch, useSelector } from 'react-redux'
import { addUser } from '../redux/login';
import { removeUser } from '../redux/login';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { addMessage } from '../redux/messageSuccess';

function NavBar(args) {

  const [isOpen, setIsOpen] = useState(false);

  const [isModalLoginOpen, setIsModalLoginOpen] = useState(false)

  const [erros, setErros] = useState([])

  const {carrinho} = useSelector(rootReducer => rootReducer.carrinhoReducer)

  const dispatch = useDispatch()
  
  const navegar = useNavigate()

  const {token} = useSelector(rootReducer => rootReducer.loginReducer)

  const total = carrinho.reduce((acumulador, produto) => { return acumulador += produto.quantity}, 0)
  const toggle = () => setIsOpen(!isOpen);

  const modalLogin = () => {
    setIsModalLoginOpen(!isModalLoginOpen)  
  }

  const modalSair = () => {
    dispatch(removeUser())
    localStorage.setItem('user', JSON.stringify({token: ""}))
  }

  const handleLogin = (e) => {
    e.preventDefault()

    const user = document.querySelector('#username').value

    const senha = document.querySelector("#password").value


    let error = []
    if (user.length === 0) {
      error.push("Você precisa prencher o usuário.")
    }
    if (senha.length === 0) {
      error.push("Você precisa prencher a senha.")
    }

    setErros(error)
    if (error.length === 0) {

      const login = {usuario: user, senha: senha}

      modalLogin()

      axios.post(baseUrl + 'login', login).then((response) => {
        dispatch(addUser(response.data.token))
        localStorage.setItem('user', JSON.stringify(response.data))
        navegar("/")
        window.scrollTo(0, 140)
        dispatch(addMessage("Seu login foi realizado com sucesso."))
      }).catch((erro) => {
        alert("Seu login não pode ser realizado.\nErro: " + erro.message)
      })
    }

  }


  return (
    <div>
      <Navbar {...args} color="dark" dark={true} expand="md">
        <NavbarBrand href="/" >ShopModas</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink className="nav-link" to="/">Página Inicial</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Produtos
              </DropdownToggle>
              <DropdownMenu>
                <NavLink className="link-navbar" to="produtos/roupas/1">
                  <DropdownItem>Roupas</DropdownItem>
                </NavLink>
                <NavLink className="link-navbar" to="produtos/calcados/1">
                  <DropdownItem>Calçados</DropdownItem>
                </NavLink>
                <NavLink className="link-navbar" to="produtos/acessorios/1">
                  <DropdownItem>Acessórios</DropdownItem>
                </NavLink>
                <DropdownItem divider />
                <NavLink className="link-navbar" to="produtos/camisetas/1">
                  <DropdownItem>Camisetas</DropdownItem>
                </NavLink>
                <NavLink className="link-navbar" to="produtos/tenis/1">
                  <DropdownItem>Tênis</DropdownItem>
                </NavLink>
                <NavLink className="link-navbar" to="produtos/bones/1">
                  <DropdownItem>Bonés</DropdownItem>
                </NavLink>
                <NavLink className="link-navbar" to="produtos/bermudas/1">
                  <DropdownItem>Bermudas</DropdownItem>
                </NavLink>
                <DropdownItem divider />
                <NavLink className="link-navbar" to="produtos/masculino/1">
                  <DropdownItem>Masculino</DropdownItem>
                </NavLink>
                <NavLink className="link-navbar" to="produtos/feminino/1">
                  <DropdownItem>Feminino</DropdownItem>
                </NavLink>
                <DropdownItem divider />
                <NavLink className="link-navbar" to="/buscar/1">
                  <DropdownItem>Buscar</DropdownItem>
                </NavLink>
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem>
              <NavLink className="nav-link" to="/contato">Contato</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" to="/sobre">Sobre</NavLink>
            </NavItem>
          </Nav>
          <Nav className="ms-auto" navbar>
            <NavItem>
              <NavLink className="nav-link" to="/carrinho">
                Carrinho ({total})
              </NavLink>
            </NavItem>
            {token === "" ? (
            <NavItem>
              <div className="nav-link botao-login"  outline onClick={modalLogin}>Login/Cadastrar</div>
            </NavItem>
            ) : (
              <NavItem>
              <div className="nav-link botao-login"  outline onClick={modalSair}>Sair</div>
            </NavItem>
            )}
          </Nav>
        </Collapse>
      </Navbar>
      
      <Modal isOpen={isModalLoginOpen} toggle={modalLogin} >
        <ModalHeader toggle={modalLogin}>Login</ModalHeader>
          <ModalBody>
            <MensagemErros erros={erros} />
            <Form onSubmit={handleLogin}>
              <FormGroup>
                <Label htmlFor="username">Nome do usuário</Label>
                <Input type="text" id="username" name="username" required />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="password">Senha</Label>
                <Input type="password" id="password" name="password" required/>
              </FormGroup>
              <FormGroup>
                <p className="mt-3">Ainda não tem uma conta? Crie uma <NavLink onClick={modalLogin} to="/cadastro">clicando aqui.</NavLink></p>
              </FormGroup>
              <Button className='mt-2' type="submit" value="submit" color='primary'>Login</Button>
            </Form>
          </ModalBody>
        </Modal>
    </div>
  );
}

export default NavBar;