import {useNavigate} from 'react-router-dom'
//
export default function NotFound(){
    const navigate = useNavigate()
    return(
        <div>
            <h2>NotFound Page</h2>
            <button onClick={()=> navigate("/")}>Go to login</button>
        </div>
    )
}