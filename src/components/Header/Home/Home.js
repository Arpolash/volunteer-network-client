import React, { useEffect, useState } from 'react';
import Volunteer from '../Volunteer/Volunteer';

const Home = () => {
    const [data, setData] = useState([])
    useEffect(() =>{
        fetch('https://thawing-harbor-61215.herokuapp.com/products')
        .then(res => res.json())
        .then(data => setData(data))
    },[])
    return (
        <div className="container">
            <div className="row">
              {
                  data.map(data => <Volunteer data={data}></Volunteer>)
              }
            </div>
        </div>
    );
};

export default Home;