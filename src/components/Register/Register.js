import React, { useContext } from 'react';
import { UserContext } from '../../App';
import logo from '../../images/logo.png'

const Register = () => {
    const [loggedInUser,setLoggedInUser] = useContext(UserContext)
    console.log(loggedInUser.netWorkName)
    return (
        <div className="container">
            <div className="banner text-center mt-5">
                 <img className="w-25" src={logo} alt=""/>
            </div>
         <div className="register register mt-5 mx-auto">

         <form action="https://thawing-harbor-61215.herokuapp.com/addUser" method="post">
                <h3 className="text-center mb-5">Register as a Volunteer</h3>
                <input className="mb-3" type="text" value={loggedInUser.name}  name="name" />
                <br/>
                <input className="mb-3" type="text" value={loggedInUser.email} name="email"/>
                <br/>
                <input className="mb-3" type="date" name="date" id="" placeholder="date" required/>
                <br/>
                <input className="mb-3" type="text" name="description" id="" placeholder="Description" required/>
                <br/>
                <p className="mb-3 text-primary">Volunteer Network Name :</p>
                <input className="mb-3" name="event" type="text" value={sessionStorage.getItem('netWorkName')}/>
                <br/>
                <button className="btn btn-primary" type="submit">Registration</button>
            </form>

         </div>
        </div>
    );
};

export default Register;