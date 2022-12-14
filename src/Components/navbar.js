import React from "react";
import {NavLink}   from "react-router-dom";
function Nab(props) {
    return (
        <>
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
                                <a className="nav-link active" aria-current="page" href="/">sneha</a>
                                <a className="nav-link active" aria-current="page" href="/"><NavLink to="/login" onClick={props.btnclick}>Logout</NavLink> </a>
                            </div>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    )
}
export default Nab;