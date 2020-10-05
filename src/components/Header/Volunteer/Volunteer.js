import React from 'react';
import { Link } from 'react-router-dom';

const Volunteer = (props) => {
  const handleNetwork = (netWorkName)=>{
    sessionStorage.setItem("netWorkName",netWorkName)
  }

    return (
        <>
        <div className="col-md-3 col-6 mb-3">
            <div className="card">
           <img className="w-100" src={props.data.img}  alt="..."/>
           <Link to="/register" onClick={() => handleNetwork(props.data.name)} className="btn btn-primary w-100 py-3">{props.data.name}</Link>

           </div>
        </div>
  
  </>
    );
};

export default Volunteer;