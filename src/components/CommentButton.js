import React, {useState} from 'react'
import {Button, Modal, Form, ModalBody, FormGroup, ModalHeader, Label, Input} from 'reactstrap'
import { baseUrl } from '../baseUrl'
import {redirect, useHistory} from 'react-router-dom'
import {Card} from 'reactstrap'


const CommentButton = ({produtoId, fetchComentario}) => {

    const [dados, setDados] = useState({
        isModalOpen: false,
        name: "",
        rating: "",
        comment: ""
      })


    const handleInputChange = (event) => {
        const target = event.target
        const value = target.type === 'checkbox' ? target.checked : target.value
        const name = target.name

        setDados({...dados, [name]: value})

    }


    const toggleModal = () => {
        setDados({
          isModalOpen: !dados.isModalOpen
        });
      }

      const handleComment = (values) => {
        values.preventDefault()
        toggleModal()
        console.log(dados)
        
    const newComment = {
        produtoId: produtoId,
        nota: dados.rating,
        autor: dados.name,
        comentario: dados.comment
    }

    newComment.data = new Date().toISOString()

    fetch(baseUrl + 'comentarios', {
        method: 'POST',
        body: JSON.stringify(newComment),
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
            alert("Comentario adicionado com sucesso")
            fetchComentario()
            
        })
        .catch(error => {console.log('Post comments ', error.message)
            alert("Seu comentário não pode ser postado.\nErro: " + error.message)})
      
      
      
        }



        return (
            <>
                <div className='offset-1 mt-5'>
                    <Button onClick={toggleModal}><span className='fa fa-pencil fa-lg mr-1'></span> Comentar</Button>
                </div>
                <Modal isOpen={dados.isModalOpen} toggle={toggleModal} >
                    <ModalHeader toggle={toggleModal}>Escreva um comentário</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={handleComment}>
                            <FormGroup>
                                <Label htmlFor="rating">Nota</Label>
                                <Input className='col-12' type="select" name="rating" id="rating"
                                    value={dados.rating}
                                    onChange={handleInputChange}>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </Input>
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="name">Seu Nome</Label>
                                <Input type="text" id="name" name="name" placeholder='Seu nome'
                                    value={dados.name}
                                    onChange={handleInputChange} />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="comment">Comentario</Label>
                                <Input type="textarea" id="comment" name="comment" rows="5"
                                    value={dados.comment}
                                    onChange={handleInputChange} />
                            </FormGroup>
                            <Button type="submit" value="submit" color='primary'>Enviar</Button>
                        </Form>
                    </ModalBody>
                </Modal>
                        </>
        )
    }


export default CommentButton