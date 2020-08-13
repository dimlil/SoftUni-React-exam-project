import React, {useState} from 'react'
import styles from '../styles/loginAndRegister.module.css'
import {Link} from 'react-router-dom'

export const Login = () => {
    return (
        <div>
        <form action="#" method="post" className={styles.form}>
            <div>
            <h1 className={styles.login}>Login</h1>
            </div>
        
            <div>
            <input type="text" id="inputUsername" name="username" placeholder="Username" required="" autofocus="" />
            <label for="inputUsername">Username</label>
            </div>
        
            <div class="form-label-group">
            <input type="password" id="inputPassword" name="password" placeholder="Password" required="" />
            <label for="inputPassword">Password</label>
            </div>
        
            <button className={styles.btn} type="submit">Sign In</button>
        
            <div>
            <p className={styles.text}> Don't have account?  Then just <Link to="/sign-up">Sign Up</Link></p>

            </div>
        </form>
        </div>
    )
}
export default Login

