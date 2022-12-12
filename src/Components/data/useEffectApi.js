import React,{useState,useEffect} from 'react'
import {Loading} from './Loading';
import './useeffect2.css'

const UseEffectApi = (props) => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);

    const getUsers = async() => {
        try{
            setLoading(true)
        const response = await fetch('https://api.github.com/users');
        // const data = await response.json();
        // console.log(data);
        setUsers(await response.json())
        }
        catch(error) {
            console.log("myerror is " + error);
        }finally{
setLoading(false)
        }
    } 

useEffect(() =>{
    getUsers()
},[])

    if (loading) {
        return <Loading /> 
    }
    
    return (
        <>

            <h1> Welcome to my page ------- {props.newname}</h1>

            <div className="container-fluid mt-5">
                <div className="row text-center">

                {
                    users.map((elem) => {
                        return(
                            <div className="col-10 col-md-4 mt-5 ">
                    <div className="card p-2 bkg">
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img src={elem.avatar_url} className="img-fluid rounded-start" alt="..." />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">{elem.login}</h5>
                                        <h3 className="card-text">Web-developer</h3>
                                        <span> Articles</span><span> Folllowers</span><span> Rating</span><br />
                                        <span> 1</span><span>  -100-  </span><span> -8.9-</span>
                                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                        )
                    })
                }

                </div>
            </div>


        </>
    )
}

export default UseEffectApi