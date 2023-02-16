import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { useState } from 'react';
import MensagemErros from '../MensagemErros';
import ValidaCPF from '../ValidaCPF';


const Cadastro = () => {


    const [dadosCadastro, setDadosCadastro] = useState({
        nome: "",
        email: "",
        cpf: "",
        usuario: "",
        senha: "",
        password: "",
        estado: "",
        cidade: "",
        bairro: "",
        rua: "",
        numero: "",
        promocoes: false

      })
    
    const [ erros, setErros ] = useState([])

      const handleCadastro = (e) => {
        e.preventDefault()

        const error = []

        if (dadosCadastro.nome === "" || dadosCadastro.email === "" || dadosCadastro.cpf === "" || dadosCadastro.usuario === "" || dadosCadastro.senha === "" || dadosCadastro.estado === "" || dadosCadastro.cidade === "" || dadosCadastro.bairro === "" || dadosCadastro.rua === "" || dadosCadastro.numero === "" || dadosCadastro.password === "") {
            error.push("Todos os campos devem ser preenchidos.")
        }
        if (dadosCadastro.nome.length !== 0 && (dadosCadastro.nome.length < 5 || dadosCadastro.nome.length > 40)) {
            error.push("O nome deve ter entre 5 a 40 caracteres.")
        }
        if (dadosCadastro.email.length !== 0 && (dadosCadastro.email.length < 5 || dadosCadastro.email.length > 40)) {
            error.push("O email deve ter entre 5 a 40 caracteres.")
        }
        if (dadosCadastro.email.length !== 0 && !dadosCadastro.email.includes("@")) {
            error.push('O email deve conter um arroba "@".')
        }
        if (dadosCadastro.email.length !== 0 && !dadosCadastro.email.includes(".")) {
            error.push('O email deve conter um ponto.')
        }
        const cpf = new ValidaCPF(dadosCadastro.cpf)
        if (dadosCadastro.cpf.length !== 0 && !cpf.valida()) {
            error.push('CPF inválido.')
        }
        if (dadosCadastro.usuario.length !== 0 && (dadosCadastro.usuario.length < 5 || dadosCadastro.usuario.length > 20)) {
            error.push('O usuário deve ter entre 5 a 20 caracteres.')
        }
        if (dadosCadastro.senha.length !== 0 && (dadosCadastro.senha.length < 6 || dadosCadastro.senha.length > 10)) {
            error.push('A senha deve ter entre 6 a 10 digitos.')
        }
        if (dadosCadastro.senha.length !== 0 && dadosCadastro.senha !== dadosCadastro.password) {
            error.push('Você deve digitar a senha que você quer criar duas vezes corretamente.')
        }

        setErros(error)

        if (error.length === 0) {
            alert(`Cadastro realizado com sucesso!\nNome: ${dadosCadastro.nome}\nEmail: ${dadosCadastro.email}\nCPF: ${dadosCadastro.cpf}\nUsuario: ${dadosCadastro.usuario}\nSenha: ${dadosCadastro.senha}\nEstado: ${dadosCadastro.estado}\nCidade: ${dadosCadastro.cidade}\nBairro: ${dadosCadastro.bairro}\nRua: ${dadosCadastro.rua}\nNumero: ${dadosCadastro.numero}\nPromoções: ${dadosCadastro.promocoes}`)
        } else {
            window.scrollTo(0, 140)
        }


    
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
            <div className='offset-lg-2 col-12 col-lg-8 mt-5 border p-5 rounded border-dark cadastro'>
                <MensagemErros erros={erros} /> 
                <Form onSubmit={handleCadastro}>
                    <h2 className='mb-3'>Dados Pessoais</h2>
                    <FormGroup>
                        <Label for="nome">Nome Completo</Label>
                        <Input type="text" name="nome" id="nome" placeholder="Digite seu nome completo"
                            onChange={handleOnChange} value={dadosCadastro.nome} required />
                    </FormGroup>
                    <FormGroup>
                        <Label for="email">Email</Label>
                        <Input type="email" name="email" id="email" placeholder="Digite seu email"
                            onChange={handleOnChange} value={dadosCadastro.email} required />
                    </FormGroup>
                    <FormGroup>
                        <Label for="cpf">CPF</Label>
                        <Input type="number" name="cpf" id="cpf" placeholder="Digite seu CPF"
                            onChange={handleOnChange} value={dadosCadastro.cpf} required />
                    </FormGroup>
                    <FormGroup>
                        <Label for="usuario">Crie um Usuário</Label>
                        <Input type="text" name="usuario" id="usuario" placeholder="Crie um usuário"
                            onChange={handleOnChange} value={dadosCadastro.usuario} required />
                    </FormGroup>
                    <FormGroup>
                        <Label for="senha">Crie uma senha</Label>
                        <Input type="password" name="senha" id="senha" placeholder="Crie uma senha de 6 a 10 digitos" onChange={handleOnChange} value={dadosCadastro.senha} required />
                    </FormGroup>
                    <FormGroup>
                        <Label for="senha">Confirme sua senha</Label>
                        <Input type="password" name="password" id="password" placeholder="Digite novamente sua senha" onChange={handleOnChange} value={dadosCadastro.password} required />
                    </FormGroup>
                    <h2 className='my-4'>Endereço</h2>
                    <FormGroup>
                        <Label for="estado">Estado</Label>
                        <Input type="select" name="estado" id="estado"
                            onChange={handleOnChange} value={dadosCadastro.estado} required>
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
                        <Input type="text" name="cidade" id="cidade" placeholder="Digite o nome da sua cidade" onChange={handleOnChange} value={dadosCadastro.cidade} required />
                    </FormGroup>
                    <FormGroup>
                        <Label for="rua">Nome da Rua</Label>
                        <Input type="text" name="rua" id="rua" placeholder="Digite o nome da sua rua"
                            onChange={handleOnChange} value={dadosCadastro.rua} required />
                    </FormGroup>
                    <FormGroup className='col-12 col-sm-7 bairro'>
                        <Label for="bairro">Bairro</Label>
                        <Input type="text" name="bairro" id="bairro" placeholder="Digite o nome do seu bairro" onChange={handleOnChange} value={dadosCadastro.bairro} required />
                    </FormGroup>
                    <FormGroup className='col-12 col-sm-4 numero'>
                        <Label for="numero">Número</Label>
                        <Input type="number" name="numero" id="numero" placeholder="Digite o número da sua casa" onChange={handleOnChange} value={dadosCadastro.numero} required />
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