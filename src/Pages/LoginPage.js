import React, {useState} from 'react'
import styles from '../styles/loginAndRegister.module.css'
import {Link} from 'react-router-dom'
import { auth } from '../firebase'

const Login = (props) => {
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const updatingEmail=(event)=>{
        setEmail(event.target.value);
    }
    const updatingPassword=(event)=>{
        setPassword(event.target.value);
    }


    const signIn=(event)=>{
        event.preventDefault()
        auth.signInWithEmailAndPassword(email,password)
        .then(          
            props.history.push({
            pathname: '/'
          }))
        .catch((err)=>{
            props.history.push({
                pathname: '/login'
            })
            setTimeout(() => {
                alert(err.message)
            }, 10);
        })
    }
    return (
        <div>
        <form action="#" method="post" className={styles.form}>
            <div>
            <h1 className={styles.login}>Login</h1>
            </div>
        
            <div>
            <input onChange={updatingEmail} type="email" value={email} id="inputUsername" name="email" placeholder="Email" required=""/>
            <label htmlFor="inputUsername">Email</label>
            </div>
        
            <div>
            <input onChange={updatingPassword} type="password" value={password} id="inputPassword" name="password" placeholder="Password" required="" />
            <label htmlFor="inputPassword">Password</label>
            </div>
        
            <button onClick={signIn} className={styles.btn} type="submit">Sign In</button>
        
            <div>
            <p className={styles.text}> Don't have account?  Then just <Link to="/sign-up">Sign Up</Link></p>

            </div>
        </form>
        </div>
    )
}
export default Login

