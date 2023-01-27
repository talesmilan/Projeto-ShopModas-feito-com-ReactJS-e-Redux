import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const Cadastro = () => {
    return (
        <div>
            <h1 className="mx-5">Cadastro</h1>
            <div className='offset-2 col-8 mt-5 border p-5 rounded border-dark cadastro'> 
                <Form>
                    <FormGroup>
                        <Label for="nome">Nome Completo</Label>
                        <Input type="text" name="nome" id="nome" placeholder="Digite seu nome completo" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="email">Email</Label>
                        <Input type="email" name="email" id="email" placeholder="Digite seu email" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="cpf">CPF</Label>
                        <Input type="number" name="cpf" id="cpf" placeholder="Digite seu CPF" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="usuario">Crie um Usuário</Label>
                        <Input type="text" name="usario" id="usuario" placeholder="Crie um usuário" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="senha">Crie uma senha</Label>
                        <Input type="password" name="senha" id="senha" placeholder="Crie uma senha de 6 a 10 digitos" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="estado">Estado</Label>
                        <Input type="select" name="estado" id="estado" value="">
                            <option value="" checked disabled>Selecione seu estado</option>
                            <option>SP</option>
                            <option>RJ</option>
                            <option>MG</option>
                            <option>BA</option>
                            <option>MT</option>
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="rua">Nome da Rua</Label>
                        <Input type="text" name="rua" id="rua" placeholder="Digite o nome da sua rua" />
                    </FormGroup>
                    <FormGroup className='col-12 col-sm-7 bairro'>
                        <Label for="bairro">Bairro</Label>
                        <Input type="text" name="bairro" id="bairro" placeholder="Digite o nome do seu bairro" />
                    </FormGroup>
                    <FormGroup className='col-12 col-sm-4 numero'>
                        <Label for="numero">Número</Label>
                        <Input type="number" name="numero" id="numero" placeholder="Digite o número da sua casa" />
                    </FormGroup>
                    <FormGroup check className='m-4'>
                    <Label check>
                        <Input type="checkbox" />
                        Deseja receber promoções no seu email?
                    </Label>
                    </FormGroup>
                    <Button>Cadastrar</Button>
                </Form>
            </div>    
        </div>
    )
}

export default Cadastro