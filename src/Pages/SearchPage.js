import React, { useState } from 'react'
import styles from '../styles/Search.module.css'
import {auth} from '../firebase'
import Header from '../Components/Header'

const SearchPage=(props)=>{
    const [tags,setTags]= useState('');
    
    const user=auth.currentUser;
    const handleChange=(e)=>{

    }
    if (user!==null) {
        return (
            <div>
            <Header />
            <form action="#" method="post">
                <div>
                <h1 className={styles.searchHeaderText}>Search</h1>
                </div>
            
                <div>
                <input onChange={handleChange} type="text" id="inputCaption" value={tags} name="caption" placeholder="Enter a tags" required=""/>
                <label htmlFor="inputCaption">Tags</label>
                </div>

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
