import React,{useState} from 'react'
import Logo from "./Logo"
import style from "../styles/header.module.css"
import {Link} from 'react-router-dom'
import UploadLink from '../Components/UploadLink';
import { auth } from '../firebase'

const Header =()=>{
    const [user, setUser] = useState(auth.currentUser);

    const logout=()=>{
        setUser(null)
        auth.signOut();
    }
        return(
            <div className={style.header}>
                <Link to='/'><Logo /></Link>
                {user != null ? <div className={style.login}>
                    <UploadLink />
                    <Link to='/search'><button className={style.butn}><p className={style.btnText}>Search</p></button></Link> 
                    <button onClick={logout} className={style.butn}><p className={style.btnText}>Sign-Out</p></button>
                </div> : <div>
                <Link to='/sign-up'>
                    <button className={style.butn}><p className={style.btnText}>Sign-Up</p></button>
                </Link>
                <Link to='/login'>
                    <button className={style.butn}><p className={style.btnText}>Login</p></button>
                </Link>
            </div>}
        
            </div>
        )
}
export default Header