import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { useState } from 'react';

const Cadastro = () => {


    const [dadosCadastro, setDadosCadastro] = useState({
        nome: "",
        email: "",
        cpf: "",
        usuario: "",
        senha: "",
        estado: "",
        cidade: "",
        bairro: "",
        rua: "",
        numero: "",
        promocoes: false

      })
    
    
      const handleCadastro = (e) => {
        e.preventDefault()
        alert(`Nome: ${dadosCadastro.nome}\nEmail: ${dadosCadastro.email}\nCPF: ${dadosCadastro.cpf}\nUsuario: ${dadosCadastro.usuario}\nSenha: ${dadosCadastro.senha}\nEstado: ${dadosCadastro.estado}\nCidade: ${dadosCadastro.cidade}\nBairro: ${dadosCadastro.bairro}\nRua: ${dadosCadastro.rua}\nNumero: ${dadosCadastro.numero}\nPromoções: ${dadosCadastro.promocoes}`)

    
      }
    
      const handleOnChange = (e) => {
    
        const name = e.target.name
        const target = e.target
        const value = target.type === 'checkbox' ? target.checked : target.value
        setDadosCadastro({...dadosCadastro, [name]: value})
    }

    return (
        <div>
            <h1 className="mx-5">Cadastro</h1>
            <div className='offset-2 col-8 mt-5 border p-5 rounded border-dark cadastro'> 
                <Form onSubmit={handleCadastro}>
                    <FormGroup>
                        <Label for="nome">Nome Completo</Label>
                        <Input type="text" name="nome" id="nome" placeholder="Digite seu nome completo"
                            onChange={handleOnChange} value={dadosCadastro.nome} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="email">Email</Label>
                        <Input type="email" name="email" id="email" placeholder="Digite seu email"
                            onChange={handleOnChange} value={dadosCadastro.email} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="cpf">CPF</Label>
                        <Input type="number" name="cpf" id="cpf" placeholder="Digite seu CPF"
                            onChange={handleOnChange} value={dadosCadastro.cpf} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="usuario">Crie um Usuário</Label>
                        <Input type="text" name="usuario" id="usuario" placeholder="Crie um usuário"
                            onChange={handleOnChange} value={dadosCadastro.usuario} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="senha">Crie uma senha</Label>
                        <Input type="password" name="senha" id="senha" placeholder="Crie uma senha de 6 a 10 digitos" onChange={handleOnChange} value={dadosCadastro.senha} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="estado">Estado</Label>
                        <Input type="select" name="estado" id="estado"
                            onChange={handleOnChange} value={dadosCadastro.estado}>
                            <option value="" checked disabled>Selecione seu estado</option>
                            <option>SP</option>
                            <option>RJ</option>
                            <option>MG</option>
                            <option>BA</option>
                            <option>MT</option>
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="cidade">Cidade</Label>
                        <Input type="text" name="cidade" id="cidade" placeholder="Digite o nome da sua cidade" onChange={handleOnChange} value={dadosCadastro.cidade} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="rua">Nome da Rua</Label>
                        <Input type="text" name="rua" id="rua" placeholder="Digite o nome da sua rua"
                            onChange={handleOnChange} value={dadosCadastro.rua} />
                    </FormGroup>
                    <FormGroup className='col-12 col-sm-7 bairro'>
                        <Label for="bairro">Bairro</Label>
                        <Input type="text" name="bairro" id="bairro" placeholder="Digite o nome do seu bairro" onChange={handleOnChange} value={dadosCadastro.bairro} />
                    </FormGroup>
                    <FormGroup className='col-12 col-sm-4 numero'>
                        <Label for="numero">Número</Label>
                        <Input type="number" name="numero" id="numero" placeholder="Digite o número da sua casa" onChange={handleOnChange} value={dadosCadastro.numero} />
                    </FormGroup>
                    <FormGroup check className='m-4'>
                    <Label check>
                        <Input type="checkbox" name="promocoes" onChange={handleOnChange} checked={dadosCadastro.promocoes} />
                        Deseja receber promoções no seu email?
                    </Label>
                    </FormGroup>
                    <Button type="submit" value="submit">Cadastrar</Button>
                </Form>
            </div>    
        </div>
    )
}

export default Cadastro