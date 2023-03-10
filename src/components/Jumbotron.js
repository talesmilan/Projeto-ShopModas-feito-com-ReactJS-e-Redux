import { NavLink } from "react-router-dom"
import { Button } from "reactstrap"
const Jumbotron = () => {

    return (
        <div className="jumbotron col-12 ">
            <h1 className="display-4 text-white p-4 col-12  text-center">ShopModas</h1>
            <p className="lead text-white offset-1 p-10 col-10 col-sm-10 text-center">ShopModas é uma loja com 10 anos de experiência no mercado vendendo roupas de qualidades a um preço acessível. Nossos produtos tem um selo de qualidade verde que indica que tudo é produzido com repeito ao meio ambiente.</p>
            <p className="lead align-center col-12 text-center">
                <NavLink className="m-0 p-0" to="/sobre">
                    <Button className="bg-primary btn-lg mb-4 mx-4 my-3">Saiba mais</Button>
                </NavLink>
            </p>
        </div>
    )

}

export default Jumbotron
