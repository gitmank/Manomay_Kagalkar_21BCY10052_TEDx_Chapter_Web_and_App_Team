import React from "react";
import MemberCard from "../components/MemberCard";
import './Team.css';
import { team } from "../constants";

const Team = () => {
    return(
        <>
            <section id='team-container'>
                <h1 id='team-heading'>The Core Team</h1>
                <section id='members-container'>
                    {
                        team.map((member, index) => {
                            return <MemberCard key={index} member={member} />
                        })
                    }
                </section>
            </section>
        </>
    );
}

export default Team;