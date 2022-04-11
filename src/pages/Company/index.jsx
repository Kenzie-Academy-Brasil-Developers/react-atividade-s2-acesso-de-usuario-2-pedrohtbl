import {Link} from 'react-router-dom'
import { useParams } from "react-router-dom"

const Company = ({members}) =>{

    const params = useParams()
    const member = members.find(member => Number(member.id) === Number(params.id))

    return (
        <>
        <div>
            <h1>Detalhes da Empresa</h1>

            <p>
                Nome da Empresa: {member && member.name}
            </p>

            <Link to="/">
                Voltar
            </Link>
        </div> 
        </>
    )
}

export default Company