import React from "react";
import logo from '../resources/logo-white.png';
import './Home.css';
import { copy, socialLinks } from '../constants';
import { useNavigate } from 'react-router-dom';
import twitterIcon from '../resources/twitter.png';
import instagramIcon from '../resources/instagram.png';
import linkedinIcon from '../resources/linkedin.png';
import youtubeIcon from '../resources/youtube.png';
import gmapsIcon from '../resources/gmaps.png';

const Home = () => {

    // hooks
    const navigate = useNavigate();

    // handlers
    const onHeroButtonClick = () => {
        navigate('/about');
    }

    return(
        <section id="home">

            <section id="logo-container">
                <img src={logo} alt="TEDx logo" id="home-logo"/>
            </section>

            <section id="hero-container">
                <h1>{copy.heroText}</h1>
                <button id='hero-button' onClick={onHeroButtonClick}>{copy.heroButtonText}<span></span></button>
            </section>

            <section id="info-container">
                <section id="footer">
                    <section id='socials' className='footer-section'>
                        <h1 className="footer-heading">Socials</h1>
                        <section id='social-links'>
                            <a href={socialLinks.youtubeLink}><img src={youtubeIcon} className='social-icon' alt="" /></a>
                            <a href={socialLinks.twitterLink}><img src={twitterIcon} className='social-icon' alt="" /></a>
                            <a href={socialLinks.instagramLink}><img src={instagramIcon} className='social-icon' alt="" /></a>
                            <a href={socialLinks.linkedinLink}><img src={linkedinIcon} className='social-icon' alt="" /></a>
                            <a href={socialLinks.gmapsLink}><img src={gmapsIcon} className='social-icon' alt="" /></a>
                        </section>
                    </section>
                    <section id='socials' className='footer-section'>
                        <h1 className="footer-heading">Contact</h1>
                        <h1>{copy.studentContact.name}<br></br><a href={'mailto:' + copy.studentContact.email}>{copy.studentContact.email}</a></h1>
                        <h1>{copy.facultyContact.name}<br></br><a href={'mailto:' + copy.facultyContact.email}>{copy.facultyContact.email}</a></h1>
                    </section>
                </section>

                <section id='license-line'>{copy.licenseLine}</section>

            </section>
        </section>
    );
}

export default Home;