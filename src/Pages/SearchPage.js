import React, { useState,useEffect } from 'react'
import styles from '../styles/Search.module.css'
import {auth} from '../firebase'
import Header from '../Components/Header'
import Posts from '../Components/Posts';
import {db} from '../firebase'

const SearchPage=()=>{
    const [tags,setTags]= useState('');
    const [posts, setPosts] = useState([]);

    useEffect(()=>{
        db.collection('posts').where('tags','==',tags).orderBy('timestamp','desc').onSnapshot(snapshot=>{
            setPosts(snapshot.docs.map(doc=>({
                id: doc.id,
                post: doc.data()
            })))
        })
    },[tags])
    
    const user=auth.currentUser;

    const handleChange=(e)=>{
        setTags(e.target.value)
    }

    if (user!==null) {
        return (
            <div>
            <Header />
            <form method="post">
                <div>
                <h1 className={styles.searchHeaderText}>Search</h1>
                </div>
            
                <div>
                <input onChange={handleChange} type="text" id="inputTags" value={tags} name="tags" placeholder="Enter a tags" required=""/>
                <label htmlFor="inputCaption">Tags</label>
                </div>

                {
                    posts.map(({id,post})=>{
                    return (<Posts key={id} username={post.username} caption={post.caption} imageUrl={post.imageUrl} />);
                    })
                }

            </form>
            </div>
        )
    }
    if (user===null) {
        return(
        <p>Error you need to be loged</p>
        )    
    }
    return(
        <p>Error</p>
    )
}

export default SearchPage
