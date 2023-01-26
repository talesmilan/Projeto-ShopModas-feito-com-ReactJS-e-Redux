import React, { useState, useRef } from 'react';
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
  ModalHeader
} from 'reactstrap';

function NavBar(args) {
  const [isOpen, setIsOpen] = useState(false);

  const [isModalLoguinOpen, setIsModalLoguinOpen] = useState(false)

  const [isModalCadastroOpen, setIsModalCadastroOpen] = useState(false)

  const [dadosLoguin, setDadosLoguin] = useState({
    username: "",
    password: "",
    remember: false
  })

  const toggle = () => setIsOpen(!isOpen);

  const modalLoguin = () => {
    setIsModalLoguinOpen(!isModalLoguinOpen)  
  }

  const modalCadastrar = () => {
    setIsModalCadastroOpen(!isModalCadastroOpen)
  }

  const handleLogin = (e) => {
    e.preventDefault()
    alert(`Usuário: ${dadosLoguin.username}\nSenha: ${dadosLoguin.password}\nSe lembrar de mim? ${dadosLoguin.remember}`)

  }

  const handleOnChange = (e) => {

    const name = e.target.name
    const target = e.target
    const value = target.type === 'checkbox' ? target.checked : target.value

    setDadosLoguin({...dadosLoguin, [name]: value})
}

  return (
    <div>
      <Navbar {...args} color="dark" dark={true} expand="md">
        <NavbarBrand><NavLink className="nav-link" to="/" >ShopModas</NavLink></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink className="nav-link" to="/">Página Inicial</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" to="/produtos" >Produtos</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" to="/contato">Contato</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" to="/sobre">Sobre</NavLink>
            </NavItem>
          </Nav>
          <Nav className="ms-auto" navbar>
            <NavItem>
              <Button className='bg-dark' outline onClick={modalCadastrar}>
                Cadastrar
              </Button>
            </NavItem>
            <NavItem className='mx-2'>
              <Button className='bg-dark' outline onClick={modalLoguin}>
                Login
              </Button>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
      
      <Modal isOpen={isModalLoguinOpen} toggle={modalLoguin} >
        <ModalHeader toggle={modalLoguin}>Login</ModalHeader>
          <ModalBody>
            <Form onSubmit={handleLogin}>
              <FormGroup>
                <Label htmlFor="username">Nome do usuário</Label>
                <Input type="text" id="username" name="username"
                    onChange={handleOnChange}
                    value={dadosLoguin.username} />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="password">Senha</Label>
                <Input type="password" id="password" name="password"
                    onChange={handleOnChange}
                    value={dadosLoguin.password} />
              </FormGroup>
              <FormGroup check>
                <Label check>
                <Input type="checkbox" name="remember"
                    onChange={handleOnChange}
                    value={dadosLoguin.remember} />
                  Se lembrar de mim?
                </Label>
              </FormGroup>
              <Button className='mt-3' type="submit" value="submit" color='primary'>Login</Button>
            </Form>
          </ModalBody>
        </Modal>
    </div>
  );
}

export default NavBar;