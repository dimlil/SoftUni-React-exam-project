import React from 'react'
import styles from '../styles/loginAndRegister.module.css'
import {Link} from 'react-router-dom'


export const SignUpPage = () => {
    return (
        <form action="#" method="post" className={styles.form}>

    <div>
      <h1>Register</h1>
    </div>

    <div >
      <input type="text" id="inputUsername" name="username" placeholder="Username" required=""
        autofocus="" />
      <label for="inputUsername">Username</label>
    </div>

    <div >
      <input type="password" id="inputPassword" name="password" placeholder="Password" required="" />
      <label for="inputPassword">Password</label>
    </div>

    <div >
      <input type="password" id="inputRePassword" name="rePassword" placeholder="Re-Password"
        required="" />
      <label for="inputRePassword">Re-Password</label>
    </div>

    <button className={styles.btn} type="submit">Sign Up</button>

    <div>
      <p className={styles.text}> Already have account? Then just <Link to="/login">Login</Link></p>
    </div>
  </form>
    )
}
export default SignUpPage

