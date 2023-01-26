import React, {useState} from 'react'
import {Button, Modal, Form, ModalBody, FormGroup, ModalHeader, Label, Input} from 'reactstrap'
import { postComment } from '../redux/ActionCreators';


const CommentButton = ({produtoId}) => {

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
        postComment(produtoId, dados.rating, dados.name, dados.comment)
        console.log(dados)
      }



        return (
            <>
                <div className='mt-5'>
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