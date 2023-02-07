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
import {useSelector} from 'react-redux'

function NavBar(args) {

  const [isOpen, setIsOpen] = useState(false);

  const [isModalLoguinOpen, setIsModalLoguinOpen] = useState(false)

  const [erros, setErros] = useState([])

  const {carrinho} = useSelector(rootReducer => rootReducer.carrinhoReducer)

 
  const total = carrinho.reduce((acumulador, produto) => { return acumulador += produto.quantity}, 0)
  const toggle = () => setIsOpen(!isOpen);

  const modalLoguin = () => {
    setIsModalLoguinOpen(!isModalLoguinOpen)  
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
      alert(`Usuário: ${user}\nSenha: ${senha}\nSe lembrar de mim? ${lembrar}`)
      modalLoguin()
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
                <NavLink className="link-navbar" to="produtos/roupas">
                  <DropdownItem>Roupas</DropdownItem>
                </NavLink>
                <NavLink className="link-navbar" to="produtos/calcados">
                  <DropdownItem>Calçados</DropdownItem>
                </NavLink>
                <NavLink className="link-navbar" to="produtos/acessorios">
                  <DropdownItem>Acessórios</DropdownItem>
                </NavLink>
                <DropdownItem divider />
                <NavLink className="link-navbar" to="produtos/camisetas">
                  <DropdownItem>Camisetas</DropdownItem>
                </NavLink>
                <NavLink className="link-navbar" to="produtos/tenis">
                  <DropdownItem>Tênis</DropdownItem>
                </NavLink>
                <NavLink className="link-navbar" to="produtos/bones">
                  <DropdownItem>Bonés</DropdownItem>
                </NavLink>
                <NavLink className="link-navbar" to="produtos/bermudas">
                  <DropdownItem>Bermudas</DropdownItem>
                </NavLink>
                <DropdownItem divider />
                <NavLink className="link-navbar" to="produtos/masculino">
                  <DropdownItem>Masculino</DropdownItem>
                </NavLink>
                <NavLink className="link-navbar" to="produtos/feminino">
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
            <NavItem>
              <div className="nav-link botao-login"  outline onClick={modalLoguin}>Login/Cadastrar</div>
            </NavItem>
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