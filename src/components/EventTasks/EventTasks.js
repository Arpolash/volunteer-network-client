import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';
import EventTasksDetails from './EventTasksDetails';

const EventTasks = () => {
   const [events, setEvents] = useState([])
    useEffect(() =>{
        fetch('https://thawing-harbor-61215.herokuapp.com/userEvents?email='+sessionStorage.getItem('userEmail'))
        .then(res => res.json())
        .then(data => setEvents(data))
    },[events])
    
    return (
        <div className="container">
              <div className="banner text-center mt-5">
                <Link to="/"><img className="w-25" src={logo} alt="not found"/></Link>
            </div>
            <div className="row mt-5">
                {
                    events.map(et => <EventTasksDetails events={et}></EventTasksDetails>)
                }
            </div>
        </div>
    );
};

export default EventTasks;