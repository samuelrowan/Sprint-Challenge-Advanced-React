import React, { useState, useEffect } from "react";
import axios from "axios";
import CompetitorCard from "./CompetitorCard";

export default function CharacterList() {
    const [competitors, setCompetitors] = useState([]);

    useEffect(() => {
        axios
            .get(`http://localhost:5000/api/players`)
            .then(response => {
                setCompetitors(response.data.results);
            })
            .catch(error => {
                console.log("sucks to suck", error);
            })
    })
    console.log(competitors);

    return (
        <div className="competitor">
            {competitors.map(competitor => {
                return (
                    <CompetitorCard 
                        key={competitor.id}
                        name={competitor.name}
                        country={competitor.country}
                    />
                )
            })}
        </div>
    );
}