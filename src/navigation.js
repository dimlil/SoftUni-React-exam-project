import React from 'react'
import './styles/navigation.module.css'
import HomePage from './Pages/HomePage'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import SignUpPage from './Pages/SignUpPage'
import LoginPage from './Pages/LoginPage'
import UploadPage from './Pages/UploadPage'
import SearchPage from './Pages/SearchPage'
import ProfilePage from './Pages/ProfilePage'
import ErrorPage from './Pages/ErrorPage'

const Navigation=()=>{
return(
    <div>   
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={HomePage}/>
                <Route path="/sign-up" component={SignUpPage}/>
                <Route path="/login" component={LoginPage}/>
                <Route path="/upload" component={UploadPage}/>
                <Route path="/search" component={SearchPage}/>
                <Route path="/profile" component={ProfilePage}/>
                <Route path="/*" component={ErrorPage}/>
            </Switch>
        </BrowserRouter>
    </div>
)
}
export default Navigation