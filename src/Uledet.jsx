import axios from 'axios';
import React, { useEffect, useState } from 'react';
import anniversaires from "./anniversaires"

const Uledet = ({ title, day, url, target }) => {
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
        setUledets(anniversaires.filter((a) => (
            a.target?.includes(target) &&
            (a.greg_date.slice(0, a.greg_date.length - 5) === dayWithoutYear || (a.heb_cal && a.heb_cal.slice(0, a.heb_cal.length - 5) === ayomWithoutYear)))))
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
                    {uledets.map((u) => {
                        const typeSymbol = {
                            birth: "🎂",
                            death: "🕯️",
                            wedding: "💍",
                            event: "📅"
                        }[u.type] || "❓";
                        return (
                            <li title={u.notes || ""} style={{ cursor: "pointer", listStyle: "none", marginLeft: "-1em" }} key={u.type + "_" + u.name}>
                                {typeSymbol} : {u.name} ({u.greg_date + (u.heb_cal ? " - " : "") + u.heb_cal})
                                <b>{u.notes ? " *" : ""}</b>
                            </li>
                        );
                    })}
                </ul>
            </div>}
        </div >
    );
};

export default Uledet;