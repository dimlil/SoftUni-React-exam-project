import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../styles/UploadImg.module.css'

function UploadLink(props) {
    return (
        <div className={styles.foot}>
        <Link to='/upload'>
            <button className={styles.butn}><p>+</p></button>
        </Link>
        </div>

    )
}

export default UploadLink
