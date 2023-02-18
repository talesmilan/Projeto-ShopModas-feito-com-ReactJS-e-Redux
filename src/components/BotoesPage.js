import { Button } from "reactstrap"
import { useNavigate } from "react-router-dom"
const BotoesPage = ({page, totalPage, link, tipo}) => {

    const navegar = useNavigate()

    if(link === undefined) {
        link = ""
    } else {
        link = `${link}/`
    }

    const avancar = () => {
        if(page < totalPage) {
            navegar(`/${tipo || "produtos"}/${link}${Number(page) + 1}`)
        }
    }
    const voltar = () => {
        if(page > 1) {
            navegar(`/${tipo || "produtos"}/${link}${Number(page) - 1}`)
        }
    }

    return (
        <div className="row offset-1 mt-3">
            <div className="col-sm-2 col-4">
                {page <= 1 ? (<Button className="bg-primary col-12" disabled>Voltar</Button>) : (<Button className="bg-primary col-12" onClick={voltar}>Voltar</Button>)}
            </div>
            <div className="col-sm-6 col-2"></div>
            <div className="col-sm-2 col-4">
                {page >= totalPage ? (<Button className="bg-primary col-12" disabled >Avançar</Button>) : (<Button className="bg-primary col-12" onClick={avancar}>Avançar</Button>)}
            </div>
        </div>)
}

export default BotoesPage