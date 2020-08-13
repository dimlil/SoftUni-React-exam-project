import React, {useState,useEffect} from 'react'
import styles from '../styles/loginAndRegister.module.css'
import {Link} from 'react-router-dom'
import { auth } from '../firebase';


export const SignUpPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [user, setUser] = useState(null);
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

        auth.createUserWithEmailAndPassword(email,password)
        .then((authUser)=>{
            return authUser.user.updateProfile({
                displayName:username
            })
        })
        .catch(err=>{
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
      <input onChange={updatingPassword} type="password" value={password} name="password" placeholder="Password" required="" />
      <label for="inputPassword">Password</label>
    </div>

    <div >
      <input type="password" name="rePassword" placeholder="Re-Password"
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

