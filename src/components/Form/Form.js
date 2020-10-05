import React, { useContext } from 'react';
import logo from '../../images/logo.png';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../../firebaseConfig';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../../App';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faGoogle} from '@fortawesome/free-brands-svg-icons';


firebase.initializeApp(firebaseConfig);
const Form = () => {
    const [loggedInUser,setLoggedInUser] = useContext(UserContext)
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };
    const googleSignIn = () =>{
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider)
        .then(res =>{
            const email = res.user.email;
            const name = res.user.displayName;
            setLoggedInUser({email: email, name : name})
            sessionStorage.setItem('userEmail',email);
            history.replace(from);
        })
       }
    return (
        <div className="container">
            <div className="banner text-center mt-5">
            <Link to="/"><img className="w-25" src={logo} alt=""/></Link>
            </div>
            <div className="form text-center mt-5">
                <h5 className="py-3 font-weight-bold">Login</h5>
                <button onClick={googleSignIn}><FontAwesomeIcon  className="icon" icon={faGoogle} /> Continue with Google </button>
                <p>Don't have an account? <span onClick={googleSignIn}>Create an account</span></p>
            </div>
        </div>
    );
};

export default Form;