import './About.css';
import React from 'react';

const About = () => {
    return(
        <>
            <section className='about-card'>
                <section className='about-card-image'>
                    <img src="https://www.pbs.org/wnet/ted-talks-education/files/2013/04/Duckworth-full-Landscape-Ryan-Lash_A0826.jpg" alt="" />
                </section>
                <section className='about-card-content'>
                    <h1 className='about-card-heading'>
                        What is TED?
                    </h1>
                    <section className='about-card-text'>
                        <p>                        
                            TED began in 1984 as a conference where Technology, 
                            Entertainment and Design converged, but today it spans
                            a multitude of worldwide communities and initiatives 
                            exploring everything from science and business to education, 
                            arts and global issues. Their mission is to spread ideas, 
                            foster community and create impact.
                        </p>
                    </section>
                </section>
            </section>
            <section className='about-card'>
                <section className='about-card-image'>
                    <img src="https://miro.medium.com/max/1183/1*nzZdVI4hBaKsOoftoryD3g.png" alt="" />
                </section>
                <section className='about-card-content'>
                    <h1 className='about-card-heading'>
                        What is TEDx?
                    </h1>
                    <section className='about-card-text'>
                        <p>
                            A TEDx event is a local gathering where live TED-like talks 
                            and performances are shared with the community. TEDx events 
                            are fully planned and coordinated independently, on a 
                            community-by-community basis. The content and design of each 
                            TEDx event is unique and developed independently, but all of 
                            them have features in common.
                        </p>
                    </section>
                </section>
            </section>
            <section className='about-card'>
                <section className='about-card-content'>
                    <h1 className='about-card-heading' style={{width: 'max-content', marginBottom: '50px', paddingLeft: '0'}}>
                        TEDxVITBhopal's Mission
                    </h1>
                    <section className='about-card-text'>
                        <p>                        
                            TEDxVITBhopal was started to organise relevant and engaging events on
                            our campus. We plan events that help students gain useful 
                            insights about their future in the industry and important life skills.
                        </p>
                    </section>
                </section>
            </section>
        </>
    )
}

export default About;