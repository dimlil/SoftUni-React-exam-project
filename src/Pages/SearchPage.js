import React, { useState } from 'react'
import styles from '../styles/UploadImg.module.css'
import {storage,db, auth} from '../firebase'
import firebase from 'firebase'

const UploadPage=(props)=>{
    const [caption,setCaption]= useState('');
    const [image,setImage]= useState(null);
    const [progress,setProgress]= useState('');
    let displayName=""
    
    const user=auth.currentUser;
    if (user != null) {
        user.providerData.forEach((profile)=>{
            displayName=profile.displayName
            console.log(displayName);
        })
    }
    const handleChange=(e)=>{

        if (e.target.files[0]) {
            setImage(e.target.files[0])
        }
    }
    const upload=(event)=>{
        event.preventDefault();
        if(caption===''){
            return alert('Please enter caption')
        }
        const uploadTask=storage.ref(`images/${image.name}`).put(image)
        uploadTask.on(
            "state_changed",
            (snapshot)=>{
                //progress function
                const progressing=Math.round(
                    (snapshot.bytesTransferred/snapshot.totalBytes)*100
                )
                setProgress(progressing)
            },
            (err)=>{
                console.log(err);
                alert(err.message)
            },
            ()=>{
                //when that complite that will execute
                storage
                .ref('images')
                .child(image.name)
                .getDownloadURL()
                .then((url)=>{
                    //post image inside db
                    db.collection('posts').add({
                        timestamp: firebase.firestore.FieldValue.serverTimestamp(),//upload img in top of db and home page
                        caption: caption,
                        imageUrl: url,
                        username: displayName
                    })
                    setProgress(0);
                    setCaption('');
                    setImage(null);
                    props.history.push({
                        pathname: '/'
                    })
                })
            }
        )
    }
    if (user!==null) {
        return (
            <div>
            <form action="#" method="post" className={styles.form}>
                <div>
                <h1 className={styles.uploadHeaderText}>Upload Image</h1>
                </div>
    
                <div>
                <progress className={styles.progress} value={progress} max="100" />
                </div>
            
                <div>
                <input onChange={(event)=>{setCaption(event.target.value);}} type="text" id="inputCaption" value={caption} name="caption" placeholder="Enter a caption" required=""/>
                <label htmlFor="inputCaption">Caption</label>
                </div>
            
                <div>
                <input onChange={handleChange} type="file" id="inputFile" name="password"  required="" />
                <label htmlFor="inputFile">File</label>
                </div>
            
                <button onClick={upload} className={styles.btn}>Upload</button>
            </form>
            </div>
        )
    }
    return(
        <p>error</p>
    )
}

export default UploadPage
