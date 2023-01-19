import './Talks.css';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { events } from '../constants';
import { useNavigate } from 'react-router-dom';

const Talks = () => {

    // hooks
    const [count, setCount] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    // event handlers
    const handleScroll = () => {
        const position = window.scrollY;
        if(position > 700) {
            let changePoint = Math.floor(position/700)
            if(changePoint < events.length)
                setCount(changePoint)
            else
                setCount(events.length-1)
        }
        else
            setCount(0)
    }

    return(
        <>
            <section id='talks-container'>
                <section id='timeline-pane'>
                    <section id='progress-level' style={{height: (count+1)*50 }}></section>
                </section>
                <section id='date-pane'>
                    <section id='date' style={{ marginTop: (count+0.5)*50 }}>
                        <section id='arrow'>➤</section>
                        <h1>{count<events.length? events[count].date: events[events.length-1].date}</h1>
                    </section>
                </section>
                <section id='content-pane'>
                {
                    events.map((item, index) => {
                        return(
                            <section key={index} id='event-pane' style={{backgroundImage: 'url('.concat(item.image).concat(')') }}>
                                <h1 className='event-title'>{item.title}</h1>
                                <p className='event-description'>{item.paragraph}</p>
                                <button className='event-button' onClick={() => navigate(item.link)}>Watch here!</button>
                            </section>
                        )
                    })
                }
                </section>
            </section>
        </>
    )
}

export default Talks;