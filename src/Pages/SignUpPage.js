import React, {useState,useEffect} from 'react'
import styles from '../styles/loginAndRegister.module.css'
import {Link} from 'react-router-dom'
import { auth } from '../firebase';

const SignUpPage = (props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [rePassword, setRePassword] = useState('');
    const [email, setEmail] = useState('');
    const [user, setUser] = useState(null);
    // console.log("his: ",props.history);
    useEffect(()=>{
        const unsubscribe=auth.onAuthStateChanged((authUser)=>{
            if (authUser) {
                console.log(authUser);
                setUser(authUser)
            } else {
                setUser(null)
            }
            return ()=>{
                unsubscribe()
            }
        })
    },[user,username])

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
        .then(
          window.$isAuth=true
        )
        .then(
          props.history.push({
            pathname: '/'
          })
        )
        .catch((err)=>{
          if(err){
            window.$isAuth=false
            props.history.push({
            pathname: '/sign-up'
          })
            console.log(err.message)
          }
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
    return (
        <form action="#" method="post" className={styles.form}>

    <div>
      <h1>Register</h1>
    </div>

    <div >
      <input onChange={updatingUsername} type="text" value={username} name="username" placeholder="Username" required=""
        autofocus="" />
      <label for="inputUsername">Username</label>
    </div>

    <div >
      <input onChange={updatingEmail} type="email" value={email} name="password" placeholder="Email" required="" />
      <label for="inputPassword">Email</label>
    </div>

    <div >
      <input onChange={updatingPassword} type="password" value={password} name="password" placeholder="Password(Min 6)" required="" />
      <label for="inputPassword">Password</label>
    </div>

    <div >
      <input onChange={updatingRePassword} type="password" value={rePassword} name="rePassword" placeholder="Re-Password"
        required="" />
      <label for="inputRePassword">Re-Password</label>
    </div>

    <button onClick={signUp} className={styles.btn} type="submit">Sign Up</button>

    <div>
      <p className={styles.text}> Already have account? Then just <Link to="/login">Login</Link></p>
    </div>
  </form>
    )
}
export default SignUpPage

