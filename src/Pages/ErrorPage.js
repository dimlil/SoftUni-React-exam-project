import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../styles/error.module.css'

const ErrorPage = () => {
    return (
        <div>
            <h1 className={styles.err}>ERROR 404! <br /> Page not found</h1>
            <p className={styles.errText}>If you want to go to Home Page <Link to="/">click here</Link></p>
        </div>
    )
}

export default ErrorPage
