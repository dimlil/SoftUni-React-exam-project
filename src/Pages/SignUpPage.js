import React, {useState} from 'react'
import styles from '../styles/loginAndRegister.module.css'
import {Link} from 'react-router-dom'
import { auth } from '../firebase';

const SignUpPage = (props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [rePassword, setRePassword] = useState('');
    const [email, setEmail] = useState('');
    const user=auth.currentUser;

    const signUp=(event)=>{
        event.preventDefault();

        if(password!==rePassword){
          return alert("Passwords don't match")
        }
        if(password.length<6){
          return alert("Password must be minimum 6 characters")
        }
        auth.createUserWithEmailAndPassword(email,password)
        .then((authUser)=>{
            authUser.user.updateProfile({
                displayName:username
            })
        })
        .then(()=>{
        props.history.push({
          pathname: '/'
        })})
        .catch((err)=>{
          props.history.push({
            pathname: '/sign-up'
        })
        alert(err.message)
        });
    }

    const updatingUsername=(event)=>{
        setUsername(event.target.value);
    }
    const updatingEmail=(event)=>{
        setEmail(event.target.value);
    }
    const updatingPassword=(event)=>{
        setPassword(event.target.value);
    }
    const updatingRePassword=(event)=>{
        setRePassword(event.target.value);
    }
    if(user===null){
      return (
    <form action="#" method="post" className={styles.form}>

    <div>
      <h1>Register</h1>
    </div>

    <div >
      <input onChange={updatingUsername} id="inputUsername" type="text" value={username} name="username" placeholder="Username" required="" />
      <label htmlFor="inputUsername">Username</label>
    </div>

    <div >
      <input onChange={updatingEmail} id="inputEmail" type="email" value={email} name="password" placeholder="Email" required="" />
      <label htmlFor="inputEmail">Email</label>
    </div>

    <div >
      <input onChange={updatingPassword} id="inputPassword" type="password" value={password} name="password" placeholder="Password(Min 6)" required="" />
      <label htmlFor="inputPassword">Password</label>
    </div>

    <div >
      <input onChange={updatingRePassword} id="inputRePassword" type="password" value={rePassword} name="rePassword" placeholder="Re-Password"
        required="" />
      <label htmlFor="inputRePassword">Re-Password</label>
    </div>

    <button onClick={signUp} className={styles.btn} type="submit">Sign Up</button>

    <div>
      <p className={styles.text}> Already have account? Then just <Link to="/login">Login</Link></p>
    </div>
  </form>
    )}
    if (user!==null) {
      return(
      <p>Error you are already loged in</p>
      )    
  }
  return(
      <p>Error</p>
  )
}
export default SignUpPage

