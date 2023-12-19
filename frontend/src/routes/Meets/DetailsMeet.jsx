import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMeet } from "../../services/meets.service";

const DetailsMeet = () => {
    const { meetId } = useParams();
    const [meet, setMeet] = useState([]);

    useEffect(() => {
        getMeet(meetId).then((response) => {
            setMeet(response);
        });
        console.log(meet);
    }, [])

    return (
        <div>
            <br />
            <h2>Detalles de la reunion {meetId}: </h2>
            <div>
                <p>Motivo: {meet.motive}</p>
                <p>Hora: {meet.hour}</p>
                <p>Fecha: {meet.date}</p>
                <p>Estado: {meet.state}</p>
            </div>
        </div>
    )
}

export default DetailsMeet;