import React,{useState} from 'react'
import Logo from "./Logo"
import style from "../styles/header.module.css"
import {Link} from 'react-router-dom'
import { auth } from '../firebase'

const Header =()=>{
    const [isAuth, setIsAuth] = useState(window.$isAuth);
    console.log('Success1',window.$isAuth);
    const logout=()=>{
        window.$isAuth=!window.$isAuth
        setIsAuth(!setIsAuth)
        auth.signOut();
        console.log('Success',isAuth);
        console.log('Success2',window.$isAuth);
    }
        return(
            
            <div className={style.header}>
                <Logo />
                {isAuth ? <div>
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