import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { getAuth, signOut } from "firebase/auth";
import UseEffectApi from '../data/useEffectApi';
// import Nab from '../navbar';

export default function Home(props) {
    const buttonClick = () =>{
        const auth = getAuth();
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        });
    }

  return (
    <div>
     <nav className={"navbar navbar-expand-lg navbar-dark bg-dark"}>
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">myDashboard</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">Link</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link " href="/">Disabled</a>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <div className= "form-check form-switch text-success">
                            <strong><a className="nav-link active" aria-current="page" href="/">{props.name ? `${props.name}` : <NavLink to="/login" onClick={buttonClick}>Login</NavLink>}</a></strong>
                                <a className="nav-link active" aria-current="page" href="/" ><Link to="/signup" style={{"textDecoration":"none"}}>SignUp</Link></a>
                               <a className="nav-link active" aria-current="page" href="/" ><Link to="/" style={{"textDecoration":"none"}}>LogIn</Link></a>
                                <a className="nav-link active" aria-current="page" href="/" ><Link onClick={buttonClick} style={{"textDecoration":"none"}}>LogOut</Link></a>
                            </div>
                        </form>
                    </div>
                </div>
            </nav>

        {/* <div>
            <h1>
                <Link to="../login">Login</Link><br/>
                <Link to="../login" onClick={buttonClick}>logout</Link>
            </h1>
        </div>
        <div>
            <h1>
                <Link to="../signup">Signup</Link>
            </h1>
        </div>
        <br/>
        <br/>
        <h2>{props.name ? `Welcome - ${props.name}` : "Login please"}</h2> */}
        <UseEffectApi newname={props.name}/>
    </div>
  )
}