import { FormGroup, Form, Label, Input, Button } from "reactstrap"
import { useState } from "react"
import { baseUrl } from "../../baseUrl"

const Contato = () => {

    const [dados, setDados] = useState({
        nome: "",
        email: "",
        motivo: "",
        mensagem: "",
        promocoes: false

      })
    
      const [ erros, setErros ] = useState([])
    
      const handleContato = (e) => {
        e.preventDefault()

        
    const novaMensagem = {
        nome: dados.nome,
        email: dados.email,
        motivo: dados.motivo,
        mensagem: dados.mensagem,
        promocoes: dados.promocoes
    }

    novaMensagem.data = new Date().toISOString()

    fetch(baseUrl + 'mensagens', {
        method: 'POST',
        body: JSON.stringify(novaMensagem),
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
            alert("Mensagem enviada com sucesso")
            
        })
        .catch(error => {console.log('Post comments ', error.message)
            alert("Sua mensagem não pode ser enviada.\nErro: " + error.message)})
    
      }
    
      const handleOnChange = (e) => {
    
        const name = e.target.name
        const target = e.target
        const value = target.type === 'checkbox' ? target.checked : target.value
        setDados({...dados, [name]: value})
    }


    return (
        <div>
            <h1 className="mx-5">Entre em Contato com a Gente</h1>
            <div className='offset-2 col-8 mt-5 border p-5 rounded border-dark cadastro'> 
                <Form onSubmit={handleContato}>
                    <FormGroup>
                        <Label for="nome">Nome Completo</Label>
                        <Input type="text" name="nome" id="nome" placeholder="Digite seu nome completo"
                            onChange={handleOnChange} value={dados.nome} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="email">Email</Label>
                        <Input type="email" name="email" id="email" placeholder="Digite seu email"
                            onChange={handleOnChange} value={dados.email} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="motivo">Motivo da Mensagem</Label>
                        <Input type="select" name="motivo" id="motivo" onChange={handleOnChange} value={dados.motivo}>
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
                        <Input type="textarea" name="mensagem" id="mensagem" placeholder="Digite sua mensagem" rows="10" onChange={handleOnChange} value={dados.mensagem} />
                    </FormGroup>
                    <FormGroup check className='m-4'>
                    <Label check>
                        <Input type="checkbox" onChange={handleOnChange} name="promocoes" checked={dados.promocoes} />
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