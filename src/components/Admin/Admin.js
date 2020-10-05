import React, { useEffect, useState } from 'react';
import AllUserEvents from './AllUserEvents';
import logo from '../../images/logo.png';
import { Link } from 'react-router-dom';

const Admin = () => {
    const [events, setEvents] = useState([])
    useEffect(() =>{
        fetch('https://thawing-harbor-61215.herokuapp.com/allUserEvents')
        .then(res => res.json())
        .then(data => setEvents(data))
    },[events])

    return (
        <div className="container">
             <div className="banner text-center mt-5">
                <Link to="/"><img className="w-25" src={logo} alt=""/></Link>
            </div>
                  <div className="row mt-5">
                {
                    events.map(et => <AllUserEvents events={et}></AllUserEvents>)
                }
            </div>
        </div>
    );
};

export default Admin;