import React from 'react'
import Logo from "./Logo"
import style from "../styles/header.module.css"
import {Link} from 'react-router-dom'

const Header=()=>{

return(
    <div className={style.header}>
        <Logo />
        <Link to='/sign-up'>
            <button className={style.link}>Sign-Up</button>
        </Link>
        <Link to='/login'>
            <button className={style.link}>Login</button>
        </Link>
    </div>
)
}
export default Header