import React, { useState } from 'react';
import { Link , useNavigate} from 'react-router-dom';
import InputControl from '../InputControl/InputControl';
import styles from "./Signup.module.css";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../../firebase';

export default function Signup() {
      const [values, setValues] = useState({
        name: "",
        email: "",
        pass: "",
      });
      const [error, setError] = useState()
      const [submitButtonDisables, setSubmitButtonDisabled] = useState(false);
      const navigation = useNavigate();

      const handleSubmission = () =>{
        if(!values.name || !values.email || !values.pass){
          setError("Please Fill all fields")
          return;
        }
        setError(" ");
        setSubmitButtonDisabled(true)
        createUserWithEmailAndPassword(auth, values.email,values.pass).then((res) =>{
          console.log(res);
          setSubmitButtonDisabled(false);
          const user = res.user
          updateProfile(user, {
            displayName:values.name
          });
          navigation("/");
        }).catch((err) =>{
          setSubmitButtonDisabled(false);
          setError(err.message);
        });
      }

  return (
    <div className={styles.container}>
        <div className={styles.innerBox}>
        <h1 className={styles.heading}>Signup</h1>

        <InputControl label="userName" 
        placeholder="Enter Name" 
        onChange={(event) =>setValues((prev) =>({...prev, name: event.target.value }))}/>
        <InputControl label="Email"
        placeholder="Enter email address"
        onChange={(event) =>setValues((prev) =>({...prev, email: event.target.value }))}
        />
        <InputControl label="Password"
        placeholder="Enter Password"
        onChange={(event) =>setValues((prev) =>({...prev, pass: event.target.value }))}
        />
        <div className={styles.footer}>
            <b className={styles.error}>{error}</b>
            <button onClick={handleSubmission} disabled={submitButtonDisables}>Signup</button>
                <p>Already have an account?{" "}
                <span>
                    <Link to="/login">Login</Link>
                </span>
                </p>
        </div>
        </div>
    </div>
  )
}