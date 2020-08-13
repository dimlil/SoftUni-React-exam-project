import React from 'react'
import Logo from "./Logo"
import style from "../styles/header.module.css"
import {Link} from 'react-router-dom'

const Header=()=>{

return(
    <div className={style.header}>
        <Logo />
        <div>
        <Link to='/sign-up'>
            <button className={style.butn}><p className={style.btnText}>Sign-Up</p></button>
        </Link>
        <Link to='/login'>
            <button className={style.butn}><p className={style.btnText}>Login</p></button>
        </Link>
        </div>
    </div>
)
}
export default Header