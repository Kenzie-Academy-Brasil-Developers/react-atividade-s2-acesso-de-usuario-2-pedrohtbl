import {Link} from 'react-router-dom'

const Home = ({members}) =>{

    return (
        <>
        <ul>
            {members.map(member => 
                <li key={member.id}>

                    {member.type === 'pj'?
                    (<Link to={`/company/${member.id}`}>{member.name}</Link>) 
                    : 
                    (<Link to={`/customer/${member.id}`}>{member.name}</Link>)}

                </li> )
            }
        </ul>
        </>
    )
}

export default Home