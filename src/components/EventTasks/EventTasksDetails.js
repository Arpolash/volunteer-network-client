import React from 'react';

const EventTasksDetails = (props) => {
  const {_id,event,description,date} = props.events;
  function deleteEvent(id) {
    fetch(`https://thawing-harbor-61215.herokuapp.com/delete/${id}`, {
        method: 'DELETE'
    })     
}

    return (
      <div className="col-md-4 col-12">
        <div className="card mb-2">
          <div className="card-body shadow">
            <h3 className="card-title">{event}</h3>
            <p className="card-text"><b>Description</b> : {description}</p>
            <p><b>Date</b> : {date}</p>
            <button onClick={() => deleteEvent(_id)} className="btn btn-primary">Cancel</button>
          </div>
    </div>
        </div>
    );
};

export default EventTasksDetails;