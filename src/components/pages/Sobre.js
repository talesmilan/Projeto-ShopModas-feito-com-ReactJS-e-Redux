import { Card, CardBody, CardHeader } from "reactstrap"

const Sobre = () => {
    return (
        <div>
            <h1 className="mx-5">Nossa História</h1>
            <div className="row">
                <div className="offset-1 col-10 col-md-5 mt-5 sobreTexto text-center">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
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
                                <dd className="col-6">R$ 2,950,071</dd>
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