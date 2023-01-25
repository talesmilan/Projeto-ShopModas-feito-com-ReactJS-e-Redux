

const Footer = () => {
    return (
        <div className="footer mt-5">
            <div className="container p-3">
                <div className="text-center col-12">
                <h5 className="">Nosso Endereço</h5>
                        <address>
                          Rua Pedro Dantas, Número: 1009<br />
                          Bairro: Mangatori, Cidade: São Paulo - SP<br />
                          Brasil<br />
                          
                          <i className="fa fa-phone fa-lg"></i>Telefone: (011) 9234-5678<br />
                          <i className="fa fa-fax fa-lg"></i>Fax: (011) 8765-4321<br />
                          <i className="fa fa-envelope fa-lg"></i>Email: <a href="mailto:confusao@comida.net">
                             shopmodas@store.com</a>
                        </address>
                </div>
                <p className="text-center">© Copyright 2023 ShopModas</p>
            </div>
        </div>
    )
}

export default Footer