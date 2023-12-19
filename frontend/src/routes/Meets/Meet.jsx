import { Link } from 'react-router-dom';
import { getMeets } from "../../services/meets.service";
import { useState, useEffect } from "react";

const Meets = () => {
    const [meets, setMeets] = useState([]);

    useEffect(() => {
        getMeets().then((response)=>{
            setMeets(response);
        });
        console.log(meets);        
    }, [])

    return (
        <>
            <h1>Meets</h1>
            <Link to='/meets/create'>Crear Nuevo </Link>
            <ul>
                {meets.map((meet) => (
                    <li key={meet._id}><Link to={`/meets/${meet._id}`}>{meet.motive}</Link></li>
                ))}
            </ul>
        </>
    )
}

export default Meets