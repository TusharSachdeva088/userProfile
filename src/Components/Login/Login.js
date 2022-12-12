import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../../firebase';
import InputControl from '../InputControl/InputControl';
import styles from "./Login.module.css";

export default function Login() {
    const [values, setValues] = useState({
        email: "",
        pass: "",
      });
      const [error, setError] = useState()
      const [submitButtonDisables, setSubmitButtonDisabled] = useState(false);
      const navigation = useNavigate();

      const handleSubmission = () =>{
        if(!values.email || !values.pass){
          setError("Please Fill all fields")
          return;
        }
        setError(" ");
        setSubmitButtonDisabled(true)
        signInWithEmailAndPassword(auth, values.email,values.pass).then((res) =>{
          console.log(res);
          setSubmitButtonDisabled(false);
          navigation("/home");
        }).catch((err) =>{
          setSubmitButtonDisabled(false);
          setError(err.message);
        });
      }
  return (
    <div className={styles.container}>
        <div className={styles.innerBox}>
        <h1 className={styles.heading}>Login</h1>

        <InputControl 
        label="Email" 
        placeholder="Enter email address"
        onChange={(event) =>setValues((prev) =>({...prev, email: event.target.value }))}
        />
        <InputControl 
        label="Password" 
        placeholder="Enter Password"
        type="password"
        maxlength="12"
        onChange={(event) =>setValues((prev) =>({...prev, pass: event.target.value }))}
        />

        <div className={styles.footer}>
        <b className={styles.error}>{error}</b>
            <button onClick={handleSubmission} disabled={submitButtonDisables}>Login</button>
                <p>Already have an account?{" "}
                <span>
                    <Link to="/signup">Sign up</Link>
                </span>
                </p>
        </div>
        </div>
    </div>
  )
}