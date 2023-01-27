import { FormGroup, Form, Label, Input, Button } from "reactstrap"

const Contato = () => {
    return (
        <div>
            <h1 className="mx-5">Entre em Contato com a Gente</h1>
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
                        <Label for="motivo">Motivo da Mensagem</Label>
                        <Input type="select" name="motivo" id="motivo" value="">
                            <option value="" checked disabled>Selecione uma opção</option>
                            <option>Sugestão</option>
                            <option>Reclamação</option>
                            <option>Dúvida</option>
                            <option>Elogio</option>
                            <option>Outros</option>
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="mensagem">Mensagem</Label>
                        <Input type="textarea" name="mensagem" id="mensagem" placeholder="Digite sua mensagem" rows="10" />
                    </FormGroup>
                    <FormGroup check className='m-4'>
                    <Label check>
                        <Input type="checkbox" />
                        Deseja receber promoções no seu email?
                    </Label>
                    </FormGroup>
                    <Button>Enviar Mensagem</Button>
                </Form>
            </div>    
        </div>
    )
}

export default Contato