import React from 'react'
import Logo from "./Logo"
import style from "../styles/header.module.css"
const Header=()=>{
return(
    <div className={style.header}>
        <Logo />
    </div>
)
}
export default Header