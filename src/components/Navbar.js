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

function NavBar(args) {

  const [isOpen, setIsOpen] = useState(false);

  const [isModalLoguinOpen, setIsModalLoguinOpen] = useState(false)

  const [erros, setErros] = useState([])

  const {carrinho} = useSelector(rootReducer => rootReducer.carrinhoReducer)

  const dispatch = useDispatch()
  
  const {login} = useSelector(rootReducer => rootReducer.loginReducer)

  const total = carrinho.reduce((acumulador, produto) => { return acumulador += produto.quantity}, 0)
  const toggle = () => setIsOpen(!isOpen);

  const modalLoguin = () => {
    setIsModalLoguinOpen(!isModalLoguinOpen)  
  }

  const modalSair = () => {
    dispatch(removeUser())
    localStorage.setItem('user', JSON.stringify({token: ""}))
  }

  const handleLogin = (e) => {
    e.preventDefault()

    const user = document.querySelector('#username').value

    const senha = document.querySelector("#password").value

    const lembrar = document.querySelector("#remember").checked

    let error = []
    if (user.length === 0) {
      error.push("Você precisa prencher o usuário.")
    }
    if (senha.length === 0) {
      error.push("Você precisa prencher a senha.")
    }

    setErros(error)
    if (error.length === 0) {

      const login = {usuario: user, senha: senha, lembrar: lembrar}

      modalLoguin()
      fetch(baseUrl + 'login', {
        method: 'POST',
        body: JSON.stringify(login),
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: 'same-origin'
    })
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
        .then(response => {
            dispatch(addUser(response))
            localStorage.setItem('user', JSON.stringify(response))
            alert("Login realizado com sucesso")                
        })
        .catch(error => {console.log('Post comments ', error.message)
            alert("Seu login não pode ser realizado.\nErro: " + error.message)})
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
                <NavLink className="link-navbar" to="/buscar">
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
            {login.token === "" ? (
            <NavItem>
              <div className="nav-link botao-login"  outline onClick={modalLoguin}>Login/Cadastrar</div>
            </NavItem>
            ) : (
              <NavItem>
              <div className="nav-link botao-login"  outline onClick={modalSair}>Sair</div>
            </NavItem>
            )}
          </Nav>
        </Collapse>
      </Navbar>
      
      <Modal isOpen={isModalLoguinOpen} toggle={modalLoguin} >
        <ModalHeader toggle={modalLoguin}>Login</ModalHeader>
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
              <FormGroup check>
                <Label check>
                <Input type="checkbox" name="remember" id="remember" />
                  Se lembrar de mim?
                </Label>
              </FormGroup>
              <FormGroup>
                <p className="mt-3">Ainda não tem um cadastro? Crie um <NavLink onClick={modalLoguin} to="/cadastro">clicando aqui.</NavLink></p>
              </FormGroup>
              <Button className='mt-2' type="submit" value="submit" color='primary'>Login</Button>
            </Form>
          </ModalBody>
        </Modal>
    </div>
  );
}

export default NavBar;