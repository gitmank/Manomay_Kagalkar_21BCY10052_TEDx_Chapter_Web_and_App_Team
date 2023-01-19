import './MemberCard.css';
import React from 'react';
import twitterIcon from '../resources/twitter.png';
import instagramIcon from '../resources/instagram.png';
import linkedinIcon from '../resources/linkedin.png';
import youtubeIcon from '../resources/youtube.png';

const MemberCard = ({ member }) => {
    return(
        <>
            <section className='member-card'>
                <section className='member-card-image'>
                    <img src={'https://static.vecteezy.com/system/resources/thumbnails/000/643/462/small/vector60-7915-01.jpg'} alt="" />
                </section>
                <section className='member-card-content'>
                    <h1 className='member-name'>{member.name}</h1>
                    <h1 className='member-role'>{member.role}</h1>
                    <h1 className='member-team'>{member.team}</h1>
                    <section id='social-links'>
                        <a href={member.socials.youtubeLink}><img src={youtubeIcon} className='social-icon' alt="" /></a>
                        <a href={member.socials.twitterLink}><img src={twitterIcon} className='social-icon' alt="" /></a>
                        <a href={member.socials.instagramLink}><img src={instagramIcon} className='social-icon' alt="" /></a>
                        <a href={member.socials.linkedinLink}><img src={linkedinIcon} className='social-icon' alt="" /></a>
                    </section>
                </section>
            </section>
        </>
    )
}

export default MemberCard;