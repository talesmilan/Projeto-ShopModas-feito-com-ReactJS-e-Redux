import { Card, CardBody, CardHeader } from "reactstrap"

const Sobre = () => {
    return (
        <div>
            <h1 className="mx-5">Nossa História</h1>
            <div className="row">
                <div className="offset-1 col-10 col-md-5 mt-5 sobreTexto text-center">
                    <p>A ShopModas é uma loja de roupas online com mais de 10 anos de experiência no mercado. Desde sua criação, temos trabalhado incansavelmente para oferecer aos nossos clientes uma ampla variedade de roupas de alta qualidade e estilos modernos. Nós acreditamos que todos merecem se sentir bonitos e confiantes em suas roupas, e temos dedicado nossa empresa para tornar isso possível.</p>
                    <p>Nossa loja oferece uma seleção de roupas para homens, mulheres e crianças, incluindo camisetas, calças, vestidos, casacos e muito mais. Temos um time de estilistas experientes que selecionam cuidadosamente cada item que oferecemos, garantindo que estejamos sempre oferecendo as últimas tendências da moda. Além disso, nós trabalhamos com fornecedores de confiança para garantir que nossas roupas são fabricadas com materiais de alta qualidade e são produzidos de forma ética.</p>
                </div>
                <div className="col-10 col-md-5 mt-5 sobreCartao">
                    <Card>
                        <CardHeader className="bg-primary text-white">Visão Geral dos Fatos</CardHeader>
                        <CardBody>
                            <dl className="row p-1">
                                <dt className="col-6">Começou</dt>
                                <dd className="col-6">07 Jan. 2013</dd>
                                <dt className="col-6">Principal Acionista</dt>
                                <dd className="col-6">Bras. WD Inc.</dd>
                                <dt className="col-6">Faturamento anual</dt>
                                <dd className="col-6">R$ 2.950.071,00</dd>
                                <dt className="col-6">Funcionários</dt>
                                <dd className="col-6">128</dd>
                            </dl>
                        </CardBody>
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default Sobre