import React, { Fragment }from 'react'
import { Link } from 'react-router-dom'
import styles from '../styles/UploadImg.module.css'

function UploadLink(props) {
    return (
        <Fragment className={styles.foot}>
        <Link to='/upload'>
            <button className={styles.butn}>+</button>
        </Link>
        </Fragment>

    )
}

export default UploadLink
