import React from 'react'
import styles from '../styles/posts.module.css'
import Avatar from '@material-ui/core/Avatar'

function Posts({username,caption,imageUrl}) {
    return (
        <div className={styles.post}>
            <div className={styles.username}>
                <Avatar className={styles.avatar} alt=""/>
                <h3>{username}</h3>
            </div>
            <img className={styles.postImage} alt="" src={imageUrl}/>
            <h4 className={styles.postText}><strong>{username}</strong>: {caption}</h4>
        </div>
    )
}

export default Posts
