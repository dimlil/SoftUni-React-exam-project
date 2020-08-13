import React from 'react'
import styles from '../styles/loginAndRegister.module.css'

export const Login = () => {
    return (
        <div>
        <form action="#" method="post" className={styles.form}>
            <div>
            <h1>Login</h1>
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
            <p> Don't have account? <br /> Then just </p>

            </div>
        </form>
        </div>
    )
}
export default Login

