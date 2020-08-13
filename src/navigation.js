import React from 'react'
import './styles/navigation.module.css'
import HomePage from './Pages/HomePage'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import SignUpPage from './Pages/SignUpPage'
import LoginPage from './Pages/LoginPage'


const Navigation=()=>{
return(
    <div>   
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={HomePage}/>
                <Route path="/sign-up" component={SignUpPage}/>
                <Route path="/login" component={LoginPage}/>
            </Switch>
        </BrowserRouter>
    </div>
)
}
export default Navigation