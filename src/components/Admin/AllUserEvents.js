import React from 'react';

const AllUserEvents = (props) => {
    const {_id,event,date,name} = props.events;
    function deleteEvent(id) {
        fetch(`https://thawing-harbor-61215.herokuapp.com/delete/${id}`, {
            method: 'DELETE'
        })
    }
    
    return (
     <div className="col-md-4 col-12">
        <div className="card mb-2">
          <div className="card-body shadow">
            <h5 className="card-title">{name}</h5>
            <p className="card-text"><b>Selected Volunteer network</b> : {event}</p>
            <p><b>Date</b> : {date}</p>
            <button onClick={() => deleteEvent(_id)} className="btn btn-primary">Cancel</button>
          </div>
        </div>
            </div>
    );
};

export default AllUserEvents;