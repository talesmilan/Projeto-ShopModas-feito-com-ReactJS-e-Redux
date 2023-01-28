

const MensagemErros = ({erros}) => {
    if (erros.length === 0) {
        return (<div></div>)
    } else {
        return (
            <div className="alert alert-danger" role="alert">
                {erros.map(erro => {return (<p key={erro} className="m-0 p-0">{erro}</p>)})}
            </div>)
    }
}

export default MensagemErros