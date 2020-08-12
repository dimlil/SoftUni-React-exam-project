import React, { Fragment } from 'react'
import MainLogo from '../pics/logo.png'
import style from '../styles/logo.module.css'
//src="./public/logo.png"
const Logo=()=>{
return(
    <Fragment>
        <img className={style.logo} alt="" src={MainLogo} />
    </Fragment>
)
}
export default Logo