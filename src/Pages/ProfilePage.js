import React,{useState,useEffect} from 'react'
import Header from '../Components/Header';
import { auth } from '../firebase';
import styles from '../styles/profile.module.css'
import Posts from '../Components/Posts';
import {db} from '../firebase'


function ProfilePage() {
    const user=auth.currentUser;
    const [posts, setPosts] = useState([]);
    const email = user.email;

    useEffect(()=>{
        db.collection('posts').where('email','==',email).orderBy('timestamp','desc').onSnapshot(snapshot=>{
            setPosts(snapshot.docs.map(doc=>({
                id: doc.id,
                post: doc.data()
            })))
        })
    },[])
if(user!==null){

    return (
        <div>
            <Header />
            {
                posts.map(({id,post})=>{
                return (<Posts key={id} username={post.username} caption={post.caption} imageUrl={post.imageUrl} />);
                })
            }

        </div>
    )
}
return(
    <p>Error you must be loged in</p>
)
}

export default ProfilePage
