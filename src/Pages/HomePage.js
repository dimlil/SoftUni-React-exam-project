import React, {
    useState,
    useEffect
} from 'react';
import Header from '../Components/Header';
import Posts from '../Components/Posts';
import {db} from '../firebase'


const HomePage = () => {
    const [posts, setPosts] = useState([]);

    useEffect(()=>{
        db.collection('posts').orderBy('timestamp', 'desc').onSnapshot(snapshot=>{
            setPosts(snapshot.docs.map(doc=>({
                id: doc.id,
                post: doc.data()
            })))
        })
    },[])

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
export default HomePage