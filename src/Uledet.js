import axios from 'axios';
import React, { useEffect, useState } from 'react';
import anniversaires from "./anniversaires"

const Uledet = ({ title, day, url }) => {
    const [ayom, setAyom] = useState("")
    const [events, setEvents] = useState(null)
    const [uledets, setUledets] = useState([])

    useEffect(() => {
        axios
            .get(url)
            .then((res) => {
                setAyom(res.data.hd + " " + res.data.hm + " " + res.data.hy)
                setEvents(res.data.events)
            });
    }, [url]);

    useEffect(() => {
        // Recherche dans la base
        var dayWithoutYear = day.slice(0, day.length - 5);
        var ayomWithoutYear = ayom.slice(0, ayom.length - 5);
        setUledets(anniversaires.filter((a) => (a[1].slice(0, a[1].length - 5) === dayWithoutYear || a[2].slice(0, a[2].length - 5) === ayomWithoutYear)))
    }, [ayom]);

    return (
        <div className='date-container'>
            <div className={title === "Aujourd'hui" ? "day today" : "day"}>
                {title} : {day} - {(ayom)}
            </div>
            {events && <div>
                <h4>Evénements dans le calendrier hébraïque :</h4>
                <ul>
                    {events.map((e) => (
                        <li>{e}</li>
                    ))}
                </ul>
            </div>}
            {uledets && uledets.length > 0 && <div>
                <h4>Anniversaires :</h4>
                <ul>
                    {uledets.map((u) => (
                        <li>{u[0] + " : " + u[1] + " - " + u[2]}</li>
                    ))}
                </ul>
            </div>}
        </div >
    );
};

export default Uledet;